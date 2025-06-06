import { cn } from '../../utils/cn'
import * as React from 'react'

type CardProps = React.ComponentProps<'div'>

export function Root({ className, ...props }: CardProps) {
	return (
		<div
			className={cn(
				'rounded-xl border bg-card text-card-foreground shadow',
				className,
			)}
			{...props}
		/>
	)
}

type CardHeaderProps = React.ComponentProps<'div'>

export function Header({ className, ...props }: CardHeaderProps) {
	return (
		<div
			className={cn('flex flex-col space-y-1.5 p-6', className)}
			{...props}
		/>
	)
}

type CardTitleProps = React.ComponentProps<'div'>

export function Title({ className, ...props }: CardTitleProps) {
	return (
		<div
			className={cn('font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
}

type CardDescriptionProps = React.ComponentProps<'div'>

export function Description({ className, ...props }: CardDescriptionProps) {
	return (
		<div
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
}

type CardContentProps = React.ComponentProps<'div'>

export function Content({ className, ...props }: CardContentProps) {
	return <div className={cn('p-6 pt-0', className)} {...props} />
}

type CardFooterProps = React.ComponentProps<'div'>

export function Footer({ className, ...props }: CardFooterProps) {
	return (
		<div className={cn('flex items-center p-6 pt-0', className)} {...props} />
	)
}
