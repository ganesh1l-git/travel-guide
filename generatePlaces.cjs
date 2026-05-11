const fs = require('fs');

const baseLocations = [
  { id: "agra", name: "Agra", search: "Agra", coords: [27.1767, 78.0081], desc: "Home to the iconic Taj Mahal, Agra is a glimpse into the architectural history of the Mughal empire." },
  { id: "goa", name: "Goa", search: "Goa", coords: [15.2993, 74.1240], desc: "Famous for its pristine beaches, vibrant nightlife, and Portuguese heritage." },
  { id: "jaipur", name: "Jaipur", search: "Jaipur", coords: [26.9124, 75.7873], desc: "The 'Pink City' of India, known for its majestic palaces, historic forts, and vibrant markets." },
  { id: "kerala", name: "Munnar", search: "Munnar", coords: [10.0889, 77.0595], desc: "Famous for its endless tea gardens, misty hills, and serene atmosphere." },
  { id: "ladakh", name: "Leh", search: "Leh", coords: [34.1526, 77.5771], desc: "A high-altitude desert known for breathtaking landscapes and ancient Buddhist monasteries." },
  { id: "varanasi", name: "Varanasi", search: "Varanasi", coords: [25.3176, 82.9739], desc: "The spiritual capital of India, glowing with the evening Ganga Aarti." },
  { id: "tirupati", name: "Tirupati", search: "Tirupati", coords: [13.6288, 79.4192], desc: "Considered the spiritual capital of Andhra Pradesh, famous for the Sri Venkateswara Temple sitting atop one of the 7 peaks of Tirumala Hills." },
  { id: "ellora", name: "Ellora Caves", search: "Ellora_Caves", coords: [20.0258, 75.1780], desc: "A UNESCO World Heritage site known for its monumental rock-cut caves representing Buddhist, Hindu and Jain monuments." },
  { id: "hampi", name: "Hampi", search: "Hampi", coords: [15.3350, 76.4600], desc: "The magnificent ruined city of the majestic Vijayanagara Empire, dotted with stunning temple complexes." },
  { id: "darjeeling", name: "Darjeeling", search: "Darjeeling", coords: [27.0410, 88.2663], desc: "Nestled among the rolling mountains with the glistening Mt Kanchenjunga towering over the azure sky." },
  { id: "mysore", name: "Mysore", search: "Mysore", coords: [12.2958, 76.6394], desc: "Known as the cultural capital of Karnataka, famous for the majestic Mysore Palace and Dasara festivities." },
  { id: "rishikesh", name: "Rishikesh", search: "Rishikesh", coords: [30.0869, 78.2676], desc: "The Yoga Capital of the World, situated beside the Ganges River at the foothills of the Himalayas." },
  { id: "amritsar", name: "Amritsar", search: "Amritsar", coords: [31.6340, 74.8723], desc: "The cultural and spiritual center of the Sikh religion, home to the glorious Golden Temple." },
  { id: "udaipur", name: "Udaipur", search: "Udaipur", coords: [24.5854, 73.7125], desc: "The City of Lakes, crowned by the majestic City Palace overlooking Lake Pichola." },
  { id: "shimla", name: "Shimla", search: "Shimla", coords: [31.1048, 77.1734], desc: "A charming hill station and former summer capital of British India with distinct colonial architecture." },
  { id: "ooty", name: "Ooty", search: "Ooty", coords: [11.4102, 76.6950], desc: "Known as the Queen of Hill Stations, offering picturesque views of the Nilgiri hills and sprawling tea gardens." },
  { id: "andaman", name: "Andaman Islands", search: "Andaman_Islands", coords: [11.7401, 92.6586], desc: "A tropical paradise featuring pristine white-sand beaches, vibrant coral reefs, and dense rainforests." },
  { id: "jaisalmer", name: "Jaisalmer", search: "Jaisalmer", coords: [26.9157, 70.9083], desc: "The Golden City, standing proudly in the heart of the Thar Desert, dominated by the majestic Jaisalmer Fort." },
  { id: "delhi", name: "New Delhi", search: "New_Delhi", coords: [28.6139, 77.2090], desc: "A vibrant metropolis blending a rich historical past with completely modern urban infrastructure." },
  { id: "manali", name: "Manali", search: "Manali,_Himachal_Pradesh", coords: [32.2396, 77.1887], desc: "A high-altitude Himalayan resort town popular for backpacking and honeymooning." },
  { id: "pondicherry", name: "Pondicherry", search: "Pondicherry", coords: [11.9416, 79.8083], desc: "The French Riviera of the East, famed for its charming mustard-yellow colonial villas and tranquil beaches." },
  { id: "coorg", name: "Coorg", search: "Kodagu_district", coords: [12.3375, 75.8069], desc: "The Scotland of India, known for misty hills, lush teals, coffee estates, and orange groves." },
  { id: "khajuraho", name: "Khajuraho", search: "Khajuraho_Group_of_Monuments", coords: [24.8318, 79.9199], desc: "Renowned for its stunning ancient temples showcasing intricate erotic and architectural carvings." },
  { id: "kaziranga", name: "Kaziranga", search: "Kaziranga_National_Park", coords: [26.5775, 93.1711], desc: "A UNESCO World Heritage site and the sanctuary for the highest density of one-horned rhinoceroses." },
  { id: "gokarna", name: "Gokarna", search: "Gokarna,_Karnataka", coords: [14.5398, 74.3184], desc: "A laid-back town offering pristine beaches like Om Beach alongside sacred Hindu pilgrimage sites." },
  { id: "kanyakumari", name: "Kanyakumari", search: "Kanyakumari", coords: [8.0883, 77.5385], desc: "The southernmost tip of peninsular India where the Arabian Sea, the Bay of Bengal and the Indian Ocean converge." },
  { id: "srinagar", name: "Srinagar", search: "Srinagar", coords: [34.0837, 74.7973], desc: "The Summer Capital famous for beautiful Mughal Gardens, historic wooden mosques, and serene Dal Lake houseboats." },
  { id: "mahabaleshwar", name: "Mahabaleshwar", search: "Mahabaleshwar", coords: [18.9217, 73.6622], desc: "A popular hill station famous for its strawberries, scenic viewpoints, and dense Evergreen forests." },
  { id: "pushkar", name: "Pushkar", search: "Pushkar", coords: [26.4883, 74.5500], desc: "One of the oldest cities in India, famous for the serene Pushkar Lake, Brahma Temple, and the Camel Fair." },
  { id: "spiti", name: "Spiti Valley", search: "Spiti_Valley", coords: [32.2461, 78.0349], desc: "A cold desert mountain valley known for its harsh but stunning landscapes and ancient Buddhist monasteries." },
  { id: "kodaikanal", name: "Kodaikanal", search: "Kodaikanal", coords: [10.2381, 77.4892], desc: "A serene hill station known for its star-shaped lake, evergreen forests, and misty climate." },
  { id: "wayanad", name: "Wayanad", search: "Wayanad_district", coords: [11.6854, 76.1320], desc: "A pristine retreat offering lush spice plantations, breathtaking waterfalls, and rich wildlife." },
  { id: "gangtok", name: "Gangtok", search: "Gangtok", coords: [27.3314, 88.6138], desc: "The incredibly clean and scenic capital of Sikkim with sweeping views of the mighty Himalayas." },
  { id: "cherrapunji", name: "Cherrapunji", search: "Cherrapunji", coords: [25.2702, 91.7323], desc: "One of the wettest places on Earth, renowned for its living root bridges and myriad waterfalls." },
  { id: "shillong", name: "Shillong", search: "Shillong", coords: [25.5788, 91.8933], desc: "The Scotland of the East, offering rolling hills, pine forests, and a vibrant local rock music scene." },
  { id: "haridwar", name: "Haridwar", search: "Haridwar", coords: [29.9457, 78.1642], desc: "One of seven holiest sites for Hindus, famous for its mesmerizing evening Ganga Aarti at Har Ki Pauri." },
  { id: "mathura", name: "Mathura", search: "Mathura", coords: [27.4924, 77.6737], desc: "Revered as the birthplace of Lord Krishna, brimming with historic temples and vibrant spiritual energy." },
  { id: "ajanta", name: "Ajanta Caves", search: "Ajanta_Caves", coords: [20.5519, 75.7033], desc: "Famed for its exquisite ancient Buddhist cave paintings and rock-cut sculptures dating back to the 2nd century BCE." },
  { id: "kochi", name: "Kochi", search: "Kochi", coords: [9.9312, 76.2673], desc: "The Queen of the Arabian Sea, echoing with an eclectic mix of Dutch, Portuguese, and British colonial history." },
  { id: "alleppey", name: "Alleppey", search: "Alappuzha", coords: [9.4981, 76.3388], desc: "The Venice of the East, famous for its tranquil backwaters mapped by traditional wooden houseboats." },
  { id: "trivandrum", name: "Thiruvananthapuram", search: "Thiruvananthapuram", coords: [8.5241, 76.9366], desc: "The capital of Kerala known for its British colonial architecture and the magnificent Padmanabhaswamy Temple." },
  { id: "madurai", name: "Madurai", search: "Madurai", coords: [9.9252, 78.1198], desc: "An ancient metropolis deeply rooted in Tamil culture, dominated by the colossal, colorful Meenakshi Amman Temple." },
  { id: "mahabalipuram", name: "Mahabalipuram", search: "Mahabalipuram", coords: [12.6208, 80.1945], desc: "Known for its stunning monolithic rock-cut temples and UNESCO recognized shore temple." },
  { id: "pune", name: "Pune", search: "Pune", coords: [18.5204, 73.8567], desc: "The cultural hub of Maharashtra fusing historic Maratha landmarks with a vibrant modern skyline." },
  { id: "hyderabad", name: "Hyderabad", search: "Hyderabad", coords: [17.3850, 78.4867], desc: "The City of Pearls famously boasting the iconic Charminar alongside a booming modern tech district." },
  { id: "bengaluru", name: "Bengaluru", search: "Bangalore", coords: [12.9716, 77.5946], desc: "The Silicon Valley of India known for its numerous parks, diverse food scene, and bustling pub culture." },
  { id: "chennai", name: "Chennai", search: "Chennai", coords: [13.0827, 80.2707], desc: "A massive cultural center preserving deep-rooted traditions beside expansive beaches like Marina." },
  { id: "kolkata", name: "Kolkata", search: "Kolkata", coords: [22.5726, 88.3639], desc: "The City of Joy known for its brilliant grand colonial architecture, art scene, and cultural festivals." },
  { id: "puri", name: "Puri", search: "Puri", coords: [19.8135, 85.8312], desc: "A holy city famed for the legendary Jagannath Temple and long stretches of golden sand beaches." },
  { id: "aurangabad", name: "Aurangabad", search: "Aurangabad", coords: [19.8762, 75.3433], desc: "The gateway to the World Heritage Sites of Ajanta and Ellora, rich in Mughal architecture." }
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
];

