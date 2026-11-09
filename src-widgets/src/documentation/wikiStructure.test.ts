import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Structure gate for the wiki sources: what `.github/workflows/sync-wiki.yml` and the GitHub
 * wiki make of them. It checks form only, never wording, H2 fidelity or field coverage.
 *
 * Every rule reads a WikiTree, so the self-tests run the very same rules on small sample
 * trees: a rule that never fires fails there, not silently on the real sources.
 */
const DOCS_DIR = __dirname;

/** What a rule looks at: the sources the sync copies, plus the raw folder listings. */
interface WikiTree {
    /** Text of every page the sync copies, by path below the documentation root. */
    pages: Record<string, string>;
    /** Direct entries of the source folders; directories carry a trailing slash. */
    folders: { de: string[]; en: string[]; img: string[] };
}

interface Violation {
    file: string;
    line: number;
    rule: string;
    message: string;
}

const report = (violations: Violation[]): string[] =>
    violations.map(v => `${v.file}:${v.line} [${v.rule}] ${v.message}`);

/** GitHub derives the page title from the file name and rejects these characters in it. */
const FORBIDDEN_NAME_CHARS = /[\\:*?"<>|]/;

/** Page files per folder: the sync's `cp` globs, and flat pages after copying. */
const fileNameViolations = (tree: WikiTree): Violation[] => {
    const violations: Violation[] = [];
    for (const [folder, prefix] of [
        ['de', 'De-'],
        ['en', 'En-'],
    ] as const) {
        for (const name of tree.folders[folder]) {
            const file = `${folder}/${name}`;
            if (!name.startsWith(prefix) || !name.endsWith('.md')) {
                violations.push({
                    file,
                    line: 1,
                    rule: 'file-name',
                    message: `${folder}/ may only hold ${prefix}*.md files; the sync skips anything else`,
                });
            } else if (FORBIDDEN_NAME_CHARS.test(name)) {
                violations.push({
                    file,
                    line: 1,
                    rule: 'file-name',
                    message: `the wiki forbids the characters \\ / : * ? " < > | in a page name`,
                });
            }
        }
    }
    for (const name of ['Home.md', '_Sidebar.md']) {
        if (tree.pages[name] === undefined) {
            violations.push({
                file: name,
                line: 1,
                rule: 'file-name',
                message: 'required by the sync, which copies it unconditionally',
            });
        }
    }
    return violations;
};

interface Line {
    number: number;
    raw: string;
    /** The raw line with code and backslash escapes blanked, so columns still match `raw`. */
    prose: string;
    /** heading-1…heading-6, table, fence, code (inside a fence), blank, quote, list or text. */
    kind: string;
}

/**
 * Blanks code spans and backslash escapes. A span closes at the next backtick run of the same
 * length; an unclosed run is literal text. Spans across lines are not followed.
 */
const blankInlineCode = (raw: string): string => {
    let prose = '';
    let i = 0;
    while (i < raw.length) {
        if (raw[i] === '\\' && i + 1 < raw.length) {
            prose += '  ';
            i += 2;
        } else if (raw[i] === '`') {
            const run = /^`+/.exec(raw.slice(i))![0];
            const after = i + run.length;
            const closing = [...raw.slice(after).matchAll(/`+/g)].find(m => m[0].length === run.length);
            if (closing) {
                const end = after + closing.index + run.length;
                prose += ' '.repeat(end - i);
                i = end;
            } else {
                prose += run;
                i = after;
            }
        } else {
            prose += raw[i];
            i++;
        }
    }
    return prose;
};

