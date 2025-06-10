import { DocumentIcon } from '@sanity/icons'
import type { SlugValidationContext } from 'sanity'
import { defineField, defineType } from 'sanity'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export async function isUniqueOtherThanLanguage(
	slug: string,
	context: SlugValidationContext,
) {
	const { document, getClient } = context
	if (!document?.language) {
		return true
	}
	const client = getClient({ apiVersion: '2023-04-24' })
	const id = document._id.replace(/^drafts\./, '')
	const params = {
		id,
		language: document.language,
		slug,
	}
	const query = `!defined(*[
    !(sanity::versionOf($id)) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`
	const result = await client.fetch(query, params)
	return result
}

export const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	icon: DocumentIcon,
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
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
				isUnique: isUniqueOtherThanLanguage,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({ type: 'builder', name: 'blocks' }),
	],
})
