var express = require('express');
var router = express.Router();

var fs = require('fs');

var categories = JSON.parse(fs.readFileSync('../docs/categories.json', 'utf8'));
var channels = JSON.parse(fs.readFileSync('../docs/channels.json', 'utf8'));
var catChan = {};


channels.forEach(function(channel) {
    var ls = catChan[channel['categoryId']];
    if (ls === undefined) {
        ls = [channel]
    } else {
        ls.push(channel)
    }
    catChan[channel['categoryId']] = ls
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web.TV', categories: categories, channels: channels,  catChan: catChan});
});

module.exports = router;


