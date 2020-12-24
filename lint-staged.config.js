module.exports = {
  '*.@(ts|tsx)': [() => 'tsc --pretty --noEmit', 'npm run lint'],
  '*.@(json|md|svg)': ['npm run format'],
}
