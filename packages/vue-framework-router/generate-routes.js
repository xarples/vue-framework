const fs = require('fs')
const path = require('path')

const workingDir = process.cwd()
const pagesDir = path.resolve(workingDir, 'src', 'pages')
const notFoundComponentPath = path.resolve(workingDir, 'src', '404.vue')
const distDir = path.resolve(workingDir, 'dist')


function stringifyWithFunctions(object) {
  return JSON.stringify(object, (key, val) => {
    if (typeof val === 'function') {
      return `(${val})`; // make it a string, surround it by parenthesis to ensure we can revive it as an anonymous function
    }
    return val;
  }, 2);
};

function parseWithFunctions(obj) {
  return JSON.parse(obj, (k, v) => {
    if (typeof v === 'string' && v.indexOf('function') >= 0) {
      return eval(v);
    }
    return v;
  });
};

function getDirTree (pathname, routeName = 'root') {
  const stats = fs.lstatSync(pathname)
  const baseName = path.basename(pathname)

  const route = {
    name: routeName,
    path: `/${baseName}`,
    componentPath: notFoundComponentPath
  }

  route.name = route.name.replace('pages', 'root').replace('.vue', '')
  route.path = route.path.replace('pages', '').replace('.vue', '').replace('_', ':')


  if (stats.isDirectory()) {
    const children = fs.readdirSync(pathname)
      .map(childName => {
        const childPathname = `${pathname}/${childName}`
        const childRouteName = `${routeName}/${childName}`
        const childRoute = getDirTree(childPathname, childRouteName)

        if (childRoute.name.includes('index')) {
          route.componentPath = childPathname
        }

        return childRoute
      })
      .filter(childRoute => {
        return !childRoute.name.includes('index')
      })

    route.children = children
  } else {
    route.componentPath = pathname
  }

  return route
}

const routes = getDirTree(pagesDir)

console.log(routes.t)

fs.writeFile(`${distDir}/routes.json`, stringifyWithFunctions(routes), (err) => {
  if (err) throw err

  console.log('The file has been saved!');
})