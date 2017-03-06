var express = require('express');
var router = express.Router();

var fs = require('fs');

var channels = require('../models/channels').channels
var categories = require('../models/categories').categories
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
  res.render('index', { title: 'Tely.io', categories: categories, channels: channels,  catChan: catChan});
});

module.exports = router;


