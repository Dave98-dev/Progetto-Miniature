var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);

mongoose.connect(process.env.DB_CONNECTION,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
  , console.log("connected to mongo"))
  .catch(e=>console.log(e));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
