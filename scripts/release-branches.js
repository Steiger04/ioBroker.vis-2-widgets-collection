#!/usr/bin/env node

/**
 * Release branch sync for ioBroker vis-2-widgets-collection
 *
 * Moves main and dev around a release, fast-forward only:
 * - sync:   before the release, fast-forwards main to dev (no push, ends on main)
 * - finish: after the release, fast-forwards dev to the release commit on main
 *           and pushes dev (ends on dev)
 *
 * Every precondition is checked before anything is changed. A violated precondition
 * aborts with exit code 1, names the state found and the next step, and leaves the
 * repository untouched. Only exit codes and machine-readable git output are evaluated,
 * never git's (possibly localized) messages.
 *
 * Usage:
 *   node scripts/release-branches.js sync     (npm run release:sync)
 *   node scripts/release-branches.js finish   (npm run release:finish)
 *
 * @module scripts/release-branches
 */

const { spawnSync } = require('child_process');

class Abort extends Error {}

/** Runs git and returns { status, stdout, stderr } without throwing. */
function git(...args) {
    const result = spawnSync('git', args, { encoding: 'utf8' });
    if (result.error) {
        throw new Abort(`git konnte nicht gestartet werden: ${result.error.message}`);
    }
    return { status: result.status, stdout: result.stdout.trim(), stderr: result.stderr.trim() };
}

function currentBranch() {
    const { status, stdout } = git('symbolic-ref', '--quiet', '--short', 'HEAD');
    return status === 0 ? stdout : null;
}

function requireBranch(expected) {
    const branch = currentBranch();
    if (branch !== expected) {
        const found = branch ? `auf ${branch}` : 'auf keinem Branch (detached HEAD)';
        throw new Abort(`Du bist nicht auf ${expected}, sondern ${found} – erst \`git checkout ${expected}\`.`);
    }
}

/** Strict: untracked files count as well, they can collide with files of the other branch. */
function requireCleanTree() {
    const { status, stdout, stderr } = git('status', '--porcelain');
    if (status !== 0) {
        throw new Abort(`\`git status\` ist fehlgeschlagen (Exit-Code ${status}): ${stderr}`);
    }
    if (stdout) {
        throw new Abort(
            `Der Arbeitsbaum ist nicht sauber:\n${stdout}\n– erst committen, stashen oder entfernen (auch unversionierte Dateien).`,
        );
    }
}

/** Only updates the remote-tracking refs; branches and working tree stay as they are. */
function fetchOrigin() {
    const { status, stderr } = git('fetch', '--quiet', 'origin');
    if (status !== 0) {
        throw new Abort(
            `\`git fetch origin\` ist fehlgeschlagen (Exit-Code ${status}):\n${stderr}\n– erst Verbindung zu origin prüfen.`,
        );
    }
}

/** Commit hash of `ref`, or null when the ref does not exist. */
function resolveCommit(ref) {
    const { status, stdout } = git('rev-parse', '--verify', '--quiet', `${ref}^{commit}`);
    return status === 0 ? stdout : null;
}

function isAncestor(ancestor, descendant) {
    const { status, stderr } = git('merge-base', '--is-ancestor', ancestor, descendant);
    if (status === 0 || status === 1) {
        return status === 0;
    }
    throw new Abort(
        `\`git merge-base --is-ancestor ${ancestor} ${descendant}\` ist fehlgeschlagen (Exit-Code ${status}): ${stderr}`,
    );
}

/** The local branch must point to the same commit as origin/<branch>. */
function requireEqualToOrigin(branch, aheadNextStep = '`git push`') {
    const remote = `origin/${branch}`;
    const localHash = resolveCommit(`refs/heads/${branch}`);
    const remoteHash = resolveCommit(`refs/remotes/${remote}`);
    if (!remoteHash) {
        throw new Abort(`${remote} gibt es nicht – erst \`git push -u origin ${branch}\`.`);
    }
    if (localHash === remoteHash) {
        return;
    }
    if (isAncestor(remoteHash, localHash)) {
        throw new Abort(`${branch} ist ${remote} voraus – erst ${aheadNextStep}.`);
    }
    if (isAncestor(localHash, remoteHash)) {
        throw new Abort(`${branch} liegt hinter ${remote} – erst \`git pull --ff-only\`.`);
    }
    throw new Abort(
        `${branch} und ${remote} sind auseinandergelaufen – erst zusammenführen (z. B. \`git pull --rebase\`) und pushen.`,
    );
}

function requireLocalBranch(branch) {
    if (!resolveCommit(`refs/heads/${branch}`)) {
        throw new Abort(`Den lokalen Branch ${branch} gibt es nicht – erst \`git branch ${branch} origin/${branch}\`.`);
    }
}

/** `ancestor` must be contained in `descendant`, otherwise the fast-forward is impossible. */
function requireAncestor(ancestor, descendant, nextStep) {
    if (!isAncestor(ancestor, descendant)) {
        throw new Abort(
            `${ancestor} ist kein Vorfahr von ${descendant}, ein Fast-Forward ist nicht möglich – erst ${nextStep}.`,
        );
    }
}

/** Runs a changing git step; its output is shown, a failure ends the run with exit code 1. */
function runGitStep(...args) {
    console.log(`→ git ${args.join(' ')}`);
    const { status, stdout, stderr } = git(...args);
    const output = [stdout, stderr].filter(Boolean).join('\n');
    if (output) {
        console.log(output);
    }
    if (status !== 0) {
        throw new Abort(`\`git ${args.join(' ')}\` ist fehlgeschlagen (Exit-Code ${status}) – Ausgabe oben prüfen.`);
    }
}

function sync() {
    requireCleanTree();
    requireBranch('dev');
    fetchOrigin();
    requireEqualToOrigin('dev');
    requireLocalBranch('main');
    requireAncestor('main', 'dev', 'main in dev übernehmen (auf dev `git merge main`, dann `git push`)');
    runGitStep('checkout', '--quiet', 'main');
    runGitStep('merge', '--ff-only', '--quiet', 'dev');
    console.log('✓ main steht auf dev. Jetzt README pflegen und das Release-Skript starten.');
}

function finish() {
    requireBranch('main');
    requireCleanTree();
    fetchOrigin();
    requireEqualToOrigin('main', 'prüfen, ob das Release-Skript gepusht hat, sonst `git push --follow-tags`');
    requireLocalBranch('dev');
    requireAncestor(
        'dev',
        'main',
        'den Release-Commit ohne Fast-Forward übernehmen (auf dev `git merge main`, dann `git push`)',
    );
    // Otherwise the final push of dev would be rejected after dev was already moved locally.
    if (resolveCommit('refs/remotes/origin/dev')) {
        requireAncestor(
            'origin/dev',
            'main',
            'auf dev `git pull --ff-only`, dann den Release-Commit übernehmen (`git merge main`) und `git push`',
        );
    }
    runGitStep('checkout', '--quiet', 'dev');
    runGitStep('merge', '--ff-only', '--quiet', 'main');
    runGitStep('push', '--quiet', 'origin', 'dev');
    console.log('✓ dev steht auf dem Release-Commit und ist gepusht.');
}

const MODES = { sync, finish };

function main() {
    const name = process.argv[2];
    const mode = Object.hasOwn(MODES, name) ? MODES[name] : null;
    if (!mode) {
        console.error('Aufruf: node scripts/release-branches.js <sync|finish>');
        process.exit(2);
    }
    try {
        mode();
    } catch (error) {
        if (!(error instanceof Abort)) {
            throw error;
        }
        console.error(`❌ ${error.message}`);
        process.exit(1);
    }
}

main();
