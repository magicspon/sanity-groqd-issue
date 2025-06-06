import { TextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const letters = defineType({
	name: 'letters',
	title: 'Text',
	type: 'object',
	icon: TextIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'value',
			type: 'string',
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
