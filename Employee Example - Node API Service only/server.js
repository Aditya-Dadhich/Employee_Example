'use strict'
var config = require('config');
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');
var mongoose = require('mongoose');

mongoose.connect(config.get('dburl'));

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

//set all the routes here.
router(app);

app.use('/api', router);

var server = app.listen(config.get('port'), function () {
    console.log('Server is running on port: ' + config.get('port'));
});