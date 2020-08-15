import path from 'path'
import webpack, { Configuration } from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export const isProd = process.env.NODE_ENV === 'production'
const workDirPath = process.cwd()
const workingDirectoryNodeModules = path.resolve(
  workDirPath,
  '..',
  '..',
  'node_modules'
)
const cliNodeModulesPath = path.resolve(__dirname, '..', '..', 'node_modules')

const config: Configuration = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules', workingDirectoryNodeModules],
  },
  optimization: {
    usedExports: true,
  },
  resolveLoader: {
    modules: ['node_modules', cliNodeModulesPath],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
      'process.env.COMPONENT':
        'function component() { return import(this.componentPath) }',
    }),
  ],
}

export default config
