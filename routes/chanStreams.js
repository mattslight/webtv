var express = require('express');
var router = express.Router();

var channels = require('../models/channels').channels
var streams = require('./streams').streams
var chanStreams = { }


streams.forEach(function(stream) {
    var ls = chanStreams[stream['channelId']];
    if (ls === undefined) {
        ls = [stream]
    } else {
        ls.push(stream)
    }

    chanStreams[stream['channelId']] = ls
});

module.exports.chanStreams = chanStreams


router.get('/', function(req, res, next) {
    //console.log(chanStreams)
    res.send(chanStreams);
});

router.get('/:channelId', function(req, res, next) {
    var channelId = req.params.channelId;
    //console.log(chanStreams[channelId])
    res.send(chanStreams[channelId]);
});
module.exports = router;
