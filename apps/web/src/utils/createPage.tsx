// https://saas-ui.dev/blog/nextjs-create-page-helper-with-loader-pattern
// source: https://gist.github.com/magicspon/c1647cf91909808be0a1eed5448bb56d
// updated by @magicspon
import type { Metadata, ResolvingMetadata } from 'next'
import { unstable_cache as cache } from 'next/cache'
import { draftMode } from 'next/headers'
import type { AnyZodObject, z } from 'zod'

const DEFAULT_REVALIDATE_TIME = 60 * 60 * 24 // 1 DAY

type InferParams<Params> = Params extends readonly string[]
	? Record<Params[number], string>
	: Params extends AnyZodObject
		? z.infer<Params>
		: unknown

type LoaderFn<
	Params extends readonly string[] | AnyZodObject,
	SearchParams extends readonly string[] | AnyZodObject,
	DraftMode,
> = (args: {
	params: InferParams<Params>
	searchParams: InferParams<SearchParams>
	draftMode: DraftMode
}) => Promise<any>

type CacheArgs = {
	enabled?: boolean
	revalidate?: number | false | undefined
	tags?: string[] | undefined
	keyParts?: string[]
}

type ShouldCacheFn<
	Params extends readonly string[] | AnyZodObject,
	SearchParams extends readonly string[] | AnyZodObject,
	DraftMode,
> = (args: {
	params: InferParams<Params>
	searchParams: InferParams<SearchParams>
	draftMode: DraftMode
}) => Promise<CacheArgs>

type InferLoaderData<Loader> = Loader extends (args: any) => Promise<infer T>
	? T
	: unknown

type DraftMode = {
	isEnabled: boolean
}

export interface CreatePageProps<
	Params extends readonly string[] | AnyZodObject,
	SearchParams extends readonly string[] | AnyZodObject,
	Loader extends LoaderFn<Params, SearchParams, DraftMode> = LoaderFn<
		Params,
		SearchParams,
		DraftMode
	>,
	ShouldCache extends ShouldCacheFn<
		Params,
		SearchParams,
		DraftMode
	> = ShouldCacheFn<Params, SearchParams, DraftMode>,
> {
	params?: Params
	searchParams?: SearchParams
	loader?: Loader
	caching?: ShouldCache
	allowDraft?: boolean

	metadata?:
		| Metadata
		| ((
				args: {
					params: InferParams<Params>
					searchParams: InferParams<SearchParams>
					data: InferLoaderData<Loader>
					draftMode: DraftMode
				},
				parent: ResolvingMetadata,
		  ) => Promise<Metadata>)
	component: React.ComponentType<{
		params: InferParams<Params>
		searchParams?: InferParams<SearchParams>
		data: InferLoaderData<Loader>
		draftMode: DraftMode
	}>
}

async function parseParams<Schema extends readonly string[] | AnyZodObject>(
	_params: Promise<Record<string, string>>,
	schema?: Schema,
) {
	const params = await _params

	if (schema && 'parse' in schema) {
		return schema.parse(params) as InferParams<Schema>
	}

	return params as InferParams<Schema>
}

export const createPage = <
	const Params extends readonly string[] | AnyZodObject,
	const SearchParams extends readonly string[] | AnyZodObject,
	Loader extends LoaderFn<Params, SearchParams, DraftMode> = LoaderFn<
		Params,
		SearchParams,
		DraftMode
	>,
	ShouldCache extends ShouldCacheFn<
		Params,
		SearchParams,
		DraftMode
	> = ShouldCacheFn<Params, SearchParams, DraftMode>,
>(
	props: CreatePageProps<Params, SearchParams, Loader, ShouldCache>,
) => {
	const {
		params: paramsSchema,
		searchParams: searchParamsSchema,
		component: PageComponent,
		loader,
		metadata,
		caching = () => Promise.resolve({ enabled: false } as CacheArgs),
		allowDraft = true,
	} = props

	const runLoader = async (pageProps: {
		params: InferParams<Params>
		searchParams: InferParams<SearchParams>
	}) => {
		if (!loader)
			return {
				draftMode: { isEnabled: false },
			}

		const { isEnabled } = allowDraft ? await draftMode() : { isEnabled: false }
		const previewMode = { isEnabled }
		const props = { ...pageProps, draftMode: { isEnabled } }

		const {
			enabled = true,
			revalidate = DEFAULT_REVALIDATE_TIME,
			tags = undefined,
			keyParts = undefined,
		} = await caching(props)
		if (enabled) {
			console.info(`Using cached loader`)
		}

		const fn =
			!enabled || previewMode.isEnabled
				? loader.bind(null, props)
				: cache(async () => loader(props), keyParts, {
						revalidate,
						tags,
					})

		const data = await fn()

		return { draftMode: { isEnabled }, data }
	}

	// We don't really care about the types here since it's internal

	async function Page(props: any) {
		const params = await parseParams(props.params, paramsSchema)
		const searchParams = await parseParams(
			props.searchParams,
			searchParamsSchema,
		)

		let pageProps: any = {
			params,
			searchParams,
		}

		if (typeof loader === 'function') {
			const { data, draftMode } = await runLoader(pageProps)

			pageProps = {
				...pageProps,
				data,
				draftMode,
			}
		}

		return <PageComponent {...pageProps} />
	}

	if (typeof metadata === 'function') {
		return {
			generateMetadata: async (
				{
					params,
					searchParams,
				}: {
					params: Promise<InferParams<Params>>
					searchParams: Promise<InferParams<SearchParams>>
				},
				parent: ResolvingMetadata,
			) => {
				const _params = await parseParams(params, paramsSchema)
				const _searchParams = await parseParams(
					searchParams,
					searchParamsSchema,
				)

				const { data, draftMode } =
					typeof loader === 'function'
						? await runLoader({
								params: _params,
								searchParams: _searchParams,
							})
						: { draftMode: { isEnabled: false } }

				return metadata(
					{
						params: _params,
						searchParams: _searchParams,
						data,
						draftMode,
					},
					parent,
				)
			},
			Page,
		}
	}

	return {
		metadata,
		Page,
	}
}
