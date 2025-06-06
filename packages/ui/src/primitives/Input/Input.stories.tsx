import { Input } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => <Input type="email" placeholder="Email" />,
}
