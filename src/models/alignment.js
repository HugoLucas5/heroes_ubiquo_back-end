const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlignmentSchema = new Schema ({
    name: String
})

module.exports = mongoose.model('alignment', AlignmentSchema)