import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './groqd-client'

const builder = imageUrlBuilder(sanityClient)

export function urlBuilder(source: SanityImageSource) {
	return builder.image(source)
}
