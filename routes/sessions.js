const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const controller = require("../controllers/sessions.js");
const validateSessionMiddleware = require('./../middlewares/validate-session.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/",requiresAuth(), controller.index)
    .get("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.id)
    .post("/",requiresAuth(), validateSessionMiddleware.validate, controller.create)
    .put("/:_id",requiresAuth(), validateIdMiddleware.validate,  validateSessionMiddleware.validate, controller.update)
    .delete("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.delete);

module.exports = router;
