import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const asset = defineType({
	name: 'asset',
	type: 'object',
	icon: ImageIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'type',
			title: 'Type',
			type: 'string',
			initialValue: 'image',
			validation: (Rule) => Rule.required(),
			group: 'content',
			options: {
				layout: 'radio',
				direction: 'horizontal',
				list: [
					{ value: 'image', title: 'image' },
					{ value: 'svg', title: 'svg' },
					{ value: 'file', title: 'file' },
				],
			},
		}),
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
				hotspot: true,
			},
			hidden: ({ parent }) => parent?.type !== 'image',
			group: 'content',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Attribution',
					validation: (Rule) => Rule.required(),
					hidden: ({ parent }) => {
						return !parent?.asset
					},
				},
			],
		}),
		defineField({
			name: 'file',
			type: 'file',
			title: 'File',
			group: 'content',
			hidden: ({ parent }) => parent?.type !== 'file',
		}),
		defineField({
			name: 'svg',
			title: 'SVG Icon',
			type: 'inlineSvg',
			group: 'content',
			hidden: ({ parent }) => {
				return parent?.type !== 'svg'
			},
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
				list: ['natural', 'avatar', 'hero'],
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
