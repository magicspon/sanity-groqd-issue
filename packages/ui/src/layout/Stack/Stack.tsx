import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const style = cva('grid', {
	variants: {
		size: {
			none: null,
			0: 'gap-0',
			1: 'gap-1',
			2: 'gap-2',
			3: 'gap-3',
			4: 'gap-4',
			5: 'gap-5',
			6: 'gap-6',
			8: 'gap-8',
			10: 'gap-10',
			12: 'gap-12',
			16: 'gap-16',
			20: 'gap-20',
			24: 'gap-24',
			36: 'gap-36',
			40: 'gap-40',
			56: 'gap-56',
		},
	},
	defaultVariants: {},
})

export type TStackProps = React.ComponentProps<'div'> &
	VariantProps<typeof style> & {
		asChild?: boolean
	}

export function Stack({
	asChild,
	size,
	className,
	ref,
	...props
}: TStackProps) {
	const Comp = asChild ? Slot.Root : 'div'
	const cx = style({ size, className })

	return <Comp ref={ref} className={cx} {...props} />
}
