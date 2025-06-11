import { notFound } from 'next/navigation'
import React from 'react'
import { z } from 'zod'
import { pageFragment } from '@spon/cms/src/fragments/page.fragment'
import { q } from '@spon/cms/src/lib/groqd-client'
import { getFirstOrNull } from '@spon/utils/getFirstOrNull'
import { ComponentTree } from '~/components/ComponentTree'
import { createPage } from '~/utils/createPage'
import { createSanityFetcher } from '~/utils/createSanityFetcher'

const { Page, generateMetadata } = createPage({
	params: z.object({
		segments: z.array(z.string()),
	}),
	loader: async ({ params }) => {
		const { fetcher } = await createSanityFetcher()
		const [language, slug] = params?.segments ?? []

		if (!language || !slug) {
			notFound()
		}

		const uri = params.segments.join('/')
		const query = q
			.parameters<{ slug: string; language: string }>()
			.star.filterByType('page')
			.filterBy('slug.current == $slug')
			.filterBy('language == $language')
			.slice(0, 1)
			.project({ ...pageFragment })

		const response = await fetcher(query, {
			next: { tags: [uri] },
			parameters: { slug, language },
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
		return (
			<>
				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
				{data.blocks && <ComponentTree blocks={data.blocks} />}
			</>
		)
	},
})

export default Page
export { generateMetadata }
