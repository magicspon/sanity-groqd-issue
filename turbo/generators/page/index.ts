import type { PlopTypes } from '@turbo/gen'
import { withTest } from '../shared'
import { validator } from '../utils'

export const page = (plop: PlopTypes.NodePlopAPI) => {
	plop.setGenerator('page', {
		description: 'Create a new react context',
		prompts: [
			{
				type: 'input',
				name: 'func',
				message: 'What is the name of this page?',
				validate: validator,
			},
			{
				type: 'input',
				name: 'path',
				message: 'What is the pathname',
				validate: validator,
			},
			{
				type: 'confirm',
				name: 'sanity',
				message: 'Do you want to scaffold sanity queries',
				default: 'no',
			},
			withTest,
		],
		actions: (answers) => {
			const actions = [
				{
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/web/src/app/(frontend)/{{ path }}/page.tsx`,
					templateFile: 'page/page.ts.hbs',
				},
				{
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/web/src/templates/{{ pascalCase func }}Page/{{ pascalCase func }}Page.tsx`,
					templateFile: 'page/component.ts.hbs',
				},
				{
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/web/src/templates/{{ pascalCase func }}Page/index.ts`,
					templateFile: 'page/index.ts.hbs',
				},
			]

			if (answers?.sanity) {
				actions.push({
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/cms/queries/pages/{{ kebabCase func }}.query.ts`,
					templateFile: 'page/query.ts.hbs',
				})
				actions.push({
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/cms/queries/selection/{{ kebabCase func }}.selection.ts`,
					templateFile: 'page/selection.ts.hbs',
				})
			}

			if (answers?.tests) {
				actions.push({
					type: 'add',
					path: `{{ turbo.paths.root }}/apps/web/app/templates/{{ pascalCase func }}Page/{{ pascalCase func }}Page.spec.tsx`,
					templateFile: 'page/e2e.ts.hbs',
				})
			}

			return actions
		},
	})
}
