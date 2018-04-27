module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    'valid-jsdoc': 'error',
    // compared to airbnb-base, this allows devDependencies in features/**
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tools/**', '**/stories/*'],
        optionalDependencies: false,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
