// ESLint configuration for the project

module.exports = {
// Enviroments - What enviroments is this code going to run in?
  env: {
    browser: true,
    es2021: true,
  },
// Extends - Imported Rule Collections to ESLint
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
// Parser - The "Translators" of ESLint
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
// About the Module, you're basically saying to ESLint - "Expect Import/Export Syntax"
    sourceType: 'module',
    ecmaFeatures: {
// JSX is a syntax extension, and im just saying to ESLint that yes, the project contains JSX
      jsx: true,
    },
  },
// Complements... Each plugin contributes new rules.
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
// Just organizing. ESLint already had enough, but he must ignore these especific rules
  rules: {
/*
1.
Don't require me to write

import React from "react";

because modern React doesn't need it.
*/
    'react/react-in-jsx-scope': 'off',
/*
2.
Don't require PropTypes,

because TypeScript already checks my props.
*/
    'react/prop-types': 'off',
  },
};