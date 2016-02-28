'use strict';

import * as q from 'q';
import {exec} from 'child_process';

export function npmInstallAfterMerge() {
    console.log('Checking changed files after Merge ...');

    var install = q.defer();
    var gitDiffCmd = 'git diff-tree -r --name-only --no-commit-id ORIG_HEAD~0 HEAD~0';

    exec(gitDiffCmd, function (_, stdout) {
        if (stdout.indexOf('package.json') === -1 && stdout.indexOf('bower.json') === -1)
            return install.resolve();

        console.log('Detected changes in conf files. Running `npm install`...');

        exec('npm install', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            install.resolve();
        });
    });
    return install.promise;
}
