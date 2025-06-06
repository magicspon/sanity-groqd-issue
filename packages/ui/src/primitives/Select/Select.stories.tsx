import * as Select from '.'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Select',
	component: Select.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Select.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Select.Root>
			<Select.Trigger className="w-[180px]">
				<Select.Value placeholder="Select. a fruit" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Fruits</Select.Label>
					<Select.Item value="apple">Apple</Select.Item>
					<Select.Item value="banana">Banana</Select.Item>
					<Select.Item value="blueberry">Blueberry</Select.Item>
					<Select.Item value="grapes">Grapes</Select.Item>
					<Select.Item value="pineapple">Pineapple</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
}
