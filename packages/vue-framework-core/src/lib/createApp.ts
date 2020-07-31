import { createSSRApp, App } from 'vue'

export default function createApp(app: App) {
  const vueApp = createSSRApp(app)

  return vueApp
}
