import * as Sheet from '.'
import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Sheet',
	component: Sheet.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Sheet.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Sheet.Root>
			<Sheet.Trigger asChild>
				<Button variant="outline">Open</Button>
			</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Edit profile</Sheet.Title>
					<Sheet.Description>
						Make changes to your profile here. Click save when you&apos;re done.
					</Sheet.Description>
				</Sheet.Header>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" value="Pedro Duarte" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input id="username" value="@peduarte" className="col-span-3" />
					</div>
				</div>
				<Sheet.Footer>
					<Sheet.Close asChild>
						<Button type="submit">Save changes</Button>
					</Sheet.Close>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	),
}
