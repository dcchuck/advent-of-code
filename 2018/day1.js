"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var input = fs.readFileSync(path.join(__dirname, 'day1input'));
var numericArray = fs.readFileSync(path.join(__dirname, 'day1input'))
    .toString()
    .split("\n")
    .map(function (e) { return parseInt(e, 10); })
    .filter(function (e) { return Number.isInteger(e); });
function reducer(a, c) {
    return a + c;
}
console.log(numericArray.reduce(reducer));
var done = false;
var els = numericArray.length;
var total = 0;
var vs = {};
for (var i = 0; !done; i++) {
    var imod = i % els;
    total += numericArray[imod];
    if (vs[total.toString()]) {
        done = true;
        console.log(total);
    }
    else {
        vs[total.toString()] = 1;
    }
}
