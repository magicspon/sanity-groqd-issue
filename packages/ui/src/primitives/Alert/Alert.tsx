/* eslint-disable jsx-a11y/heading-has-content */
import { cn } from '../../utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const alertVariants = cva(
	'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
	{
		variants: {
			variant: {
				default: 'bg-background text-foreground',
				destructive:
					'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

type AlertProps = React.ComponentProps<'div'> &
	VariantProps<typeof alertVariants>

export function Root({ className, variant, ...props }: AlertProps) {
	return (
		<div
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			{...props}
		/>
	)
}

type AlertTitleProps = React.ComponentProps<'h5'>

export function Title({ className, ...props }: AlertTitleProps) {
	return (
		<h5
			className={cn('mb-1 font-medium leading-none tracking-tight', className)}
			{...props}
		/>
	)
}

type AlertDescriptionProps = React.ComponentProps<'div'>

export function Description({ className, ...props }: AlertDescriptionProps) {
	return (
		<div
			className={cn('text-sm [&_p]:leading-relaxed', className)}
			{...props}
		/>
	)
}
