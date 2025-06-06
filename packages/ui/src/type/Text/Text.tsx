import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

export const textVariants = cva(null, {
	variants: {
		weight: {
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			bold: 'font-bold',
		},
		intent: {
			heading: 'uppercase',
		},
		family: {
			heading: 'font-ropa',
		},
		uppercase: { true: 'uppercase' },
		noTrim: { false: 'trim' },
	},
	defaultVariants: {
		noTrim: false,
	},
})

export type TMergeMergeProps<T> = T & TStyleProps & TCombinedProps

export type TStyleProps = VariantProps<typeof textVariants>

export type TElementProps = React.ComponentProps<
	'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
>

export type TElementRef = React.ElementRef<
	'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
>

export type TCombinedProps = TElementProps &
	TStyleProps & {
		asChild?: boolean
		sanityMode?: boolean
	}

export function Text({
	asChild,
	className,
	weight,
	uppercase,
	intent,
	noTrim = false,
	family,
	ref,
	...props
}: TCombinedProps) {
	const Comp = asChild ? Slot.Root : 'p'
	const cx = textVariants({
		weight,
		className,
		noTrim,
		uppercase,
		family,
		intent,
	})

	return <Comp ref={ref} className={cx} {...props} />
}
