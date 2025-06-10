import type { InferFragmentType } from 'groqd'
import type { Letters } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export const lettersFragment = q.fragment<Letters>().project((sub) => ({
	_type: z.literal('letters'),
	value: z.string().nullable(),
	// label: z.string().nullable(),
	variant: z
		.union([
			z.literal('title'),
			z.literal('subTitle'),
			z.literal('body'),
			z.literal('small'),
		])
		.nullable(),
	meta: sub
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),
}))

export type LettersFragment = InferFragmentType<typeof lettersFragment>
