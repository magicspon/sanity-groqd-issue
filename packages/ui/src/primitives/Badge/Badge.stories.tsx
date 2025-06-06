import { Badge } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Hello world',
		variant: 'default',
		// type: 'Badge',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
	render: (args) => <Badge {...args}>Hello</Badge>,
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
	render: (args) => <Badge {...args}>Hello</Badge>,
}
export const Outline: Story = {
	args: {
		variant: 'outline',
	},
	render: (args) => <Badge {...args}>Hello</Badge>,
}
