const https = require('https');
const fs = require('fs');

const files = {
  "Ellora Caves": "Ellora_cave_16_001.jpg",
  "Kochi": "Chinese_Fishing_Nets_Kochi.jpg",
  "Madurai": "Meenakshi_Amman_Temple_Madurai.jpg",
  "Mahabalipuram": "Shore_Temple_Mahabalipuram.jpg",
  "Pune": "Shaniwar_Wada_Pune.jpg",
  "Chennai": "Marina_Beach_Chennai.jpg",
  "Kolkata": "Victoria_Memorial_Kolkata.jpg",
  "Puri": "Jagannath_Temple_Puri.jpg"
};

function getFinalUrl(file) {
  return new Promise(resolve => {
    https.get(`https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=800`, (res) => {
      resolve(res.headers.location);
    }).on('error', () => resolve(null));
  });
}

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  let updated = false;

  for (let place of places) {
    if (files[place.name]) {
      const url = await getFinalUrl(files[place.name]);
      if (url) {
        place.images[0] = url;
        place.images[1] = url;
        updated = true;
        console.log(`Fixed ${place.name}: ${url}`);
      } else {
        console.log(`FAILED ${place.name}`);
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js with exact resolved URLs!');
  }
}

fix();
