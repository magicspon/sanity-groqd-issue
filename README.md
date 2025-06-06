# ⚠️ under construction

Strange ts error in `/apps/web/src/app/(frontend)/page.tsx

```
Argument of type '[]' is not assignable to parameter of type '["⛔️ Error: this projection has an invalid property ⛔️"] | ["⛔️ A parser can only be used for known properties; 'label' is not known ⛔️"]'.
  Type '[]' is not assignable to type '["⛔️ A parser can only be used for known properties; 'label' is not known ⛔️"]'.
    Source has 0 element(s) but target requires 1.
```

# Spon Sanity.io starter

## Requirements

- Node 20 or above
- Sanity account

## Getting started

1. Create a `.env.local` file in apps/web. Use the env.example file as an example. and a `.env` in apps/cms

```bash
cp apps/web/env.example apps/web/.env.local
cp apps/cms/env.example apps/cms/.env.local
```

2. Get a project id, read/write/deploy tokens from sanity

3. Install dependencies `npm install`

4. Start next server `npm run dev`

`https://localhost:3000` Next

`https://localhost:3000/studio` sanity studio

`https://localhost:6006` Storybook

### Features

- Sanity
- Typescript
- Tailwind
- Radix UI
- React Query
- Framer motion
- Nextjs
- Type-safe ENV
- Storybook
- Turbo Gen
- Eslint
- Prettier
- Commitlint
- Lintstaged
- Playwright
- Vitest

### Structure

```
.husky
 └─ pre commit lint/format hooks
apps
  └─ cms
      ├─ Sanity io CMS
  └─ web
      ├─ Next.js 15.x
packages
 └─ eslint-config
 └─ hooks - react hooks
 └─ tailwind-config
 └─ tsconfig-config
 └─ ui - Ui primitives
 └─ utils - Shared utils
turbo
  └─ generators - code scaffold
```

### Code scaffold

`npm run new:component` scaffold a new react component with tests and stories

`npm run new:hook` scaffold a new react hook with tests

`npm run new:fn` scaffold a new function with tests

`npm run new:context` scaffold a new react context

`npm run new:page` scaffold a new nextjs app router page (with an optional e2e test)

### Path Alias

`~` points to src/\*

```javascript
import { Header } from '~/components/Header'
```

### Contributing

All commit messages must adhere the commitlint conventions

```base
feat: support chinese title

fix: fix a subject bug

docs: update README.md

refactor: update comments
```
