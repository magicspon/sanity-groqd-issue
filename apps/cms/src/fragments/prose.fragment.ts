import type { Prose } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

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
			content: {
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
								...p1.conditional({
									"type == 'external'": {
										href: p1.field('url', z.string().nullable()),
									},
									"type == 'custom'": {
										href: p1.field('custom', z.string().nullable),
									},
									"type == 'email'": {
										href: p1.field('email', z.string().nullable),
									},
									"type == 'internal'": {
										href: p1
											.field('href')
											.deref()
											.field('slug.current', z.string()),
									},
								}),
							},
						}),
					}))
					.nullable(true),
			},
		}),
	})),
}))
