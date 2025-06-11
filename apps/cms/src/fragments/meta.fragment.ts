// import type { InferFragmentType } from 'groqd'
import { q, z } from '../lib/groqd-client'

export const metaFragment = q
	.fragment<{
		meta: {
			language?: string
			filename?: string
			code?: string
			highlightedLines?: number[]
			_type: 'meta'
		} | null
	}>()
	.project((q2) => ({
		meta: q2
			.field('meta')
			.project({
				code: z.string().nullable(),
			})
			.nullable(true),
	}))
