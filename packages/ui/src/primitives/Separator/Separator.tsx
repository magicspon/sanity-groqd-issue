'use client'

import { cn } from '../../utils/cn'
import { Separator as SeparatorPrimitive } from 'radix-ui'
import * as React from 'react'

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>

export function Separator({
	className,
	orientation = 'horizontal',
	decorative = true,
	...props
}: SeparatorProps) {
	return (
		<SeparatorPrimitive.Root
			decorative={decorative}
			orientation={orientation}
			className={cn(
				'shrink-0 bg-border',
				orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
				className,
			)}
			{...props}
		/>
	)
}
