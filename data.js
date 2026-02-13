// ===== INDIA TOURISM DATA =====

const indiaData = {
    regions: {
        north: {
            name: "North India",
            description: "Home to the majestic Himalayas, ancient heritage sites, and spiritual destinations",
            icon: "fas fa-mountain",
            states: ["delhi", "uttarpradesh", "rajasthan", "himachalpradesh", "uttarakhand", "punjab", "haryana", "jammuandkashmir", "ladakh", "chandigarh"]
        },
        south: {
            name: "South India",
            description: "Experience tropical beaches, ancient temples, backwaters, and rich cultural heritage",
            icon: "fas fa-water",
            states: ["kerala", "tamilnadu", "karnataka", "andhrapradesh", "telangana", "puducherry", "lakshadweep"]
        },
        east: {
            name: "East India",
            description: "Discover diverse cultures, ancient temples, wildlife sanctuaries, and artistic heritage",
            icon: "fas fa-tree",
            states: ["westbengal", "odisha", "bihar", "jharkhand", "andamannicobar"]
        },
        west: {
            name: "West India",
            description: "From bustling metros to desert landscapes and pristine beaches",
            icon: "fas fa-city",
            states: ["maharashtra", "gujarat", "goa", "dadranagarhaveli", "damandiu"]
        },
        northeast: {
            name: "North East India",
            description: "The Seven Sisters - unexplored paradise of natural beauty and unique tribal cultures",
            icon: "fas fa-leaf",
            states: ["assam", "meghalaya", "arunachalpradesh", "nagaland", "manipur", "mizoram", "tripura", "sikkim"]
        },
        central: {
            name: "Central India",
            description: "Tiger reserves, ancient caves, and the heart of Indian heritage",
            icon: "fas fa-gopuram",
            states: ["madhyapradesh", "chhattisgarh"]
        }
    },

    states: {
        // NORTH INDIA
        rajasthan: {
            name: "Rajasthan",
            tagline: "Land of Kings",
            region: "north",
            capital: "Jaipur",
            language: "Hindi, Rajasthani",
            bestTime: "October to March",
            climate: "Hot semi-arid",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
            description: "Rajasthan, the largest state of India, is known for its majestic forts, ornate palaces, colorful culture, and warm hospitality. From the pink city of Jaipur to the blue city of Jodhpur, every corner tells tales of valor and royalty.",
            places: [
                {
                    name: "Jaipur - The Pink City",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
                    description: "Capital city famous for Hawa Mahal, Amber Fort, and City Palace"
                },
                {
                    name: "Udaipur - City of Lakes",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=600",
                    description: "Romantic city known for Lake Pichola and stunning palaces"
                },
                {
                    name: "Jaisalmer - Golden City",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
                    description: "Desert city famous for its golden fort and sand dunes"
                },
                {
                    name: "Jodhpur - Blue City",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600",
                    description: "Home to mighty Mehrangarh Fort and blue-painted houses"
                },
                {
                    name: "Pushkar",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "Sacred city with the only Brahma temple in the world"
                },
                {
                    name: "Ranthambore National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "Famous tiger reserve and wildlife sanctuary"
                }
            ],
            food: [
                { name: "Dal Baati Churma", description: "Traditional Rajasthani delicacy", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Laal Maas", description: "Spicy red meat curry", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Ghevar", description: "Sweet honeycomb-like dessert", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Ker Sangri", description: "Desert beans and berries", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" }
            ],
            festivals: [
                { name: "Pushkar Camel Fair", icon: "fas fa-horse", description: "World's largest camel fair held annually" },
                { name: "Desert Festival", icon: "fas fa-sun", description: "Celebration of folk music and dance in Jaisalmer" },
                { name: "Gangaur Festival", icon: "fas fa-female", description: "Festival celebrating marital love" }
            ],
            tips: [
                { title: "Best Time", text: "Visit between October to March to avoid extreme heat" },
                { title: "Dress Code", text: "Carry modest clothing for temple visits" },
                { title: "Bargaining", text: "Haggling is expected in local markets" },
                { title: "Stay Hydrated", text: "Carry water bottles, especially during summer" }
            ]
        },

        kerala: {
            name: "Kerala",
            tagline: "God's Own Country",
            region: "south",
            capital: "Thiruvananthapuram",
            language: "Malayalam",
            bestTime: "September to March",
            climate: "Tropical",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
            description: "Kerala is a tropical paradise on India's Malabar Coast, known for palm-lined beaches, serene backwaters, Ayurvedic wellness centers, and lush hill stations covered with tea and spice plantations.",
            places: [
                {
                    name: "Alleppey Backwaters",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
                    description: "Famous for houseboat cruises through scenic canals"
                },
                {
                    name: "Munnar",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Hill station with sprawling tea plantations"
                },
                {
                    name: "Kochi (Cochin)",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600",
                    description: "Historic port city with Chinese fishing nets"
                },
                {
                    name: "Thekkady",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Home to Periyar Wildlife Sanctuary"
                },
                {
                    name: "Kovalam Beach",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
                    description: "Famous crescent-shaped beach"
                },
                {
                    name: "Wayanad",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
                    description: "Pristine forests and waterfalls"
                }
            ],
            food: [
                { name: "Appam with Stew", description: "Lacy rice pancakes with coconut curry", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Kerala Sadya", description: "Traditional feast on banana leaf", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
                { name: "Karimeen Pollichathu", description: "Pearl spot fish in banana leaf", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Puttu & Kadala", description: "Steamed rice cake with chickpea curry", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" }
            ],
            festivals: [
                { name: "Onam", icon: "fas fa-sun", description: "Harvest festival with boat races and feasts" },
                { name: "Thrissur Pooram", icon: "fas fa-elephant", description: "Grand temple festival with elephants" },
                { name: "Vishu", icon: "fas fa-seedling", description: "Malayalam New Year celebration" }
            ],
            tips: [
                { title: "Monsoon Magic", text: "Visit during monsoons for Ayurvedic treatments" },
                { title: "Book Houseboats Early", text: "Backwater tours are popular, book in advance" },
                { title: "Respect Local Customs", text: "Dress modestly at temples" },
                { title: "Try Kathakali", text: "Watch traditional dance performances" }
            ]
        },

        goa: {
            name: "Goa",
            tagline: "Beach Paradise",
            region: "west",
            capital: "Panaji",
            language: "Konkani, English",
            bestTime: "November to February",
            climate: "Tropical monsoon",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
            description: "Goa is India's beach paradise, famous for its golden sandy beaches, Portuguese heritage, vibrant nightlife, and laid-back vibe. It's a perfect blend of Indian and Portuguese cultures.",
            places: [
                {
                    name: "Baga Beach",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
                    description: "Famous for water sports and nightlife"
                },
                {
                    name: "Old Goa Churches",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "UNESCO World Heritage colonial churches"
                },
                {
                    name: "Anjuna Flea Market",
                    category: "Culture",
                    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
                    description: "Vibrant hippie market every Wednesday"
                },
                {
                    name: "Dudhsagar Falls",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Majestic four-tiered waterfall"
                },
                {
                    name: "Palolem Beach",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
                    description: "Crescent-shaped beach in South Goa"
                },
                {
                    name: "Fort Aguada",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "17th-century Portuguese fort"
                }
            ],
            food: [
                { name: "Fish Curry Rice", description: "Traditional Goan staple", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Vindaloo", description: "Spicy Portuguese-influenced curry", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Bebinca", description: "Layered Goan dessert", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Feni", description: "Local cashew or coconut liquor", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" }
            ],
            festivals: [
                { name: "Carnival", icon: "fas fa-mask", description: "Pre-Lenten festival with parades" },
                { name: "Shigmo", icon: "fas fa-paint-brush", description: "Spring festival with colors and floats" },
                { name: "Sunburn Festival", icon: "fas fa-music", description: "Asia's biggest electronic music festival" }
            ],
            tips: [
                { title: "Rent a Scooter", text: "Best way to explore Goa's beaches" },
                { title: "North vs South", text: "North is party, South is peaceful" },
                { title: "Respect Beach Rules", text: "Some beaches have restricted zones" },
                { title: "Bargain", text: "Always negotiate at flea markets" }
            ]
        },

        himachalpradesh: {
            name: "Himachal Pradesh",
            tagline: "Mountain Magic",
            region: "north",
            capital: "Shimla",
            language: "Hindi, Pahari",
            bestTime: "March to June, September to November",
            climate: "Varies by altitude",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
            description: "Himachal Pradesh is a Himalayan state known for its scenic mountain towns, ancient temples, adventure activities, and the serene beauty of snow-capped peaks.",
            places: [
                {
                    name: "Manali",
                    category: "Adventure",
                    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
                    description: "Adventure capital with stunning Himalayan views"
                },
                {
                    name: "Shimla",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600",
                    description: "Colonial hill station and former summer capital"
                },
                {
                    name: "Dharamshala",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600",
                    description: "Home of Dalai Lama and Tibetan culture"
                },
                {
                    name: "Spiti Valley",
                    category: "Adventure",
                    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600",
                    description: "Cold desert mountain valley"
                },
                {
                    name: "Kasol",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Backpacker's paradise in Parvati Valley"
                },
                {
                    name: "Dalhousie",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
                    description: "Colonial-era hill station"
                }
            ],
            food: [
                { name: "Siddu", description: "Steamed bread with poppy seeds", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Dham", description: "Traditional festive meal", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
                { name: "Tudkiya Bhath", description: "Rice with lentils and spices", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Madra", description: "Chickpea curry in yogurt", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" }
            ],
            festivals: [
                { name: "Kullu Dussehra", icon: "fas fa-flag", description: "Week-long festival unique to Kullu" },
                { name: "Losar", icon: "fas fa-moon", description: "Tibetan New Year in Buddhist areas" },
                { name: "Minjar Fair", icon: "fas fa-seedling", description: "Harvest festival in Chamba" }
            ],
            tips: [
                { title: "Altitude Sickness", text: "Acclimatize properly in high-altitude areas" },
                { title: "Carry Warm Clothes", text: "Temperatures drop significantly at night" },
                { title: "Book Permits", text: "Required for Spiti and border areas" },
                { title: "Road Conditions", text: "Check road status during monsoons" }
            ]
        },

        uttarpradesh: {
            name: "Uttar Pradesh",
            tagline: "Heart of Heritage",
            region: "north",
            capital: "Lucknow",
            language: "Hindi, Urdu",
            bestTime: "October to March",
            climate: "Humid subtropical",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
            description: "Uttar Pradesh is the cultural heartland of India, home to the iconic Taj Mahal, sacred city of Varanasi, and countless historical and religious sites.",
            places: [
                {
                    name: "Taj Mahal, Agra",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
                    description: "UNESCO World Heritage Site, symbol of eternal love"
                },
                {
                    name: "Varanasi",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
                    description: "Oldest living city, spiritual capital of India"
                },
                {
                    name: "Lucknow",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
                    description: "City of Nawabs with rich culture"
                },
                {
                    name: "Vrindavan & Mathura",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "Birthplace of Lord Krishna"
                },
                {
                    name: "Fatehpur Sikri",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Mughal-era ghost city"
                },
                {
                    name: "Allahabad (Prayagraj)",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600",
                    description: "Confluence of sacred rivers"
                }
            ],
            food: [
                { name: "Lucknowi Biryani", description: "Aromatic dum-style biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
                { name: "Petha", description: "Sweet from Agra made of ash gourd", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Tunday Kebabs", description: "Melt-in-mouth kebabs from Lucknow", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Banarasi Paan", description: "Traditional betel leaf preparation", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" }
            ],
            festivals: [
                { name: "Kumbh Mela", icon: "fas fa-water", description: "Largest religious gathering on Earth" },
                { name: "Dev Deepawali", icon: "fas fa-candle-holder", description: "Festival of lights in Varanasi" },
                { name: "Holi in Mathura", icon: "fas fa-paint-brush", description: "Festival of colors at its best" }
            ],
            tips: [
                { title: "Sunrise at Taj", text: "Visit Taj Mahal at sunrise for best views" },
                { title: "Ganga Aarti", text: "Don't miss the evening aarti at Varanasi ghats" },
                { title: "Hire Local Guides", text: "Rich history needs proper explanation" },
                { title: "Respect Traditions", text: "Follow dress codes at religious sites" }
            ]
        },

        uttarakhand: {
            name: "Uttarakhand",
            tagline: "Land of Gods",
            region: "north",
            capital: "Dehradun",
            language: "Hindi, Garhwali, Kumaoni",
            bestTime: "March to June, September to November",
            climate: "Varies by altitude",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            description: "Uttarakhand is known as Dev Bhoomi (Land of Gods), famous for its pilgrimage sites, Himalayan peaks, yoga centers, and adventure tourism.",
            places: [
                {
                    name: "Rishikesh",
                    category: "Adventure",
                    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600",
                    description: "Yoga capital and adventure sports hub"
                },
                {
                    name: "Haridwar",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600",
                    description: "Gateway to Char Dham pilgrimage"
                },
                {
                    name: "Nainital",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600",
                    description: "Lake town with colonial charm"
                },
                {
                    name: "Mussoorie",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
                    description: "Queen of Hills"
                },
                {
                    name: "Valley of Flowers",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "UNESCO site with endemic alpine flowers"
                },
                {
                    name: "Kedarnath Temple",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "Sacred Shiva temple in Himalayas"
                }
            ],
            food: [
                { name: "Kafuli", description: "Spinach and fenugreek dish", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Aloo Ke Gutke", description: "Spiced potato preparation", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Bal Mithai", description: "Sweet coated with sugar balls", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Chainsoo", description: "Black gram lentil curry", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" }
            ],
            festivals: [
                { name: "Ganga Dussehra", icon: "fas fa-water", description: "Celebration of river Ganga's descent" },
                { name: "Nanda Devi Fair", icon: "fas fa-mountain", description: "Festival honoring goddess Nanda" },
                { name: "Kumbh Mela", icon: "fas fa-om", description: "Major pilgrimage at Haridwar" }
            ],
            tips: [
                { title: "Char Dham", text: "Plan well for the pilgrimage circuit" },
                { title: "Carry Cash", text: "ATMs are scarce in remote areas" },
                { title: "Fitness Required", text: "Some treks need good physical fitness" },
                { title: "Respect Wildlife", text: "Follow guidelines in national parks" }
            ]
        },

        // SOUTH INDIA
        tamilnadu: {
            name: "Tamil Nadu",
            tagline: "Land of Temples",
            region: "south",
            capital: "Chennai",
            language: "Tamil",
            bestTime: "November to February",
            climate: "Tropical",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
            description: "Tamil Nadu is home to magnificent Dravidian temples, classical arts, pristine beaches, and hill stations. It preserves one of the world's oldest surviving civilizations.",
            places: [
                {
                    name: "Meenakshi Temple, Madurai",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600",
                    description: "Magnificent temple with towering gopurams"
                },
                {
                    name: "Mahabalipuram",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "UNESCO site with ancient rock-cut temples"
                },
                {
                    name: "Ooty",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Queen of Hill Stations"
                },
                {
                    name: "Thanjavur",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "Home of Brihadeeswara Temple"
                },
                {
                    name: "Rameswaram",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600",
                    description: "Sacred island with corridor temple"
                },
                {
                    name: "Kodaikanal",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Princess of Hill Stations"
                }
            ],
            food: [
                { name: "Dosa & Sambar", description: "Crispy crepe with lentil soup", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Chettinad Cuisine", description: "Spicy and aromatic dishes", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Filter Coffee", description: "Strong South Indian coffee", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
                { name: "Pongal", description: "Rice and lentil comfort food", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" }
            ],
            festivals: [
                { name: "Pongal", icon: "fas fa-sun", description: "Harvest festival of Tamil Nadu" },
                { name: "Karthigai Deepam", icon: "fas fa-fire", description: "Festival of lights" },
                { name: "Natyanjali", icon: "fas fa-music", description: "Classical dance festival at temples" }
            ],
            tips: [
                { title: "Temple Etiquette", text: "Remove shoes and dress modestly" },
                { title: "Beat the Heat", text: "Start temple visits early morning" },
                { title: "Try Street Food", text: "Chennai has amazing street food scene" },
                { title: "Book Train Tickets", text: "Toy train to Ooty needs advance booking" }
            ]
        },

        karnataka: {
            name: "Karnataka",
            tagline: "One State, Many Worlds",
            region: "south",
            capital: "Bengaluru",
            language: "Kannada",
            bestTime: "October to February",
            climate: "Varies by region",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
            description: "Karnataka offers diverse experiences from IT hub Bangalore to ancient ruins of Hampi, pristine beaches of Gokarna, and coffee estates of Coorg.",
            places: [
                {
                    name: "Hampi",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
                    description: "UNESCO site with Vijayanagara ruins"
                },
                {
                    name: "Mysore",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
                    description: "City of palaces and Dussehra"
                },
                {
                    name: "Coorg",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Scotland of India with coffee estates"
                },
                {
                    name: "Gokarna",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
                    description: "Pristine beaches and temples"
                },
                {
                    name: "Badami Caves",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Rock-cut cave temples"
                },
                {
                    name: "Bengaluru",
                    category: "City",
                    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
                    description: "Garden city and tech hub"
                }
            ],
            food: [
                { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
                { name: "Mysore Pak", description: "Rich ghee-based sweet", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Ragi Mudde", description: "Finger millet balls", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Mangalorean Fish Curry", description: "Coastal specialty", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" }
            ],
            festivals: [
                { name: "Mysore Dasara", icon: "fas fa-crown", description: "Royal celebration with procession" },
                { name: "Hampi Utsav", icon: "fas fa-music", description: "Cultural festival at ruins" },
                { name: "Karaga", icon: "fas fa-om", description: "Ancient festival of Bengaluru" }
            ],
            tips: [
                { title: "Explore Hampi", text: "Rent a bicycle to explore the ruins" },
                { title: "Coffee Trails", text: "Visit coffee estates in Coorg and Chikmagalur" },
                { title: "Beach Camping", text: "Try beach camping at Gokarna" },
                { title: "Palace at Night", text: "See Mysore Palace lit up on weekends" }
            ]
        },

        // WEST INDIA
        maharashtra: {
            name: "Maharashtra",
            tagline: "Gateway to India",
            region: "west",
            capital: "Mumbai",
            language: "Marathi",
            bestTime: "October to March",
            climate: "Tropical",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
            description: "Maharashtra is India's most industrialized state, home to Mumbai, ancient caves of Ajanta and Ellora, hill stations of Western Ghats, and vibrant Marathi culture.",
            places: [
                {
                    name: "Mumbai",
                    category: "City",
                    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
                    description: "Maximum city with Gateway of India"
                },
                {
                    name: "Ajanta & Ellora Caves",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "UNESCO World Heritage rock-cut caves"
                },
                {
                    name: "Lonavala",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
                    description: "Hill station near Mumbai"
                },
                {
                    name: "Pune",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Cultural capital of Maharashtra"
                },
                {
                    name: "Mahabaleshwar",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Queen of Hill Stations"
                },
                {
                    name: "Shirdi",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "Abode of Sai Baba"
                }
            ],
            food: [
                { name: "Vada Pav", description: "Mumbai's famous street food", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Pav Bhaji", description: "Spicy mashed vegetables with bread", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Puran Poli", description: "Sweet stuffed flatbread", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Misal Pav", description: "Spicy sprouts curry with bread", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" }
            ],
            festivals: [
                { name: "Ganesh Chaturthi", icon: "fas fa-om", description: "Grand Ganesha celebrations" },
                { name: "Gudi Padwa", icon: "fas fa-flag", description: "Marathi New Year" },
                { name: "Elephanta Festival", icon: "fas fa-music", description: "Dance festival at caves" }
            ],
            tips: [
                { title: "Mumbai Local", text: "Experience the local trains during non-peak hours" },
                { title: "Cave Visit Timing", text: "Visit Ajanta-Ellora early morning" },
                { title: "Street Food Paradise", text: "Try street food at Chowpatty beach" },
                { title: "Monsoon Treks", text: "Western Ghats are beautiful in monsoons" }
            ]
        },

        gujarat: {
            name: "Gujarat",
            tagline: "Land of Legends",
            region: "west",
            capital: "Gandhinagar",
            language: "Gujarati",
            bestTime: "October to March",
            climate: "Semi-arid",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=800",
            description: "Gujarat is the land of Mahatma Gandhi, known for the Rann of Kutch, Gir lions, magnificent temples, and vibrant textiles and handicrafts.",
            places: [
                {
                    name: "Rann of Kutch",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
                    description: "White salt desert, spectacular during full moon"
                },
                {
                    name: "Gir National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "Only home of Asiatic lions"
                },
                {
                    name: "Somnath Temple",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "First among twelve Jyotirlingas"
                },
                {
                    name: "Dwarka",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600",
                    description: "Ancient city of Lord Krishna"
                },
                {
                    name: "Statue of Unity",
                    category: "Landmark",
                    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
                    description: "World's tallest statue"
                },
                {
                    name: "Ahmedabad",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "UNESCO World Heritage City"
                }
            ],
            food: [
                { name: "Dhokla", description: "Steamed savory snack", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Thepla", description: "Spiced flatbread", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Undhiyu", description: "Mixed vegetable preparation", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Fafda-Jalebi", description: "Classic Gujarati breakfast", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" }
            ],
            festivals: [
                { name: "Navratri", icon: "fas fa-music", description: "Nine nights of Garba dance" },
                { name: "Rann Utsav", icon: "fas fa-tent", description: "Desert festival at White Rann" },
                { name: "Kite Festival", icon: "fas fa-wind", description: "International kite festival" }
            ],
            tips: [
                { title: "Rann Visit", text: "Visit during full moon for magical experience" },
                { title: "Dry State", text: "Gujarat prohibits alcohol" },
                { title: "Early Safari", text: "Book Gir safari well in advance" },
                { title: "Vegetarian Paradise", text: "Gujarat offers amazing vegetarian food" }
            ]
        },

        // EAST INDIA
        westbengal: {
            name: "West Bengal",
            tagline: "Cultural Capital",
            region: "east",
            capital: "Kolkata",
            language: "Bengali",
            bestTime: "October to March",
            climate: "Tropical wet-and-dry",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
            description: "West Bengal is the cultural and intellectual capital of India, famous for its literature, art, cinema, and festivals. From Kolkata's colonial heritage to Darjeeling's tea gardens.",
            places: [
                {
                    name: "Kolkata",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "City of Joy with colonial architecture"
                },
                {
                    name: "Darjeeling",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
                    description: "Queen of Hills with tea gardens"
                },
                {
                    name: "Sundarbans",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Largest mangrove forest, home of Royal Bengal Tiger"
                },
                {
                    name: "Shantiniketan",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "Rabindranath Tagore's university town"
                },
                {
                    name: "Kalimpong",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Hill station with Buddhist monasteries"
                },
                {
                    name: "Digha",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
                    description: "Popular sea beach resort"
                }
            ],
            food: [
                { name: "Rosogolla", description: "Iconic Bengali sweet", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Machher Jhol", description: "Traditional fish curry", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Kosha Mangsho", description: "Slow-cooked mutton curry", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Darjeeling Tea", description: "Champagne of teas", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" }
            ],
            festivals: [
                { name: "Durga Puja", icon: "fas fa-om", description: "Biggest festival of Bengal" },
                { name: "Poila Boishakh", icon: "fas fa-calendar", description: "Bengali New Year" },
                { name: "Rath Yatra", icon: "fas fa-landmark", description: "Chariot festival" }
            ],
            tips: [
                { title: "Durga Puja", text: "Visit during Durga Puja for grand celebrations" },
                { title: "Toy Train", text: "Experience Darjeeling Himalayan Railway" },
                { title: "Sweet Shops", text: "Visit famous sweet shops in Kolkata" },
                { title: "Book Sundarbans", text: "Book forest lodge and boat well in advance" }
            ]
        },

        odisha: {
            name: "Odisha",
            tagline: "Soul of India",
            region: "east",
            capital: "Bhubaneswar",
            language: "Odia",
            bestTime: "October to February",
            climate: "Tropical",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=800",
            description: "Odisha is known for its ancient temples, classical dance forms, pristine beaches, and rich handicraft traditions. The Konark Sun Temple is a UNESCO masterpiece.",
            places: [
                {
                    name: "Konark Sun Temple",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "UNESCO World Heritage architectural marvel"
                },
                {
                    name: "Jagannath Temple, Puri",
                    category: "Temple",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "One of the Char Dham pilgrimage sites"
                },
                {
                    name: "Chilika Lake",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Asia's largest brackish water lagoon"
                },
                {
                    name: "Bhubaneswar",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Temple city of India"
                },
                {
                    name: "Puri Beach",
                    category: "Beach",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
                    description: "Sacred beach destination"
                },
                {
                    name: "Simlipal National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "Tiger reserve in Mayurbhanj"
                }
            ],
            food: [
                { name: "Dalma", description: "Lentils with vegetables", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Chhena Poda", description: "Baked cheese dessert", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
                { name: "Rasabali", description: "Sweet cheese patties", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Pakhala", description: "Fermented rice dish", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" }
            ],
            festivals: [
                { name: "Rath Yatra", icon: "fas fa-caravan", description: "Famous chariot festival of Puri" },
                { name: "Konark Dance Festival", icon: "fas fa-music", description: "Classical dance at Sun Temple" },
                { name: "Raja Parba", icon: "fas fa-seedling", description: "Celebrating womanhood" }
            ],
            tips: [
                { title: "Temple Rules", text: "Only Hindus allowed inside Jagannath Temple" },
                { title: "Sunrise at Konark", text: "Visit Konark at sunrise for best photos" },
                { title: "Chilika Boating", text: "Visit during winter for migratory birds" },
                { title: "Handicrafts", text: "Buy authentic Pattachitra paintings" }
            ]
        },

        // NORTH EAST INDIA
        assam: {
            name: "Assam",
            tagline: "Gateway to North East",
            region: "northeast",
            capital: "Dispur",
            language: "Assamese",
            bestTime: "October to April",
            climate: "Humid subtropical",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
            description: "Assam is known for its tea plantations, one-horned rhinos, Brahmaputra river, and rich cultural heritage. It's the gateway to exploring Northeast India.",
            places: [
                {
                    name: "Kaziranga National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "UNESCO site, home to one-horned rhinos"
                },
                {
                    name: "Guwahati",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Gateway city with Kamakhya Temple"
                },
                {
                    name: "Majuli Island",
                    category: "Culture",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "World's largest river island"
                },
                {
                    name: "Tea Gardens",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Sprawling tea estates of Jorhat"
                },
                {
                    name: "Manas National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "UNESCO site and tiger reserve"
                },
                {
                    name: "Sivasagar",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "Ahom dynasty monuments"
                }
            ],
            food: [
                { name: "Assamese Thali", description: "Traditional meal with fish", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
                { name: "Pitha", description: "Traditional rice cakes", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Masor Tenga", description: "Sour fish curry", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400" },
                { name: "Assam Tea", description: "World-famous black tea", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" }
            ],
            festivals: [
                { name: "Bihu", icon: "fas fa-seedling", description: "Harvest festival of Assam" },
                { name: "Ambubachi Mela", icon: "fas fa-om", description: "Festival at Kamakhya Temple" },
                { name: "Me-Dam-Me-Phi", icon: "fas fa-praying-hands", description: "Ancestor worship festival" }
            ],
            tips: [
                { title: "Safari Timing", text: "Book Kaziranga safari in advance" },
                { title: "Rainy Season", text: "Parks close during monsoon" },
                { title: "Tea Tours", text: "Visit tea estates for factory tours" },
                { title: "Ferry to Majuli", text: "Check ferry schedules to Majuli" }
            ]
        },

        meghalaya: {
            name: "Meghalaya",
            tagline: "Abode of Clouds",
            region: "northeast",
            capital: "Shillong",
            language: "Khasi, Garo, English",
            bestTime: "October to May",
            climate: "Subtropical highland",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800",
            description: "Meghalaya is known as the 'Abode of Clouds', famous for living root bridges, wettest places on earth, stunning caves, and pristine waterfalls.",
            places: [
                {
                    name: "Cherrapunji",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "One of the wettest places on Earth"
                },
                {
                    name: "Living Root Bridges",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Unique bio-engineering marvel"
                },
                {
                    name: "Shillong",
                    category: "City",
                    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600",
                    description: "Scotland of the East"
                },
                {
                    name: "Dawki",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Crystal clear Umngot river"
                },
                {
                    name: "Mawlynnong",
                    category: "Village",
                    image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600",
                    description: "Cleanest village in Asia"
                },
                {
                    name: "Mawsynram",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Wettest place on Earth"
                }
            ],
            food: [
                { name: "Jadoh", description: "Rice with pork", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Doh Khlieh", description: "Pork salad", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Kyat", description: "Traditional rice beer", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" },
                { name: "Tungrymbai", description: "Fermented soybean dish", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" }
            ],
            festivals: [
                { name: "Wangala", icon: "fas fa-drum", description: "100 drums Garo festival" },
                { name: "Shad Suk Mynsiem", icon: "fas fa-music", description: "Thanksgiving dance festival" },
                { name: "Behdienkhlam", icon: "fas fa-hands", description: "Plague chasing festival" }
            ],
            tips: [
                { title: "Trek Prepared", text: "Living root bridges require hiking" },
                { title: "Rain Gear", text: "Carry rain protection always" },
                { title: "Cash Required", text: "Limited ATMs in remote areas" },
                { title: "Respect Culture", text: "Meghalaya is matrilineal society" }
            ]
        },

        sikkim: {
            name: "Sikkim",
            tagline: "Small But Beautiful",
            region: "northeast",
            capital: "Gangtok",
            language: "Nepali, Sikkimese",
            bestTime: "March to May, October to December",
            climate: "Alpine",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800",
            description: "Sikkim is a tiny Himalayan state with dramatic mountain scenery, Buddhist monasteries, and a unique culture blending Indian, Nepali, and Tibetan influences.",
            places: [
                {
                    name: "Gangtok",
                    category: "City",
                    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600",
                    description: "Capital with stunning Kanchenjunga views"
                },
                {
                    name: "Nathula Pass",
                    category: "Adventure",
                    image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=600",
                    description: "Indo-China border at 14,000 ft"
                },
                {
                    name: "Pelling",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
                    description: "Panoramic Himalayan views"
                },
                {
                    name: "Tsomgo Lake",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Glacial lake at high altitude"
                },
                {
                    name: "Rumtek Monastery",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=600",
                    description: "Important Buddhist monastery"
                },
                {
                    name: "Yumthang Valley",
                    category: "Nature",
                    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
                    description: "Valley of Flowers of Sikkim"
                }
            ],
            food: [
                { name: "Momos", description: "Steamed dumplings", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Thukpa", description: "Tibetan noodle soup", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Gundruk", description: "Fermented leafy greens", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
                { name: "Chhang", description: "Traditional millet beer", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400" }
            ],
            festivals: [
                { name: "Losar", icon: "fas fa-moon", description: "Tibetan New Year" },
                { name: "Saga Dawa", icon: "fas fa-om", description: "Buddha's birth anniversary" },
                { name: "Pang Lhabsol", icon: "fas fa-mountain", description: "Worship of Kanchenjunga" }
            ],
            tips: [
                { title: "Permits Required", text: "Get ILP for restricted areas" },
                { title: "Altitude Sickness", text: "Acclimatize before going high" },
                { title: "Book Early", text: "Nathula passes limited per day" },
                { title: "Warm Clothes", text: "Temperatures drop quickly" }
            ]
        },

        // CENTRAL INDIA
        madhyapradesh: {
            name: "Madhya Pradesh",
            tagline: "Heart of India",
            region: "central",
            capital: "Bhopal",
            language: "Hindi",
            bestTime: "October to March",
            climate: "Subtropical humid",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
            description: "Madhya Pradesh, the Heart of India, is known for its numerous UNESCO World Heritage Sites, tiger reserves, tribal culture, and ancient temples.",
            places: [
                {
                    name: "Khajuraho Temples",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "UNESCO site with erotic sculptures"
                },
                {
                    name: "Bandhavgarh National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "Highest tiger density in India"
                },
                {
                    name: "Sanchi Stupa",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600",
                    description: "Ancient Buddhist monument"
                },
                {
                    name: "Orchha",
                    category: "Heritage",
                    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
                    description: "Medieval town with palaces"
                },
                {
                    name: "Kanha National Park",
                    category: "Wildlife",
                    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600",
                    description: "Inspiration for The Jungle Book"
                },
                {
                    name: "Ujjain",
                    category: "Spiritual",
                    image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600",
                    description: "One of seven sacred cities"
                }
            ],
            food: [
                { name: "Poha", description: "Flattened rice breakfast", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
                { name: "Bhutte Ka Kees", description: "Grated corn snack", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Daal Bafla", description: "MP's version of Dal Baati", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Jalebi", description: "Sweet from Indore", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" }
            ],
            festivals: [
                { name: "Kumbh Mela", icon: "fas fa-water", description: "Grand pilgrimage at Ujjain" },
                { name: "Lokrang Festival", icon: "fas fa-music", description: "Folk art and culture" },
                { name: "Khajuraho Dance Festival", icon: "fas fa-music", description: "Classical dance at temples" }
            ],
            tips: [
                { title: "Safari Booking", text: "Book tiger safaris months in advance" },
                { title: "Sound & Light", text: "Attend sound and light show at Khajuraho" },
                { title: "Best Tiger Time", text: "April-June best for tiger sightings" },
                { title: "Indore Food", text: "Indore is foodie's paradise" }
            ]
        },

        // Additional States with basic info
        delhi: {
            name: "Delhi",
            tagline: "Capital of India",
            region: "north",
            capital: "New Delhi",
            language: "Hindi, English",
            bestTime: "October to March",
            climate: "Humid subtropical",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
            description: "Delhi, India's capital territory, is a massive metropolitan area with a rich history spanning over a millennium. It showcases the blend of ancient and modern India.",
            places: [
                { name: "India Gate", category: "Heritage", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600", description: "War memorial and iconic landmark" },
                { name: "Red Fort", category: "Heritage", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600", description: "UNESCO World Heritage Mughal fort" },
                { name: "Qutub Minar", category: "Heritage", image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600", description: "Tallest brick minaret in the world" },
                { name: "Lotus Temple", category: "Temple", image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600", description: "Bahá'í House of Worship" },
                { name: "Humayun's Tomb", category: "Heritage", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600", description: "Precursor to Taj Mahal" },
                { name: "Chandni Chowk", category: "Culture", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600", description: "Historic market in Old Delhi" }
            ],
            food: [
                { name: "Chole Bhature", description: "Spicy chickpeas with fried bread", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Butter Chicken", description: "Creamy tomato chicken curry", image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400" },
                { name: "Parantha", description: "Stuffed flatbreads", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" },
                { name: "Chaat", description: "Savory street snacks", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" }
            ],
            festivals: [
                { name: "Republic Day", icon: "fas fa-flag", description: "Grand parade on January 26" },
                { name: "Diwali", icon: "fas fa-lightbulb", description: "Festival of lights celebration" },
                { name: "Qutub Festival", icon: "fas fa-music", description: "Cultural fest at Qutub Minar" }
            ],
            tips: [
                { title: "Use Metro", text: "Delhi Metro is the best way to travel" },
                { title: "Street Food", text: "Try Paranthe Wali Gali in Chandni Chowk" },
                { title: "Avoid Summers", text: "Delhi gets extremely hot in May-June" },
                { title: "Bargain", text: "Negotiate in markets like Sarojini" }
            ]
        },

        punjab: {
            name: "Punjab",
            tagline: "Land of Five Rivers",
            region: "north",
            capital: "Chandigarh",
            language: "Punjabi",
            bestTime: "October to March",
            climate: "Humid subtropical",
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=800",
            description: "Punjab is known for the Golden Temple, vibrant Bhangra culture, delicious food, and warm hospitality.",
            places: [
                { name: "Golden Temple", category: "Temple", image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=600", description: "Holiest shrine of Sikhism" },
                { name: "Wagah Border", category: "Heritage", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600", description: "India-Pakistan border ceremony" },
                { name: "Jallianwala Bagh", category: "Heritage", image: "https://images.unsplash.com/photo-1582972236019-ea4af5edd8f7?w=600", description: "Historic memorial garden" }
            ],
            food: [
                { name: "Sarson Ka Saag", description: "Mustard greens", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
                { name: "Makki Di Roti", description: "Corn flour flatbread", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400" }
            ],
            festivals: [
                { name: "Baisakhi", icon: "fas fa-seedling", description: "Harvest festival" },
                { name: "Lohri", icon: "fas fa-fire", description: "Bonfire festival" }
            ],
            tips: [
                { title: "Langar", text: "Experience free community kitchen at Golden Temple" },
                { title: "Evening Ceremony", text: "Watch Wagah border ceremony" }
            ]
        }
    },

    // Map markers data
    mapMarkers: [
        { name: "Taj Mahal", lat: 27.1751, lng: 78.0421, category: "heritage", state: "uttarpradesh", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400", description: "UNESCO World Heritage Site", rating: 4.9, bestTime: "October - March" },
        { name: "Golden Temple", lat: 31.6200, lng: 74.8765, category: "temple", state: "punjab", image: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=400", description: "Holiest shrine of Sikhism", rating: 4.9, bestTime: "October - March" },
        { name: "Jaipur", lat: 26.9124, lng: 75.7873, category: "heritage", state: "rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400", description: "The Pink City", rating: 4.8, bestTime: "October - March" },
        { name: "Kerala Backwaters", lat: 9.4981, lng: 76.3388, category: "nature", state: "kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400", description: "Houseboat paradise", rating: 4.9, bestTime: "September - March" },
        { name: "Goa Beaches", lat: 15.2993, lng: 74.1240, category: "beach", state: "goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400", description: "Beach paradise", rating: 4.7, bestTime: "November - February" },
        { name: "Manali", lat: 32.2396, lng: 77.1887, category: "nature", state: "himachalpradesh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400", description: "Himalayan adventure hub", rating: 4.8, bestTime: "March - June" },
        { name: "Varanasi", lat: 25.3176, lng: 82.9739, category: "temple", state: "uttarpradesh", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", description: "Spiritual capital", rating: 4.8, bestTime: "October - March" },
        { name: "Kaziranga", lat: 26.5775, lng: 93.1711, category: "wildlife", state: "assam", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400", description: "One-horned rhino habitat", rating: 4.7, bestTime: "November - April" },
        { name: "Hampi", lat: 15.3350, lng: 76.4600, category: "heritage", state: "karnataka", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400", description: "Vijayanagara ruins", rating: 4.8, bestTime: "October - February" },
        { name: "Darjeeling", lat: 27.0360, lng: 88.2627, category: "nature", state: "westbengal", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", description: "Tea gardens", rating: 4.7, bestTime: "March - May" },
        { name: "Rann of Kutch", lat: 23.7337, lng: 69.8597, category: "nature", state: "gujarat", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400", description: "White salt desert", rating: 4.8, bestTime: "October - March" },
        { name: "Khajuraho", lat: 24.8318, lng: 79.9199, category: "heritage", state: "madhyapradesh", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400", description: "UNESCO temples", rating: 4.7, bestTime: "October - March" },
        { name: "Sundarbans", lat: 21.9497, lng: 89.1833, category: "wildlife", state: "westbengal", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", description: "Royal Bengal Tiger habitat", rating: 4.6, bestTime: "September - March" },
        { name: "Udaipur", lat: 24.5854, lng: 73.7125, category: "heritage", state: "rajasthan", image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400", description: "City of Lakes", rating: 4.8, bestTime: "October - March" },
        { name: "Shimla", lat: 31.1048, lng: 77.1734, category: "nature", state: "himachalpradesh", image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400", description: "Queen of Hills", rating: 4.6, bestTime: "March - June" }
    ]
};
