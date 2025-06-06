import 'react'

declare module 'react' {
	interface CSSProperties {
		// Add your custom properties here
		'--background'?: `${string} ${string}% ${string}%`
		'--foreground'?: `${string} ${string}% ${string}%`
		'--accent'?: `${string} ${string}% ${string}%`
	}
}
