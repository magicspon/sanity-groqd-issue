import { q, z } from '@spon/cms/src/lib/groqd-client'
import type { Group } from '../../sanity.types'
import { assetFragment } from './asset'
import { lettersFragment } from './letters'
import { linkFragment } from './link'
import { markdownFragment } from './markdown'

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

type DepthOne = GetTypeAtDepth<Group, 1> // The group property at depth 1
type DepthTwo = GetTypeAtDepth<Group, 2> // The group property at depth 2
type DepthThree = GetTypeAtDepth<Group, 3> // The group property at depth 3
type DepthFour = GetTypeAtDepth<Group, 4> // The group property at depth 4
type DepthFive = GetTypeAtDepth<Group, 5> // The final group type at depth 5

const d5 = q.fragment<DepthFive>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
	}),
}))

const d4 = q.fragment<DepthFour>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				group: q.field('group[]').project({ ...d5 }),
			}),
	}),
}))

const d3 = q.fragment<DepthThree>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				group: q.field('group[]').project({ ...d4 }),
			}),
	}),
}))

const d2 = q.fragment<DepthTwo>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				group: q.field('group[]').project({
					...d3,
				}),
			}),
	}),
}))

const d1 = q.fragment<DepthOne>().project((root) => ({
	...root.conditionalByType({
		letters: (q) => q.project({ ...lettersFragment, _key: z.string() }),
		markdown: (q) => q.project({ ...markdownFragment, _key: z.string() }),
		asset: (q) => q.project({ ...assetFragment, _key: z.string() }),
		link: (q) => q.project({ ...linkFragment, _key: z.string() }),
		group: (q) =>
			q.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
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
		// level 1
		group: (group1) =>
			group1.project({
				_key: z.string(),
				_type: z.literal('group').nullable(),
				group: group1
					.field('group[]')
					.project({
						...d1,
					})
					.nullable(true),
			}),
	}),
}))
