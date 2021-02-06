const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var aggregatePaginate = require('mongoose-aggregate-paginate-v2');

//creating the hero model and asigning their collection
const heroSchema = new Schema({
    hero_id: Number,
    name: {
        type: String,
        required: true
    },
    eye_color: String,
    hair_color: String,
    skin_color: String,
    height: Number,
    weight: Number,
    race: String,
    publisher_id: {
        type: Number,
        required: true
    },
    gender_id: {
        type: Number,
        required: true
    },
    alignment_id: {
        type: Number,
        required: true
    }
},
{ collection: "hero_information" }
);

heroSchema.plugin(aggregatePaginate)

const Hero = mongoose.model('hero_information', heroSchema);
module.exports = Hero;