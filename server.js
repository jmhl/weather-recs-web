'use strict';

var express = require('express');
var app = express();
var ejs = require('ejs');

app.engine('html', ejs.renderFile);

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
  response.sendfile(__dirname + '/build/index.html');
});

app.listen(8000, function() {
  console.log('Listening on port 8000...');
});
