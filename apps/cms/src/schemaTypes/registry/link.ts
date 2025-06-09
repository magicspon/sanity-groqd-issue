import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { z } from 'zod'

const types = defineField({
	name: 'type',
	title: 'Type',
	type: 'string',
	initialValue: 'external',
	validation: (Rule) => Rule.required(),
	group: 'content',
	options: {
		layout: 'radio',
		direction: 'horizontal',
		list: [
			{ value: 'external', title: 'external' },
			{ value: 'internal', title: 'internal' },
			{ value: 'email', title: 'email' },
			{ value: 'custom', title: 'custom' },
		],
	},
})

const text = defineField({
	name: 'text',
	title: 'Text',
	type: 'string',
	initialValue: 'Read more',
	group: 'content',
	validation: (Rule) => Rule.required(),
})

const url = defineField({
	name: 'url',
	title: 'Url',
	type: 'url',
	group: 'content',
	hidden: ({ parent }) => parent?.type !== 'external',
	validation: (Rule) =>
		Rule.custom((value, context) => {
			const parent = context.parent as { type: string }
			if (parent?.type !== 'external') return true
			return parent?.type === 'external' &&
				z.string().url().safeParse(value).success
				? true
				: 'This field is required'
		}),
})

const custom = defineField({
	name: 'custom',
	title: 'Url',
	type: 'string',
	group: 'content',
	hidden: ({ parent }) => parent?.type !== 'custom',
	validation: (Rule) =>
		Rule.custom((value, context) => {
			const parent = context.parent as { type: string }
			if (parent?.type !== 'custom') return true
			return parent?.type === 'custom' && z.string().safeParse(value).success
				? true
				: 'This field is required'
		}),
})

const email = defineField({
	name: 'email',
	title: 'Email',
	type: 'string',
	group: 'content',
	hidden: ({ parent }) => parent?.type !== 'email',
	validation: (Rule) =>
		Rule.custom((value, context) => {
			const parent = context.parent as { type: string }
			if (parent?.type !== 'email') return true
			return parent?.type === 'email' &&
				z.string().email().safeParse(value).success
				? true
				: 'This field is required'
		}),
})

const refererence = defineField({
	name: 'href',
	title: 'Page',
	type: 'reference',
	to: [{ type: 'page' }],
	group: 'content',
	hidden: ({ parent }) => parent?.type !== 'internal',
	validation: (Rule) =>
		Rule.custom((value, context) => {
			const parent = context.parent as { type: string }
			if (parent?.type !== 'internal') return true
			return parent?.type === 'internal' && !!value
				? true
				: 'This field is required'
		}),
})

export const link = defineType({
	name: 'link',
	type: 'object',
	title: 'Link',
	icon: LinkIcon,
	groups: [{ name: 'content', default: true }, { name: 'options' }],

	preview: {
		select: {
			text: 'text',
		},
		prepare({ text }) {
			return {
				title: text,
			}
		},
	},
	fields: [
		types,
		text,
		url,
		custom,
		email,
		refererence,
		defineField({
			type: 'label',
			name: 'label',
			group: 'options',
		}),
		defineField({
			type: 'variant',
			name: 'variant',
			group: 'options',
		}),
	],
})

export const blockLink = defineField({
	name: 'link',
	type: 'object',
	title: 'Link',
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [types, url, custom, email, refererence],
})
