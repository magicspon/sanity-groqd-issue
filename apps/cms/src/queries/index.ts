import { z } from 'groqd'
import { q } from '../lib/groqd-client'

export const data = q.star
	.filterByType('page')
	.slice(0, 1)

	.project(() => ({
		title: z.string(),
	}))
