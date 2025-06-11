import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { portableTextToString } from '../../utils/portableTextToString'
import { blockLink } from './link'

export const prose = defineType({
	name: 'prose',
	type: 'object',
	icon: DocumentTextIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'value',
			type: 'array',
			group: 'content',
			of: [
				defineArrayMember({
					type: 'block',
					name: 'content',
					marks: {
						annotations: [blockLink],
					},
				}),
			],
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
				list: ['cta', 'primary', 'hero', 'small'],
				layout: 'dropdown',
			},
		}),
		defineField({
			type: 'meta',
			name: 'meta',
			group: 'options',
		}),
	],

	preview: {
		select: {
			value: 'value',
			variant: 'variant',
			label: 'label',
			type: 'type',
		},
		prepare(value) {
			return {
				title: portableTextToString(value.value),
				description: `${value.label}, type: ${value.type}, variant: ${value.variant}`,
			}
		},
	},
})
