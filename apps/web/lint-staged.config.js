/** @type {import("lint-staged").Config} */
const config = {
	'*.{js,cjs,ts,tsx}': 'npm run lint -- --no-warn-ignored',
}

export default config
