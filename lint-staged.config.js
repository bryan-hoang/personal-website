const typeCheckCommand = () => 'npm run type-check';
const eslintCommand = 'eslint --cache --ext ts,tsx,js';
const prettierCommand = 'prettier -c';
const markdownlintCommand = 'markdownlint **/*.md --ignore node_modules';

const typescriptFiles = '*.@(ts|tsx)';
const eslintableFiles = '*.@(ts|tsx|js)';
const markdownFiles = '*.@(md)';
const prettierableFiles = '*.@(md|json|svg|yaml)';

module.exports = {
  [typescriptFiles]: [typeCheckCommand],
  [eslintableFiles]: [eslintCommand],
  [markdownFiles]: [markdownlintCommand],
  [prettierableFiles]: [prettierCommand],
};
