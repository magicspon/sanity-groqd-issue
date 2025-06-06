'use client'

import { cn } from '../../utils/cn'
import { Circle } from 'lucide-react'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import * as React from 'react'

type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>

export function Root({ className, ...props }: RadioGroupProps) {
	return (
		<RadioGroupPrimitive.Root
			className={cn('grid gap-2', className)}
			{...props}
		/>
	)
}

type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>

export function Item({ className, ...props }: RadioGroupItemProps) {
	return (
		<RadioGroupPrimitive.Item
			className={cn(
				'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<Circle className="h-3.5 w-3.5 fill-primary" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
}
