import * as Collapsible from '.'
import { Button } from '../Button'
import type { Meta, StoryObj } from '@storybook/react'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

const meta = {
	title: 'primitives/Collapsible',
	component: Collapsible.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Collapsible.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Collapsible.Root className="w-[350px] space-y-2">
			<div className="flex items-center justify-between space-x-4 px-4">
				<h4 className="text-sm font-semibold">
					@peduarte starred 3 repositories
				</h4>
				<Collapsible.Trigger asChild>
					<Button variant="ghost" size="sm">
						<ChevronsUpDown className="h-4 w-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</Collapsible.Trigger>
			</div>
			<div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
				@radix-ui/primitives
			</div>
			<Collapsible.Content className="space-y-2">
				<div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
					@radix-ui/colors
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
					@stitches/react
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	),
}
