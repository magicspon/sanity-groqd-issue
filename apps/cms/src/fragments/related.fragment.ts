import type { InferFragmentType } from 'groqd'
import type { Related } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export const relatedFragment = q.fragment<Related>().project((q2) => ({
	_type: z.literal('related'),
	variant: z.string().nullable(),
	meta: q2
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
}))

export type RelatedFragment = InferFragmentType<typeof relatedFragment>
