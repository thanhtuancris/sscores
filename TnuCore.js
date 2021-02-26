const request = require('request');
const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');

var ICTU = require("./DataSource/ICTU");
var TNUS = require("./DataSource/TNUS");
var TUE = require("./DataSource/TUE");
var SFL = require("./DataSource/SFL");
var TUAF = require("./DataSource/TUAF");
var IS = require("./DataSource/IS");
var TUMP = require("./DataSource/TUMP");
var TUEBA = require("./DataSource/TUEBA");
var TnuSchools = {
    "ICTU": ICTU,
    "TNUS": TNUS,
    "TUE": TUE,
    "SFL": SFL,
    "TUAF": TUAF,
    "IS": IS,
    "TUMP": TUMP,
    "TUEBA": TUEBA,
};
function Open (schoolCode) {
    if (!!TnuSchools[schoolCode]) {
        return new TnuSchools[schoolCode];
    }
};

module.exports.TnuSchools = TnuSchools;
module.exports.Open = Open;
