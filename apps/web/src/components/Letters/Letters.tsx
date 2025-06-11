import * as React from 'react'
import type { LettersFragment } from '@spon/cms/src/fragments/letters.fragment'

export function Letters(props: LettersFragment) {
	return <div data-testid="Letters" {...props} />
}
