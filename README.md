# git-hook-scripts

> Collection of Git hook scripts

[![npm version](https://badge.fury.io/js/git-hook-scripts.svg)](https://badge.fury.io/js/git-hook-scripts)

## Available scripts

* `check-issue-nr-in-commit-msg` - checks if commit message has an Issue number marked down
* `npm-install-after-merge` - calls `npm install` if `package.json` or `bower.json` has been changed after merge

## Installation

Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and use it to install `git-hook-scripts`

```
$ npm install --save-dev git-hook-scripts
```

## Usage

### In JavaScript

```
var scripts = require('git-hook-scripts');

scripts.npmInstallAfterMerge();
scripts.checkIssueNrInCommitMsg();
```

### CLI

```
Usage: ./node_modules/.bin/git-hook-scripts [options] [command]


Commands:

  check-issue-nr-in-commit-msg|issue-nr   Checks if commit message has an Issue number marked down
  npm-install-after-merge|install         Calls npm install if package.json or bower.json has been changed after merge
```

## Contribute

1. Implement a Git hook script,
2. move the script to `./src`,
3. write the command to `./git-hook-scripts` (more info about [commander.js](https://github.com/tj/commander.js)) and
4. make a pull request.

## License

[MIT](//github.com/sorry-as-a-service/git-hook-scripts/blob/master/LICENSE)
