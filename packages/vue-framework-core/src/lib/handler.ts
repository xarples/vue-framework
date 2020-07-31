import path from 'path'
import { renderToString } from '@vue/server-renderer'
import serveStatic from 'serve-static'
import renderBaseHTML from './renderBaseHTML'

const workingDirPath = process.cwd()
const staticPath = path.resolve(workingDirPath)
const distPath = path.resolve(workingDirPath, '.framework', 'server')
const serverBundledPath = path.resolve(distPath, 'server.js')

const createApp = require(serverBundledPath).default

export default async function handler(req: any, res: any, next: any) {
  if (
    req.originalUrl.includes('/.framework/') ||
    req.originalUrl.includes('/favicon.ico')
  ) {
    return serveStatic(staticPath)(req, res, next)
  }

  // const createApp = (await import(serverBundledPath)).default

  const vueApp = await createApp()

  const content = await renderToString(vueApp)
  const html = await renderBaseHTML(content)

  res.status(200).send(html)
}