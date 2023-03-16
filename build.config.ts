import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'packages/demo/src/index.ts',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
