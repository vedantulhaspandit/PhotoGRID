var express = require('express'),
	path = require('path'),
	config = require('./config/config.js'),
	knox = require('knox'),
	fs = require('fs'),
	os = require('os'),
	formidable = require('formidable'),
	gm = require('gm'),
	mongoose = require('mongoose').connect(config.dbURL)

var app = express();

app.set('views', path.join(__dirname, 'views')); // estalishing views folder as a source of html pages
app.engine('html', require('hogan-express')); // setting template engine
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public'))); // estalishing public folder as a source of static assets - js, img, css
app.set('port', process.env.PORT || 3000);
app.set('host', config.host);

// before using knox, configure knox client 
var knoxClient = knox.createClient({
	key: config.S3AccessKey,
	secret: config.S3Secret,
	bucket: config.S3Bucket
})

var server = require('http').createServer(app); // listening to the app varable
var io = require('socket.io')(server);

require('./routes/routes.js')(express, app, formidable, fs, os, gm, knoxClient, mongoose, io);

// var server = require('http').createServer(app); // listening to the app varable
// var io = require('socket.io')(server);

server.listen(app.get('port'), function(){
	console.log("photogrid running on " + app.get('port'));
})
