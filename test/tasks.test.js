// Exit-code contract of tasks.js: every caller of `npm run build` (release script
// before_commit, CI deploy, dev-server watch) must see a failed build as a failure.
// Each test runs a copy of the real tasks.js in a throw-away fixture directory; npm
// and vite are replaced by fakes at the process boundary.
const assert = require('node:assert');
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const repoDir = path.join(__dirname, '..');
const adapterName = require('../package.json').name.replace('iobroker.', '');

function write(file, content, mode) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, mode ? { mode } : undefined);
}

function createFixture() {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'vis2c-tasks-'));
    fs.copyFileSync(path.join(repoDir, 'tasks.js'), path.join(dir, 'tasks.js'));
    fs.copyFileSync(path.join(repoDir, 'package.json'), path.join(dir, 'package.json'));
    const { version } = require('../package.json');
    write(path.join(dir, 'src-widgets', 'package.json'), JSON.stringify({ name: 'fixture', version }, null, 4));
    return dir;
}

// fake `npm` on PATH: records its arguments, exits with the given code
function fakeNpm(dir, exitCode) {
    const bin = path.join(dir, 'fake-bin');
    write(path.join(bin, 'npm'), `#!/bin/sh\necho "$@" > "${bin}/npm-args.txt"\nexit ${exitCode}\n`, 0o755);
    write(path.join(bin, 'npm.cmd'), `@echo off\r\necho %* > "${bin}\\npm-args.txt"\r\nexit /b ${exitCode}\r\n`);
    return bin;
}

function npmArgs(dir) {
    return fs.readFileSync(path.join(dir, 'fake-bin', 'npm-args.txt'), 'utf8').trim();
}

// fake vite in src-widgets: `vite build` writes the files the real build emits, or fails
function fakeVite(dir, exitCode) {
    const script =
        exitCode === 0
            ? `const fs = require('node:fs');
fs.mkdirSync('build/assets', { recursive: true });
fs.mkdirSync('build/img', { recursive: true });
fs.writeFileSync('build/customWidgets.js', '');
fs.writeFileSync('build/mf-manifest.json', '{}');
fs.writeFileSync('build/assets/index-abc.js', '');
fs.writeFileSync('build/img/logo.png', '');
`
            : `process.exit(${exitCode});\n`;
    write(path.join(dir, 'src-widgets', 'node_modules', 'vite', 'bin', 'vite.js'), script);
}

function runTasks(dir, args, { fakeBin, ci } = {}) {
    const env = { ...process.env, NODE_PATH: path.join(repoDir, 'node_modules') };
    delete env.CI;
    if (ci) {
        env.CI = 'true';
    }
    if (fakeBin) {
        // Windows spells the key "Path"; keep a single entry
        const pathKey = Object.keys(env).find(k => k.toUpperCase() === 'PATH') || 'PATH';
        env[pathKey] = `${fakeBin}${path.delimiter}${env[pathKey]}`;
    }
    return spawnSync(process.execPath, ['tasks.js', ...args], { cwd: dir, env, encoding: 'utf8' });
}

function listFiles(dir) {
    if (!fs.existsSync(dir)) {
        return [];
    }
    return fs
        .readdirSync(dir, { recursive: true, withFileTypes: true })
        .filter(e => e.isFile())
        .map(e => path.relative(dir, path.join(e.parentPath, e.name)).replace(/\\/g, '/'))
        .sort();
}

describe('tasks.js exit code', function () {
    this.timeout(30000);
    let dir;

    beforeEach(() => {
        dir = createFixture();
    });

    afterEach(() => {
        fs.rmSync(dir, { recursive: true, force: true });
    });

    it('--2-build fails when vite cannot be found', () => {
        const result = runTasks(dir, ['--2-build']);
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('--1-npm fails when npm fails', () => {
        // build-tools treats npm exit code 1 as success, so the fake fails with 3
        const result = runTasks(dir, ['--1-npm'], { fakeBin: fakeNpm(dir, 3) });
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('the full build fails when the build step fails', () => {
        const result = runTasks(dir, [], { fakeBin: fakeNpm(dir, 0) });
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('--3-copy fails when the build output is missing', () => {
        const result = runTasks(dir, ['--3-copy']);
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('the full build fails when vite leaves no build output', () => {
        write(path.join(dir, 'src-widgets', 'node_modules', 'vite', 'bin', 'vite.js'), '');
        const result = runTasks(dir, [], { fakeBin: fakeNpm(dir, 0) });
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('the full build fails when vite fails', () => {
        fakeVite(dir, 1);
        const result = runTasks(dir, [], { fakeBin: fakeNpm(dir, 0) });
        assert.notStrictEqual(result.status, 0, result.stdout + result.stderr);
    });

    it('an intact full build ends with 0 and copies the build output to widgets/', () => {
        fakeVite(dir, 0);
        const result = runTasks(dir, [], { fakeBin: fakeNpm(dir, 0) });
        assert.strictEqual(result.status, 0, result.stdout + result.stderr);
        assert.deepStrictEqual(listFiles(path.join(dir, 'widgets')), [
            `${adapterName}/assets/index-abc.js`,
            `${adapterName}/customWidgets.js`,
            `${adapterName}/img/logo.png`,
            `${adapterName}/mf-manifest.json`,
        ]);
    });
});
