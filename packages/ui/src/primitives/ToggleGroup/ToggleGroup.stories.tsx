import * as ToggleGroup from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Bold, Italic, Underline } from 'lucide-react'
import * as React from 'react'

const meta = {
	title: 'primitives/ToggleGroup',
	component: ToggleGroup.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof ToggleGroup.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		type: 'multiple',
	},
	render: () => (
		<ToggleGroup.Root type="multiple">
			<ToggleGroup.Item value="bold" aria-label="Toggle bold">
				<Bold className="h-4 w-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="italic" aria-label="Toggle italic">
				<Italic className="h-4 w-4" />
			</ToggleGroup.Item>
			<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
				<Underline className="h-4 w-4" />
			</ToggleGroup.Item>
		</ToggleGroup.Root>
	),
}
