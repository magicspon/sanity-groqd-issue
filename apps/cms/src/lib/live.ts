import { defineLive } from 'next-sanity'
import { READ_TOKEN } from './env'
import { sanityClient } from './groqd-client'

export const { sanityFetch, SanityLive } = defineLive({
	client: sanityClient,
	serverToken: READ_TOKEN,
	browserToken: READ_TOKEN,
})
