require('babel-register')({});
var app = require('./app');
var config = require('./config/index');

app.listen(config.server.port, ()=>{

});