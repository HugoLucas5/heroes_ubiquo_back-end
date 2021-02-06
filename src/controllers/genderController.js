const Gender = require('../models/gender')
const Gemder = require('../models/gender')

module.exports = {
    // list all publishers
    getGenders: async (req, res, next) => {
        try {
            const genders = await Gender.find()
            res.status(200).json(genders)
        } catch (error) {
            console.log(error)
        }
    }
}