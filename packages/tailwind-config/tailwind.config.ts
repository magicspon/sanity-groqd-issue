import containerQueries from '@tailwindcss/container-queries'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore meh
import capsize from '@themosaad/tailwindcss-capsize'
import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { extraVariants } from './lib/extra-variants'
// import { nprogressPlugin } from './lib/nprogress-plugin'
import { numberPlugin } from './lib/number-plugin'
import { radixPlugin } from './lib/radix-plugin'
import { shadcnPlugin } from './lib/shadcn-plugin'

const config = {
	content: {
		files: ['./src/**/*.{ts,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
	},
	darkMode: 'class',
	plugins: [
		animate,
		containerQueries,
		capsize,
		shadcnPlugin,
		extraVariants,
		// nprogressPlugin,
		numberPlugin,
		radixPlugin,
	],
	theme: {
		extend: {
			aspectRatio: {
				'16/10': '16/10',
			},
			backgroundImage: {
				chevron: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
			},

			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				dot: 'hsl(var(--dot))',
				border: 'hsl(var(--border))',
			},

			fontFamily: {
				knockout: ['var(--font-knockout)'],
				gotham: ['var(--font-gotham)'],
			},

			lineHeight: {
				'85': '0.85',
				'90': '0.90',
				'130': '1.3',
				'140': '1.4',
			},

			margin: {
				esc: 'calc(50% - 50vw)',
			},

			maxWidth: {
				'8xl': '90rem',
			},

			zIndex: {
				100: '100',
				500: '500',
				1000: '1000',
			},
		},
		data: {
			on: 'state~="on"',
			checked: 'state~="checked"',
			unchecked: 'state~="unchecked"',
			active: 'state~="active"',
			inactive: 'state~="inactive"',
			open: 'state~="open"',
			closed: 'state~="closed"',
			cancels: 'state~="cancels"',
			loading: 'state~="loading"',
			pending: 'state~="pending"',
			finished: 'state~="finished"',
			recording: 'state~="recording"',
			start: 'swipe~="start"',
			move: 'swipe~="move"',
			cancel: 'swipe~="cancel"',
			end: 'swipe~="end"',
		},
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

export default config
