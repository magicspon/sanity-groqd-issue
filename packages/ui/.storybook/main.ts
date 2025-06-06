import type { StorybookConfig } from '@storybook/react-webpack5'
import { dirname, join, resolve } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
	return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@chromatic-com/storybook'),
		getAbsolutePath('@storybook/addon-interactions'),
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					// Replaces existing CSS rules to support PostCSS
					{
						test: /\.css$/,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: { importLoaders: 1 },
							},
							{
								// Gets options from `postcss.config.js` in your project root
								loader: 'postcss-loader',
								options: { implementation: require.resolve('postcss') },
							},
						],
					},
				],
			},
		},
	],
	framework: '@storybook/react-webpack5',
	docs: {
		autodocs: 'tag',
	},

	webpackFinal: async (config) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore this is fine
		config.resolve.alias = {
			// eslint-disable-next-line @typescript-eslint/no-misused-spread
			...config.resolve!.alias,
			'@spon/ui': resolve(__dirname, '../src'),
		}

		return config
	},
}
export default config
