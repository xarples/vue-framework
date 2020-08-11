import { createSSRApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
// import routes from '../routes.json'

import App from '../src/app.vue'

export async function createApp(context) {
  const app = createSSRApp(App)
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        component: () =>
          import(
            '/Users/Guillermo/Documents/projects/xarples/vue-framework/examples/minimal/src/pages/index.vue'
          ),
        componentPath:
          '/Users/Guillermo/Documents/projects/xarples/vue-framework/examples/minimal/src/pages/index.vue',
        name: 'root',
        path: '/',
      },
    ],
  })

  router.push(context.req.url)

  await router.isReady()

  app.use(router)

  return app
}

// function getRoutes(route) {
//   const _route = JSON.parse(JSON.stringify(route))

//   if (route.children) {
//     const children = route.children.map((child) => {
//       const childRoute = getRoutes(child)

//       childRoute.component = () => import(childRoute.componentPath)

//       return childRoute
//     })

//     _route.children = children
//   }

//   route.component = () => import(route.componentPath)

//   return _route
// }
