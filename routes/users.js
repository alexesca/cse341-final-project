const express = require("express");
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const controller = require("../controllers/users.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/", requiresAuth(), controller.index)
    .get("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.id)
    .post("/",requiresAuth(), validateUserMiddleware.validate, controller.create)
    .put("/:_id",requiresAuth(), validateIdMiddleware.validate,  validateUserMiddleware.validate, controller.update)
    .delete("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.delete);

module.exports = router;
