import { notFound } from 'next/navigation'
import React from 'react'
import { groupFragment } from '@spon/cms/src/fragments/group'
import { q, z } from '@spon/cms/src/lib/groqd-client'
import { getFirstOrNull } from '@spon/utils/getFirstOrNull'
import { createPage } from '~/utils/createPage'
import { createSanityFetcher } from '~/utils/createSanityFetcher'

const { Page, generateMetadata } = createPage({
	loader: async () => {
		const { fetcher } = await createSanityFetcher()
		const query = q.star
			.filterByType('page')
			.slice(0, 1)
			.project((sub) => ({
				title: z.string(),
				slug: ['slug.current', z.string()],
				group: sub.field('group[]').project(groupFragment).nullable(true),
			}))

		console.log(query)

		const response = await fetcher(
			query,

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
		console.log({ data })

		if (data.group) {
			const a = data.group.find((d) => d._type === 'group')
			if (a && a._type === 'group') {
				const b = a.group?.find((d) => d._type === 'group')
				if (b && b._type === 'group') {
					const c = b.group?.find((d) => d._type === 'group')
					if (c && c._type === 'group') {
						const d = c.group?.find((d) => d._type === 'group')
					}
				}
			}
		}

		return <pre>{JSON.stringify(data, null, 2)}</pre>
	},
})

export default Page
export { generateMetadata }
