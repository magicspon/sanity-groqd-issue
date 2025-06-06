export const PROJECT_ID =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
	process.env.SANITY_STUDIO_PROJECT_ID!

export const READ_TOKEN = process.env.SANITY_STUDIO_READ_TOKEN
export const WRITE_TOKEN = process.env.SANITY_STUDIO_WRITE_TOKEN
