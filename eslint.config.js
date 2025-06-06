import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// https://github.com/sindresorhus/globals/issues/239

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
	AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
})

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope ']

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: GLOBALS_BROWSER_FIX } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
]
