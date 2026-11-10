/**
 * NI HAO TRAVEL (你好) - OFFICIAL SCRIPT
 * Bilingual Engine & Interactive Experiences
 * Synchronized with cities.json data
 */

// ==========================================================================
// 1. DATA: CHINA TOUR DESTINATIONS (Synchronized with cities.json)
// ==========================================================================
const destinationsData = [
  {
    id: "beijing",
    nameAr: "بكين (Beijing)",
    nameEn: "Beijing",
    subtitleAr: "عاصمة الأباطرة وسور الصين العظيم وقلب الحضارة الصينية",
    subtitleEn: "Imperial Capital, Great Wall & Cultural Heartland",
    durationAr: "4 أيام / 3 ليالي",
    durationEn: "4 Days / 3 Nights",
    hotelAr: "Sofitel Beijing / Grand Hyatt Beijing at Oriental Plaza",
    hotelEn: "Sofitel Beijing / Grand Hyatt Beijing at Oriental Plaza",
    hotels: [
      { name: "Sofitel Beijing", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" },
      { name: "Grand Hyatt Beijing at Oriental Plaza", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" }
    ],
    image: "pho2/beijing1.jpeg",
    images: [
      "pho2/beijing1.jpeg",
      "pho2/beijing2.jpeg",
      "pho2/beijing3.jpeg"
    ],
    shortDescAr: "زيارة المدينة المحرمة، سور الصين العظيم، معبد السماء، القصر الصيفي وبحيرة كونمينغ، واستكشاف أزقة الهوتونغ التاريخية.",
    shortDescEn: "Visit the Forbidden City, the Great Wall of China, Temple of Heaven, Summer Palace, and historic Hutong courtyards.",
    fullDescAr: "بكين هي العاصمة التاريخية لبلاد الشرق الأسطورية ومركز الثقافة الإمبراطورية لأكثر من 3000 عام. تنبض بالمعالم العالمية الخالدة، كأبهاء المدينة المحرمة وقصور سلالتي مينغ وتشينغ، ومعبد السماء، والصعود الملحمي إلى سور الصين العظيم، مع تجارب فريدة بين أزقة الهوتونغ ومقاهي بحيرات هوهاي المتلألئة.",
    fullDescEn: "Beijing is the timeless imperial heart of China, boasting over 3,000 years of history. Discover grand imperial palaces in the Forbidden City, climb the epic Great Wall of China, stroll tranquil lakeside paths in the Summer Palace, and experience authentic Hutong heritage and dynamic modern markets.",
    paidActivitiesAr: [
      "زيارة المدينة المحرمة والقصور الإمبراطورية - The Palace Museum, Forbidden City",
      "زيارة سور الصين العظيم مع خيار التلفريك أو الزحليقة - Mutianyu Great Wall",
      "جولة في القصر الصيفي وبحيرة كونمينغ - Summer Palace",
      "زيارة معبد السماء وقاعة الصلاة للحصاد - Temple of Heaven",
      "إطلالة بانورامية على المدينة المحرمة ومحور بكين - Jingshan Park",
      "مشاهدة الباندا وحديقة الحيوانات - Beijing Zoo and Panda House",
      "مدينة ألعاب وعروض ترفيهية، نشاط اختياري - Universal Beijing Resort"
    ],
    paidActivitiesEn: [
      "The Palace Museum, Forbidden City - Imperial Palace complex tour",
      "Mutianyu Great Wall - Great Wall visit with cable car / toboggan ride",
      "Summer Palace & Kunming Lake - Imperial garden scenic boat & stroll",
      "Temple of Heaven - Ancient sacrificial hall & harvest prayer temple",
      "Jingshan Park - Panoramic elevated overlook of the Forbidden City",
      "Beijing Zoo and Panda House - Giant Panda pavilion & zoo entrance",
      "Universal Beijing Resort - Theme park & entertainment (Optional activity)"
    ],
    freeActivitiesAr: [
      "زيارة الميدان وحضور مراسم رفع العلم، الحجز مطلوب - CN Tian'anmen Square",
      "دخول مجاني مع حجز مسبق - National Museum of China",
      "جولة في الشوارع التاريخية والأسواق القديمة - Qianmen and Dashilan",
      "جولة حول البحيرات ومقاهي وأزقة الهوتونغ - Shichahai and Houhai",
      "استكشاف الأزقة التقليدية والمحال المحلية - Nanluoguxiang",
      "جولة في المنطقة الفنية، بعض المعارض مدفوعة - Art Zone 798 and 751D Park",
      "مشاهدة الاستاد الوطني، عش الطائر، ومركز الألعاب المائية من الخارج - Olympic Park",
      "جولة تسوق ومطاعم في وسط بكين - Wangfujing Street",
      "زيارة كافيهات مختارة بإطلالات جميلة على المدينة"
    ],
    freeActivitiesEn: [
      "Tian'anmen Square - Flag raising ceremony & historic square (Reservation required)",
      "National Museum of China - Free admission with prior reservation",
      "Qianmen and Dashilan - Walking tour of historic lanes & ancient bazaars",
      "Shichahai & Houhai - Scenic lakes, waterside cafes & authentic Hutong lanes",
      "Nanluoguxiang - Explore preserved historic alleys & local artisan boutiques",
      "Art Zone 798 and 751D Park - Tour dynamic modern art galleries & design studios",
      "Olympic Park - Exterior sightseeing of Bird's Nest stadium & Water Cube",
      "Wangfujing Street - Downtown premier shopping & culinary district",
      "Selected scenic city-view cafes for relaxation"
    ],
  },
  {
    id: "chongqing",
    nameAr: "تشونغتشينغ (Chongqing)",
    nameEn: "Chongqing",
    subtitleAr: "مدينة السايبربانك العصرية وجبال الضباب الساحرة",
    subtitleEn: "Cyberpunk Mountain Metropolis & Mystic River Gorges",
    durationAr: "5 أيام / 4 ليالي",
    durationEn: "5 Days / 4 Nights",
    hotelAr: "WFC (فايف ستار) / SEYA (أربعة نجوم) / BERKIN (ثلاثة نجوم) / YUNMU RESIDENCES (شقق 3 غرف)",
    hotelEn: "WFC (5-Star) / SEYA (4-Star) / BERKIN (3-Star) / YUNMU RESIDENCES (3-Bed Suites)",
    hotels: [
      { name: "WFC", rating: "فايف ستار", ratingEn: "5-Star" },
      { name: "SEYA", rating: "اربعه نجوم", ratingEn: "4-Star" },
      { name: "BERKIN", rating: "ثلاثه نجوم", ratingEn: "3-Star" },
      { name: "YUNMU INTERNATIONAL RESIDENCES", type: "نظام شقه ثلاث غرف وحمامين", typeEn: "3-Bedroom 2-Bath Suites" }
    ],
    image: "pho2/chongqing1.jpeg",
    images: [
      "pho2/chongqing1.jpeg",
      "pho2/chongqing2.jpeg",
      "pho2/chongqing3.jpeg"
    ],
    shortDescAr: "مدينة الجبال ثلاثية الأبعاد، مباني هونغ يادونغ المضيئة، قطار المونوريل المار داخل الأبنية، وأشهى هوت بوت صيني.",
    shortDescEn: "The 3D mountain metropolis, glowing Hongyadong stilt buildings, monorail passing through skyscrapers, and world-famous hotpot.",
    fullDescAr: "تشونغتشينغ هي المدينة الأكثر تميزاً وجاذبية في الصين بتضاريسها الجبلية وعمارتها ثلاثية الأبعاد التي تشبه أفلام الخيال العلمي. تجد فيها الشوارع فوق أسطح المنازل، وقطار المونوريل الذي يخترق مبنى سكنياً في محطة ليزيبا، ومجمع هونغ يادونغ التراثي الذي يتوهج ليلاً بالفوانيس الذهبية على ضفاف نهر جيالينغ.",
    fullDescEn: "Chongqing is renowned as the 3D Cyberpunk Mountain City. Its dramatic topography and multi-tiered architecture create a surreal sci-fi atmosphere where trains glide right through apartment buildings, roads run along rooftops, and the illuminated wooden Hongyadong complex glows like a fantasy realm over the river.",
    paidActivitiesAr: [
      "الصعود إلى برج Raffles City Chongqing لرؤية المدينة ليلاً",
      "رحلة كروس لمدة 45 دقيقة",
      "دخول مدينة الألعاب Wansheng Ordovician",
      "حضور عرض المسرح المتحرك بزاوية 360 درجة",
      "زيارة أكثر المناطق الطبيعية في المدينة: San Niu Shan",
      "دخول كهف القوارب Di Xin Tan Xian",
      "الصعود بالتلفريك"
    ],
    paidActivitiesEn: [
      "Ascend Raffles City Chongqing for night panoramic skyline view",
      "Scenic 45-minute river cruise amidst illuminated towers",
      "Entry to Wansheng Ordovician extreme adventure theme park",
      "Attend the immersive 360-degree rotating stage theatre show",
      "San Niu Shan - Explore premier scenic nature reserves in the city",
      "Di Xin Tan Xian - Boat exploration into underground river cave",
      "Aerial cableway scenic mountain crossing"
    ],
    freeActivitiesAr: [
      "المنطقة القديمة Shibati",
      "مشاهدة المترو داخل المبنى في Liziba Station",
      "الطابق 22 (منصة مشاهدة حضرية)",
      "زيارة Hongyadong",
      "زيارة Ciqikou Ancient Town",
      "حضور عرض الدرونز (يوم السبت)",
      "زيارة بعض المولات",
      "زيارة كافيهات مختارة بإطلالات جميلة على المدينة",
      "شارع Xiahaoli Old Street"
    ],
    freeActivitiesEn: [
      "Shibati - Explore historic mountain old town district",
      "Liziba Station - Watch monorail glide inside the residential building",
      "22nd Floor urban observation and photography terrace",
      "Hongyadong - Visit glowing stilt architecture along Jialing river",
      "Ciqikou Ancient Town - Traditional crafts, tea houses & historic lanes",
      "Spectacular drone aerial light formation show (Saturdays)",
      "Shopping and leisure in premier lifestyle shopping centers",
      "Visit selected scenic cafes with panoramic skyline views",
      "Xiahaoli Old Street - Leisure walk through heritage stone alleys"
    ],
  },
  {
    id: "guangzhou",
    nameAr: "جوانزو (Guangzhou)",
    nameEn: "Guangzhou",
    subtitleAr: "عاصمة التجارة ونهر اللؤلؤ وبرج كانتون الأيقوني",
    subtitleEn: "City of Flowers, Pearl River & Canton Tower",
    durationAr: "4 أيام / 3 ليالي",
    durationEn: "4 Days / 3 Nights",
    hotelAr: "Four Seasons Hotel Guangzhou / Conrad Guangzhou / Hotel Indigo Haixinsha",
    hotelEn: "Four Seasons Hotel Guangzhou / Conrad Guangzhou / Hotel Indigo Haixinsha",
    hotels: [
      { name: "Four Seasons Hotel Guangzhou", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" },
      { name: "Conrad Guangzhou", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" },
      { name: "Hotel Indigo Guangzhou Haixinsha", rating: "بوتيك راقي", ratingEn: "Boutique Luxury" }
    ],
    image: "pho2/guangzhou1.jpeg",
    images: [
      "pho2/guangzhou1.jpeg",
      "pho2/guangzhou2.jpeg",
      "pho2/guangzhou3.jpeg"
    ],
    shortDescAr: "مدينة الزهور وعاصمة التجارة العالمية، ناطحات سحاب مذهلة، كروز نهر اللؤلؤ الساحر، وبرج كانتون الشامخ.",
    shortDescEn: "City of flowers and trade, soaring Canton Tower, dazzling Pearl River cruise, colonial Shamian Island, and luxury shopping.",
    fullDescAr: "جوانزو (كانتون) هي كبرى حواضر جنوب الصين وبوابتها التجارية التاريخية على طريق الحرير البحري. تجمع بتناغم ساحر بين الحداثة الخارقة في ناطحات سحاب ساحة هواشنغ وبرج كانتون الملون، والأصالة المعمارية في أزقة يونغ تشينغ فانغ وجزيرة شاميان ذات الطابع الأوروبي الكلاسيكي، إلى جانب رحلات الكروز النهرية الرائعة ومراكز التسوق العالمية.",
    fullDescEn: "Guangzhou is the vibrant metropolis of Southern China and the legendary start of the Maritime Silk Road. It seamlessly merges futuristic marvels like the radiant rainbow Canton Tower and Huacheng Square with old-world colonial charm on Shamian Island, scenic Pearl River night cruises, and bustling retail havens.",
    paidActivitiesAr: [
      "الصعود إلى برج كانتون والاستمتاع بإطلالة بانورامية على جوانزو، مع خيار العجلة الدوارة والألعاب المرتفعة (Canton Tower 广州塔)",
      "جولة نهرية ليلية لمشاهدة برج كانتون وأضواء المدينة والجسور المضيئة (Pearl River Night Cruise 珠江夜游)",
      "زيارة الوادي الجبلي الشهير، والمشي على الجسر الزجاجي المرتفع، وتجربة الكارتنج الجبلي والمنزلقات والشلالات والتجديف النهري (يقع في مدينة تشينغيوان خارج جوانزو ويحتاج إلى رحلة يوم كامل) (Gulong Gorge 古龙峡)",
      "زيارة الأكواريوم والأحياء البحرية داخل Grandview Mall (Grandview Aquarium 正佳极地海洋世界)"
    ],
    paidActivitiesEn: [
      "Canton Tower 广州塔 - Ascend iconic tower for panoramic view, Bubble Tram & sky drop",
      "Pearl River Night Cruise 珠江夜游 - Luxury nighttime cruise viewing skyline lights & bridges",
      "Gulong Gorge 古龙峡 - Glass suspension bridge, mountain carting, waterfalls & rafting (Full-day trip in Qingyuan)",
      "Grandview Aquarium 正佳极地海洋世界 - Polar aquarium marine world inside Grandview Mall"
    ],
    freeActivitiesAr: [
      "مشاهدة برج كانتون والمباني الحديثة المضاءة ليلاً (Huacheng Square 花城广场)",
      "التجول بين المباني الأوروبية التاريخية والمقاهي والشوارع الجميلة (Shamian Island 沙面岛)",
      "استكشاف الأزقة التقليدية والأسواق والمطاعم والمقاهي (Yongqingfang 永庆坊)",
      "التسوق في أشهر الشوارع التجارية والمطاعم والأسواق (Beijing Road 北京路步行街)",
      "زيارة الحديقة والبحيرات وتمثال الكباش الخمسة (Yuexiu Park 越秀公园)",
      "زيارة متحف قوانغدونغ، الدخول العام مجاني مع مراعاة الحجز (Guangdong Museum 广东省博物馆)",
      "المشي على الجسر المخصص للمشاة والتقاط صور لبرج كانتون ونهر اللؤلؤ (Haixin Bridge 海心桥)",
      "زيارة الكاتدرائية التاريخية والتقاط الصور (Sacred Heart Cathedral 石室圣心大教堂)",
      "استكشاف الأسواق الشعبية والمباني التقليدية (Shangxiajiu Pedestrian Street 上下九步行街)",
      "المشي بجانب النهر والاستمتاع بالمناظر الليلية (Pearl River Riverside 珠江沿岸)",
      "زيارة مراكز التسوق مثل Taikoo Hui و Grandview Mall (Tianhe Shopping District 天河商圈)",
      "جولة في الجزيرة الهادئة والمساحات الخضراء المطلة على النهر (Ersha Island 二沙岛)",
      "زيارة كافيهات مختارة بإطلالات على برج كانتون ونهر اللؤلؤ"
    ],
    freeActivitiesEn: [
      "Huacheng Square 花城广场 - Night illumination facing Canton Tower & modern towers",
      "Shamian Island 沙面岛 - Stroll along peaceful European colonial avenues & gardens",
      "Yongqingfang 永庆坊 - Preserved Lingnan heritage alleys, opera house & tea cafes",
      "Beijing Road 北京路步行街 - Iconic pedestrian shopping & historic street ruins",
      "Yuexiu Park 越秀公园 - Verdant park, serene lakes & Five Rams stone sculpture",
      "Guangdong Museum 广东省博物馆 - Provincial cultural museum (Free with booking)",
      "Haixin Bridge 海心桥 - Pedestrian scenic footbridge over Pearl River",
      "Sacred Heart Cathedral 石室圣心大教堂 - Majestic stone Gothic cathedral visit",
      "Shangxiajiu Pedestrian Street 上下九步行街 - Historic arcade architecture & bazaar",
      "Pearl River Riverside 珠江沿岸 - Romantic illuminated waterside promenade",
      "Tianhe Shopping District 天河商圈 - Luxury malls including Taikoo Hui & Grandview",
      "Ersha Island 二沙岛 - Green parks, river walks & Xinghai concert hall island",
      "Selected riverside cafes overlooking Canton Tower"
    ],
  },
  {
    id: "guilin",
    nameAr: "قويلين (Guilin)",
    nameEn: "Guilin",
    subtitleAr: "جنة الأرض بين جبال الكارست الأسطورية ونهر لي الخالد",
    subtitleEn: "Earth's Paradise, Karst Peaks & The Emerald Li River",
    durationAr: "4 أيام / 3 ليالي",
    durationEn: "4 Days / 3 Nights",
    hotelAr: "Yangshuo Mountain Retreat / Li River Resort / LS",
    hotelEn: "Yangshuo Mountain Retreat / Li River Resort / LS",
    hotels: [
      { name: "Yangshuo Mountain Retreat", rating: "منتجع جبلي فاخر", ratingEn: "Scenic Nature Retreat" },
      { name: "Li River Resort", rating: "إطلالة نهرية ساحرة", ratingEn: "Riverside Resort" },
      { name: "LS", rating: "إقامة هادئة ومميزة", ratingEn: "Boutique Experience" }
    ],
    image: "pho2/guilin1.jpeg",
    images: [
      "pho2/guilin1.jpeg",
      "pho2/guilin2.jpeg",
      "pho2/guilin3.jpeg"
    ],
    shortDescAr: "أجمل مناظر طبيعية تحت السماء، جبال الكارست الأسطورية، قوارب الخيزران على نهر يولونغ، وبلدة يانغشو الساحرة.",
    shortDescEn: "Finest landscapes under heaven, surreal karst peaks, bamboo rafting along Yulong River, and picturesque Yangshuo town.",
    fullDescAr: "قويلين ويانغشو هما أيقونة الطبيعة الخلابة في الصين التي تغنى بها الشعراء عبر العصور بمقولة «مناظر قويلين هي الأجمل تحت أديم السماء». تنتشر فيها آلاف التلال الكارستية الخضراء المنعكسة على مياه نهري لي ويولونغ الرقراقة، وتتيح تجارب ركوب قوارب البامبو، واستكشاف الكهوف الجيرية الملونة، وجولات الدراجات في القرى الريفية البديعة.",
    fullDescEn: "Guilin and Yangshuo represent China's ultimate natural wonderland, celebrated for centuries with the proverb 'Guilin's scenery is the finest under heaven.' Discover mystical limestone karst towers mirrored in the crystalline waters of the Li and Yulong Rivers, bamboo rafting, illuminated subterranean caves, and scenic cycling through pastoral villages.",
    paidActivitiesAr: [
      "جولة بالقوارب المصنوعة من الخيزران وسط الجبال والحقول الخضراء (Yulong River Bamboo Rafting 遇龙河竹筏漂流)",
      "ركوب التلفريك والمشي فوق الجسور الزجاجية المعلقة، مع إطلالات بانورامية على جبال يانغشو (Ruyi Peak 如意峰)",
      "الصعود إلى منصة مشاهدة نهر لي والجبال المحيطة، خصوصاً وقت شروق الشمس (Xianggong Mountain 相公山)",
      "استكشاف الكهوف الجيرية والتشكيلات الصخرية الملونة (Silver Cave 银子岩)",
      "حضور عرض فني ليلي على نهر لي وسط الجبال الطبيعية (Impression Liu Sanjie 印象刘三姐)",
      "الصعود إلى الجبل الشهير بفتحه الطبيعية على شكل هلال (Moon Hill 月亮山)",
      "رحلة بالقارب بين المناظر الجبلية والحدائق والقرى التقليدية (Shangri-La Scenic Area 世外桃源)",
      "جولة نهرية من منطقة شينغبينغ للاستمتاع بالجبال والمناظر الطبيعية (Li River Boat Tour 漓江游船)",
      "تجربة المنطاد أو الطيران الشراعي فوق جبال يانغشو، حسب حالة الطقس وتوافر التشغيل (Hot Air Balloon or Paragliding 热气球 / 滑翔伞)",
      "استئجار دراجة هوائية أو كهربائية للتجول بين الجبال والقرى الريفية (Cycling or E-Bike Rental 骑行 / 电动车)"
    ],
    paidActivitiesEn: [
      "Yulong River Bamboo Rafting 遇龙河竹筏漂流 - Hand-punted bamboo raft journey through karst waterways",
      "Ruyi Peak 如意峰 - Scenic cable car, suspension glass bridge & 360 cliffwalks",
      "Xianggong Mountain 相公山 - Famous summit viewpoint over the bend of Li River at sunrise",
      "Silver Cave 银子岩 - Huge illuminated multi-tiered limestone karst caverns",
      "Impression Liu Sanjie 印象刘三姐 - Spectacular outdoor water musical show directed by Zhang Yimou",
      "Moon Hill 月亮山 - Hike up the iconic peak with natural moon-shaped arch",
      "Shangri-La Scenic Area 世外桃源 - Serene boat cruise through traditional water villages & blossom gardens",
      "Li River Boat Tour 漓江游船 - Scenic river boat tour from Xingping around karst peaks",
      "Hot Air Balloon or Paragliding 热气球 / 滑翔伞 - Aerial ballooning flight over Yangshuo countryside",
      "Cycling or E-Bike Rental 骑行 / 电动车 - Countryside cycling through paddy fields and ancient paths"
    ],
    freeActivitiesAr: [
      "التجول في أشهر شوارع يانغشو، والتسوق وزيارة المطاعم والمقاهي (West Street 西街)",
      "استكشاف البلدة التاريخية والأزقة الصينية التقليدية (Xingping Ancient Town 兴坪古镇)",
      "زيارة موقع المنظر لـ يوان 20 الشهير المطبوع على العملة الصينية فئة 20 يوان (20 Yuan Banknote Scenic Spot 二十元人民币背景)",
      "التجول بين الجبال والحقول والمناظر الريفية الخلابة (Ten-Mile Gallery 十里画廊)",
      "زيارة الجسر الحجري التاريخي والتقاط الصور بجانب نهر يولونغ (Fuli Bridge 富里桥)",
      "المشي بجانب النهر والاستمتاع بالطبيعة والحقول الزراعية (Yulong River Riverside Walk 遇龙河)",
      "استكشاف القرية الصينية التقليدية والمنازل التاريخية (Jiuxian Ancient Village 旧县村)",
      "مشاهدة الجبال وانعكاساتها على مياه النهر عند الغروب (Li River Riverside 漓江江边)",
      "زيارة الأسواق المحلية ومحلات الهدايا والمنتجات التقليدية (Yangshuo Local Markets 阳朔当地市场)",
      "زيارة كافيهات مختارة بإطلالات على الجبال والحقول والأنهار، والمشاهد مجانية من الطرق العامة، والطلبات داخل المقاهي مدفوعة (Mountain View Cafés 山景咖啡馆)"
    ],
    freeActivitiesEn: [
      "West Street 西街 - Yangshuo's lively historic street with cafes, dining & boutiques",
      "Xingping Ancient Town 兴坪古镇 - Preserved Ming & Qing dynasty stone lanes & architecture",
      "20 Yuan Banknote Scenic Spot 二十元人民币背景 - Famous scenery featured on China's 20-Yuan note",
      "Ten-Mile Gallery 十里画廊 - Leisure drive / walk along picturesque green karst valley",
      "Fuli Bridge 富里桥 - 500-year-old single-arch stone bridge across Yulong River",
      "Yulong River Riverside Walk 遇龙河 - Scenic waterside path amidst emerald countryside",
      "Jiuxian Ancient Village 旧县村 - Historic mud-brick rural houses & classical courtyards",
      "Li River Riverside 漓江江边 - Golden hour mountain reflections along the Li River shore",
      "Yangshuo Local Markets 阳朔当地市场 - Artisan souvenirs, local teas & agricultural crafts",
      "Mountain View Cafés 山景咖啡馆 - Relax in panoramic open-air cafes facing towering limestone peaks"
    ],
  },
  {
    id: "shanghai",
    nameAr: "شنغهاي (Shanghai)",
    nameEn: "Shanghai",
    subtitleAr: "لؤلؤة الشرق ومدينة ناطحات السحاب الساحرة",
    subtitleEn: "Pearl of the Orient & Futuristic Metropolis",
    durationAr: "5 أيام / 4 ليالي",
    durationEn: "5 Days / 4 Nights",
    hotelAr: "SHANGRI-LA / CONRAD / MERCURE",
    hotelEn: "SHANGRI-LA / CONRAD / MERCURE",
    hotels: [
      { name: "SHANGRI-LA", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" },
      { name: "CONRAD", rating: "فايف ستار فاخر", ratingEn: "5-Star Luxury" },
      { name: "MERCURE", rating: "أربعة نجوم عصري", ratingEn: "4-Star Contemporary" }
    ],
    image: "pho2/shanghai1.jpeg",
    images: [
      "pho2/shanghai1.jpeg",
      "pho2/shanghai2.jpeg",
      "pho2/shanghai3.jpeg"
    ],
    shortDescAr: "أفق البوند الخلاب، برج شنغهاي الشاهق، برج لؤلؤة الشرق، ديزني لاند، وحدائق يويوان التاريخية العريقة.",
    shortDescEn: "Iconic Bund skyline, towering Shanghai Tower, Oriental Pearl, Shanghai Disneyland, and historic Yuyuan Garden.",
    fullDescAr: "شنغهاي هي درة الشرق الصينية ومركز المال والتطور الحضاري العالمي. تتميز بإطلالات ساحرة على نهر هوانغبو وأفق البوند التاريخي يقابله ناطحات السحاب العملاقة في لوجياتسوي، بالإضافة إلى ديزني لاند شنغهاي، والحدائق الإمبراطورية العريقة في يويوان، وأرقى شوارع التسوق العالمية.",
    fullDescEn: "Shanghai is China's dazzling cosmopolitan jewel and futuristic megacity. Marvel at the contrasting architecture between the colonial Bund and soaring Lujiazui skyscrapers, explore historic Yuyuan Gardens, indulge in premier shopping along Nanjing Road, and visit world-renowned Shanghai Disneyland.",
    paidActivitiesAr: [
      "الصعود إلى منصة المشاهدة - Shanghai Tower",
      "الصعود إلى منصة المشاهدة - Oriental Pearl Tower",
      "تذكرة دخول المدينة - Shanghai Disneyland"
    ],
    paidActivitiesEn: [
      "Ascend the observation deck - Shanghai Tower",
      "Ascend the observation deck - Oriental Pearl Tower",
      "Theme park admission ticket - Shanghai Disneyland"
    ],
    freeActivitiesAr: [
      "المشي بإطلالة رائعة على الأبراج – The Bund",
      "جولة تسوق في أشهر شارع – Nanjing Road",
      "استكشاف المنطقة الفنية – Tianzifang",
      "زيارة الحديقة – Century Park",
      "جولة في الحي الفرنسي السابق – Shanghai French Concession",
      "زيارة كافيهات بإطلالات جميلة على النهر",
      "جولة مسائية في منطقة Lujiazui الحديثة",
      "زيارة الحدائق – Yuyuan Garden"
    ],
    freeActivitiesEn: [
      "Scenic waterfront promenade facing futuristic towers – The Bund",
      "Premier pedestrian shopping & lifestyle avenue – Nanjing Road",
      "Artistic alleys, craft shops & cafes – Tianzifang",
      "Tranquil green park & lakeside stroll – Century Park",
      "Tree-lined historic avenues & boutique cafes – Shanghai French Concession",
      "Scenic riverside cafe experiences along Huangpu River",
      "Evening skyline walk in futuristic Lujiazui financial district",
      "Classical Ming dynasty imperial pavilions – Yuyuan Garden"
    ],
  },
  {
    id: "zhangjiajie",
    nameAr: "تشانغجياجيه (Zhangjiajie)",
    nameEn: "Zhangjiajie",
    subtitleAr: "جبال أفاتار الأسطورية وأطول جسر زجاجي معلق في العالم",
    subtitleEn: "Avatar Hallelujah Mountains & Grand Glass Bridge",
    durationAr: "4 أيام / 3 ليالي",
    durationEn: "4 Days / 3 Nights",
    hotelAr: "HILTON GARDEN INN / HAMPTON BY HILTON",
    hotelEn: "HILTON GARDEN INN / HAMPTON BY HILTON",
    hotels: [
      { name: "HILTON GARDEN INN", rating: "أربعة نجوم راقي", ratingEn: "4-Star Deluxe" },
      { name: "HAMPTON BY HILTON", rating: "أربعة نجوم متميز", ratingEn: "4-Star Contemporary" }
    ],
    image: "pho2/zhanjiajie1.jpeg",
    images: [
      "pho2/zhanjiajie1.jpeg",
      "pho2/zhanjiajie2.jpeg",
      "pho2/zhanjiajie3.jpeg"
    ],
    shortDescAr: "جبال أفاتار الصخرية الأسطورية، مصعد بايلونغ الزجاجي، جبل تيانمن وتلفريك بوابة السماء، وأطول جسر زجاجي معلق.",
    shortDescEn: "The mystical Avatar sandstone spires, Bailong cliffside glass elevator, Tianmen Mountain, and world-record glass bridge.",
    fullDescAr: "تشانغجياجيه هي الأعجوبة الطبيعية الأكثر إبهاراً في العالم والتي ألهمت جبال 'هللويا' الطافية في فيلم أفاتار الشهير. تضم حديقة الغابات الوطنية آلاف الأعمدة الصخرية الشاهقة وسط الضباب، وتلفريك جبل تيانمن الأطول عالمياً، وممر بوابة السماء ومصعد بايلونغ الشاهق وأطول جسر زجاجي معلق.",
    fullDescEn: "Zhangjiajie is the otherworldly geological wonder that inspired the floating Hallelujah Mountains in Avatar. Discover thousands of towering sandstone spires piercing through mist, the world's longest Tianmen cable car, Heaven's Gate, Bailong cliffside glass elevator, and the breathtaking Grand Canyon glass bridge.",
    paidActivitiesAr: [
      "Zhangjiajie National Forest Park - حديقة الغابات الوطنية تشانغجياجيه",
      "Bailong Elevator + Tianzi Mountain Cable Car - مصعد بايلونغ الزجاجي وتلفريك جبل تيانتسي",
      "Zhangjiajie Grand Canyon + Glass Bridge - وادي تشانغجياجيه الكبير والجسر الزجاجي المعلق",
      "Tianmen Mountain + Cable Car - جبل تيانمن وتلفريك بوابة السماء"
    ],
    paidActivitiesEn: [
      "Zhangjiajie National Forest Park - Avatar peaks & scenic trails",
      "Bailong Glass Cliffside Elevator + Tianzi Mountain Cable Car",
      "Zhangjiajie Grand Canyon + Record-holding Glass Suspension Bridge",
      "Tianmen Mountain (Heaven's Gate) + World's Longest Cable Car"
    ],
    freeActivitiesAr: [
      "72 Strange Buildings (زيارة منطقة 72 奇楼 المعمارية المضاءة)",
      "Furong Town (زيارة بلدة فورونغ التاريخية والشلالات المعلقة)"
    ],
    freeActivitiesEn: [
      "72 Strange Buildings (72 Qilou) - Illuminated Tujia architectural marvel",
      "Furong Ancient Town - Historic waterfall village & stone lanes"
    ],
  }
];

// ==========================================================================
// 2. HERO SLIDES DATA (Top Highlights)
// ==========================================================================
const heroSlidesData = [
  {
    id: "beijing",
    nameAr: "بكين (Beijing)",
    nameEn: "Beijing",
    image: "pho1/beijing.jpeg"
  },
  {
    id: "chongqing",
    nameAr: "تشونغتشينغ (Chongqing)",
    nameEn: "Chongqing",
    image: "pho1/chongqing.jpeg"
  },
  {
    id: "guangzhou",
    nameAr: "جوانزو (Guangzhou)",
    nameEn: "Guangzhou",
    image: "pho1/guanzhou.jpeg"
  },
  {
    id: "guilin",
    nameAr: "قويلين (Guilin)",
    nameEn: "Guilin",
    image: "pho1/guilin.jpeg"
  },
  {
    id: "shanghai",
    nameAr: "شنغهاي (Shanghai)",
    nameEn: "Shanghai",
    image: "pho1/shanghai.jpeg"
  },
  {
    id: "zhangjiajie",
    nameAr: "تشانغجياجيه (Zhangjiajie)",
    nameEn: "Zhangjiajie",
    image: "pho1/zhanjiajie.jpeg"
  }
];

// ==========================================================================
// 3. DICTIONARY: BILINGUAL TRANSLATION STRINGS
// ==========================================================================
const translations = {
  ar: {
    pageTitle: "Ni Hao Travel | ني هاو للسياحة والسفر إلى الصين",
    brandSub: "بوابتكم لسحر الصين",
    navHome: "الرئيسية",
    navAbout: "عن ني هاو",
    navDestinations: "أجمل الوجهات",
    navSocial: "حساباتنا",
    whatsappTooltip: "تواصل معنا",
    heroBadge: "بوابتكم السياحية المعتمدة إلى الصين",
    heroTitle1: "اكتشف عجائب وسحر",
    heroTitle2: "بلاد الشرق الأسطورية",
    heroSubtitle: "نأخذكم في رحلة لا تُنسى بين أعرق الحضارات التاريخية وناطحات السحاب المستقبلية وأروع الجبال الطبيعية في الصين، مع رعاية واهتمام متكاملين.",
    heroCtaDestinations: "استكشف أجمل الوجهات",
    heroCtaWhatsapp: "استشارة رحلة عبر واتساب",
    pill1: "طبيعة خلابة وعجائب عالمية",
    pill2: "مرشدين يتحدثون العربية",
    pill3: "متابعة خاصة طوال فترة الرحلة",
    aboutLabel: "عن ني هاو",
    aboutTitle: "ني هاو ترافيل .. رفيقك الموثوق <br><span class=\"highlight\">لرحلة العمر في الصين</span>",
    aboutText1: "«ني هاو» (你好) هي تحية الترحيب الصينية الدافئة، ومنها استلهمنا رسالتنا في فتح آفاق السفر الممتع والآمن إلى واحدة من أروع وأعظم وجهات العالم.",
    aboutText2: "نحن منصة متخصصة تُعنى بتقديم الصورة الحقيقية والمبهرة للسياحة في الصين؛ من استكشاف الطبيعة العذراء التي أذهلت مخرجي السينما العالمية، إلى السير فوق أقدم الأسوار التاريخية وعيش الحياة العصرية في أضخم المدن الذكية، مع توفير كافة سبل الراحة والتوجيه خطوة بخطوة عبر الواتساب ووسائل التواصل.",
    hightlight1Title: "وجهات مدروسة بعناية",
    hightlight1Desc: "اخترنا لكم أجمل المناطق التي تلخص تنوع وسحر الصين.",
    hightlight2Title: "تواصل فوري ومباشر",
    hightlight2Desc: "إجابة على كل التساؤلات والتخطيط معك بضغطة زر عبر الواتساب.",
    destinationsLabel: "أيقونات الصين",
    destinationsTitle: "أجمل وجهات الرحلة",
    destinationsSubtitle: "وجهات أسطورية تشملها الرحلة؛ انقر على أي وجهة لاستعراض المعالم والأنشطة المدفوعة والحرة وتفاصيل الإقامة والفنادق.",
    cardDetailsBtn: "اضغط لتفاصيل البرنامج والأنشطة",
    modalLandmarksTitle: "أبرز المعالم التي ستزورها:",
    modalActivitiesTitle: "أنشطة وتجارب لا تفوتها في هذه المنطقة:",
    modalInquireWa: "استفسر عن هذه الوجهة عبر واتساب",
    modalCloseText: "إغلاق النافذة",
    socialLabel: "تواصل معنا وتابعنا",
    socialTitle: "حساباتنا الرسمية على منصات التواصل",
    socialSubtitle: "تابعوا يومياتنا وتغطياتنا المصورة لعجائب الصين، وتواصلوا معنا مباشرة عبر القنوات التالية:",
    waCardTitle: "NiHaoTravel",
    waCardDesc: "رد سريع ومباشر على مدار الساعة لتخطيط رحلتك وإجابة استفساراتك.",
    waCardBtn: "راسلنا الآن",
    instaCardDesc: "صور يومية مبهرة، فيديوهات ريلز ممتعة، وتغطيات لأجمل مدن وطبيعة الصين.",
    instaCardBtn: "متابعة الحساب",
    tiktokCardDesc: "مقاطع قصيرة حصرية عن ثقافة الأكل، العجائب التقنية، ونصائح السفر إلى الصين.",
    tiktokCardBtn: "شاهد الفيديوهات",
    footerDesc: "دليلك الأفضل لاكتشاف روعة السياحة الصينية. تجارب سفر ملهمة، استكشاف أجمل المدن، ودعم متواصل على مدار الرحلة.",
    footerQuickLinks: "روابط سريعة",
    footerRegionsTitle: "أجمل الوجهات",
    footerContactTitle: "تواصل مباشر",
    footerWaText: "خدمة عملاء على مدار 24 ساعة",
    footerChatBtn: "دردشة واتساب فورية",
    copyrightText: "جميع الحقوق محفوظة."
  },
  en: {
    pageTitle: "Ni Hao Travel | Your Gateway to China Tourism",
    brandSub: "Your Gateway to China's Wonders",
    navHome: "Home",
    navAbout: "About Us",
    navDestinations: "Top Destinations",
    navSocial: "Our Channels",
    whatsappTooltip: "Chat with us",
    heroBadge: "Your Premier Certified Partner for China Travel",
    heroTitle1: "Discover the Wonders & Magic of",
    heroTitle2: "Legendary China",
    heroSubtitle: "Embark on an unforgettable journey through ancient dynasties, futuristic skylines, and surreal avatar mountain landscapes, accompanied by exceptional personalized care.",
    heroCtaDestinations: "Explore Top Destinations",
    heroCtaWhatsapp: "Consult via WhatsApp",
    pill1: "Breathtaking Nature & Wonders",
    pill2: "Arabic & English Guides",
    pill3: "Customer Support 24/7",
    aboutLabel: "About Us",
    aboutTitle: "Ni Hao Travel .. Your Trusted Companion <br><span class=\"highlight\">for the Trip of a Lifetime</span>",
    aboutText1: "«Ni Hao» (你好) is the warm traditional Chinese greeting. It inspires our mission to unveil the boundless beauty and authentic wonders of China for global and Arab travelers.",
    aboutText2: "We are a dedicated travel showcase introducing the true splendor of China; from pristine nature that inspired blockbuster cinema, to walking atop ancient imperial walls, and experiencing state-of-the-art smart cities with seamless guidance and direct WhatsApp communication.",
    hightlight1Title: "Carefully Curated Itineraries",
    hightlight1Desc: "We handpicked the finest destinations encapsulating China's breathtaking diversity.",
    hightlight2Title: "Instant Direct Communication",
    hightlight2Desc: "Instant consultation and custom trip planning at your fingertips via WhatsApp.",
    destinationsLabel: "China Icons",
    destinationsTitle: "Tour Destinations",
    destinationsSubtitle: "Legendary destinations included in the tour; click any destination to view landmarks, paid & free activities, hotel accommodations, and full details.",
    cardDetailsBtn: "View Itinerary & Activities",
    modalLandmarksTitle: "Top Iconic Landmarks to Visit:",
    modalActivitiesTitle: "Must-Do Activities & Experiences:",
    modalInquireWa: "Inquire about this destination via WhatsApp",
    modalCloseText: "Close Window",
    socialLabel: "Connect & Follow",
    socialTitle: "Our Official Social Media Channels",
    socialSubtitle: "Follow our daily visual stories, travel tips, and reels across China, or reach out to us directly:",
    waCardTitle: "WhatsApp Concierge",
    waCardDesc: "Fast and direct 24/7 response to plan your itinerary and answer every travel inquiry.",
    waCardBtn: "Chat with Us",
    instaCardDesc: "Stunning daily photography, reels, and scenic highlights of China's most beautiful landscapes.",
    instaCardBtn: "Follow on Instagram",
    tiktokCardDesc: "Exclusive short videos covering street food culture, high-speed rail, and insider travel tips.",
    tiktokCardBtn: "Watch on TikTok",
    footerDesc: "Your premier resource for discovering China. Inspiring travel experiences, the finest destinations, and dedicated support.",
    footerQuickLinks: "Quick Links",
    footerRegionsTitle: "Featured Destinations",
    footerContactTitle: "Direct Contact",
    footerWaText: "24/7 Dedicated Customer Support",
    footerChatBtn: "Start WhatsApp Chat",
    copyrightText: "All Rights Reserved."
  }
};

// ==========================================================================
// 4. STATE MANAGEMENT
// ==========================================================================
let currentLang = localStorage.getItem("nihao_lang") || "ar";
let currentSlideIndex = 0;
let slideInterval = null;
let currentModalDestId = null;
let currentModalSlideIdx = 0;

// ==========================================================================
// 5. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================================================
async function initApp() {
  // Apply saved or default language
  applyLanguage(currentLang);

  // Setup Language Switcher Button
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", toggleLanguage);
  }

  // Setup 3-Lines Dropdown Menu
  setupHeaderDropdown();

  // Setup Sticky Header on Scroll
  setupScrollEffects();

  // Initialize Circular Hero Slider
  initCircularSlider();

  // Render Destination Cards (Single Image + Name + Short Summary)
  renderDestinations();
  renderFooterDestinations();

  // Setup Destination Modal Handlers
  setupModalEvents();

  // Dynamically load & sync cities.json if running via server
  await loadCitiesJsonData();

  // Set current year in footer
  const currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ==========================================================================
// 6. SYNC ENGINE: DYNAMICALLY READ CITIES.JSON
// ==========================================================================
async function loadCitiesJsonData() {
  try {
    const response = await fetch("cities.json");
    if (!response.ok) return;
    const data = await response.json();
    if (data && Array.isArray(data.destinations) && data.destinations.length) {
      applyCitiesJsonData(data.destinations);
    }
  } catch (err) {
    // Graceful fallback for file:// protocol or offline mode
    console.log("Ni Hao Travel: Using local synchronized cities dataset.");
  }
}

function normalizeCityName(str) {
  return (str || "")
    .toLowerCase()
    .replace(/[أإآا]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\s\-_()]/g, "");
}

function applyCitiesJsonData(jsonDestinations) {
  jsonDestinations.forEach((item) => {
    const rawCity = (item.city || "").trim();
    const normCity = normalizeCityName(rawCity);

    const match = destinationsData.find((d) => {
      const dNormAr = normalizeCityName(d.nameAr);
      const dNormEn = normalizeCityName(d.nameEn);
      const dId = (d.id || "").toLowerCase();
      return (
        dNormAr.includes(normCity) ||
        normCity.includes(dNormAr) ||
        dNormEn.includes(normCity) ||
        normCity.includes(dNormEn) ||
        dId === normCity
      );
    });

    if (match) {
      if (Array.isArray(item.paid_activities) && item.paid_activities.length) {
        match.paidActivitiesAr = item.paid_activities;
      }
      if (Array.isArray(item.free_activities) && item.free_activities.length) {
        match.freeActivitiesAr = item.free_activities;
      }
      if (Array.isArray(item.hotels) && item.hotels.length) {
        match.hotels = item.hotels;
        match.hotelAr = item.hotels.map(h => {
          let str = h.name;
          if (h.rating) str += ` (${h.rating})`;
          if (h.type) str += ` (${h.type})`;
          return str;
        }).join(" / ");
      }
    }
  });

  renderDestinations();
  renderFooterDestinations();
}

// ==========================================================================
// 7. BILINGUAL LANGUAGE ENGINE (AR / EN)
// ==========================================================================
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("nihao_lang", currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Update Language Button Label & Attributes
  const langLabel = document.getElementById("langLabel");
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langLabel) {
    langLabel.textContent = lang === "ar" ? "English" : "العربية";
  }
  if (langToggleBtn) {
    langToggleBtn.setAttribute(
      "aria-label",
      lang === "ar" ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"
    );
    langToggleBtn.setAttribute(
      "title",
      lang === "ar" ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"
    );
  }

  // Update Page Title
  if (translations[lang] && translations[lang].pageTitle) {
    document.title = translations[lang].pageTitle;
  }

  // Translate all text elements with [data-key]
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    const val = translations[lang] ? translations[lang][key] : null;

    if (val !== undefined && val !== null) {
      if (val.includes("<") && val.includes(">")) {
        el.innerHTML = val;
      } else {
        const icon = el.querySelector("i");
        const span = el.querySelector("span");
        if (span && icon) {
          span.textContent = val;
        } else if (!icon) {
          el.textContent = val;
        } else {
          const cloneIcon = icon.cloneNode(true);
          el.textContent = "";
          el.appendChild(cloneIcon);
          el.appendChild(document.createTextNode(" " + val));
        }
      }
    }
  });

  // Update circular slider badge
  updateSliderBadge();

  // Re-render destinations to update titles, tags, and descriptions
  renderDestinations();
  renderFooterDestinations();

  // Update WhatsApp links text
  updateWhatsAppLinks();
}

function updateWhatsAppLinks() {
  const waMsg = currentLang === "ar"
    ? "مرحباً%20ني%20هاو%20ترافيل،%20أود%20الاستفسار%20عن%20رحلات%20الصين"
    : "Hello%20Ni%20Hao%20Travel,%20I%20would%20like%20to%20inquire%20about%20traveling%20to%20China";

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    if (!link.classList.contains("modal-wa-btn")) {
      link.href = `https://wa.me/8615213138900?text=${waMsg}`;
    }
  });
}

