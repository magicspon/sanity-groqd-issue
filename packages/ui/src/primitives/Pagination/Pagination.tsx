import { cn } from '../../utils/cn'
import type { ButtonProps } from '@spon/ui/primitives/Button'
import { buttonVariants } from '@spon/ui/primitives/Button'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

type PaginationProps = React.ComponentProps<'nav'>

export function Root({ className, ...props }: PaginationProps) {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			className={cn('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	)
}

type PaginationContentProps = React.ComponentProps<'ul'>

export function Content({ className, ...props }: PaginationContentProps) {
	return (
		<ul
			className={cn('flex flex-row items-center gap-1', className)}
			{...props}
		/>
	)
}

type PaginationItemProps = React.ComponentProps<'li'>

export function Item({ className, ...props }: PaginationItemProps) {
	return <li className={cn('', className)} {...props} />
}

type PaginationLinkProps = {
	isActive?: boolean
} & Pick<ButtonProps, 'size'> &
	React.ComponentProps<'a'>

export function Link({
	className,
	isActive,
	size = 'icon',
	...props
}: PaginationLinkProps) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<a
			aria-current={isActive ? 'page' : undefined}
			className={cn(
				buttonVariants({
					variant: isActive ? 'outline' : 'ghost',
					size,
				}),
				className,
			)}
			{...props}
		/>
	)
}

type PaginationPreviousProps = React.ComponentProps<typeof Link>

export function Previous({ className, ...props }: PaginationPreviousProps) {
	return (
		<Link
			aria-label="Go to previous page"
			size="default"
			className={cn('gap-1 pl-2.5', className)}
			{...props}
		>
			<ChevronLeft className="h-4 w-4" />
			<span>Previous</span>
		</Link>
	)
}

type PaginationNextProps = React.ComponentProps<typeof Link>

export function Next({ className, ...props }: PaginationNextProps) {
	return (
		<Link
			aria-label="Go to next page"
			size="default"
			className={cn('gap-1 pr-2.5', className)}
			{...props}
		>
			<span>Next</span>
			<ChevronRight className="h-4 w-4" />
		</Link>
	)
}

type PaginationEllipsisProps = React.ComponentProps<'span'>

export function Ellipsis({ className, ...props }: PaginationEllipsisProps) {
	return (
		<span
			aria-hidden
			className={cn('flex h-9 w-9 items-center justify-center', className)}
			{...props}
		>
			<MoreHorizontal className="h-4 w-4" />
			<span className="sr-only">More pages</span>
		</span>
	)
}
