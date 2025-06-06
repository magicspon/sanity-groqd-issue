import * as Dialog from '.'
import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Dialog',
	component: Dialog.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Dialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</Dialog.Trigger>
			<Dialog.Content className="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you&apos;re done.
					</Dialog.Description>
				</Dialog.Header>
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
				<Dialog.Footer>
					<Button type="submit">Save changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	),
}
