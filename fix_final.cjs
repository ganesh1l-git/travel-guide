const fs = require('fs');

async function getWikiImage(title) {
  try {
    const imgUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const res = await fetch(imgUrl, { headers: { 'User-Agent': 'TravelExplorerBot/1.0' } });
    const data = await res.json();
    if (data.originalimage && data.originalimage.source) return data.originalimage.source;
  } catch(e) {}
  return null;
}

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  let updated = false;

  for (let place of places) {
    if (place.name === "Ellora Caves") {
      let img = await getWikiImage("Ellora");
      if (img) { place.images[0] = img; place.images[1] = img; updated = true; console.log("Fixed Ellora", img); }
    }
    if (place.name === "Mahabalipuram") {
      let img = await getWikiImage("Mamallapuram");
      if (img) { place.images[0] = img; place.images[1] = img; updated = true; console.log("Fixed Mahabalipuram", img); }
    }
    if (place.name === "Puri") {
      let img = await getWikiImage("Jagannath Temple, Puri");
      if (img) { place.images[0] = img; place.images[1] = img; updated = true; console.log("Fixed Puri", img); }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed final 3 places!');
  }
}

fix();
