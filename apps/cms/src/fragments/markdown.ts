import type { Markdown } from 'sanity.types'
import { q, z } from '../lib/groqd-client'

export const markdownFragment = q.fragment<Markdown>().project((q2) => ({
	_type: z.literal('markdown'),
	value: z.string().nullable(),
	label: z.string().nullable(),
	variant: z.string().nullable(),
	meta: q2
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
}))
