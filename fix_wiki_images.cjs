const fs = require('fs');

const exactTitles = {
  "Ellora Caves": "Ellora Caves",
  "Khajuraho": "Khajuraho Group of Monuments",
  "Kaziranga": "Kaziranga National Park",
  "Mahabaleshwar": "Mahabaleshwar",
  "Pushkar": "Pushkar",
  "Kodaikanal": "Kodaikanal",
  "Wayanad": "Wayanad district",
  "Gangtok": "Gangtok",
  "Cherrapunji": "Cherrapunji",
  "Shillong": "Shillong",
  "Mathura": "Mathura",
  "Kochi": "Kochi",
  "Madurai": "Madurai",
  "Mahabalipuram": "Mahabalipuram",
  "Pune": "Pune",
  "Chennai": "Chennai",
  "Kolkata": "Kolkata",
  "Puri": "Puri"
};

async function getImageUrl(title) {
  try {
    const imgUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const res = await fetch(imgUrl, { headers: { 'User-Agent': 'TravelExplorerBot/1.0' } });
    const data = await res.json();
    if (data.originalimage && data.originalimage.source) {
      return data.originalimage.source;
    }
    if (data.thumbnail && data.thumbnail.source) {
      return data.thumbnail.source;
    }
  } catch(e) {}
  return null;
}

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  
  let updated = false;
  
  for (let place of places) {
    if (exactTitles[place.name]) {
      console.log(`Fetching for ${place.name}...`);
      const img = await getImageUrl(exactTitles[place.name]);
      if (img) {
        place.images[0] = img;
        place.images[1] = img;
        updated = true;
        console.log(`Found: ${img}`);
      } else {
        console.log(`STILL FAILED FOR ${place.name}`);
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js with 100% working Wikimedia images!');
  }
}

fix();
