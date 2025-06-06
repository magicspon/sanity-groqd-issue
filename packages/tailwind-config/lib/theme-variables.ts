import plugin from 'tailwindcss/plugin'

export const themeVariables = plugin(({ addBase }) => {
	// colours
	addBase({
		':root, .light': {
			'--base': '200',
			'--target': '80',
			'--ratio': 'calc(var(--target) / var(--base))',

			'--background': '0 0% 100%', // #fff
			'--foreground': '260 100% 14%', // #180047

			'--accent': '337 90% 96%', // #feecf3
			'--accent-foreground': '260 100% 14%', // #180047
		},
	})
})
