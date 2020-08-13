module.export = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run test:unit',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS'
  }
}
