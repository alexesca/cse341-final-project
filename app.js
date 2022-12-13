var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
var cors = require('cors');
const { auth } = require('express-openid-connect');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const swaggerDocument = require('./swagger-output.json');

var app = express();


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_APP_SECRET,
  clientID: process.env.AUTH_APP_CLIENT_ID,
  baseURL: 'http://localhost:3000',
  issuerBaseURL: 'https://byui-cse341-final-project.us.auth0.com',
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

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





function jwtCustomFunction (req) {
  // Check for /api/* calls.
  // Returns false on any requests that have /api/* at the beginning
  const url = req.originalUrl;
  const method = req.method;
  const isFullPathWhitelisted = isFullPathUrlWhitelisted(
      url,
      method
  )
  if(isFullPathWhitelisted) return true;

  if (
      /^\/api\//i.test(url)
  ) {
    return false;
  } else {
    return true;
  }
}


function isFullPathUrlWhitelisted(
    url,
    method
) {
  const whitelist = [
    {
      path: '/api-docs',
      method: 'GET'
    },
    {
      path: '/auth',
      method: 'POST'
    }
  ]

  for (let i = 0; i < whitelist.length; i++) {
    if(
        (url === whitelist[i].path
            || (whitelist[i].path instanceof RegExp && whitelist[i].path.test(url)))
        && method === whitelist[i].method
    ) {
      return true;
    }
  }

  return false;

}
