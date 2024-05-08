require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// base url + port
const port = process.env.PORT || 3000;
const baseURL = `${process.env.BASE_URL}:${port}`;




app.use(function (req, res, next) {
  res.locals.user = req.oidc ? req.oidc.user : undefined;
  next();
});

app.use('/', router);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

app.listen(port, () => {
    console.log(`Listening on ${baseURL}:${port}`);
});
