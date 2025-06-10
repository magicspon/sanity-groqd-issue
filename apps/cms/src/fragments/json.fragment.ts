import type { InferFragmentType } from 'groqd'
import type { Json } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'

export const jsonFragment = q.fragment<Json>().project((sub) => ({
	_type: z.literal('json'),
	value: sub.field('value').project({
		code: z.string().nullable(),
	}),
}))

export type JSONFragment = InferFragmentType<typeof jsonFragment>
