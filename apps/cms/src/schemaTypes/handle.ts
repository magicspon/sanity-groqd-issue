import { page } from './documents/page'
import { post } from './documents/post'
import { asset } from './registry/asset'
import { builder } from './registry/builder'
// import { builder } from './registry/builder'
import { code } from './registry/code'
import { group } from './registry/group'
import { label } from './registry/label'
import { letters } from './registry/letters'
import { link } from './registry/link'
import { markdown } from './registry/markdown'
import { meta } from './registry/meta'
import { prose } from './registry/prose'
// import { meta } from './registry/meta'
import { reference } from './registry/reference'
import { slug } from './registry/slug'
import { variant } from './registry/variant'
import { settings } from './singletons/settings'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
	// Singletons
	settings,
	// Documents
	page,
	post,

	// objects
	// builder,
	builder,
	group,
	// registry
	variant,
	label,
	meta,
	prose,
	link,
	code,
	markdown,
	letters,
	asset,
	slug,
	reference,
	// meta,
]
