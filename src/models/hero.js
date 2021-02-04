const mongoose = require('mongoose')
const Schema = mongoose.Schema
Alignment = require('./alignment.js'),
AlignmentSchema = mongoose.model('Alignment').schema
Gender = require('./gender.js'),
GenderSchema = mongoose.model('Gender').schema
Publisher = require('./publisher.js'),
PublisherSchema = mongoose.model('Publisher').schema

const HeroSchema = new Schema({
    name: String,
    eye_color: String,
    hair_color: String,
    skin_color: String,
    height: Number,
    weight: Number,
    race: String,
    publisher_id: [PublisherSchema],
    gender_id: [GenderSchema],
    alignment_id: [AlignmentSchema]
})

module.exports = mongoose.model('hero_information', HeroSchema)
