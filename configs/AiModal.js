
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

  export  const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Maldives, for 5 days and 4 night for A Couple with a Luxury budget with a flight details, Flight Price with Booking URL, Hotel option list with HotelName,Hotel Address, Price,hotel image url, geo coordinates, rating,description, and places to visit near by with placeName, place details, place image URl,geo coordinates, ticket priceing, time to travel each of the location for 5 days and 4 night with each day plan with best time to visit in JSON Format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip\": {\n    \"destination\": \"Maldives\",\n    \"duration\": \"5 days 4 nights\",\n    \"budget\": \"Luxury\",\n    \"travelers\": \"Couple\"\n  },\n  \"flights\": [\n    {\n      \"airline\": \"Emirates\",\n      \"departure\": \"New York (JFK)\",\n      \"arrival\": \"Malé (MLE)\",\n      \"date\": \"2024-03-15\",\n      \"price\": \"$1500\",\n      \"booking_url\": \"https://www.emirates.com/\"\n    },\n    {\n      \"airline\": \"Emirates\",\n      \"departure\": \"Malé (MLE)\",\n      \"arrival\": \"New York (JFK)\",\n      \"date\": \"2024-03-20\",\n      \"price\": \"$1500\",\n      \"booking_url\": \"https://www.emirates.com/\"\n    }\n  ],\n  \"hotels\": [\n    {\n      \"name\": \"Four Seasons Landaa Giraavaru\",\n      \"address\": \"Landaa Giraavaru, Baa Atoll, Maldives\",\n      \"price\": \"$2000/night\",\n      \"image_url\": \"https://www.fourseasons.com/images/hotels/maldives-landaa-giraavaru/hotel/landing-page/landing-page-hero-image-desktop-min-1200x600.jpg\",\n      \"geo_coordinates\": \"3.8492, 73.2012\",\n      \"rating\": 5,\n      \"description\": \"Overwater villas and a secluded spa on a pristine island in the Baa Atoll.\"\n    },\n    {\n      \"name\": \"The St. Regis Maldives Vommuli Resort\",\n      \"address\": \"Vommuli Island, Dhaalu Atoll, Maldives\",\n      \"price\": \"$1800/night\",\n      \"image_url\": \"https://www.marriott.com/marriott/media/images/hotels/default-hero.jpg\",\n      \"geo_coordinates\": \"3.3375, 73.1827\",\n      \"rating\": 4.8,\n      \"description\": \"Luxury resort with a unique underwater restaurant and a dedicated children's club.\"\n    },\n    {\n      \"name\": \"W Maldives\",\n      \"address\": \"North Malé Atoll, Maldives\",\n      \"price\": \"$1500/night\",\n      \"image_url\": \"https://www.wmaldives.com/content/dam/marriott/w/wmaldives/wmaldives-hero-desktop.jpg\",\n      \"geo_coordinates\": \"3.4649, 73.3960\",\n      \"rating\": 4.5,\n      \"description\": \"Trendy resort with vibrant nightlife, innovative dining and overwater bungalows.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Arrival in Malé and Transfer to Four Seasons Landaa Giraavaru\",\n      \"description\": \"Arrive at Velana International Airport (MLE) in Malé.  Transfer by seaplane to Four Seasons Landaa Giraavaru in the Baa Atoll. Enjoy a welcome drink and settle into your luxurious overwater villa. Spend the afternoon relaxing on the beach or by the pool. \",\n      \"places\": [\n        {\n          \"name\": \"Velana International Airport (MLE)\",\n          \"details\": \"Main international airport in the Maldives\",\n          \"image_url\": \"https://www.maldivesairport.com/uploads/photos/20220912/084418-001-airport-exterior-day-2018-1-1024x576.jpg\",\n          \"geo_coordinates\": \"3.3840, 73.2271\"\n        },\n        {\n          \"name\": \"Four Seasons Landaa Giraavaru\",\n          \"details\": \"Luxury resort in the Baa Atoll\",\n          \"image_url\": \"https://www.fourseasons.com/images/hotels/maldives-landaa-giraavaru/hotel/landing-page/landing-page-hero-image-desktop-min-1200x600.jpg\",\n          \"geo_coordinates\": \"3.8492, 73.2012\"\n        }\n      ],\n      \"time\": \"Arrival: Anytime. Transfer time to resort: 30-45 minutes\",\n      \"best_time\": \"Anytime is good, but consider arrival during the dry season (November to April) for sunny weather.\"\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Scuba Diving and Relaxation\",\n      \"description\": \"Enjoy a morning scuba diving excursion in the Baa Atoll, known for its incredible marine life. Explore the vibrant coral reefs and swim with manta rays and sharks. After lunch, relax by the pool or at the spa, indulging in luxurious treatments. \",\n      \"places\": [\n        {\n          \"name\": \"Baa Atoll\",\n          \"details\": \"UNESCO Biosphere Reserve, famous for its manta rays and whale sharks\",\n          \"image_url\": \"https://images.unsplash.com/photo-1534580216345-58d43a178b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80\",\n          \"geo_coordinates\": \"3.9149, 73.1760\"\n        }\n      ],\n      \"time\": \"Morning: Scuba diving excursion (around 2-3 hours). Afternoon: Relax at the resort\",\n      \"best_time\": \"Scuba diving is great in the morning or early afternoon.\"\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Private Boat Trip and Sunset Dinner\",\n      \"description\": \"Embark on a private boat trip to a secluded island or sandbank, enjoying a picnic lunch under the palm trees. Snorkel in the crystal-clear water, swim with colorful fish, and bask in the sun. In the evening, enjoy a romantic sunset dinner on the beach with private chefs and a personalized menu.\",\n      \"places\": [\n        {\n          \"name\": \"Sandbanks and deserted islands\",\n          \"details\": \"Secluded islands and sandbanks around the Baa Atoll\",\n          \"image_url\": \"https://images.unsplash.com/photo-1605718152564-9628e13f6f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80\",\n          \"geo_coordinates\": \"3.8492, 73.2012\"\n        }\n      ],\n      \"time\": \"Full day: Private boat trip with picnic lunch. Evening: Sunset dinner\",\n      \"best_time\": \"Boat trip: Anytime. Sunset dinner: Around sunset time.\"\n    },\n    {\n      \"day\": 4,\n      \"title\": \"Transfer to The St. Regis Maldives Vommuli Resort\",\n      \"description\": \"Transfer by seaplane from Four Seasons Landaa Giraavaru to The St. Regis Maldives Vommuli Resort in the Dhaalu Atoll.  Check in and settle into your luxurious villa. Spend the afternoon relaxing by the resort's stunning pools or explore the island. \",\n      \"places\": [\n        {\n          \"name\": \"The St. Regis Maldives Vommuli Resort\",\n          \"details\": \"Luxury resort in the Dhaalu Atoll\",\n          \"image_url\": \"https://www.marriott.com/marriott/media/images/hotels/default-hero.jpg\",\n          \"geo_coordinates\": \"3.3375, 73.1827\"\n        }\n      ],\n      \"time\": \"Morning: Transfer by seaplane. Afternoon: Relax at the resort\",\n      \"best_time\": \"Seaplane transfer: Anytime. Afternoon: Relax at the resort.\"\n    },\n    {\n      \"day\": 5,\n      \"title\": \"Dining Experience and Departure\",\n      \"description\": \"Enjoy breakfast at the resort, followed by a unique dining experience at the underwater restaurant, \"The Whale Bar.\"  After lunch, relax at the spa or by the pool.  In the evening, enjoy a farewell dinner with panoramic views of the ocean.  Transfer to Malé Airport (MLE) for your flight home.\",\n      \"places\": [\n        {\n          \"name\": \"The Whale Bar\",\n          \"details\": \"Underwater restaurant at The St. Regis Maldives Vommuli Resort\",\n          \"image_url\": \"https://www.marriott.com/marriott/media/images/hotels/default-hero.jpg\",\n          \"geo_coordinates\": \"3.3375, 73.1827\"\n        }\n      ],\n      \"time\": \"Morning: Breakfast and underwater restaurant experience. Afternoon: Relaxation. Evening: Farewell dinner and transfer to airport\",\n      \"best_time\": \"Underwater restaurant: Any time. Farewell dinner: Around sunset time.\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

  