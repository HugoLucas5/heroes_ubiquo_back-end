const { Gender } = require('../models')

module.exports = {
    // list all genders
    getGenders: async (req, res, next) => {
        try {
            const genders = await Gender.find()
            res.status(200).json(genders)
        } catch (error) {
            console.log(error)
        }
    }
}