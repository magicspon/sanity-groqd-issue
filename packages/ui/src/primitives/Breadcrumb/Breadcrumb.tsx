import { cn } from '../../utils/cn'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { Slot } from 'radix-ui'
import * as React from 'react'

type BreadcrumbProps = React.ComponentProps<'nav'> & {
	separator?: React.ReactNode
}

export function Root({ ...props }: BreadcrumbProps) {
	return <nav aria-label="breadcrumb" {...props} />
}

type BreadcrumbListProps = React.ComponentProps<'ol'>

export function List({ className, ...props }: BreadcrumbListProps) {
	return (
		<ol
			className={cn(
				'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
				className,
			)}
			{...props}
		/>
	)
}

type BreadcrumbItemProps = React.ComponentProps<'li'>

export function Item({ className, ...props }: BreadcrumbItemProps) {
	return (
		<li
			className={cn('inline-flex items-center gap-1.5', className)}
			{...props}
		/>
	)
}

type BreadcrumbLinkProps = React.ComponentProps<'a'> & {
	asChild?: boolean
}

export function Link({ asChild, className, ...props }: BreadcrumbLinkProps) {
	const Comp = asChild ? Slot.Root : 'a'

	return (
		<Comp
			className={cn('transition-colors hover:text-foreground', className)}
			{...props}
		/>
	)
}

type BreadcrumbPageProps = React.ComponentProps<'span'>

export function Page({ className, ...props }: BreadcrumbPageProps) {
	return (
		<span
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cn('font-normal text-foreground', className)}
			{...props}
		/>
	)
}

type BreadcrumbSeparatorProps = React.ComponentProps<'li'>

export function Separator({
	children,
	className,
	...props
}: BreadcrumbSeparatorProps) {
	return (
		<li
			role="presentation"
			aria-hidden="true"
			className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	)
}

type BreadcrumbEllipsisProps = React.ComponentProps<'span'>

export function Ellipsis({ className, ...props }: BreadcrumbEllipsisProps) {
	return (
		<span
			role="presentation"
			aria-hidden="true"
			className={cn('flex h-9 w-9 items-center justify-center', className)}
			{...props}
		>
			<MoreHorizontal className="h-4 w-4" />
			<span className="sr-only">More</span>
		</span>
	)
}
