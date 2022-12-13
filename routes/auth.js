const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.js");


router
    .post("/", controller.create)

module.exports = router;
