import path from 'path'
import fs from 'fs'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework')
const clientDistDirPath = path.resolve(distDirPath, 'client', 'css')

export default async function renderCss() {
  const files = await fs.promises.readdir(clientDistDirPath)

  return files.map(mapCss).join('')
}

function mapCss(fileName: string) {
  return `
    <link rel="stylesheet" href="${path.resolve(
      '/.framework/client/css/',
      fileName
    )}"></link>
  `.trim()
}
