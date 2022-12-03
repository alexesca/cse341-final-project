const express = require("express");
const router = express.Router();

const controller = require("../controllers/users.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');
const ensureAuthenticated = require('./../middlewares/ensure-authenticated.middleware.js');


router
    .get("/",ensureAuthenticated, controller.index)
    .get("/:_id",ensureAuthenticated, validateIdMiddleware.validate, controller.id)
    .post("/",ensureAuthenticated, validateUserMiddleware.validate, controller.create)
    .put("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  validateUserMiddleware.validate, controller.update)
    .delete("/:_id",ensureAuthenticated, validateIdMiddleware.validate, controller.delete);

module.exports = router;
