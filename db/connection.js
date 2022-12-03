// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => {})

