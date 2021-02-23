const router = require('express-promise-router')();
const {
    AlignmentController, GenderController, PublisherController, HeroController,
} = require('../controllers');

// Aligment routes
router.route('/alignments')
    .get(AlignmentController.getAlignments);
// Gender routes
router.route('/genders')
    .get(GenderController.getGenders);
// Publisher routes
router.route('/publishers')
    .get(PublisherController.getPublishers);
// Hero routes
router.route('/')
    .get(HeroController.getHeroes)
    .post(HeroController.postHero);
router.route('/:heroId')
    .get(HeroController.getHero)
    .put(HeroController.updateHero)
    .delete(HeroController.deleteHero);

module.exports = router;