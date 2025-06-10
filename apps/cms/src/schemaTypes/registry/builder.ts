import { defineArrayMember, defineField, defineType } from 'sanity'

export const builder = defineType({
	name: 'builder',
	type: 'array',
	of: [
		defineArrayMember({
			name: 'group',
			type: 'object',
			groups: [{ name: 'content', default: true }, { name: 'options' }],
			fields: [
				defineField({ name: 'label', type: 'label', group: 'options' }),
				defineField({
					type: 'string',
					name: 'variant',
					group: 'options',
					description: '⚠️ Proceed with caution!',
					// options: {
					// 	list: ['link', 'primary', 'secondary', 'ghost', 'outline'],
					// 	layout: 'dropdown',
					// },
				}),
				defineField({ name: 'meta', type: 'meta', group: 'options' }),
				defineField({
					type: 'group',
					name: 'group',
					group: 'content',
				}),
			],
		}),
	],
})
