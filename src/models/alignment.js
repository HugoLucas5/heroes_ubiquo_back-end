const mongoose = require('mongoose')
const { schema } = require('./hero')
const Schema = mongoose.Schema

const AlignmentSchema = new Schema ({
    alignment_id: Schema.Types.ObjectId,
    name: String
},
{ collection: "alignment" }
)

module.exports = mongoose.model('alignment', AlignmentSchema)