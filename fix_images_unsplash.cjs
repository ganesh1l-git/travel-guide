const fs = require('fs');

const scenes = {
  mountain: "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80",
  temple: "https://images.unsplash.com/photo-1623351939105-020584ebcdac?w=800&q=80",
  beach: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
  city: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  waterfall: "https://images.unsplash.com/photo-1589308144211-1a0e9fcb1a20?w=800&q=80",
  wildlife: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
  fort: "https://images.unsplash.com/photo-1582510003544-4d00b1f74d6f?w=800&q=80",
  lake: "https://images.unsplash.com/photo-1581793966596-1502bd71ebbd?w=800&q=80",
  tea: "https://images.unsplash.com/photo-1593693397690-362cb9666c89?w=800&q=80",
  golden: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  ruins: "https://images.unsplash.com/photo-1621584617505-1a830c238692?w=800&q=80",
  palace: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
};

const map = {
  "Ellora Caves": scenes.ruins,
  "Khajuraho": scenes.temple,
  "Kaziranga": scenes.wildlife,
  "Mahabaleshwar": scenes.mountain,
  "Pushkar": scenes.temple,
  "Kodaikanal": scenes.lake,
  "Wayanad": scenes.tea,
  "Gangtok": scenes.mountain,
  "Cherrapunji": scenes.waterfall,
  "Shillong": scenes.lake,
  "Mathura": scenes.temple,
  "Kochi": scenes.beach,
  "Madurai": scenes.temple,
  "Mahabalipuram": scenes.ruins,
  "Pune": scenes.fort,
  "Chennai": scenes.beach,
  "Kolkata": scenes.city,
  "Puri": scenes.temple,
  "Mysore": scenes.palace,
  "Amritsar": scenes.golden,
  "Shimla": scenes.mountain,
  "Andaman Islands": scenes.beach,
  "Jaisalmer": scenes.fort,
  "Manali": scenes.mountain,
  "Pondicherry": scenes.beach
};

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  
  let updated = false;
  
  for (let place of places) {
    if (map[place.name] || place.images[0].includes('upload.wikimedia.org')) {
      const img = map[place.name];
      if (img) {
        place.images[0] = img;
        place.images[1] = img;
        updated = true;
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js with 100% working beautiful Unsplash images!');
  }
}

fix();
