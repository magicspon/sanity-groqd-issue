import type { InferFragmentType } from 'groqd'
import type { Page } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'
import { groupFragment } from './group.fragment'

export const blocksFragment = q.fragment<Page>().project((sub) => ({
	blocks: sub
		.field('blocks[]')
		.project((q) => ({
			...q.conditionalByType({
				group: (g) => ({
					_type: z.literal('group'),
					variant: z.string().nullable(),
					group: g
						.field('group[]')
						.project({ ...groupFragment })
						.nullable(true),
				}),
			}),
		}))
		.nullable(true),
}))

export type BlocksFragment = InferFragmentType<typeof blocksFragment>

export const pageFragment = q.fragment<Page>().project(() => ({
	_type: z.literal('page'),
	title: z.string(),
	language: z.string().nullable(),
	slug: ['slug.current', z.string()],
	...blocksFragment,
}))
