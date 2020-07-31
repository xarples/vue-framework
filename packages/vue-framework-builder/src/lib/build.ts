import webpack, { Configuration } from 'webpack'

export default async function build(config: Configuration) {
  const compiler = webpack(config)

  return new Promise<webpack.Stats>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      console.log(
        stats.toString({
          errors: true,
          warnings: true,
          env: true,
          colors: true,
        })
      )

      resolve(stats)
    })
  })
}
