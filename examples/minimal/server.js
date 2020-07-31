const express = require('express')
const { handler } = require('@xarples/vue-framework')

const app = express()

app.use(handler)

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000')
})
