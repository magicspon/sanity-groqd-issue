// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'

// this tool allows us to import and execute typescript from within a regular node file
const jiti = createJiti(fileURLToPath(import.meta.url))

// validate the client and server secrets
async function validate() {
	await jiti.import('./src/env/server')
	await jiti.import('./src/env/client')
}

try {
	await validate()
} catch (err) {
	console.error(err)
	process.exit(1)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	compiler: {
		removeConsole:
			process.env.VERCEL_ENV === 'production' ? { exclude: ['error'] } : false,
		reactRemoveProperties: { properties: ['^data-test$'] },
	},

	transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],

	webpack: (config) => {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},

	eslint: {
		ignoreDuringBuilds: !!process.env.CI,
	},

	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: process.env.NEXT_PUBLIC_SITE_DOMAIN,
	// 		},
	// 	],
	// 	minimumCacheTTL: 31536000,
	// 	dangerouslyAllowSVG: true,
	// 	contentDispositionType: 'attachment',
	// 	contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	// },
}

export default nextConfig
