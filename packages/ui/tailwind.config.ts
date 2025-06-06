import preset from '@spon/tailwind-config'
import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
	presets: [preset],
	theme: {
		capsize: {
			rootLineHeightUnitless: 1.2,
			fontMetrics: {
				knockout: {
					capHeight: 666,
					ascent: 841,
					descent: -231,
					lineGap: 0,
					unitsPerEm: 1000,
					xHeight: 480,
					xWidthAvg: 302,
				},
				gotham: {
					capHeight: 700,
					ascent: 960,
					descent: -240,
					lineGap: 0,
					unitsPerEm: 1000,
					xHeight: 517,
					xWidthAvg: 502,
				},
			},
			className: 'trim',
		},
	},
} satisfies Config
