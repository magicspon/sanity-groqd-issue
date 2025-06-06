import * as Breadcrumb from '.'
import { VisuallyHidden } from '../../type/VisuallyHidden'
import * as DropdownMenu from '../DropdownMenu'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

const meta = {
	title: 'primitives/Breadcrumb',
	component: Breadcrumb.Root,
	parameters: {
		layout: 'centered',
	},

	tags: ['autodocs'],

	argTypes: {},

	args: {},
} satisfies Meta<typeof Breadcrumb.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {},
	render: () => (
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger className="flex items-center gap-1">
							<Breadcrumb.Ellipsis className="h-4 w-4" />
							<VisuallyHidden>Toggle menu</VisuallyHidden>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content align="start">
							<DropdownMenu.Item>Documentation</DropdownMenu.Item>
							<DropdownMenu.Item>Themes</DropdownMenu.Item>
							<DropdownMenu.Item>GitHub</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page>Breadcrumb.</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	),
}
