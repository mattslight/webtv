var express = require('express');
var router = express.Router();

var fs = require('fs');

var categories = JSON.parse(fs.readFileSync('../docs/categories.json', 'utf8'));
var channels = JSON.parse(fs.readFileSync('../docs/channels.json', 'utf8'));
//var catChan = require('./catChan')

/* GET channel stream. */
router.get('/:channelId', function(req, res, next) {
    var channelId = req.params.channelId;
    console.log(channels[channelId]);
});

module.exports = router;
