'use strict';

import * as fs from 'fs';

export function checkIssueNrInCommitMsg() {
    console.log('Checking commit message for issue number...');

    var commitMsg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8');
    var issueAtBeginningRegex = /^(Merge|\(.+\)|\#.+ .*)/;
    var isIssueSet = issueAtBeginningRegex.test(commitMsg);

    if (!isIssueSet) {
        console.log('Git commit aborted due to missing issue in the commit message.');
        process.exit(1);
    }
}
