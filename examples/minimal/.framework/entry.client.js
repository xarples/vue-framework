import { createSSRApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import routes from '../routes.json'

import App from '../src/app.vue'

const app = createSSRApp(App)
const router = createRouter({
  history: createWebHistory(),
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

app.use(router)

router.isReady().then(() => {
  app.mount('#vue-framework-root')
})

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
