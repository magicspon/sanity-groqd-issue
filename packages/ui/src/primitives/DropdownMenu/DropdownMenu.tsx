'use client'

import { cn } from '../../utils/cn'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = DropdownMenuPrimitive.Root

export const Trigger = DropdownMenuPrimitive.Trigger

export const Group = DropdownMenuPrimitive.Group

export const Portal = DropdownMenuPrimitive.Portal

export const Sub = DropdownMenuPrimitive.Sub

export const RadioGroup = DropdownMenuPrimitive.RadioGroup

type DropdownMenuSubTriggerProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.SubTrigger
> & {
	inset?: boolean
}

export function SubTrigger({
	className,
	inset,
	children,
	...props
}: DropdownMenuSubTriggerProps) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			className={cn(
				'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
				inset && 'pl-8',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto" />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

type DropdownMenuSubContentProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.SubContent
>

export function SubContent({
	className,
	...props
}: DropdownMenuSubContentProps) {
	return (
		<DropdownMenuPrimitive.SubContent
			className={cn(
				'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
				className,
			)}
			{...props}
		/>
	)
}

type DropdownMenuContentProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Content
>

export function Content({
	className,
	sideOffset = 4,
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				sideOffset={sideOffset}
				className={cn(
					'z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
					'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
					className,
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	)
}

type DropdownMenuItemProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Item
> & {
	inset?: boolean
}

export function Item({ className, inset, ...props }: DropdownMenuItemProps) {
	return (
		<DropdownMenuPrimitive.Item
			className={cn(
				'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type DropdownMenuCheckboxItemProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.CheckboxItem
>

export function CheckboxItem({
	className,
	children,
	checked,
	...props
}: DropdownMenuCheckboxItemProps) {
	return (
		<DropdownMenuPrimitive.CheckboxItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<Check className="h-4 w-4" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	)
}

type DropdownMenuRadioItemProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.RadioItem
>

export function RadioItem({
	className,
	children,
	...props
}: DropdownMenuRadioItemProps) {
	return (
		<DropdownMenuPrimitive.RadioItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<Circle className="h-2 w-2 fill-current" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	)
}

type DropdownMenuLabelProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Label
> & {
	inset?: boolean
}

export function Label({ className, inset, ...props }: DropdownMenuLabelProps) {
	return (
		<DropdownMenuPrimitive.Label
			className={cn(
				'px-2 py-1.5 text-sm font-semibold',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type DropdownMenuSeparatorProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Separator
>

export function Separator({ className, ...props }: DropdownMenuSeparatorProps) {
	return (
		<DropdownMenuPrimitive.Separator
			className={cn('-mx-1 my-1 h-px bg-muted', className)}
			{...props}
		/>
	)
}

type DropdownMenuShortcutProps = React.ComponentProps<'span'>

export function Shortcut({ className, ...props }: DropdownMenuShortcutProps) {
	return (
		<span
			className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
			{...props}
		/>
	)
}
