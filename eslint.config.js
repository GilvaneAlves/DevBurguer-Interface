import js from '@eslint/js'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignorar pastas globais
  {
    ignores: globalIgnores(['dist']),
  },

  // Configuração principal para JS/JSX
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,               // ESLint recomendado
      'plugin:react/recommended',           // Regras básicas de React
      'plugin:react-hooks/recommended',     // Hooks do React
      'plugin:react-refresh/recommended',   // React Refresh (Vite)
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      react: {},      // Necessário para o plugin react
      'react-hooks': {},
      'react-refresh': {},
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off',             // Desliga prop-types se usar TypeScript ou não quiser
      'react/react-in-jsx-scope': 'off',     // JSX no React 17+ não precisa importar React
    },
    settings: {
      react: {
        version: 'detect',                    // Detecta automaticamente a versão do React
      },
    },
  },
])
