const express = require('express')
const app = express()
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

// Start server
app.listen(3001, async () => {
  console.log(`Server listening on port 3001`)
})