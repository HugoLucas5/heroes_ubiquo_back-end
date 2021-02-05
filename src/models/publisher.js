const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PublisherSchema = new Schema ({
    publisher_id: Number,
    publisher_name: String
},
{ collection: "publisher" }
);

module.exports = mongoose.model('publisher', PublisherSchema);
