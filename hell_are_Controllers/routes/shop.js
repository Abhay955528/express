const path = require("path");

const express = require("express");

const productConstrollers = require("../Controllers/products");

const router = express.Router();

router.get("/", productConstrollers.getProducts);

module.exports = router;
