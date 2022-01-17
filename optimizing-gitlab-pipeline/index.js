const express = require('express')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.send('This is my first Node application!')
})

app.listen(port, () => {
  console.log(`Application is listening at http://localhost:${port}`)
})
