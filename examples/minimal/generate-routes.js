const util = require('util')
const fs = require('fs')
const path = require('path')

const workingDir = process.cwd()
const pagesDir = path.resolve(workingDir, 'src', 'pages')
const notFoundComponentPath = path.resolve(workingDir, 'src', '404.vue')
const distDir = path.resolve(workingDir, '.framework')

function getDirTree(pathname, routeName = 'root') {
  const stats = fs.lstatSync(pathname)
  const baseName = path.basename(pathname)

  const route = {
    name: routeName,
    path: `/${baseName}`,
    componentPath: notFoundComponentPath,
  }

  route.name = route.name.replace('pages', 'root').replace('.vue', '')
  route.path = route.path
    .replace('pages', '')
    .replace('.vue', '')
    .replace('_', ':')

  if (stats.isDirectory()) {
    const children = fs
      .readdirSync(pathname)
      .map((childName) => {
        const childPathname = `${pathname}/${childName}`
        const childRouteName = `${routeName}/${childName}`
        const childRoute = getDirTree(childPathname, childRouteName)

        if (childRoute.name.includes('index')) {
          route.componentPath = childPathname
        }

        return childRoute
      })
      .filter((childRoute) => {
        return !childRoute.name.includes('index')
      })

    route.children = children
  } else {
    route.componentPath = pathname
  }

  return route
}

const routes = getDirTree(pagesDir)

fs.writeFileSync(
  `${distDir}/routes.js`,
  `export default ${JSON.stringify(routes)}`,
  (err) => {
    if (err) throw err

    console.log('The file has been saved!')
  }
)
