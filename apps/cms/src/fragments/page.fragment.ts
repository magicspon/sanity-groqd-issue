import type { Page } from '../../sanity.types'
import { q, z } from '../lib/groqd-client'
import { groupFragment } from './group.fragment'

export const pageFragment = q.fragment<Page>().project((sub) => ({
	_type: z.literal('page'),
	title: z.string(),
	language: z.string().nullable(),
	slug: ['slug.current', z.string()],
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
