import typescript from '@rollup/plugin-typescript'

const mainConfig = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [typescript()],
}

const libConfig = {
  input: [
    'src/lib/handler.ts',
    'src/lib/index.ts',
    'src/lib/renderBaseHTML.ts',
    'src/lib/renderCss.ts',
    'src/lib/renderScript.ts',
  ],
  output: {
    dir: 'dist/lib',
    format: 'cjs',
  },
  externals: ['vue'],
  plugins: [
    typescript({
      outDir: 'dist/lib',
    }),
  ],
}

export default [mainConfig, libConfig]
