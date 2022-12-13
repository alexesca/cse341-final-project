const express = require("express");
const router = express.Router();

const controller = require("../controllers/sessions.js");
const validateSessionMiddleware = require('./../middlewares/validate-session.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/", controller.index)
    .get("/:_id", validateIdMiddleware.validate, controller.id)
    .post("/", validateSessionMiddleware.validate, controller.create)
    .put("/:_id", validateIdMiddleware.validate,  validateSessionMiddleware.validate, controller.update)
    .delete("/:_id", validateIdMiddleware.validate, controller.delete);

module.exports = router;
