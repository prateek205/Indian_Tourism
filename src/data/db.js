const tourismData = [
  // TOURISM DATA

  {
    id: 1,
    title: "Assam Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/31646023/",
    category: ["Mountain", "WildLife", "Adventure"],

    details: {
      description:
        "Assam is famous for tea gardens, wildlife sanctuaries, and river landscapes.",
      famousPlaces: [
        "Kaziranga National Park",
        "Majuli",
        "Guwahati",
      ],
      bestTime: "October to April",
      food: ["Khar", "Masor Tenga", "Pitha"],
      activities: ["Safari", "River Cruise", "Tea Garden Visit"],
    },
  },

  {
    id: 2,
    title: "Uttar Pradesh Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/37129767/",
    category: ["Spiritual", "Heritage"],

    details: {
      description:
        "Uttar Pradesh is home to spiritual cities and world-famous monuments.",
      famousPlaces: ["Agra", "Varanasi", "Ayodhya"],
      bestTime: "October to March",
      food: ["Petha", "Kachori", "Tunday Kabab"],
      activities: ["Temple Visit", "Historical Tour"],
    },
  },

  {
    id: 3,
    title: "Rajasthan Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/18983874/",
    category: ["Heritage", "Adventure"],

    details: {
      description:
        "Rajasthan is known for forts, palaces, desert safaris, and royal culture.",
      famousPlaces: ["Jaipur", "Jaisalmer", "Udaipur"],
      bestTime: "November to February",
      food: ["Dal Baati", "Laal Maas", "Ghewar"],
      activities: ["Camel Safari", "Fort Visit"],
    },
  },

  {
    id: 4,
    title: "Maharashtra Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/31000790/",
    category: ["Beach", "Adventure", "Heritage"],

    details: {
      description:
        "Maharashtra offers beaches, hill stations, forts, and vibrant cities.",
      famousPlaces: ["Mumbai", "Lonavala", "Mahabaleshwar"],
      bestTime: "October to March",
      food: ["Vada Pav", "Misal Pav", "Puran Poli"],
      activities: ["Beach Tourism", "Fort Trekking"],
    },
  },

  {
    id: 5,
    title: "Jammu & Kashmir Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/26244070/",
    category: ["Mountain", "Adventure"],

    details: {
      description:
        "Jammu & Kashmir is known for snow mountains and scenic valleys.",
      famousPlaces: ["Srinagar", "Gulmarg", "Pahalgam"],
      bestTime: "March to October",
      food: ["Rogan Josh", "Kahwa", "Yakhni"],
      activities: ["Skiing", "Shikara Ride"],
    },
  },

  {
    id: 6,
    title: "Uttarakhand Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/6595717/",
    category: ["Mountain", "Spiritual", "Adventure"],

    details: {
      description:
        "Uttarakhand is famous for Himalayan beauty and spiritual destinations.",
      famousPlaces: ["Rishikesh", "Mussoorie", "Nainital"],
      bestTime: "March to June",
      food: ["Kafuli", "Aloo Ke Gutke"],
      activities: ["River Rafting", "Trekking"],
    },
  },

  {
    id: 7,
    title: "South Tourism",
    type: "tourism",
    video: "https://www.pexels.com/download/video/18560011/",
    category: ["Beach", "WildLife", "Spiritual"],

    details: {
      description:
        "South India is known for beaches, temples, greenery, and culture.",
      famousPlaces: ["Kerala", "Tamil Nadu", "Karnataka"],
      bestTime: "October to March",
      food: ["Dosa", "Idli", "Appam"],
      activities: ["Temple Visit", "Backwater Cruise"],
    },
  },

  // CATEGORY DATA

  {
    id: 8,
    title: "Mountain",
    type: "category",
    image:
      "https://images.unsplash.com/photo-1741836315165-89e7dfd61613?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 9,
    title: "Beach",
    type: "category",
    image:
      "https://images.unsplash.com/photo-1559671888-af88d0c275bd?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 10,
    title: "Spiritual",
    type: "category",
    image:
      "https://plus.unsplash.com/premium_photo-1697730355701-06a022eb69cd?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 11,
    title: "WildLife",
    type: "category",
    image:
      "https://images.unsplash.com/photo-1589657429197-ecba47e3acd8?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 12,
    title: "Adventure",
    type: "category",
    image:
      "https://images.unsplash.com/photo-1769963608832-cc25836772e1?w=600&auto=format&fit=crop&q=60",
  },

  {
    id: 13,
    title: "Heritage",
    type: "category",
    image:
      "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?w=600&auto=format&fit=crop&q=60",
  },

  // DESTINATION DATA

  {
    id: 14,
    heading: "Kashmir",
    location: "Jammu & Kashmir",
    type: "destination",
    category: ["Mountain", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?w=600&auto=format&fit=crop&q=60",
    rating: "4.9",

    details: {
      description:
        "Kashmir is known for snowy mountains and beautiful valleys.",
      famousPlaces: ["Dal Lake", "Gulmarg", "Sonmarg"],
      bestTime: "March to October",
      food: ["Kahwa", "Rogan Josh"],
      activities: ["Skiing", "Shikara Ride"],
    },
  },

  {
    id: 15,
    heading: "Goa",
    location: "Western India",
    type: "destination",
    category: ["Beach", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?w=600&auto=format&fit=crop&q=60",
    rating: "4.2",

    details: {
      description:
        "Goa is famous for beaches, nightlife, and water sports.",
      famousPlaces: ["Baga Beach", "Anjuna", "Panaji"],
      bestTime: "November to February",
      food: ["Fish Curry", "Bebinca"],
      activities: ["Scuba Diving", "Beach Party"],
    },
  },

  {
    id: 16,
    heading: "Kerala",
    location: "South India",
    type: "destination",
    category: ["Beach", "WildLife", "Spiritual"],
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    rating: "4.6",

    details: {
      description:
        "Kerala is famous for backwaters, greenery, and Ayurveda.",
      famousPlaces: ["Munnar", "Alleppey", "Kochi"],
      bestTime: "September to March",
      food: ["Appam", "Kerala Sadya"],
      activities: ["Backwater Cruise", "Houseboat Stay"],
    },
  },

  {
    id: 17,
    heading: "Rajasthan",
    location: "Northwest India",
    type: "destination",
    category: ["Heritage", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    rating: "4.7",

    details: {
      description:
        "Rajasthan offers royal heritage, forts, and desert tourism.",
      famousPlaces: ["Jaipur", "Udaipur", "Jodhpur"],
      bestTime: "November to February",
      food: ["Dal Baati", "Ghewar"],
      activities: ["Camel Ride", "Fort Visit"],
    },
  },

  {
    id: 18,
    heading: "Meghalaya",
    location: "Northeast India",
    type: "destination",
    category: ["Mountain", "WildLife", "Adventure"],
    image:
      "https://images.unsplash.com/photo-1552978534-9d01e1f91517?w=600&auto=format&fit=crop&q=60",
    rating: "4.8",

    details: {
      description:
        "Meghalaya is known for waterfalls, caves, and green hills.",
      famousPlaces: ["Shillong", "Cherrapunji"],
      bestTime: "October to April",
      food: ["Jadoh", "Tungrymbai"],
      activities: ["Cave Exploration", "Waterfall Trekking"],
    },
  },

  {
    id: 19,
    heading: "Varanasi",
    location: "Uttar Pradesh",
    type: "destination",
    category: ["Spiritual", "Heritage"],
    image:
      "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600&auto=format&fit=crop&q=60",
    rating: "4.6",

    details: {
      description:
        "Varanasi is one of the oldest spiritual cities in the world.",
      famousPlaces: ["Kashi Vishwanath", "Dashashwamedh Ghat"],
      bestTime: "October to March",
      food: ["Banarasi Paan", "Kachori"],
      activities: ["Ganga Aarti", "Boat Ride"],
    },
  },

  // INDIA DATA

  {
    id: 20,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/5464304/",
    heading: "Maharashtra",

    details: {
      description:
        "Maharashtra is famous for forts, beaches, and Mumbai city.",
      famousPlaces: ["Mumbai", "Pune", "Mahabaleshwar"],
      bestTime: "October to March",
      food: ["Vada Pav", "Misal Pav"],
      activities: ["Beach Tourism", "Fort Trekking"],
    },
  },

  {
    id: 21,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/27052515/",
    heading: "Rajasthan",

    details: {
      description:
        "Rajasthan is known for palaces and desert culture.",
      famousPlaces: ["Jaipur", "Jaisalmer"],
      bestTime: "November to February",
      food: ["Dal Baati", "Laal Maas"],
      activities: ["Camel Safari", "Fort Visit"],
    },
  },

  {
    id: 22,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/35097638/",
    heading: "Kerala",

    details: {
      description:
        "Kerala is famous for greenery and backwaters.",
      famousPlaces: ["Munnar", "Alleppey"],
      bestTime: "September to March",
      food: ["Appam", "Sadya"],
      activities: ["Backwater Cruise", "Ayurveda"],
    },
  },

  {
    id: 23,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/37263626/",
    heading: "Odisha",

    details: {
      description:
        "Odisha is known for temples and coastal beauty.",
      famousPlaces: ["Puri", "Konark"],
      bestTime: "October to February",
      food: ["Dalma", "Rasgulla"],
      activities: ["Temple Visit", "Beach Tourism"],
    },
  },

  {
    id: 24,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/34396879/",
    heading: "Uttarakhand",

    details: {
      description:
        "Uttarakhand is famous for mountains and spirituality.",
      famousPlaces: ["Nainital", "Rishikesh"],
      bestTime: "March to June",
      food: ["Kafuli", "Aloo Gutke"],
      activities: ["Rafting", "Trekking"],
    },
  },

  {
    id: 25,
    category: "States",
    type: "india",
    vid: "https://www.pexels.com/download/video/36954689/",
    heading: "Madhya Pradesh",

    details: {
      description:
        "Madhya Pradesh is known for wildlife and heritage sites.",
      famousPlaces: ["Khajuraho", "Kanha"],
      bestTime: "October to March",
      food: ["Poha", "Bhutte Ka Kees"],
      activities: ["Safari", "Historical Tour"],
    },
  },

  {
    id: 26,
    category: "Union-Territory",
    type: "india",
    vid: "https://www.pexels.com/download/video/31454292/",
    heading: "Andaman & Nicobar",

    details: {
      description:
        "Andaman is famous for beaches and marine adventure.",
      famousPlaces: ["Havelock Island", "Cellular Jail"],
      bestTime: "October to May",
      food: ["Seafood", "Coconut Curry"],
      activities: ["Scuba Diving", "Snorkeling"],
    },
  },

  {
    id: 27,
    category: "Union-Territory",
    type: "india",
    vid: "https://www.pexels.com/download/video/20794146/",
    heading: "Delhi",

    details: {
      description:
        "Delhi blends history, culture, and modern lifestyle.",
      famousPlaces: ["India Gate", "Red Fort"],
      bestTime: "October to March",
      food: ["Chole Bhature", "Butter Chicken"],
      activities: ["Street Food Tour", "Historical Visit"],
    },
  },

  {
    id: 28,
    category: "Union-Territory",
    type: "india",
    vid: "https://www.pexels.com/download/video/37256227/",
    heading: "Jammu & Kashmir",

    details: {
      description:
        "Jammu & Kashmir is famous for valleys and snowfall.",
      famousPlaces: ["Srinagar", "Gulmarg"],
      bestTime: "March to October",
      food: ["Kahwa", "Rogan Josh"],
      activities: ["Skiing", "Shikara Ride"],
    },
  },

  {
    id: 29,
    category: "Union-Territory",
    type: "india",
    vid: "https://www.pexels.com/download/video/17982168/",
    heading: "Ladakh",

    details: {
      description:
        "Ladakh is known for mountains, monasteries, and bike trips.",
      famousPlaces: ["Pangong Lake", "Leh Palace"],
      bestTime: "May to September",
      food: ["Momos", "Thukpa"],
      activities: ["Bike Riding", "Camping"],
    },
  },
];

export default tourismData;