import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    },
    {
        files: ['**/*.{js,cjs,mjs}'],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
            },
        },
        settings: {
            'import/resolver': {
                typescript: {},
                node: {
                    extensions: ['.ts', '.tsx', '.js'],
                },
            },
            react: { version: 'detect' },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: eslintPluginReact,
            'react-hooks': eslintPluginReactHooks,
            'react-refresh': eslintPluginReactRefresh,
        },
        rules: {
            // React-правила поверх рекомендуемых от typescript-eslint
            ...tseslint.configs.recommended.rules,
            ...eslintPluginReact.configs.recommended.rules,
            ...eslintPluginReact.configs['jsx-runtime'].rules,
            ...eslintPluginReactHooks.configs.recommended.rules,

            // Твои кастомные исключения
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off', // в TS не нужны
            'react/display-name': 'off'
        },
    },
];
