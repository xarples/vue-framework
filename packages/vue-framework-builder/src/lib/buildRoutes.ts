import build from './build'
import config from '../webpack/webpack.routes'

export default function buildRoutes() {
  return build(config)
}
