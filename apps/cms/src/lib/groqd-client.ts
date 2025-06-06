import { createClient } from '@sanity/client'
import { createGroqBuilder, makeSafeQueryRunner } from 'groqd'
import type * as SanityTypes from '../../sanity.types.ts'
import { PROJECT_ID, READ_TOKEN } from './env'

export { z } from 'groqd'

export const sanityClient = createClient({
	projectId: PROJECT_ID,
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-05-23',
	perspective: 'published',
	token: process.env.SANITY_STUDIO_WRITE_TOKEN,
	stega: { studioUrl: '/studio' },
})

export const runQuery = makeSafeQueryRunner((query) =>
	sanityClient.fetch(query),
)

export const runDraftQuery = makeSafeQueryRunner(
	(query, params: Record<string, unknown> = {}) =>
		sanityClient.fetch(query, params, {
			token: READ_TOKEN,
			perspective: 'previewDrafts',
		}),
)

export type SchemaConfig = {
	schemaTypes: SanityTypes.AllSanitySchemaTypes
	referenceSymbol: typeof SanityTypes.internalGroqTypeReferenceTo
}

export const q = createGroqBuilder<SchemaConfig>({})
