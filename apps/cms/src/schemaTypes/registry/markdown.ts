import { StringIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const markdown = defineType({
	name: 'markdown',
	type: 'object',
	icon: StringIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'value',
			type: 'text',
			group: 'content',
		}),
		defineField({
			type: 'label',
			name: 'label',
			group: 'options',
		}),
		defineField({
			type: 'variant',
			name: 'variant',
			group: 'options',
		}),
		defineField({
			type: 'meta',
			name: 'meta',
			group: 'options',
		}),
	],
})
