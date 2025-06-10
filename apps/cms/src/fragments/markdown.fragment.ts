import type { InferFragmentType } from 'groqd'
import { marked } from 'marked'
import type { Markdown } from 'sanity.types'
import { q, z } from '../lib/groqd-client'

export const markdownFragment = q.fragment<Markdown>().project((q2) => ({
	markdown: z.string().transform((s) => (s ? marked.parseInline(s) : null)),
	_type: z.literal('markdown'),
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

export type MarkdownFragment = InferFragmentType<typeof markdownFragment>
