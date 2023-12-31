module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules/', '**/node_modules/', '/**/node_modules/*', 'out/', 'dist/', 'build/'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect', // You can specify the React version here
    },
  },
  rules: {
    semi: [2, 'always'],
    'react/prop-types': 'off',
  },
};
