// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


// This function should console.log each chunk of data as it is received,
// concatenated with a newline character ('\n') so you can visualize each
// chunk.

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
function getAndPrintHTMLChunks() {
  https.get('/http-examples/step1.html', function(response) {
    if (response.statusCode != 200) {
      callback(new Error('Request Failed with Status Code' + response.statusCode), null);
      return;
    }

  // set encoding of received data to UTF-8 + concatenates with a newline character
  // the callback is invoked when a `data` chunk is received
    var body = '';
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      body += chunk;
      console.log('Chunk Received. Length:', data.length);
    });
  // // the callback is invoked when all of the data has been received
    response.on('end', function (data) {
      console.log('Response stream complete.');
      callback(null, body);
    });
  });
}

console.log(getAndPrintHTMLChunks())

  // // the callback is invoked when all of the data has been received
  // // (the `end` of the stream)
  // response.on('end', function() {
  //   console.log('Response stream complete.');
  // });
