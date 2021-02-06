const router = require('express-promise-router')()
const HeroesController = require('../controllers/heroesController')
const AlignmentsController = require('../controllers/alignmentsController')

router.route('/')
    .get(HeroesController.getHeroes)
    .post(HeroesController.postHero)

router.route('/:heroId')
    .get(HeroesController.getHero)
    .put(HeroesController.updateHero)
    .delete(HeroesController.deleteHero)

module.exports = router;