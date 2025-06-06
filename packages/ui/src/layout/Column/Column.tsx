import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import * as React from 'react'

const style = cva('flex flex-col', {
	variants: {},
	defaultVariants: {},
})

export type TColumnProps = React.ComponentProps<'div'> &
	VariantProps<typeof style> & {
		asChild?: boolean
	}

export function Column({ asChild, className, ref, ...props }: TColumnProps) {
	const Comp = asChild ? Slot.Root : 'div'
	const cx = style({ className })

	return <Comp ref={ref} className={cx} {...props} />
}
