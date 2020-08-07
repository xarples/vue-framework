import { createSSRApp } from 'vue'

import App from '../../src/app.vue'

export function createApp() {
  return createSSRApp(App)
}
