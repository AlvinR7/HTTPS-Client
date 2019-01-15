var https = require('https');

// can take in any url via host/path
function getAndPrintHTML(url) {
  https.get(url, function(response) {
    if (response.statusCode != 200) {
      throw new Error('Request Failed with Status Code' + response.statusCode);
      return;
    }


  // set encoding of received data to UTF-8 + concatenates with a newline character
  // the callback is invoked when a `data` chunk is received
    // var body = '';
    response.setEncoding('utf8');
    var entireText = '';
    response.on('data', function(chunk) {
      entireText += chunk;
      console.log('Chunk Received. Length:', chunk.length);
    });

  // // the callback is invoked when all of the data has been received
    response.on('end', function() {
      console.log(entireText)
      console.log('Response stream complete.');
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


var pageNumbers = [1,2,3].forEach(function(number) {
  var url = 'https://sytantris.github.io/http-examples/step' + number + '.html';
  getAndPrintHTML(url)
});


