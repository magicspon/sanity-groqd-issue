'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Toast as ToastPrimitives } from 'radix-ui'
import * as React from 'react'

export const Provider = ToastPrimitives.Provider

export function Viewport({
	className,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Viewport>) {
	return (
		<ToastPrimitives.Viewport
			ref={ref}
			className={clsx(
				'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
				className,
			)}
			{...props}
		/>
	)
}

const toastVariants = cva(
	'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
	{
		variants: {
			variant: {
				default: 'border bg-background',
				success: 'border bg-background',
				error:
					'destructive group border-destructive bg-destructive text-destructive-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export function Root({
	className,
	variant,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Root> &
	VariantProps<typeof toastVariants>) {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={toastVariants({ variant, className })}
			data-testid={`${variant}-toast`}
			{...props}
		/>
	)
}

export function Action({
	className,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Action>) {
	return (
		<ToastPrimitives.Action
			ref={ref}
			className={clsx(
				'hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

export function Close({
	className,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Close>) {
	return (
		<ToastPrimitives.Close
			ref={ref}
			className={clsx(
				'text-foreground/50 hover:text-foreground absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
				className,
			)}
			toast-close=""
			{...props}
		>
			<Cross2Icon className="h-4 w-4" />
		</ToastPrimitives.Close>
	)
}

export function Title({
	className,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Title>) {
	return (
		<ToastPrimitives.Title
			ref={ref}
			className={clsx('text-lg font-semibold', className)}
			{...props}
		/>
	)
}

export function Description({
	className,
	ref,
	...props
}: React.ComponentProps<typeof ToastPrimitives.Description>) {
	return (
		<ToastPrimitives.Description
			ref={ref}
			className={clsx('text-base opacity-90', className)}
			{...props}
		/>
	)
}

type ToastProps = React.ComponentPropsWithoutRef<typeof Root>

type ToastActionElement = React.ReactElement<typeof Action>

export { type ToastProps, type ToastActionElement }
