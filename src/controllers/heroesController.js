const Hero = require('../models/hero');
const Publisher = require('../models/publisher');
const Gender = require('../models/gender');
const Alignment = require('../models/alignment');

module.exports = {
    getHeroes: async (req, res, next) => {
        try {
            const options = {}
            req.query.race ? options.race = req.query.race : null
            req.query.publisher ? options.publisher_id = req.query.publisher : null
            req.query.gender ? options.gender_id = req.query.gender : null
            req.query.alignment ? options.alignment_id = req.query.alignment : null
            const limit = 15
            const page = req.query.page || 1
            const heroes = await Hero.paginate(options, {page, limit} )
            res.status(200).json(heroes)    
        } catch (error) {
            console.log(error)
        }
    },

    getHero: async (req, res, next) => {
        try {
            const { heroId } = req.params;
            const hero = await Hero.findById(heroId)
            res.status(200).json(hero)    
        } catch (error) {
            console.log(error)
        }
    },

    postHero: async (req, res, next) => {
        try {
            const lastHero = await Hero.findOne().sort({$natural: -1})
            const newHero = new Hero(req.body)
            newHero.hero_id = lastHero.hero_id + 1
            const hero = await newHero.save()
            res.status(201).json(hero)
        } catch (error) {
            console.log(error)
        }
    },

    updateHero: async (req, res, next) => {
        try {
            const { heroId } = req.params
            const hero = await Hero.findByIdAndUpdate(heroId, req.body, {new: true})
            res.status(201).json(hero)
        } catch (error) {
            console.log(error)
        }
    },

    deleteHero: async (req, res, next) => {
        try {
            const { heroId } = req.params
            await Hero.deleteOne({_id: heroId})
            res.send('Eliminado')
        } catch (error) {
            console.log(error)
        }

    }
};