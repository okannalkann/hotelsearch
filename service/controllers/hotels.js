const path = require("path");
const fs = require("fs-extra");
const fullPath =path.resolve(__dirname, "../data/hotels.json")
const { logger } = require('../config/winston')

exports.getHotels = async (req, res, next) => {
    const data = await fs.readJson(fullPath);
    var result = [];

    Object.keys(data).forEach(function (location){
        data[location].forEach(function (hotel) {
            result.push({
                "name": hotel.name, 
                "stars": hotel.stars, 
                "destination": location.charAt(0).toUpperCase() + location.slice(1)
            });
        })
    })

    logger.log({
            message: result,
            level: 'info'
        });
    
    res.render("hotels", { 
        hotelsData: result,
        stars: null
    })
};

exports.getHotelsWithStar = async (req, res, next) => {
    const stars = req.params['stars'] || 0;
    const data = await fs.readJson(fullPath);
    var result = [];

    Object.keys(data).forEach(function (location){
        data[location].forEach(function (hotel) {
            if(hotel.stars === parseInt(stars)){
                result.push({
                    "name": hotel.name, 
                    "stars": hotel.stars, 
                    "destination": location.charAt(0).toUpperCase() + location.slice(1)
                });
            }
        })
    })

    if(result.length<1)
        result.push({
            "name": "There is no hotel in this star.", 
            "stars": stars, 
            "destination": ""
        });
    
    logger.log({
        message: result,
        level: 'info'
    });

    res.render("hotels", { 
        hotelsData: result,
        stars: null
    })
};