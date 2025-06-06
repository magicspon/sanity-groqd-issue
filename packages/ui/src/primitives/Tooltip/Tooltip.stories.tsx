import * as Tooltip from '.'
import { Button } from '../Button'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Tooltip',
	component: Tooltip.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Tooltip.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Hover</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Add to library</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	),
}
