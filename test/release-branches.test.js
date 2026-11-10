// Tests for scripts/release-branches.js (release:sync / release:finish).
// Every case builds a throwaway repo with a bare remote in the OS temp dir and runs the
// script as a child process, exactly like `npm run release:sync` would.
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const SCRIPT = path.join(__dirname, '..', 'scripts', 'release-branches.js');

function git(cwd, ...args) {
    const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
    if (result.status !== 0) {
        throw new Error(`git ${args.join(' ')} failed in ${cwd}: ${result.stderr}`);
    }
    return result.stdout.trim();
}

function commit(cwd, file, content = file) {
    fs.writeFileSync(path.join(cwd, file), `${content}\n`);
    git(cwd, 'add', file);
    git(cwd, 'commit', '--quiet', '-m', `change ${file}`);
}

function configure(cwd) {
    git(cwd, 'config', 'user.name', 'Test');
    git(cwd, 'config', 'user.email', 'test@example.invalid');
    git(cwd, 'config', 'commit.gpgsign', 'false');
}

/**
 * Builds origin.git (bare) and a clone "work" where main and dev exist locally and on the
 * remote, dev is one commit ahead of main and checked out. "other" is a second clone used
 * to push changes the work clone does not know yet.
 */
function buildRepos(root) {
    const origin = path.join(root, 'origin.git');
    const work = path.join(root, 'work');
    git(root, 'init', '--quiet', '--bare', '--initial-branch=main', origin);
    git(root, 'clone', '--quiet', origin, work);
    configure(work);
    git(work, 'checkout', '--quiet', '-b', 'main');
    commit(work, 'base.txt');
    git(work, 'push', '--quiet', '-u', 'origin', 'main');
    git(work, 'checkout', '--quiet', '-b', 'dev');
    commit(work, 'feature.txt');
    git(work, 'push', '--quiet', '-u', 'origin', 'dev');
}

/** Copies the prebuilt repo pair, which is much faster than running git a dozen times per test. */
function copyRepos(template) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'release-branches-'));
    fs.cpSync(template, root, { recursive: true });
    const origin = path.join(root, 'origin.git');
    const work = path.join(root, 'work');
    git(work, 'remote', 'set-url', 'origin', origin);
    return { root, origin, work };
}

/** The state the release script leaves behind: main = dev + release commit, pushed, checked out. */
function simulateRelease(env) {
    git(env.work, 'checkout', '--quiet', 'main');
    git(env.work, 'merge', '--quiet', '--ff-only', 'dev');
    commit(env.work, 'version.txt', 'chore: release v1.0.0');
    git(env.work, 'push', '--quiet', 'origin', 'main');
}

function cloneOther(env) {
    const other = path.join(env.root, 'other');
    git(env.root, 'clone', '--quiet', env.origin, other);
    configure(other);
    return other;
}

/** Everything the script must leave untouched when it aborts. */
function snapshot(env) {
    return {
        head: spawnSync('git', ['symbolic-ref', '--quiet', 'HEAD'], { cwd: env.work, encoding: 'utf8' }).stdout.trim(),
        refs: git(env.work, 'for-each-ref', '--format=%(refname) %(objectname)'),
        status: git(env.work, 'status', '--porcelain'),
        remote: git(env.origin, 'for-each-ref', '--format=%(refname) %(objectname)'),
    };
}

function run(env, mode) {
    const result = spawnSync(process.execPath, [SCRIPT, mode], { cwd: env.work, encoding: 'utf8' });
    return { status: result.status, output: `${result.stdout}${result.stderr}` };
}

/** Runs the script and asserts it aborted with a message matching `pattern` and changed nothing. */
function assertAborts(env, mode, pattern, { fetch = true } = {}) {
    // Fetch first so the script's own fetch has nothing left to update in the snapshot.
    if (fetch) {
        git(env.work, 'fetch', '--quiet', 'origin');
    }
    const before = snapshot(env);
    const { status, output } = run(env, mode);
    assert.notStrictEqual(status, 0, `expected a non-zero exit code, output:\n${output}`);
    assert.match(output, pattern);
    assert.deepStrictEqual(snapshot(env), before, 'the aborted run changed the repository');
}

