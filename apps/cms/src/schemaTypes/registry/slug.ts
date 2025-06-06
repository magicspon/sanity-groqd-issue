import { defineField } from 'sanity'

export const slug = defineField({
	name: 'handle',
	title: 'Slug',
	type: 'slug',
	validation: (Rule) => Rule.required(),
	options: {
		source: 'name',
		maxLength: 96,
	},
})
