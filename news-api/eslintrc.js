const path = require('path');

module.exports = {
    plugins: ['prettier', 'import', '@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    overrides: [
        {
            files: ['webpack.config.js', 'webpack.dev.config.js', 'webpack.prod.config.js'],
            parser: 'espree',
        },
    ],
    rules: {
        'no-debugger': 'off',
        'no-console': 0,
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};
