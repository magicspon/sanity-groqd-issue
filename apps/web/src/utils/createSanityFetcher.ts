import { draftMode } from 'next/headers'
import { runDraftQuery, runQuery } from '@spon/cms/src/lib/groqd-client'

export const token = process.env.SANITY_STUDIO_READ_TOKEN

export async function createSanityFetcher() {
	const isDraftMode = (await draftMode()).isEnabled
	if (isDraftMode && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required.',
		)
	}

	return {
		isDraftMode,
		fetcher: isDraftMode ? runDraftQuery : runQuery,
	}
}