// High quality restaurant images from unsplash
const restaurantImagesPool = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800", 
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
];

const restaurantNames = {
  fine: ["The Royal Dining", "Heritage Spices", "Golden Pavilion", "Saffron Route", "Maharaja's Court"],
  local: ["Authentic Spice House", "Desi Tadka", "Village Kitchen", "Curry Leaf", "The Local Thali"],
  cafe: ["Cozy Corner Cafe", "Beans & Leaves", "The Roast Room", "Bistro 1947", "Cafe Serenity"]
};

// Seeded random number generator
function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
    var t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

function generateSeed(str) {
  let h = 1779033703 ^ str.length;
  for(let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  }
}

async function fetchWikiImage(query) {
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`);
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

const getReviews = () => {
  return {
    traveler: [
      { author: "Rahul M.", rating: 5, comment: "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit." },
      { author: "Sneha Kashyap", rating: 4, comment: "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!" }
    ]
  }
}

const getReachability = () => {
  return [
    { mode: "Flight", price: "₹4,000 - ₹9,000", duration: "1.5h - 3h", details: "Direct flights available from major Indian hubs (DEL, BOM, BLR)." },
    { mode: "Train", price: "₹800 - ₹3,000", duration: "6h - 18h", details: "Vande Bharat and Rajdhani express trains offer comfortable journeys." },
    { mode: "Road", price: "₹1,500 - ₹4,000", duration: "Variable", details: "Well connected via National Highways. Great for road trips." }
  ]
}

const getAmenities = (placeName, random) => {
  // Generate random index for names
  const fineName = restaurantNames.fine[Math.floor(random() * restaurantNames.fine.length)];
  const localName = restaurantNames.local[Math.floor(random() * restaurantNames.local.length)];
  const cafeName = restaurantNames.cafe[Math.floor(random() * restaurantNames.cafe.length)];

  // Shuffle images to pick unique ones
  const pool = [...restaurantImagesPool];
  for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return {
    hotels: [
      { name: "Taj Luxury Resort & Spa", price: "₹18,000/night", rating: 4.9, type: "Luxury" },
      { name: "Grand Boutique Hotel", price: "₹6,000/night", rating: 4.6, type: "Premium" },
      { name: "Backpacker Zostel", price: "₹800/night", rating: 4.4, type: "Budget" }
    ],
    restaurants: [
      { 
        id: "r1_" + placeName.replace(/\\s/g, ''),
        name: fineName, 
        type: "Fine Dining", 
        price: "₹₹₹", 
        rating: (4.5 + random()*0.4).toFixed(1),
        images: [pool[0], pool[1]],
        menu: [
          { item: "Truffle Naan", price: "₹350" },
          { item: "Saffron Butter Chicken", price: "₹850" },
          { item: "Royal Dal Makhani", price: "₹550" },
          { item: "Rose Pistachio Kulfi", price: "₹250" }
        ],
        reviews: [
          { author: "Neha S.", rating: 5, time: "2 weeks ago", comment: `The food at ${fineName} is out of this world. Very premium ambiance in ${placeName}.`, isGoogle: true },
          { author: "Arjun K.", rating: 4, time: "1 month ago", comment: "Great service and beautiful decor. A bit on the expensive side but worth it.", isGoogle: true }
        ]
      },
      { 
        id: "r2_" + placeName.replace(/\\s/g, ''),
        name: localName, 
        type: "Local Cuisine", 
        price: "₹₹", 
        rating: (4.2 + random()*0.6).toFixed(1),
        images: [pool[2], pool[3]],
        menu: [
          { item: "Classic Thali", price: "₹300" },
          { item: "Masala Dosa", price: "₹150" },
          { item: "Paneer Tikka", price: "₹250" },
          { item: "Filter Coffee", price: "₹80" }
        ],
        reviews: [
          { author: "Riya M.", rating: 5, time: "3 days ago", comment: "Best local food I've had in a long time. The thali is extremely filling!", isGoogle: true },
          { author: "Samir", rating: 4, time: "2 months ago", comment: "Very authentic taste. Place is small so there might be a waiting time.", isGoogle: true }
        ]
      },
      { 
        id: "r3_" + placeName.replace(/\\s/g, ''),
        name: cafeName, 
        type: "Cafe", 
        price: "₹", 
        rating: (4.4 + random()*0.5).toFixed(1),
        images: [pool[4], pool[5]],
        menu: [
          { item: "Cappuccino", price: "₹120" },
          { item: "Avocado Toast", price: "₹200" },
          { item: "Blueberry Muffin", price: "₹100" },
          { item: "Iced Latte", price: "₹150" }
        ],
        reviews: [
          { author: "Priya V.", rating: 5, time: "1 week ago", comment: "Perfect spot to chill. Coffee is roasted to perfection.", isGoogle: true },
          { author: "Karan T.", rating: 5, time: "3 weeks ago", comment: "Great wifi and awesome avocado toast. Highly recommend.", isGoogle: true }
        ]
      }
    ],
    rentals: [
      { name: "Royal Enfield Rentals", type: "Bike/Scooter", price: "₹500 - ₹1,200/day" },
      { name: "Zoomcar Self Drive", type: "Car", price: "₹2,500 - ₹4,000/day" }
    ]
  }
}

async function main() {
  console.log('Fetching images from Wikipedia and generating data...');
  const finalPlaces = [];

  for (const loc of baseLocations) {
    const seedGen = generateSeed(loc.id);
    const random = sfc32(seedGen(), seedGen(), seedGen(), seedGen());

    let img1 = await fetchWikiImage(loc.search);
    
    // Pick fallback if wiki fails
    if (!img1) {
      img1 = fallbackImages[Math.floor(random() * fallbackImages.length)];
    }

    const img2 = fallbackImages[Math.floor(random() * fallbackImages.length)];

    finalPlaces.push({
      id: loc.id,
      name: loc.name,
      coordinates: loc.coords,
      images: [img1, img2],
      description: loc.desc,
      reachability: getReachability(),
      amenities: getAmenities(loc.name, random),
      nearby: [
        { name: `Historical landmark near ${loc.name}`, type: "Fort", image: fallbackImages[0] },
        { name: `Ancient Temple of ${loc.name}`, type: "Cultural Temple", image: fallbackImages[1] }
      ],
      reviews: getReviews()
    });
    console.log(`Processed ${loc.name}`);
  }

  const content = `export const places = ${JSON.stringify(finalPlaces, null, 2)};`;
  fs.writeFileSync('./src/data/places.js', content, 'utf8');
  console.log('Successfully generated rich places data with real Wikipedia images and varied restaurants!');
}

main();
