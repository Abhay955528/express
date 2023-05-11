const path = require("path");

const express = require("express");

const productConstrollers = require("../controllers/products");

const router = express.Router();

router.get("/", productConstrollers.getProducts);

module.exports = router;
