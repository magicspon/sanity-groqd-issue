'use client'

import { cn } from '../../utils/cn'
import { toggleVariants } from '@spon/ui/primitives/Toggle'
import { type VariantProps } from 'class-variance-authority'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import * as React from 'react'

const ToggleGroupContext = React.createContext<
	VariantProps<typeof toggleVariants>
>({
	size: 'default',
	variant: 'default',
})

export function Root({
	className,
	variant,
	size,
	children,
	ref,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
	VariantProps<typeof toggleVariants>) {
	return (
		<ToggleGroupPrimitive.Root
			ref={ref}
			className={cn('flex items-center justify-center gap-1', className)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	)
}

export function Item({
	className,
	children,
	variant,
	size,
	ref,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
	VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContext)

	return (
		<ToggleGroupPrimitive.Item
			ref={ref}
			className={cn(
				toggleVariants({
					variant: context.variant ?? variant,
					size: context.size ?? size,
				}),
				className,
			)}
			{...props}
		>
			{children}
		</ToggleGroupPrimitive.Item>
	)
}
