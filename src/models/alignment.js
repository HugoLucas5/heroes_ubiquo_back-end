const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alignmentSchema = new Schema ({
    alignment_id: Number,
    name: String
},
{ collection: "alignment" }
);

const Alignment = mongoose.model('alignment', alignmentSchema)
module.exports = Alignment;