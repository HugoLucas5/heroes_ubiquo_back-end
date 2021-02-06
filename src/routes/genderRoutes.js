const router = require('express-promise-router')()
const GenderController = require('../controllers/genderController')

router.route('/genders')
    .get(GenderController.getGenders)

module.exports = router;