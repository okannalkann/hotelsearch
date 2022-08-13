const express = require("express");
const hotelsController = require("../controllers/hotels");
const router = express.Router();

router.get("/", hotelsController.getHotels);
router.get("/hotels/:stars", hotelsController.getHotelsWithStar);
router.get("/hotels", hotelsController.getHotels);

module.exports = router;
