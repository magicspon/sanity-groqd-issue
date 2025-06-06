'use client'

import { cn } from '../../utils/cn'
import { Popover as PopoverPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = PopoverPrimitive.Root

export const Trigger = PopoverPrimitive.Trigger

export const Anchor = PopoverPrimitive.Anchor

type PopoverContentProps = React.ComponentProps<typeof PopoverPrimitive.Content>

export function Content({
	className,
	align = 'center',
	sideOffset = 4,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				sideOffset={sideOffset}
				className={cn(
					'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]',
					className,
				)}
				{...props}
			/>
		</PopoverPrimitive.Portal>
	)
}
