const { Publisher } = require('../models');

module.exports = {
    // list all publishers
    getPublishers: async (req, res, next) => {
        try {
            const publishers = await Publisher.find()
            res.status(200).json(publishers)
        } catch (error) {
            console.log(error)
        }
    }
}