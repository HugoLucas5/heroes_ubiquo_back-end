const express = require('express');
const { deleteHero } = require('../controllers/heroesController');
//const router = express.Router();
const router = require('express-promise-router')()
const HeroesController = require('../controllers/heroesController')

router.route('/')
    .get(HeroesController.getHeroes)
    .post(HeroesController.postHero)

router.route('/:heroId')
    .get(HeroesController.getHero)
    .put(HeroesController.updateHero)
    .delete(HeroesController.deleteHero)

module.exports = router;