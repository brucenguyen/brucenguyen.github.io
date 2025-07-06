import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import stylistic from '@stylistic/eslint-plugin'

export default [
  // Base configuration for all files
  js.configs.recommended,
  
  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      '@stylistic': stylistic,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Stylistic rules
      '@stylistic/spaced-comment': ['error', 'always', { markers: ['/'] }],
      
      // General rules
      'consistent-return': 'error',
      'no-case-declarations': 'off',
      'no-console': 'warn',
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  
  // JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@stylistic': stylistic,
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Stylistic rules
      '@stylistic/spaced-comment': ['error', 'always', { markers: ['/'] }],
      
      // General rules
      'consistent-return': 'error',
      'no-case-declarations': 'off',
      'no-console': 'warn',
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  
  // Configuration files
  {
    files: ['*.config.{js,ts}', 'vite.config.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
    },
  },
] 
