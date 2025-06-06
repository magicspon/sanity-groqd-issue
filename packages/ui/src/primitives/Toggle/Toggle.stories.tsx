import { Toggle } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Bold } from 'lucide-react'
import * as React from 'react'

const meta = {
	title: 'primitives/Toggle',
	component: Toggle,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Toggle aria-label="Toggle italic">
			<Bold className="h-4 w-4" />
		</Toggle>
	),
}
