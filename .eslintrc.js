module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'valid-jsdoc': 'error',
    // compared to airbnb-base, this allows devDependencies in features/**
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tests/**', '**/stories/*', 'tools/**'],
        optionalDependencies: false,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
