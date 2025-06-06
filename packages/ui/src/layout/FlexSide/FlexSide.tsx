import clsx from 'clsx'
import { Slot } from 'radix-ui'
import * as React from 'react'

export type TFlexSideProps = React.ComponentProps<'div'> & {
	asChild?: boolean
}

export function FlexSide({
	asChild,
	className,
	ref,
	...props
}: TFlexSideProps) {
	const Comp = asChild ? Slot.Root : 'div'

	return (
		<Comp ref={ref} className={clsx(className, 'grow basis-0')} {...props} />
	)
}
