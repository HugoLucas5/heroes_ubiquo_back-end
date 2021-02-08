const mongoose = require('mongoose')
const Schema = mongoose.Schema

//creating the alignment model and asigning their collection
const alignmentSchema = new Schema ({
    alignment_id: Number,
    name: String
},
{ collection: "alignment" }
);

const Alignment = mongoose.model('alignment', alignmentSchema)
module.exports = Alignment;