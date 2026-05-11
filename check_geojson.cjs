const https = require('https');

const urls = [
  'https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/india/state_ut/india_state.geojson',
  'https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson',
  'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json',
  'https://raw.githubusercontent.com/shivammathur/india-map/master/src/data/india.geojson'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, status: e.message }));
  });
}

async function main() {
  for (const url of urls) {
    const result = await checkUrl(url);
    console.log(result);
  }
}

main();
