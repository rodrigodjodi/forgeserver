'use strict';

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../www'));
app.set('port', process.env.PORT || 3000);

var oauth = require('./oauthtoken');
//var oss = require('./oss');
//var modelderivative = require('./modelderivative');
app.use('/', oauth);
//app.use('/', oss);
//app.use('/', modelderivative);

module.exports = app;