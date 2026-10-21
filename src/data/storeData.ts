import { ProductItem, JewelryItem, ServiceItem, ReviewItem } from '../types';

export const STORE_INFO = {
  name: "Bridal Zone",
  tagline: "Patna's Most Trusted Bridal, Rental & Designer Boutique Since 1995",
  shortDesc: "Budget-Friendly Bridal Lehengas, Affordable Rental Options, Bespoke Custom Stitching & Artificial Bridal Jewelry Sets in Patna, Bihar.",
  establishedYear: 1995,
  yearsInBusiness: 31,
  address: "3rd Floor, White House Apartment, Flat No. 302B, Sri Niwas Path, Bandar Bagicha, near ISKCON Temple, Dak Bunglow Road, Patna, Bihar 800001",
  landmark: "Near ISKCON Temple, Bandar Bagicha, Dak Bunglow Road",
  city: "Patna, Bihar",
  phoneNumbers: [
    { label: "Primary Order & WhatsApp", number: "+91 93086 30422", raw: "919308630422" },
    { label: "Bridal Consultation & Trials", number: "+91 93418 44017", raw: "919341844017" },
    { label: "Rental Desk & Jewelry", number: "+91 80847 72001", raw: "918084772001" },
  ],
  whatsappNumber: "919308630422",
  openingHours: "Monday – Sunday: 11:00 AM – 8:00 PM",
  ratings: {
    justdial: { score: 4.0, count: 332 },
    google: { score: 4.2, count: 215 },
    happyBrides: "18,000+",
  },
  instagramHandle: "@bridalzone_",
  instagramUrl: "https://www.instagram.com/bridalzone_/",
  facebookUrl: "https://www.facebook.com/onestopshopforwedding/",
  justdialUrl: "https://www.justdial.com/Patna/Bridal-Zone-Near-Fab-India-Dak-Bunglow-Road/0612PX612-X612-110115131749-I9Z2DC_BZDET",
  googleMapsUrl: "https://maps.google.com/?q=Bridal+Zone+White+House+Apartment+Bandar+Bagicha+Patna+Bihar"
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "bz-leh-01",
    name: "Royal Crimson Zardozi Velvet Bridal Lehenga",
    category: "bridal-lehenga",
    occasion: "Wedding Day / Varmala",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    description: "Handcrafted micro-velvet bridal lehenga in signature deep crimson red, embellished with rich dabka, nakshi, cutdana, and golden zardozi embroidery with dual dupatta.",
    buyPrice: 38500,
    rentalPrice: 2499,
    rentalSecurityDeposit: 3000,
    rentalDurationDays: 3,
    fabric: "Pure Micro Velvet & Silk Organza",
    workType: "Handcrafted Zardozi, Sequins & Dabka",
    color: "Deep Crimson Red",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Most Popular",
    rating: 4.9,
    reviewCount: 48
  },
  {
    id: "bz-leh-02",
    name: "Maharani Heritage Maroon Heavy Kalidar Lehenga",
    category: "bridal-lehenga",
    occasion: "Bihari & North Indian Wedding",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    description: "Traditional 24-kali flared heritage maroon lehenga featuring intricate peacock and floral motifs with heavy bordered cancan for majestic bridal volume.",
    buyPrice: 42000,
    rentalPrice: 2999,
    rentalSecurityDeposit: 3500,
    rentalDurationDays: 3,
    fabric: "Raw Silk & Soft Net Dupatta",
    workType: "Antique Gold Tilla & Pitta Embroidery",
    color: "Heritage Maroon",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Store Bestseller",
    rating: 5.0,
    reviewCount: 62
  },
  {
    id: "bz-rent-01",
    name: "Gulabi Rani Silk Sangeet Flared Lehenga (Budget Rental)",
    category: "rental-special",
    occasion: "Sangeet / Engagement / Mehendi",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    description: "Special budget-friendly rental edition. Vibrantly flared hot pink silk lehenga with mirror-work accents and designer tassels. Super lightweight & dance-friendly.",
    buyPrice: 12500,
    rentalPrice: 699,
    rentalSecurityDeposit: 1000,
    rentalDurationDays: 3,
    fabric: "Art Silk & Georgette Dupatta",
    workType: "Foil Mirror & Resham Threadwork",
    color: "Rani Pink & Gold",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: false,
    badge: "Rental ₹699 Special",
    rating: 4.8,
    reviewCount: 84
  },
  {
    id: "bz-rent-02",
    name: "Emerald Green Mehendi Organza Designer Lehenga (Budget Rental)",
    category: "rental-special",
    occasion: "Mehendi Ceremony / Haldi Night",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    description: "Stunning forest green tiered skirt with delicate gota patti borders and embellished sweetheart blouse. Rent for a fraction of retail cost in Patna.",
    buyPrice: 9800,
    rentalPrice: 499,
    rentalSecurityDeposit: 800,
    rentalDurationDays: 3,
    fabric: "Pure Tissue Organza",
    workType: "Gota Patti & Cut-work Hemline",
    color: "Emerald Green",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: false,
    badge: "Budget Super Hit",
    rating: 4.7,
    reviewCount: 53
  },
  {
    id: "bz-rent-03",
    name: "Pastel Lavender Floral Sequin Party Lehenga (Rental)",
    category: "rental-special",
    occasion: "Cocktail / Bridesmaid / Engagement",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
    description: "Modern pastel aesthetics tailored for today's brides and bridesmaids. Loaded with shimmering lilac cut-glass sequins and sleek butterfly sleeve blouse.",
    buyPrice: 16000,
    rentalPrice: 899,
    rentalSecurityDeposit: 1200,
    rentalDurationDays: 3,
    fabric: "Italian Net & Satin Lining",
    workType: "Micro Sequins & 3D Floral Applique",
    color: "Pastel Lilac / Lavender",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: false,
    badge: "Under ₹999 Rent",
    rating: 4.9,
    reviewCount: 39
  },
  {
    id: "bz-gown-01",
    name: "Celestial Rose-Gold Reception Trail Gown",
    category: "reception-gown",
    occasion: "Grand Reception / Red Carpet",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80",
    description: "Full flared ballroom gown featuring a 1.5 meter dramatic sweep train, hand-encrusted crystal stones, structured corset bodice, and detachable shoulder drape.",
    buyPrice: 32000,
    rentalPrice: 1899,
    rentalSecurityDeposit: 2500,
    rentalDurationDays: 3,
    fabric: "Shimmer Georgette & Tulle",
    workType: "Swarovski Crystals, Beads & Cutdana",
    color: "Rose Gold & Champagne",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Grand Trail",
    rating: 5.0,
    reviewCount: 31
  },
  {
    id: "bz-gown-02",
    name: "Midnight Navy Velvet Off-Shoulder Gown",
    category: "reception-gown",
    occasion: "Reception & Cocktail Night",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1000&q=80",
    description: "Ultra-flattering off-shoulder architectural gown in royal midnight blue velvet with star-dust silver embroidery along the sweetheart neckline.",
    buyPrice: 24500,
    rentalPrice: 1499,
    rentalSecurityDeposit: 2000,
    rentalDurationDays: 3,
    fabric: "Micro Velvet",
    workType: "Silver Zari & Metallic Sequins",
    color: "Midnight Navy Blue",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Reception Hit",
    rating: 4.8,
    reviewCount: 27
  },
  {
    id: "bz-saree-01",
    name: "Authentic Katan Silk Bridal Banarasi Saree",
    category: "saree",
    occasion: "Wedding Morning / Mandap / Vidaai",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    description: "Woven in genuine pure Katan silk with real gold zari kadhwa boota across the body and a majestic meenakari pallu. Complete with unstitched matching blouse fabric.",
    buyPrice: 18500,
    rentalPrice: 1199,
    rentalSecurityDeposit: 1500,
    rentalDurationDays: 3,
    fabric: "Pure Katan Banarasi Silk",
    workType: "Handloom Kadhwa Zari Weave",
    color: "Sindoor Red & Antique Gold",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Pure Silk",
    rating: 4.9,
    reviewCount: 44
  },
  {
    id: "bz-saree-02",
    name: "Pre-Draped Mustard Haldi Ready-to-Wear Saree",
    category: "saree",
    occasion: "Haldi & Chhat Puja Rituals",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    description: "Instant 30-second wear pre-pleated drape with designer mirror-embroidered belt and contemporary ruffled pallu. Rent or buy ready to wear.",
    buyPrice: 8500,
    rentalPrice: 599,
    rentalSecurityDeposit: 800,
    rentalDurationDays: 3,
    fabric: "Crushed Crepe & Organza",
    workType: "Mirror Belt & Ruffle Edge",
    color: "Sunshine Haldi Yellow",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Rental ₹599",
    rating: 4.8,
    reviewCount: 36
  },
  {
    id: "bz-custom-01",
    name: "Customized Designer Zardozi Sharara Suit Set",
    category: "custom-suit",
    occasion: "Nikah, Sangeet & Festive Troussseau",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    description: "Stitched to your exact body measurements by our master tailors with 30+ years of boutique expertise. Featuring heavily embroidered kurta with flared georgette sharara.",
    buyPrice: 14500,
    rentalPrice: 899,
    rentalSecurityDeposit: 1000,
    rentalDurationDays: 3,
    fabric: "Pure Georgette & Santoon Lining",
    workType: "Zardozi, Mukaish & Pearls",
    color: "Blush Peach & Gold",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Custom Tailoring",
    rating: 5.0,
    reviewCount: 52
  },
  {
    id: "bz-custom-02",
    name: "Bespoke Royal Anarkali with Gota Kinari Flare",
    category: "custom-suit",
    occasion: "Engagement / Festive Puja",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    description: "Customized floor-length 32-kali Anarkali gown custom stitched with pads, lining, personalized neckline, and hand-latkan tassels.",
    buyPrice: 11900,
    rentalPrice: 799,
    rentalSecurityDeposit: 1000,
    rentalDurationDays: 3,
    fabric: "Chanderi Silk & Organza Dupatta",
    workType: "Gota Patti & Resham Work",
    color: "Royal Teal & Gold",
    availableForRent: true,
    availableForBuy: true,
    canBeCustomized: true,
    badge: "Tailor Stitched",
    rating: 4.8,
    reviewCount: 29
  }
];

