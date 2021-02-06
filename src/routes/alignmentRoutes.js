const router = require('express-promise-router')()
const AlignmentController = require('../controllers/alignmentsController')

router.route('/alignments')
    .get(AlignmentController.getAlignments)

module.exports = router;