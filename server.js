var express = require('express');
var http = require('http');

var app = express();

app.use(express.static('/'));

var server = http.createServer(app).listen(8124);

app.get('/get_all_blogs', function(req, res) {
    var getAllBlogs = require('./server/get_all_blogs');
    getAllBlogs.result(req, res);
});
