import * as Carousel from '.'
import * as Card from '../Card'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Carousel',
	component: Carousel.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Carousel.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Carousel.Root className="w-full max-w-xs">
			<Carousel.Content>
				{Array.from({ length: 5 }).map((_, index) => (
					<Carousel.Item key={index}>
						<div className="p-1">
							<Card.Root>
								<Card.Content className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</Card.Content>
							</Card.Root>
						</div>
					</Carousel.Item>
				))}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
	),
}
