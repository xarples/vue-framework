import { createSSRApp } from 'vue'
import { createRouter } from '@xarples/vue-framework-router'

import App from '../src/app.vue'

const requireComponent = require.context('../src/pages', true, /\.vue$/, 'lazy')
const router = createRouter(requireComponent)
const app = createSSRApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#vue-framework-root')
})
