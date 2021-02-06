const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaingate = require('mongoose-paginate-v2')

const heroSchema = new Schema({
    hero_id: Number,
    name: String,
    eye_color: String,
    hair_color: String,
    skin_color: String,
    height: Number,
    weight: Number,
    race: String,
    publisher_id: Number,
    gender_id: Number,
    alignment_id: Number
},
{ collection: "hero_information" }
);

heroSchema.plugin(mongoosePaingate)

const Hero = mongoose.model('hero_information', heroSchema);
module.exports = Hero;