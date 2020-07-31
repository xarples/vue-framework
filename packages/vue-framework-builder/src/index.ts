import * as configs from './webpack'
import * as lib from './lib'

export * from './webpack'
export * from './lib'

export default {
  ...configs,
  ...lib,
}
