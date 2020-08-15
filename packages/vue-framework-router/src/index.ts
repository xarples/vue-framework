import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

interface Route {
  name: string
  path: string
  component: () => Promise<any>
}

const isSever = typeof window === 'undefined'

export function createRouter(context: any) {
  const router = createVueRouter({
    history: !isSever ? createWebHistory() : createMemoryHistory(),
    routes: getRoutes(context),
  })

  return router
}

function getRoutes(requireComponent: any): Route[] {
  // @ts-ignore
  // const requireComponent = require.context(
  //   '../src/pages',
  //   true,
  //   /\.vue$/,
  //   'lazy'
  // )

  const routes = requireComponent.keys()

  return routes.map((route: any) => {
    const regExp = /^\.\/(.*)\.vue+$/
    const routeName = route.replace(regExp, '$1')
    const routePath = route.replace(regExp, '/$1').replace('/index', '')

    return {
      name: routeName,
      path: routePath,
      component: () =>
        Promise.resolve(requireComponent(route)).then(getDefault),
    }
  })
}

function getDefault(component: any) {
  return component.default || component
}
