const Hero = require('../models/hero');
const Alignment = require('../models/alignment')

module.exports = {
    // list all heroes, filters added
    getHeroes: async (req, res, next) => {
        try {
            const options = {} //options object for filters
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

    // getting singular hero
    getHero: async (req, res, next) => {
        try {
            const { heroId } = req.params;
            const hero = await Hero.findById(heroId)
            res.status(200).json(hero)    
        } catch (error) {
            console.log(error)
        }
    },

    // creatin a new hero
    postHero: async (req, res, next) => {
        try {
            const lastHero = await Hero.findOne().sort({$natural: -1}) // getting the last hero saved
            const newHero = new Hero(req.body)
            newHero.hero_id = lastHero.hero_id + 1 // incrementing the hero_id from the last hero to the new hero
            const hero = await newHero.save()
            res.status(201).json(hero)
        } catch (error) {
            console.log(error)
        }
    },

    // update a hero
    updateHero: async (req, res, next) => {
        try {
            const { heroId } = req.params
            const hero = await Hero.findByIdAndUpdate(heroId, req.body, {new: true}) //  new: true for give back the updated hero
            res.status(201).json(hero)
        } catch (error) {
            console.log(error)
        }
    },

    // deleting hero
    deleteHero: async (req, res, next) => {
        try {
            const { heroId } = req.params
            await Hero.findByIdAndDelete({_id: heroId})
            res.send('Eliminado')
        } catch (error) {
            console.log(error)
        }
    }
};