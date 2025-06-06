import { Switch } from '.'
import { Label } from '../Label'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</div>
	),
}
