'use client'

import { cn } from '../../utils/cn'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { Menubar as MenubarPrimitive } from 'radix-ui'
import * as React from 'react'

export function Menu({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
	return <MenubarPrimitive.Menu {...props} />
}

export function Group({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
	return <MenubarPrimitive.Group {...props} />
}

export function Portal({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
	return <MenubarPrimitive.Portal {...props} />
}

export function RadioGroup({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
	return <MenubarPrimitive.RadioGroup {...props} />
}

export function Sub({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
	return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

type MenubarProps = React.ComponentProps<typeof MenubarPrimitive.Root>

export function Root({ className, ...props }: MenubarProps) {
	return (
		<MenubarPrimitive.Root
			className={cn(
				'flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm',
				className,
			)}
			{...props}
		/>
	)
}

type MenubarTriggerProps = React.ComponentProps<typeof MenubarPrimitive.Trigger>

export function Trigger({ className, ...props }: MenubarTriggerProps) {
	return (
		<MenubarPrimitive.Trigger
			className={cn(
				'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
				className,
			)}
			{...props}
		/>
	)
}

type MenubarSubTriggerProps = React.ComponentProps<
	typeof MenubarPrimitive.SubTrigger
> & {
	inset?: boolean
}

export function SubTrigger({
	className,
	inset,
	children,
	...props
}: MenubarSubTriggerProps) {
	return (
		<MenubarPrimitive.SubTrigger
			className={cn(
				'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
				inset && 'pl-8',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto h-4 w-4" />
		</MenubarPrimitive.SubTrigger>
	)
}

type MenubarSubContentProps = React.ComponentProps<
	typeof MenubarPrimitive.SubContent
>

export function SubContent({ className, ...props }: MenubarSubContentProps) {
	return (
		<MenubarPrimitive.SubContent
			className={cn(
				'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]',
				className,
			)}
			{...props}
		/>
	)
}

type MenubarContentProps = React.ComponentProps<typeof MenubarPrimitive.Content>

export function Content({
	className,
	align = 'start',
	alignOffset = -4,
	sideOffset = 8,
	...props
}: MenubarContentProps) {
	return (
		<MenubarPrimitive.Portal>
			<MenubarPrimitive.Content
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={cn(
					'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-menubar-content-transform-origin]',
					className,
				)}
				{...props}
			/>
		</MenubarPrimitive.Portal>
	)
}

type MenubarItemProps = React.ComponentProps<typeof MenubarPrimitive.Item> & {
	inset?: boolean
}

export function Item({ className, inset, ...props }: MenubarItemProps) {
	return (
		<MenubarPrimitive.Item
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type MenubarCheckboxItemProps = React.ComponentProps<
	typeof MenubarPrimitive.CheckboxItem
>

export function CheckboxItem({
	className,
	children,
	checked,
	...props
}: MenubarCheckboxItemProps) {
	return (
		<MenubarPrimitive.CheckboxItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<MenubarPrimitive.ItemIndicator>
					<Check className="h-4 w-4" />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.CheckboxItem>
	)
}

type MenubarRadioItemProps = React.ComponentProps<
	typeof MenubarPrimitive.RadioItem
>

export function RadioItem({
	className,
	children,
	...props
}: MenubarRadioItemProps) {
	return (
		<MenubarPrimitive.RadioItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<MenubarPrimitive.ItemIndicator>
					<Circle className="h-4 w-4 fill-current" />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.RadioItem>
	)
}

type MenubarLabelProps = React.ComponentProps<typeof MenubarPrimitive.Label> & {
	inset?: boolean
}

export function Label({ className, inset, ...props }: MenubarLabelProps) {
	return (
		<MenubarPrimitive.Label
			className={cn(
				'px-2 py-1.5 text-sm font-semibold',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type MenubarSeparatorProps = React.ComponentProps<
	typeof MenubarPrimitive.Separator
>

export function Separator({ className, ...props }: MenubarSeparatorProps) {
	return (
		<MenubarPrimitive.Separator
			className={cn('-mx-1 my-1 h-px bg-muted', className)}
			{...props}
		/>
	)
}

type MenubarShortcutProps = React.ComponentProps<'span'>

export function Shortcut({ className, ...props }: MenubarShortcutProps) {
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
