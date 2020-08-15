import path from 'path'
import fs from 'fs'

const workingDirPath = process.cwd()
const distDirPath = path.resolve(workingDirPath, '.framework', 'client')
const clientManifestPath = path.resolve(distDirPath, 'client-manifest.json')

export default async function renderScript() {
  const clientManifest = await import(clientManifestPath)
  const files = clientManifest.initial

  return files.map(mapScript).join('')
}

function mapScript(fileName: string) {
  return `<script src="${fileName}"></script>`.trim()
}
