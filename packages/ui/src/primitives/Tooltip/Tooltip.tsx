'use client'

import { cn } from '../../utils/cn'
import { Tooltip as TooltipPrimitive } from 'radix-ui'
import * as React from 'react'

export const Provider = TooltipPrimitive.Provider

export const Root = TooltipPrimitive.Root

export const Trigger = TooltipPrimitive.Trigger

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content>

export function Content({
	className,
	sideOffset = 4,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				sideOffset={sideOffset}
				className={cn(
					'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]',
					className,
				)}
				{...props}
			/>
		</TooltipPrimitive.Portal>
	)
}
