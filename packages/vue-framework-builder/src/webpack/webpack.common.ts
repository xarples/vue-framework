import path from 'path'
import { Configuration } from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'

export const isProd = process.env.NODE_ENV === 'production'

const workDirPath = process.cwd()
const vueFrameworkCoreNodeModulesPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'vue-framework-core',
  'node_modules'
)

const cliNodeModulesPath = path.resolve(__dirname, '..', '..', 'node_modules')

const config: Configuration = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    // modules: ['node_modules'],
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
  plugins: [new VueLoaderPlugin()],
}

export default config
