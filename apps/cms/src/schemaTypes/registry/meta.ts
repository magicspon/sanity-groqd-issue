import { defineField } from 'sanity'

export const meta = defineField({
	name: 'meta',
	type: 'code',
	options: {
		language: 'JSON',
		languageAlternatives: [{ title: 'JSON', value: 'json' }],
	},
})
