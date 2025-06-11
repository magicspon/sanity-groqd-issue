import * as React from 'react'
import { match } from 'ts-pattern'
import type { GroupFragment } from '@spon/cms/src/fragments/group.fragment'
import type { BlocksFragment } from '@spon/cms/src/fragments/page.fragment'
import { Asset } from '../Asset'
import { Letters } from '../Letters'
import { Link } from '../Link'
import { Markdown } from '../Markdown'
import { Prose } from '../Prose'

function ComponentGroupTree(props: GroupFragment & { depth: number }) {
	const { depth } = props

	return (
		<div data-testid="ComponentLeaf" data-level={depth}>
			{match(props)
				.with({ _type: 'group' }, (p) => (
					<div data-testid="ComponentBranch">
						{p.group?.map((item) => (
							<ComponentGroupTree key={item._key} {...item} depth={depth + 1} />
						))}
					</div>
				))
				.with({ _type: 'letters' }, (p) => <Letters {...p} />)
				.with({ _type: 'markdown' }, (p) => <Markdown {...p} />)
				.with({ _type: 'prose' }, (p) => <Prose {...p} />)
				.with({ _type: 'asset' }, (p) => <Asset {...p} />)
				.with({ _type: 'link' }, (p) => <Link {...p} />)
				.otherwise(() => (
					<></>
				))}
		</div>
	)
}

type TComponentTreeProps = {
	blocks: BlocksFragment['blocks']
}

export function ComponentTree(props: TComponentTreeProps) {
	return (
		<div data-testid="ComponentTree">
			{props.blocks?.map((block) => (
				<div data-testid="ComponentBranch" key={block._key}>
					{block.group?.map((item) => (
						<ComponentGroupTree key={item._key} depth={1} {...item} />
					))}
				</div>
			))}
		</div>
	)
}