// ==========================================================================
// 8. 3-LINES DROPDOWN MENU HANDLER
// ==========================================================================
function setupHeaderDropdown() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const headerDropdownMenu = document.getElementById("headerDropdownMenu");
  const menuDropdownWrapper = document.getElementById("menuDropdownWrapper");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  if (!hamburgerBtn || !headerDropdownMenu || !menuDropdownWrapper) return;

  function toggleDropdown(e) {
    e.stopPropagation();
    const isOpen = headerDropdownMenu.classList.contains("open");
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    headerDropdownMenu.classList.add("open");
    hamburgerBtn.classList.add("active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    headerDropdownMenu.classList.remove("open");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", toggleDropdown);

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeDropdown();
    });
  });

  document.addEventListener("click", (e) => {
    if (!menuDropdownWrapper.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });
}

// ==========================================================================
// 9. CIRCULAR CLEAR HERO SLIDER
// ==========================================================================
function initCircularSlider() {
  const sliderContainer = document.getElementById("circularSlider");
  const dotsContainer = document.getElementById("sliderDots");

  if (sliderContainer && dotsContainer) {
    sliderContainer.innerHTML = heroSlidesData.map((item, idx) => `
      <div class="circle-slide ${idx === currentSlideIndex ? 'active' : ''}"
        style="background-image: url('${item.image}');"
        data-region="${item.nameAr}"></div>
    `).join("");

    dotsContainer.innerHTML = heroSlidesData.map((item, idx) => `
      <button class="dot ${idx === currentSlideIndex ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1} - ${item.nameEn}"></button>
    `).join("");
  }

  const slides = document.querySelectorAll(".circle-slide");
  const dots = document.querySelectorAll("#sliderDots .dot");

  if (!slides.length) return;

  function goToSlide(index) {
    slides[currentSlideIndex].classList.remove("active");
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove("active");

    currentSlideIndex = (index + slides.length) % slides.length;

    slides[currentSlideIndex].classList.add("active");
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");

    updateSliderBadge();
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      goToSlide(idx);
      resetSlideTimer();
    });
  });

  function startSlideTimer() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      goToSlide(currentSlideIndex + 1);
    }, 4500);
  }

  function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
  }

  startSlideTimer();
  updateSliderBadge();
}

