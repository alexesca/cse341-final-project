const express = require("express");
const router = express.Router();

const controller = require("../controllers/sessions.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/", controller.index)
    .get("/:_id", validateIdMiddleware.validate, controller.id)
    .post("/", validateUserMiddleware.validate, controller.create)
    .put("/:_id", validateIdMiddleware.validate,  validateUserMiddleware.validate, controller.update)
    .delete("/:_id", validateIdMiddleware.validate, controller.delete);

module.exports = router;
