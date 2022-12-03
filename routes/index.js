const express = require('express');
const router = express.Router();


/* GET home page. */
router.use("/users", require("./users.js"));
router.use("/tasks", require("./tasks.js"));
router.use("/breaks", require("./breaks.js"));
router.use("/sessions", require("./sessions.js"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
