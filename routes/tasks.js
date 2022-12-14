const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const controller = require("../controllers/tasks.js");
const validateTaskMiddleware = require('./../middlewares/validate-task.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/", controller.index)
    .get("/:_id", validateIdMiddleware.validate, controller.id)
    .post("/", validateTaskMiddleware.validate, controller.create)
    .put("/:_id", validateIdMiddleware.validate,  validateTaskMiddleware.validate, controller.update)
    .delete("/:_id", validateIdMiddleware.validate, controller.delete);

module.exports = router;
