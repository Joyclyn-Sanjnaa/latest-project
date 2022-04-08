console.log(__filename);
console.log(__dirname);


var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
}

module.exports.log = log; //based on log function, similar to exporting url
exports.log = log;

exports = log; //module

