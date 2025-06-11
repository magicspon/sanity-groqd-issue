import * as React from 'react'
import type { LinkFragment } from '@spon/cms/src/fragments/link.fragment'

export function Link(props: LinkFragment) {
	return <pre>{JSON.stringify(props, null, 2)}</pre>
}
