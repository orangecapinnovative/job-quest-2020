const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.mongouri)
    .then(() => {
        console.log('Connected to database successfully.')
    }).catch((error) => {
        console.log(error)
    })

module.exports = mongoose