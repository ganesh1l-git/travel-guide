export const places = [
  {
    "id": "agra",
    "name": "Agra",
    "coordinates": [
      27.1767,
      78.0081
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Taj_Mahal%2C_Agra%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Agra_Fort_%28Edited%29.jpg/1280px-Agra_Fort_%28Edited%29.jpg"
    ],
    "description": "Home to the iconic Taj Mahal, Agra is a glimpse into the architectural history of the Mughal empire.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "The Oberoi Amarvilas",
          "image": "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
          "rating": 4.9,
          "type": "Luxury",
          "priceRange": "₹25,000 - ₹75,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹25,000/night"
            },
            {
              "type": "Premier Room with Taj View",
              "price": "₹45,000/night"
            },
            {
              "type": "Kohinoor Suite",
              "price": "₹75,000/night"
            }
          ]
        },
        {
          "name": "Radisson Blu Agra",
          "image": "https://images.unsplash.com/photo-1572177215152-32f247303126?w=800&q=80",
          "rating": 4.4,
          "type": "Premium",
          "priceRange": "₹5,000 - ₹12,000/night",
          "rooms": [
            {
              "type": "Superior Room",
              "price": "₹5,000/night"
            },
            {
              "type": "Business Class Room",
              "price": "₹8,000/night"
            },
            {
              "type": "Suite",
              "price": "₹12,000/night"
            }
          ]
        },
        {
          "name": "Hotel Sidhartha",
          "image": "https://images.unsplash.com/photo-1621891333819-00c206ec8994?w=800&q=80",
          "rating": 3.9,
          "type": "Budget",
          "priceRange": "₹1,200 - ₹3,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹2,000/night"
            },
            {
              "type": "Family Suite",
              "price": "₹3,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Agra",
          "name": "Mughal Saffron Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779386-a9c514eccc6b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Truffle Naan",
              "price": "₹350"
            },
            {
              "item": "Saffron Butter Chicken",
              "price": "₹850"
            },
            {
              "item": "Royal Dal Makhani",
              "price": "₹550"
            },
            {
              "item": "Petha Kheer",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Agra.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Agra",
          "name": "Agra Spice Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1722573783453-2976e515fe3b?w=800&q=80",
            "https://images.unsplash.com/photo-1707995513187-1a01ac9d5018?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Bedai Alur Ghol",
              "price": "₹120"
            },
            {
              "item": "Agra Petha Thali",
              "price": "₹250"
            },
            {
              "item": "Mughlai Paneer",
              "price": "₹300"
            },
            {
              "item": "Tandoori Roti",
              "price": "₹40"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Agra",
          "name": "The Taj View Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1678781283118-31e7f6c96d0d?w=800&q=80",
            "https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka Sandwich",
              "price": "₹220"
            },
            {
              "item": "Masala Chai",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Fatehpur Sikri",
        "type": "UNESCO Heritage",
        "distance": "37 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Fatehpur_Sikri_Buland_Darwaza_gate.jpg/1280px-Fatehpur_Sikri_Buland_Darwaza_gate.jpg"
      },
      {
        "name": "Mathura - Birthplace of Krishna",
        "type": "Pilgrimage City",
        "distance": "58 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dwarkadhish_Temple_Mathura.jpg/1024px-Dwarkadhish_Temple_Mathura.jpg"
      },
      {
        "name": "Vrindavan Temples",
        "type": "Pilgrimage",
        "distance": "70 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Prem_Mandir_-_Vrindavan.jpg/1280px-Prem_Mandir_-_Vrindavan.jpg"
      },
      {
        "name": "Bharatpur Bird Sanctuary",
        "type": "Wildlife Reserve",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bharatpur_Bird_Sanctuary_Rajasthan_India.jpg/1280px-Bharatpur_Bird_Sanctuary_Rajasthan_India.jpg"
      },
      {
        "name": "Sikandra - Akbar's Tomb",
        "type": "Mughal Monument",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Akbar%27s_tomb_Sikandra.jpg/1280px-Akbar%27s_tomb_Sikandra.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "goa",
    "name": "Goa",
    "coordinates": [
      15.2993,
      74.124
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/1280px-BeachFun.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Basilica_of_bom_jesus_goa.jpg/1280px-Basilica_of_bom_jesus_goa.jpg"
    ],
    "description": "Famous for its pristine beaches, vibrant nightlife, and Portuguese heritage.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Taj Exotica Resort & Spa",
          "image": "https://images.unsplash.com/photo-1630888728969-5e43f55a7a18?w=800&q=80",
          "rating": 4.8,
          "type": "Luxury",
          "priceRange": "₹18,000 - ₹60,000/night",
          "rooms": [
            {
              "type": "Deluxe Room Garden View",
              "price": "₹18,000/night"
            },
            {
              "type": "Premium Suite Sea View",
              "price": "₹35,000/night"
            },
            {
              "type": "Presidential Villa",
              "price": "₹60,000/night"
            }
          ]
        },
        {
          "name": "Resort Rio",
          "image": "https://images.unsplash.com/photo-1631049035581-bec13f40dfff?w=800&q=80",
          "rating": 4.3,
          "type": "Premium",
          "priceRange": "₹5,000 - ₹15,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹5,000/night"
            },
            {
              "type": "Deluxe Pool View",
              "price": "₹9,000/night"
            },
            {
              "type": "Suite",
              "price": "₹15,000/night"
            }
          ]
        },
        {
          "name": "Zostel Goa Anjuna",
          "image": "https://images.unsplash.com/photo-1631049307729-d5db33d15ed1?w=800&q=80",
          "rating": 4.4,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,500/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,500/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,500/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Goa",
          "name": "The Goan Sea Grill",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1663078779448-4cafe7f24d3c?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779382-b21066ffca6c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Prawn Balchao",
              "price": "₹850"
            },
            {
              "item": "Goan Fish Curry",
              "price": "₹750"
            },
            {
              "item": "Bebinca with Icecream",
              "price": "₹350"
            },
            {
              "item": "Feni Cocktail",
              "price": "₹450"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Goa.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Goa",
          "name": "Fisherman's Spice Cottage",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1676198082051-2e5bd135141d?w=800&q=80",
            "https://images.unsplash.com/photo-1681900162312-4f8bf837c607?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chicken Xacuti",
              "price": "₹450"
            },
            {
              "item": "Fish Thali",
              "price": "₹350"
            },
            {
              "item": "Pork Vindaloo",
              "price": "₹500"
            },
            {
              "item": "Poi Bread",
              "price": "₹40"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Goa",
          "name": "Cafe de Goa Beachside",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=800&q=80",
            "https://images.unsplash.com/photo-1661082564713-704ac5cf1a2b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Iced Latte",
              "price": "₹180"
            },
            {
              "item": "Avocado Toast",
              "price": "₹240"
            },
            {
              "item": "Chouriço Roll",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Dudhsagar Falls",
        "type": "Waterfall",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/DudhsagarFalls.jpg/800px-DudhsagarFalls.jpg"
      },
      {
        "name": "Fort Aguada",
        "type": "Portuguese Fort",
        "distance": "18 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Fort_Aguada%2C_Goa.jpg/1280px-Fort_Aguada%2C_Goa.jpg"
      },
      {
        "name": "Basilica of Bom Jesus",
        "type": "UNESCO Heritage Church",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Basilica_of_bom_jesus_goa.jpg/1280px-Basilica_of_bom_jesus_goa.jpg"
      },
      {
        "name": "Anjuna Flea Market",
        "type": "Cultural Market",
        "distance": "20 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Anjuna_Flea_Market.jpg/1280px-Anjuna_Flea_Market.jpg"
      },
      {
        "name": "Gokarna Beaches",
        "type": "Coastal Town",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Om_Beach%2C_Gokarna.jpg/1280px-Om_Beach%2C_Gokarna.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "coordinates": [
      26.9124,
      75.7873
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Amber_Fort%2C_Jaipur%2C_Rajasthan.jpg/1280px-Amber_Fort%2C_Jaipur%2C_Rajasthan.jpg"
    ],
    "description": "The 'Pink City' of India, known for its majestic palaces, historic forts, and vibrant markets.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Rambagh Palace",
          "image": "https://images.unsplash.com/photo-1631049552351-16da4767cc98?w=800&q=80",
          "rating": 4.9,
          "type": "Luxury Heritage",
          "priceRange": "₹30,000 - ₹1,00,000/night",
          "rooms": [
            {
              "type": "Palace Room",
              "price": "₹30,000/night"
            },
            {
              "type": "Historical Suite",
              "price": "₹55,000/night"
            },
            {
              "type": "Grand Royal Suite",
              "price": "₹1,00,000/night"
            }
          ]
        },
        {
          "name": "Holiday Inn Jaipur",
          "image": "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹4,500 - ₹10,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹4,500/night"
            },
            {
              "type": "Executive Room",
              "price": "₹7,000/night"
            },
            {
              "type": "Suite",
              "price": "₹10,000/night"
            }
          ]
        },
        {
          "name": "Zostel Jaipur",
          "image": "https://images.unsplash.com/photo-1699979306075-1b4c943a3b16?w=800&q=80",
          "rating": 4.5,
          "type": "Budget",
          "priceRange": "₹500 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹500/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Jaipur",
          "name": "Rajputana Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568071-46cc4e019730?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567738-16bcc30e40e1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Lal Maas",
              "price": "₹900"
            },
            {
              "item": "Ker Sangri",
              "price": "₹650"
            },
            {
              "item": "Missi Roti",
              "price": "₹80"
            },
            {
              "item": "Ghevar Delight",
              "price": "₹300"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Jaipur.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Jaipur",
          "name": "Jaipur Dal Baati House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082564813-c0c2e7feddbd?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568225-64153ac360f2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Dal Baati Churma",
              "price": "₹350"
            },
            {
              "item": "Mirchi Bada",
              "price": "₹80"
            },
            {
              "item": "Pyaaz Kachori",
              "price": "₹90"
            },
            {
              "item": "Kulhad Lassi",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Jaipur",
          "name": "The Hawa Mahal Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1582136092024-ca76695e30a8?w=800&q=80",
            "https://images.unsplash.com/photo-1779912602687-c0d380ce3c76?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Aeropress Coffee",
              "price": "₹200"
            },
            {
              "item": "Mawa Kachori Tart",
              "price": "₹180"
            },
            {
              "item": "Rose Lemonade",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Nahargarh Fort",
        "type": "Hilltop Fort",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Nahargarh_Fort%2C_Jaipur.jpg/1280px-Nahargarh_Fort%2C_Jaipur.jpg"
      },
      {
        "name": "Ajmer Sharif Dargah",
        "type": "Sufi Shrine",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ajmer_Sharif_Dargah.jpg/1024px-Ajmer_Sharif_Dargah.jpg"
      },
      {
        "name": "Pushkar Lake",
        "type": "Sacred Lake",
        "distance": "98 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pushkar_Lake%2C_Rajasthan.jpg/1280px-Pushkar_Lake%2C_Rajasthan.jpg"
      },
      {
        "name": "Chand Baori Stepwell",
        "type": "Ancient Stepwell",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chand_Baori.jpg/1280px-Chand_Baori.jpg"
      },
      {
        "name": "Sambhar Salt Lake",
        "type": "Natural Lake",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sambhar_Lake_Rajasthan.jpg/1280px-Sambhar_Lake_Rajasthan.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kerala",
    "name": "Munnar",
    "coordinates": [
      10.0889,
      77.0595
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/1280px-Munnar_Overview.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Tea_plantations_in_Munnar%2C_Kerala%2C_India.jpg/1280px-Tea_plantations_in_Munnar%2C_Kerala%2C_India.jpg"
    ],
    "description": "Famous for its endless tea gardens, misty hills, and serene atmosphere.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Windermere Estate",
          "image": "https://images.unsplash.com/photo-1631048730752-0c4101180d7b?w=800&q=80",
          "rating": 4.7,
          "type": "Heritage",
          "priceRange": "₹8,000 - ₹20,000/night",
          "rooms": [
            {
              "type": "Cottage Room",
              "price": "₹8,000/night"
            },
            {
              "type": "Planter Suite",
              "price": "₹14,000/night"
            },
            {
              "type": "Heritage Villa",
              "price": "₹20,000/night"
            }
          ]
        },
        {
          "name": "KTDC Tea County",
          "image": "https://images.unsplash.com/photo-1631049035186-d9af5f078801?w=800&q=80",
          "rating": 4.2,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Green View Munnar",
          "image": "https://images.unsplash.com/photo-1631049421788-6ce0054149f0?w=800&q=80",
          "rating": 4,
          "type": "Budget",
          "priceRange": "₹1,000 - ₹2,500/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹1,000/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹1,800/night"
            },
            {
              "type": "Family Room",
              "price": "₹2,500/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Munnar",
          "name": "The Hills Tea Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082568686-386e82833489?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568303-7c51a31e5d13?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Karimeen Pollichathu",
              "price": "₹850"
            },
            {
              "item": "Malabar Mutton Curry",
              "price": "₹750"
            },
            {
              "item": "Appam with Stew",
              "price": "₹320"
            },
            {
              "item": "Elaneer Payasam",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Munnar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Munnar",
          "name": "Munnar Spice Junction",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1583415466047-fdae781947b1?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568457-7451acdfc6a7?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Kerala Veg Sadhya Thali",
              "price": "₹250"
            },
            {
              "item": "Chicken Varutharathu",
              "price": "₹450"
            },
            {
              "item": "Malabar Parotta",
              "price": "₹50"
            },
            {
              "item": "Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Munnar",
          "name": "Mist & Brews Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1678781283270-3c61d71e6120?w=800&q=80",
            "https://images.unsplash.com/photo-1774979160994-3306b4872084?w=800&q=80"
          ],
          "menu": [
            {
              "item": "French Press Coffee",
              "price": "₹160"
            },
            {
              "item": "Banana Bread",
              "price": "₹140"
            },
            {
              "item": "Spiced Tea",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Eravikulam National Park",
        "type": "Wildlife Sanctuary",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Eravikulam_National_Park_-_panoramio.jpg/1280px-Eravikulam_National_Park_-_panoramio.jpg"
      },
      {
        "name": "Top Station",
        "type": "Viewpoint",
        "distance": "32 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/View_from_Top_Station%2C_Munnar.jpg/1280px-View_from_Top_Station%2C_Munnar.jpg"
      },
      {
        "name": "Mattupetty Dam",
        "type": "Dam & Lake",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mattupetty_Dam.JPG/1280px-Mattupetty_Dam.JPG"
      },
      {
        "name": "Thekkady - Periyar Wildlife",
        "type": "Wildlife Sanctuary",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Periyar_Tiger_Reserve.jpg/1280px-Periyar_Tiger_Reserve.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "ladakh",
    "name": "Leh",
    "coordinates": [
      34.1526,
      77.5771
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Pangong_Tso_lake.jpg/1280px-Pangong_Tso_lake.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Thikse_Monastery%2C_Ladakh.jpg/1280px-Thikse_Monastery%2C_Ladakh.jpg"
    ],
    "description": "A high-altitude desert known for breathtaking landscapes and ancient Buddhist monasteries.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Leh",
          "image": "https://images.unsplash.com/photo-1631048835236-a1c27baeff2c?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Leh Inn",
          "image": "https://images.unsplash.com/photo-1631048648883-660ccd576581?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Leh",
          "image": "https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Leh",
          "name": "Leh Palace View Royal",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1691958215011-6800e0a058b0?w=800&q=80",
            "https://images.unsplash.com/photo-1761662826177-a50286fe7eef?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Apricot Glazed Chicken",
              "price": "₹850"
            },
            {
              "item": "Ladakhi Pulao",
              "price": "₹480"
            },
            {
              "item": "Khambir Bread",
              "price": "₹100"
            },
            {
              "item": "Apricot Tart",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Leh.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Leh",
          "name": "Ladakhi Tibetan Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1610596672499-c0d20c9ee707?w=800&q=80",
            "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mutton Momos Steamed",
              "price": "₹220"
            },
            {
              "item": "Thenthuk Noodle Soup",
              "price": "₹240"
            },
            {
              "item": "Tigmo with Curry",
              "price": "₹260"
            },
            {
              "item": "Butter Salt Tea",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Leh",
          "name": "Chhang Lounge & Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?w=800&q=80",
            "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Brew",
              "price": "₹180"
            },
            {
              "item": "Yak Cheese Sandwich",
              "price": "₹220"
            },
            {
              "item": "Sea Buckthorn Juice",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Pangong Tso Lake",
        "type": "High Altitude Lake",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Pangong_Tso_lake.jpg/1280px-Pangong_Tso_lake.jpg"
      },
      {
        "name": "Nubra Valley",
        "type": "Mountain Valley",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sand_dunes_in_nubra.jpg/1280px-Sand_dunes_in_nubra.jpg"
      },
      {
        "name": "Thiksey Monastery",
        "type": "Buddhist Monastery",
        "distance": "19 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Thikse_Monastery%2C_Ladakh.jpg/1280px-Thikse_Monastery%2C_Ladakh.jpg"
      },
      {
        "name": "Magnetic Hill",
        "type": "Natural Phenomenon",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Magnetic_Hill%2C_Ladakh.jpg/1280px-Magnetic_Hill%2C_Ladakh.jpg"
      },
      {
        "name": "Hemis Monastery",
        "type": "Buddhist Monastery",
        "distance": "45 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hemis_Monastery.jpg/1280px-Hemis_Monastery.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "varanasi",
    "name": "Varanasi",
    "coordinates": [
      25.3176,
      82.9739
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1280px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Varanasi_Ganga_Arati.jpg/1280px-Varanasi_Ganga_Arati.jpg"
    ],
    "description": "The spiritual capital of India, glowing with the evening Ganga Aarti.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Varanasi",
          "image": "https://images.unsplash.com/photo-1631048835135-3e8ac5e99ba0?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Varanasi Inn",
          "image": "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Varanasi",
          "image": "https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Varanasi",
          "name": "North Indian Shahi Dining - Varanasi",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1728910758653-7e990e489cac?w=800&q=80",
            "https://images.unsplash.com/photo-1771694583810-db9568dc9b8d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Paneer Butter Masala",
              "price": "₹500"
            },
            {
              "item": "Dal Makhani",
              "price": "₹450"
            },
            {
              "item": "Garlic Naan",
              "price": "₹70"
            },
            {
              "item": "Shahi Tukda",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Varanasi.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Varanasi",
          "name": "Local Punjabi Dhaba - Varanasi",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1690915475862-336b65f571a3?w=800&q=80",
            "https://images.unsplash.com/photo-1642524957029-e4fcbcea0257?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Aloo Paratha (2 pcs)",
              "price": "₹150"
            },
            {
              "item": "Chana Masala & Rice",
              "price": "₹240"
            },
            {
              "item": "Veg Momos",
              "price": "₹140"
            },
            {
              "item": "Ginger Tea",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Varanasi",
          "name": "Himalayan View Cafe - Varanasi",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1769766319375-1c384e4355d6?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568383-d31c9a87061f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹140"
            },
            {
              "item": "Apple Cinnamon Muffin",
              "price": "₹120"
            },
            {
              "item": "Fresh Mint Lemonade",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Sarnath - Buddha's First Sermon",
        "type": "Buddhist Heritage",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Dhamek_Stupa%2C_Sarnath.jpg/1280px-Dhamek_Stupa%2C_Sarnath.jpg"
      },
      {
        "name": "Ramnagar Fort",
        "type": "Heritage Fort",
        "distance": "14 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ramnagar_Fort_Varanasi.jpg/1280px-Ramnagar_Fort_Varanasi.jpg"
      },
      {
        "name": "Chunar Fort",
        "type": "Medieval Fort",
        "distance": "42 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chunar_Fort.jpg/1280px-Chunar_Fort.jpg"
      },
      {
        "name": "Vindhyachal Temple",
        "type": "Hindu Pilgrimage",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Vindhyavasini_Temple.jpg/800px-Vindhyavasini_Temple.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "coordinates": [
      13.6288,
      79.4192
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tirumala_090615.jpg/1280px-Tirumala_090615.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Gopuram_of_Tirumala_temple_at_Tirupati.jpg/800px-Gopuram_of_Tirumala_temple_at_Tirupati.jpg"
    ],
    "description": "Considered the spiritual capital of Andhra Pradesh, famous for the Sri Venkateswara Temple sitting atop one of the 7 peaks of Tirumala Hills.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Tirupati",
          "image": "https://images.unsplash.com/photo-1669181232233-14281fc31470?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Tirupati Inn",
          "image": "https://images.unsplash.com/photo-1611971262702-ed56db509bd9?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Tirupati",
          "image": "https://images.unsplash.com/photo-1688378707080-f14a27e30551?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Tirupati",
          "name": "Sri Venkateswara Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1678781398373-c728751d5d8f?w=800&q=80",
            "https://images.unsplash.com/photo-1662048504895-f11b7c3b8cc2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pulihora (Tamarind Rice)",
              "price": "₹250"
            },
            {
              "item": "Andhra Royal Shahi Thali",
              "price": "₹550"
            },
            {
              "item": "Guntur Paneer Tikka",
              "price": "₹450"
            },
            {
              "item": "Tirupati Laddu Sweet",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Tirupati.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Tirupati",
          "name": "Tirumala Local Balaji Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1764955193589-f5db4261e02c?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475901-6c08af925906?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Andhra Meals Spicy",
              "price": "₹220"
            },
            {
              "item": "Spicy Masala Dosa",
              "price": "₹120"
            },
            {
              "item": "Idli Sambar Ghee",
              "price": "₹90"
            },
            {
              "item": "Filter Coffee",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Tirupati",
          "name": "Srinivasa Hilltop Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80",
            "https://images.unsplash.com/photo-1764699486820-30a00e6ded7a?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹140"
            },
            {
              "item": "Samosa Chaat",
              "price": "₹130"
            },
            {
              "item": "Badam Milk",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Sri Kalahasti Temple",
        "type": "Ancient Temple",
        "distance": "36 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Srikalahasteeswara_temple.jpg/1280px-Srikalahasteeswara_temple.jpg"
      },
      {
        "name": "Chandragiri Fort",
        "type": "Heritage Fort",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Chandragiri_Fort_raja_mahal.jpg/1280px-Chandragiri_Fort_raja_mahal.jpg"
      },
      {
        "name": "Talakona Waterfall",
        "type": "Waterfall",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Talakona_waterfall.jpg/800px-Talakona_waterfall.jpg"
      },
      {
        "name": "Horsley Hills",
        "type": "Hill Station",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Horsley_Hills_Andhra.jpg/1280px-Horsley_Hills_Andhra.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "ellora",
    "name": "Ellora Caves",
    "coordinates": [
      20.0258,
      75.178
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kailasha_temple_at_ellora.jpg/1280px-Kailasha_temple_at_ellora.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ellora_cave16_001.jpg/1280px-Ellora_cave16_001.jpg"
    ],
    "description": "A UNESCO World Heritage site known for its monumental rock-cut caves representing Buddhist, Hindu and Jain monuments.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Hotel Kailas, Aurangabad",
          "image": "https://images.unsplash.com/photo-1613618902610-95d88084ee11?w=800&q=80",
          "rating": 4.2,
          "type": "Mid-Range",
          "priceRange": "₹2,500 - ₹6,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹2,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹4,000/night"
            },
            {
              "type": "Suite",
              "price": "₹6,000/night"
            }
          ]
        },
        {
          "name": "Vivanta Aurangabad",
          "image": "https://images.unsplash.com/photo-1704789202340-85a4786aa2c0?w=800&q=80",
          "rating": 4.6,
          "type": "Luxury",
          "priceRange": "₹8,000 - ₹22,000/night",
          "rooms": [
            {
              "type": "Superior Room",
              "price": "₹8,000/night"
            },
            {
              "type": "Deluxe Suite",
              "price": "₹15,000/night"
            },
            {
              "type": "Presidential Suite",
              "price": "₹22,000/night"
            }
          ]
        },
        {
          "name": "MTDC Ellora",
          "image": "https://images.unsplash.com/photo-1777169794972-12095816073b?w=800&q=80",
          "rating": 3.8,
          "type": "Budget",
          "priceRange": "₹800 - ₹2,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹800/night"
            },
            {
              "type": "AC Deluxe",
              "price": "₹1,500/night"
            },
            {
              "type": "Family Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ellora Caves",
          "name": "Kailash Heritage Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1773419808002-bab9e1f840a0?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567428-0edf5319f315?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Naan Qalia (Aurangabad Special)",
              "price": "₹800"
            },
            {
              "item": "Kaju Curry Shahi",
              "price": "₹550"
            },
            {
              "item": "Jowar Bhakri with Pitla",
              "price": "₹280"
            },
            {
              "item": "Basundi with Poori",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Ellora Caves.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Ellora Caves",
          "name": "Aurangabad Mughal Tastes",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1661082568142-5204c2aed26e?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567019-f21649afbeb7?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Maharashtrian Thali",
              "price": "₹300"
            },
            {
              "item": "Misal Pav Kolhapuri",
              "price": "₹140"
            },
            {
              "item": "Pithla Bhakri",
              "price": "₹180"
            },
            {
              "item": "Solkadhi Drink",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Ellora Caves",
          "name": "Caves Side Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1661082568186-0c7fa3505108?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568519-6f0429c94871?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹120"
            },
            {
              "item": "Batata Vada Plate",
              "price": "₹80"
            },
            {
              "item": "Chikoo Milkshake",
              "price": "₹140"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Daulatabad Fort",
        "type": "Heritage Fort",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Daulatabad_Fort_%28Devagiri%29.jpg/1280px-Daulatabad_Fort_%28Devagiri%29.jpg"
      },
      {
        "name": "Bibi Ka Maqbara",
        "type": "Mughal Monument",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg/1280px-Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg"
      },
      {
        "name": "Ajanta Caves",
        "type": "UNESCO Heritage",
        "distance": "100 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ajanta_%28panoramic_view%29.jpg/1280px-Ajanta_%28panoramic_view%29.jpg"
      },
      {
        "name": "Grishneshwar Temple",
        "type": "Jyotirlinga Temple",
        "distance": "1 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Grishneshwar_Temple.jpg/1024px-Grishneshwar_Temple.jpg"
      },
      {
        "name": "Panchakki - Water Mill",
        "type": "Historical Monument",
        "distance": "28 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Panchakki_Aurangabad.jpg/1024px-Panchakki_Aurangabad.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "coordinates": [
      15.335,
      76.46
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virupaksha_Temple%2C_Hampi.jpg/1280px-Virupaksha_Temple%2C_Hampi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hampi_vibread.jpg/1280px-Hampi_viread.jpg"
    ],
    "description": "The magnificent ruined city of the majestic Vijayanagara Empire, dotted with stunning temple complexes.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Hampi",
          "image": "https://images.unsplash.com/photo-1650991360674-9ae2da911e8c?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Hampi Inn",
          "image": "https://images.unsplash.com/photo-1769643207226-dcc20cbe7d70?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Hampi",
          "image": "https://images.unsplash.com/photo-1689729855420-d8dde176bf91?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Hampi",
          "name": "Vijayanagara Royal Ruins Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082569345-011c1d412af6?w=800&q=80",
            "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Hampi Royal Veg Feast",
              "price": "₹500"
            },
            {
              "item": "Bisi Bele Bath",
              "price": "₹280"
            },
            {
              "item": "Ragi Roti & Kurma",
              "price": "₹250"
            },
            {
              "item": "Coconut Payasam",
              "price": "₹180"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Hampi.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Hampi",
          "name": "Hampi Mango Tree local kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1663078779530-cb62ed5dcd07?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568527-f12d7bd9d29d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mango Tree Special Thali",
              "price": "₹240"
            },
            {
              "item": "Paddu with Chutney",
              "price": "₹100"
            },
            {
              "item": "Girish Banana Fritters",
              "price": "₹120"
            },
            {
              "item": "Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Hampi",
          "name": "Hippie Island Hammock Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1678781283118-e188f63df7ec?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283129-a403c3dc8823?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Brew",
              "price": "₹160"
            },
            {
              "item": "Banana Nut Pancake",
              "price": "₹160"
            },
            {
              "item": "Lemon Mint Ice Tea",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Tungabhadra Dam",
        "type": "Dam",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Tungabhadra_Dam.jpg/1280px-Tungabhadra_Dam.jpg"
      },
      {
        "name": "Anegundi Village",
        "type": "Heritage Village",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Anegundi_Village.jpg/1280px-Anegundi_Village.jpg"
      },
      {
        "name": "Badami Cave Temples",
        "type": "Rock-cut Architecture",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Badami_cave_temples.jpg/1280px-Badami_cave_temples.jpg"
      },
      {
        "name": "Hospet Town",
        "type": "Gateway Town",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Hospet_Vijayanagara.jpg/1024px-Hospet_Vijayanagara.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "coordinates": [
      27.041,
      88.2663
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Darjeeling%2C_India%2C_Darjeeling_Himalayan_Railway_%E2%80%93_Toy_Train.jpg/1280px-Darjeeling%2C_India%2C_Darjeeling_Himalayan_Railway_%E2%80%93_Toy_Train.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Darjeeling_Tea_Garden.jpg/1280px-Darjeeling_Tea_Garden.jpg"
    ],
    "description": "Nestled among the rolling mountains with the glistening Mt Kanchenjunga towering over the azure sky.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Darjeeling",
          "image": "https://images.unsplash.com/photo-1718359759373-1b2670b7478b?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Darjeeling Inn",
          "image": "https://images.unsplash.com/photo-1696766984569-a33d52748dba?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Darjeeling",
          "image": "https://images.unsplash.com/photo-1548612486-94d786319018?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Darjeeling",
          "name": "Kanchenjunga Peak View Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1722886689077-d22d8fc2a305?w=800&q=80",
            "https://images.unsplash.com/photo-1763951719000-661d3d50d763?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Darjeeling Tea Infused Fish",
              "price": "₹850"
            },
            {
              "item": "Bengali Royal Thali",
              "price": "₹750"
            },
            {
              "item": "Luchi Alur Dom",
              "price": "₹300"
            },
            {
              "item": "Darjeeling Tea Souffle",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Darjeeling.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Darjeeling",
          "name": "Darjeeling Momos & More",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1585742440646-60adcd5a06d0?w=800&q=80",
            "https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Steamed Mutton Momos",
              "price": "₹180"
            },
            {
              "item": "Thukpa Soup Local",
              "price": "₹220"
            },
            {
              "item": "Alu Dum Bengali",
              "price": "₹180"
            },
            {
              "item": "Darjeeling First Flush Tea",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Darjeeling",
          "name": "The Glenary's Toy Train Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
            "https://images.unsplash.com/photo-1643757343278-5d50309dfa44?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹150"
            },
            {
              "item": "Chocolate Eclair",
              "price": "₹140"
            },
            {
              "item": "Lemon Tart",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Tiger Hill - Sunrise Point",
        "type": "Viewpoint",
        "distance": "11 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Kanchenjunga_from_Tiger_Hill.jpg/1280px-Kanchenjunga_from_Tiger_Hill.jpg"
      },
      {
        "name": "Batasia Loop",
        "type": "Railway Heritage",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Darjeeling_Himalayan_Railway_at_Batasia_Loop.jpg/1280px-Darjeeling_Himalayan_Railway_at_Batasia_Loop.jpg"
      },
      {
        "name": "Kalimpong",
        "type": "Hill Town",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kalimpong_Town.jpg/1280px-Kalimpong_Town.jpg"
      },
      {
        "name": "Mirik Lake",
        "type": "Scenic Lake",
        "distance": "49 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mirik_Lake.jpg/1280px-Mirik_Lake.jpg"
      },
      {
        "name": "Peace Pagoda",
        "type": "Buddhist Monument",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Peace_Pagoda_Darjeeling.jpg/1280px-Peace_Pagoda_Darjeeling.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "mysore",
    "name": "Mysore",
    "coordinates": [
      12.2958,
      76.6394
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mysore_Palace_Morning.jpg/1280px-Mysore_Palace_Morning.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Mysore_Palace_illuminated.jpg/1280px-Mysore_Palace_illuminated.jpg"
    ],
    "description": "Known as the cultural capital of Karnataka, famous for the majestic Mysore Palace and Dasara festivities.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Radisson Blu Plaza Mysore",
          "image": "https://images.unsplash.com/photo-1759264244746-140bbbc54e1b?w=800&q=80",
          "rating": 4.5,
          "type": "Luxury",
          "priceRange": "₹7,000 - ₹20,000/night",
          "rooms": [
            {
              "type": "Superior Room",
              "price": "₹7,000/night"
            },
            {
              "type": "Business Class",
              "price": "₹12,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹20,000/night"
            }
          ]
        },
        {
          "name": "Hotel Pai Vista",
          "image": "https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?w=800&q=80",
          "rating": 4.2,
          "type": "Mid-Range",
          "priceRange": "₹3,000 - ₹7,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,000/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,000/night"
            },
            {
              "type": "Suite",
              "price": "₹7,000/night"
            }
          ]
        },
        {
          "name": "Hotel Dasaprakash",
          "image": "https://images.unsplash.com/photo-1582731489225-24fc0a720737?w=800&q=80",
          "rating": 3.9,
          "type": "Budget",
          "priceRange": "₹1,000 - ₹2,500/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹1,000/night"
            },
            {
              "type": "Deluxe AC",
              "price": "₹1,800/night"
            },
            {
              "type": "Family Suite",
              "price": "₹2,500/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mysore",
          "name": "Lalitha Mahal Palace Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1603122876935-13e7f40c3984?w=800&q=80",
            "https://images.unsplash.com/photo-1674207166635-7b2f0a58fea1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mysore Royal Biryani Veg",
              "price": "₹550"
            },
            {
              "item": "Bisi Bele Bath",
              "price": "₹350"
            },
            {
              "item": "Ragi Mudde Veg Thali",
              "price": "₹400"
            },
            {
              "item": "Mysore Pak Deluxe",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Mysore.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Mysore",
          "name": "Mylari Dosa House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1683250446695-c19b7aa80c3d?w=800&q=80",
            "https://images.unsplash.com/photo-1650205486962-93acd8d9b57b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mylari Butter Dosa",
              "price": "₹130"
            },
            {
              "item": "Maddur Vada (2 pcs)",
              "price": "₹80"
            },
            {
              "item": "Idli Sambar",
              "price": "₹90"
            },
            {
              "item": "Chicory Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Mysore",
          "name": "Mysore Palace Heritage Brews",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1599307767316-776533bb941c?w=800&q=80",
            "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso Tonic",
              "price": "₹170"
            },
            {
              "item": "Banana Bun (2 pcs)",
              "price": "₹100"
            },
            {
              "item": "Cardamom Latte",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Chamundi Hill Temple",
        "type": "Hilltop Temple",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Chamundeshwari_Temple_Mysore.jpg/1280px-Chamundeshwari_Temple_Mysore.jpg"
      },
      {
        "name": "Brindavan Gardens",
        "type": "Terrace Gardens",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Brindavan_Gardens.jpg/1280px-Brindavan_Gardens.jpg"
      },
      {
        "name": "Srirangapatna",
        "type": "Island Fortress",
        "distance": "16 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tipu_Sultan%27s_Summer_Palace_Srirangapatna.jpg/1280px-Tipu_Sultan%27s_Summer_Palace_Srirangapatna.jpg"
      },
      {
        "name": "Ranganathittu Bird Sanctuary",
        "type": "Bird Sanctuary",
        "distance": "19 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ranganathittu_Bird_Sanctuary.jpg/1280px-Ranganathittu_Bird_Sanctuary.jpg"
      },
      {
        "name": "Somnathpur Keshava Temple",
        "type": "Hoysala Architecture",
        "distance": "35 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Keshava_Temple_Somanathapura.jpg/1280px-Keshava_Temple_Somanathapura.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh",
    "coordinates": [
      30.0869,
      78.2676
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lakshman_Jhula%2C_Rishikesh.jpg/1280px-Lakshman_Jhula%2C_Rishikesh.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ganga_Aarti_at_Parmarth_Niketan%2C_Rishikesh.jpg/1280px-Ganga_Aarti_at_Parmarth_Niketan%2C_Rishikesh.jpg"
    ],
    "description": "The Yoga Capital of the World, situated beside the Ganges River at the foothills of the Himalayas.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Rishikesh",
          "image": "https://images.unsplash.com/photo-1740532603848-70f28a286183?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Rishikesh Inn",
          "image": "https://images.unsplash.com/photo-1650051313661-71790a107987?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Rishikesh",
          "image": "https://images.unsplash.com/photo-1759264244726-adde4e4318fc?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Rishikesh",
          "name": "Parmarth Heritage Sattvik",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?w=800&q=80",
            "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Tofu Palak",
              "price": "₹500"
            },
            {
              "item": "Organic Grain Thali",
              "price": "₹600"
            },
            {
              "item": "Bajra Roti",
              "price": "₹70"
            },
            {
              "item": "Coconut Chia Pudding",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Rishikesh.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Rishikesh",
          "name": "Lakshman Jhula Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1661082567990-eaef7a2328c7?w=800&q=80",
            "https://images.unsplash.com/photo-1661082565547-91c046200cc2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Aloo Puri Special",
              "price": "₹130"
            },
            {
              "item": "Garhwali Kafuli & Rice",
              "price": "₹250"
            },
            {
              "item": "Singori Sweet",
              "price": "₹120"
            },
            {
              "item": "Lemon Honey Tea",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Rishikesh",
          "name": "The Beatles Organic Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1661082568526-ca057cd3ff77?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567689-7e3e63d9912f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Matcha Latte",
              "price": "₹180"
            },
            {
              "item": "Vegan Avocado Toast",
              "price": "₹240"
            },
            {
              "item": "Gluten-Free Brownie",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Neelkanth Mahadev Temple",
        "type": "Shiva Temple",
        "distance": "32 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neelkanth_Mahadev_Temple.jpg/1024px-Neelkanth_Mahadev_Temple.jpg"
      },
      {
        "name": "Haridwar Har Ki Pauri",
        "type": "Sacred Ghat",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Har_Ki_Pauri%2C_Haridwar.jpg/1280px-Har_Ki_Pauri%2C_Haridwar.jpg"
      },
      {
        "name": "Rajaji National Park",
        "type": "Tiger Reserve",
        "distance": "18 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rajaji_National_Park.jpg/1280px-Rajaji_National_Park.jpg"
      },
      {
        "name": "Beatles Ashram",
        "type": "Historical Ashram",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Beatles_ashram_rishikesh.jpg/1280px-Beatles_ashram_rishikesh.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "amritsar",
    "name": "Amritsar",
    "coordinates": [
      31.634,
      74.8723
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Golden_Temple%2C_Amritsar_10.jpg/1280px-Golden_Temple%2C_Amritsar_10.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jallianwala_Bagh%2C_Amritsar%2C_Punjab%2C_India.jpg/1280px-Jallianwala_Bagh%2C_Amritsar%2C_Punjab%2C_India.jpg"
    ],
    "description": "The cultural and spiritual center of the Sikh religion, home to the glorious Golden Temple.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Hyatt Amritsar",
          "image": "https://images.unsplash.com/photo-1758380388614-66e9fd1aa159?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹8,000 - ₹25,000/night",
          "rooms": [
            {
              "type": "King Room",
              "price": "₹8,000/night"
            },
            {
              "type": "Regency Suite",
              "price": "₹16,000/night"
            },
            {
              "type": "Presidential Suite",
              "price": "₹25,000/night"
            }
          ]
        },
        {
          "name": "Hotel Narula's Aurrum",
          "image": "https://images.unsplash.com/photo-1631015108709-db4bea2690f9?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Hotel Grace Amritsar",
          "image": "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?w=800&q=80",
          "rating": 4,
          "type": "Budget",
          "priceRange": "₹800 - ₹2,500/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹800/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹1,500/night"
            },
            {
              "type": "Family Room",
              "price": "₹2,500/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Amritsar",
          "name": "Amritsari Shahi Haveli",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1762867994090-98c7c18220ba?w=800&q=80",
            "https://images.unsplash.com/photo-1779819710373-dfa62b71e093?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Tandoori Chicken Grand",
              "price": "₹850"
            },
            {
              "item": "Dal Makhani Shahi",
              "price": "₹550"
            },
            {
              "item": "Laccha Paratha",
              "price": "₹70"
            },
            {
              "item": "Kulfi Falooda",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Amritsar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Amritsar",
          "name": "Kesar Da Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1661082568806-a4e3d67058a5?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567938-2fc714b8c187?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Amritsari Kulcha Thali",
              "price": "₹280"
            },
            {
              "item": "Sarson ka Saag",
              "price": "₹300"
            },
            {
              "item": "Makki di Roti",
              "price": "₹60"
            },
            {
              "item": "Jumbo Sweet Lassi",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Amritsar",
          "name": "The Heritage Kulcha Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1696756761659-6fcbfd0a3c59?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567779-4fd2e1cb7662?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Macchiato",
              "price": "₹160"
            },
            {
              "item": "Keema Samosa",
              "price": "₹180"
            },
            {
              "item": "Butter Cookie Chai",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Wagah Border Ceremony",
        "type": "International Border",
        "distance": "28 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wagah_border_ceremony.jpg/1280px-Wagah_border_ceremony.jpg"
      },
      {
        "name": "Jallianwala Bagh",
        "type": "National Memorial",
        "distance": "1 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jallianwala_Bagh%2C_Amritsar%2C_Punjab%2C_India.jpg/1280px-Jallianwala_Bagh%2C_Amritsar%2C_Punjab%2C_India.jpg"
      },
      {
        "name": "Durgiana Temple",
        "type": "Hindu Temple",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Durgiana_Temple%2C_Amritsar.jpg/1280px-Durgiana_Temple%2C_Amritsar.jpg"
      },
      {
        "name": "Gobindgarh Fort",
        "type": "Sikh Heritage Fort",
        "distance": "2 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Gobindgarh_Fort.jpg/1280px-Gobindgarh_Fort.jpg"
      },
      {
        "name": "Pul Kanjri Heritage Site",
        "type": "Historical Monument",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pul_Kanjari.jpg/1280px-Pul_Kanjari.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "coordinates": [
      24.5854,
      73.7125
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Udaipur_City_Palace.jpg/1280px-Udaipur_City_Palace.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lake_Pichola%2C_Udaipur%2C_Rajasthan.jpg/1280px-Lake_Pichola%2C_Udaipur%2C_Rajasthan.jpg"
    ],
    "description": "The City of Lakes, crowned by the majestic City Palace overlooking Lake Pichola.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Udaipur",
          "image": "https://images.unsplash.com/photo-1638277000768-005d326db4b2?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Udaipur Inn",
          "image": "https://images.unsplash.com/photo-1780689436914-2e87323985e9?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Udaipur",
          "image": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Udaipur",
          "name": "North Indian Shahi Dining - Udaipur",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661695013455-b2edf4983179?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283125-de3eb701167b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Paneer Butter Masala",
              "price": "₹500"
            },
            {
              "item": "Dal Makhani",
              "price": "₹450"
            },
            {
              "item": "Garlic Naan",
              "price": "₹70"
            },
            {
              "item": "Shahi Tukda",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Udaipur.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Udaipur",
          "name": "Local Punjabi Dhaba - Udaipur",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1779282833204-076de40e621f?w=800&q=80",
            "https://images.unsplash.com/photo-1722886705787-4b8d676309fa?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Aloo Paratha (2 pcs)",
              "price": "₹150"
            },
            {
              "item": "Chana Masala & Rice",
              "price": "₹240"
            },
            {
              "item": "Veg Momos",
              "price": "₹140"
            },
            {
              "item": "Ginger Tea",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Udaipur",
          "name": "Himalayan View Cafe - Udaipur",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1763951719372-966cd0b75672?w=800&q=80",
            "https://images.unsplash.com/photo-1779384110912-f3ff2616759c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹140"
            },
            {
              "item": "Apple Cinnamon Muffin",
              "price": "₹120"
            },
            {
              "item": "Fresh Mint Lemonade",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Kumbhalgarh Fort",
        "type": "UNESCO Heritage Fort",
        "distance": "85 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kumbhalgarh_Fort.jpg/1280px-Kumbhalgarh_Fort.jpg"
      },
      {
        "name": "Ranakpur Jain Temple",
        "type": "Jain Temple",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ranakpur_Jain_temple.jpg/1280px-Ranakpur_Jain_temple.jpg"
      },
      {
        "name": "Chittorgarh Fort",
        "type": "Heritage Fort",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chittorgarh_fort01.jpg/1280px-Chittorgarh_fort01.jpg"
      },
      {
        "name": "Sajjangarh Palace",
        "type": "Monsoon Palace",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Monsoon_Palace_Udaipur.jpg/1280px-Monsoon_Palace_Udaipur.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "shimla",
    "name": "Shimla",
    "coordinates": [
      31.1048,
      77.1734
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Christ_Church%2C_Shimla%2C_India.jpg/1024px-Christ_Church%2C_Shimla%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ridge-Shimla.JPG/1280px-Ridge-Shimla.JPG"
    ],
    "description": "A charming hill station and former summer capital of British India with distinct colonial architecture.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Wildflower Hall, Oberoi",
          "image": "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80",
          "rating": 4.9,
          "type": "Luxury",
          "priceRange": "₹25,000 - ₹80,000/night",
          "rooms": [
            {
              "type": "Deluxe Valley View",
              "price": "₹25,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹50,000/night"
            },
            {
              "type": "Lord Kitchener Suite",
              "price": "₹80,000/night"
            }
          ]
        },
        {
          "name": "Hotel Combermere",
          "image": "https://images.unsplash.com/photo-1576354302919-96748cb8299e?w=800&q=80",
          "rating": 4.2,
          "type": "Heritage Mid-Range",
          "priceRange": "₹3,000 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,000/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Hotel Dreamland",
          "image": "https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15?w=800&q=80",
          "rating": 3.8,
          "type": "Budget",
          "priceRange": "₹800 - ₹2,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹800/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹1,500/night"
            },
            {
              "type": "Family Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Shimla",
          "name": "The Ridge View Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1734330931856-77cdf1b5bba9?w=800&q=80",
            "https://images.unsplash.com/photo-1763951718802-39ebd3a4f302?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chha Gosht",
              "price": "₹800"
            },
            {
              "item": "Kadhi Dham",
              "price": "₹500"
            },
            {
              "item": "Red Rice Pulao",
              "price": "₹320"
            },
            {
              "item": "Apple Pie",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Shimla.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Shimla",
          "name": "Himachali Dham House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1763952180307-f018f9c41453?w=800&q=80",
            "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Siddu with Ghee",
              "price": "₹150"
            },
            {
              "item": "Himachali Dham Thali",
              "price": "₹300"
            },
            {
              "item": "Babru Snack",
              "price": "₹90"
            },
            {
              "item": "Ginger Honey Tea",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Shimla",
          "name": "Mall Road Coffee Brews",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1663078779386-a9c514eccc6b?w=800&q=80",
            "https://images.unsplash.com/photo-1722573783453-2976e515fe3b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹120"
            },
            {
              "item": "Chicken Club Sandwich",
              "price": "₹200"
            },
            {
              "item": "Apple Cinnamon Cake",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Kufri",
        "type": "Hill Station",
        "distance": "16 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kufri_Shimla.jpg/1280px-Kufri_Shimla.jpg"
      },
      {
        "name": "Chail Palace",
        "type": "Heritage Palace",
        "distance": "44 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Chail_Palace_Himachal.jpg/1280px-Chail_Palace_Himachal.jpg"
      },
      {
        "name": "Naldehra Golf Course",
        "type": "Hill Resort",
        "distance": "22 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Naldehra_Golf_Course.jpg/1280px-Naldehra_Golf_Course.jpg"
      },
      {
        "name": "Jakhu Temple",
        "type": "Hanuman Temple",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jakhu_Temple_Shimla.jpg/800px-Jakhu_Temple_Shimla.jpg"
      },
      {
        "name": "Mashobra",
        "type": "Scenic Town",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mashobra_view.jpg/1280px-Mashobra_view.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "ooty",
    "name": "Ooty",
    "coordinates": [
      11.4102,
      76.695
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ooty_Lake%2C_India.jpg/1280px-Ooty_Lake%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nilgiri_Mountain_Railway_on_Viaduct.jpg/1280px-Nilgiri_Mountain_Railway_on_Viaduct.jpg"
    ],
    "description": "Known as the Queen of Hill Stations, offering picturesque views of the Nilgiri hills and sprawling tea gardens.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Ooty",
          "image": "https://images.unsplash.com/photo-1611971263023-105938ce12ed?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Ooty Inn",
          "image": "https://images.unsplash.com/photo-1631048649038-e31d38df5a25?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Ooty",
          "image": "https://images.unsplash.com/photo-1631049035433-4409c68ca6cf?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ooty",
          "name": "Nilgiri Mountain Peak Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1707995513187-1a01ac9d5018?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283118-31e7f6c96d0d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Nilgiri Chicken Korma",
              "price": "₹750"
            },
            {
              "item": "Paneer Nilgiri Korma",
              "price": "₹600"
            },
            {
              "item": "Steamed Basmati Rice",
              "price": "₹150"
            },
            {
              "item": "Ooty Fudge Cake",
              "price": "₹240"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Ooty.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Ooty",
          "name": "Ooty Local Tea Garden Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779448-4cafe7f24d3c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Ooty Varkey & Tea",
              "price": "₹100"
            },
            {
              "item": "South Indian Thali",
              "price": "₹240"
            },
            {
              "item": "Tomato Rasam with Rice",
              "price": "₹180"
            },
            {
              "item": "Hot Masala Chai",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Ooty",
          "name": "Ooty Chocolate & Coffee House",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1663078779382-b21066ffca6c?w=800&q=80",
            "https://images.unsplash.com/photo-1676198082051-2e5bd135141d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Hot Chocolate (Ooty Cocoa)",
              "price": "₹180"
            },
            {
              "item": "Ooty Homemade Chocolates",
              "price": "₹150"
            },
            {
              "item": "Green Tea Cup",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Coonoor",
        "type": "Hill Station",
        "distance": "19 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Coonoor_hillstation.jpg/1280px-Coonoor_hillstation.jpg"
      },
      {
        "name": "Doddabetta Peak",
        "type": "Highest Point in Nilgiris",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Doddabetta_Peak.jpg/1280px-Doddabetta_Peak.jpg"
      },
      {
        "name": "Mudumalai Tiger Reserve",
        "type": "Wildlife Reserve",
        "distance": "64 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mudumalai_National_Park.jpg/1280px-Mudumalai_National_Park.jpg"
      },
      {
        "name": "Pykara Falls",
        "type": "Waterfall",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pykara_Falls_Ooty.jpg/800px-Pykara_Falls_Ooty.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "andaman",
    "name": "Andaman Islands",
    "coordinates": [
      11.7401,
      92.6586
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Radhanagar_Beach%2C_Andaman.JPG/1280px-Radhanagar_Beach%2C_Andaman.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cellular_Jail%2C_Port_Blair%2C_Andaman_%26_Nicobar_Islands.jpg/1280px-Cellular_Jail%2C_Port_Blair%2C_Andaman_%26_Nicobar_Islands.jpg"
    ],
    "description": "A tropical paradise featuring pristine white-sand beaches, vibrant coral reefs, and dense rainforests.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Andaman Islands",
          "image": "https://images.unsplash.com/photo-1631049035634-c04c637651b1?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Andaman Islands Inn",
          "image": "https://images.unsplash.com/photo-1631049035486-58f342e9c6a9?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Andaman Islands",
          "image": "https://images.unsplash.com/photo-1631049422186-4b0569fed517?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Andaman Islands",
          "name": "Havelock Island Shells",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1681900162312-4f8bf837c607?w=800&q=80",
            "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Lobster Thermidor",
              "price": "₹1800"
            },
            {
              "item": "Grilled Red Snapper",
              "price": "₹950"
            },
            {
              "item": "Coconut Prawn Curry",
              "price": "₹750"
            },
            {
              "item": "Tropical Fruit Platter",
              "price": "₹300"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Andaman Islands.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Andaman Islands",
          "name": "Andaman Seafood Hub",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1661082564713-704ac5cf1a2b?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568071-46cc4e019730?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Crab Masala",
              "price": "₹600"
            },
            {
              "item": "Andaman Fish Curry",
              "price": "₹450"
            },
            {
              "item": "Steamed Rice",
              "price": "₹100"
            },
            {
              "item": "Coconut Water",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Andaman Islands",
          "name": "Port Blair Bay Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082567738-16bcc30e40e1?w=800&q=80",
            "https://images.unsplash.com/photo-1661082564813-c0c2e7feddbd?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Affogato",
              "price": "₹200"
            },
            {
              "item": "Grilled Fish Sandwich",
              "price": "₹220"
            },
            {
              "item": "Fresh Mango Juice",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Havelock Island (Swaraj Dweep)",
        "type": "Tropical Island",
        "distance": "57 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Radhanagar_Beach%2C_Andaman.JPG/1280px-Radhanagar_Beach%2C_Andaman.JPG"
      },
      {
        "name": "Neil Island (Shaheed Dweep)",
        "type": "Coral Island",
        "distance": "37 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Laxmanpur_Beach%2C_Neil_Island.jpg/1280px-Laxmanpur_Beach%2C_Neil_Island.jpg"
      },
      {
        "name": "Cellular Jail",
        "type": "National Memorial",
        "distance": "2 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cellular_Jail%2C_Port_Blair%2C_Andaman_%26_Nicobar_Islands.jpg/1280px-Cellular_Jail%2C_Port_Blair%2C_Andaman_%26_Nicobar_Islands.jpg"
      },
      {
        "name": "Ross Island",
        "type": "Colonial Ruins",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ross_Island_Andaman.jpg/1280px-Ross_Island_Andaman.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer",
    "coordinates": [
      26.9157,
      70.9083
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jaisalmer_forteresse.jpg/1280px-Jaisalmer_forteresse.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sam_Sand_Dunes%2C_Jaisalmer.jpg/1280px-Sam_Sand_Dunes%2C_Jaisalmer.jpg"
    ],
    "description": "The Golden City, standing proudly in the heart of the Thar Desert, dominated by the majestic Jaisalmer Fort.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Suryagarh Jaisalmer",
          "image": "https://images.unsplash.com/photo-1631049035260-64d09b5d6912?w=800&q=80",
          "rating": 4.9,
          "type": "Luxury Heritage",
          "priceRange": "₹15,000 - ₹50,000/night",
          "rooms": [
            {
              "type": "Heritage Room",
              "price": "₹15,000/night"
            },
            {
              "type": "Luxury Suite",
              "price": "₹30,000/night"
            },
            {
              "type": "Maharaja Suite",
              "price": "₹50,000/night"
            }
          ]
        },
        {
          "name": "Hotel Nachana Haveli",
          "image": "https://images.unsplash.com/photo-1631049035257-02039c597992?w=800&q=80",
          "rating": 4.4,
          "type": "Heritage Mid-Range",
          "priceRange": "₹3,000 - ₹8,000/night",
          "rooms": [
            {
              "type": "Heritage Room",
              "price": "₹3,000/night"
            },
            {
              "type": "Haveli Suite",
              "price": "₹5,500/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Hotel Renuka Jaisalmer",
          "image": "https://images.unsplash.com/photo-1742226789249-32cfaac0ff5e?w=800&q=80",
          "rating": 4,
          "type": "Budget",
          "priceRange": "₹700 - ₹2,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹700/night"
            },
            {
              "type": "AC Deluxe",
              "price": "₹1,200/night"
            },
            {
              "type": "Fort View Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Jaisalmer",
          "name": "Desert Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082568225-64153ac360f2?w=800&q=80",
            "https://images.unsplash.com/photo-1582136092024-ca76695e30a8?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Rajasthani Kadhi",
              "price": "₹450"
            },
            {
              "item": "Gatte ki Sabzi",
              "price": "₹550"
            },
            {
              "item": "Bajra Roti",
              "price": "₹60"
            },
            {
              "item": "Desert Malpua",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Jaisalmer.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Jaisalmer",
          "name": "Thar Desert Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1779912602687-c0d380ce3c76?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568686-386e82833489?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Ker Sangri Thali",
              "price": "₹320"
            },
            {
              "item": "Dal Kachori",
              "price": "₹70"
            },
            {
              "item": "Gatte ka Pulao",
              "price": "₹280"
            },
            {
              "item": "Buttermilk",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Jaisalmer",
          "name": "Fort Gate Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082568303-7c51a31e5d13?w=800&q=80",
            "https://images.unsplash.com/photo-1583415466047-fdae781947b1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹140"
            },
            {
              "item": "Cheese Garlic Naan Roll",
              "price": "₹180"
            },
            {
              "item": "Iced Tea",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Sam Sand Dunes",
        "type": "Desert Dunes",
        "distance": "42 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Sam_Sand_Dunes%2C_Jaisalmer.jpg/1280px-Sam_Sand_Dunes%2C_Jaisalmer.jpg"
      },
      {
        "name": "Kuldhara Abandoned Village",
        "type": "Ghost Village",
        "distance": "18 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kuldhara_Village_Jaisalmer.jpg/1280px-Kuldhara_Village_Jaisalmer.jpg"
      },
      {
        "name": "Tanot Mata Temple",
        "type": "Border Temple",
        "distance": "97 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tanot_Mata_Temple.jpg/1024px-Tanot_Mata_Temple.jpg"
      },
      {
        "name": "Bada Bagh Cenotaphs",
        "type": "Royal Cenotaphs",
        "distance": "6 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bada_Bagh_Jaisalmer.jpg/1280px-Bada_Bagh_Jaisalmer.jpg"
      },
      {
        "name": "Patwon Ki Haveli",
        "type": "Heritage Mansion",
        "distance": "1 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Patwon_ki_Haveli.jpg/800px-Patwon_ki_Haveli.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "delhi",
    "name": "New Delhi",
    "coordinates": [
      28.6139,
      77.209
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/India_Gate_in_New_Delhi_03-2016.jpg/1280px-India_Gate_in_New_Delhi_03-2016.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lotus_Temple_in_New_Delhi_03-2016.jpg/1280px-Lotus_Temple_in_New_Delhi_03-2016.jpg"
    ],
    "description": "A vibrant metropolis blending a rich historical past with completely modern urban infrastructure.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage New Delhi",
          "image": "https://images.unsplash.com/photo-1630660664869-c9d3cc676880?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel New Delhi Inn",
          "image": "https://images.unsplash.com/photo-1631048648924-e8723adbf571?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's New Delhi",
          "image": "https://images.unsplash.com/photo-1631049421573-fd6aab86e763?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_New Delhi",
          "name": "Imperial Mughlai Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1661082568457-7451acdfc6a7?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283270-3c61d71e6120?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Nalli Nihari",
              "price": "₹950"
            },
            {
              "item": "Murg Butter Masala",
              "price": "₹750"
            },
            {
              "item": "Khamiri Roti",
              "price": "₹80"
            },
            {
              "item": "Shahi Tukda",
              "price": "₹280"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in New Delhi.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_New Delhi",
          "name": "Chandni Chowk Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1774979160994-3306b4872084?w=800&q=80",
            "https://images.unsplash.com/photo-1691958215011-6800e0a058b0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Old Delhi Chole Bhature",
              "price": "₹180"
            },
            {
              "item": "Butter Chicken Tikka",
              "price": "₹450"
            },
            {
              "item": "Dal Fry & Rice",
              "price": "₹220"
            },
            {
              "item": "Rabdi Falooda",
              "price": "₹140"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_New Delhi",
          "name": "Connaught Place Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1761662826177-a50286fe7eef?w=800&q=80",
            "https://images.unsplash.com/photo-1610596672499-c0d20c9ee707?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pour Over Coffee",
              "price": "₹220"
            },
            {
              "item": "Avocado Toast",
              "price": "₹260"
            },
            {
              "item": "Red Velvet Cake",
              "price": "₹180"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Qutub Minar",
        "type": "UNESCO Heritage",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Qutb_Minar_2.jpg/800px-Qutb_Minar_2.jpg"
      },
      {
        "name": "Humayun's Tomb",
        "type": "Mughal Heritage",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Humayun%27s_Tomb%2C_Delhi.jpg/1280px-Humayun%27s_Tomb%2C_Delhi.jpg"
      },
      {
        "name": "Akshardham Temple",
        "type": "Modern Temple",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Akshardham_Delhi.jpg/1280px-Akshardham_Delhi.jpg"
      },
      {
        "name": "Red Fort",
        "type": "Mughal Fort",
        "distance": "8 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Red_Fort_in_Delhi_03-2016.jpg/1280px-Red_Fort_in_Delhi_03-2016.jpg"
      },
      {
        "name": "Sultanpur National Park",
        "type": "Bird Sanctuary",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sultanpur_National_Park.jpg/1280px-Sultanpur_National_Park.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "manali",
    "name": "Manali",
    "coordinates": [
      32.2396,
      77.1887
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solang_Valley%2C_Manali.jpg/1280px-Solang_Valley%2C_Manali.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Rohtang_Pass%2C_Manali.jpg/1280px-Rohtang_Pass%2C_Manali.jpg"
    ],
    "description": "A high-altitude Himalayan resort town popular for backpacking and honeymooning.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "The Himalayan",
          "image": "https://images.unsplash.com/photo-1689729739836-7fcc2c84d788?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹40,000/night",
          "rooms": [
            {
              "type": "Valley View Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹25,000/night"
            },
            {
              "type": "Presidential Suite",
              "price": "₹40,000/night"
            }
          ]
        },
        {
          "name": "Johnson Lodge",
          "image": "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
          "rating": 4.4,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹9,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹6,000/night"
            },
            {
              "type": "Family Suite",
              "price": "₹9,000/night"
            }
          ]
        },
        {
          "name": "Zostel Manali",
          "image": "https://images.unsplash.com/photo-1631049035113-4a68ecf80b1c?w=800&q=80",
          "rating": 4.3,
          "type": "Budget",
          "priceRange": "₹500 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹500/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Mountain View Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Manali",
          "name": "Solang Valley Grand",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Trout Fish Fry",
              "price": "₹850"
            },
            {
              "item": "Kullu Dham Special",
              "price": "₹650"
            },
            {
              "item": "Tandoori Roti",
              "price": "₹50"
            },
            {
              "item": "Hot Chocolate",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Manali.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Manali",
          "name": "Hadimba local kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?w=800&q=80",
            "https://images.unsplash.com/photo-1728910758653-7e990e489cac?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Local Siddu Veg",
              "price": "₹120"
            },
            {
              "item": "Steamed Momos Chicken",
              "price": "₹180"
            },
            {
              "item": "Thukpa Noodle Soup",
              "price": "₹220"
            },
            {
              "item": "Local Rice Beer (Chhang)",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Manali",
          "name": "Old Manali Hippie Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1771694583810-db9568dc9b8d?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475862-336b65f571a3?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Flat White",
              "price": "₹160"
            },
            {
              "item": "Nutella Crepe",
              "price": "₹200"
            },
            {
              "item": "Yak Cheese Pizza",
              "price": "₹350"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Solang Valley",
        "type": "Adventure Sports",
        "distance": "14 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solang_Valley%2C_Manali.jpg/1280px-Solang_Valley%2C_Manali.jpg"
      },
      {
        "name": "Rohtang Pass",
        "type": "Mountain Pass",
        "distance": "51 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Rohtang_Pass%2C_Manali.jpg/1280px-Rohtang_Pass%2C_Manali.jpg"
      },
      {
        "name": "Naggar Castle",
        "type": "Heritage Castle",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Naggar_Castle.jpg/1280px-Naggar_Castle.jpg"
      },
      {
        "name": "Kullu Valley",
        "type": "Valley Town",
        "distance": "40 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kullu_Valley.jpg/1280px-Kullu_Valley.jpg"
      },
      {
        "name": "Hadimba Devi Temple",
        "type": "Ancient Temple",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hadimba_Devi_Temple%2C_Manali.jpg/800px-Hadimba_Devi_Temple%2C_Manali.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "pondicherry",
    "name": "Pondicherry",
    "coordinates": [
      11.9416,
      79.8083
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Auroville_Matrimandir.jpg/1280px-Auroville_Matrimandir.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/French_Colony_Pondicherry.jpg/1280px-French_Colony_Pondicherry.jpg"
    ],
    "description": "The French Riviera of the East, famed for its charming mustard-yellow colonial villas and tranquil beaches.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Pondicherry",
          "image": "https://images.unsplash.com/photo-1631049035115-f96132761a38?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Pondicherry Inn",
          "image": "https://images.unsplash.com/photo-1631049307421-2ee48a375aca?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Pondicherry",
          "image": "https://images.unsplash.com/photo-1631048835388-46642de1582e?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pondicherry",
          "name": "French Quarter Chateau",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1642524957029-e4fcbcea0257?w=800&q=80",
            "https://images.unsplash.com/photo-1769766319375-1c384e4355d6?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Creole Fish Curry",
              "price": "₹850"
            },
            {
              "item": "Coq au Vin French style",
              "price": "₹950"
            },
            {
              "item": "French Onion Soup",
              "price": "₹350"
            },
            {
              "item": "Crème Brûlée",
              "price": "₹280"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Pondicherry.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Pondicherry",
          "name": "Pondicherry Tamil Creole Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568383-d31c9a87061f?w=800&q=80",
            "https://images.unsplash.com/photo-1678781398373-c728751d5d8f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Spicy Tamil Seafood Fry",
              "price": "₹550"
            },
            {
              "item": "Pondicherry Fish Thali",
              "price": "₹350"
            },
            {
              "item": "Mutton Samosa (2 pcs)",
              "price": "₹120"
            },
            {
              "item": "Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Pondicherry",
          "name": "Auroville Matrimandir Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1662048504895-f11b7c3b8cc2?w=800&q=80",
            "https://images.unsplash.com/photo-1764955193589-f5db4261e02c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "French Croissant",
              "price": "₹120"
            },
            {
              "item": "Cappuccino Espresso",
              "price": "₹150"
            },
            {
              "item": "Orange Tart",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Auroville",
        "type": "Universal Township",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Auroville_Matrimandir.jpg/1280px-Auroville_Matrimandir.jpg"
      },
      {
        "name": "Chidambaram Nataraja Temple",
        "type": "Ancient Temple",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Chidambaram_temple.jpg/1280px-Chidambaram_temple.jpg"
      },
      {
        "name": "Paradise Beach",
        "type": "Secluded Beach",
        "distance": "8 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Pondicherry_beach.jpg/1280px-Pondicherry_beach.jpg"
      },
      {
        "name": "Mahabalipuram Shore Temple",
        "type": "UNESCO Heritage",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shore_Temple_1.JPG/1280px-Shore_Temple_1.JPG"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "coorg",
    "name": "Coorg",
    "coordinates": [
      12.3375,
      75.8069
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Abbey_Falls%2C_Coorg.jpg/1280px-Abbey_Falls%2C_Coorg.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Talacauvery_Temple%2C_Coorg.jpg/1280px-Talacauvery_Temple%2C_Coorg.jpg"
    ],
    "description": "The Scotland of India, known for misty hills, lush teals, coffee estates, and orange groves.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Coorg",
          "image": "https://images.unsplash.com/photo-1631048834912-2cc32442873c?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Coorg Inn",
          "image": "https://images.unsplash.com/photo-1631049035227-57752420e957?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Coorg",
          "image": "https://images.unsplash.com/photo-1631049307305-1ceea96fb0e1?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Coorg",
          "name": "The Kodava Spice Plantation",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1690915475901-6c08af925906?w=800&q=80",
            "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Coorg Pandi Pork Curry",
              "price": "₹750"
            },
            {
              "item": "Chicken Kadamputtu",
              "price": "₹650"
            },
            {
              "item": "Akki Roti with Ghee",
              "price": "₹90"
            },
            {
              "item": "Coorg Honey Tart",
              "price": "₹240"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Coorg.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Coorg",
          "name": "Madikeri Pandi House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1764699486820-30a00e6ded7a?w=800&q=80",
            "https://images.unsplash.com/photo-1773419808002-bab9e1f840a0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pork Fry Dry",
              "price": "₹450"
            },
            {
              "item": "Kodava Veg Thali",
              "price": "₹280"
            },
            {
              "item": "Kadamputtu (Steam Balls)",
              "price": "₹100"
            },
            {
              "item": "Estate Filter Coffee",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Coorg",
          "name": "Coffee Estate Lounge",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1661082567428-0edf5319f315?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568142-5204c2aed26e?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Drip Coffee",
              "price": "₹200"
            },
            {
              "item": "Banana Walnut Cake",
              "price": "₹150"
            },
            {
              "item": "Cardamom Cookie",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Abbey Falls",
        "type": "Waterfall",
        "distance": "8 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Abbey_Falls%2C_Coorg.jpg/1280px-Abbey_Falls%2C_Coorg.jpg"
      },
      {
        "name": "Nagarhole National Park",
        "type": "Tiger Reserve",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Nagarhole_National_Park.jpg/1280px-Nagarhole_National_Park.jpg"
      },
      {
        "name": "Talacauvery",
        "type": "River Source Temple",
        "distance": "48 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Talacauvery_Temple%2C_Coorg.jpg/1280px-Talacauvery_Temple%2C_Coorg.jpg"
      },
      {
        "name": "Dubare Elephant Camp",
        "type": "Wildlife Experience",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dubare_Elephant_Camp.jpg/1280px-Dubare_Elephant_Camp.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "khajuraho",
    "name": "Khajuraho",
    "coordinates": [
      24.8318,
      79.9199
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kandariya_Mahadeo_Temple%2C_Khajuraho%2C_India.jpg/1280px-Kandariya_Mahadeo_Temple%2C_Khajuraho%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Lakshmana_Temple%2C_Khajuraho_02.jpg/1280px-Lakshmana_Temple%2C_Khajuraho_02.jpg"
    ],
    "description": "Renowned for its stunning ancient temples showcasing intricate erotic and architectural carvings.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Khajuraho",
          "image": "https://images.unsplash.com/photo-1544097935-e6d136448533?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Khajuraho Inn",
          "image": "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Khajuraho",
          "image": "https://images.unsplash.com/photo-1689729738920-edea97589328?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Khajuraho",
          "name": "Bundelkhandi Temple View",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1661082567019-f21649afbeb7?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568186-0c7fa3505108?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Bundelkhandi Mawa Bati",
              "price": "₹250"
            },
            {
              "item": "Shahi Kaju Curry",
              "price": "₹550"
            },
            {
              "item": "Palak Paneer",
              "price": "₹450"
            },
            {
              "item": "Garlic Butter Naan",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Khajuraho.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Khajuraho",
          "name": "Khajuraho Local Heritage Rasoi",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1661082568519-6f0429c94871?w=800&q=80",
            "https://images.unsplash.com/photo-1661082569345-011c1d412af6?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Alu Paratha Ghee",
              "price": "₹120"
            },
            {
              "item": "Aloo Gobhi & Roti",
              "price": "₹180"
            },
            {
              "item": "Dal Fry & Jeera Rice",
              "price": "₹220"
            },
            {
              "item": "Lassi",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Khajuraho",
          "name": "Kamandalu Temple Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779530-cb62ed5dcd07?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso Coffee",
              "price": "₹130"
            },
            {
              "item": "Vegetable Sandwich",
              "price": "₹130"
            },
            {
              "item": "Lemon Mint Ice Tea",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Panna National Park",
        "type": "Tiger Reserve",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Panna_National_Park.jpg/1280px-Panna_National_Park.jpg"
      },
      {
        "name": "Raneh Falls",
        "type": "Canyon & Waterfall",
        "distance": "20 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Raneh_Falls.jpg/1280px-Raneh_Falls.jpg"
      },
      {
        "name": "Kalinjar Fort",
        "type": "Ancient Fort",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Kalinjar_Fort.jpg/1280px-Kalinjar_Fort.jpg"
      },
      {
        "name": "Ajaigarh Fort",
        "type": "Hilltop Fort",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ajaigarh_Fort.jpg/1024px-Ajaigarh_Fort.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kaziranga",
    "name": "Kaziranga",
    "coordinates": [
      26.5775,
      93.1711
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Indian_rhinoceros_%28Rhinoceros_unicornis%29_at_Kaziranga_National_Park.jpg/1280px-Indian_rhinoceros_%28Rhinoceros_unicornis%29_at_Kaziranga_National_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Kaziranga_Elephant.jpg/1280px-Kaziranga_Elephant.jpg"
    ],
    "description": "A UNESCO World Heritage site and the sanctuary for the highest density of one-horned rhinoceroses.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Kaziranga",
          "image": "https://images.unsplash.com/photo-1664227430717-9a62112984cf?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Kaziranga Inn",
          "image": "https://images.unsplash.com/photo-1661872952496-e4e3833d2fdf?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Kaziranga",
          "image": "https://images.unsplash.com/photo-1651513825857-9fda9d5729fe?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kaziranga",
          "name": "Assam Rhino Safari Lodge",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082568527-f12d7bd9d29d?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283118-e188f63df7ec?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Duck Curry with Ash Gourd",
              "price": "₹850"
            },
            {
              "item": "Fish Tenga (Sour Curry)",
              "price": "₹750"
            },
            {
              "item": "Johaprashad Pulao",
              "price": "₹380"
            },
            {
              "item": "Pitha Platter Sweet",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Kaziranga.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Kaziranga",
          "name": "Assamese local kitchen (Aatithya)",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1678781283129-a403c3dc8823?w=800&q=80",
            "https://images.unsplash.com/photo-1722886689077-d22d8fc2a305?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Assamese Thali (Khar & Tenga)",
              "price": "₹280"
            },
            {
              "item": "Bamboo Shoot Mutton",
              "price": "₹550"
            },
            {
              "item": "Masor Tenga Fish Fry",
              "price": "₹450"
            },
            {
              "item": "Assam CTC Tea",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Kaziranga",
          "name": "Jorhat Tea Estate Lounge",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1763951719000-661d3d50d763?w=800&q=80",
            "https://images.unsplash.com/photo-1585742440646-60adcd5a06d0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹120"
            },
            {
              "item": "Assam Tea Cake",
              "price": "₹140"
            },
            {
              "item": "Lemon Grass Iced Tea",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Majuli Island",
        "type": "River Island",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Majuli.jpg/1280px-Majuli.jpg"
      },
      {
        "name": "Gibbon Wildlife Sanctuary",
        "type": "Primate Sanctuary",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hoolock_gibbon.jpg/800px-Hoolock_gibbon.jpg"
      },
      {
        "name": "Tea Gardens of Jorhat",
        "type": "Tea Plantation",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Tea_garden_in_Assam.jpg/1280px-Tea_garden_in_Assam.jpg"
      },
      {
        "name": "Kakochang Falls",
        "type": "Waterfall",
        "distance": "40 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kakochang_Waterfall.jpg/800px-Kakochang_Waterfall.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "gokarna",
    "name": "Gokarna",
    "coordinates": [
      14.5398,
      74.3184
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Om_Beach%2C_Gokarna.jpg/1280px-Om_Beach%2C_Gokarna.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Gokarna_Mahabaleshwar_Temple.jpg/1024px-Gokarna_Mahabaleshwar_Temple.jpg"
    ],
    "description": "A laid-back town offering pristine beaches like Om Beach alongside sacred Hindu pilgrimage sites.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Gokarna",
          "image": "https://images.unsplash.com/photo-1765775635143-6462630748ef?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Gokarna Inn",
          "image": "https://images.unsplash.com/photo-1775866914882-9f0d58aa3372?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Gokarna",
          "image": "https://images.unsplash.com/photo-1740047957754-d58c4b653112?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Gokarna",
          "name": "Om Beach Cliff Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?w=800&q=80",
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Butter Garlic Crab",
              "price": "₹950"
            },
            {
              "item": "Surmai Fry",
              "price": "₹650"
            },
            {
              "item": "Neer Dosa with Fish",
              "price": "₹350"
            },
            {
              "item": "Coconut Souffle",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Gokarna.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Gokarna",
          "name": "Gokarna Coastal Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1643757343278-5d50309dfa44?w=800&q=80",
            "https://images.unsplash.com/photo-1603122876935-13e7f40c3984?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mangalorean Fish Curry",
              "price": "₹380"
            },
            {
              "item": "Banana Leaf Veg Thali",
              "price": "₹200"
            },
            {
              "item": "Prawn Ghee Roast",
              "price": "₹480"
            },
            {
              "item": "Sol Kadi",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Gokarna",
          "name": "Namaste Cafe Corner",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1674207166635-7b2f0a58fea1?w=800&q=80",
            "https://images.unsplash.com/photo-1683250446695-c19b7aa80c3d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹120"
            },
            {
              "item": "Nutella Pancake",
              "price": "₹180"
            },
            {
              "item": "Sea Salt Lemonade",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Murudeshwar Temple & Shiva Statue",
        "type": "Coastal Temple",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Murdeshwar_temple.jpg/1280px-Murdeshwar_temple.jpg"
      },
      {
        "name": "Mirjan Fort",
        "type": "Coastal Fort",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mirjan_Fort.jpg/1280px-Mirjan_Fort.jpg"
      },
      {
        "name": "Yana Rocks",
        "type": "Rock Formation",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Yana_rock_formation.jpg/800px-Yana_rock_formation.jpg"
      },
      {
        "name": "Karwar Beach",
        "type": "Serene Beach",
        "distance": "59 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Karwar_Beach.jpg/1280px-Karwar_Beach.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kanyakumari",
    "name": "Kanyakumari",
    "coordinates": [
      8.0883,
      77.5385
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vivekananda_Rock_Memorial_and_Thiruvalluvar_Statue_at_sunrise.jpg/1280px-Vivekananda_Rock_Memorial_and_Thiruvalluvar_Statue_at_sunrise.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sunrise_at_Kanyakumari.jpg/1280px-Sunrise_at_Kanyakumari.jpg"
    ],
    "description": "The southernmost tip of peninsular India where the Arabian Sea, the Bay of Bengal and the Indian Ocean converge.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Kanyakumari",
          "image": "https://images.unsplash.com/photo-1582972136809-90a0524ec8d7?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Kanyakumari Inn",
          "image": "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Kanyakumari",
          "image": "https://images.unsplash.com/photo-1689729803819-6e0f12f973bc?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kanyakumari",
          "name": "Vivekananda Rock Sea Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1650205486962-93acd8d9b57b?w=800&q=80",
            "https://images.unsplash.com/photo-1599307767316-776533bb941c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Kanyakumari Fish Curry",
              "price": "₹750"
            },
            {
              "item": "Tanjore Spiced Lobster",
              "price": "₹1500"
            },
            {
              "item": "Coconut Rice & Curry",
              "price": "₹380"
            },
            {
              "item": "Banana Halwa",
              "price": "₹180"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Kanyakumari.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Kanyakumari",
          "name": "Kanyakumari Coastal Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=800&q=80",
            "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Fish Fry & Rice Meal",
              "price": "₹300"
            },
            {
              "item": "Spicy Crab Masala",
              "price": "₹500"
            },
            {
              "item": "Parotta & Salna",
              "price": "₹180"
            },
            {
              "item": "Lemon Juice",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Kanyakumari",
          "name": "Southernmost Point Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567990-eaef7a2328c7?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹100"
            },
            {
              "item": "Onion Pakoda",
              "price": "₹100"
            },
            {
              "item": "Tender Coconut Icecream",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Padmanabhapuram Palace",
        "type": "Wooden Palace",
        "distance": "52 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Padmanabhapuram_Palace_01.jpg/1280px-Padmanabhapuram_Palace_01.jpg"
      },
      {
        "name": "Suchindram Temple",
        "type": "Ancient Temple",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Thanumalayan_Temple_Suchindram.jpg/1024px-Thanumalayan_Temple_Suchindram.jpg"
      },
      {
        "name": "Vivekananda Rock Memorial",
        "type": "National Monument",
        "distance": "1 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vivekananda_Rock_Memorial_and_Thiruvalluvar_Statue_at_sunrise.jpg/1280px-Vivekananda_Rock_Memorial_and_Thiruvalluvar_Statue_at_sunrise.jpg"
      },
      {
        "name": "Nagercoil Nagaraja Temple",
        "type": "Hindu Temple",
        "distance": "19 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Nagaraja_Temple_Nagercoil.jpg/800px-Nagaraja_Temple_Nagercoil.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "srinagar",
    "name": "Srinagar",
    "coordinates": [
      34.0837,
      74.7973
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Dal_Lake%2C_Srinagar%2C_J%26K.jpg/1280px-Dal_Lake%2C_Srinagar%2C_J%26K.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mughal_Garden_-_Nishat_Bagh.jpg/1280px-Mughal_Garden_-_Nishat_Bagh.jpg"
    ],
    "description": "The Summer Capital famous for beautiful Mughal Gardens, historic wooden mosques, and serene Dal Lake houseboats.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Srinagar",
          "image": "https://images.unsplash.com/photo-1771858073810-e3568f605b35?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Srinagar Inn",
          "image": "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Srinagar",
          "image": "https://images.unsplash.com/photo-1711059949530-a3057eac6f1c?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Srinagar",
          "name": "Kashmiri Wazwan Palace",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082565547-91c046200cc2?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568526-ca057cd3ff77?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Rogan Josh",
              "price": "₹950"
            },
            {
              "item": "Gushtaba",
              "price": "₹850"
            },
            {
              "item": "Kashmiri Pulao",
              "price": "₹480"
            },
            {
              "item": "Phirni",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Srinagar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Srinagar",
          "name": "Dal Lake Houseboat Spice",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1661082567689-7e3e63d9912f?w=800&q=80",
            "https://images.unsplash.com/photo-1762867994090-98c7c18220ba?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Yakhni Pulao",
              "price": "₹450"
            },
            {
              "item": "Kashmiri Roti with Butter",
              "price": "₹90"
            },
            {
              "item": "Nadru Yakhni",
              "price": "₹350"
            },
            {
              "item": "Saffron Kahwa",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Srinagar",
          "name": "Srinagar Kahwa Lounge",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1779819710373-dfa62b71e093?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568806-a4e3d67058a5?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹150"
            },
            {
              "item": "Apple Walnut Tart",
              "price": "₹180"
            },
            {
              "item": "Rose Tea",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Gulmarg",
        "type": "Ski Resort & Gondola",
        "distance": "56 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gulmarg_gondola.jpg/1280px-Gulmarg_gondola.jpg"
      },
      {
        "name": "Pahalgam",
        "type": "Valley Town",
        "distance": "87 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Pahalgam.jpg/1280px-Pahalgam.jpg"
      },
      {
        "name": "Sonamarg",
        "type": "Golden Meadow",
        "distance": "80 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sonamarg.jpg/1280px-Sonamarg.jpg"
      },
      {
        "name": "Mughal Gardens - Nishat Bagh",
        "type": "Historic Garden",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mughal_Garden_-_Nishat_Bagh.jpg/1280px-Mughal_Garden_-_Nishat_Bagh.jpg"
      },
      {
        "name": "Shankaracharya Temple",
        "type": "Hindu Temple",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Shankaracharya_Temple_Srinagar.jpg/800px-Shankaracharya_Temple_Srinagar.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "mahabaleshwar",
    "name": "Mahabaleshwar",
    "coordinates": [
      18.9217,
      73.6622
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Venna_Lake%2C_Mahabaleshwar.jpg/1280px-Venna_Lake%2C_Mahabaleshwar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Elephant%27s_Head_Point%2C_Mahabaleshwar.jpg/1280px-Elephant%27s_Head_Point%2C_Mahabaleshwar.jpg"
    ],
    "description": "A popular hill station famous for its strawberries, scenic viewpoints, and dense Evergreen forests.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Le Meridien Mahabaleshwar",
          "image": "https://images.unsplash.com/photo-1754294681773-25c7a42e503b?w=800&q=80",
          "rating": 4.6,
          "type": "Luxury",
          "priceRange": "₹10,000 - ₹30,000/night",
          "rooms": [
            {
              "type": "Classic Room",
              "price": "₹10,000/night"
            },
            {
              "type": "Valley View Suite",
              "price": "₹20,000/night"
            },
            {
              "type": "Presidential Suite",
              "price": "₹30,000/night"
            }
          ]
        },
        {
          "name": "Hotel Rajesh",
          "image": "https://images.unsplash.com/photo-1631020280892-02a11b5e960a?w=800&q=80",
          "rating": 4.1,
          "type": "Mid-Range",
          "priceRange": "₹3,000 - ₹7,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,000/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,000/night"
            },
            {
              "type": "Suite",
              "price": "₹7,000/night"
            }
          ]
        },
        {
          "name": "MTDC Resort Mahabaleshwar",
          "image": "https://images.unsplash.com/photo-1591552694788-3b74d181b46f?w=800&q=80",
          "rating": 3.8,
          "type": "Budget",
          "priceRange": "₹1,200 - ₹3,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Cottage",
              "price": "₹2,000/night"
            },
            {
              "type": "Suite Cottage",
              "price": "₹3,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mahabaleshwar",
          "name": "Venna Lake Cliff Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082567938-2fc714b8c187?w=800&q=80",
            "https://images.unsplash.com/photo-1696756761659-6fcbfd0a3c59?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pithla Bhakri Thali Deluxe",
              "price": "₹450"
            },
            {
              "item": "Kolhapuri Chicken Handi",
              "price": "₹750"
            },
            {
              "item": "Jowar Bhakri Extra",
              "price": "₹40"
            },
            {
              "item": "Strawberry Cream Cup",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Mahabaleshwar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Mahabaleshwar",
          "name": "Mahabaleshwar Strawberry House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1661082567779-4fd2e1cb7662?w=800&q=80",
            "https://images.unsplash.com/photo-1661695013455-b2edf4983179?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Strawberry Milkshake Fresh",
              "price": "₹180"
            },
            {
              "item": "Corn Bhajji Plate",
              "price": "₹100"
            },
            {
              "item": "Misal Pav Pav-Extra",
              "price": "₹150"
            },
            {
              "item": "Solkadhi",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Mahabaleshwar",
          "name": "Mapro Garden Cafe Shop",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1678781283125-de3eb701167b?w=800&q=80",
            "https://images.unsplash.com/photo-1779282833204-076de40e621f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mapro Strawberry Ice Cream",
              "price": "₹150"
            },
            {
              "item": "Grilled Veg Cheese Sandwich",
              "price": "₹220"
            },
            {
              "item": "Hot Cocoa Cup",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Pratapgad Fort",
        "type": "Maratha Fort",
        "distance": "24 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Pratapgad_Fort.jpg/1280px-Pratapgad_Fort.jpg"
      },
      {
        "name": "Panchgani Table Land",
        "type": "Plateau Viewpoint",
        "distance": "18 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Table_Land_Panchgani.jpg/1280px-Table_Land_Panchgani.jpg"
      },
      {
        "name": "Wai - Menavli Ghat",
        "type": "Historic Town",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Menavli_Ghat_Wai.jpg/1280px-Menavli_Ghat_Wai.jpg"
      },
      {
        "name": "Tapola Mini Kashmir",
        "type": "Lake & Hills",
        "distance": "28 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Tapola_Mahabaleshwar.jpg/1280px-Tapola_Mahabaleshwar.jpg"
      },
      {
        "name": "Mapro Garden",
        "type": "Garden & Food Park",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mapro_Garden_Mahabaleshwar.jpg/1280px-Mapro_Garden_Mahabaleshwar.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "pushkar",
    "name": "Pushkar",
    "coordinates": [
      26.4883,
      74.55
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pushkar_Lake%2C_Rajasthan.jpg/1280px-Pushkar_Lake%2C_Rajasthan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pushkar_Camel_Fair.jpg/1280px-Pushkar_Camel_Fair.jpg"
    ],
    "description": "One of the oldest cities in India, famous for the serene Pushkar Lake, Brahma Temple, and the Camel Fair.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Pushkar",
          "image": "https://images.unsplash.com/photo-1689729855415-de948175715b?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Pushkar Inn",
          "image": "https://images.unsplash.com/photo-1631015109011-2512f83d1c0e?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Pushkar",
          "image": "https://images.unsplash.com/photo-1758804405753-fa6b91b9a1c8?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pushkar",
          "name": "Marwar Palace Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1722886705787-4b8d676309fa?w=800&q=80",
            "https://images.unsplash.com/photo-1763951719372-966cd0b75672?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Shahi Kaju Curry",
              "price": "₹600"
            },
            {
              "item": "Panchmel Dal",
              "price": "₹450"
            },
            {
              "item": "Baati with Ghee",
              "price": "₹120"
            },
            {
              "item": "Rabdi Ghevar",
              "price": "₹280"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Pushkar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Pushkar",
          "name": "Pushkar Halwai Corner",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1779384110912-f3ff2616759c?w=800&q=80",
            "https://images.unsplash.com/photo-1734330931856-77cdf1b5bba9?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Malpua Rabdi",
              "price": "₹150"
            },
            {
              "item": "Kachori Kadhi",
              "price": "₹90"
            },
            {
              "item": "Sattvik Thali",
              "price": "₹280"
            },
            {
              "item": "Lassi",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Pushkar",
          "name": "Sacred Lake Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1763951718802-39ebd3a4f302?w=800&q=80",
            "https://images.unsplash.com/photo-1763952180307-f018f9c41453?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Brew",
              "price": "₹180"
            },
            {
              "item": "Banana Pancake",
              "price": "₹160"
            },
            {
              "item": "Ginger Lemon Tea",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Ajmer Sharif Dargah",
        "type": "Sufi Shrine",
        "distance": "14 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ajmer_Sharif_Dargah.jpg/1024px-Ajmer_Sharif_Dargah.jpg"
      },
      {
        "name": "Savitri Temple",
        "type": "Hilltop Temple",
        "distance": "4 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Savitri_Temple_Pushkar.jpg/800px-Savitri_Temple_Pushkar.jpg"
      },
      {
        "name": "Taragarh Fort",
        "type": "Ancient Fort",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Taragarh_Fort_Ajmer.jpg/1280px-Taragarh_Fort_Ajmer.jpg"
      },
      {
        "name": "Kishangarh Miniature Art Town",
        "type": "Art Heritage",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kishangarh_Fort.jpg/1280px-Kishangarh_Fort.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "spiti",
    "name": "Spiti Valley",
    "coordinates": [
      32.2461,
      78.0349
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Key_Monastery%2C_Spiti_Valley.jpg/1280px-Key_Monastery%2C_Spiti_Valley.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Spiti_Valley_Landscape.jpg/1280px-Spiti_Valley_Landscape.jpg"
    ],
    "description": "A cold desert mountain valley known for its harsh but stunning landscapes and ancient Buddhist monasteries.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Spiti Valley",
          "image": "https://images.unsplash.com/photo-1765547090903-348b711f0eee?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Spiti Valley Inn",
          "image": "https://images.unsplash.com/photo-1702014859878-5d4743176d28?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Spiti Valley",
          "image": "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Spiti Valley",
          "name": "Spiti Cold Desert Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779386-a9c514eccc6b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Local Barley Stew",
              "price": "₹450"
            },
            {
              "item": "Butter Chicken Spiti Style",
              "price": "₹750"
            },
            {
              "item": "Spitian Bread",
              "price": "₹90"
            },
            {
              "item": "Local Barley Kheer",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Spiti Valley.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Spiti Valley",
          "name": "Kaza Tibetan Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1722573783453-2976e515fe3b?w=800&q=80",
            "https://images.unsplash.com/photo-1707995513187-1a01ac9d5018?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Steamed Veg Momos",
              "price": "₹150"
            },
            {
              "item": "Thukpa Soup",
              "price": "₹200"
            },
            {
              "item": "Tsampa Porridge",
              "price": "₹180"
            },
            {
              "item": "Sea Buckthorn Tea",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Spiti Valley",
          "name": "Key Monastery View Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1678781283118-31e7f6c96d0d?w=800&q=80",
            "https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹130"
            },
            {
              "item": "Apple Pancake",
              "price": "₹150"
            },
            {
              "item": "Hot Apricot Cider",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Key Monastery",
        "type": "Buddhist Monastery",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Key_Monastery%2C_Spiti_Valley.jpg/1280px-Key_Monastery%2C_Spiti_Valley.jpg"
      },
      {
        "name": "Chandratal Lake",
        "type": "High Altitude Lake",
        "distance": "70 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chandratal_lake.jpg/1280px-Chandratal_lake.jpg"
      },
      {
        "name": "Dhankar Monastery",
        "type": "Cliff Monastery",
        "distance": "33 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dhankar_Monastery.jpg/1280px-Dhankar_Monastery.jpg"
      },
      {
        "name": "Pin Valley National Park",
        "type": "Cold Desert",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Pin_Valley_National_Park.jpg/1280px-Pin_Valley_National_Park.jpg"
      },
      {
        "name": "Tabo Monastery",
        "type": "Ancient Monastery",
        "distance": "45 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tabo_Monastery.jpg/1280px-Tabo_Monastery.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kodaikanal",
    "name": "Kodaikanal",
    "coordinates": [
      10.2381,
      77.4892
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kodai_Lake_2.jpg/1280px-Kodai_Lake_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pillar_Rocks_Kodaikanal.jpg/1280px-Pillar_Rocks_Kodaikanal.jpg"
    ],
    "description": "A serene hill station known for its star-shaped lake, evergreen forests, and misty climate.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "The Carlton Kodaikanal",
          "image": "https://images.unsplash.com/photo-1777170191230-3f357b815483?w=800&q=80",
          "rating": 4.6,
          "type": "Luxury Heritage",
          "priceRange": "₹10,000 - ₹30,000/night",
          "rooms": [
            {
              "type": "Deluxe Lake View",
              "price": "₹10,000/night"
            },
            {
              "type": "Heritage Suite",
              "price": "₹20,000/night"
            },
            {
              "type": "Presidential Suite",
              "price": "₹30,000/night"
            }
          ]
        },
        {
          "name": "Hotel Kodai International",
          "image": "https://images.unsplash.com/photo-1627074899165-89603d93e12f?w=800&q=80",
          "rating": 4.2,
          "type": "Mid-Range",
          "priceRange": "₹2,500 - ₹6,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹2,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹4,000/night"
            },
            {
              "type": "Suite",
              "price": "₹6,000/night"
            }
          ]
        },
        {
          "name": "Zostel Kodaikanal",
          "image": "https://images.unsplash.com/photo-1771775528790-28d21016be3f?w=800&q=80",
          "rating": 4.4,
          "type": "Budget",
          "priceRange": "₹500 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹500/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Lake View Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kodaikanal",
          "name": "The Carlton Lake Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1663078779448-4cafe7f24d3c?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779382-b21066ffca6c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Nilgiri Lamb Curry",
              "price": "₹850"
            },
            {
              "item": "Paneer Nilgiri Korma",
              "price": "₹650"
            },
            {
              "item": "Malabar Parotta",
              "price": "₹60"
            },
            {
              "item": "Warm Chocolate Pudding",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Kodaikanal.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Kodaikanal",
          "name": "Kodaikanal Local Hill Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1676198082051-2e5bd135141d?w=800&q=80",
            "https://images.unsplash.com/photo-1681900162312-4f8bf837c607?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Local Mushroom Thali",
              "price": "₹260"
            },
            {
              "item": "Veg Biryani",
              "price": "₹220"
            },
            {
              "item": "Millets Adai",
              "price": "₹150"
            },
            {
              "item": "Hot Masala Tea",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Kodaikanal",
          "name": "Kodai Chocolate Brews",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=800&q=80",
            "https://images.unsplash.com/photo-1661082564713-704ac5cf1a2b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Hot Cocoa (Kodai Chocolate)",
              "price": "₹180"
            },
            {
              "item": "Kodai Truffles",
              "price": "₹150"
            },
            {
              "item": "Lemon Ginger Tea",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Pillar Rocks",
        "type": "Rock Formation",
        "distance": "8 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Pillar_Rocks_Kodaikanal.jpg/1280px-Pillar_Rocks_Kodaikanal.jpg"
      },
      {
        "name": "Coaker's Walk",
        "type": "Scenic Promenade",
        "distance": "1 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coaker%27s_Walk_Kodaikanal.jpg/1280px-Coaker%27s_Walk_Kodaikanal.jpg"
      },
      {
        "name": "Berijam Lake",
        "type": "Forest Lake",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Berijam_Lake.jpg/1280px-Berijam_Lake.jpg"
      },
      {
        "name": "Palani Murugan Temple",
        "type": "Hilltop Temple",
        "distance": "65 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Palani_Murugan_Temple.jpg/800px-Palani_Murugan_Temple.jpg"
      },
      {
        "name": "Dolphin's Nose Viewpoint",
        "type": "Cliff Viewpoint",
        "distance": "8 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Dolphin%27s_Nose_Kodaikanal.jpg/1280px-Dolphin%27s_Nose_Kodaikanal.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "coordinates": [
      11.6854,
      76.132
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Edakkal_Caves_wall.jpg/1024px-Edakkal_Caves_wall.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Wayanad_Kerala.jpg/1280px-Wayanad_Kerala.jpg"
    ],
    "description": "A pristine retreat offering lush spice plantations, breathtaking waterfalls, and rich wildlife.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Wayanad",
          "image": "https://images.unsplash.com/photo-1691784330937-4e8ee367d550?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Wayanad Inn",
          "image": "https://images.unsplash.com/photo-1769123300291-81262063e667?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Wayanad",
          "image": "https://images.unsplash.com/photo-1741506131058-533fcf894483?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Wayanad",
          "name": "Malabar Foothills Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1661082568071-46cc4e019730?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567738-16bcc30e40e1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Nadan Mutton Curry",
              "price": "₹800"
            },
            {
              "item": "Pathiri with Fish Curry",
              "price": "₹500"
            },
            {
              "item": "Bamboo Biryani Special",
              "price": "₹750"
            },
            {
              "item": "Unniyappam Pudding",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Wayanad.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Wayanad",
          "name": "Wayanad Bamboo Spice",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1661082564813-c0c2e7feddbd?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568225-64153ac360f2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Malabar Parotta & Beef Fry",
              "price": "₹420"
            },
            {
              "item": "Kerala Meals Thali",
              "price": "₹240"
            },
            {
              "item": "Neer Dosa & Veg Kurma",
              "price": "₹180"
            },
            {
              "item": "Sulaimani Tea",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Wayanad",
          "name": "Wilderness Coffee House",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1582136092024-ca76695e30a8?w=800&q=80",
            "https://images.unsplash.com/photo-1779912602687-c0d380ce3c76?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Macchiato",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka Puff",
              "price": "₹120"
            },
            {
              "item": "Fresh Mint Lemonade",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Edakkal Caves",
        "type": "Prehistoric Caves",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Edakkal_Caves_wall.jpg/1024px-Edakkal_Caves_wall.jpg"
      },
      {
        "name": "Banasura Sagar Dam",
        "type": "Earth Dam",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Banasura_Sagar_Dam.jpg/1280px-Banasura_Sagar_Dam.jpg"
      },
      {
        "name": "Chembra Peak",
        "type": "Trekking Peak",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Heart_shaped_lake_at_Chembra_Peak.jpg/1280px-Heart_shaped_lake_at_Chembra_Peak.jpg"
      },
      {
        "name": "Soochipara Falls",
        "type": "Waterfall",
        "distance": "22 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Soochipara_Falls_Wayanad.jpg/800px-Soochipara_Falls_Wayanad.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "gangtok",
    "name": "Gangtok",
    "coordinates": [
      27.3314,
      88.6138
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gangtok_and_Kangchenjunga.jpg/1280px-Gangtok_and_Kangchenjunga.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rumtek_Monastery.jpg/1280px-Rumtek_Monastery.jpg"
    ],
    "description": "The incredibly clean and scenic capital of Sikkim with sweeping views of the mighty Himalayas.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Gangtok",
          "image": "https://images.unsplash.com/photo-1613618889093-85d5cf734f39?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Gangtok Inn",
          "image": "https://images.unsplash.com/photo-1621891336682-341097be99cd?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Gangtok",
          "image": "https://images.unsplash.com/photo-1711059985570-4c32ed12a12c?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Gangtok",
          "name": "Sikkimese Royal Palace View",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1661082568686-386e82833489?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568303-7c51a31e5d13?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Sikkimese Traditional Thali",
              "price": "₹650"
            },
            {
              "item": "Gya Thuk Noodle Stew",
              "price": "₹450"
            },
            {
              "item": "Shimi Bread",
              "price": "₹90"
            },
            {
              "item": "Apricot Custard",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Gangtok.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Gangtok",
          "name": "Gangtok Tibetan local kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1583415466047-fdae781947b1?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568457-7451acdfc6a7?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Steamed Veg Momos",
              "price": "₹140"
            },
            {
              "item": "Thukpa Soup Veg",
              "price": "₹180"
            },
            {
              "item": "Sha Phaley (Meat Bread)",
              "price": "₹200"
            },
            {
              "item": "Tibetan Butter Tea",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Gangtok",
          "name": "MG Marg Alpine Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1678781283270-3c61d71e6120?w=800&q=80",
            "https://images.unsplash.com/photo-1774979160994-3306b4872084?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹120"
            },
            {
              "item": "Apple Strudel",
              "price": "₹180"
            },
            {
              "item": "Hot Ginger Lemon Tea",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Tsomgo (Changu) Lake",
        "type": "Glacial Lake",
        "distance": "38 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tsomgo_lake.jpg/1280px-Tsomgo_lake.jpg"
      },
      {
        "name": "Nathula Pass",
        "type": "Indo-China Border",
        "distance": "54 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nathu_La_pass.jpg/1280px-Nathu_La_pass.jpg"
      },
      {
        "name": "Rumtek Monastery",
        "type": "Buddhist Monastery",
        "distance": "23 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rumtek_Monastery.jpg/1280px-Rumtek_Monastery.jpg"
      },
      {
        "name": "Pelling & Kanchenjunga View",
        "type": "Mountain Town",
        "distance": "75 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gangtok_and_Kangchenjunga.jpg/1280px-Gangtok_and_Kangchenjunga.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "cherrapunji",
    "name": "Cherrapunji",
    "coordinates": [
      25.2702,
      91.7323
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nohkalikai_Falls.jpg/800px-Nohkalikai_Falls.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Living_root_bridges%2C_Nongriat-Cherrapunji%2C_Meghalaya.jpg/1280px-Living_root_bridges%2C_Nongriat-Cherrapunji%2C_Meghalaya.jpg"
    ],
    "description": "One of the wettest places on Earth, renowned for its living root bridges and myriad waterfalls.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Polo Orchid Resort",
          "image": "https://images.unsplash.com/photo-1590675560125-0d832b9d719e?w=800&q=80",
          "rating": 4.4,
          "type": "Premium",
          "priceRange": "₹5,000 - ₹12,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹5,000/night"
            },
            {
              "type": "Deluxe Valley View",
              "price": "₹8,000/night"
            },
            {
              "type": "Suite",
              "price": "₹12,000/night"
            }
          ]
        },
        {
          "name": "Cherrapunjee Holiday Resort",
          "image": "https://images.unsplash.com/photo-1662841540530-2f04bb3291e8?w=800&q=80",
          "rating": 4.1,
          "type": "Mid-Range",
          "priceRange": "₹2,500 - ₹6,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹2,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹4,000/night"
            },
            {
              "type": "Family Room",
              "price": "₹6,000/night"
            }
          ]
        },
        {
          "name": "By The Way Homestay",
          "image": "https://images.unsplash.com/photo-1631048835184-3f0ceda91b75?w=800&q=80",
          "rating": 4.3,
          "type": "Budget",
          "priceRange": "₹800 - ₹2,000/night",
          "rooms": [
            {
              "type": "Basic Room",
              "price": "₹800/night"
            },
            {
              "type": "Cozy Room",
              "price": "₹1,500/night"
            },
            {
              "type": "Premium Room",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Cherrapunji",
          "name": "Nohkalikai Valley Resort Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1691958215011-6800e0a058b0?w=800&q=80",
            "https://images.unsplash.com/photo-1761662826177-a50286fe7eef?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Smoked Pork with Bamboo Shoot",
              "price": "₹850"
            },
            {
              "item": "Khasi Chicken Jadoh",
              "price": "₹750"
            },
            {
              "item": "Local Red Rice",
              "price": "₹150"
            },
            {
              "item": "Wild Berry Rabdi",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Cherrapunji.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Cherrapunji",
          "name": "Sohra Khasi Local Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1610596672499-c0d20c9ee707?w=800&q=80",
            "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Jadoh Pork Thali",
              "price": "₹300"
            },
            {
              "item": "Dohkhlieh (Pork Salad)",
              "price": "₹200"
            },
            {
              "item": "Khasi Local Tea (Sha)",
              "price": "₹60"
            },
            {
              "item": "Steamed Momo Plate",
              "price": "₹140"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Cherrapunji",
          "name": "Living Root Bridge Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?w=800&q=80",
            "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pour Over Coffee",
              "price": "₹160"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹120"
            },
            {
              "item": "Cinnamon Latte",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Living Root Bridges - Nongriat",
        "type": "Natural Wonder",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Living_root_bridges%2C_Nongriat-Cherrapunji%2C_Meghalaya.jpg/1280px-Living_root_bridges%2C_Nongriat-Cherrapunji%2C_Meghalaya.jpg"
      },
      {
        "name": "Nohkalikai Falls",
        "type": "Tallest Plunge Waterfall",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nohkalikai_Falls.jpg/800px-Nohkalikai_Falls.jpg"
      },
      {
        "name": "Mawsmai Cave",
        "type": "Limestone Cave",
        "distance": "6 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mawsmai_Cave.jpg/1280px-Mawsmai_Cave.jpg"
      },
      {
        "name": "Shillong Peak",
        "type": "Viewpoint",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Shillong_Peak.jpg/1280px-Shillong_Peak.jpg"
      },
      {
        "name": "Seven Sisters Falls",
        "type": "Waterfall",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seven_Sisters_Falls_Cherrapunji.jpg/800px-Seven_Sisters_Falls_Cherrapunji.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "shillong",
    "name": "Shillong",
    "coordinates": [
      25.5788,
      91.8933
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Umiam_Lake%2C_Meghalaya.jpg/1280px-Umiam_Lake%2C_Meghalaya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ward%27s_Lake%2C_Shillong.jpg/1280px-Ward%27s_Lake%2C_Shillong.jpg"
    ],
    "description": "The Scotland of the East, offering rolling hills, pine forests, and a vibrant local rock music scene.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Shillong",
          "image": "https://images.unsplash.com/photo-1631049035428-f9ddac7651d7?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Shillong Inn",
          "image": "https://images.unsplash.com/photo-1631049552286-45e465b28965?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Shillong",
          "image": "https://images.unsplash.com/photo-1631049035539-ad1c07928c88?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Shillong",
          "name": "Wards Lake Pine Forest Grill",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1728910758653-7e990e489cac?w=800&q=80",
            "https://images.unsplash.com/photo-1771694583810-db9568dc9b8d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Grilled Trout with local herbs",
              "price": "₹850"
            },
            {
              "item": "Pork Wazwan Style",
              "price": "₹750"
            },
            {
              "item": "Northeast Fried Rice",
              "price": "₹350"
            },
            {
              "item": "Pineapple Tart",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Shillong.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Shillong",
          "name": "Police Bazar Khasi Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1690915475862-336b65f571a3?w=800&q=80",
            "https://images.unsplash.com/photo-1642524957029-e4fcbcea0257?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Jadoh Veg Thali",
              "price": "₹220"
            },
            {
              "item": "Chicken Dohneiiong",
              "price": "₹450"
            },
            {
              "item": "Chowmein Chicken",
              "price": "₹240"
            },
            {
              "item": "Lal Sha (Red Tea)",
              "price": "₹50"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Shillong",
          "name": "Shillong Rock Music Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1769766319375-1c384e4355d6?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568383-d31c9a87061f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Affogato",
              "price": "₹180"
            },
            {
              "item": "Chicken Burger",
              "price": "₹200"
            },
            {
              "item": "Shillong Special Fudge",
              "price": "₹160"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Umiam Lake (Barapani)",
        "type": "Man-made Lake",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Umiam_Lake%2C_Meghalaya.jpg/1280px-Umiam_Lake%2C_Meghalaya.jpg"
      },
      {
        "name": "Elephant Falls",
        "type": "Tiered Waterfall",
        "distance": "12 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elephant_Falls_Shillong.jpg/800px-Elephant_Falls_Shillong.jpg"
      },
      {
        "name": "Mawlynnong - Cleanest Village",
        "type": "Living Root Bridge Village",
        "distance": "78 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Mawlynnong.jpg/1280px-Mawlynnong.jpg"
      },
      {
        "name": "Dawki River",
        "type": "Crystal Clear River",
        "distance": "82 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dawki_river_Meghalaya.jpg/1280px-Dawki_river_Meghalaya.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "coordinates": [
      29.9457,
      78.1642
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ganga_Aarti%2C_Haridwar.jpg/1280px-Ganga_Aarti%2C_Haridwar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Har_Ki_Pauri%2C_Haridwar.jpg/1280px-Har_Ki_Pauri%2C_Haridwar.jpg"
    ],
    "description": "One of seven holiest sites for Hindus, famous for its mesmerizing evening Ganga Aarti at Har Ki Pauri.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Haridwar",
          "image": "https://images.unsplash.com/photo-1631049035326-57414e7739eb?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Haridwar Inn",
          "image": "https://images.unsplash.com/photo-1631049035509-076f10beb2fe?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Haridwar",
          "image": "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Haridwar",
          "name": "Ganga Heritage Sattvik Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1678781398373-c728751d5d8f?w=800&q=80",
            "https://images.unsplash.com/photo-1662048504895-f11b7c3b8cc2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Shahi Paneer (No Onion/Garlic)",
              "price": "₹550"
            },
            {
              "item": "Sattvik Deluxe Thali",
              "price": "₹650"
            },
            {
              "item": "Missi Roti",
              "price": "₹60"
            },
            {
              "item": "Kesar Kheer",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Haridwar.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Haridwar",
          "name": "Har Ki Pauri Chotiwala",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1764955193589-f5db4261e02c?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475901-6c08af925906?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Aloo Puri Halwa",
              "price": "₹140"
            },
            {
              "item": "Kachori Sabzi",
              "price": "₹80"
            },
            {
              "item": "Jalebi",
              "price": "₹80"
            },
            {
              "item": "Lassi",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Haridwar",
          "name": "Aarti View Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&q=80",
            "https://images.unsplash.com/photo-1764699486820-30a00e6ded7a?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹110"
            },
            {
              "item": "Paneer Tikka Roll",
              "price": "₹180"
            },
            {
              "item": "Masala Chai",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Rishikesh",
        "type": "Yoga Capital",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lakshman_Jhula%2C_Rishikesh.jpg/1280px-Lakshman_Jhula%2C_Rishikesh.jpg"
      },
      {
        "name": "Chandi Devi Temple",
        "type": "Hilltop Temple",
        "distance": "6 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chandi_Devi_Temple.jpg/800px-Chandi_Devi_Temple.jpg"
      },
      {
        "name": "Rajaji National Park",
        "type": "Tiger Reserve",
        "distance": "10 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rajaji_National_Park.jpg/1280px-Rajaji_National_Park.jpg"
      },
      {
        "name": "Mansa Devi Temple",
        "type": "Cable Car Temple",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mansa_Devi_Temple_Haridwar.jpg/800px-Mansa_Devi_Temple_Haridwar.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "mathura",
    "name": "Mathura",
    "coordinates": [
      27.4924,
      77.6737
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Shri_Krishna_Janmabhoomi_Temple.jpg/1280px-Shri_Krishna_Janmabhoomi_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Dwarkadhish_Temple_Mathura.jpg/1024px-Dwarkadhish_Temple_Mathura.jpg"
    ],
    "description": "Revered as the birthplace of Lord Krishna, brimming with historic temples and vibrant spiritual energy.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Mathura",
          "image": "https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Mathura Inn",
          "image": "https://images.unsplash.com/photo-1631049421978-ba025ff66fd9?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Mathura",
          "image": "https://images.unsplash.com/photo-1631048835049-b0b7ee4be40b?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mathura",
          "name": "Braj Heritage Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1773419808002-bab9e1f840a0?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567428-0edf5319f315?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Kadai Paneer",
              "price": "₹550"
            },
            {
              "item": "Braj Ki Thali",
              "price": "₹650"
            },
            {
              "item": "Butter Naan",
              "price": "₹70"
            },
            {
              "item": "Braj Rabdi Cup",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Mathura.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Mathura",
          "name": "Mathura Peda & Chat",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568142-5204c2aed26e?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567019-f21649afbeb7?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Mathura Peda",
              "price": "₹120"
            },
            {
              "item": "Kachori Sabzi",
              "price": "₹80"
            },
            {
              "item": "Jalebi Rabdi",
              "price": "₹100"
            },
            {
              "item": "Kulhad Milk",
              "price": "₹90"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Mathura",
          "name": "Yamuna Bank Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568186-0c7fa3505108?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568519-6f0429c94871?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹110"
            },
            {
              "item": "Aloo Tikki Burger",
              "price": "₹140"
            },
            {
              "item": "Mango Shake",
              "price": "₹130"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Vrindavan",
        "type": "Pilgrimage Town",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Prem_Mandir_-_Vrindavan.jpg/1280px-Prem_Mandir_-_Vrindavan.jpg"
      },
      {
        "name": "Govardhan Hill",
        "type": "Sacred Hill",
        "distance": "26 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Govardhan_Hill.jpg/1280px-Govardhan_Hill.jpg"
      },
      {
        "name": "Agra - Taj Mahal",
        "type": "UNESCO Heritage",
        "distance": "58 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Taj_Mahal%2C_Agra%2C_India.jpg"
      },
      {
        "name": "Bharatpur Bird Sanctuary",
        "type": "Wildlife Reserve",
        "distance": "40 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bharatpur_Bird_Sanctuary_Rajasthan_India.jpg/1280px-Bharatpur_Bird_Sanctuary_Rajasthan_India.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "ajanta",
    "name": "Ajanta Caves",
    "coordinates": [
      20.5519,
      75.7033
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ajanta_%28panoramic_view%29.jpg/1280px-Ajanta_%28panoramic_view%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ajanta_Cave_26.jpg/1280px-Ajanta_Cave_26.jpg"
    ],
    "description": "Famed for its exquisite ancient Buddhist cave paintings and rock-cut sculptures dating back to the 2nd century BCE.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Ajanta Caves",
          "image": "https://images.unsplash.com/photo-1631049421631-051b1511cef9?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Ajanta Caves Inn",
          "image": "https://images.unsplash.com/photo-1631049307379-e96858bda538?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Ajanta Caves",
          "image": "https://images.unsplash.com/photo-1631048730715-e780567325f6?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ajanta Caves",
          "name": "Ajanta Caves Heritage Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082569345-011c1d412af6?w=800&q=80",
            "https://images.unsplash.com/photo-1772730064970-a7b2735c93b9?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Shev Bhaji Grand",
              "price": "₹450"
            },
            {
              "item": "Paneer Peshawari",
              "price": "₹550"
            },
            {
              "item": "Tandoori Roti Special",
              "price": "₹50"
            },
            {
              "item": "Puran Poli with Ghee",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Ajanta Caves.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Ajanta Caves",
          "name": "Fardapur Local Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1663078779530-cb62ed5dcd07?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568527-f12d7bd9d29d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Shev Bhaji Local Thali",
              "price": "₹220"
            },
            {
              "item": "Vada Pav (2 pcs)",
              "price": "₹80"
            },
            {
              "item": "Sabudana Khichdi",
              "price": "₹120"
            },
            {
              "item": "Buttermilk",
              "price": "₹60"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Ajanta Caves",
          "name": "Valley View Cafe Corner",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1678781283118-e188f63df7ec?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283129-a403c3dc8823?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹120"
            },
            {
              "item": "Garlic Toast",
              "price": "₹150"
            },
            {
              "item": "Masala Tea",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Ellora Caves",
        "type": "UNESCO Heritage",
        "distance": "100 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kailasha_temple_at_ellora.jpg/1280px-Kailasha_temple_at_ellora.jpg"
      },
      {
        "name": "Aurangabad Caves",
        "type": "Buddhist Caves",
        "distance": "50 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Aurangabad_Caves.jpg/1280px-Aurangabad_Caves.jpg"
      },
      {
        "name": "Bibi Ka Maqbara",
        "type": "Mughal Monument",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg/1280px-Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg"
      },
      {
        "name": "Daulatabad Fort",
        "type": "Hilltop Fort",
        "distance": "65 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Daulatabad_Fort_%28Devagiri%29.jpg/1280px-Daulatabad_Fort_%28Devagiri%29.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kochi",
    "name": "Kochi",
    "coordinates": [
      9.9312,
      76.2673
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chinese_Fishing_Net_Fort_Kochi.jpg/1280px-Chinese_Fishing_Net_Fort_Kochi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Dutch_palace_kochi.jpg/1280px-Dutch_palace_kochi.jpg"
    ],
    "description": "The Queen of the Arabian Sea, echoing with an eclectic mix of Dutch, Portuguese, and British colonial history.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Kochi",
          "image": "https://images.unsplash.com/photo-1631048730558-10cd324e0873?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Kochi Inn",
          "image": "https://images.unsplash.com/photo-1631048834949-1df85dc7b02f?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Kochi",
          "image": "https://images.unsplash.com/photo-1631048834981-27b558f7a3e7?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kochi",
          "name": "Queen's Sea Palace",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1722886689077-d22d8fc2a305?w=800&q=80",
            "https://images.unsplash.com/photo-1763951719000-661d3d50d763?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Tiger Prawn Ghee Roast",
              "price": "₹950"
            },
            {
              "item": "Seafood Platter Grand",
              "price": "₹1600"
            },
            {
              "item": "Malabar Fish Curry",
              "price": "₹750"
            },
            {
              "item": "Coconut Caramel Custard",
              "price": "₹280"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Golden Pavilion is out of this world. Very premium ambiance in Kochi.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Kochi",
          "name": "Fort Kochi Spice Wharf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1585742440646-60adcd5a06d0?w=800&q=80",
            "https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Kochi Biryani Chicken",
              "price": "₹380"
            },
            {
              "item": "Kappa & Meen Curry",
              "price": "₹350"
            },
            {
              "item": "Banana Fritters (Pazham Pori)",
              "price": "₹100"
            },
            {
              "item": "Lime Tea",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Kochi",
          "name": "Dutch Colonial Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
            "https://images.unsplash.com/photo-1643757343278-5d50309dfa44?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Pour Over Coffee",
              "price": "₹180"
            },
            {
              "item": "Croissant Sandwiches",
              "price": "₹220"
            },
            {
              "item": "Iced Mocha",
              "price": "₹190"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Fort Kochi Heritage Walk",
        "type": "Colonial Heritage",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chinese_Fishing_Net_Fort_Kochi.jpg/1280px-Chinese_Fishing_Net_Fort_Kochi.jpg"
      },
      {
        "name": "Athirapally Falls",
        "type": "Niagara of India",
        "distance": "73 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Athirappilly_Falls.jpg/800px-Athirappilly_Falls.jpg"
      },
      {
        "name": "Cherai Beach",
        "type": "Beach",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cherai_Beach_Kochi.jpg/1280px-Cherai_Beach_Kochi.jpg"
      },
      {
        "name": "Mattancherry Palace",
        "type": "Dutch Palace",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Dutch_palace_kochi.jpg/1280px-Dutch_palace_kochi.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "alleppey",
    "name": "Alleppey",
    "coordinates": [
      9.4981,
      76.3388
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kerala_Backwaters_Alappuzha.jpg/1280px-Kerala_Backwaters_Alappuzha.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Alappuzha_Houseboat.jpg/1280px-Alappuzha_Houseboat.jpg"
    ],
    "description": "The Venice of the East, famous for its tranquil backwaters mapped by traditional wooden houseboats.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Alleppey",
          "image": "https://images.unsplash.com/photo-1779447425044-2e25748cc77c?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Alleppey Inn",
          "image": "https://images.unsplash.com/photo-1775866914767-7e4646f2481a?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Alleppey",
          "image": "https://images.unsplash.com/photo-1675409145919-277c0fc2aa7d?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Alleppey",
          "name": "Backwater Houseboat Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1603122876935-13e7f40c3984?w=800&q=80",
            "https://images.unsplash.com/photo-1674207166635-7b2f0a58fea1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Karimeen Fry Special",
              "price": "₹850"
            },
            {
              "item": "Prawn Coconut Stew",
              "price": "₹780"
            },
            {
              "item": "Kappa Biryani",
              "price": "₹450"
            },
            {
              "item": "Payasam Cup",
              "price": "₹180"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Alleppey.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Alleppey",
          "name": "Kuttanad Toddy Shop Taste",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1683250446695-c19b7aa80c3d?w=800&q=80",
            "https://images.unsplash.com/photo-1650205486962-93acd8d9b57b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Toddy Shop Pearl Spot Fry",
              "price": "₹480"
            },
            {
              "item": "Kerala Boatman Thali",
              "price": "₹250"
            },
            {
              "item": "Duck Roast (Tharavu)",
              "price": "₹550"
            },
            {
              "item": "Toddy Drink Mocktail",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Alleppey",
          "name": "Lake View Breeze Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1599307767316-776533bb941c?w=800&q=80",
            "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Espresso",
              "price": "₹120"
            },
            {
              "item": "Egg Puffs",
              "price": "₹80"
            },
            {
              "item": "Tender Coconut Shake",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Kumarakom Backwaters",
        "type": "Backwater Village",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kumarakom_Backwaters.jpg/1280px-Kumarakom_Backwaters.jpg"
      },
      {
        "name": "Marari Beach",
        "type": "Serene Beach",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marari_Beach_Kerala.jpg/1280px-Marari_Beach_Kerala.jpg"
      },
      {
        "name": "Kochi",
        "type": "Port City",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chinese_Fishing_Net_Fort_Kochi.jpg/1280px-Chinese_Fishing_Net_Fort_Kochi.jpg"
      },
      {
        "name": "Pathiramanal Island",
        "type": "Lake Island",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pathiramanal_island.jpg/1280px-Pathiramanal_island.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "trivandrum",
    "name": "Thiruvananthapuram",
    "coordinates": [
      8.5241,
      76.9366
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Padmanabhaswamy_Temple_Trivandrum.jpg/800px-Padmanabhaswamy_Temple_Trivandrum.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kovalam_Beach%2C_Trivandrum.jpg/1280px-Kovalam_Beach%2C_Trivandrum.jpg"
    ],
    "description": "The capital of Kerala known for its British colonial architecture and the magnificent Padmanabhaswamy Temple.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Thiruvananthapuram",
          "image": "https://images.unsplash.com/photo-1632830485299-c4bb1f31724a?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Thiruvananthapuram Inn",
          "image": "https://images.unsplash.com/photo-1688378707060-37f0a702cb04?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Thiruvananthapuram",
          "image": "https://images.unsplash.com/photo-1728975728593-b128b77fa813?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Thiruvananthapuram",
          "name": "Travancore Royal Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1767114915989-c6ab3c8fc42e?w=800&q=80",
            "https://images.unsplash.com/photo-1767114915936-745dd372f1d8?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Travancore Chicken Curry",
              "price": "₹750"
            },
            {
              "item": "Fish Mango Curry",
              "price": "₹780"
            },
            {
              "item": "Appam with Veg Stew",
              "price": "₹300"
            },
            {
              "item": "Ada Pradhaman Payasam",
              "price": "₹240"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Thiruvananthapuram.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Thiruvananthapuram",
          "name": "Kovalam Beachside Tastes",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1661082567990-eaef7a2328c7?w=800&q=80",
            "https://images.unsplash.com/photo-1661082565547-91c046200cc2?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Trivandrum Chicken Fry",
              "price": "₹420"
            },
            {
              "item": "Kerala Meals with Fish",
              "price": "₹300"
            },
            {
              "item": "Idiyappam & Egg Curry",
              "price": "₹220"
            },
            {
              "item": "Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Thiruvananthapuram",
          "name": "Padmanabha Palace Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568526-ca057cd3ff77?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567689-7e3e63d9912f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Brew Coffee",
              "price": "₹180"
            },
            {
              "item": "Banana Chips Tart",
              "price": "₹140"
            },
            {
              "item": "Green Tea",
              "price": "₹110"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Kovalam Beach",
        "type": "Crescent Beach",
        "distance": "16 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kovalam_Beach%2C_Trivandrum.jpg/1280px-Kovalam_Beach%2C_Trivandrum.jpg"
      },
      {
        "name": "Varkala Cliff Beach",
        "type": "Cliff Beach",
        "distance": "51 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Varkala_Beach.jpg/1280px-Varkala_Beach.jpg"
      },
      {
        "name": "Neyyar Dam & Wildlife",
        "type": "Dam & Wildlife",
        "distance": "32 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Neyyar_Dam.jpg/1280px-Neyyar_Dam.jpg"
      },
      {
        "name": "Poovar Island",
        "type": "Backwater Island",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Poovar_Island.jpg/1280px-Poovar_Island.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "coordinates": [
      9.9252,
      78.1198
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Meenakshi_Temple_Madurai.jpg/1280px-Meenakshi_Temple_Madurai.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Meenakshi_Amman_Temple_-_West_Tower.jpg/800px-Meenakshi_Amman_Temple_-_West_Tower.jpg"
    ],
    "description": "An ancient metropolis deeply rooted in Tamil culture, dominated by the colossal, colorful Meenakshi Amman Temple.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Madurai",
          "image": "https://images.unsplash.com/photo-1630233792725-5d6a2413e3c8?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Madurai Inn",
          "image": "https://images.unsplash.com/photo-1644589104114-41ea93fc02e7?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Madurai",
          "image": "https://images.unsplash.com/photo-1732089059979-c35ea80150d8?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Madurai",
          "name": "Meenakshi Heritage Palace",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1762867994090-98c7c18220ba?w=800&q=80",
            "https://images.unsplash.com/photo-1779819710373-dfa62b71e093?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chettinad Chicken Masala",
              "price": "₹750"
            },
            {
              "item": "Chettinad Veg Kurma",
              "price": "₹550"
            },
            {
              "item": "Veechu Parotta",
              "price": "₹100"
            },
            {
              "item": "Elaneer Payasam",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Madurai.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Madurai",
          "name": "Madurai Bun Parotta Shop",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1661082568806-a4e3d67058a5?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567938-2fc714b8c187?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Madurai Bun Parotta with Mutton",
              "price": "₹480"
            },
            {
              "item": "Idiyappam with Coconut Milk",
              "price": "₹150"
            },
            {
              "item": "Kari Dosa",
              "price": "₹350"
            },
            {
              "item": "Madurai Jigarthanda Drink",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Madurai",
          "name": "Jigarthanda Cold Spot",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1696756761659-6fcbfd0a3c59?w=800&q=80",
            "https://images.unsplash.com/photo-1661082567779-4fd2e1cb7662?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee Special",
              "price": "₹90"
            },
            {
              "item": "Kothu Parotta",
              "price": "₹200"
            },
            {
              "item": "Rose Milk",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Rameswaram Temple",
        "type": "Jyotirlinga Temple",
        "distance": "85 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ramanathaswamy_temple.jpg/1280px-Ramanathaswamy_temple.jpg"
      },
      {
        "name": "Kodaikanal Hill Station",
        "type": "Hill Station",
        "distance": "88 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kodai_Lake_2.jpg/1280px-Kodai_Lake_2.jpg"
      },
      {
        "name": "Thirumalai Nayakkar Mahal",
        "type": "Palace",
        "distance": "2 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Thirumalai_Nayak_Palace.jpg/1280px-Thirumalai_Nayak_Palace.jpg"
      },
      {
        "name": "Alagar Koil",
        "type": "Cave Temple",
        "distance": "21 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alagar_Kovil_Madurai.jpg/1024px-Alagar_Kovil_Madurai.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "mahabalipuram",
    "name": "Mahabalipuram",
    "coordinates": [
      12.6208,
      80.1945
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shore_Temple_1.JPG/1280px-Shore_Temple_1.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Arjuna%27s_Penance%2C_Mamallapuram.jpg/1280px-Arjuna%27s_Penance%2C_Mamallapuram.jpg"
    ],
    "description": "Known for its stunning monolithic rock-cut temples and UNESCO recognized shore temple.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Mahabalipuram",
          "image": "https://images.unsplash.com/photo-1689729739430-fd744a5b6ea2?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Mahabalipuram Inn",
          "image": "https://images.unsplash.com/photo-1631117127948-1967f5e724cb?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Mahabalipuram",
          "image": "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mahabalipuram",
          "name": "Shore Temple Wave View",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1661695013455-b2edf4983179?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283125-de3eb701167b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Grilled Jumbo Prawns",
              "price": "₹1200"
            },
            {
              "item": "Fried Pomfret Fish",
              "price": "₹850"
            },
            {
              "item": "Coconut Fish Curry",
              "price": "₹750"
            },
            {
              "item": "Mango Souffle",
              "price": "₹240"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Mahabalipuram.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Mahabalipuram",
          "name": "Mahabalipuram Sea Breeze Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1779282833204-076de40e621f?w=800&q=80",
            "https://images.unsplash.com/photo-1722886705787-4b8d676309fa?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Fish Curry Meals",
              "price": "₹280"
            },
            {
              "item": "Calamari Garlic Pepper",
              "price": "₹550"
            },
            {
              "item": "Neer Dosa & Prawns",
              "price": "₹350"
            },
            {
              "item": "Fresh Coconut Water",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Mahabalipuram",
          "name": "Surfers Point Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1763951719372-966cd0b75672?w=800&q=80",
            "https://images.unsplash.com/photo-1779384110912-f3ff2616759c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Iced Americano",
              "price": "₹150"
            },
            {
              "item": "Garlic Bread with Cheese",
              "price": "₹180"
            },
            {
              "item": "Tender Coconut Water shake",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Crocodile Bank",
        "type": "Reptile Zoo",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Madras_Crocodile_Bank_Trust.jpg/1280px-Madras_Crocodile_Bank_Trust.jpg"
      },
      {
        "name": "Kanchipuram Temples",
        "type": "Temple Town",
        "distance": "65 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kailasanathar_Temple_Kanchipuram.jpg/1280px-Kailasanathar_Temple_Kanchipuram.jpg"
      },
      {
        "name": "Pondicherry",
        "type": "French Quarter",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/French_Colony_Pondicherry.jpg/1280px-French_Colony_Pondicherry.jpg"
      },
      {
        "name": "Tiger Cave",
        "type": "Rock-cut Cave",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tiger_Cave_Mahabalipuram.jpg/1280px-Tiger_Cave_Mahabalipuram.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "pune",
    "name": "Pune",
    "coordinates": [
      18.5204,
      73.8567
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Shaniwar_Wada_gate.jpg/1280px-Shaniwar_Wada_gate.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aga_Khan_Palace_Pune.jpg/1280px-Aga_Khan_Palace_Pune.jpg"
    ],
    "description": "The cultural hub of Maharashtra fusing historic Maratha landmarks with a vibrant modern skyline.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Pune",
          "image": "https://images.unsplash.com/photo-1664227431098-1289c13695c1?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Pune Inn",
          "image": "https://images.unsplash.com/photo-1664227430687-9299c593e3da?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Pune",
          "image": "https://images.unsplash.com/photo-1776763255370-544f0a293bc7?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pune",
          "name": "Shaniwar Wada Maratha Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1734330931856-77cdf1b5bba9?w=800&q=80",
            "https://images.unsplash.com/photo-1763951718802-39ebd3a4f302?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Puneri Chicken Masala",
              "price": "₹750"
            },
            {
              "item": "Matki Usal Royal",
              "price": "₹450"
            },
            {
              "item": "Bhakarwadi Platter",
              "price": "₹180"
            },
            {
              "item": "Puran Poli Rabdi",
              "price": "₹240"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Pune.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Pune",
          "name": "SP's Biryani & Puneri Misal",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1763952180307-f018f9c41453?w=800&q=80",
            "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Puneri Misal Pav Special",
              "price": "₹140"
            },
            {
              "item": "Sabudana Vada (2 pcs)",
              "price": "₹90"
            },
            {
              "item": "Mastani Milkshake (Mango)",
              "price": "₹150"
            },
            {
              "item": "Kothimbir Vadi (4 pcs)",
              "price": "₹110"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Pune",
          "name": "FC Road Cafe Goodluck style",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1663078779386-a9c514eccc6b?w=800&q=80",
            "https://images.unsplash.com/photo-1722573783453-2976e515fe3b?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cafe Goodluck Bun Maska",
              "price": "₹80"
            },
            {
              "item": "Irani Chai Special",
              "price": "₹60"
            },
            {
              "item": "Cheese Omelette",
              "price": "₹140"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Sinhagad Fort",
        "type": "Maratha Hill Fort",
        "distance": "35 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Sinhagad_fort.jpg/1280px-Sinhagad_fort.jpg"
      },
      {
        "name": "Lonavala & Karla Caves",
        "type": "Hill Station & Caves",
        "distance": "65 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Karla_Caves.jpg/1280px-Karla_Caves.jpg"
      },
      {
        "name": "Lavasa Hill City",
        "type": "Planned Hill City",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lavasa_city.jpg/1280px-Lavasa_city.jpg"
      },
      {
        "name": "Rajgad Fort",
        "type": "Maratha Capital Fort",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rajgad_Fort.jpg/1280px-Rajgad_Fort.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "coordinates": [
      17.385,
      78.4867
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/1280px-Charminar_Hyderabad_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Golkonda_Fort_Hyderabad.jpg/1280px-Golkonda_Fort_Hyderabad.jpg"
    ],
    "description": "The City of Pearls famously boasting the iconic Charminar alongside a booming modern tech district.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Hyderabad",
          "image": "https://images.unsplash.com/photo-1610041014208-1f9464d7a791?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Hyderabad Inn",
          "image": "https://images.unsplash.com/photo-1771775529036-2a9dc65ca54b?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Hyderabad",
          "image": "https://images.unsplash.com/photo-1557122764-dc9f8447fafb?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Hyderabad",
          "name": "Nizami Charminar Jewel",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1707995513187-1a01ac9d5018?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283118-31e7f6c96d0d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Hyderabadi Mutton Biryani Shahi",
              "price": "₹950"
            },
            {
              "item": "Hyderabadi Haleem",
              "price": "₹600"
            },
            {
              "item": "Mirchi Ka Salan",
              "price": "₹250"
            },
            {
              "item": "Double Ka Meetha",
              "price": "₹200"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Hyderabad.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Hyderabad",
          "name": "Paradise Biryani Hub",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1678781416302-d59ed9ed46d0?w=800&q=80",
            "https://images.unsplash.com/photo-1663078779448-4cafe7f24d3c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Hyderabadi Chicken Biryani",
              "price": "₹380"
            },
            {
              "item": "Egg Biryani",
              "price": "₹280"
            },
            {
              "item": "Bagara Baingan",
              "price": "₹240"
            },
            {
              "item": "Kubani Ka Meetha",
              "price": "₹180"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Hyderabad",
          "name": "Nimrah Cafe & Bakery",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1663078779382-b21066ffca6c?w=800&q=80",
            "https://images.unsplash.com/photo-1676198082051-2e5bd135141d?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Irani Chai Cup",
              "price": "₹40"
            },
            {
              "item": "Osmania Biscuits (4 pcs)",
              "price": "₹40"
            },
            {
              "item": "Bun Maska",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Golconda Fort",
        "type": "Diamond Heritage Fort",
        "distance": "11 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Golkonda_Fort_Hyderabad.jpg/1280px-Golkonda_Fort_Hyderabad.jpg"
      },
      {
        "name": "Ramoji Film City",
        "type": "Film Studio Theme Park",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ramoji_Film_City.jpg/1280px-Ramoji_Film_City.jpg"
      },
      {
        "name": "Nagarjuna Sagar Dam",
        "type": "Masonry Dam",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nagarjuna_Sagar_Dam.jpg/1280px-Nagarjuna_Sagar_Dam.jpg"
      },
      {
        "name": "Shamirpet Lake",
        "type": "Serene Lake",
        "distance": "28 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Shamirpet_Lake.jpg/1280px-Shamirpet_Lake.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "bengaluru",
    "name": "Bengaluru",
    "coordinates": [
      12.9716,
      77.5946
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bangalore_Palace%2C_India.jpg/1280px-Bangalore_Palace%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vidhana_Soudha_Bangalore.jpg/1280px-Vidhana_Soudha_Bangalore.jpg"
    ],
    "description": "The Silicon Valley of India known for its numerous parks, diverse food scene, and bustling pub culture.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Bengaluru",
          "image": "https://images.unsplash.com/photo-1719887741662-f641ec603471?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Bengaluru Inn",
          "image": "https://images.unsplash.com/photo-1780488792974-61efba45089d?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Bengaluru",
          "image": "https://images.unsplash.com/photo-1758238283528-43392b7be72c?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Bengaluru",
          "name": "The Palace Garden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1681900162312-4f8bf837c607?w=800&q=80",
            "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Bisi Bele Bath Shahi",
              "price": "₹320"
            },
            {
              "item": "Avartana Style Veg Thali",
              "price": "₹750"
            },
            {
              "item": "Ghee Roast Paneer",
              "price": "₹450"
            },
            {
              "item": "Elaneer Custard",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Bengaluru.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Bengaluru",
          "name": "MTR / Vidyarthi Bhavan Style",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082564713-704ac5cf1a2b?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568071-46cc4e019730?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Ghee Masala Dosa",
              "price": "₹140"
            },
            {
              "item": "Rava Idli (1 pc)",
              "price": "₹80"
            },
            {
              "item": "Maddur Vada Special",
              "price": "₹90"
            },
            {
              "item": "Bengaluru Filter Coffee",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Bengaluru",
          "name": "Indiranagar Craft Brews",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082567738-16bcc30e40e1?w=800&q=80",
            "https://images.unsplash.com/photo-1661082564813-c0c2e7feddbd?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Flat White",
              "price": "₹180"
            },
            {
              "item": "Avocado Toast",
              "price": "₹250"
            },
            {
              "item": "Blueberry Cheesecake",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Nandi Hills",
        "type": "Hill Fort & Sunrise Point",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nandi_Hills_Panorama.jpg/1280px-Nandi_Hills_Panorama.jpg"
      },
      {
        "name": "Shivanasamudra Falls",
        "type": "Segmented Waterfall",
        "distance": "85 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Shivanasamudra_Falls.jpg/1280px-Shivanasamudra_Falls.jpg"
      },
      {
        "name": "Ramanagara (Sholay Hills)",
        "type": "Rocky Landscape",
        "distance": "49 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ramanagara_hills.jpg/1280px-Ramanagara_hills.jpg"
      },
      {
        "name": "Lalbagh Botanical Garden",
        "type": "Historic Garden",
        "distance": "5 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Lalbagh_Botanical_Garden_Glass_House.jpg/1280px-Lalbagh_Botanical_Garden_Glass_House.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "chennai",
    "name": "Chennai",
    "coordinates": [
      13.0827,
      80.2707
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Marina_Beach_Lighthouse%2C_Chennai.jpg/800px-Marina_Beach_Lighthouse%2C_Chennai.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kapaleeshwarar_Temple%2C_Chennai.jpg/1024px-Kapaleeshwarar_Temple%2C_Chennai.jpg"
    ],
    "description": "A massive cultural center preserving deep-rooted traditions beside expansive beaches like Marina.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Chennai",
          "image": "https://images.unsplash.com/photo-1776763255197-495b343d5a33?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Chennai Inn",
          "image": "https://images.unsplash.com/photo-1711060001575-2cfa3c5a2bfa?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Chennai",
          "image": "https://images.unsplash.com/photo-1762255128166-22aa9b5a7084?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Chennai",
          "name": "The Chettinad Grand Palace",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1661082568225-64153ac360f2?w=800&q=80",
            "https://images.unsplash.com/photo-1582136092024-ca76695e30a8?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chettinad Crab Masala",
              "price": "₹950"
            },
            {
              "item": "Vazhaipoo Cutlet",
              "price": "₹380"
            },
            {
              "item": "Appam with Coconut Milk",
              "price": "₹280"
            },
            {
              "item": "Millet Payasam",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at The Royal Dining is out of this world. Very premium ambiance in Chennai.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Chennai",
          "name": "Saravana Bhavan Style Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1779912602687-c0d380ce3c76?w=800&q=80",
            "https://images.unsplash.com/photo-1661082568686-386e82833489?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chennai Ghee Roast Dosa",
              "price": "₹130"
            },
            {
              "item": "Idli Sambar Ghee",
              "price": "₹90"
            },
            {
              "item": "Medhu Vada (2 pcs)",
              "price": "₹100"
            },
            {
              "item": "Mylapore Filter Coffee",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Chennai",
          "name": "Mylapore Heritage Coffee House",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1661082568303-7c51a31e5d13?w=800&q=80",
            "https://images.unsplash.com/photo-1583415466047-fdae781947b1?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Latte",
              "price": "₹160"
            },
            {
              "item": "Onion Pakoda Plate",
              "price": "₹110"
            },
            {
              "item": "Rose Milk",
              "price": "₹100"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Mahabalipuram Monuments",
        "type": "UNESCO Heritage",
        "distance": "55 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shore_Temple_1.JPG/1280px-Shore_Temple_1.JPG"
      },
      {
        "name": "Kanchipuram Temple Town",
        "type": "Silk & Temple City",
        "distance": "72 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kailasanathar_Temple_Kanchipuram.jpg/1280px-Kailasanathar_Temple_Kanchipuram.jpg"
      },
      {
        "name": "Pulicat Lake",
        "type": "Bird Sanctuary Lake",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Pulicat_Lake.jpg/1280px-Pulicat_Lake.jpg"
      },
      {
        "name": "DakshinaChitra Museum",
        "type": "Heritage Museum",
        "distance": "25 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/DakshinaChitra_Chennai.jpg/1280px-DakshinaChitra_Chennai.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "kolkata",
    "name": "Kolkata",
    "coordinates": [
      22.5726,
      88.3639
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Victoria_Memorial%2C_Kolkata.jpg/1280px-Victoria_Memorial%2C_Kolkata.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Howrah_Bridge_Kolkata.jpg/1280px-Howrah_Bridge_Kolkata.jpg"
    ],
    "description": "The City of Joy known for its brilliant grand colonial architecture, art scene, and cultural festivals.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Kolkata",
          "image": "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Kolkata Inn",
          "image": "https://images.unsplash.com/photo-1572177215152-32f247303126?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Kolkata",
          "image": "https://images.unsplash.com/photo-1621891333819-00c206ec8994?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kolkata",
          "name": "Victoria Memorial Grand Shahi",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1661082568457-7451acdfc6a7?w=800&q=80",
            "https://images.unsplash.com/photo-1678781283270-3c61d71e6120?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Chingri Malai Curry",
              "price": "₹950"
            },
            {
              "item": "Bhetki Paturi",
              "price": "₹850"
            },
            {
              "item": "Kolkata Mutton Biryani",
              "price": "₹750"
            },
            {
              "item": "Baked Mihidana",
              "price": "₹280"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Heritage Spices is out of this world. Very premium ambiance in Kolkata.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Kolkata",
          "name": "Bhojohori Manna Style",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1774979160994-3306b4872084?w=800&q=80",
            "https://images.unsplash.com/photo-1691958215011-6800e0a058b0?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Luchi Alur Dom",
              "price": "₹160"
            },
            {
              "item": "Kolkata Egg Roll",
              "price": "₹100"
            },
            {
              "item": "Kosha Mangsho & Porota",
              "price": "₹550"
            },
            {
              "item": "Roshogolla & Mishti Doi",
              "price": "₹120"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Kolkata",
          "name": "Flurys Park Street Style Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1761662826177-a50286fe7eef?w=800&q=80",
            "https://images.unsplash.com/photo-1610596672499-c0d20c9ee707?w=800&q=80"
          ],
          "menu": [
            {
              "item": "English Breakfast Tea",
              "price": "₹140"
            },
            {
              "item": "Darjeeling Tea in Pot",
              "price": "₹200"
            },
            {
              "item": "Rum Balls",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Sundarbans Mangrove Forest",
        "type": "UNESCO Biosphere",
        "distance": "95 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sundarbans_tiger.jpg/1280px-Sundarbans_tiger.jpg"
      },
      {
        "name": "Dakshineswar Kali Temple",
        "type": "Hindu Temple",
        "distance": "13 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Dakhineswar.jpg/1280px-Dakhineswar.jpg"
      },
      {
        "name": "Belur Math",
        "type": "Spiritual HQ",
        "distance": "11 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Belur_Math_Main_Temple.jpg/1280px-Belur_Math_Main_Temple.jpg"
      },
      {
        "name": "Bishnupur Terracotta Temples",
        "type": "Heritage Temples",
        "distance": "90 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rasmancha_Bishnupur.jpg/1280px-Rasmancha_Bishnupur.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "puri",
    "name": "Puri",
    "coordinates": [
      19.8135,
      85.8312
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jagannath_Temple%2C_Puri.jpg/1024px-Jagannath_Temple%2C_Puri.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Puri_beach.jpg/1280px-Puri_beach.jpg"
    ],
    "description": "A holy city famed for the legendary Jagannath Temple and long stretches of golden sand beaches.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Puri",
          "image": "https://images.unsplash.com/photo-1630888728969-5e43f55a7a18?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Puri Inn",
          "image": "https://images.unsplash.com/photo-1631049035581-bec13f40dfff?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Puri",
          "image": "https://images.unsplash.com/photo-1631049307729-d5db33d15ed1?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Puri",
          "name": "Jagannath Temple Mahaprasad",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Odia Dalma Deluxe",
              "price": "₹350"
            },
            {
              "item": "Chhena Poda Dessert",
              "price": "₹220"
            },
            {
              "item": "Odia Royal Veg Thali",
              "price": "₹500"
            },
            {
              "item": "Kheer Kanika",
              "price": "₹250"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Saffron Route is out of this world. Very premium ambiance in Puri.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Puri",
          "name": "Puri Beach Odia Dhaba",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1572517499173-4e2cb8bef19b?w=800&q=80",
            "https://images.unsplash.com/photo-1728910758653-7e990e489cac?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Odia Fish Curry (Machha)",
              "price": "₹350"
            },
            {
              "item": "Khiri (Rice Pudding)",
              "price": "₹120"
            },
            {
              "item": "Dahibara Aludum",
              "price": "₹150"
            },
            {
              "item": "Chhena Gaja (2 pcs)",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Puri",
          "name": "Golden Beach Sea Bistro",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1771694583810-db9568dc9b8d?w=800&q=80",
            "https://images.unsplash.com/photo-1690915475862-336b65f571a3?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Filter Coffee",
              "price": "₹120"
            },
            {
              "item": "Paneer Cutlet",
              "price": "₹140"
            },
            {
              "item": "Cold Mango Lassi",
              "price": "₹150"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Konark Sun Temple",
        "type": "UNESCO Heritage",
        "distance": "35 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Konark_Sun_Temple.jpg/1280px-Konark_Sun_Temple.jpg"
      },
      {
        "name": "Chilika Lake",
        "type": "Largest Brackish Lake",
        "distance": "45 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Chilika_Lake.jpg/1280px-Chilika_Lake.jpg"
      },
      {
        "name": "Bhubaneswar Temples",
        "type": "Temple City",
        "distance": "60 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lingaraja_Temple.jpg/800px-Lingaraja_Temple.jpg"
      },
      {
        "name": "Raghurajpur Artist Village",
        "type": "Heritage Art Village",
        "distance": "14 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Raghurajpur.jpg/1280px-Raghurajpur.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  },
  {
    "id": "aurangabad",
    "name": "Aurangabad",
    "coordinates": [
      19.8762,
      75.3433
    ],
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg/1280px-Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Daulatabad_Fort_%28Devagiri%29.jpg/1280px-Daulatabad_Fort_%28Devagiri%29.jpg"
    ],
    "description": "The gateway to the World Heritage Sites of Ajanta and Ellora, rich in Mughal architecture.",
    "reachability": [
      {
        "mode": "Flight",
        "price": "₹4,000 - ₹9,000",
        "duration": "1.5h - 3h",
        "details": "Direct flights available from major Indian hubs (DEL, BOM, BLR)."
      },
      {
        "mode": "Train",
        "price": "₹800 - ₹3,000",
        "duration": "6h - 18h",
        "details": "Vande Bharat and Rajdhani express trains offer comfortable journeys."
      },
      {
        "mode": "Road",
        "price": "₹1,500 - ₹4,000",
        "duration": "Variable",
        "details": "Well connected via National Highways. Great for road trips."
      }
    ],
    "amenities": {
      "hotels": [
        {
          "name": "Grand Heritage Aurangabad",
          "image": "https://images.unsplash.com/photo-1631049552351-16da4767cc98?w=800&q=80",
          "rating": 4.7,
          "type": "Luxury",
          "priceRange": "₹12,000 - ₹35,000/night",
          "rooms": [
            {
              "type": "Deluxe Room",
              "price": "₹12,000/night"
            },
            {
              "type": "Premium Suite",
              "price": "₹22,000/night"
            },
            {
              "type": "Royal Suite",
              "price": "₹35,000/night"
            }
          ]
        },
        {
          "name": "Hotel Aurangabad Inn",
          "image": "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=800&q=80",
          "rating": 4.3,
          "type": "Mid-Range",
          "priceRange": "₹3,500 - ₹8,000/night",
          "rooms": [
            {
              "type": "Standard Room",
              "price": "₹3,500/night"
            },
            {
              "type": "Deluxe Room",
              "price": "₹5,500/night"
            },
            {
              "type": "Suite",
              "price": "₹8,000/night"
            }
          ]
        },
        {
          "name": "Backpacker's Aurangabad",
          "image": "https://images.unsplash.com/photo-1699979306075-1b4c943a3b16?w=800&q=80",
          "rating": 4.1,
          "type": "Budget",
          "priceRange": "₹600 - ₹2,000/night",
          "rooms": [
            {
              "type": "Dorm Bed",
              "price": "₹600/night"
            },
            {
              "type": "Private Room",
              "price": "₹1,200/night"
            },
            {
              "type": "Deluxe Private",
              "price": "₹2,000/night"
            }
          ]
        }
      ],
      "restaurants": [
        {
          "id": "r1_Aurangabad",
          "name": "Bibi Ka Maqbara Shahi Qalia",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1642524957029-e4fcbcea0257?w=800&q=80",
            "https://images.unsplash.com/photo-1769766319375-1c384e4355d6?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Signature Naan Qalia Mutton",
              "price": "₹850"
            },
            {
              "item": "Chicken Korma Shahi",
              "price": "₹750"
            },
            {
              "item": "Mughlai Pulao",
              "price": "₹480"
            },
            {
              "item": "Double Ka Meetha",
              "price": "₹220"
            }
          ],
          "reviews": [
            {
              "author": "Neha S.",
              "rating": 5,
              "time": "2 weeks ago",
              "comment": "The food at Maharaja's Court is out of this world. Very premium ambiance in Aurangabad.",
              "isGoogle": true
            },
            {
              "author": "Arjun K.",
              "rating": 4,
              "time": "1 month ago",
              "comment": "Great service and beautiful decor. A bit on the expensive side but worth it.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r2_Aurangabad",
          "name": "Aurangabad Local Mughal Mess",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1661082568383-d31c9a87061f?w=800&q=80",
            "https://images.unsplash.com/photo-1678781398373-c728751d5d8f?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Naan Qalia Chicken",
              "price": "₹550"
            },
            {
              "item": "Pithla Bhakri Veg",
              "price": "₹200"
            },
            {
              "item": "Khurma Sweet",
              "price": "₹150"
            },
            {
              "item": "Lime Tea",
              "price": "₹70"
            }
          ],
          "reviews": [
            {
              "author": "Riya M.",
              "rating": 5,
              "time": "3 days ago",
              "comment": "Best local food I've had in a long time. The thali is extremely filling!",
              "isGoogle": true
            },
            {
              "author": "Samir",
              "rating": 4,
              "time": "2 months ago",
              "comment": "Very authentic taste. Place is small so there might be a waiting time.",
              "isGoogle": true
            }
          ]
        },
        {
          "id": "r3_Aurangabad",
          "name": "Deccan Gold Coffee Shop",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1662048504895-f11b7c3b8cc2?w=800&q=80",
            "https://images.unsplash.com/photo-1764955193589-f5db4261e02c?w=800&q=80"
          ],
          "menu": [
            {
              "item": "Cold Coffee with Icecream",
              "price": "₹180"
            },
            {
              "item": "Cheese Chilli Toast",
              "price": "₹180"
            },
            {
              "item": "Ginger Chai",
              "price": "₹80"
            }
          ],
          "reviews": [
            {
              "author": "Priya V.",
              "rating": 5,
              "time": "1 week ago",
              "comment": "Perfect spot to chill. Coffee is roasted to perfection.",
              "isGoogle": true
            },
            {
              "author": "Karan T.",
              "rating": 5,
              "time": "3 weeks ago",
              "comment": "Great wifi and awesome avocado toast. Highly recommend.",
              "isGoogle": true
            }
          ]
        }
      ],
      "rentals": [
        {
          "name": "Royal Enfield Rentals",
          "type": "Bike/Scooter",
          "price": "₹500 - ₹1,200/day"
        },
        {
          "name": "Zoomcar Self Drive",
          "type": "Car",
          "price": "₹2,500 - ₹4,000/day"
        }
      ]
    },
    "nearby": [
      {
        "name": "Ellora Caves",
        "type": "UNESCO Heritage",
        "distance": "30 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Kailasha_temple_at_ellora.jpg/1280px-Kailasha_temple_at_ellora.jpg"
      },
      {
        "name": "Ajanta Caves",
        "type": "UNESCO Heritage",
        "distance": "105 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ajanta_%28panoramic_view%29.jpg/1280px-Ajanta_%28panoramic_view%29.jpg"
      },
      {
        "name": "Daulatabad Fort",
        "type": "Hilltop Fortress",
        "distance": "15 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Daulatabad_Fort_%28Devagiri%29.jpg/1280px-Daulatabad_Fort_%28Devagiri%29.jpg"
      },
      {
        "name": "Panchakki Water Mill",
        "type": "Historical Monument",
        "distance": "3 km",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Panchakki_Aurangabad.jpg/1024px-Panchakki_Aurangabad.jpg"
      }
    ],
    "reviews": {
      "traveler": [
        {
          "author": "Rahul M.",
          "rating": 5,
          "comment": "Absolutely breathtaking! The views are unparalleled and the local guides were incredibly helpful. Must visit."
        },
        {
          "author": "Sneha Kashyap",
          "rating": 4,
          "comment": "Great experience overall. Can get a bit crowded during peak season, but the historic architecture makes up for it!"
        }
      ]
    }
  }
];
