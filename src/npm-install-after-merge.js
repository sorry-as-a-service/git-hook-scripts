'use strict';

import * as q from 'q';
import {spawn, exec} from 'child_process';

export function npmInstallAfterMerge() {
    console.log('Checking changed files after Merge...');

    var install = q.defer();
    var gitDiffCmd = 'git diff-tree -r --name-only --no-commit-id ORIG_HEAD~0 HEAD~0';

    exec(gitDiffCmd, function (_, stdout) {
        if (stdout.indexOf('package.json') === -1 && stdout.indexOf('bower.json') === -1)
            return install.resolve();

        console.log('Detected changes in conf files. Running `npm install`...');

        var installExec = spawn('npm', ['install']);

        installExec.stdout.on('data', function (data) {
            console.log('' + data);
        });
        installExec.stderr.on('data', function (data) {
            console.log('ERROR ' + data);
        });
        installExec.on('exit', function (code) {
            install.resolve();
        });
    });
    return install.promise;
}
