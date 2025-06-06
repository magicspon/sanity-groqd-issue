import { defaultExclude, defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		include: ['**/*.test.ts'],
		exclude: defaultExclude,
	},
})
