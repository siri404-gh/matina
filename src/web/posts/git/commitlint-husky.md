# 12.2 Enforce commit linting

## Summary

In the previous post, we saw how we can use commitizen to lint our commit messages. Instead of commiting chnges using `git commit`, we saw how we can use `npm run commit`. But, the limitiation with it is that it doesnt enforce others to follow the same practice. Commitlint and Husky come to the rescue. Before we see how these work, we need to understand what [githooks](https://git-scm.com/docs/githooks) do. Click on the link to learn more about githooks. In short, these are hooks you can cling on to at specific points while using git. For eg, the pre-commit hook can be used to do something just before anyone commits anything. Like show a message "Hey, thanks for contributing." or something.

## Install commitlint cli and angular config
`npm install --save-dev @commitlint/{config-conventional,cli}`
## For Windows:
`npm install --save-dev @commitlint/config-conventional @commitlint/cli`

## Install husky
`npm install --save-dev husky@next`


## Configure

The next step is to install husky to lint commits before they are created.  You can use Husky's 'commit-msg' hook:

    {
      "husky": {
        "hooks": {
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      }
    }

With this, any commit messages will be checked for lint errors.

## Extra

Add a badge to your repo like [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

    [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## How I do it in my projects

In my projects, during a commit, I show a desktop notification 'Are you being a resposible commitizen?' Which is followed by another notification indicating if it passed or failed. I use the `notify` npm package to achieve this and below is my husky configuration.

    "husky": {
      "hooks": {
        "pre-commit": "./node_modules/.bin/notify -t 'sreeram.app' -m 'Are you being a responsible commitizen?'",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "post-commit": "./node_modules/.bin/notify -t 'sreeram.app' -m 'Commit Successful' -s Glass"
      }
    },
