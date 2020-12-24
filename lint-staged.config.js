module.exports = {
  '*.@(ts|tsx)': [() => 'npm run type-check', 'npm run lint'],
  '*.@(json|md|svg)': ['npm run format'],
};
