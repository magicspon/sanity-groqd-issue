import { FolderIcon } from '@sanity/icons'
import type { ArrayDefinition } from 'sanity'
import { defineArrayMember, defineField, defineType } from 'sanity'

const DEPTH = 5

export function createOfDepth(
	total: number,
	of: ArrayDefinition['of'],
): ArrayDefinition['of'] {
	const MAX = total

	const runFn = (
		depth: number,
		of: ArrayDefinition['of'],
	): ArrayDefinition['of'] => {
		const baseMembers = of

		if (depth <= 0) {
			return baseMembers
		}

		const level = MAX - depth + 1
		console.log({ level })
		// Create nested group member
		const nestedGroupMember = defineArrayMember({
			type: 'object',
			name: 'group',
			icon: FolderIcon,
			title: `Group (depth ${level})`,
			groups: [{ name: 'content', default: true }, { name: 'options' }],
			fields: [
				defineField({ name: 'label', type: 'label', group: 'options' }),
				defineField({
					type: 'string',
					name: 'variant',
					group: 'options',
					description: '⚠️ Proceed with caution!',
					// options: {
					// 	list: ['link', 'primary', 'secondary', 'ghost', 'outline'],
					// 	layout: 'dropdown',
					// },
				}),
				defineField({ name: 'meta', type: 'meta', group: 'options' }),
				defineField({
					title: 'Group',
					name: 'group',
					type: 'array',
					of: runFn(depth - 1, of),
					group: 'content',
				}),
			],
		})

		return [...baseMembers, nestedGroupMember]
	}

	return runFn(total, of)
}

export const group = defineType({
	title: 'Group',
	name: 'group',
	type: 'array',
	icon: FolderIcon,

	of: createOfDepth(DEPTH, [
		defineArrayMember({ type: 'letters' }),
		defineArrayMember({ type: 'markdown' }),
		defineArrayMember({ type: 'prose' }),
		defineArrayMember({ type: 'link' }),
		defineArrayMember({ type: 'asset' }),
		defineArrayMember({ type: 'json' }),
		defineArrayMember({ type: 'related', title: 'Reference' }),
	]),
})
