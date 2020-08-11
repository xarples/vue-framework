import path from 'path'
import fs from 'fs'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework')
const clientDistDirPath = path.resolve(distDirPath, 'js')

export default async function renderScript() {
  const files = await fs.promises.readdir(clientDistDirPath)

  return files.filter(filterScript).map(mapScript).join('')
}

function filterScript(filename: string) {
  return !filename.includes('entry')
}

function mapScript(fileName: string) {
  return `
    <script src="${path.resolve('/.framework/js/', fileName)}"></script>
  `.trim()
}
