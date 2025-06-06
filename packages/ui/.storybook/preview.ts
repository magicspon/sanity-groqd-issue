import '../src/style/global.css'
import type { Preview } from '@storybook/react'

// replace with the name of your tailwind css file

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			canvas: {
				sourceState: 'shown',
			},
		},
	},
}

export default preview
