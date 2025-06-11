// import type { InferFragmentType } from 'groqd'
import type { InferFragmentType } from 'groqd'
import { marked } from 'marked'
import type { Markdown } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'
import { metaFragment } from './meta.fragment'

export const markdownFragment = q.fragment<Markdown>().project(() => ({
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
	...metaFragment,
}))

export type MarkdownFragment = InferFragmentType<typeof markdownFragment>
