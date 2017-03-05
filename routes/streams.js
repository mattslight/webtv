var express = require('express');
var router = express.Router();

var fs = require('fs');
var streams = JSON.parse(fs.readFileSync('../docs/streams.json', 'utf8'));
module.exports.streams = streams

var chanStreams = require('./chanStreams');

router.get('/', function(req, res, next) {
    console.log(streams)
    res.send(streams);
});

router.get('/:streamId', function(req, res, next) {
    var streamId = req.params.streamId
    console.log(streamId)
    res.send('lookup by SteamID not implemented\r\n');
});

module.exports = router
