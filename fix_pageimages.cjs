const fs = require('fs');

const missing = ["Ellora Caves", "Kochi", "Madurai", "Mahabalipuram", "Pune", "Chennai", "Kolkata", "Puri"];

async function getWikiImage(title) {
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(title)}`;
    const res = await fetch(searchUrl, { headers: { 'User-Agent': 'TravelExplorerBot/1.0' } });
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pages[pageId].original && pages[pageId].original.source) {
      return pages[pageId].original.source;
    }
  } catch(e) {}
  return null;
}

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  let updated = false;

  for (let place of places) {
    if (missing.includes(place.name)) {
      let query = place.name;
      if (place.name === "Puri") query = "Puri, Odisha";
      
      console.log(`Fetching pageimages for ${query}...`);
      let img = await getWikiImage(query);

      if (img) {
        place.images[0] = img;
        place.images[1] = img;
        updated = true;
        console.log(`Found: ${img}`);
      } else {
        console.log(`STILL FAILED: ${place.name}`);
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js with pageimages!');
  }
}

fix();