export const JEWELRY_COLLECTION: JewelryItem[] = [
  {
    id: "bz-jwl-01",
    name: "Full Maharani Kundan & Pearl Complete Bridal Set",
    type: "full-bridal-combo",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    rentalPrice: 999,
    buyPrice: 8500,
    piecesIncluded: [
      "Heavy Choker Necklace",
      "Long Rani Haar",
      "Pair of Jhumkas with Kan-Chain",
      "Maang Tikka & Matha Patti",
      "Dual Haathphool (Hand chains)",
      "Traditional Bridal Nath (Nose Ring)"
    ],
    description: "Complete 7-piece bridal artificial jewelry ensemble with micro gold plating, hand-set kundan crystals, and emerald drop pearls. Sanitized & fitted before pickup.",
    finish: "24K Gold Micro Plating with Meenakari Reverse"
  },
  {
    id: "bz-jwl-02",
    name: "Imperial Polki Choker with Emerald Droplets",
    type: "polki-set",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    rentalPrice: 699,
    buyPrice: 4800,
    piecesIncluded: [
      "Royal Polki Choker",
      "Matching Oversized Chandbalis",
      "Matching Maang Tikka"
    ],
    description: "Sabyasachi-inspired open polki glass stones paired with rich Russian emerald green hanging beads. Light on neck and photogenic under stage lighting.",
    finish: "Antique Victorian Matte Gold"
  },
  {
    id: "bz-jwl-03",
    name: "Traditional South & North Temple Jewelry Set",
    type: "temple-set",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=80",
    rentalPrice: 599,
    buyPrice: 4200,
    piecesIncluded: [
      "Laxmi Devi Coin Haar",
      "Antique Jhumkas",
      "Temple Waist Belt (Kamarbandh)"
    ],
    description: "Intricately carved temple figurines with matte gold brass casting and ruby-spinel stones. Perfect for Banarasi sarees and wedding ceremonies.",
    finish: "Matte Antique Temple Gold"
  },
  {
    id: "bz-jwl-04",
    name: "Bridal Red Velvet Chooda & Floral Kaleere Combo",
    type: "chooda",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    rentalPrice: 499,
    buyPrice: 2800,
    piecesIncluded: [
      "Complete 54-Bangle Bridal Chooda Set",
      "Matching Handcrafted Dome Kaleere pair"
    ],
    description: "Customized according to wrist size (2.4, 2.6, 2.8) with non-tarnish stones and hanging golden jhumki kaleeras.",
    finish: "Acrylic & Brass with Kundan Bangles"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-rental",
    title: "Budget Bridal & Party Rental",
    subtitle: "Look Million-Dollar on your Wedding Day without breaking the bank",
    priceNote: "Rentals starting ₹499 to ₹2,999",
    description: "Bridal Zone is Patna's pioneering rental boutique. Why spend ₹50,000 to ₹1,00,000 on an outfit worn once? Rent designer bridal lehengas, reception gowns, and sangeet outfits at 10-20% of retail price with hassle-free 3 to 5 days return tenure.",
    features: [
      "Outfits starting at ₹499 to ₹2,999",
      "Complimentary dry-cleaned & sanitized outfits",
      "Free custom fitting & alterations to your size before pickup",
      "Flexible pickup 1-2 days before event date",
      "Refundable security deposit policy with instant return",
      "Complete styling accessories bundle available"
    ],
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    iconName: "Tag"
  },
  {
    id: "srv-bridal-collection",
    title: "Designer Bridal & Trousseau Purchase",
    subtitle: "30+ years of curating the finest bridal wear in Patna",
    priceNote: "Purchase starting ₹7,500 to ₹65,000+",
    description: "Direct boutique curation of the latest Chandni Chowk, Surat, and Kolkata bridal master-pieces. Heavy cancan, dual dupattas, genuine zari work, and custom color selections.",
    features: [
      "Handcrafted Velvet, Raw Silk, Organza & Banarasi Lehengas",
      "Personalized trial session in spacious dressing rooms",
      "Custom color dying and matching groom stole/pagdi",
      "Free alteration guarantee until your wedding day",
      "Bridal trousseau packaging support"
    ],
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    iconName: "Sparkles"
  },
  {
    id: "srv-custom-stitching",
    title: "Customized Boutique Stitching & Fitting",
    subtitle: "Master Tailoring, Handwork Zardozi & Blouse Crafting",
    priceNote: "Stitching starting ₹699 | Express 48h Available",
    description: "Our in-house master tailors have been crafting dream fits since 1995. Bring your fabric or choose from our boutique swatches. From celebrity blouse cuts to heavy lehenga cancan installations.",
    features: [
      "Custom designer blouse cuts (Deep U, Sabya V-neck, sweetheart, backless with latkans)",
      "Padded lining & high quality cups installation",
      "Heavy cancan netting attachment for 360-degree lehenga flare",
      "Hand-embroidered zardozi name initials & wedding hashtags",
      "Express 48-hour delivery option for urgent wedding dates"
    ],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    iconName: "Scissors"
  },
  {
    id: "srv-jewelry",
    title: "Artificial Bridal Jewelry Sets (Rent & Buy)",
    subtitle: "High-grade Kundan, Polki, Temple & Victorian Sets",
    priceNote: "Jewelry Rent from ₹499 | Purchase from ₹1,800",
    description: "Complete your bridal look under one roof. Our jewelry matches every outfit palette, from traditional red to modern pastel peach and lavender.",
    features: [
      "Complete 6 to 8-piece full bridal ensembles",
      "Mathapatti, Sheeshphool, Kundan Chokers & Rani Haars",
      "Weight-balanced designs for comfortable all-night wear",
      "Sanitized and stored in velvet presentation boxes"
    ],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    iconName: "Crown"
  },
  {
    id: "srv-styling-coordination",
    title: "Makeup & Photography Coordination",
    subtitle: "On-site styling support & Trusted Vendor Network in Patna",
    priceNote: "Vendor Consultation & Shoot Coordination",
    description: "Planning your wedding can be overwhelming. Bridal Zone connects you directly with top Patna bridal makeup artists (MUAs) and wedding photographers, ensuring a coordinated look that shines on camera.",
    features: [
      "Outfits color-coordinated with your wedding stage & lighting",
      "Direct referrals to verified Patna MUAs and candid photographers",
      "Free in-store pre-wedding look trial & social media showcase reels",
      "Personal bridal stylist guidance on dupatta draping styles"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    iconName: "Camera"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-01",
    name: "Sneha Kumari Singh",
    event: "Wedding Day (Patna)",
    location: "Kankarbagh, Patna",
    date: "November 2024",
    rating: 5,
    comment: "I rented my wedding lehenga and bridal jewelry combo from Bridal Zone. Everyone thought I bought it from Delhi for ₹60,000! In reality, I got the whole bridal set on rent under ₹3,500. The fitting was done so perfectly by their master ji. Best boutique in Patna near ISKCON temple!",
    outfitRentedOrBought: "Royal Crimson Zardozi Lehenga + Kundan Set",
    source: "Justdial",
    brideImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-02",
    name: "Pooja Verma",
    event: "Engagement Ceremony",
    location: "Boring Road, Patna",
    date: "January 2025",
    rating: 5,
    comment: "Bridal Zone is a lifesaver. My sister and I rented two party lehengas for just ₹799 each. The quality of fabric and cleanliness was top notch. Located nicely in White House Apartment Bandar Bagicha.",
    outfitRentedOrBought: "Pastel Lavender Sequin Lehenga",
    source: "Google",
    brideImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-03",
    name: "Anjali & Rahul",
    event: "Sangeet & Reception",
    location: "Bailey Road, Patna",
    date: "December 2024",
    rating: 4.8,
    comment: "Established since 1995, my mother also got her wedding outfits altered here 25 years ago! Now I bought my reception trail gown here. The staff is polite, patient with trials, and the stitching service is unbeatable.",
    outfitRentedOrBought: "Celestial Rose-Gold Reception Gown",
    source: "Instagram",
    brideImage: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-04",
    name: "Ritu Mishra",
    event: "Mehendi Function",
    location: "Danapur, Patna",
    date: "February 2025",
    rating: 5,
    comment: "Super affordable rental options! Found a gorgeous emerald green outfit for ₹499 with security deposit returned within 5 minutes of returning. Will definitely recommend all Patna brides to visit once before buying expensive outfits.",
    outfitRentedOrBought: "Emerald Green Organza Lehenga",
    source: "Justdial",
    brideImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    q: "How does the rental service work at Bridal Zone Patna?",
    a: "It's simple: 1) Visit our store at White House Apartment, Bandar Bagicha or browse online. 2) Pick your outfit and get free body measurement fitting. 3) Book your event date by paying a small advance. 4) Collect the dry-cleaned outfit 1-2 days before your wedding/function. 5) Return it after your function and get your security deposit refunded immediately!"
  },
  {
    q: "What is the price range for bridal lehengas on rent?",
    a: "Our party and bridesmaid lehengas start at an unbeatable ₹499 – ₹999. Heavy designer bridal lehengas range from ₹1,499 to ₹3,500 for a 3-day rental period."
  },
  {
    q: "Do you provide custom blouse and lehenga stitching?",
    a: "Yes! Bridal Zone has dedicated in-house master tailors with over 30 years of experience. We provide custom cuts (deep-neck, Sabya-cut, boat-neck), cup padding, hand-zardozi detailing, and express fitting services."
  },
  {
    q: "Is artificial bridal jewelry available for rent or purchase?",
    a: "Yes, we offer both rental (starting ₹499) and purchase options for full bridal jewelry sets, Kundan chokers, Polki sets, Mathapattis, Haathphools, and Chooda sets."
  },
  {
    q: "Where is Bridal Zone located in Patna?",
    a: "We are located at 3rd Floor, White House Apartment, Flat No. 302B, Sri Niwas Path, Bandar Bagicha, near ISKCON Temple, Dak Bunglow Road, Patna, Bihar 800001. We are open all 7 days from 11:00 AM to 8:00 PM."
  },
  {
    q: "How far in advance should I book my bridal outfit?",
    a: "For peak wedding seasons (Nov–Feb & April–July in Bihar), we recommend reserving your bridal lehenga 2 to 4 weeks in advance to ensure your favorite outfit is locked for your date."
  }
];

