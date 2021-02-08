const router = require('express-promise-router')()
const PublisherController = require('../controllers/publishersController')

router.route('/publishers')
    .get(PublisherController.getPublishers)

module.exports = router;