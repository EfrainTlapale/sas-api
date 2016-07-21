var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', express.static(__dirname + '/doc/'));
app.use('/api', require('./routes'));

module.exports = app;