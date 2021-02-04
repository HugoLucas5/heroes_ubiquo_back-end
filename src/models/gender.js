const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenderSchema = new Schema ({
    name: String
})

module.exports = mongoose.model('gender', GenderSchema)
