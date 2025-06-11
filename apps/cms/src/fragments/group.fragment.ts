import type { InferFragmentType } from 'groqd'
import { q, z } from '@spon/cms/src/lib/groqd-client'
import type { Group } from '../../sanity.types'
import { assetFragment } from './asset.fragment'
import { jsonFragment } from './json.fragment'
import { lettersFragment } from './letters.fragment'
import { linkFragment } from './link.fragment'
import { markdownFragment } from './markdown.fragment'
import { metaFragment } from './meta.fragment'
import { proseFragment } from './prose.fragment'
import { relatedFragment } from './related.fragment'

// Utility type to extract the group type at a specific depth
type GetTypeAtDepth<
	T,
	Depth extends number,
	CurrentDepth extends number[] = [],
> = CurrentDepth['length'] extends Depth
	? T
	: T extends readonly (infer U)[]
		? U extends { group?: infer GroupType }
			? GroupType extends readonly (infer GroupItem)[]
				? GetTypeAtDepth<GroupItem[], Depth, [...CurrentDepth, 0]>
				: never
			: never
		: never

const d5 = q.fragment<GetTypeAtDepth<Group, 5>>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
	}),
}))

const d4 = q.fragment<GetTypeAtDepth<Group, 4>>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				variant: z.string().nullable(),
				...metaFragment,
				group: q.field('group[]').project({ ...d5 }),
			}),
	}),
}))

const d3 = q.fragment<GetTypeAtDepth<Group, 3>>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				variant: z.string().nullable(),
				...metaFragment,
				group: q.field('group[]').project({ ...d4 }),
			}),
	}),
}))

const d2 = q.fragment<GetTypeAtDepth<Group, 2>>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				variant: z.string().nullable(),
				...metaFragment,
				group: q.field('group[]').project({
					...d3,
				}),
			}),
	}),
}))

const d1 = q.fragment<GetTypeAtDepth<Group, 1>>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				variant: z.string().nullable(),
				...metaFragment,
				group: q.field('group[]').project({
					...d2,
				}),
			}),
	}),
}))

export const groupFragment = q.fragment<Group>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		prose: (q) => q.project({ ...proseFragment, _key: z.string() }),
		json: (q) => q.project({ ...jsonFragment, _key: z.string() }),
		related: (q) => q.project({ ...relatedFragment, _key: z.string() }),
		group: (group1) =>
			group1.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				...metaFragment,
				group: group1
					.field('group[]')
					.project({
						...d1,
					})
					.nullable(true),
			}),
	}),
}))

export type GroupFragment = InferFragmentType<typeof groupFragment>
