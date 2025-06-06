'use client'

import { cn } from '../../utils/cn'
import { Tabs as TabsPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = TabsPrimitive.Root

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>

export function List({ className, ...props }: TabsListProps) {
	return (
		<TabsPrimitive.List
			className={cn(
				'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
				className,
			)}
			{...props}
		/>
	)
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>

export function Trigger({ className, ...props }: TabsTriggerProps) {
	return (
		<TabsPrimitive.Trigger
			className={cn(
				'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
				className,
			)}
			{...props}
		/>
	)
}

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>

export function Content({ className, ...props }: TabsContentProps) {
	return (
		<TabsPrimitive.Content
			className={cn(
				'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
				className,
			)}
			{...props}
		/>
	)
}
