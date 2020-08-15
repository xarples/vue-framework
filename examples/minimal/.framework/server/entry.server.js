import { createSSRApp } from 'vue'
import { createRouter } from '@xarples/vue-framework-router'

import App from '../../src/app.vue'

const requireComponent = require.context(
  '../../src/pages',
  true,
  /\.vue$/,
  'lazy'
)

export async function createApp(context) {
  const router = createRouter(requireComponent)
  const app = createSSRApp(App)

  router.push(context.req.url)

  await router.isReady()

  app.use(router)

  return app
}
