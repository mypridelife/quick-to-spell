module.export = {
  hooks: {
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run test:unit'
  }
}
