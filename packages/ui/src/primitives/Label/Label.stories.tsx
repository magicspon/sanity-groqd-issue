import { Label } from '.'
import { Checkbox } from '../Checkbox'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Label',
	component: Label,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<div>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
		</div>
	),
}
