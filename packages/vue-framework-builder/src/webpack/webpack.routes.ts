import path from 'path'
import webpack, { Configuration } from 'webpack'
import generateRoutes from '../lib/generate-routes'

import { isProd } from './webpack.common'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework')
const pagesDirPath = path.resolve(workingDirPath, 'src', 'pages')
const entryPath = path.resolve(distDirPath, 'routes.js')
const routes = generateRoutes(pagesDirPath)

console.log(routes)

const config: Configuration = {
  mode: !isProd ? 'production' : 'development',
  // target: 'node',
  entry: entryPath,
  output: {
    path: distDirPath,
    filename: '_routes.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.VUE_ENV': '"client"',
      'process.env.ROUTES': routes,
    }),
  ],
}

export default config
