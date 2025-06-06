import { DocumentsIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const reference = defineType({
	name: 'related',
	type: 'object',
	icon: DocumentsIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'value',
			title: 'Reference',
			type: 'reference',
			to: [{ type: 'page' }],
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
