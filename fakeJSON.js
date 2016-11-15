var URL = process.argv[2];
var filename = process.argv[3];
var request = require('request');
var fs = require('fs');
request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFile(filename, body)
  }
});
