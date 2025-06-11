import * as React from 'react'
import type { MarkdownFragment } from '@spon/cms/src/fragments/markdown.fragment'

export function Markdown(props: MarkdownFragment) {
	return <div data-testid="Markdown" {...props} />
}
