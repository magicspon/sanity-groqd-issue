import { notFound } from 'next/navigation'
import React from 'react'
import { pageFragment } from '@spon/cms/src/fragments/page.fragment'
import { q } from '@spon/cms/src/lib/groqd-client'
import { getFirstOrNull } from '@spon/utils/getFirstOrNull'
import { createPage } from '~/utils/createPage'
import { createSanityFetcher } from '~/utils/createSanityFetcher'

const { Page, generateMetadata } = createPage({
	loader: async () => {
		const { fetcher } = await createSanityFetcher()
		const query = q.star
			.filterByType('page')
			.slice(2, 3)
			.project({ ...pageFragment })

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
		console.log(data)

		// if (data.group) {
		// 	const a = data.group.find((d) => d._type === 'group')
		// 	if (a && a._type === 'group') {
		// 		const b = a.group?.find((d) => d._type === 'group')
		// 		if (b && b._type === 'group') {
		// 			const c = b.group?.find((d) => d._type === 'group')
		// 			if (c && c._type === 'group') {
		// 				const d = c.group?.find((d) => d._type === 'group')
		// 				if (d && d._type === 'group') {
		// 					const e = d.group?.find((d) => d._type === 'group')
		// 					if (e && e._type === 'group') {
		// 						const f = e.group?.find((d) => d._type === 'group')
		// 						// if (f && f._type === 'group') {
		// 						// 	//
		// 						// 	const text = f.group?.find((f) => f._type === 'letters')
		// 						// 	console.log(text)
		// 						// }
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		return <pre>{JSON.stringify(data, null, 2)}</pre>
	},
})

export default Page
export { generateMetadata }
