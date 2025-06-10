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
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			type: 'label',
			name: 'label',
			group: 'options',
		}),
		defineField({
			type: 'string',
			name: 'variant',
			group: 'options',
			description: '⚠️ Proceed with caution!',
			options: {
				list: ['title', 'subTitle', 'body', 'small'],
				layout: 'dropdown',
			},
		}),
		defineField({
			type: 'meta',
			name: 'meta',
			group: 'options',
		}),
	],
})
