const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');


/* GET home page. */
// router.use("/auth", require("./auth.js"));
router.use("/users", require("./users.js"));
router.use("/tasks", require("./tasks.js"));
router.use("/breaks", require("./breaks.js"));
router.use("/sessions", require("./sessions.js"));


/* GET home page. */
router.get('/', function(req, res, next) {
  // #swagger.tags = ['Index']
  // res.render('index', { title: 'Express' });
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = router;
