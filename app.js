var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');
const { expressjwt } = require("express-jwt")
var jwks = require('jwks-rsa');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const swaggerDocument = require('./swagger-output.json');

var app = express();

var jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://byui-cse341-final-project.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000/api-docs/',
  issuer: 'https://byui-cse341-final-project.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

function errorHandler (err, req, res, next) {
  res.status(500).send({ error: err })
}

app.use(errorHandler);

module.exports = app;
