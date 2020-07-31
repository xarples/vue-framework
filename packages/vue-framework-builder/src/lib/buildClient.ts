import build from './build'
import config from '../webpack/webpack.client'

export default function buildClient() {
  return build(config)
}
