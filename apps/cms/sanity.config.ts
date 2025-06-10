/**
 * This config is used to configure your Sanity Studio.
 * Learn more: https://www.sanity.io/docs/configuration
 */
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { assist } from '@sanity/assist'
import { codeInput } from '@sanity/code-input'
import { documentInternationalization } from '@sanity/document-internationalization'
// import { groqdPlaygroundTool } from 'groqd-playground';
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
	type DocumentLocation,
	defineDocuments,
	defineLocations,
	presentationTool,
} from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { PROJECT_ID } from './src/lib/env'
import { schemaTypes } from './src/schemaTypes/handle'
import { structure } from './src/structure'

// Environment variables for project configuration
const projectId = PROJECT_ID
const dataset = 'production'

console.log({ projectId })

// URL for preview functionality, defaults to localhost:3000 if not set
const SANITY_STUDIO_PREVIEW_URL =
	process.env.SANITY_STUDIO_PREVIEW_URL ?? 'http://localhost:3000'

// Define the home location for the presentation tool
const homeLocation = {
	title: 'Home',
	href: '/',
} satisfies DocumentLocation

// resolveHref() is a convenience function that resolves the URL
// path for different document types and used in the presentation tool.
function resolveHref(documentType?: string, slug?: string): string | undefined {
	switch (documentType) {
		case 'post':
			return slug ? `/posts/${slug}` : undefined
		case 'page':
			return slug ? `/${slug}` : undefined
		default:
			console.warn('Invalid document type:', documentType)
			return undefined
	}
}

// Main Sanity configuration
export default defineConfig({
	name: 'default',
	title: 'cms',
	basePath: '/studio',
	projectId,
	dataset,

	plugins: [
		// Presentation tool configuration for Visual Editing
		presentationTool({
			previewUrl: {
				origin: SANITY_STUDIO_PREVIEW_URL,
				previewMode: {
					enable: '/api/draft-mode/enable',
				},
			},
			resolve: {
				// The Main Document Resolver API provides a method of resolving a main document from a given route or route pattern. https://www.sanity.io/docs/presentation-resolver-api#57720a5678d9
				mainDocuments: defineDocuments([
					{
						route: '/:slug',
						filter: `_type == "page" && slug.current == $slug || _id == $slug`,
					},
					{
						route: '/posts/:slug',
						filter: `_type == "post" && slug.current == $slug || _id == $slug`,
					},
				]),
				// Locations Resolver API allows you to define where data is being used in your application. https://www.sanity.io/docs/presentation-resolver-api#8d8bca7bfcd7
				locations: {
					settings: defineLocations({
						locations: [homeLocation],
						message: 'This document is used on all pages',
						tone: 'positive',
					}),
					page: defineLocations({
						select: {
							name: 'name',
							slug: 'slug.current',
						},
						resolve: (doc) => ({
							locations: [
								{
									title: doc?.name ?? 'Untitled',
									href: resolveHref('page', doc?.slug)!,
								},
							],
						}),
					}),
					post: defineLocations({
						select: {
							title: 'title',
							slug: 'slug.current',
						},
						resolve: (doc) => ({
							locations: [
								{
									title: doc?.title ?? 'Untitled',
									href: resolveHref('post', doc?.slug)!,
								},
								{
									title: 'Home',
									href: '/',
								} satisfies DocumentLocation,
							].filter(Boolean) as DocumentLocation[],
						}),
					}),
				},
			},
		}),
		structureTool({
			structure, // Custom studio structure configuration, imported from ./src/structure.ts
		}),
		documentInternationalization({
			// Required configuration
			supportedLanguages: [
				{ id: 'es', title: 'Spanish' },
				{ id: 'en', title: 'English' },
			],
			schemaTypes: ['page'],
		}),
		// Additional plugins for enhanced functionality
		unsplashImageAsset(),
		assist(),
		inlineSvgInput(),
		// groqdPlaygroundTool(),
		codeInput(),
	],

	// Schema configuration, imported from ./src/schemaTypes/index.ts
	schema: {
		types: schemaTypes,
	},
})
