import * as Alert from '.'
import type { Meta, StoryObj } from '@storybook/react'
import { Terminal } from 'lucide-react'
import * as React from 'react'

const meta = {
	title: 'primitives/Alert',
	component: Alert.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Alert.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		variant: 'default',
	},
	render: (args) => (
		<Alert.Root {...args}>
			<Terminal className="h-4 w-4" />
			<Alert.Title>Heads up!</Alert.Title>
			<Alert.Description>
				You can add components to your app using the cli.
			</Alert.Description>
		</Alert.Root>
	),
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
	render: (args) => (
		<Alert.Root {...args}>
			<Terminal className="h-4 w-4" />
			<Alert.Title>Heads up!</Alert.Title>
			<Alert.Description>
				You can add components to your app using the cli.
			</Alert.Description>
		</Alert.Root>
	),
}
