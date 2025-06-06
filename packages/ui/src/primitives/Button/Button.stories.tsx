import { Button } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: (
			<a href="#0" className="inline-block">
				Hello world
			</a>
		),
		variant: 'default',
		asChild: true,
	},
}

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
	render: (args) => <Button {...args}>Hello</Button>,
}

export const Link: Story = {
	args: {
		variant: 'link',
	},
	render: (args) => <Button {...args}>Hello</Button>,
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
	render: (args) => <Button {...args}>Hello</Button>,
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
	render: (args) => <Button {...args}>Hello</Button>,
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
	render: (args) => <Button {...args}>Hello</Button>,
}
