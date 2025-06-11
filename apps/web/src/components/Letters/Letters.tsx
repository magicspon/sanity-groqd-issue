import * as React from 'react'
import type { LettersFragment } from '@spon/cms/src/fragments/letters.fragment'

export function Letters({ value }: LettersFragment) {
	return <div data-testid="Letters">{value}</div>
}
