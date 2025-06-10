import { marked } from 'marked'
import type { Markdown } from 'sanity.types'
import { q, z } from '../lib/groqd-client'

export const markdownFragment = q.fragment<Markdown>().project((q2) => ({
	_type: z.literal('markdown'),
	value: z
		.string()
		.nullable()
		.transform((s) => (s ? marked.parseInline(s) : null)),
	// label: z.string().nullable(),

	variant: z
		.union([
			z.literal('title'),
			z.literal('subTitle'),
			z.literal('body'),
			z.literal('small'),
		])
		.nullable(),
	meta: q2
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
}))
