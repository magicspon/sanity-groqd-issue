'use client'

import { Slot } from 'radix-ui'
import * as React from 'react'
import { useIsClient, useWindowSize } from 'usehooks-ts'

type TOverflowContext = {
	value: number
}

const OverflowContext = React.createContext<TOverflowContext>(null!)

function useOverflow() {
	return React.useContext(OverflowContext)
}

type TOverflowProps = React.ComponentProps<'nav'> & {
	asChild?: boolean
}

export function Overflow({ asChild, ...props }: TOverflowProps) {
	const Comp = asChild ? Slot.Root : 'nav'
	const isClient = useIsClient()
	const { width } = useWindowSize({ debounceDelay: 100 })
	const ref = React.useRef<React.ComponentRef<'nav'>>(null!)
	const [value, setValue] = React.useState<number>(null!)

	const runCheck = React.useCallback(() => {
		const item = ref.current
		if (!item) return
		const box = item.getBoundingClientRect()
		setValue(box.right)
	}, [])

	React.useEffect(() => {
		if (isClient && width) {
			runCheck()
		}
	}, [isClient, width, runCheck])

	return (
		<OverflowContext.Provider value={{ value: value }}>
			<Comp data-testid="Overflow" ref={ref} {...props} />
		</OverflowContext.Provider>
	)
}

type TItemProps = React.ComponentProps<'div'> & {
	asChild?: boolean
}

export function Item({ asChild, ...props }: TItemProps) {
	const Comp = asChild ? Slot.Root : 'div'
	const ref = React.useRef<React.ComponentRef<'div'>>(null!)
	const { value } = useOverflow()
	const isClient = useIsClient
	const [attr, setAttr] = React.useState('open')

	React.useEffect(() => {
		const item = ref.current
		if (!isClient || !item) return

		const box = item.getBoundingClientRect()
		const clipped = box.right > value
		setAttr(clipped ? 'closed' : 'open')
	}, [value, isClient])

	return <Comp ref={ref} data-state={attr} {...props} />
}
