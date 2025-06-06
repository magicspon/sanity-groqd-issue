import { CodeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const code = defineType({
	name: 'json',
	title: 'Code',
	type: 'object',
	icon: CodeIcon,
	groups: [{ name: 'content', default: true }],
	fields: [
		defineField({
			name: 'value',
			type: 'code',
			options: {
				language: 'JSON',
				languageAlternatives: [{ title: 'JSON', value: 'json' }],
			},
			group: 'content',
		}),
	],
})
