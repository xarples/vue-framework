import renderScript from './renderScript'
import renderCss from './renderCss'

export default async function renderBaseHTML(content: string) {
  const script = await renderScript()
  const css = await renderCss()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      ${css}
    </head>
    <body>
      <div id="vue-framework-root">${content}</div>
      ${script}
    </body>
    </html>
  `.trim()
}
