import type { Letters } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export const lettersFragment = q.fragment<Letters>().project((sub) => ({
	_type: z.literal('letters'),
	value: z.string().nullable(),
	label: z.string().nullable(),
	variant: z.string().nullable(),
	meta: sub
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
}))
