import * as React from 'react'
import { match } from 'ts-pattern'
import type { GroupFragment } from '@spon/cms/src/fragments/group.fragment'
import type { BlocksFragment } from '@spon/cms/src/fragments/page.fragment'

// type Block = ProseFragment | LettersFragment | MarkdownFragment | RelatedFragment | AssetFragment | LinkFragment

function ComponentGroupTree(props: GroupFragment & { depth: number }) {
	const { depth } = props
	return (
		<div data-testid="ComponentLeaf" data-level={depth}>
			{match(props)
				.with({ _type: 'group' }, (p) => (
					<div data-testid="ComponentTree">
						{p.group?.map((item) => (
							<ComponentGroupTree key={item._key} {...item} depth={depth + 1} />
						))}
					</div>
				))
				.with({ _type: 'letters' }, (p) => (
					<>
						<p>{p.value}</p>
					</>
				))
				.with({ _type: 'markdown' }, (p) => (
					<>
						<pre>{JSON.stringify(p)}</pre>
						<div dangerouslySetInnerHTML={{ __html: p.markdown }} />
					</>
				))
				.with({ _type: 'prose' }, (p) => (
					<>
						<pre>{JSON.stringify(p.value)}</pre>
					</>
				))
				.with({ _type: 'asset' }, (p) => (
					<>
						<pre>{JSON.stringify(p)}</pre>
					</>
				))

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
			{props.blocks?.map((block, i) => (
				<div key={i}>
					{block.group?.map((item) => (
						<ComponentGroupTree key={item._key} depth={1} {...item} />
					))}
				</div>
			))}
		</div>
	)
}
