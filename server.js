var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();

app.use(express.static('/'));
app.use(cors());

var server = http.createServer(app).listen(8124);

app.get('/get_all_blogs', cors(), function(req, res) {
    var getAllBlogs = require('./server/get_all_blogs');
    getAllBlogs.result(req, res);
});

/*
app.get('/get_all_eat_outs', function(req, res) {
    var getAllEatOuts = require('./server/get_all_eat_outs');
    getAllEatOuts.result(req, res);
});

app.get('/get_all_quick_cooks', function(req, res) {
    var getAllQuickCooks = require('./server/get_all_quick_cooks');
    getAllQuickCooks.result(req, res);
});
*/
/* -- Admin specific -- */
/* -- Method POST --*/
/* -- Will check for admin details also -- */
/*
app.get('/add_new_blog', function(req, res) {
    var addNewBlog = require('./server/add_new_blog');
    addNewBlog.result(req, res);
});

app.get('/modify_blog', function(req, res) {
    var modifyBlog = require('./server/modify_blog');
    modifyBlog.result(req, res);
});
*/
