import { PortableText } from '@portabletext/react'
import * as React from 'react'
import type {
	ProseFragment,
	ProseLinkValue,
} from '@spon/cms/src/fragments/prose.fragment'

export function Prose(props: ProseFragment) {
	return (
		<>
			<PortableText
				value={props.value!}
				components={{
					marks: {
						link: ({ children, value }) => {
							const v = value as ProseLinkValue
							console.log({ v, value })
							return <a href={value.href}>{children}</a>
						},
					},
				}}
			/>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</>
	)
}
