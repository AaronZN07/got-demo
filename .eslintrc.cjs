module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			js: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'warn',
		'react/prop-types': 'off',
		'prefer-const': 'warn',
		'no-unneeded-ternary': 'off',
		'no-useless-return': 'off',
		'prefer-promise-reject-errors': 'off',
		'unknown-at-rules': 'off'
	},
};
