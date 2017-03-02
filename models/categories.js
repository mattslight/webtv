//var express = require('express');
var fs = require('fs');
var categories = JSON.parse(fs.readFileSync('../docs/categories.json', 'utf8'));

module.exports.categories = categories