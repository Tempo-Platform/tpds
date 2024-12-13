import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globSync } from 'glob'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import css from 'rollup-plugin-css-only'

export default {
  input: Object.fromEntries(
    globSync([
      './src/elements/**/*.*',
      './src/components/**/*.*',
      './src/constants/**/*.*',
      './src/tokens/*.*',
      './src/assets/svgs/**/*.*',
      './src/css/index.tsx',
    ]).map(file => [
      // This removes `src/` as well as the file extension from each
      // file, so e.g. src/nested/foo.js becomes nested/foo
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      // This expands the relative paths to absolute paths, so e.g.
      // src/nested/foo becomes /project/src/nested/foo.js
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
  ),
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: ['clsx', 'react', 'react-syntax-highlighter', 'react-colorful', 'tailwind-merge'],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    commonjs(),
    css({
      output: 'css/tpds.css',
    }),
  ],
}
