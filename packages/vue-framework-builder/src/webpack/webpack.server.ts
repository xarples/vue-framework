import path from 'path'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'
import ManifestPlugin from 'webpack-manifest-plugin'

import commonConfig from './webpack.common'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework', 'server')
const entryPath = path.resolve(distDirPath, 'entry.server.js')

const config = merge(commonConfig, {
  target: 'node',
  devtool: 'source-map',
  entry: entryPath,
  output: {
    path: distDirPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/.framework/server/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'null-loader',
      },
    ],
  },
  externals: [
    'vue-router',
    {
      vue: 'vue',
    },
    nodeExternals({
      whitelist: [/\.css$/],
      // @ts-ignore
      allowlist: [/\.css$/],
    }),
  ],
  plugins: [
    new ManifestPlugin({
      fileName: 'server-manifest.json',
      generate(seed, files, entrypoints) {
        const initial = files
          .filter((file) => file.isInitial)
          .map((file) => file.path)

        const chunks = files
          .filter((file) => file.isChunk)
          .map((file) => file.path)

        return {
          initial,
          chunks,
        }
      },
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.VUE_ENV': '"server"',
      'process.browser': false,
      'process.server': true,
    }),
  ],
})

export default config