describe('scripts/release-branches.js', function () {
    this.timeout(60000);

    let template;
    let env;
    before(() => {
        template = fs.mkdtempSync(path.join(os.tmpdir(), 'release-branches-template-'));
        buildRepos(template);
    });
    after(() => {
        fs.rmSync(template, { recursive: true, force: true });
    });
    beforeEach(() => {
        env = copyRepos(template);
    });
    afterEach(() => {
        fs.rmSync(env.root, { recursive: true, force: true });
    });

    describe('sync', () => {
        it('fast-forwards main to dev, ends on main and pushes nothing', () => {
            const dev = git(env.work, 'rev-parse', 'dev');
            const originMain = git(env.origin, 'rev-parse', 'main');
            const { status, output } = run(env, 'sync');
            assert.strictEqual(status, 0, output);
            assert.strictEqual(git(env.work, 'rev-parse', 'main'), dev);
            assert.strictEqual(git(env.work, 'symbolic-ref', '--short', 'HEAD'), 'main');
            assert.strictEqual(git(env.origin, 'rev-parse', 'main'), originMain);
            assert.strictEqual(git(env.work, 'status', '--porcelain'), '');
        });

        it('aborts when the current branch is not dev', () => {
            git(env.work, 'checkout', '--quiet', 'main');
            assertAborts(env, 'sync', /nicht auf dev.*main/s);
        });

        it('aborts on a detached HEAD', () => {
            git(env.work, 'checkout', '--quiet', '--detach', 'dev');
            assertAborts(env, 'sync', /nicht auf dev.*detached HEAD/s);
        });

        it('aborts when a tracked file is modified', () => {
            fs.writeFileSync(path.join(env.work, 'feature.txt'), 'edited\n');
            assertAborts(env, 'sync', /Arbeitsbaum ist nicht sauber.*feature\.txt/s);
        });

        it('aborts when an untracked file exists', () => {
            fs.writeFileSync(path.join(env.work, 'stray.txt'), 'stray\n');
            assertAborts(env, 'sync', /Arbeitsbaum ist nicht sauber.*stray\.txt/s);
        });

        it('aborts when dev is ahead of origin/dev', () => {
            commit(env.work, 'unpushed.txt');
            assertAborts(env, 'sync', /dev ist origin\/dev voraus.*git push/s);
        });

        it('aborts when dev is behind origin/dev', () => {
            const other = cloneOther(env);
            git(other, 'checkout', '--quiet', 'dev');
            commit(other, 'remote.txt');
            git(other, 'push', '--quiet', 'origin', 'dev');
            assertAborts(env, 'sync', /dev liegt hinter origin\/dev.*git pull --ff-only/s);
        });

        it('aborts when dev and origin/dev have diverged', () => {
            const other = cloneOther(env);
            git(other, 'checkout', '--quiet', 'dev');
            commit(other, 'remote.txt');
            git(other, 'push', '--quiet', 'origin', 'dev');
            commit(env.work, 'local.txt');
            assertAborts(env, 'sync', /dev und origin\/dev sind auseinandergelaufen/);
        });

        it('aborts when origin/dev does not exist', () => {
            git(env.work, 'push', '--quiet', 'origin', '--delete', 'dev');
            git(env.work, 'fetch', '--quiet', '--prune', 'origin');
            assertAborts(env, 'sync', /origin\/dev gibt es nicht.*git push -u origin dev/s);
        });

        it('aborts when origin cannot be fetched', () => {
            git(env.work, 'remote', 'set-url', 'origin', path.join(env.root, 'missing.git'));
            assertAborts(env, 'sync', /git fetch origin.*fehlgeschlagen/s, { fetch: false });
        });

        it('aborts when main is not an ancestor of dev', () => {
            git(env.work, 'checkout', '--quiet', 'main');
            commit(env.work, 'hotfix.txt');
            git(env.work, 'checkout', '--quiet', 'dev');
            assertAborts(env, 'sync', /main ist kein Vorfahr von dev.*git merge main/s);
        });

        it('aborts when there is no local main branch', () => {
            git(env.work, 'branch', '--quiet', '-D', 'main');
            assertAborts(env, 'sync', /lokalen Branch main gibt es nicht.*git branch main origin\/main/s);
        });
    });

    describe('finish', () => {
        beforeEach(() => {
            simulateRelease(env);
        });

        it('fast-forwards dev to the release commit, pushes dev and ends on dev', () => {
            const release = git(env.work, 'rev-parse', 'main');
            const { status, output } = run(env, 'finish');
            assert.strictEqual(status, 0, output);
            assert.strictEqual(git(env.work, 'rev-parse', 'dev'), release);
            assert.strictEqual(git(env.work, 'symbolic-ref', '--short', 'HEAD'), 'dev');
            assert.strictEqual(git(env.origin, 'rev-parse', 'dev'), release);
            assert.strictEqual(git(env.origin, 'rev-parse', 'main'), release);
            assert.strictEqual(git(env.work, 'status', '--porcelain'), '');
        });

        it('aborts when the current branch is not main', () => {
            git(env.work, 'checkout', '--quiet', 'dev');
            assertAborts(env, 'finish', /nicht auf main.*dev/s);
        });

        it('aborts when the working tree is not clean', () => {
            fs.writeFileSync(path.join(env.work, 'version.txt'), 'edited\n');
            assertAborts(env, 'finish', /Arbeitsbaum ist nicht sauber.*version\.txt/s);
        });

        it('aborts when the release commit was not pushed to origin/main', () => {
            commit(env.work, 'unpushed.txt');
            assertAborts(env, 'finish', /main ist origin\/main voraus.*Release-Skript.*git push --follow-tags/s);
        });

        it('aborts when main is behind origin/main', () => {
            const other = cloneOther(env);
            commit(other, 'remote.txt');
            git(other, 'push', '--quiet', 'origin', 'main');
            assertAborts(env, 'finish', /main liegt hinter origin\/main.*git pull --ff-only/s);
        });

        it('aborts when dev has commits that are not in main', () => {
            git(env.work, 'checkout', '--quiet', 'dev');
            commit(env.work, 'late.txt');
            git(env.work, 'checkout', '--quiet', 'main');
            assertAborts(env, 'finish', /dev ist kein Vorfahr von main.*git merge main/s);
        });

        it('aborts when there is no local dev branch', () => {
            git(env.work, 'branch', '--quiet', '-D', 'dev');
            assertAborts(env, 'finish', /lokalen Branch dev gibt es nicht.*git branch dev origin\/dev/s);
        });

        it('aborts when origin/dev has commits that are not in main', () => {
            const other = cloneOther(env);
            git(other, 'checkout', '--quiet', 'dev');
            commit(other, 'late.txt');
            git(other, 'push', '--quiet', 'origin', 'dev');
            assertAborts(env, 'finish', /origin\/dev ist kein Vorfahr von main.*git pull/s);
        });
    });
});
