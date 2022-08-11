const path = require("path");

const express = require("express");

const mainController = require("../controllers/main");

const router = express.Router();

router.get("/", mainController.homepage);
router.get("/hotels:stars", mainController.getHotels);