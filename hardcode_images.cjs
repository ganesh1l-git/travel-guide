const fs = require('fs');

const fixedImages = {
  "Ellora Caves": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ellora_cave_16_001.jpg",
  "Khajuraho": "https://upload.wikimedia.org/wikipedia/commons/8/87/Kandariya_Mahadeva_Temple%2C_Khajuraho.jpg",
  "Kaziranga": "https://upload.wikimedia.org/wikipedia/commons/4/42/Indian_Rhinoceros_Kaziranga.jpg",
  "Mahabaleshwar": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Elephant_Head_Point%2C_Mahabaleshwar.jpg",
  "Pushkar": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pushkar_Lake.jpg",
  "Kodaikanal": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Kodaikanal_Lake_view.jpg",
  "Wayanad": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Chembra_Peak_Wayanad.jpg",
  "Gangtok": "https://upload.wikimedia.org/wikipedia/commons/5/55/Gangtok_city_view.jpg",
  "Cherrapunji": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Nohkalikai_Falls_Cherrapunji.jpg",
  "Shillong": "https://upload.wikimedia.org/wikipedia/commons/8/86/Umiam_Lake_Shillong.jpg",
  "Mathura": "https://upload.wikimedia.org/wikipedia/commons/3/36/Prem_Mandir_Mathura.jpg",
  "Kochi": "https://upload.wikimedia.org/wikipedia/commons/0/05/Chinese_Fishing_Nets_Kochi.jpg",
  "Madurai": "https://upload.wikimedia.org/wikipedia/commons/0/03/Meenakshi_Amman_Temple_Madurai.jpg",
  "Mahabalipuram": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Shore_Temple_Mahabalipuram.jpg",
  "Pune": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Shaniwar_Wada_Pune.jpg",
  "Chennai": "https://upload.wikimedia.org/wikipedia/commons/9/90/Marina_Beach_Chennai.jpg",
  "Kolkata": "https://upload.wikimedia.org/wikipedia/commons/7/70/Victoria_Memorial_Kolkata.jpg",
  "Puri": "https://upload.wikimedia.org/wikipedia/commons/6/67/Jagannath_Temple_Puri.jpg"
};

async function fix() {
  const { places } = await import('file:///' + process.cwd().replace(/\\/g, '/') + '/src/data/places.js?time=' + Date.now());
  
  let updated = false;
  
  for (let place of places) {
    if (fixedImages[place.name] || place.images[0].includes('unsplash.com')) {
      const img = fixedImages[place.name];
      if (img) {
        place.images[0] = img;
        place.images[1] = img;
        updated = true;
        console.log(`Fixed manually: ${place.name}`);
      } else {
        console.log(`STILL MISSING: ${place.name}`);
      }
    }
  }

  if (updated) {
    const newContent = `export const places = ${JSON.stringify(places, null, 2)};`;
    fs.writeFileSync('./src/data/places.js', newContent, 'utf8');
    console.log('Fixed and saved places.js with exact hardcoded images!');
  }
}

fix();
