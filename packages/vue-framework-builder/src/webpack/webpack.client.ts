import path from 'path'
import webpack from 'webpack'
import { merge } from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'

import commonConfig, { isProd } from './webpack.common'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework', 'client')
const entryPath = path.resolve(distDirPath, 'entry.client.js')

const config = merge(commonConfig, {
  entry: entryPath,
  output: {
    path: distDirPath,
    publicPath: '/.framework/client/',
    filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
    chunkFilename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      // extract webpack runtime & manifest to avoid vendor chunk hash changing
      // on every build.
      name: 'runtime',
    },
    splitChunks: {
      name: 'vendors',
      chunks: 'all',
    },
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'client-manifest.json',
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
      'process.env.VUE_ENV': '"client"',
      'process.browser': true,
      'process.server': false,
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'css/[name].[contenthash].css' : 'css/[name].css',
      // filename: isProd ? 'css/[name].[contenthash].css' : 'css/[name].css',
    }),
  ],
})

export default config
