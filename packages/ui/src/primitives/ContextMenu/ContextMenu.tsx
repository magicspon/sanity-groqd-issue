'use client'

import { cn } from '../../utils/cn'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = ContextMenuPrimitive.Root

export const Trigger = ContextMenuPrimitive.Trigger

export const Group = ContextMenuPrimitive.Group

export const Portal = ContextMenuPrimitive.Portal

export const Sub = ContextMenuPrimitive.Sub

export const RadioGroup = ContextMenuPrimitive.RadioGroup

type ContextMenuSubTriggerProps = React.ComponentProps<
	typeof ContextMenuPrimitive.SubTrigger
> & {
	inset?: boolean
}

export function SubTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuSubTriggerProps) {
	return (
		<ContextMenuPrimitive.SubTrigger
			className={cn(
				'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
				inset && 'pl-8',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto h-4 w-4" />
		</ContextMenuPrimitive.SubTrigger>
	)
}

type ContextMenuSubContentProps = React.ComponentProps<
	typeof ContextMenuPrimitive.SubContent
>

export function SubContent({
	className,
	...props
}: ContextMenuSubContentProps) {
	return (
		<ContextMenuPrimitive.SubContent
			className={cn(
				'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]',
				className,
			)}
			{...props}
		/>
	)
}

type ContextMenuContentProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Content
>

export function Content({ className, ...props }: ContextMenuContentProps) {
	return (
		<ContextMenuPrimitive.Portal>
			<ContextMenuPrimitive.Content
				className={cn(
					'z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-context-menu-content-transform-origin]',
					className,
				)}
				{...props}
			/>
		</ContextMenuPrimitive.Portal>
	)
}

type ContextMenuItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Item
> & {
	inset?: boolean
}

export function Item({ className, inset, ...props }: ContextMenuItemProps) {
	return (
		<ContextMenuPrimitive.Item
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type ContextMenuCheckboxItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.CheckboxItem
>

export function CheckboxItem({
	className,
	children,
	checked,
	...props
}: ContextMenuCheckboxItemProps) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<Check className="h-4 w-4" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	)
}

type ContextMenuRadioItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.RadioItem
>

export function RadioItem({
	className,
	children,
	...props
}: ContextMenuRadioItemProps) {
	return (
		<ContextMenuPrimitive.RadioItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<Circle className="h-4 w-4 fill-current" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	)
}

type ContextMenuLabelProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Label
> & {
	inset?: boolean
}

export function Label({ className, inset, ...props }: ContextMenuLabelProps) {
	return (
		<ContextMenuPrimitive.Label
			className={cn(
				'px-2 py-1.5 text-sm font-semibold text-foreground',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	)
}

type ContextMenuSeparatorProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Separator
>

export function Separator({ className, ...props }: ContextMenuSeparatorProps) {
	return (
		<ContextMenuPrimitive.Separator
			className={cn('-mx-1 my-1 h-px bg-border', className)}
			{...props}
		/>
	)
}

type ContextMenuShortcutProps = React.ComponentProps<'span'>

export function Shortcut({ className, ...props }: ContextMenuShortcutProps) {
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
