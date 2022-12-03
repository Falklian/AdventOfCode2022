module.exports = {
  env: {
    // https://eslint.org/docs/user-guide/configuring/language-options
    // Adjust these options as needed, not all are relevant!
    commonjs: true, // CommonJS global variables and scoping (use this for browser-only code using Browserify/WebPack)
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    node: true // Node.js global variables and Node.js scoping
  },
  extends: ['airbnb-base'],
  parserOptions: {
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
    ecmaVersion: 12 // specify the version of ECMAScript syntax you want to use
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'max-len': ['error', { code: 120 }],
    'operator-linebreak': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
    'implicit-arrow-linebreak': 'off',
    'no-restricted-syntax': ['error', 'ForStatement'],
    'no-await-in-loop': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
