import { cn } from '../../utils/cn'
import * as React from 'react'

export function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-primary/10', className)}
			{...props}
		/>
	)
}
