import path from 'path'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import nodeExternals from 'webpack-node-externals'

import commonConfig from './webpack.common'

const workingDirPath = process.cwd()
const srcDirPath = path.resolve(workingDirPath, 'src')
const distDirPath = path.resolve(workingDirPath, '.framework')
const appDistPath = path.resolve(distDirPath, 'app.js')
const entryPath = path.resolve(distDirPath, 'server', 'entry.js')
const vueFrameworkCoreNodeModulesPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'vue-framework-core',
  'node_modules'
)

const config = merge(commonConfig, {
  target: 'node',
  devtool: 'source-map',
  entry: {
    server: entryPath,
  },
  output: {
    path: distDirPath,
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2',
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
    nodeExternals({
      // modulesDir: vueFrameworkCoreNodeModulesPath,
      whitelist: [/\.css$/],
    }),
  ],
  plugins: [
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
