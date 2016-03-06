# git-hook-scripts - Collection of Git Hook scripts

## Installation

Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and use it to install `git-hook-scripts`

```
$ npm install --save-dev git-hook-scripts
```

## Usage

### Use it as npm module

```
var scripts = require('git-hook-scripts');

...

scripts.npmInstallAfterMerge();
```

### CLI

```
Usage: ./node_modules/.bin/git-hook-scripts [options] [command]


Commands:

  check-issue-nr-in-commit-msg|issue-nr   Check if commit message has a Issue number marked down
  npm-install-after-merge|install         Call npm intall if package.json or bower.json has been changed after Merge
```
### Skip the hooks on commit
append the --no-verify property to your commit command
```
git commit -m "your message" --no-verify
```

## Contribute

1. Implement a useful Git Hook script
2. Move the script to `./src` and tests to `./test`
3. Write the command to `./git-hook-scripts` (more info about [commander.js](https://github.com/tj/commander.js))
4. Make a pull request

## License

[MIT](//github.com/sorry-as-a-service/git-hook-scripts/blob/master/LICENSE)
