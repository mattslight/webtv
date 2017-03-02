var express = require('express');
var channels = require('./channels')
var categories = require('./categories')
var catChan = {}

channels.forEach(function(channel) {
    var ls = catChan[channel['categoryId']];
    if (ls === undefined) {
        ls = [channel]
    } else {
        ls.push(channel)
    }

    catChan[channel['categoryId']] = ls
});

module.exports = catChan