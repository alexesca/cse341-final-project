const express = require("express");
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

const controller = require("../controllers/tasks.js");
const validateTaskMiddleware = require('./../middlewares/validate-task.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');


router
    .get("/",requiresAuth(), controller.index)
    .get("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.id)
    .post("/",requiresAuth(), validateTaskMiddleware.validate, controller.create)
    .put("/:_id",requiresAuth(), validateIdMiddleware.validate,  validateTaskMiddleware.validate, controller.update)
    .delete("/:_id",requiresAuth(), validateIdMiddleware.validate, controller.delete);

module.exports = router;