const scanLines = (text: string): Line[] => {
    const rawLines = text.split(/\r?\n/);
    if (rawLines[rawLines.length - 1] === '') {
        rawLines.pop();
    }
    let openFence: string | null = null;
    return rawLines.map((raw, index) => {
        const number = index + 1;
        const fence = /^\s*(`{3,}|~{3,})(.*)$/.exec(raw);
        if (openFence !== null) {
            const closes =
                fence !== null &&
                fence[1][0] === openFence[0] &&
                fence[1].length >= openFence.length &&
                fence[2].trim() === '';
            if (closes) {
                openFence = null;
            }
            return { number, raw, prose: '', kind: closes ? 'fence' : 'code' };
        }
        if (fence) {
            openFence = fence[1];
            return { number, raw, prose: '', kind: 'fence' };
        }
        const heading = /^ {0,3}(#{1,6})(?:\s|$)/.exec(raw);
        const kind = heading
            ? `heading-${heading[1].length}`
            : /^\s*\|/.test(raw)
              ? 'table'
              : raw.trim() === ''
                ? 'blank'
                : /^\s*>/.test(raw)
                  ? 'quote'
                  : /^\s*(?:[-*+]|\d+[.)])\s/.test(raw)
                    ? 'list'
                    : 'text';
        return { number, raw, prose: blankInlineCode(raw), kind };
    });
};

/** Constructs the live wiki has not proven; Mermaid is a code block and stays allowed. */
const FORBIDDEN_CONSTRUCTS: { rule: string; pattern: RegExp; message: string }[] = [
    {
        rule: 'inline-html',
        pattern: /<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s[^<>]*)?\/?>|<!(?:--|[a-zA-Z[])|<\?/,
        message: 'inline HTML is not allowed; write it as code or use plain Markdown',
    },
    {
        rule: 'alert-box',
        pattern: /^\s*>\s*\[![a-zA-Z]+\]/,
        message: 'alert boxes are not allowed; use a plain blockquote with a bold lead-in',
    },
    { rule: 'footnote', pattern: /\[\^[^\]\s]+\]/, message: 'footnotes are not allowed' },
    {
        rule: 'wiki-link',
        pattern: /\[\[[^[\]]+\]\]/,
        message: '[[wiki links]] are not allowed; link as [Text](De-Xxx.md)',
    },
];

const constructViolations = (tree: WikiTree): Violation[] =>
    Object.entries(tree.pages).flatMap(([file, text]) =>
        scanLines(text).flatMap(line =>
            FORBIDDEN_CONSTRUCTS.filter(({ pattern }) => pattern.test(line.prose)).map(({ rule, message }) => ({
                file,
                line: line.number,
                rule,
                message,
            })),
        ),
    );

interface Ref {
    target: string;
    image: boolean;
    /** Column of the target within the raw line. */
    column: number;
}

/** Every inline link and image of a line; brackets nest, so `[![a](b)](c)` yields both. */
const refsIn = (line: Line): Ref[] => {
    const refs: Ref[] = [];
    const openBrackets: number[] = [];
    for (let i = 0; i < line.prose.length; i++) {
        if (line.prose[i] === '[') {
            openBrackets.push(i);
        } else if (line.prose[i] === ']') {
            const start = openBrackets.pop();
            const destination = /^\(\s*<?([^\s<>)]*)>?(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)/.exec(line.prose.slice(i + 1));
            if (start !== undefined && destination) {
                refs.push({
                    target: destination[1],
                    image: line.prose[start - 1] === '!',
                    column: i + 1 + destination[0].indexOf(destination[1]),
                });
            }
        }
    }
    return refs;
};

const isExternal = (target: string): boolean => /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|\/\/)/.test(target);

/** Splits an internal link target; `path` is empty for an anchor on the same page. */
const splitTarget = (target: string): { path: string; anchor: string | null } => {
    const hash = target.indexOf('#');
    return hash < 0 ? { path: target, anchor: null } : { path: target.slice(0, hash), anchor: target.slice(hash + 1) };
};

/** Pages are flat in the wiki, so a link names the file without its source folder. */
const flatName = (path: string): string => path.slice(path.lastIndexOf('/') + 1);

/** Runs `check` on every link (not image) of every page. */
const eachLink = (
    tree: WikiTree,
    check: (file: string, line: Line, ref: Ref) => Violation | null,
    files: string[] = Object.keys(tree.pages),
): Violation[] =>
    files.flatMap(file =>
        scanLines(tree.pages[file] ?? '').flatMap(line =>
            refsIn(line)
                .filter(ref => !ref.image)
                .map(ref => check(file, line, ref))
                .filter(violation => violation !== null),
        ),
    );

const linkViolations = (tree: WikiTree): Violation[] => {
    const pageNames = new Set(Object.keys(tree.pages).map(flatName));
    return eachLink(tree, (file, line, { target }) => {
        if (isExternal(target)) {
            return null;
        }
        const { path } = splitTarget(target);
        if (path === '') {
            return null;
        }
        if (!/^[^/\\]+\.md$/.test(path)) {
            return {
                file,
                line: line.number,
                rule: 'link-form',
                message: `"${target}": page links take the flat form De-Xxx.md, because the wiki has no folders`,
            };
        }
        if (!pageNames.has(path)) {
            return {
                file,
                line: line.number,
                rule: 'link-target',
                message: `"${target}": no such page among Home.md, _Sidebar.md, de/De-*.md and en/En-*.md`,
            };
        }
        return null;
    });
};

const sidebarViolations = (tree: WikiTree): Violation[] => {
    const pageNames = new Set(Object.keys(tree.pages).map(flatName));
    const listed = new Set<string>();
    const broken = eachLink(
        tree,
        (file, line, { target }) => {
            const { path } = splitTarget(target);
            if (!isExternal(target) && pageNames.has(path)) {
                listed.add(path);
                return null;
            }
            return {
                file,
                line: line.number,
                rule: 'sidebar-link',
                message: `"${target}" does not lead to an existing page`,
            };
        },
        ['_Sidebar.md'],
    );
    const unlisted = Object.keys(tree.pages)
        .filter(path => /^(?:de|en)\//.test(path) && !listed.has(flatName(path)))
        .map(path => ({
            file: path,
            line: 1,
            rule: 'sidebar-page',
            message: `add a link to ${flatName(path)} in _Sidebar.md`,
        }));
    return [...broken, ...unlisted];
};

/** The text GitHub renders for a heading line: markers, links, images and emphasis gone. */
const headingText = (raw: string): string =>
    raw
        .replace(/^ {0,3}#{1,6}/, '')
        .trim()
        .replace(/\s+#+$/, '')
        .split(/(`+[^`]*`+)/)
        .map((part, index) =>
            index % 2 === 1
                ? part
                : part
                      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
                      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
                      .replace(/(?<![\p{L}\p{N}])_+|_+(?![\p{L}\p{N}])/gu, ''),
        )
        .join('');

/**
 * Heading anchors the way GitHub computes them (github-slugger): lowercase, punctuation gone,
 * umlauts kept, each space a hyphen, duplicates counted up past any anchor already taken.
 */
const anchorsOf = (text: string): string[] => {
    const counts = new Map<string, number>();
    return scanLines(text)
        .filter(line => line.kind.startsWith('heading-'))
        .map(line => {
            const base = headingText(line.raw)
                .toLowerCase()
                .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, '')
                .replace(/ /g, '-');
            let anchor = base;
            while (counts.has(anchor)) {
                const next = (counts.get(base) ?? 0) + 1;
                counts.set(base, next);
                anchor = `${base}-${next}`;
            }
            counts.set(anchor, 0);
            return anchor;
        });
};

const anchorViolations = (tree: WikiTree): Violation[] => {
    const pathByName = new Map(Object.keys(tree.pages).map(path => [flatName(path), path]));
    return eachLink(tree, (file, line, { target }) => {
        const { path, anchor } = splitTarget(target);
        const targetFile = path === '' ? file : pathByName.get(path);
        if (isExternal(target) || anchor === null || targetFile === undefined) {
            return null;
        }
        return anchorsOf(tree.pages[targetFile]).includes(anchor)
            ? null
            : {
                  file,
                  line: line.number,
                  rule: 'anchor',
                  message: `"#${anchor}" matches no heading on ${targetFile}; anchors follow the GitHub calculation (e.g. "A & B" → #a--b)`,
              };
    });
};

/** The sync's `sed 's|../img/|img/|g'` as written: its dots match any character. */
const SYNC_REWRITE = /..\/img\//g;
const IMAGE_SOURCE = /^\.\.\/img\/([^/]+)$/;

const imageViolations = (tree: WikiTree): Violation[] => {
    const violations: Violation[] = [];
    for (const [file, text] of Object.entries(tree.pages)) {
        for (const line of scanLines(text)) {
            const images = refsIn(line).filter(ref => ref.image);
            const push = (rule: string, message: string): void => {
                violations.push({ file, line: line.number, rule, message });
            };
            for (const { target } of images) {
                const source = IMAGE_SOURCE.exec(target);
                if (!source) {
                    push('image-path', `"${target}": write images as ../img/name.png; the sync rewrites this form`);
                } else if (!tree.folders.img.includes(source[1])) {
                    push('image-file', `"${target}": no such file in img/`);
                }
            }
            const imageColumns = new Set(images.filter(ref => ref.target.startsWith('../')).map(ref => ref.column));
            for (const match of line.raw.matchAll(SYNC_REWRITE)) {
                if (!imageColumns.has(match.index)) {
                    push(
                        'image-string',
                        `"${match[0]}" outside an image reference: the sync's sed rewrites it to img/ everywhere, code included`,
                    );
                }
            }
        }
    }
    for (const name of tree.folders.img) {
        if (name.endsWith('/')) {
            violations.push({
                file: `img/${name}`,
                line: 1,
                rule: 'image-folder',
                message: "subfolders break the sync's cp of img/*",
            });
        } else if (!/\.(?:png|jpe?g|gif)$/i.test(name)) {
            violations.push({
                file: `img/${name}`,
                line: 1,
                rule: 'image-folder',
                message: 'the wiki only supports PNG, JPEG and GIF images',
            });
        }
    }
    return violations;
};

/** Only this pair's names differ beyond the language prefix. */
const PAIR_NAME_EXCEPTIONS: Record<string, string> = { 'Echarts-JSON-Formate': 'Echarts-JSON-Formats' };

/** The language-neutral name of a page; `Home.md` stays apart from `De-Home.md`. */
const neutralName = (name: string): string => {
    const prefixed = /^(?:De|En)-(.*)\.md$/.exec(name);
    return prefixed ? `*-${PAIR_NAME_EXCEPTIONS[prefixed[1]] ?? prefixed[1]}` : name;
};

/** A link target with language prefix and anchor gone; a same-page anchor stays a mere `#`. */
const neutralTarget = (target: string): string => {
    if (isExternal(target)) {
        return target;
    }
    const { path } = splitTarget(target);
    return path === '' ? '#' : neutralName(path);
};

const sortedTargets = (refs: Ref[], normalize: (target: string) => string): string =>
    refs
        .map(ref => normalize(ref.target))
        .sort()
        .join(' ');

const excerpt = (line: Line): string => `"${line.raw.trim().slice(0, 60)}"`;

/** The first line of a pair that breaks line-by-line parity; later ones are mostly follow-ups. */
const firstParityBreak = (dePath: string, de: Line[], enPath: string, en: Line[]): Violation | null => {
    for (let i = 0; i < Math.max(de.length, en.length); i++) {
        const [deLine, enLine] = [de[i], en[i]];
        if (!deLine || !enLine) {
            const [file, extra] = deLine ? [dePath, deLine] : [enPath, enLine];
            return {
                file,
                line: extra.number,
                rule: 'parity-lines',
                message: `${de.length} lines in ${dePath}, ${en.length} in ${enPath}; this is the first line without a partner: ${excerpt(extra)}`,
            };
        }
        const where = `${enPath}:${enLine.number}`;
        const deRefs = refsIn(deLine);
        const enRefs = refsIn(enLine);
        const deImages = sortedTargets(
            deRefs.filter(ref => ref.image),
            target => target,
        );
        const enImages = sortedTargets(
            enRefs.filter(ref => ref.image),
            target => target,
        );
        const deLinks = sortedTargets(
            deRefs.filter(ref => !ref.image),
            neutralTarget,
        );
        const enLinks = sortedTargets(
            enRefs.filter(ref => !ref.image),
            neutralTarget,
        );
        const [rule, message] =
            deLine.kind !== enLine.kind
                ? [
                      'parity-kind',
                      `${deLine.kind} ${excerpt(deLine)}, but ${where} is ${enLine.kind} ${excerpt(enLine)}`,
                  ]
                : deImages !== enImages
                  ? ['parity-image', `images [${deImages}], but ${where} has [${enImages}]`]
                  : deLinks !== enLinks
                    ? ['parity-link', `link targets [${deLinks}], but ${where} has [${enLinks}]`]
                    : [null, ''];
        if (rule) {
            return { file: dePath, line: deLine.number, rule, message };
        }
    }
    return null;
};

const parityViolations = (tree: WikiTree): Violation[] => {
    const pages = Object.keys(tree.pages);
    const enByName = new Map(
        pages.filter(path => path.startsWith('en/')).map(path => [neutralName(flatName(path)), path]),
    );
    const violations: Violation[] = [];
    for (const dePath of pages.filter(path => path.startsWith('de/'))) {
        const name = neutralName(flatName(dePath));
        const enPath = enByName.get(name);
        enByName.delete(name);
        if (enPath === undefined) {
            violations.push({
                file: dePath,
                line: 1,
                rule: 'parity-pair',
                message: 'no English partner page in en/',
            });
        } else {
            const parityBreak = firstParityBreak(
                dePath,
                scanLines(tree.pages[dePath]),
                enPath,
                scanLines(tree.pages[enPath]),
            );
            if (parityBreak) {
                violations.push(parityBreak);
            }
        }
    }
    for (const enPath of enByName.values()) {
        violations.push({ file: enPath, line: 1, rule: 'parity-pair', message: 'no German partner page in de/' });
    }
    return violations;
};

const listFolder = (name: string): string[] =>
    readdirSync(join(DOCS_DIR, name), { withFileTypes: true }).map(e => (e.isDirectory() ? `${e.name}/` : e.name));

const readWikiTree = (): WikiTree => {
    const folders = { de: listFolder('de'), en: listFolder('en'), img: listFolder('img') };
    const paths = [
        ...['Home.md', '_Sidebar.md'].filter(name => readdirSync(DOCS_DIR).includes(name)),
        ...folders.de.filter(name => /^De-.*\.md$/.test(name)).map(name => `de/${name}`),
        ...folders.en.filter(name => /^En-.*\.md$/.test(name)).map(name => `en/${name}`),
    ];
    return {
        pages: Object.fromEntries(paths.map(path => [path, readFileSync(join(DOCS_DIR, path), 'utf8')])),
        folders,
    };
};

/** Smallest tree that passes every rule; each self-test breaks exactly one thing in it. */
const validTree = (): WikiTree => ({
    pages: {
        'Home.md': '# Home\n\n[Deutsch](De-Home.md)\n',
        '_Sidebar.md': '- [Deutsch](De-Home.md)\n- [English](En-Home.md)\n',
        'de/De-Home.md': '# Start\n\n![Bild](../img/a.png)\n\nSiehe [Englisch](En-Home.md).\n',
        'en/En-Home.md': '# Start\n\n![Image](../img/a.png)\n\nSee [German](De-Home.md).\n',
    },
    folders: { de: ['De-Home.md'], en: ['En-Home.md'], img: ['a.png'] },
});

/** The file:line [rule] part of each violation, which is what the self-tests pin down. */
const fired = (violations: Violation[]): string[] => violations.map(v => `${v.file}:${v.line} [${v.rule}]`);

describe('wiki rules fire on sample text', () => {
    describe('file names', () => {
        it('accepts the valid tree', () => {
            expect(fired(fileNameViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['de/ holds a file without De- prefix', 'de', 'Home.md', 'de/Home.md:1 [file-name]'],
            ['en/ holds a German page', 'en', 'De-Home.md', 'en/De-Home.md:1 [file-name]'],
            ['de/ holds a file with a wrong extension', 'de', 'De-Notes.txt', 'de/De-Notes.txt:1 [file-name]'],
            ['de/ holds a subfolder', 'de', 'De-Sub/', 'de/De-Sub/:1 [file-name]'],
            ['a page name holds a forbidden character', 'de', 'De-A:B.md', 'de/De-A:B.md:1 [file-name]'],
            ['a page name holds a question mark', 'en', 'En-A?.md', 'en/En-A?.md:1 [file-name]'],
        ] as const)('%s', (_label, folder, name, expected) => {
            const tree = validTree();
            tree.folders[folder].push(name);
            expect(fired(fileNameViolations(tree))).toEqual([expected]);
        });

        it.each(['Home.md', '_Sidebar.md'])('%s is missing', name => {
            const tree = validTree();
            delete tree.pages[name];
            expect(fired(fileNameViolations(tree))).toEqual([`${name}:1 [file-name]`]);
        });
    });

    describe('markdown constructs', () => {
        const page = (text: string): WikiTree => {
            const tree = validTree();
            tree.pages['de/De-Home.md'] = text;
            return tree;
        };

        it('accepts the valid tree', () => {
            expect(fired(constructViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['an inline HTML tag', 'Text<br>mehr', 'inline-html'],
            ['a closing HTML tag', 'Text</span>', 'inline-html'],
            ['an HTML tag with attributes', '<span style="color: red">x</span>', 'inline-html'],
            ['a self-closing HTML tag', 'a <img src="a.png"/> b', 'inline-html'],
            ['an HTML comment', '<!-- todo -->', 'inline-html'],
            ['an alert box', '> [!NOTE]', 'alert-box'],
            ['a lowercase alert box', '> [!warning]', 'alert-box'],
            ['a footnote reference', 'Text[^1]', 'footnote'],
            ['a footnote definition', '[^note]: Text', 'footnote'],
            ['a wiki link', 'Siehe [[De-Home]]', 'wiki-link'],
            ['a wiki link with a title', 'Siehe [[Start|De-Home]]', 'wiki-link'],
        ])('%s', (_label, line, rule) => {
            expect(fired(constructViolations(page(`# Start\n\n${line}\n`)))).toEqual([`de/De-Home.md:3 [${rule}]`]);
        });

        it.each([
            ['inline code', 'Der Wert `<br>` und `[[a]]` und `[^1]`'],
            ['a double-backtick span', 'Der Wert ``<br> ` [[a]]``'],
            ['an escaped bracket', 'Der Wert \\<br> und \\[[a]]'],
            ['a comparison', 'wenn a < b und b > c'],
            ['an autolink', 'Siehe <https://example.com/a>'],
            ['a nested JSON array', 'Daten [[1,2],[3,4]]'],
            ['a plain blockquote', '> **Hinweis:** Text'],
        ])('leaves %s alone', (_label, line) => {
            expect(fired(constructViolations(page(`# Start\n\n${line}\n`)))).toEqual([]);
        });

        it('leaves code blocks alone, mermaid included', () => {
            const text = '```mermaid\ngraph TD; A-->B\n```\n\n```html\n<br>\n[[a]]\n[^1]\n> [!NOTE]\n```\n';
            expect(fired(constructViolations(page(text)))).toEqual([]);
        });

        it('leaves a tilde fence alone and does not end it at a backtick fence', () => {
            expect(fired(constructViolations(page('~~~\n```\n<br>\n~~~\n')))).toEqual([]);
        });

        it('resumes after the closing fence', () => {
            expect(fired(constructViolations(page('```\n<br>\n```\n<br>\n')))).toEqual([
                'de/De-Home.md:4 [inline-html]',
            ]);
        });

        it.each(['Home.md', '_Sidebar.md'])('also checks %s', name => {
            const tree = validTree();
            tree.pages[name] = '<br>\n';
            expect(fired(constructViolations(tree))).toEqual([`${name}:1 [inline-html]`]);
        });
    });

    describe('page links', () => {
        const withLine = (line: string): WikiTree => {
            const tree = validTree();
            tree.pages['de/De-Home.md'] = `# Start\n\n${line}\n`;
            return tree;
        };

        it('accepts the valid tree', () => {
            expect(fired(linkViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['a link without the .md form', '[Text](En-Home)', 'link-form'],
            ['a link into a language folder', '[Text](../en/En-Home.md)', 'link-form'],
            ['a link with a dot prefix', '[Text](./En-Home.md)', 'link-form'],
            ['a link to a page that does not exist', '[Text](De-Nope.md)', 'link-target'],
            ['a link in the wrong case', '[Text](en-home.md)', 'link-target'],
            ['a link to a page the sync does not copy', '[Text](README.md)', 'link-target'],
        ])('%s', (_label, line, rule) => {
            expect(fired(linkViolations(withLine(line)))).toEqual([`de/De-Home.md:3 [${rule}]`]);
        });

        it.each([
            ['an external link', '[Text](https://example.com/a.md)'],
            ['a mail link', '[Text](mailto:a@example.com)'],
            ['a link with a title', '[Text](En-Home.md "Titel")'],
            ['a link in inline code', '`[Text](De-Nope.md)`'],
            ['a link with inline code in its text', '[`Text`](En-Home.md)'],
            ['an image wrapped in a link', '[![Bild](../img/a.png)](En-Home.md)'],
        ])('leaves %s alone', (_label, line) => {
            expect(fired(linkViolations(withLine(line)))).toEqual([]);
        });

        it('leaves a link in a code block alone', () => {
            expect(fired(linkViolations(withLine('```\n[Text](De-Nope.md)\n```')))).toEqual([]);
        });

        it('reports every broken link of a line, naming the target', () => {
            const violations = linkViolations(withLine('[a](De-Nope.md) und [b](De-Auch-Nicht.md)'));
            expect(violations.map(v => v.message).join()).toContain('De-Nope.md');
            expect(violations.map(v => v.message).join()).toContain('De-Auch-Nicht.md');
        });
    });

    describe('sidebar', () => {
        it('accepts the valid tree', () => {
            expect(fired(sidebarViolations(validTree()))).toEqual([]);
        });

        it('a sidebar link to a page that does not exist', () => {
            const tree = validTree();
            tree.pages['_Sidebar.md'] += '- [Fehlt](De-Nope.md)\n';
            expect(fired(sidebarViolations(tree))).toEqual(['_Sidebar.md:3 [sidebar-link]']);
        });

        it('a sidebar link that is not a page', () => {
            const tree = validTree();
            tree.pages['_Sidebar.md'] += '- [Extern](https://example.com)\n';
            expect(fired(sidebarViolations(tree))).toEqual(['_Sidebar.md:3 [sidebar-link]']);
        });

        it.each([
            ['de/De-Neu.md', 'de/De-Neu.md:1 [sidebar-page]'],
            ['en/En-New.md', 'en/En-New.md:1 [sidebar-page]'],
        ])('%s is missing from the sidebar', (path, expected) => {
            const tree = validTree();
            tree.pages[path] = '# Neu\n';
            expect(fired(sidebarViolations(tree))).toEqual([expected]);
        });

        it('a sidebar link in inline code does not list a page', () => {
            const tree = validTree();
            tree.pages['de/De-Neu.md'] = '# Neu\n';
            tree.pages['_Sidebar.md'] += '- `[Neu](De-Neu.md)`\n';
            expect(fired(sidebarViolations(tree))).toEqual(['de/De-Neu.md:1 [sidebar-page]']);
        });
    });

    describe('anchors', () => {
        it.each([
            ['## Sektion Schrift & Form', 'sektion-schrift--form'],
            ['# ECharts Widget – JSON-Formate', 'echarts-widget--json-formate'],
            ['### Änderungsdialog', 'änderungsdialog'],
            ['### Bild-Spalte (Formattyp `image`)', 'bild-spalte-formattyp-image'],
            ['## Familie „Serien-Dokument"', 'familie-serien-dokument'],
            ['### 1. Wert-Zuordnung (`valueMap`, optional je Serie)', '1-wert-zuordnung-valuemap-optional-je-serie'],
            ['## **Fett** und *kursiv*', 'fett-und-kursiv'],
            ['## _kursiv_ und snake_case', 'kursiv-und-snake_case'],
            ['## `_kept_` im Code', '_kept_-im-code'],
            ['## [Verlinkt](De-Home.md) Titel', 'verlinkt-titel'],
            ['## 🇩🇪 Deutsch', '-deutsch'],
            ['## Geschlossen ##', 'geschlossen'],
            ['##   Eingerückt   ', 'eingerückt'],
        ])('%s anchors as %s', (heading, anchor) => {
            expect(anchorsOf(`${heading}\n`)).toEqual([anchor]);
        });

        it('counts duplicates up from the second occurrence', () => {
            expect(anchorsOf('## Thumb\n\n## Thumb\n\n### Thumb\n')).toEqual(['thumb', 'thumb-1', 'thumb-2']);
        });

        it('skips a counter a literal heading already took', () => {
            expect(anchorsOf('## A-1\n\n## A\n\n## A\n')).toEqual(['a-1', 'a', 'a-2']);
        });

        it('does not take headings from code blocks', () => {
            expect(anchorsOf('```\n# Kommentar\n```\n\n## Echt\n')).toEqual(['echt']);
        });

        const withLink = (extra: string, link: string): WikiTree => {
            const tree = validTree();
            tree.pages['de/De-Home.md'] = `# Start\n\n${extra}\n\n${link}\n`;
            return tree;
        };

        it('accepts the valid tree', () => {
            expect(fired(anchorViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['an anchor on the same page', '## Echt', '[a](#echt)'],
            ['an anchor on another page', '', '[a](En-Home.md#start)'],
            ['the same page named explicitly', '## Echt', '[a](De-Home.md#echt)'],
            ['a counted duplicate', '## Start', '[a](#start-1)'],
            ['an external link with a fragment', '', '[a](https://example.com/#nope)'],
            ['a link to a missing page, reported by the link rule', '', '[a](De-Nope.md#nope)'],
        ])('accepts %s', (_label, extra, link) => {
            expect(fired(anchorViolations(withLink(extra, link)))).toEqual([]);
        });

        it.each([
            ['a missing anchor on the same page', '', '[a](#nope)'],
            ['a missing anchor on another page', '', '[a](En-Home.md#nope)'],
            ['an anchor in the wrong case', '', '[a](#Start)'],
            ['an empty anchor', '', '[a](#)'],
            ['an anchor to a heading in a code block only', '```\n# Kommentar\n```', '[a](#kommentar)'],
            ['a duplicate counter too high', '## Start', '[a](#start-2)'],
        ])('%s', (_label, extra, link) => {
            const line = 3 + extra.split('\n').length + 1;
            expect(fired(anchorViolations(withLink(extra, link)))).toEqual([`de/De-Home.md:${line} [anchor]`]);
        });

        it('names the anchor and the target page', () => {
            const [violation] = anchorViolations(withLink('', '[a](En-Home.md#nope)'));
            expect(violation.message).toContain('#nope');
            expect(violation.message).toContain('en/En-Home.md');
        });
    });

    describe('images', () => {
        const withLine = (line: string): WikiTree => {
            const tree = validTree();
            tree.pages['de/De-Home.md'] = `# Start\n\n${line}\n`;
            return tree;
        };

        it('accepts the valid tree', () => {
            expect(fired(imageViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['a missing file', '![Bild](../img/nope.png)', 'image-file'],
            ['a file in the wrong case', '![Bild](../img/A.png)', 'image-file'],
            ['the wiki path form', '![Bild](img/a.png)', 'image-path'],
            ['a subfolder path', '![Bild](../img/sub/a.png)', 'image-path'],
            ['an external image', '![Bild](https://example.com/a.png)', 'image-path'],
        ])('%s', (_label, line, rule) => {
            expect(fired(imageViolations(withLine(line)))).toEqual([`de/De-Home.md:3 [${rule}]`]);
        });

        // The sync's sed rewrites `../img/` everywhere, and its dots match any character.
        it.each([
            ['in running text', 'Pfad ../img/ steht im Text'],
            ['in inline code', 'Pfad `../img/a.png` im Code'],
            ['in a plain link', '[Bild](../img/a.png)'],
            ['after any two characters, as sed reads the dots', 'Siehe https://example.com/img/a.png'],
            ['in a table row', '| Pfad | ../img/ |'],
        ])('the rewritten string %s', (_label, line) => {
            expect(fired(imageViolations(withLine(line)))).toEqual(['de/De-Home.md:3 [image-string]']);
        });

        it('the rewritten string in a code block', () => {
            expect(fired(imageViolations(withLine('```\n../img/a.png\n```')))).toEqual([
                'de/De-Home.md:4 [image-string]',
            ]);
        });

        it('the rewritten string on a line that also holds a valid image', () => {
            expect(fired(imageViolations(withLine('![Bild](../img/a.png) aus ../img/')))).toEqual([
                'de/De-Home.md:3 [image-string]',
            ]);
        });

        it.each(['Home.md', '_Sidebar.md'])('the rewritten string in %s', name => {
            const tree = validTree();
            tree.pages[name] += 'Pfad ../img/\n';
            const line = tree.pages[name].split('\n').length - 1;
            expect(fired(imageViolations(tree))).toEqual([`${name}:${line} [image-string]`]);
        });

        it.each([
            ['an image with a title', '![Bild](../img/a.png "Titel")'],
            ['an image wrapped in a link', '[![Bild](../img/a.png)](En-Home.md)'],
            ['two images on a line', '![a](../img/a.png) ![b](../img/a.png)'],
            ['/img/ at the start of a line', '/img/ allein'],
            ['a mention of img/ alone', 'Ablage img/a.png'],
        ])('leaves %s alone', (_label, line) => {
            expect(fired(imageViolations(withLine(line)))).toEqual([]);
        });

        it.each([
            ['a subfolder', 'sub/', 'img/sub/:1 [image-folder]'],
            ['an SVG', 'b.svg', 'img/b.svg:1 [image-folder]'],
            ['a WebP', 'b.webp', 'img/b.webp:1 [image-folder]'],
        ])('img/ holds %s', (_label, name, expected) => {
            const tree = validTree();
            tree.folders.img.push(name);
            expect(fired(imageViolations(tree))).toEqual([expected]);
        });

        it.each(['b.png', 'b.PNG', 'b.jpg', 'b.jpeg', 'b.gif'])('img/ may hold %s', name => {
            const tree = validTree();
            tree.folders.img.push(name);
            expect(fired(imageViolations(tree))).toEqual([]);
        });
    });

    describe('language parity', () => {
        const pair = (de: string, en: string): WikiTree => {
            const tree = validTree();
            tree.pages['de/De-Home.md'] = de;
            tree.pages['en/En-Home.md'] = en;
            return tree;
        };

        it('accepts the valid tree', () => {
            expect(fired(parityViolations(validTree()))).toEqual([]);
        });

        it.each([
            ['a heading level', '# A\n\n## B\n', '# A\n\n### B\n', 'de/De-Home.md:3 [parity-kind]'],
            ['a heading against text', '# A\n\n## B\n', '# A\n\nB\n', 'de/De-Home.md:3 [parity-kind]'],
            ['a table row against text', '| a |\n', 'a\n', 'de/De-Home.md:1 [parity-kind]'],
            ['a code fence against text', '```\nx\n```\n', 'y\nx\n```\n', 'de/De-Home.md:1 [parity-kind]'],
            ['a blank line against text', 'a\n\nb\n', 'a\nb\n\n', 'de/De-Home.md:2 [parity-kind]'],
            ['a list item against text', '- a\n', 'a\n', 'de/De-Home.md:1 [parity-kind]'],
            ['a blockquote against text', '> a\n', 'a\n', 'de/De-Home.md:1 [parity-kind]'],
            ['a heading against a code comment', '```\n# a\n```\n', '# a\nb\n```\n', 'de/De-Home.md:1 [parity-kind]'],
            ['an extra line in German', 'a\nb\n', 'a\n', 'de/De-Home.md:2 [parity-lines]'],
            ['an extra line in English', 'a\n', 'a\nb\n', 'en/En-Home.md:2 [parity-lines]'],
            ['another image', '![a](../img/a.png)\n', '![a](../img/b.png)\n', 'de/De-Home.md:1 [parity-image]'],
            ['a missing image', '![a](../img/a.png)\n', 'a\n', 'de/De-Home.md:1 [parity-image]'],
            ['another page link', '[a](De-Home.md)\n', '[a](En-Other.md)\n', 'de/De-Home.md:1 [parity-link]'],
            ['a missing link', '[a](De-Home.md)\n', 'a\n', 'de/De-Home.md:1 [parity-link]'],
            [
                'another external link',
                '[a](https://a.example)\n',
                '[a](https://b.example)\n',
                'de/De-Home.md:1 [parity-link]',
            ],
            [
                'Home.md against the language home',
                '[a](Home.md)\n',
                '[a](En-Home.md)\n',
                'de/De-Home.md:1 [parity-link]',
            ],
            [
                'a same-page anchor against a page link',
                '[a](#x)\n',
                '[a](En-Home.md#x)\n',
                'de/De-Home.md:1 [parity-link]',
            ],
        ])('%s', (_label, de, en, expected) => {
            expect(fired(parityViolations(pair(de, en)))).toEqual([expected]);
        });

        it.each([
            ['the language prefix of a link', '[a](De-Home.md)\n', '[a](En-Home.md)\n'],
            ['the anchor of a page link', '[a](De-Home.md#start)\n', '[a](En-Home.md#begin)\n'],
            ['the anchor of a same-page link', '[a](#start)\n', '[a](#begin)\n'],
            ['the order of links on a line', '[a](De-A.md) [b](De-B.md)\n', '[b](En-B.md) [a](En-A.md)\n'],
            ['the alt text of an image', '![Bild](../img/a.png)\n', '![Image](../img/a.png)\n'],
            ['the code block content', '```\nFoo\n# Kommentar\n```\n', '```\nBar\nBaz\n```\n'],
            ['the wording of a heading', '## Wert\n', '## Value\n'],
            [
                'the Formate/Formats name in a link',
                '[a](De-Echarts-JSON-Formate.md)\n',
                '[a](En-Echarts-JSON-Formats.md)\n',
            ],
        ])('ignores %s', (_label, de, en) => {
            expect(fired(parityViolations(pair(de, en)))).toEqual([]);
        });

        it('reports only the first deviating line, with both excerpts', () => {
            const violations = parityViolations(pair('# A\n\n## B\n\n## C\n', '# A\n\n### B\n\nC\n'));
            expect(fired(violations)).toEqual(['de/De-Home.md:3 [parity-kind]']);
            expect(violations[0].message).toContain('heading-2');
            expect(violations[0].message).toContain('heading-3');
            expect(violations[0].message).toContain('en/En-Home.md:3');
        });

        it('checks every pair on its own', () => {
            const tree = pair('a\n', 'a\nb\n');
            tree.pages['de/De-X.md'] = '# a\n';
            tree.pages['en/En-X.md'] = 'a\n';
            expect(fired(parityViolations(tree))).toEqual([
                'en/En-Home.md:2 [parity-lines]',
                'de/De-X.md:1 [parity-kind]',
            ]);
        });

        it.each([
            ['de/De-Neu.md', 'de/De-Neu.md:1 [parity-pair]'],
            ['en/En-New.md', 'en/En-New.md:1 [parity-pair]'],
        ])('%s has no partner', (path, expected) => {
            const tree = validTree();
            tree.pages[path] = '# Neu\n';
            expect(fired(parityViolations(tree))).toEqual([expected]);
        });

        it('pairs De-Echarts-JSON-Formate with En-Echarts-JSON-Formats and compares them', () => {
            const tree = validTree();
            tree.pages['de/De-Echarts-JSON-Formate.md'] = '# a\n';
            tree.pages['en/En-Echarts-JSON-Formats.md'] = '# a\n';
            expect(fired(parityViolations(tree))).toEqual([]);

            tree.pages['en/En-Echarts-JSON-Formats.md'] = '## a\n';
            expect(fired(parityViolations(tree))).toEqual(['de/De-Echarts-JSON-Formate.md:1 [parity-kind]']);
        });

        it('does not pair Home.md and _Sidebar.md', () => {
            const tree = validTree();
            tree.pages['Home.md'] = '# a\n';
            tree.pages['_Sidebar.md'] = '## a\nb\n';
            expect(fired(parityViolations(tree))).toEqual([]);
        });
    });
});

describe('wiki sources', () => {
    const tree = readWikiTree();

    it('file names fit the sync patterns and the wiki', () => {
        expect(report(fileNameViolations(tree))).toEqual([]);
    });

    it('use only Markdown constructs the wiki has proven', () => {
        expect(report(constructViolations(tree))).toEqual([]);
    });

    it('page links use the .md form and lead to a page', () => {
        expect(report(linkViolations(tree))).toEqual([]);
    });

    it('the sidebar links only pages and lists every page', () => {
        expect(report(sidebarViolations(tree))).toEqual([]);
    });

    it('anchors lead to a heading', () => {
        expect(report(anchorViolations(tree))).toEqual([]);
    });

    it('images exist, use the rewritten path form, and img/ stays flat with allowed formats', () => {
        expect(report(imageViolations(tree))).toEqual([]);
    });

    it('every DE/EN pair matches line by line', () => {
        expect(report(parityViolations(tree))).toEqual([]);
    });
});
