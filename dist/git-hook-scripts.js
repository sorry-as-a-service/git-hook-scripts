'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkIssueNrInCommitMsg = checkIssueNrInCommitMsg;

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function checkIssueNrInCommitMsg() {
    console.log('Checking commit message for issue number...');

    var commitMsg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8');
    var issueAtBeginningRegex = /^(Merge|\(.+\)|\#.+ .*)/;
    var isIssueSet = issueAtBeginningRegex.test(commitMsg);

    if (!isIssueSet) {
        console.log('Git commit aborted due to missing issue in the commit message.');
        process.exit(1);
    }
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.npmInstallAfterMerge = npmInstallAfterMerge;

var _q = require('q');

var q = _interopRequireWildcard(_q);

var _child_process = require('child_process');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function npmInstallAfterMerge() {
    console.log('Checking changed files after Merge ...');

    var install = q.defer();
    var gitDiffCmd = 'git diff-tree -r --name-only --no-commit-id ORIG_HEAD~0 HEAD~0';

    (0, _child_process.exec)(gitDiffCmd, function (_, stdout) {
        if (stdout.indexOf('package.json') === -1 && stdout.indexOf('bower.json') === -1) return install.resolve();

        console.log('Detected changes in conf files. Running `npm install`...');

        (0, _child_process.exec)('npm install', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            install.resolve();
        });
    });
    return install.promise;
}
