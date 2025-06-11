import * as React from 'react'
import type { MarkdownFragment } from '@spon/cms/src/fragments/markdown.fragment'

export function Markdown({ markdown }: MarkdownFragment) {
	return (
		<div
			data-testid="Markdown"
			dangerouslySetInnerHTML={{ __html: markdown! }}
		/>
	)
}
