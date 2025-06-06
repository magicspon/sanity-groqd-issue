import { cn } from '../../utils/cn'
import { ChevronDown } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import * as React from 'react'

export const Root = AccordionPrimitive.Root

type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>

export function Item({ className, ...props }: AccordionItemProps) {
	return (
		<AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
	)
}

type AccordionTriggerProps = React.ComponentProps<
	typeof AccordionPrimitive.Trigger
>

export function Trigger({
	className,
	children,
	...props
}: AccordionTriggerProps) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={cn(
					'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

type AccordionContentProps = React.ComponentProps<
	typeof AccordionPrimitive.Content
>

export function Content({
	className,
	children,
	...props
}: AccordionContentProps) {
	return (
		<AccordionPrimitive.Content
			className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
			{...props}
		>
			<div className={cn('pb-4 pt-0', className)}>{children}</div>
		</AccordionPrimitive.Content>
	)
}
