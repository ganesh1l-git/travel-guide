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
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Agra",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Agra",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Agra",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Agra",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/3840px-BeachFun.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Goa",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Goa",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Goa",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Goa",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Jaipur",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Jaipur",
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Jaipur",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Jaipur",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/3840px-Munnar_Overview.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Munnar",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Munnar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Munnar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Leh_City_seen_from_Shanti_Stupa.JPG/3840px-Leh_City_seen_from_Shanti_Stupa.JPG",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Leh",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Leh",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Leh",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Leh",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Varanasi",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Varanasi",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Varanasi",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Varanasi",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/3840px-Tirumala_090615.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Tirupati",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Tirupati",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Tirupati",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Tirupati",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1621584617505-1a830c238692?w=800&q=80",
      "https://images.unsplash.com/photo-1621584617505-1a830c238692?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ellora Caves",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Ellora Caves",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Ellora Caves",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Ellora Caves",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/3840px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Hampi",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Hampi",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Hampi",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/9/96/DarjeelingTrainFruitshop_%282%29.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Darjeeling",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Darjeeling",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Darjeeling",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Darjeeling",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mysore",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Mysore",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Mysore",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Mysore",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/3840px-Trayambakeshwar_Temple_VK.jpg",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Rishikesh",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Rishikesh",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Rishikesh",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Rishikesh",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Amritsar",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Amritsar",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Amritsar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Amritsar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Udaipur",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Udaipur",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Udaipur",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Udaipur",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80",
      "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Shimla",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Shimla",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Shimla",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Shimla",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Ooty_lake.jpg",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ooty",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Ooty",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Ooty",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Ooty",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Andaman Islands",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Andaman Islands",
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Andaman Islands",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Andaman Islands",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1582510003544-4d00b1f74d6f?w=800&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b1f74d6f?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Jaisalmer",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Jaisalmer",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Jaisalmer",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Jaisalmer",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Forecourt%2C_Rashtrapati_Bhavan_-_1.jpg/3840px-Forecourt%2C_Rashtrapati_Bhavan_-_1.jpg",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_New Delhi",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_New Delhi",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near New Delhi",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of New Delhi",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80",
      "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Manali",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Manali",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Manali",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Manali",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pondicherry",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Pondicherry",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Pondicherry",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tadiandamol_Valley%2C_Western_Ghats.jpg/3840px-Tadiandamol_Valley%2C_Western_Ghats.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Coorg",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Coorg",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Coorg",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Coorg",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/1_Khajuraho.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/1_Khajuraho.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Khajuraho",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Khajuraho",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Khajuraho",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Khajuraho",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kaziranga",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Kaziranga",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Kaziranga",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Kaziranga",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Delight_india.jpg",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Gokarna",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Gokarna",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Gokarna",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Gokarna",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg/3840px-Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg",
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kanyakumari",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Kanyakumari",
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Kanyakumari",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Kanyakumari",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Shankaracharya_Temple_in_Srinagar%2C_India%2C_under_snow.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Srinagar",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Srinagar",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Srinagar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Srinagar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/MAHABALESWAR_LANDSCAPE.jpg/3840px-MAHABALESWAR_LANDSCAPE.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/MAHABALESWAR_LANDSCAPE.jpg/3840px-MAHABALESWAR_LANDSCAPE.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mahabaleshwar",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Mahabaleshwar",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Mahabaleshwar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Mahabaleshwar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Pushkar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Pushkar.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pushkar",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Pushkar",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Pushkar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Pushkar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg/3840px-Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Spiti Valley",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Spiti Valley",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Spiti Valley",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Spiti Valley",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Boating_in_Kodaikanal_Lake_with_Mist.jpg/3840px-Boating_in_Kodaikanal_Lake_with_Mist.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Boating_in_Kodaikanal_Lake_with_Mist.jpg/3840px-Boating_in_Kodaikanal_Lake_with_Mist.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kodaikanal",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Kodaikanal",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Kodaikanal",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Kodaikanal",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/3840px-Blue%2C_Green_%26_White.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/3840px-Blue%2C_Green_%26_White.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Wayanad",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Wayanad",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Wayanad",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Wayanad",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/M.G._Marg%2C_Gangtok_01.jpg/3840px-M.G._Marg%2C_Gangtok_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/M.G._Marg%2C_Gangtok_01.jpg/3840px-M.G._Marg%2C_Gangtok_01.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Gangtok",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Gangtok",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Gangtok",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Gangtok",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cherrapunji.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cherrapunji.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Cherrapunji",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Cherrapunji",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Cherrapunji",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Cherrapunji",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elephant_Falls_II%2C_Shillong.jpg/3840px-Elephant_Falls_II%2C_Shillong.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elephant_Falls_II%2C_Shillong.jpg/3840px-Elephant_Falls_II%2C_Shillong.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Shillong",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Shillong",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Shillong",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Shillong",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ganga_aarti_haridwar_01.jpg/3840px-Ganga_aarti_haridwar_01.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Haridwar",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Haridwar",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Haridwar",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Haridwar",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/3840px-Vishram_Ghat.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/3840px-Vishram_Ghat.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mathura",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Mathura",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Mathura",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Mathura",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ajanta_%2863%29.jpg",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Ajanta Caves",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Ajanta Caves",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Ajanta Caves",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Ajanta Caves",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kochi",
          "name": "Golden Pavilion",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Kochi",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Kochi",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Kochi",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Alleppey",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Alleppey",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Alleppey",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Alleppey",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg/3840px-Padmanabhaswamy_Temple_Thiruvananthapuram.jpg",
      "https://images.unsplash.com/photo-1555502120-7f9e80c85c47?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Thiruvananthapuram",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Thiruvananthapuram",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Thiruvananthapuram",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Meenakshi_Amman_West_Tower.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Meenakshi_Amman_West_Tower.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Madurai",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Desi Tadka",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Madurai",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Madurai",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Madurai",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg/3840px-A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg/3840px-A_collage_of_Mamallapuram_town_Tamil_Nadu_India.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Mahabalipuram",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Mahabalipuram",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Mahabalipuram",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Mahabalipuram",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pune_West_skyline_-_March_2017.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pune_West_skyline_-_March_2017.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Pune",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.3",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Pune",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Pune",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Pune",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Downtown_hyderabad_drone.png",
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Hyderabad",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Village Kitchen",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Hyderabad",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Hyderabad",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Hyderabad",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/3840px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Bengaluru",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.6",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Bengaluru",
          "name": "The Roast Room",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Bengaluru",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Bengaluru",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Chennai",
          "name": "The Royal Dining",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Chennai",
          "name": "Beans & Leaves",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Chennai",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Chennai",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Kolkata_maidan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/Kolkata_maidan.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Kolkata",
          "name": "Heritage Spices",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "The Local Thali",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Kolkata",
          "name": "Cozy Corner Cafe",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.5",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Kolkata",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Kolkata",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Shri_Jagannath_temple.jpg/3840px-Shri_Jagannath_temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Shri_Jagannath_temple.jpg/3840px-Shri_Jagannath_temple.jpg"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Puri",
          "name": "Saffron Route",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
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
          "name": "Curry Leaf",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.8",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Puri",
          "name": "Bistro 1947",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.9",
          "images": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Puri",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Puri",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg/3840px-Bibi_Ka_Maqbara_-_The_Taj_Of_Deccan.jpg",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
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
          "name": "Taj Luxury Resort & Spa",
          "price": "₹18,000/night",
          "rating": 4.9,
          "type": "Luxury"
        },
        {
          "name": "Grand Boutique Hotel",
          "price": "₹6,000/night",
          "rating": 4.6,
          "type": "Premium"
        },
        {
          "name": "Backpacker Zostel",
          "price": "₹800/night",
          "rating": 4.4,
          "type": "Budget"
        }
      ],
      "restaurants": [
        {
          "id": "r1_Aurangabad",
          "name": "Maharaja's Court",
          "type": "Fine Dining",
          "price": "₹₹₹",
          "rating": "4.7",
          "images": [
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f928a18?auto=format&fit=crop&q=80&w=800"
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
              "item": "Rose Pistachio Kulfi",
              "price": "₹250"
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
          "name": "Authentic Spice House",
          "type": "Local Cuisine",
          "price": "₹₹",
          "rating": "4.2",
          "images": [
            "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Classic Thali",
              "price": "₹300"
            },
            {
              "item": "Masala Dosa",
              "price": "₹150"
            },
            {
              "item": "Paneer Tikka",
              "price": "₹250"
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
          "id": "r3_Aurangabad",
          "name": "Cafe Serenity",
          "type": "Cafe",
          "price": "₹",
          "rating": "4.4",
          "images": [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
          ],
          "menu": [
            {
              "item": "Cappuccino",
              "price": "₹120"
            },
            {
              "item": "Avocado Toast",
              "price": "₹200"
            },
            {
              "item": "Blueberry Muffin",
              "price": "₹100"
            },
            {
              "item": "Iced Latte",
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
        "name": "Historical landmark near Aurangabad",
        "type": "Fort",
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000"
      },
      {
        "name": "Ancient Temple of Aurangabad",
        "type": "Cultural Temple",
        "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1000"
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