import vue from 'rollup-plugin-vue' // Handle .vue SFC files
import buble from '@rollup/plugin-buble' // Transpile/polyfill with reasonable browser support
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
export default [
  // ESM build to be used with webpack/rollup.
  {
    external: [
      'vis-data/esnext',
      'vis-util/esnext',
      'vis-timeline/esnext',
      'vis-network/esnext',
      'vis-data/esnext'
    ],
    input: 'src/main.js',
    output: {
      format: 'esm',
      file: 'dist/vue-visjs.esm.js'
    },
    plugins: [commonjs(), vue(), postcss()]
  },
  // SSR build.
  {
    external: [
      'vis-data/esnext',
      'vis-util/esnext',
      'vis-timeline/esnext',
      'vis-network/esnext',
      'vis-data/esnext'
    ],
    input: 'src/main.js',
    output: {
      format: 'cjs',
      file: 'dist/vue-visjs.ssr.js'
    },
    plugins: [commonjs(), vue({ template: { optimizeSSR: true } }), postcss()]
  },
  // Browser build.
  {
    external: [
      'vis-data/esnext',
      'vis-util/esnext',
      'vis-timeline/esnext',
      'vis-network/esnext',
      'vis-data/esnext'
    ],
    input: 'src/main.js',
    output: {
      name: 'vueVisjs',
      format: 'iife',
      file: 'dist/vue-visjs.min.js',
      globals: {
        'vis-data/esnext': 'visData',
        'vis-util/esnext': 'visUtil',
        'vis-timeline/esnext': 'visTimeline',
        'vis-network/esnext': 'visNetwork'
      }
    },
    plugins: [commonjs(), vue(), postcss(), buble(), terser()]
  }
]
