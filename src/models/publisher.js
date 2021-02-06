const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating the publisher model and asigning their collection
const PublisherSchema = new Schema ({
    publisher_id: Number,
    publisher_name: String
},
{ collection: "publisher" }
);

module.exports = mongoose.model('publisher', PublisherSchema);
