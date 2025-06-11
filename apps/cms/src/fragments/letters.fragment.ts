import type { InferFragmentType } from 'groqd'
import type { Letters } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'
import { metaFragment } from './meta.fragment'

export const lettersFragment = q.fragment<Letters>().project(() => ({
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
	...metaFragment,
}))

export type LettersFragment = InferFragmentType<typeof lettersFragment>
