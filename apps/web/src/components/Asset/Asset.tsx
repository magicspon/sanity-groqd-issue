import * as React from 'react'
import { match } from 'ts-pattern'
import type { AssetFragment } from '@spon/cms/src/fragments/asset.fragment'
import type { GetByTypeObject } from '@spon/utils/types/helpers'

type ImageFragment = GetByTypeObject<AssetFragment, { type: 'image' }>
type SvgFragment = GetByTypeObject<AssetFragment, { type: 'image' }>
type FileFragment = GetByTypeObject<AssetFragment, { type: 'image' }>

function Image(props: ImageFragment) {
	console.log({ props })
	return <div data-testid="Image">image</div>
}

function SVG(props: SvgFragment) {
	console.log({ props })
	return <div data-testid="SVG">image</div>
}

function File(props: FileFragment) {
	console.log({ props })
	return <div data-testid="File">image</div>
}

export function Asset(props: AssetFragment) {
	return (
		<>
			{match(props)
				.with({ type: 'image' }, (p) => <Image {...p} />)
				.with({ type: 'svg' }, (p) => <SVG {...p} />)
				.with({ type: 'file' }, (p) => <File {...p} />)
				.otherwise(() => (
					<></>
				))}
		</>
	)
}
