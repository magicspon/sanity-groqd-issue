import * as Command from '.'
import type { Meta, StoryObj } from '@storybook/react'
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from 'lucide-react'
import * as React from 'react'

const meta = {
	title: 'primitives/Command',
	component: Command.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Command.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Command.Root className="rounded-lg border shadow-md md:min-w-[450px]">
			<Command.Input placeholder="Type a command. or search..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group heading="Suggestions">
					<Command.Item>
						<Calendar />
						<span>Calendar</span>
					</Command.Item>
					<Command.Item>
						<Smile />
						<span>Search Emoji</span>
					</Command.Item>
					<Command.Item disabled>
						<Calculator />
						<span>Calculator</span>
					</Command.Item>
				</Command.Group>
				<Command.Separator />
				<Command.Group heading="Settings">
					<Command.Item>
						<User />
						<span>Profile</span>
						<Command.Shortcut>⌘P</Command.Shortcut>
					</Command.Item>
					<Command.Item>
						<CreditCard />
						<span>Billing</span>
						<Command.Shortcut>⌘B</Command.Shortcut>
					</Command.Item>
					<Command.Item>
						<Settings />
						<span>Settings</span>
						<Command.Shortcut>⌘S</Command.Shortcut>
					</Command.Item>
				</Command.Group>
			</Command.List>
		</Command.Root>
	),
}
