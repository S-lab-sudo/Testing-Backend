"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.json({
    message: 'I am alive and listening'
  });
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening to port 3000');
});