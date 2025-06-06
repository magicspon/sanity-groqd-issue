import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const style = cva('grid', {
	variants: {
		columns: {
			blog: 'gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]',
		},
	},
	defaultVariants: {},
})

export type TGridProps = React.ComponentProps<'div'> & {
	asChild?: boolean
} & VariantProps<typeof style>

export function Grid({
	asChild,
	className,
	columns,
	ref,
	...props
}: TGridProps) {
	const Comp = asChild ? Slot.Root : 'div'
	const cx = style({ className, columns })

	return <Comp ref={ref} className={cx} {...props} />
}
