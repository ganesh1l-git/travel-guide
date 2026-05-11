const fs = require('fs');
const https = require('https');

const url = 'https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States';
const file = fs.createWriteStream('./src/data/india-states.json');

https.get(url, function(response) {
  if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
    // handle redirect if any
    https.get(response.headers.location, function(redirectRes) {
      redirectRes.pipe(file);
      file.on('finish', function() {
        file.close();  
        console.log('Download completed after redirect.');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  
      console.log('Download completed.');
    });
  }
}).on('error', function(err) { 
  fs.unlink('./src/data/india-states.json', () => {}); 
  console.error('Error downloading:', err.message);
});
