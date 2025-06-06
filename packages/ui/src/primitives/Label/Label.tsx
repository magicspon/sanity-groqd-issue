'use client'

import { cn } from '../../utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'
import { Label as LabelPrimitive } from 'radix-ui'
import * as React from 'react'

const labelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>

export function Label({ className, ...props }: LabelProps) {
	return (
		<LabelPrimitive.Root
			className={cn(labelVariants(), className)}
			{...props}
		/>
	)
}
