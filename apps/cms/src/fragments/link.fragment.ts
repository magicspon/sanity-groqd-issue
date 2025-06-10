import type { InferFragmentType } from 'groqd'
import type { Link } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export const linkFragment = q.fragment<Link>().project((sub) => ({
	_type: z.literal('link'),
	text: z.string().nullable(),
	label: z.string().nullable(),
	variant: z
		.union([
			z.literal('link'),
			z.literal('primary'),
			z.literal('secondary'),
			z.literal('ghost'),
			z.literal('outline'),
		])
		.nullable(),
	...sub.conditional({
		'type == "email"': {
			href: sub.field('email', z.string().email()),
		},
		'type == "custom"': {
			href: sub.field('custom', z.string()),
		},
		'type == "url"': {
			href: sub.field('url', z.string().url()),
		},
		'type == "internal"': {
			href: sub.field('href').deref().field('slug.current', z.string()),
		},
	}),
}))

export type LinkFragment = InferFragmentType<typeof linkFragment>
