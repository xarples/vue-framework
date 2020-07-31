import build from './build'
import config from '../webpack/webpack.server'

export default function buildServer() {
  return build(config)
}
