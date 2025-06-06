'use client'

import { cn } from '../../utils/cn'
import { buttonVariants } from '@spon/ui/primitives/Button'
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = AlertDialogPrimitive.Root

export const Trigger = AlertDialogPrimitive.Trigger

export const Portal = AlertDialogPrimitive.Portal

type AlertDialogOverlayProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Overlay
>

export function Overlay({ className, ...props }: AlertDialogOverlayProps) {
	return (
		<AlertDialogPrimitive.Overlay
			className={cn(
				'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
				className,
			)}
			{...props}
		/>
	)
}

type AlertDialogContentProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Content
>

export function Content({ className, ...props }: AlertDialogContentProps) {
	return (
		<Portal>
			<Overlay />
			<AlertDialogPrimitive.Content
				className={cn(
					'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
					className,
				)}
				{...props}
			/>
		</Portal>
	)
}

type AlertDialogHeaderProps = React.ComponentProps<'div'>

export function Header({ className, ...props }: AlertDialogHeaderProps) {
	return (
		<div
			className={cn(
				'flex flex-col space-y-2 text-center sm:text-left',
				className,
			)}
			{...props}
		/>
	)
}

type AlertDialogFooterProps = React.ComponentProps<'div'>

export function Footer({ className, ...props }: AlertDialogFooterProps) {
	return (
		<div
			className={cn(
				'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
				className,
			)}
			{...props}
		/>
	)
}

type AlertDialogTitleProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Title
>

export function Title({ className, ...props }: AlertDialogTitleProps) {
	return (
		<AlertDialogPrimitive.Title
			className={cn('text-lg font-semibold', className)}
			{...props}
		/>
	)
}

type AlertDialogDescriptionProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Description
>

export function Description({
	className,
	...props
}: AlertDialogDescriptionProps) {
	return (
		<AlertDialogPrimitive.Description
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
}

type AlertDialogActionProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Action
>

export function Action({ className, ...props }: AlertDialogActionProps) {
	return (
		<AlertDialogPrimitive.Action
			className={cn(buttonVariants(), className)}
			{...props}
		/>
	)
}

type AlertDialogCancelProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Cancel
>

export function Cancel({ className, ...props }: AlertDialogCancelProps) {
	return (
		<AlertDialogPrimitive.Cancel
			className={cn(
				buttonVariants({ variant: 'outline' }),
				'mt-2 sm:mt-0',
				className,
			)}
			{...props}
		/>
	)
}
