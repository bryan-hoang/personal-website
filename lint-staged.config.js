module.exports = {
  '*.@(ts|tsx)': [() => 'tsc --pretty --noEmit', 'npm run lint'],
  '*.@(svg)': ['npm run format'],
}
