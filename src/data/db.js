const tourismData = {
  tourism: [
    {
      id: 1,
      title: "Assam Tourism",
      video: "https://www.pexels.com/download/video/31646023/",
      category: ["Mountain", "WildLife", "Adventure"],

      details: {
        description:
          "Assam is famous for tea gardens, wildlife sanctuaries, the Brahmaputra River, and rich cultural heritage.",

        bestTime: "October to April",

        famousPlaces: [
          {
            name: "Kaziranga National Park",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "A UNESCO World Heritage Site famous for the one-horned rhinoceros and diverse wildlife.",
          },
          {
            name: "Majuli",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description:
              "The world's largest river island, known for its monasteries and Assamese culture.",
          },
          {
            name: "Guwahati",
            image:
              "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
            description:
              "The gateway to Northeast India and home to the famous Kamakhya Temple.",
          },
        ],

        food: [
          {
            name: "Khar",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554",
            description:
              "A traditional Assamese dish prepared with raw papaya, pulses, and alkaline water.",
          },
          {
            name: "Masor Tenga",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
            description:
              "A light and tangy fish curry, one of Assam's most popular dishes.",
          },
          {
            name: "Pitha",
            image:
              "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            description:
              "A traditional rice cake prepared during Assamese festivals and celebrations.",
          },
        ],

        activities: [
          {
            name: "Wildlife Safari",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "Enjoy jeep and elephant safaris through Kaziranga National Park.",
          },
          {
            name: "River Cruise",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Experience scenic cruises along the mighty Brahmaputra River.",
          },
          {
            name: "Tea Garden Visit",
            image:
              "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
            description:
              "Explore Assam's world-famous tea estates and learn about tea production.",
          },
        ],
      },
    },

    {
      id: 2,
      title: "Uttar Pradesh Tourism",
      video: "https://www.pexels.com/download/video/37129767/",
      category: ["Spiritual", "Heritage"],

      details: {
        description:
          "Uttar Pradesh is home to some of India's most sacred cities, historical monuments, and cultural landmarks.",

        bestTime: "October to March",

        famousPlaces: [
          {
            name: "Agra",
            image:
              "https://images.unsplash.com/photo-1564507592333-c60657eea523",
            description:
              "Home to the Taj Mahal, one of the Seven Wonders of the World.",
          },
          {
            name: "Varanasi",
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
            description:
              "One of the world's oldest living cities, situated on the banks of the Ganges.",
          },
          {
            name: "Ayodhya",
            image:
              "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
            description:
              "A sacred city believed to be the birthplace of Lord Rama.",
          },
        ],

        food: [
          {
            name: "Petha",
            image:
              "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
            description:
              "A famous sweet delicacy from Agra made from ash gourd.",
          },
          {
            name: "Kachori",
            image:
              "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
            description:
              "A crispy and spicy snack enjoyed throughout the state.",
          },
          {
            name: "Tunday Kabab",
            image:
              "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
            description:
              "A legendary Lucknow specialty known for its soft texture and rich flavors.",
          },
        ],

        activities: [
          {
            name: "Temple Visit",
            image:
              "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
            description:
              "Explore famous temples in Ayodhya, Mathura, and Varanasi.",
          },
          {
            name: "Historical Tour",
            image:
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
            description:
              "Visit world-famous monuments including the Taj Mahal and Fatehpur Sikri.",
          },
          {
            name: "Ganga Aarti Experience",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada",
            description:
              "Witness the spiritual evening Ganga Aarti at Varanasi Ghats.",
          },
        ],
      },
    },

    {
      id: 3,
      title: "Rajasthan Tourism",
      video: "https://www.pexels.com/download/video/18983874/",
      category: ["Heritage", "Adventure"],

      details: {
        description:
          "Rajasthan is known for its majestic forts, royal palaces, colorful culture, desert landscapes, and vibrant festivals.",

        bestTime: "November to February",

        famousPlaces: [
          {
            name: "Jaipur",
            image:
              "https://images.unsplash.com/photo-1477587458883-47145ed94245",
            description:
              "Known as the Pink City, Jaipur is famous for Amber Fort, Hawa Mahal, and royal heritage.",
          },
          {
            name: "Jaisalmer",
            image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
            description:
              "The Golden City of India, famous for its desert forts and sand dunes.",
          },
          {
            name: "Udaipur",
            image:
              "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
            description:
              "Known as the City of Lakes, Udaipur offers beautiful palaces and scenic waterfront views.",
          },
        ],

        food: [
          {
            name: "Dal Baati Churma",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            description:
              "The signature dish of Rajasthan made with baked wheat balls, lentils, and sweet churma.",
          },
          {
            name: "Laal Maas",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947",
            description:
              "A spicy mutton curry prepared with traditional Rajasthani spices.",
          },
          {
            name: "Ghewar",
            image:
              "https://images.unsplash.com/photo-1509440159596-0249088772ff",
            description:
              "A famous sweet delicacy especially popular during festivals.",
          },
        ],

        activities: [
          {
            name: "Camel Safari",
            image:
              "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            description:
              "Enjoy a thrilling camel ride through the golden sand dunes of Jaisalmer.",
          },
          {
            name: "Fort Exploration",
            image:
              "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
            description:
              "Visit iconic forts such as Mehrangarh, Amer Fort, and Chittorgarh.",
          },
          {
            name: "Cultural Festival Experience",
            image:
              "https://images.unsplash.com/photo-1513151233558-d860c5398176",
            description:
              "Experience folk dances, music, traditional attire, and local fairs.",
          },
        ],
      },
    },

    {
      id: 4,
      title: "Maharashtra Tourism",
      video: "https://www.pexels.com/download/video/31000790/",
      category: ["Beach", "Adventure", "Heritage"],

      details: {
        description:
          "Maharashtra is one of India's most diverse states, offering beautiful beaches, historic forts, hill stations, wildlife sanctuaries, and bustling cities like Mumbai.",

        bestTime: "October to March",

        famousPlaces: [
          {
            name: "Mumbai",
            image:
              "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
            description:
              "The financial capital of India, famous for Gateway of India, Marine Drive, and Bollywood.",
          },
          {
            name: "Lonavala",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "A popular hill station known for lush green valleys, waterfalls, and scenic viewpoints.",
          },
          {
            name: "Mahabaleshwar",
            image:
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            description:
              "A picturesque hill station famous for strawberry farms, lakes, and mountain views.",
          },
        ],

        food: [
          {
            name: "Vada Pav",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
            description:
              "Known as the burger of Mumbai, Vada Pav is Maharashtra's most famous street food.",
          },
          {
            name: "Misal Pav",
            image:
              "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
            description:
              "A spicy curry made with sprouts, topped with farsan and served with pav.",
          },
          {
            name: "Puran Poli",
            image:
              "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            description:
              "A traditional sweet flatbread stuffed with jaggery and lentils.",
          },
        ],

        activities: [
          {
            name: "Beach Tourism",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description:
              "Explore beautiful beaches like Alibaug, Ganpatipule, Tarkarli, and Kashid.",
          },
          {
            name: "Fort Trekking",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "Trek famous forts like Raigad, Sinhagad, Rajgad, and Pratapgad.",
          },
          {
            name: "Wildlife Safari",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "Visit Tadoba National Park and enjoy thrilling tiger safaris.",
          },
        ],
      },
    },

    {
      id: 5,
      title: "Jammu & Kashmir Tourism",
      video: "https://www.pexels.com/download/video/26244070/",
      category: ["Mountain", "Adventure"],

      details: {
        description:
          "Jammu & Kashmir is often called 'Paradise on Earth' because of its snow-capped mountains, beautiful valleys, pristine lakes, and breathtaking landscapes.",

        bestTime: "March to October",

        famousPlaces: [
          {
            name: "Srinagar",
            image:
              "https://images.unsplash.com/photo-1595815771614-ade5019c1c6f",
            description:
              "The summer capital of Jammu & Kashmir, famous for Dal Lake, Mughal Gardens, and houseboats.",
          },
          {
            name: "Gulmarg",
            image:
              "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
            description:
              "A world-famous skiing destination known for snow activities and scenic beauty.",
          },
          {
            name: "Pahalgam",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description:
              "A picturesque valley surrounded by mountains, rivers, and lush green meadows.",
          },
        ],

        food: [
          {
            name: "Rogan Josh",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947",
            description:
              "A flavorful Kashmiri lamb curry cooked with aromatic spices.",
          },
          {
            name: "Kahwa",
            image:
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            description:
              "A traditional Kashmiri green tea infused with saffron, almonds, and spices.",
          },
          {
            name: "Yakhni",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
            description:
              "A rich yogurt-based curry prepared with tender meat and mild spices.",
          },
        ],

        activities: [
          {
            name: "Skiing",
            image:
              "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
            description:
              "Enjoy skiing and snowboarding adventures in Gulmarg during winter.",
          },
          {
            name: "Shikara Ride",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Take a peaceful Shikara boat ride on the famous Dal Lake.",
          },
          {
            name: "Camping & Trekking",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "Explore scenic trekking routes and camp amidst the Himalayan beauty.",
          },
        ],
      },
    },

    {
      id: 6,
      title: "Uttarakhand Tourism",
      video: "https://www.pexels.com/download/video/6595717/",
      category: ["Mountain", "Spiritual", "Adventure"],

      details: {
        description:
          "Uttarakhand, known as the 'Land of Gods', is famous for its Himalayan peaks, spiritual destinations, wildlife, and adventure activities.",

        bestTime: "March to June",

        famousPlaces: [
          {
            name: "Rishikesh",
            image:
              "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
            description:
              "Known as the Yoga Capital of the World and famous for the Ganga River and adventure sports.",
          },
          {
            name: "Mussoorie",
            image:
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            description:
              "Popularly called the Queen of Hills, offering breathtaking mountain views.",
          },
          {
            name: "Nainital",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description:
              "A beautiful hill station famous for its lake, scenic beauty, and pleasant weather.",
          },
        ],

        food: [
          {
            name: "Kafuli",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            description:
              "A traditional dish made from spinach and fenugreek leaves.",
          },
          {
            name: "Aloo Ke Gutke",
            image:
              "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
            description:
              "A spicy and flavorful potato dish popular across Uttarakhand.",
          },
          {
            name: "Bal Mithai",
            image:
              "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
            description:
              "A famous brown chocolate-like sweet coated with sugar balls.",
          },
        ],

        activities: [
          {
            name: "River Rafting",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Experience thrilling white-water rafting in the Ganges at Rishikesh.",
          },
          {
            name: "Trekking",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "Explore scenic Himalayan trekking routes and mountain trails.",
          },
          {
            name: "Camping",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "Enjoy riverside and mountain camping under the stars.",
          },
        ],
      },
    },

    {
      id: 7,
      title: "South India Tourism",
      video: "https://www.pexels.com/download/video/18560011/",
      category: ["Beach", "WildLife", "Spiritual"],

      details: {
        description:
          "South India is renowned for its serene backwaters, beautiful beaches, ancient temples, rich traditions, lush greenery, and delicious cuisine.",

        bestTime: "October to March",

        famousPlaces: [
          {
            name: "Kerala",
            image:
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
            description:
              "Known as God's Own Country, famous for backwaters, houseboats, tea plantations, and beaches.",
          },
          {
            name: "Tamil Nadu",
            image:
              "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
            description:
              "Home to magnificent temples, rich culture, and classical traditions.",
          },
          {
            name: "Karnataka",
            image:
              "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
            description:
              "Famous for heritage sites, waterfalls, hill stations, and modern cities like Bengaluru.",
          },
        ],

        food: [
          {
            name: "Dosa",
            image:
              "https://images.unsplash.com/photo-1630383249896-424e482df921",
            description:
              "A crispy rice and lentil crepe served with chutney and sambar.",
          },
          {
            name: "Idli",
            image:
              "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
            description:
              "Soft steamed rice cakes that are a staple breakfast dish.",
          },
          {
            name: "Appam",
            image:
              "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            description:
              "A soft and fluffy rice pancake popular in Kerala cuisine.",
          },
        ],

        activities: [
          {
            name: "Temple Visit",
            image:
              "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
            description:
              "Explore ancient temples such as Meenakshi Temple and Brihadeeswarar Temple.",
          },
          {
            name: "Backwater Cruise",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Enjoy a peaceful houseboat ride through Kerala's famous backwaters.",
          },
          {
            name: "Wildlife Safari",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "Visit wildlife sanctuaries and national parks like Bandipur and Periyar.",
          },
        ],
      },
    },
    {
      id: 8,
      title: "Kerala Tourism",
      video: "https://www.pexels.com/download/video/35097638/",

      category: ["Beach", "Nature", "Backwaters"],

      details: {
        description:
          "Kerala, known as 'God's Own Country', is famous for its serene backwaters, lush green landscapes, tea plantations, wildlife sanctuaries, and beautiful beaches.",

        bestTime: "September to March",

        famousPlaces: [
          {
            name: "Munnar",
            image:
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
            description:
              "A picturesque hill station known for tea gardens, misty mountains, and breathtaking scenery.",
          },
          {
            name: "Alleppey",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Famous for its backwaters, houseboat cruises, and tranquil waterways.",
          },
          {
            name: "Kovalam",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description:
              "A popular beach destination known for golden sands and lighthouse views.",
          },
        ],

        food: [
          {
            name: "Appam",
            image:
              "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
            description:
              "A soft rice pancake traditionally served with vegetable stew or curry.",
          },
          {
            name: "Sadya",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554",
            description:
              "A traditional vegetarian feast served on banana leaves during festivals.",
          },
          {
            name: "Kerala Fish Curry",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
            description:
              "A spicy and flavorful fish curry prepared with coconut and local spices.",
          },
        ],

        activities: [
          {
            name: "Backwater Cruise",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Enjoy a relaxing houseboat cruise through Kerala's famous backwaters.",
          },
          {
            name: "Ayurvedic Spa",
            image:
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
            description:
              "Experience traditional Ayurvedic treatments and wellness therapies.",
          },
          {
            name: "Wildlife Safari",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "Explore wildlife sanctuaries like Periyar and Wayanad.",
          },
        ],
      },
    },
    {
      id: 9,
      title: "West Bengal Tourism",
      video: "https://www.pexels.com/download/video/27425487/",

      category: ["Heritage", "Hill Station", "Culture"],

      details: {
        description:
          "West Bengal is a land of rich culture, colonial heritage, scenic hill stations, tea gardens, mangrove forests, and delicious cuisine.",

        bestTime: "October to March",

        famousPlaces: [
          {
            name: "Kolkata",
            image:
              "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1",
            description:
              "The cultural capital of India, known for Victoria Memorial, Howrah Bridge, and colonial architecture.",
          },
          {
            name: "Darjeeling",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "A beautiful hill station famous for tea gardens, toy trains, and Himalayan views.",
          },
          {
            name: "Sundarbans",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "The world's largest mangrove forest and home to the Royal Bengal Tiger.",
          },
        ],

        food: [
          {
            name: "Rosogolla",
            image:
              "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
            description:
              "A famous Bengali sweet made from soft cottage cheese balls soaked in sugar syrup.",
          },
          {
            name: "Macher Jhol",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
            description:
              "A traditional Bengali fish curry cooked with vegetables and aromatic spices.",
          },
          {
            name: "Mishti Doi",
            image:
              "https://images.unsplash.com/photo-1571212515416-fca88b972f83",
            description:
              "A delicious sweetened yogurt that is a favorite Bengali dessert.",
          },
        ],

        activities: [
          {
            name: "Heritage Tourism",
            image:
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
            description:
              "Explore colonial architecture, museums, and historical landmarks of Kolkata.",
          },
          {
            name: "Tea Garden Visit",
            image:
              "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
            description:
              "Visit the famous tea estates of Darjeeling and learn about tea production.",
          },
          {
            name: "Wildlife Safari",
            image:
              "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
            description:
              "Enjoy wildlife tours through the Sundarbans mangrove forests.",
          },
        ],
      },
    },
    {
      id: 10,
      title: "Himachal Pradesh Tourism",
      video: "https://www.pexels.com/download/video/29979281/",

      category: ["Mountain", "Adventure", "Hill Station"],

      details: {
        description:
          "Himachal Pradesh is a paradise of snow-capped mountains, lush valleys, rivers, and adventure sports. It is one of India's most popular destinations for nature lovers and thrill seekers.",

        bestTime: "March to June and December to February",

        famousPlaces: [
          {
            name: "Shimla",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            description:
              "The capital of Himachal Pradesh, famous for colonial architecture, Mall Road, and scenic mountain views.",
          },
          {
            name: "Manali",
            image:
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            description:
              "A beautiful hill station known for snow activities, Solang Valley, and Rohtang Pass.",
          },
          {
            name: "Spiti Valley",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "A cold desert mountain valley famous for monasteries, rugged landscapes, and adventure tourism.",
          },
        ],

        food: [
          {
            name: "Siddu",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            description:
              "A traditional steamed bread stuffed with local ingredients and served with ghee.",
          },
          {
            name: "Madra",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554",
            description:
              "A famous Himachali dish prepared with chickpeas and yogurt-based gravy.",
          },
          {
            name: "Thukpa",
            image: "https://images.unsplash.com/photo-1555126634-323283e090fa",
            description:
              "A delicious Tibetan noodle soup widely enjoyed in the Himalayan region.",
          },
        ],

        activities: [
          {
            name: "Trekking",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "Explore scenic mountain trails including Hampta Pass, Triund, and Beas Kund.",
          },
          {
            name: "River Rafting",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Enjoy thrilling rafting experiences in the Beas and Sutlej rivers.",
          },
          {
            name: "Skiing",
            image:
              "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
            description:
              "Experience skiing and snowboarding in Solang Valley and Narkanda.",
          },
        ],
      },
    },
    {
      id: 11,
      title: "Andaman & Nicobar Tourism",
      video: "https://www.pexels.com/download/video/31454292/",

      category: ["Beach", "Adventure", "Island"],

      details: {
        description:
          "Andaman & Nicobar Islands are famous for crystal-clear waters, white sandy beaches, coral reefs, marine life, and thrilling water sports. It is one of India's most beautiful tropical destinations.",

        bestTime: "October to May",

        famousPlaces: [
          {
            name: "Havelock Island",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description:
              "One of the most popular islands known for scuba diving, snorkeling, and pristine beaches.",
          },
          {
            name: "Cellular Jail",
            image:
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
            description:
              "A historic colonial prison that played a significant role in India's freedom struggle.",
          },
          {
            name: "Radhanagar Beach",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            description:
              "Awarded as one of Asia's best beaches, famous for its turquoise waters and stunning sunsets.",
          },
        ],

        food: [
          {
            name: "Seafood",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
            description:
              "Fresh fish, prawns, crabs, and lobsters prepared with local spices.",
          },
          {
            name: "Coconut Curry",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554",
            description:
              "A flavorful curry prepared using fresh coconut and regional spices.",
          },
          {
            name: "Grilled Fish",
            image:
              "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
            description: "A popular island delicacy served fresh from the sea.",
          },
        ],

        activities: [
          {
            name: "Scuba Diving",
            image: "https://images.unsplash.com/photo-1551244072-5d12893278ab",
            description:
              "Explore colorful coral reefs and marine life beneath the Andaman Sea.",
          },
          {
            name: "Snorkeling",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
            description:
              "Experience underwater beauty in shallow coral-rich waters.",
          },
          {
            name: "Island Hopping",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
            description:
              "Visit multiple islands and discover hidden beaches and natural attractions.",
          },
        ],
      },
    },
    {
      id: 12,
      title: "Delhi Tourism",
      video: "https://www.pexels.com/download/video/20794146/",

      category: ["Heritage", "Food", "Culture"],

      details: {
        description:
          "Delhi, the capital of India, is a vibrant blend of ancient history and modern development. It is famous for its historical monuments, bustling markets, diverse cuisine, and cultural heritage.",

        bestTime: "October to March",

        famousPlaces: [
          {
            name: "India Gate",
            image:
              "https://images.unsplash.com/photo-1587474260584-136574528ed5",
            description:
              "A war memorial dedicated to Indian soldiers and one of Delhi's most iconic landmarks.",
          },
          {
            name: "Red Fort",
            image:
              "https://images.unsplash.com/photo-1585136917237-3d6d4d3d0e2f",
            description:
              "A UNESCO World Heritage Site built by Mughal Emperor Shah Jahan.",
          },
          {
            name: "Qutub Minar",
            image:
              "https://images.unsplash.com/photo-1564507592333-c60657eea523",
            description:
              "The tallest brick minaret in the world and a masterpiece of Indo-Islamic architecture.",
          },
        ],

        food: [
          {
            name: "Chole Bhature",
            image:
              "https://images.unsplash.com/photo-1626132647523-66e2f6f4b8a0",
            description:
              "A popular North Indian dish consisting of spicy chickpeas served with fried bread.",
          },
          {
            name: "Butter Chicken",
            image:
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
            description:
              "Delhi's famous creamy tomato-based chicken curry loved around the world.",
          },
          {
            name: "Paratha",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19",
            description:
              "Stuffed flatbreads available in a variety of flavors at Chandni Chowk.",
          },
        ],

        activities: [
          {
            name: "Street Food Tour",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
            description:
              "Explore Delhi's famous street food hubs including Chandni Chowk and Connaught Place.",
          },
          {
            name: "Historical Visit",
            image:
              "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
            description:
              "Visit iconic historical sites such as Red Fort, Humayun's Tomb, and Qutub Minar.",
          },
          {
            name: "Shopping Experience",
            image:
              "https://images.unsplash.com/photo-1483985988355-763728e1935b",
            description:
              "Shop at Sarojini Nagar, Janpath, Chandni Chowk, and modern malls.",
          },
        ],
      },
    },
    {
      id: 13,
      title: "Ladakh Tourism",
      video: "https://www.pexels.com/download/video/17982168/",

      category: ["Mountain", "Adventure", "Culture"],

      details: {
        description:
          "Ladakh, known as the 'Land of High Passes', is famous for its breathtaking mountains, crystal-clear lakes, ancient monasteries, and thrilling road trips. It is one of India's most spectacular adventure destinations.",

        bestTime: "May to September",

        famousPlaces: [
          {
            name: "Pangong Lake",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "A stunning high-altitude lake known for its changing shades of blue and scenic beauty.",
          },
          {
            name: "Leh Palace",
            image:
              "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
            description:
              "A historic royal palace offering panoramic views of Leh town and surrounding mountains.",
          },
          {
            name: "Nubra Valley",
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            description:
              "A beautiful valley famous for sand dunes, double-humped camels, and breathtaking landscapes.",
          },
        ],

        food: [
          {
            name: "Momos",
            image:
              "https://images.unsplash.com/photo-1626804475297-41608ea09aeb",
            description:
              "Traditional Tibetan-style dumplings filled with vegetables or meat.",
          },
          {
            name: "Thukpa",
            image: "https://images.unsplash.com/photo-1555126634-323283e090fa",
            description:
              "A warm noodle soup popular across Ladakh and the Himalayan region.",
          },
          {
            name: "Butter Tea",
            image:
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            description:
              "A traditional Ladakhi beverage made with tea, butter, and salt.",
          },
        ],

        activities: [
          {
            name: "Bike Riding",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
            description:
              "Experience thrilling bike expeditions on some of the world's highest motorable roads.",
          },
          {
            name: "Camping",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            description:
              "Enjoy unforgettable nights under the stars near Pangong Lake and Nubra Valley.",
          },
          {
            name: "Monastery Visit",
            image:
              "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
            description:
              "Explore ancient monasteries such as Hemis, Thiksey, and Diskit Monastery.",
          },
        ],
      },
    },
  ],

  category: [
    {
      id: 8,
      title: "Mountain",
      image:
        "https://images.unsplash.com/photo-1741836315165-89e7dfd61613?w=600",

      details: {
        description:
          "Mountain destinations in India are famous for snow, trekking, valleys, and scenic beauty.",

        famousStates: [
          {
            name: "Jammu & Kashmir",
            image:
              "https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?w=600",
            description:
              "Known for Gulmarg, Sonmarg, snow-covered mountains, and breathtaking valleys.",
          },
          {
            name: "Uttarakhand",
            image:
              "https://images.pexels.com/photos/14065145/pexels-photo-14065145.jpeg",
            description:
              "Famous for Nainital, Mussoorie, Rishikesh, and Himalayan landscapes.",
          },
          {
            name: "Himachal Pradesh",
            image:
              "https://images.pexels.com/photos/30550231/pexels-photo-30550231.jpeg",
            description:
              "Popular for Shimla, Manali, snow adventures, and scenic mountain beauty.",
          },
          {
            name: "Sikkim",
            image:
              "https://images.pexels.com/photos/19864968/pexels-photo-19864968.jpeg",
            description:
              "Home to Kanchenjunga, monasteries, and stunning mountain views.",
          },
          {
            name: "Meghalaya",
            image:
              "https://images.pexels.com/photos/18476582/pexels-photo-18476582.jpeg",
            description:
              "Known for living root bridges, waterfalls, caves, and green hills.",
          },
        ],

        famousPlaces: [
          {
            name: "Gulmarg",
            image:
              "https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?w=600",
            description:
              "A famous ski resort in Jammu & Kashmir known for snow sports and scenic beauty.",
          },
          {
            name: "Manali",
            image:
              "https://images.pexels.com/photos/31776512/pexels-photo-31776512.jpeg",
            description:
              "A popular hill station offering adventure sports and mountain views.",
          },
          {
            name: "Nainital",
            image:
              "https://images.pexels.com/photos/11847569/pexels-photo-11847569.jpeg",
            description:
              "Known for its beautiful lake, pleasant weather, and surrounding hills.",
          },
          {
            name: "Darjeeling",
            image:
              "https://images.pexels.com/photos/36672890/pexels-photo-36672890.jpeg",
            description:
              "Famous for tea gardens, toy train rides, and Himalayan views.",
          },
          {
            name: "Shillong",
            image:
              "https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg",
            description:
              "The capital of Meghalaya, known as the Scotland of the East.",
          },
        ],

        bestTime: "March to June",

        activities: ["Trekking", "Camping", "Skiing", "River Rafting"],
      },
    },

    {
      id: 9,
      title: "Beach",
      image: "https://images.unsplash.com/photo-1559671888-af88d0c275bd?w=600",

      details: {
        description:
          "Beach destinations offer relaxing coastlines, nightlife, seafood, and water sports.",

        famousStates: [
          {
            name: "Goa",
            image:
              "https://images.pexels.com/photos/978667/pexels-photo-978667.jpeg",
            description:
              "India's most famous beach destination with nightlife and water sports.",
          },
          {
            name: "Kerala",
            image:
              "https://images.pexels.com/photos/6652178/pexels-photo-6652178.jpeg",
            description:
              "Known for beaches, backwaters, houseboats, and natural beauty.",
          },
          {
            name: "Maharashtra",
            image:
              "https://images.pexels.com/photos/1462641/pexels-photo-1462641.jpeg",
            description:
              "Famous for Juhu Beach, Alibaug, and the Konkan coastline.",
          },
          {
            name: "Andaman & Nicobar",
            image:
              "https://images.pexels.com/photos/14313849/pexels-photo-14313849.jpeg",
            description:
              "Offers crystal-clear waters, coral reefs, and pristine beaches.",
          },
          {
            name: "Tamil Nadu",
            image:
              "https://images.pexels.com/photos/5732287/pexels-photo-5732287.jpeg",
            description:
              "Known for Marina Beach and beautiful coastal temples.",
          },
        ],

        famousPlaces: [
          {
            name: "Baga Beach",
            image:
              "https://images.pexels.com/photos/28355680/pexels-photo-28355680.jpeg",
            description:
              "One of Goa's most popular beaches, known for nightlife and water sports.",
          },
          {
            name: "Marina Beach",
            image:
              "https://images.unsplash.com/photo-1559671888-af88d0c275bd?w=600",
            description: "India's longest urban beach located in Chennai.",
          },
          {
            name: "Alleppey",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600",
            description: "Known for Kerala backwaters and houseboat cruises.",
          },
          {
            name: "Konkan Coastal Line",
            image:
              "https://images.pexels.com/photos/28368719/pexels-photo-28368719.jpeg",
            description: "A famous beach destination in Mumbai.",
          },
          {
            name: "Havelock Island",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
            description: "Home to Radhanagar Beach and crystal-clear waters.",
          },
        ],

        bestTime: "October to March",

        activities: ["Scuba Diving", "Surfing", "Beach Party", "Boat Ride"],
      },
    },

    {
      id: 10,
      title: "Spiritual",
      image:
        "https://plus.unsplash.com/premium_photo-1697730355701-06a022eb69cd?w=600",

      details: {
        description:
          "Spiritual destinations in India are famous for temples, rituals, yoga, and peace.",

        famousStates: [
          {
            name: "Uttar Pradesh",
            image:
              "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600",
            description:
              "Home to Varanasi, Ayodhya, and many important pilgrimage sites.",
          },
          {
            name: "Uttarakhand",
            image:
              "https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg",
            description:
              "Known for Haridwar, Rishikesh, Kedarnath, and Badrinath.",
          },
          {
            name: "Tamil Nadu",
            image:
              "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
            description:
              "Famous for Meenakshi Temple, Rameswaram, and ancient temples.",
          },
        ],

        famousPlaces: [
          {
            name: "Varanasi",
            image:
              "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600",
            description:
              "One of the oldest living cities and a major Hindu pilgrimage site.",
          },
          {
            name: "Rishikesh",
            image:
              "https://images.pexels.com/photos/15196909/pexels-photo-15196909.jpeg",
            description: "Known as the Yoga Capital of the World.",
          },
          {
            name: "Bodh Gaya",
            image:
              "https://images.pexels.com/photos/7792726/pexels-photo-7792726.jpeg",
            description:
              "The place where Gautama Buddha attained enlightenment.",
          },
          {
            name: "Madurai",
            image:
              "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
            description: "Famous for the Meenakshi Amman Temple.",
          },
          {
            name: "Haridwar",
            image:
              "https://images.pexels.com/photos/10783023/pexels-photo-10783023.jpeg",
            description: "Known for Ganga Aarti and spiritual significance.",
          },
        ],

        bestTime: "October to March",

        activities: ["Temple Visit", "Meditation", "Yoga", "Ganga Aarti"],
      },
    },

    {
      id: 11,
      title: "WildLife",
      image:
        "https://images.unsplash.com/photo-1589657429197-ecba47e3acd8?w=600",

      details: {
        description:
          "Wildlife tourism in India is known for forests, safaris, and rare animal species.",

        famousStates: [
          {
            name: "Assam",
            image:
              "https://images.pexels.com/photos/34030626/pexels-photo-34030626.jpeg",
            description:
              "Home to Kaziranga National Park and one-horned rhinoceroses.",
          },
          {
            name: "Maharashtra",
            image:
              "https://images.pexels.com/photos/30889519/pexels-photo-30889519.jpeg",
            description: "Known for Tadoba Tiger Reserve and wildlife safaris.",
          },
          {
            name: "Uttarakhand",
            image:
              "https://images.pexels.com/photos/29666809/pexels-photo-29666809.png",
            description:
              "Famous for Jim Corbett National Park and rich biodiversity.",
          },
          {
            name: "Rajasthan",
            image:
              "https://images.pexels.com/photos/12436501/pexels-photo-12436501.jpeg",
            description:
              "Known for Ranthambore National Park and tiger safaris.",
          },
          {
            name: "Karnataka",
            image:
              "https://images.pexels.com/photos/982021/pexels-photo-982021.jpeg",
            description:
              "Home to Bandipur National Park and wildlife reserves.",
          },
          {
            name: "West Bengal",
            image:
              "https://images.pexels.com/photos/18064294/pexels-photo-18064294.jpeg",
            description:
              "Famous for Sundarbans mangrove forests and Royal Bengal Tigers.",
          },
        ],

        famousPlaces: [
          {
            name: "Kaziranga National Park",
            image:
              "https://images.pexels.com/photos/30317733/pexels-photo-30317733.jpeg",
            description:
              "UNESCO World Heritage Site famous for one-horned rhinoceroses.",
          },
          {
            name: "Ranthambore National Park",
            image:
              "https://images.pexels.com/photos/18947948/pexels-photo-18947948.jpeg",
            description:
              "One of India's best tiger reserves located in Rajasthan.",
          },
          {
            name: "Jim Corbett National Park",
            image:
              "https://images.pexels.com/photos/29666819/pexels-photo-29666819.png",
            description:
              "India's oldest national park and a major tiger reserve.",
          },
          {
            name: "Bandipur National Park",
            image:
              "https://images.pexels.com/photos/35652356/pexels-photo-35652356.jpeg",
            description: "A major wildlife sanctuary in Karnataka.",
          },
          {
            name: "Sundarbans National Park",
            image:
              "https://images.pexels.com/photos/31447782/pexels-photo-31447782.jpeg",
            description: "Known for mangrove forests and Royal Bengal Tigers.",
          },
        ],

        bestTime: "October to June",

        activities: [
          "Jungle Safari",
          "Bird Watching",
          "Camping",
          "Photography",
        ],
      },
    },

    {
      id: 12,
      title: "Adventure",
      image:
        "https://images.unsplash.com/photo-1769963608832-cc25836772e1?w=600",

      details: {
        description:
          "Adventure tourism includes trekking, rafting, skiing, biking, and outdoor sports.",

        famousStates: [
          {
            name: "Ladakh",
            image:
              "https://images.pexels.com/photos/34484892/pexels-photo-34484892.jpeg",
            description:
              "A paradise for biking, trekking, camping, and mountain adventures.",
          },
          {
            name: "Uttarakhand",
            image:
              "https://images.pexels.com/photos/31758766/pexels-photo-31758766.jpeg",
            description:
              "Popular for river rafting, trekking, and bungee jumping.",
          },
          {
            name: "Himachal Pradesh",
            image:
              "https://images.pexels.com/photos/6147968/pexels-photo-6147968.jpeg",
            description:
              "Offers skiing, paragliding, trekking, and mountain adventures.",
          },
          {
            name: "Goa",
            image:
              "https://images.pexels.com/photos/1540108/pexels-photo-1540108.jpeg",
            description:
              "Known for scuba diving, parasailing, and water sports.",
          },
          {
            name: "Meghalaya",
            image:
              "https://images.pexels.com/photos/14585063/pexels-photo-14585063.jpeg",
            description:
              "Famous for cave exploration, trekking, and adventure tourism.",
          },
        ],

        famousPlaces: [
          {
            name: "Leh",
            image:
              "https://images.pexels.com/photos/18009979/pexels-photo-18009979.jpeg",
            description: "A paradise for bikers and adventure enthusiasts.",
          },
          {
            name: "Rishikesh",
            image:
              "https://images.pexels.com/photos/26811613/pexels-photo-26811613.jpeg",
            description: "Popular for river rafting and bungee jumping.",
          },
          {
            name: "Manali",
            image:
              "https://images.pexels.com/photos/11156954/pexels-photo-11156954.jpeg",
            description: "Offers skiing, trekking, and paragliding.",
          },
          {
            name: "Cherrapunji",
            image:
              "https://images.pexels.com/photos/28656579/pexels-photo-28656579.jpeg",
            description: "Known for caves, waterfalls, and trekking routes.",
          },
        ],

        bestTime: "March to July",

        activities: [
          "Paragliding",
          "River Rafting",
          "Bungee Jumping",
          "Bike Riding",
        ],
      },
    },

    {
      id: 13,
      title: "Heritage",
      image:
        "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?w=600",

      details: {
        description:
          "Heritage tourism showcases India's forts, palaces, monuments, and historical culture.",

        famousStates: [
          {
            name: "Rajasthan",
            image:
              "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
            description:
              "Rajasthan is famous for magnificent forts, royal palaces, and rich cultural heritage.",
          },
          {
            name: "Delhi",
            image:
              "https://images.pexels.com/photos/4248537/pexels-photo-4248537.jpeg",
            description:
              "Delhi is home to historical monuments like Red Fort, Humayun's Tomb, and Qutub Minar.",
          },
          {
            name: "Uttar Pradesh",
            image:
              "https://images.pexels.com/photos/12446384/pexels-photo-12446384.jpeg",
            description:
              "Uttar Pradesh is known for the Taj Mahal, Agra Fort, and spiritual heritage.",
          },
          {
            name: "Maharashtra",
            image:
              "https://images.pexels.com/photos/29541057/pexels-photo-29541057.jpeg",
            description:
              "Maharashtra is famous for Ajantha Ellora Caves, Forts.",
          },
          {
            name: "Karnataka",
            image:
              "https://images.pexels.com/photos/9882016/pexels-photo-9882016.jpeg",
            description:
              "Karnataka is renowned for Hampi, Mysore Palace, and historical monuments.",
          },
        ],

        famousPlaces: [
          {
            name: "Taj Mahal",
            image:
              "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
            description:
              "One of the Seven Wonders of the World located in Agra.",
          },
          {
            name: "Red Fort",
            image:
              "https://images.pexels.com/photos/33928936/pexels-photo-33928936.jpeg",
            description: "A UNESCO World Heritage Site in Delhi.",
          },
          {
            name: "Hampi",
            image:
              "https://images.pexels.com/photos/28868115/pexels-photo-28868115.jpeg",
            description: "Ancient ruins of the Vijayanagara Empire.",
          },
          {
            name: "Ellora Caves",
            image:
              "https://images.pexels.com/photos/9455189/pexels-photo-9455189.jpeg",
            description: "Known for its magnificent temple architecture.",
          },
          {
            name: "Amer Fort",
            image:
              "https://images.pexels.com/photos/33448400/pexels-photo-33448400.jpeg",
            description: "A majestic fort located in Jaipur, Rajasthan.",
          },
        ],

        bestTime: "October to March",

        activities: [
          "Historical Tour",
          "Museum Visit",
          "Photography",
          "Cultural Events",
        ],
      },
    },
  ],
  festival: [
    {
      id: 14,
      heading: "Diwali",
      state: "Pan India",
      category: ["Culture", "Heritage"],
      image:
        "https://images.pexels.com/photos/8887053/pexels-photo-8887053.jpeg",

      details: {
        description:
          "Diwali, the Festival of Lights, celebrates the victory of light over darkness.",

        famousPlaces: [
          {
            name: "Ayodhya",
            image:
              "https://images.pexels.com/photos/4533747/pexels-photo-4533747.jpeg",
            description:
              "Ayodhya is beautifully illuminated during Diwali celebrations.",
          },
          {
            name: "Varanasi",
            image:
              "https://images.pexels.com/photos/18215015/pexels-photo-18215015.jpeg",
            description: "Famous for grand Ganga Aarti and thousands of diyas.",
          },
          {
            name: "Jaipur",
            image:
              "https://images.pexels.com/photos/4476397/pexels-photo-4476397.jpeg",
            description: "Known for colorful lights and festive decorations.",
          },
        ],

        bestTime: "October - November",

        food: [
          {
            name: "Laddu",
            image:
              "https://images.pexels.com/photos/5350676/pexels-photo-5350676.jpeg",
            description: "A traditional sweet enjoyed during Diwali.",
          },
          {
            name: "Kaju Katli",
            image:
              "https://images.pexels.com/photos/10514163/pexels-photo-10514163.jpeg",
            description: "Popular cashew-based festive sweet.",
          },
          {
            name: "Chakli",
            image:
              "https://images.pexels.com/photos/12865863/pexels-photo-12865863.jpeg",
            description: "Crunchy savory snack prepared during Diwali.",
          },
        ],

        activities: [
          {
            name: "Fireworks",
            image:
              "https://images.pexels.com/photos/1580085/pexels-photo-1580085.jpeg",
            description: "People celebrate with colorful fireworks displays.",
          },
          {
            name: "Temple Visit",
            image:
              "https://images.pexels.com/photos/10144528/pexels-photo-10144528.jpeg",
            description: "Families visit temples and perform prayers.",
          },
          {
            name: "Decoration",
            image:
              "https://images.pexels.com/photos/8887068/pexels-photo-8887068.jpeg",
            description: "Homes are decorated with diyas and rangoli.",
          },
        ],
      },
    },

    {
      id: 15,
      heading: "Holi",
      state: "Uttar Pradesh",
      category: ["Culture", "Fun"],
      image:
        "https://images.pexels.com/photos/36684524/pexels-photo-36684524.jpeg",

      details: {
        description:
          "Holi is the vibrant Festival of Colors celebrated across India with joy, music, dance, and traditional sweets. It marks the arrival of spring and the victory of good over evil.",

        famousPlaces: [
          {
            name: "Mathura",
            image:
              "https://images.pexels.com/photos/31203519/pexels-photo-31203519.jpeg",
            description:
              "Birthplace of Lord Krishna and one of the most famous places to celebrate Holi.",
          },
          {
            name: "Vrindavan",
            image:
              "https://images.pexels.com/photos/11526024/pexels-photo-11526024.jpeg",
            description:
              "Known for week-long Holi celebrations in temples and streets.",
          },
          {
            name: "Barsana",
            image:
              "https://images.pexels.com/photos/20691505/pexels-photo-20691505.jpeg",
            description:
              "Famous for Lathmar Holi where women playfully hit men with sticks.",
          },
        ],

        bestTime: "March",

        food: [
          {
            name: "Gujiya",
            image:
              "https://images.pexels.com/photos/12469922/pexels-photo-12469922.jpeg",
            description:
              "A sweet dumpling filled with khoya, dry fruits, and coconut.",
          },
          {
            name: "Thandai",
            image:
              "https://images.pexels.com/photos/6808666/pexels-photo-6808666.jpeg",
            description:
              "Traditional milk-based festive drink enjoyed during Holi.",
          },
        ],

        activities: [
          {
            name: "Color Celebration",
            image:
              "https://images.pexels.com/photos/11511275/pexels-photo-11511275.jpeg",
            description:
              "People throw colorful powders and celebrate together.",
          },
          {
            name: "Music & Dance",
            image:
              "https://images.pexels.com/photos/19360777/pexels-photo-19360777.jpeg",
            description:
              "Festive gatherings feature music, dance, and cultural performances.",
          },
          {
            name: "Community Gatherings",
            image:
              "https://images.pexels.com/photos/16072789/pexels-photo-16072789.jpeg",
            description:
              "Families and friends come together to celebrate unity and happiness.",
          },
        ],
      },
    },

    {
      id: 16,
      heading: "Durga Puja",
      state: "West Bengal",
      category: ["Culture", "Spiritual"],
      image:
        "https://images.pexels.com/photos/34283958/pexels-photo-34283958.png",

      details: {
        description:
          "Durga Puja is the grand celebration of Goddess Durga, symbolizing the victory of good over evil. It is one of the biggest festivals in India, especially in West Bengal.",

        famousPlaces: [
          {
            name: "Kolkata",
            image:
              "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=600",
            description:
              "The heart of Durga Puja celebrations with magnificent pandals and cultural events.",
          },
          {
            name: "Howrah",
            image:
              "https://images.pexels.com/photos/9461013/pexels-photo-9461013.jpeg",
            description:
              "Known for traditional Durga Puja festivities and community celebrations.",
          },
        ],

        bestTime: "September - October",

        food: [
          {
            name: "Khichuri",
            image:
              "https://images.pexels.com/photos/34159111/pexels-photo-34159111.jpeg",
            description:
              "Traditional bhog offered to devotees during Durga Puja.",
          },
          {
            name: "Rosogolla",
            image:
              "https://images.pexels.com/photos/8788869/pexels-photo-8788869.jpeg",
            description: "A famous Bengali sweet enjoyed during the festival.",
          },
        ],

        activities: [
          {
            name: "Pandal Hopping",
            image:
              "https://images.pexels.com/photos/9910057/pexels-photo-9910057.jpeg",
            description:
              "Visitors explore beautifully themed Durga Puja pandals across the city.",
          },
          {
            name: "Cultural Programs",
            image:
              "https://images.pexels.com/photos/18948696/pexels-photo-18948696.jpeg",
            description:
              "Music, dance, drama, and cultural performances are organized throughout the festival.",
          },
          {
            name: "Sindoor Khela",
            image:
              "https://images.pexels.com/photos/19381668/pexels-photo-19381668.jpeg",
            description:
              "A traditional ritual where married women apply vermilion to each other on the last day.",
          },
        ],
      },
    },

    {
      id: 17,
      heading: "Ganesh Chaturthi",
      state: "Maharashtra",
      category: ["Spiritual", "Culture"],
      image:
        "https://images.pexels.com/photos/30184142/pexels-photo-30184142.jpeg",

      details: {
        description:
          "Ganesh Chaturthi celebrates the birth of Lord Ganesha with devotion and grand processions.",

        famousPlaces: [
          {
            name: "Mumbai",
            image:
              "https://images.pexels.com/photos/28157061/pexels-photo-28157061.jpeg",
            description:
              "Mumbai hosts the most famous Ganesh Chaturthi celebrations.",
          },
          {
            name: "Pune",
            image:
              "https://images.pexels.com/photos/19656236/pexels-photo-19656236.jpeg",
            description:
              "Known for traditional and cultural Ganesh festivities.",
          },
        ],

        bestTime: "August - September",

        food: [
          {
            name: "Modak",
            image:
              "https://images.pexels.com/photos/33643272/pexels-photo-33643272.jpeg",
            description: "Lord Ganesha's favorite sweet.",
          },
          {
            name: "Puran Poli",
            image:
              "https://images.pexels.com/photos/7837973/pexels-photo-7837973.jpeg",
            description: "Traditional Maharashtrian festive delicacy.",
          },
        ],

        activities: [
          {
            name: "Ganesh Visarjan",
            image:
              "https://images.pexels.com/photos/28512653/pexels-photo-28512653.jpeg",
            description: "Grand immersion processions of Lord Ganesha idols.",
          },
          {
            name: "Temple Visit",
            image:
              "https://images.pexels.com/photos/28288479/pexels-photo-28288479.jpeg",
            description: "Devotees visit temples and seek blessings.",
          },
        ],
      },
    },

    {
      id: 18,
      heading: "Onam",
      state: "Kerala",
      category: ["Culture", "Harvest"],
      image:
        "https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg",

      details: {
        description:
          "Onam is Kerala's harvest festival celebrated with feasts, boat races, and cultural traditions.",

        famousPlaces: [
          {
            name: "Kochi",
            image:
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
            description: "Major cultural celebrations during Onam.",
          },
          {
            name: "Alleppey",
            image:
              "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
            description: "Famous for traditional snake boat races.",
          },
          {
            name: "Thrissur",
            image:
              "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
            description: "Known for cultural events and festive celebrations.",
          },
        ],

        bestTime: "August - September",

        food: [
          {
            name: "Onam Sadya",
            image:
              "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
            description: "Traditional feast served on banana leaves.",
          },
          {
            name: "Payasam",
            image:
              "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600",
            description: "Popular sweet dessert prepared during Onam.",
          },
        ],

        activities: [
          {
            name: "Boat Race",
            image:
              "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
            description:
              "Traditional snake boat races attract thousands of visitors.",
          },
          {
            name: "Flower Decoration",
            image:
              "https://images.unsplash.com/photo-1604423043492-4135c5f7c6b6?w=600",
            description: "Beautiful floral rangoli known as Pookalam.",
          },
        ],
      },
    },

    {
      id: 19,
      heading: "Bihu",
      state: "Assam",
      category: ["Culture", "Harvest"],
      image:
        "https://images.pexels.com/photos/37664912/pexels-photo-37664912.jpeg",

      details: {
        description:
          "Bihu is Assam's most celebrated festival marking prosperity, harvest, and cultural heritage.",

        famousPlaces: [
          {
            name: "Guwahati",
            image:
              "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600",
            description: "Major Bihu celebrations with music and dance.",
          },
          {
            name: "Majuli",
            image:
              "https://images.unsplash.com/photo-1552978534-9d01e1f91517?w=600",
            description:
              "World's largest river island known for cultural festivities.",
          },
        ],

        bestTime: "April",

        food: [
          {
            name: "Pitha",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
            description: "Traditional Assamese rice cake.",
          },
          {
            name: "Laru",
            image:
              "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
            description: "Popular sweet made during Bihu celebrations.",
          },
        ],

        activities: [
          {
            name: "Folk Dance",
            image:
              "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600",
            description: "Traditional Bihu dance performances.",
          },
          {
            name: "Music",
            image:
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
            description: "Celebrations include traditional Assamese music.",
          },
          {
            name: "Cultural Events",
            image:
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
            description:
              "Festivals feature community gatherings and performances.",
          },
        ],
      },
    },
  ],
};

export default tourismData;
