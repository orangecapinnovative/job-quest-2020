const express = require('express')
const bodyParser = require('body-parser')
const index = require('./routes/index')

const port = process.env.PORT || 3000

let app = express()

app.use(bodyParser.json())

app.use('/', index)

app.listen(port, () => {
    console.log('Server is on port', port)
})
