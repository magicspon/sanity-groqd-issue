import * as React from 'react'

type TElementProps = React.ComponentProps<'div'>

type TAssetRenderProps = TElementProps & {
	//
}

export function AssetRender(props: TAssetRenderProps) {
	return <pre>{JSON.stringify(props)}</pre>
}
