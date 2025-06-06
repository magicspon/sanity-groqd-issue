import { DocumentTextIcon } from '@sanity/icons'
// import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const post = defineType({
	name: 'post',
	title: 'Post',
	icon: DocumentTextIcon,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'A slug is required for the post to show up in the preview',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
	],
	// List preview configuration. https://www.sanity.io/docs/previews-list-views
	preview: {
		select: {
			title: 'title',
			// date: 'date',
			// media: 'coverImage',
		},
		prepare({
			title,
			// media, authorFirstName, authorLastName, date
		}) {
			// const subtitles = [
			// 	authorFirstName &&
			// 		authorLastName &&
			// 		`by ${authorFirstName} ${authorLastName}`,
			// 	date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
			// ].filter(Boolean)

			return {
				title,
				// media, subtitle: subtitles.join(' ')
			}
		},
	},
})
