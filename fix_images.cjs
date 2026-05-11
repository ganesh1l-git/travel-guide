const fs = require('fs');

async function fetchWikiImageSearch(query) {
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&srlimit=1`;
    const res = await fetch(searchUrl, { headers: { 'User-Agent': 'TravelExplorerBot/1.0' } });
    const data = await res.json();
    if (data.query && data.query.search && data.query.search.length > 0) {
      const title = data.query.search[0].title;
      const imgUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
      const res2 = await fetch(imgUrl, { headers: { 'User-Agent': 'TravelExplorerBot/1.0' } });
      const data2 = await res2.json();
      if (data2.originalimage && data2.originalimage.source) {
        return data2.originalimage.source;
      }
      if (data2.thumbnail && data2.thumbnail.source) {
        return data2.thumbnail.source;
      }
    }
  } catch(e) {}
  return null;
}

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  
  let updated = false;
  
  for (let place of places) {
    if (place.images[0].includes('unsplash.com')) {
      console.log(`Fixing ${place.name}...`);
      let img = await fetchWikiImageSearch(place.name + " tourism");
      if (!img) img = await fetchWikiImageSearch(place.name + " India");
      if (!img) img = await fetchWikiImageSearch(place.name);
      
      if (img) {
        place.images[0] = img;
        place.images[1] = img; 
        updated = true;
        console.log(`Found: ${img}`);
      } else {
        console.log(`Failed to find for ${place.name}`);
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js!');
  }
}

fix();
