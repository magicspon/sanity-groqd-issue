import * as Accordion from '.'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Accordion',
	component: Accordion.Root,
	parameters: {
		// layout: ''
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Accordion.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		type: 'single',
	},
	render: () => (
		<Accordion.Root type="single" collapsible className="w-full">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
				<Accordion.Content>
					Yes. It adheres to the WAI-ARIA design pattern.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger>Is it styled?</Accordion.Trigger>
				<Accordion.Content>
					Yes. It comes with default styles that matches the other
					components&apos; aesthetic.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-3">
				<Accordion.Trigger>Is it animated?</Accordion.Trigger>
				<Accordion.Content>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	),
}
