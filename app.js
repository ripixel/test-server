var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res) => {
  console.log({
    headers: req.headers,
    cookies: req.cookies,
    body: req.body,
  })
  res.send('OK');
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(JSON.stringify(err));
});

module.exports = app;
