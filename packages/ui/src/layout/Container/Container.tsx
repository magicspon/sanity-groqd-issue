import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

export type TContainerProps = React.ComponentProps<'div'> &
	VariantProps<typeof style> & {
		asChild?: boolean
	}

export function Container({
	className,
	center,
	gutter,
	asChild,
	size,
	ref,
	...props
}: TContainerProps) {
	const cx = style({ center, gutter, className, size })
	const Comp = asChild ? Slot.Root : 'div'

	return <Comp ref={ref} className={cx} {...props} />
}

const style = cva(null, {
	variants: {
		center: {
			true: 'mx-auto',
		},
		gutter: {
			true: 'px-8',
		},
		size: {
			none: '',
			default: 'max-w-7xl w-full',
		},
	},
	defaultVariants: {
		size: 'default',
	},
})
