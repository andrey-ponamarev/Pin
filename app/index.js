require('babel-register')({});
var app = require('./app');
var config = require('./config');

app.listen(config.server.port);