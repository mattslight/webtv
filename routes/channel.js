var express = require('express');
var router = express.Router();

var fs = require('fs');

//var streams = require('streams').streams

/* GET channel stream. */
router.get('/:channelId', function(req, res, next) {
    var channelId = req.params.channelId;
//    console.log(streams)
    res.send('OK\r\n');
});

module.exports = router;