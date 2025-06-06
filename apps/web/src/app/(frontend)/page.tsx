import { notFound } from 'next/navigation'
import React from 'react'
import { q, z } from '@spon/cms/src/lib/groqd-client'
import { getFirstOrNull } from '@spon/utils/getFirstOrNull'
import { createPage } from '~/utils/createPage'
import { createSanityFetcher } from '~/utils/createSanityFetcher'

const { Page, generateMetadata } = createPage({
	loader: async () => {
		const { fetcher } = await createSanityFetcher()

		const response = await fetcher(
			q.star
				.filterByType('page')
				.slice(0, 1)
				.project((sub) => ({
					title: z.string(),
					slug: ['slug.current', z.string()],
					group: sub.field('group[]').project((q1) => ({
						...q1.conditionalByType({
							group: q1.project({
								_type: z.literal('group'),
								_key: z.string(),
							}),
							letters: q1.project({
								_type: z.literal('letters'),
								_key: z.string(),
								label: z.string(),
								value: z.string(),
							}),
						}),
					})),
				})),

			{ next: { tags: ['home'] } },
		)

		const data = getFirstOrNull(response)

		if (!data) {
			notFound()
		}

		return data
	},

	metadata: async ({ data }) => {
		return {
			title: data.title,
		}
	},

	component: async ({ data }) => {
		return <pre>{JSON.stringify(data, null, 2)}</pre>
	},
})

export default Page
export { generateMetadata }
