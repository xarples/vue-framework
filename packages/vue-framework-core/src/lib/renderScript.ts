import path from 'path'
import fs from 'fs'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework')
const clientDistDirPath = path.resolve(distDirPath, 'client', 'js')

export default async function renderScript() {
  const files = await fs.promises.readdir(clientDistDirPath)

  return files.filter(filterScript).map(mapScript).reverse().join('')
}

function filterScript(filename: string) {
  return !filename.includes('entry.js')
}

function mapScript(fileName: string) {
  return `
    <script src="${path.resolve('/.framework/client/js/', fileName)}"></script>
  `.trim()
}
