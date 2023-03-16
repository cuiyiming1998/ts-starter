import typescript from '@rollup/plugin-typescript'

export default {
  input: './packages/demo/src/index.ts',
  output: [
    // 1. cjs -> commonjs规范
    // 2. esm -> 标准化模块规范
    {
      format: 'cjs',
      file: 'packages/demo/dist/demo.cjs.js',
    },
    {
      format: 'es',
      file: 'packages/demo/dist/demo.esm.js',
    },
  ],
  plugins: [
    typescript(),
  ],
}
