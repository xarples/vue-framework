import path from 'path'
import fs from 'fs'

export default async function generate() {
  const entryClientName = 'entry.client.js'
  const entryServerName = 'entry.server.js'
  const workDirPath = process.cwd()
  const currentDirPath = __dirname
  const templatesDirPath = path.resolve(currentDirPath, '..', '..', 'templates')
  const distDirPath = path.resolve(workDirPath, '.framework')
  const clientDistDirPath = path.resolve(distDirPath)
  const serverDistDirPath = path.resolve(distDirPath)
  const clientTemplatePath = path.resolve(templatesDirPath, entryClientName)
  const serverTemplatePath = path.resolve(templatesDirPath, entryServerName)
  const clientEntryPath = path.resolve(clientDistDirPath, entryClientName)
  const serverEntryPath = path.resolve(serverDistDirPath, entryServerName)

  try {
    await fs.promises.stat(clientEntryPath)
  } catch (error) {
    const file = await fs.promises.readFile(clientTemplatePath)

    await fs.promises.writeFile(
      path.resolve(clientDistDirPath, entryClientName),
      file.toString('utf8')
    )
  }

  try {
    await fs.promises.stat(serverEntryPath)
  } catch (error) {
    const file = await fs.promises.readFile(serverTemplatePath)

    await fs.promises.writeFile(
      path.resolve(serverDistDirPath, entryServerName),
      file.toString('utf8')
    )
  }
}
