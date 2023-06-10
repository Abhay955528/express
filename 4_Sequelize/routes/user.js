const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.post("/add-user",userControllers.addUsers );

router.get("/get-user",userControllers.getUsers);

router.delete("/delete-user/:id",userControllers.deleteUsers );

module.exports = router;