const Alignment = require('../models/alignment')

module.exports = {
    // list all alignments
    getAlignments: async (req, res, next) => {
        try {
            const alignments = await Alignment.find()
            res.status(200).json(alignments)
        } catch (error) {
            console.log(error)
        }
    }
}