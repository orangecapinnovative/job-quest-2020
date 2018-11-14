const express = require('express')
const bodyParser = require('body-parser')

const index = require('./routes/index')

const port = process.env.PORT || 3000

require('./db/mongoose')

let app = express()

app.use(bodyParser.json())

app.use('/', index)

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({
        error: error.message
    })
})

app.listen(port, () => {
    console.log('Server is on port', port)
})
