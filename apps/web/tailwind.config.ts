import type { Config } from 'tailwindcss'
import preset from '@spon/tailwind-config'

export default {
	content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
	presets: [preset],
} satisfies Config
