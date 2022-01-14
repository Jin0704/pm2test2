const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
    console.log('Error')
})

db.once('open', () => {
    console.log('Mongodb Connect')
})

module.exports = db