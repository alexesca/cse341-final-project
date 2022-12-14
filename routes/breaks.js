const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const controller = require("../controllers/breaks.js");
const validateBrakeMiddleware = require('./../middlewares/validate-break.middleware');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/", controller.index)
    .get("/:_id", validateIdMiddleware.validate, controller.id)
    .post("/", validateBrakeMiddleware.validate, controller.create)
    .put("/:_id", validateIdMiddleware.validate,  validateBrakeMiddleware.validate, controller.update)
    .delete("/:_id", validateIdMiddleware.validate, controller.delete);

module.exports = router;
