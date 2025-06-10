import type { InferFragmentType } from 'groqd'
import type { Asset, SanityImageAsset } from 'sanity.types'
import { q, z } from '../lib/groqd-client'

const assetImage = q.fragment<SanityImageAsset>().project((q2) => ({
	width: q2.field('metadata.dimensions.width', z.number().nullable()),
	height: q2.field('metadata.dimensions.height', z.number().nullable()),
	lqip: q2.field('metadata.lqip', z.string().nullable()),
	src: q2.field('url', z.string().nullable()),
}))

export const assetFragment = q.fragment<Asset>().project((q2) => ({
	_type: z.literal('asset'),
	type: z.union([z.literal('image'), z.literal('svg'), z.literal('file')]),
	// label: z.string().nullable(),
	variant: z
		.union([z.literal('natural'), z.literal('avatar'), z.literal('hero')])
		.nullable(),
	meta: q2
		.field('meta')
		.project({
			code: z.string().nullable(),
		})
		.nullable(true),

	...q2.conditional({
		'type == "svg"': {
			svg: z.string().nullable(),
		},
		'type == "file"': {
			file: q2.field('file.asset').deref().project({
				url: z.string().nullable(),
			}),
		},
		'type == "image"': {
			image: q2
				.field('image')
				.project((q3) => ({
					alt: z.string().nullable(),
					asset: q3.field('asset').deref().project(assetImage),
				}))
				.nullable(true),
		},
	}),
}))

export type AssetFragment = InferFragmentType<typeof assetFragment>
