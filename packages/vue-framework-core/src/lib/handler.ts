import path from 'path'
import { renderToString } from '@vue/server-renderer'
import serveStatic from 'serve-static'
import renderBaseHTML from './renderBaseHTML'

const workingDirPath = process.cwd()
const staticPath = path.resolve(workingDirPath)
const distPath = path.resolve(workingDirPath, '.framework')
const serverBundledPath = path.resolve(distPath, 'server.js')
const { createApp } = require(serverBundledPath)

export default function handler() {
  return async function _handler(req: any, res: any, next: any) {
    if (
      req.originalUrl.includes('/.framework/') ||
      req.originalUrl.includes('/favicon.ico')
    ) {
      return serveStatic(staticPath)(req, res, next)
    }

    const context = {
      req,
      res,
    }

    const vueApp = await createApp(context)
    const content = await renderToString(vueApp)
    const html = await renderBaseHTML(content)

    res.end(html)
  }
}
