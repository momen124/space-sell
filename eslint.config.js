import next from 'eslint-config-next';
import typescript from '@typescript-eslint/eslint-plugin';

export default [
  // Basic ESLint configuration for TypeScript files
  {
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      // Customize rules here
    },
  },
  
  // Next.js ESLint configuration
  next,
  
  // TypeScript ESLint plugin configuration
  typescript,
];
