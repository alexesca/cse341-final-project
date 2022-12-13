const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const controller = require("../controllers/breaks.js");
const validateBrakeMiddleware = require('./../middlewares/validate-break.middleware');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/",requiresAuth(), controller.index)
    .get("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.id)
    .post("/",requiresAuth(), validateBrakeMiddleware.validate, controller.create)
    .put("/:_id",requiresAuth(), validateIdMiddleware.validate,  validateBrakeMiddleware.validate, controller.update)
    .delete("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.delete);

module.exports = router;
