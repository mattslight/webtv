//var express = require('express');
var fs = require('fs');
var channels = JSON.parse(fs.readFileSync('../docs/channels.json', 'utf8'));

module.exports.channels = channels