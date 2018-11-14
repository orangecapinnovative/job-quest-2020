const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mongouri, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database successfully.')
    }).catch((error) => {
        console.log(error)
    })

module.exports = mongoose