function updateSliderBadge() {
  const titleEl = document.getElementById("circleSlideTitle");
  if (!titleEl) return;
  const isAr = currentLang === "ar";
  const slide = heroSlidesData[currentSlideIndex];
  if (slide) {
    titleEl.textContent = isAr ? slide.nameAr : slide.nameEn;
  }
}

// ==========================================================================
// 10. MAIN CARD RENDERING: SINGLE IMAGE + CITY NAME + SUBTITLE + SHORT DESC
// ==========================================================================
function renderDestinations() {
  const grid = document.getElementById("destinationsGrid");
  if (!grid) return;

  const isAr = currentLang === "ar";
  const btnText = translations[currentLang].cardDetailsBtn;

  // Remove any inline override — CSS handles the grid columns
  grid.style.gridTemplateColumns = "";

  grid.innerHTML = destinationsData.map((item) => {
    const cardName = item.nameEn;                              // دائماً بالإنجليزي في البطاقة
    const subtitle = isAr ? item.subtitleAr : item.subtitleEn;
    const mainImg = item.image || (item.images && item.images[0]);

    return `
      <article class="destination-card" data-id="${item.id}" onclick="openDestinationModal('${item.id}')" tabindex="0" role="button" aria-label="${cardName}">
        <!-- Single clear image -->
        <div class="card-img-wrap">
          <img src="${mainImg}" alt="${cardName}" class="card-img" loading="lazy">
        </div>

        <!-- Card body: name → subtitle → action (desc only in modal) -->
        <div class="card-content">
          <div>
            <h3 class="card-title">${cardName}</h3>
            <span class="card-subtitle">${subtitle}</span>
          </div>
          <div class="card-action">
            <span>${btnText}</span>
            <i class="fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFooterDestinations() {
  const list = document.getElementById("footerDestinationsList");
  if (!list) return;

  const isAr = currentLang === "ar";
  list.innerHTML = destinationsData.map((item) => {
    const name = isAr ? item.nameAr : item.nameEn;
    return `<li><a href="javascript:void(0)" onclick="openDestinationModal('${item.id}')">${name}</a></li>`;
  }).join("");
}

// ==========================================================================
// 11. INTERACTIVE DESTINATION MODAL
// Shows all remaining details: photo gallery slideshow, hotels, activities & transfers
// ==========================================================================
function changeModalSlide(step) {
  const dest = destinationsData.find(d => d.id === currentModalDestId);
  if (!dest || !dest.images) return;
  const total = dest.images.length;
  currentModalSlideIdx = (currentModalSlideIdx + step + total) % total;
  updateModalSlide();
}

function setModalSlide(idx) {
  currentModalSlideIdx = idx;
  updateModalSlide();
}

function updateModalSlide() {
  const modal = document.getElementById("destinationModal");
  if (!modal) return;
  const slides = modal.querySelectorAll(".modal-slide");
  const dots = modal.querySelectorAll(".modal-dot");
  const counter = modal.querySelector(".modal-photo-idx");

  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === currentModalSlideIdx);
  });
  dots.forEach((d, idx) => {
    d.classList.toggle("active", idx === currentModalSlideIdx);
  });
  if (counter) {
    counter.textContent = `${currentModalSlideIdx + 1} / ${slides.length}`;
  }
}

function resetModalScroll() {
  const modal = document.getElementById("destinationModal");
  if (!modal) return;
  const modalDialog = modal.querySelector(".modal-dialog");
  const modalContent = document.getElementById("modalContent");

  if (modalDialog) {
    if (typeof modalDialog.scrollTo === "function") {
      modalDialog.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    modalDialog.scrollTop = 0;
  }
  if (modalContent) {
    if (typeof modalContent.scrollTo === "function") {
      modalContent.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    modalContent.scrollTop = 0;
  }
  if (typeof modal.scrollTo === "function") {
    modal.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  modal.scrollTop = 0;
}

function openDestinationModal(destinationId) {
  const destination = destinationsData.find(d => d.id === destinationId);
  if (!destination) return;

  currentModalDestId = destinationId;
  currentModalSlideIdx = 0;

  // Reset scroll before injecting new modal content
  resetModalScroll();

  const modal = document.getElementById("destinationModal");
  const modalContent = document.getElementById("modalContent");
  const isAr = currentLang === "ar";

  const name = isAr ? destination.nameAr : destination.nameEn;
  const subtitle = isAr ? destination.subtitleAr : destination.subtitleEn;
  const fullDesc = isAr ? destination.fullDescAr : destination.fullDescEn;
  const duration = isAr ? destination.durationAr : destination.durationEn;
  const hotelSummary = isAr ? destination.hotelAr : destination.hotelEn;
  const paidActivities = isAr ? destination.paidActivitiesAr : destination.paidActivitiesEn;
  const freeActivities = isAr ? destination.freeActivitiesAr : destination.freeActivitiesEn;
  const transfer = isAr ? destination.transferAr : destination.transferEn;
  const images = destination.images && destination.images.length ? destination.images : [destination.image];
  const hotelsList = destination.hotels || [];

  const waBtnText = translations[currentLang].modalInquireWa;
  const closeBtnText = translations[currentLang].modalCloseText;
  const paidHeading = isAr ? "" : " ";
  const freeHeading = isAr ? " " : "";
  const hotelHeading = isAr ? "الفنادق المقترحة للإقامة:" : "Suggested Hotel Residences:";
  const durationHeading = isAr ? " المدة" : "Duration";
  const transferHeading = isAr ? "" : "";
  const inclusionsTitle = isAr ? "مميزات البرنامج الشاملة (رحلة ني هاو الفاخرة):" : "Comprehensive Ni Hao Tour Inclusions:";

  const waEncodedMsg = isAr
    ? encodeURIComponent(`مرحباً ني هاو ترافيل، أود الاستفسار وحجز برنامج رحلة إلى ${name}`)
    : encodeURIComponent(`Hello Ni Hao Travel, I would like to inquire about booking the ${name} tour package`);

  modalContent.innerHTML = `
    <!-- Modal Hero with Smooth Slideshow of All City Images -->
    <div class="modal-hero">
      <div class="modal-slider-container">
        ${images.map((imgUrl, imgIdx) => `
          <div class="modal-slide ${imgIdx === currentModalSlideIdx ? 'active' : ''}" style="--bg-image: url('${imgUrl}');">
            <img src="${imgUrl}" alt="${name} - صورة ${imgIdx + 1}">
          </div>
        `).join("")}
      </div>

      <!-- Photo Counter Badge -->
      <div class="modal-photo-badge">
        <i class="fa-solid fa-camera"></i>
        <span class="modal-photo-idx">${currentModalSlideIdx + 1} / ${images.length}</span>
      </div>

      <!-- Navigation Arrows -->
      <button class="modal-slider-btn prev-btn" onclick="changeModalSlide(-1)" aria-label="${isAr ? 'السابق' : 'Previous'}">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="modal-slider-btn next-btn" onclick="changeModalSlide(1)" aria-label="${isAr ? 'التالي' : 'Next'}">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <!-- Dots Indicators -->
      <div class="modal-slider-dots">
        ${images.map((_, imgIdx) => `
          <button class="modal-dot ${imgIdx === currentModalSlideIdx ? 'active' : ''}" onclick="setModalSlide(${imgIdx})" aria-label="صورة ${imgIdx + 1}"></button>
        `).join("")}
      </div>

      <div class="modal-hero-gradient"></div>
      <div class="modal-hero-title-box">
        <h2 class="modal-hero-title">${name}</h2>
        <p class="modal-hero-subtitle">${subtitle}</p>
      </div>
    </div>

    <div class="modal-body">
      <!-- Introductory Overview -->
      <div class="modal-overview-box">
        <p class="modal-desc-text">${fullDesc}</p>
      </div>

      <!-- Quick Info Bar: Duration Centered -->
      <div class="modal-duration-center">
        <div class="meta-card meta-duration">
          <div class="meta-icon"><i class="fa-regular fa-clock"></i></div>
          <div class="meta-info">
            <span class="meta-label">${durationHeading}</span>
            <strong class="meta-value">${duration}</strong>
          </div>
        </div>
      </div>

      <!-- Dedicated Hotels Section from cities.json -->
      ${hotelsList.length ? `
        <div class="modal-activities-section">
          <div class="modal-section-badge-header">
            <span class="activity-type-badge hotel-badge" style="background: rgba(14, 165, 233, 0.1); color: #0284C7; border: 1px solid rgba(14, 165, 233, 0.25);">
              <i class="fa-solid fa-hotel"></i>
              ${isAr ? "فنادق الإقامة المقترحة" : "Suggested Hotels"}
            </span>
          </div>
          <div class="activities-list">
            ${hotelsList.map(h => {
    const hName = typeof h === "string" ? h : h.name;
    const hRating = h.rating ? (isAr ? `★ تصنيف: ${h.rating}` : `★ Rating: ${h.ratingEn || h.rating}`) : "";
    const hType = h.type ? (isAr ? `نظام: ${h.type}` : `Type: ${h.typeEn || h.type}`) : "";
    const subDetails = [hRating, hType].filter(Boolean).join(" • ");

    return `
                <div class="activity-item" style="border-left: 3px solid #0284C7; border-right: ${isAr ? '3px solid #0284C7' : '1px solid var(--border-light)'};">
                  <i class="fa-solid fa-hotel" style="color: #0284C7;"></i>
                  <div style="display: flex; flex-direction: column; gap: 4px;">
                    <strong class="activity-item-text" style="font-weight: 700; color: var(--text-dark);">${hName}</strong>
                    ${subDetails ? `<span style="font-size: 0.82rem; color: #0284C7; font-weight: 600;">${subDetails}</span>` : ""}
                  </div>
                </div>
              `;
  }).join("")}
          </div>
        </div>
      ` : ""}

      <!-- Paid Activities Section from cities.json -->
      <div class="modal-activities-section">
        <div class="modal-section-badge-header">
          <span class="activity-type-badge paid-badge">
            <i class="fa-solid fa-ticket"></i>
            ${isAr ? "المعالم و الأنشطة المدفوعة" : "Paid Landmark & Activites"}
          </span>
          <h3 class="modal-section-title">
            <span>${paidHeading}</span>
          </h3>
        </div>
        <div class="activities-list">
          ${paidActivities.map(act => `
            <div class="activity-item activity-paid">
              <i class="fa-solid fa-circle-check"></i>
              <span class="activity-item-text">${act}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Free / Leisure Activities Section from cities.json -->
      <div class="modal-activities-section">
        <div class="modal-section-badge-header">
          <span class="activity-type-badge free-badge">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            ${isAr ? "المعالم والأنشطة الحرة والاستكشافية" : "Free & Leisure Sightseeing Highlights"}
          </span>
          <h3 class="modal-section-title">
            <span>${freeHeading}</span>
          </h3>
        </div>
        <div class="activities-list">
          ${freeActivities.map(act => `
            <div class="activity-item activity-free">
              <i class="fa-solid fa-location-dot"></i>
              <span class="activity-item-text">${act}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <!-- Overall Trip Features Banner -->
      <div class="modal-inclusions-bar">
        <span class="inclusions-label">
          <i class="fa-solid fa-shield-halved"></i>
          ${inclusionsTitle}
        </span>
        <div class="inclusions-pills">
          <span class="inc-pill"><i class="fa-solid fa-car"></i> ${isAr ? "سائق بسيارة خاصة طوال الرحلة" : "Private Car & Driver Throughout"}</span>
          <span class="inc-pill"><i class="fa-solid fa-handshake"></i> ${isAr ? "استقبال وتوديع من المطار" : "Airport Meet & Greet"}</span>
          <span class="inc-pill"><i class="fa-solid fa-user-tie"></i> ${isAr ? "مرشد سياحي عربي " : "Arabic Tour Guide"}</span>
          <span class="inc-pill"><i class="fa-solid fa-plane"></i> ${isAr ? "تذاكر الطيران الداخلي والقطارات" : "Domestic Flights & Bullet Trains"}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="modal-actions">
        <a href="https://wa.me/8615213138900?text=${waEncodedMsg}" 
           target="_blank" 
           class="btn btn-primary modal-wa-btn">
          <i class="fa-brands fa-whatsapp"></i>
          <span>${waBtnText}</span>
        </a>
        <button class="btn btn-outline" onclick="closeDestinationModal()">
          <span>${closeBtnText}</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Ensure modal scroll starts strictly at the top
  resetModalScroll();
  requestAnimationFrame(() => {
    resetModalScroll();
  });
}

function closeDestinationModal() {
  const modal = document.getElementById("destinationModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    // Reset scroll position immediately upon closing in any way
    resetModalScroll();
  }
}

function setupModalEvents() {
  const modal = document.getElementById("destinationModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const backdrop = document.getElementById("modalBackdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeDestinationModal);
  if (backdrop) backdrop.addEventListener("click", closeDestinationModal);

  document.addEventListener("keydown", (e) => {
    if (!modal || !modal.classList.contains("open")) return;
    if (e.key === "Escape") {
      closeDestinationModal();
    } else if (e.key === "ArrowLeft") {
      changeModalSlide(currentLang === "ar" ? 1 : -1);
    } else if (e.key === "ArrowRight") {
      changeModalSlide(currentLang === "ar" ? -1 : 1);
    }
  });
}

// Backwards-compatible / Global exports
window.openDestinationModal = openDestinationModal;
window.closeDestinationModal = closeDestinationModal;
window.changeModalSlide = changeModalSlide;
window.setModalSlide = setModalSlide;
window.changeCardSlide = function () { };
window.setCardSlide = function () { };

// ==========================================================================
// 12. SCROLL & ACTIVE LINK EFFECTS
// ==========================================================================
function setupScrollEffects() {
  const header = document.getElementById("siteHeader");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    let current = "";
    document.querySelectorAll("section[id]").forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    dropdownItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
