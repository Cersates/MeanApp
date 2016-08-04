// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path')

// configuration ===========================================

// config files
var db = require('./config/db');

// set our local address and port
var port = 9090;
var address = '127.0.0.1';

// connect to mongoDB database
var db = mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
app.use(function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
// start app ===============================================
app.listen(port, address);
console.log('Server running at  http://' + address + ':' + port + '/');
exports = module.exports = app;
