const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genderSchema = new Schema ({
    gender_id: Schema.Types.ObjectId,
    name: String
},
{ collection: "gender" }
);

const Gender = mongoose.model('gender', genderSchema);
module.exports = Gender;
