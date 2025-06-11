import { pageFragment } from '../fragments/page.fragment'
import { q } from '../lib/groqd-client'

export const pageQuery = q
	.parameters<{ slug: string; language: string }>()
	.star.filterByType('page')
	.filterBy('slug.current == $slug')
	.filterBy('language == $language')
	.slice(0, 1)
	.project({ ...pageFragment })

console.log(pageQuery.query)
