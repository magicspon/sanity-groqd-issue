'use client'

import { cn } from '../../utils/cn'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { Dialog as DialogPrimitive } from 'radix-ui'
import * as React from 'react'

type CommandProps = React.ComponentProps<typeof CommandPrimitive>

export function Root({ className, ...props }: CommandProps) {
	return (
		<CommandPrimitive
			className={cn(
				'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
				className,
			)}
			{...props}
		/>
	)
}

export function Dialog({
	children,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return (
		<DialogPrimitive.Root {...props}>
			<DialogPrimitive.Content className="overflow-hidden p-0">
				<Root className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Root>
			</DialogPrimitive.Content>
		</DialogPrimitive.Root>
	)
}

type CommandInputProps = React.ComponentProps<typeof CommandPrimitive.Input>

export function Input({ className, ...props }: CommandInputProps) {
	return (
		// eslint-disable-next-line react/no-unknown-property
		<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
			<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
			<CommandPrimitive.Input
				className={cn(
					'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...props}
			/>
		</div>
	)
}

type CommandListProps = React.ComponentProps<typeof CommandPrimitive.List>

export function List({ className, ...props }: CommandListProps) {
	return (
		<CommandPrimitive.List
			className={cn(
				'max-h-[300px] overflow-y-auto overflow-x-hidden',
				className,
			)}
			{...props}
		/>
	)
}

type CommandEmptyProps = React.ComponentProps<typeof CommandPrimitive.Empty>

export function Empty(props: CommandEmptyProps) {
	return (
		<CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />
	)
}

type CommandGroupProps = React.ComponentProps<typeof CommandPrimitive.Group>

export function Group({ className, ...props }: CommandGroupProps) {
	return (
		<CommandPrimitive.Group
			className={cn(
				'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
				className,
			)}
			{...props}
		/>
	)
}

type CommandSeparatorProps = React.ComponentProps<
	typeof CommandPrimitive.Separator
>

export function Separator({ className, ...props }: CommandSeparatorProps) {
	return (
		<CommandPrimitive.Separator
			className={cn('-mx-1 h-px bg-border', className)}
			{...props}
		/>
	)
}

type CommandItemProps = React.ComponentProps<typeof CommandPrimitive.Item>

export function Item({ className, ...props }: CommandItemProps) {
	return (
		<CommandPrimitive.Item
			className={cn(
				'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
				className,
			)}
			{...props}
		/>
	)
}

type CommandShortcutProps = React.ComponentProps<'span'>

export function Shortcut({ className, ...props }: CommandShortcutProps) {
	return (
		<span
			className={cn(
				'ml-auto text-xs tracking-widest text-muted-foreground',
				className,
			)}
			{...props}
		/>
	)
}
