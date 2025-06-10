import { CogIcon, EarthGlobeIcon } from '@sanity/icons'
import pluralize from 'pluralize-esm'
import type { StructureBuilder, StructureResolver } from 'sanity/structure'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context']

const LANGUAGES = [
	{ id: 'en', title: 'English' },
	{ id: 'es', title: 'Spanish' },
	{ id: 'fr', title: 'French' },
	{ id: 'de', title: 'German' },
	// Add more languages as needed
]

export const structure: StructureResolver = (S: StructureBuilder) =>
	S.list()
		.title('Website Content')
		.items([
			...LANGUAGES.map((language) =>
				S.listItem()
					.title(`${language.title} Content`)
					.icon(EarthGlobeIcon)
					.child(
						S.list()
							.title(`${language.title} Documents`)
							.items([
								...S.documentTypeListItems()
									.filter(
										(listItem) => !DISABLED_TYPES.includes(listItem.getId()!),
									)
									.map((listItem) => {
										const schemaType = listItem.getId()
										return S.listItem()
											.title(pluralize(listItem.getTitle()!))
											.child(
												S.documentList()
													.title(
														`${language.title} ${pluralize(listItem.getTitle()!)}`,
													)
													.filter(
														`_type == "${schemaType}" && language == "${language.id}"`,
													)
													.defaultOrdering([
														{ field: '_updatedAt', direction: 'desc' },
													]),
											)
									}),
							]),
					),
			),

			...S.documentTypeListItems()
				// Remove the "assist.instruction.context" and "settings" content  from the list of content types
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				.filter((listItem: any) => !DISABLED_TYPES.includes(listItem.getId()))
				// Pluralize the title of each document type.  This is not required but just an option to consider.
				.map((listItem) => {
					return listItem.title(pluralize(listItem.getTitle()!))
				}),
			// Settings Singleton in order to view/edit the one particular document for Settings.  Learn more about Singletons: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
			S.listItem()
				.title('Site Settings')
				.child(S.document().schemaType('settings').documentId('siteSettings'))
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore this is fine
				.icon(CogIcon),
		])
