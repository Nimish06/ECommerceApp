module.exports= {​​​​​​​​ 
  root: true,

 parser: '@typescript-eslint/parser',
 plugins: ['jest', '@typescript-eslint', 'react-hooks', 'jam3'],
 extends: '@react-native-community',
// 'parser': 'babel-eslint',
 env: {​​​​​​​​
 jest: true,
 browser: true,
 }​​​​​​​​,
 rules: {​​​​​​​​
'no-multiple-empty-lines': [1, {​​​​​​​​ max: 1 }​​​​​​​​],
'no-unused-vars': 'off',
'@typescript-eslint/no-unused-vars': 'error',
'no-useless-constructor': 'off',
'@typescript-eslint/no-useless-constructor': 'error',
'no-use-before-define': 'off',
'react/jsx-filename-extension': 'off',
'react/prop-types': 'off',
'comma-dangle': 'off',
'no-tabs': 'off',
'no-underscore-dangle': 'off',
 indent: ['error', 'tab'],
'react/jsx-indent': ['error', 'tab'],
'react/jsx-indent-props': ['error', 'tab'],
'import/no-extraneous-dependencies': ['error', {​​​​​​​​ devDependencies: true }​​​​​​​​],
'import/extensions': ['error', 'ignorePackages', {​​​​​​​​
 js: 'never',
 mjs: 'never',
 jsx: 'never',
 ts: 'never',
 tsx: 'never',
 }​​​​​​​​],
'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
'jam3/no-sanitizer-with-danger': [
2,
 {​​​​​​​​
 wrapperName: ['sanitizer']
 }​​​​​​​​
 ],
'react/jsx-props-no-spreading': ['error', {​​​​​​​​
 exceptions: ['Route', 'Component'] // off spreading rule for Route and named Component
 }​​​​​​​​]
 }​​​​​​​​,
 globals: {​​​​​​​​
 fetch: false
 }​​​​​​​​,
 settings: {​​​​​​​​
'import/resolver': {​​​​​​​​
 node: {​​​​​​​​
 extensions: ['.js', '.jsx', '.ts', '.tsx']
 }​​​​​​​​
 }​​​​​​​​
 }​​​​​​​​,
}​​​​​​​​;

