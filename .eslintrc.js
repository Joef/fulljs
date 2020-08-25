module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    plugins: ['react-hooks', 'react', 'prettier'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaVersion: 2018,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
      sourceType: 'module',
    },
    rules: {
      // You can do your customizations here...
      // For example, if you don't want to use the prop-types package,
      // you can turn off that recommended rule with: 'react/prop-types': ['off']
      'react/prop-types': ['off'],
      'prettier/prettier': 'error'
    },
  };