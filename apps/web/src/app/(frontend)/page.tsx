import { notFound } from 'next/navigation'
import React from 'react'
import { pageFragment } from '@spon/cms/src/fragments/page.fragment'
import { q } from '@spon/cms/src/lib/groqd-client'
import { getFirstOrNull } from '@spon/utils/getFirstOrNull'
import { ComponentTree } from '~/components/ComponentTree'
import { createPage } from '~/utils/createPage'
import { createSanityFetcher } from '~/utils/createSanityFetcher'

const { Page, generateMetadata } = createPage({
	loader: async () => {
		const { fetcher } = await createSanityFetcher()
		const query = q
			.parameters<{ slug: string; language: string }>()
			.star.filterByType('page')
			.filterBy('slug.current == $slug')
			.filterBy('language == $language')
			.slice(0, 1)
			.project({ ...pageFragment })

		const response = await fetcher(query, {
			next: { tags: ['home'] },
			parameters: { slug: 'vuse-reload', language: 'en' },
		})

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

		return <>{data.blocks && <ComponentTree blocks={data.blocks} />}</>
	},
})

export default Page
export { generateMetadata }
