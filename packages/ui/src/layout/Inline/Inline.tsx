import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const gaps = {
	xs: 'gap-1',
	sm: 'gap-3',
	base: 'gap-5',
	md: 'gap-8',
	lg: 'gap-10',
	xl: 'gap-12',
	'2xl': 'gap-16',
}

const style = cva('flex flex-row', {
	variants: {
		size: gaps,
		align: {
			start: 'items-start',
			center: 'items-center',
		},
		justify: {
			between: 'justify-between',
			around: 'justify-around',
			center: 'justify-center',
		},
		wrap: {
			true: 'flex-wrap',
		},
	},
	defaultVariants: {
		size: 'sm',
		align: 'center',
	},
})

export type TInlineProps = React.ComponentProps<'div'> &
	VariantProps<typeof style> & {
		asChild?: boolean
	}

export function Inline({
	asChild,
	size,
	wrap,
	align,
	justify,
	className,
	ref,
	...props
}: TInlineProps) {
	const Comp = asChild ? Slot.Root : 'div'
	const cx = style({ size, className, wrap, justify, align })

	return <Comp ref={ref} className={cx} {...props} />
}
