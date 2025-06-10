import type { InferFragmentType } from 'groqd'
import type { Link, Prose } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export type ProseContent = NonNullable<Prose['value']>[number] & {
	_type: 'content'
}

const hrefRelationFragment = q.fragment<Link>().project((p) => ({
	...p.conditional({
		"type == 'external'": {
			href: p.field('url', z.string().nullable()),
		},
		"type == 'custom'": {
			href: p.field('custom', z.string().nullable),
		},
		"type == 'email'": {
			href: p.field('email', z.string().nullable),
		},
		"type == 'internal'": {
			href: p
				.field('href')
				.deref()
				.field('slug.current', z.string().nullable()),
		},
	}),
}))

export const contentFragment = q.fragment<ProseContent>().project((p) => ({
	_type: z.literal('content'),
	_key: z.string(),
	style: z.string().nullable(),
	listItem: z.string().nullable(),
	children: p.field('children[]').project((p1) => ({
		_type: z.literal('span'),
		_key: z.string(),
		marks: p1.field('marks[]'),
		text: z.string().nullable(),
	})),
	markDefs: p
		.field('markDefs[]')
		.project((p1) => ({
			...p1.conditionalByType({
				link: {
					type: z.union([
						z.literal('external'),
						z.literal('internal'),
						z.literal('email'),
						z.literal('custom'),
					]),
					...hrefRelationFragment,
				},
			}),
		}))
		.nullable(true),
}))

export const proseFragment = q.fragment<Prose>().project((sub) => ({
	_type: z.literal('prose'),
	// label: z.string().nullable(),
	variant: z
		.union([
			z.literal('cta'),
			z.literal('primary'),
			z.literal('hero'),
			z.literal('small'),
		])
		.nullable(),
	meta: sub
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
	value: sub.field('value[]').project((p) => ({
		...p.conditionalByType({
			// letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
			// markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
			// asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
			// link: (q) => q.project({ ...linkFragment, _key: z.string() }),
			// json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
			content: contentFragment,
		}),
	})),
}))

export type ProseFragment = InferFragmentType<typeof proseFragment>
