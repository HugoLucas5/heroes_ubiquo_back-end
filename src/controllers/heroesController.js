const mongoose = require('mongoose');
const { Hero } = require('../models');

module.exports = {
    // list all heroes, filters added
    getHeroes: async (req, res, next) => {
        try {
            const options = {} //options object for filters
            
            req.query.name ? options.name = new RegExp(req.query.name, 'i')  : null // regex for name param
            req.query.race ? options.race = new RegExp(req.query.race, 'i') : null // regex for race param
            req.query.publisher ? options.publisher_id = Number(req.query.publisher) : null
            req.query.gender ? options.gender_id = Number(req.query.gender) : null
            req.query.alignment ? options.alignment_id = Number(req.query.alignment) : null

            const myAggregate = Hero.aggregate([
                //lookup for inner fields
                {
                    $lookup: {
                        from: "publisher",
                        localField: "publisher_id",
                        foreignField: "publisher_id",
                        as: "publisher"
                    }
                },
                {
                    $lookup: {
                        from: "gender",
                        localField: "gender_id",
                        foreignField: "gender_id",
                        as: "gender"
                    }
                },
                {
                    $lookup: {
                        from: "alignment",
                        localField: "alignment_id",
                        foreignField: "alignment_id",
                        as: "alignment"
                    }
                },
                {
                    //matching the filtes
                    $match: { ...options}
                },
            ])
            // pagination options
            const pagination = {
                limit: 10,
                page: req.query.page || 1
            }
            const heroes = await Hero.aggregatePaginate(myAggregate, pagination)
            res.status(200).json(heroes)    
        } catch (errors) {
            console.log(errors)
            res.send(errors)
        }
    },

    // getting singular hero
    getHero: async (req, res, next) => {
        try {
            const { heroId }  = req.params
            const myAggregate = Hero.aggregate([
                //lookup for inner fields
                {
                    $lookup: {
                        from: "publisher",
                        localField: "publisher_id",
                        foreignField: "publisher_id",
                        as: "publisher"
                    }
                },
                {
                    $lookup: {
                        from: "gender",
                        localField: "gender_id",
                        foreignField: "gender_id",
                        as: "gender"
                    }
                },
                {
                    $lookup: {
                        from: "alignment",
                        localField: "alignment_id",
                        foreignField: "alignment_id",
                        as: "alignment"
                    }
                },
                {
                    //matching the filtes
                    $match: { _id: new mongoose.Types.ObjectId(heroId) }
                },
            ])
            const hero = await Hero.aggregatePaginate(myAggregate)
            res.status(200).json(hero)    
        } catch (errors) {
            console.log(errors)
            res.send(errors)
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
        } catch (errors) {
            console.log(errors)
            res.send(errors)
        }
    },

    // update a hero
    updateHero: async (req, res, next) => {
        try {
            const { heroId } = req.params
            const hero = await Hero.findByIdAndUpdate(heroId, req.body, {new: true}) //  new: true for give back the updated hero
            res.status(201).json(hero)
        } catch (errors) {
            console.log(errors)
            res.send(errors)
        }
    },

    // deleting hero
    deleteHero: async (req, res, next) => {
        try {
            const { heroId: _id } = req.params
            await Hero.findByIdAndDelete({ _id })
            res.send('Eliminado')
        } catch (errors) {
            console.log(errors)
            res.send(errors)
        }
    }
};