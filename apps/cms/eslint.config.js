import { configs, defineConfig } from '@spon/eslint-config'

export default defineConfig(...configs.base, { ignores: ['sanity.types.ts'] })
