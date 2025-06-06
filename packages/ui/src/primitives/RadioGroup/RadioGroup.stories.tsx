import * as RadioGroup from '.'
import { Label } from '../Label'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/RadioGroup',
	component: RadioGroup.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof RadioGroup.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<RadioGroup.Root defaultValue="comfortable">
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="default" id="r1" />
				<Label htmlFor="r1">Default</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="comfortable" id="r2" />
				<Label htmlFor="r2">Comfortable</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroup.Item value="compact" id="r3" />
				<Label htmlFor="r3">Compact</Label>
			</div>
		</RadioGroup.Root>
	),
}
