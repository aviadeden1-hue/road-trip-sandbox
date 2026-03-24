window.FOOD_DATA = {

  snackKit: {
    intro: "Stock up at a grocery store on Day 1 or 2 in Santa Monica (Whole Foods on 4th St or Trader Joe's on Wilshire Blvd)",
    items: [
      "Granola bars (KIND, RXBARs)",
      "Individual trail mix packets",
      "Apple sauce pouches (for the 4-year-old)",
      "String cheese (keep in cooler)",
      "Crackers and peanut butter packets",
      "Juice boxes and Capri Sun",
      "Water bottles (fill daily)",
      "Dried fruit (mango, raisins)",
      "Goldfish crackers",
      "Baby wipes (multipurpose)",
      "Napkins and paper towels",
      "Ziploc bags (various sizes)",
      "Small trash bags for the car",
      "Hand sanitizer"
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 1 — May 23 | Santa Monica, CA | Arrival day
  // ─────────────────────────────────────────────────────────────────────────
  1: {
    dinnerType: "restaurant",
    dinner: {
      name: "Water Grill Santa Monica",
      cuisine: "California Seafood",
      address: "1401 Ocean Ave, Santa Monica, CA 90401",
      websiteLink: "https://www.watergrill.com/sm",
      mapsLink: "https://www.google.com/maps/search/Water+Grill+Santa+Monica",
      signatureDish: "Daily fresh catch, Dungeness crab, oysters on the half shell, seafood towers",
      pricePerPerson: "$60-85",
      familyPrice: "$300-425 for family of 5 (incl. kids meals)",
      whyChosen: "Iconic Ocean Ave seafood destination directly across from the Pacific — the perfect first-night welcome to California. Menu changes daily based on what came off the boat. Upscale but unpretentious, with ocean views and a kids menu. A true West Coast seafood experience unavailable in Florida.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/water-grill-santa-monica",
      reserveNote: "Reserve 1-2 weeks ahead on OpenTable, especially for a party of 5"
    },
    lunch: {
      type: "packed",
      note: "Arrival day — grab a quick bite near the airport or pick up snacks from Trader Joe's on Wilshire Blvd before heading to Santa Monica"
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 2 — May 24 | Santa Monica, CA | No drive
  // ─────────────────────────────────────────────────────────────────────────
  2: {
    dinnerType: "restaurant",
    dinner: {
      name: "Pasjoli",
      cuisine: "French-California Bistro",
      address: "2732 Main St, Santa Monica, CA 90405",
      websiteLink: "https://www.pasjoli.com",
      mapsLink: "https://www.google.com/maps/search/Pasjoli+Santa+Monica",
      signatureDish: "Pressed duck for two (reserve ahead), duck confit, seasonal a la carte French bistro dishes",
      pricePerPerson: "$65-90",
      familyPrice: "$325-450 for family of 5",
      whyChosen: "James Beard Award-winning chef Dave Beran's lively neighborhood French bistro on Main St. The 2025 revamp made it more relaxed and fun while keeping the serious French cooking. Kids can enjoy classic bistro staples (steak frites, roast chicken) while parents get a genuinely memorable meal. Michelin Guide listed and on the World's 50 Best Discovery list.",
      reservationNeeded: true,
      reserveLink: "https://resy.com/cities/la/pasjoli",
      reserveNote: "Book on Resy 1-2 weeks ahead. Reserve the pressed duck tableside experience when booking if interested — it sells out."
    },
    lunch: {
      name: "Tacos Por Favor",
      cuisine: "Classic Mexican — tacos, burritos, quesadillas",
      address: "1408 Olympic Blvd, Santa Monica, CA 90404",
      mapsLink: "https://www.google.com/maps/search/Tacos+Por+Favor+Santa+Monica",
      whyChosen: "A beloved Santa Monica institution since 1999 — no-frills and legitimately delicious. Tacos run about $3 each. Great for the kids and a true local favorite, not a tourist trap.",
      costNote: "~$3/taco, ~$10-15/person. Cards accepted.",
      reservationNeeded: false
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 3 — May 25 | Santa Barbara, CA | 2-hr drive from Santa Monica
  // GROCERY NIGHT
  // ─────────────────────────────────────────────────────────────────────────
  3: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      name: "La Super-Rica Taqueria",
      cuisine: "Authentic Mexican — handmade tortillas, regional dishes",
      address: "622 N Milpas St, Santa Barbara, CA 93103",
      mapsLink: "https://www.google.com/maps/search/La+Super-Rica+Taqueria+Santa+Barbara",
      whyChosen: "Julia Child's declared favorite taco spot — she championed it on national TV in 1985. Still a cash-only, no-frills institution with handmade tortillas and deeply authentic flavors. Worth the near-certain line. NOTE: Closed on Tuesdays.",
      costNote: "~$12-18/person. CASH ONLY — bring bills. Expect a 20-40 min wait on weekends.",
      reservationNeeded: false
    },
    groceryStore: {
      name: "Trader Joe's Santa Barbara",
      address: "222 N Milpas St, Santa Barbara, CA 93103",
      mapsLink: "https://www.google.com/maps/search/Trader+Joe%27s+222+N+Milpas+Santa+Barbara+CA",
      distance: "Steps from La Super-Rica Taqueria — grab lunch then stock up for dinner in one stop. Also ~1 mile from the State Street hotel zone.",
      noCookMeals: [
        "Rotisserie chicken + Trader Joe's pre-made potato salad or pasta salad + fresh fruit",
        "Charcuterie board: prosciutto, manchego or aged cheddar, water crackers, Castelvetrano olives, grapes",
        "Smoked salmon + cream cheese + everything bagels + a bagged salad kit"
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // DAY 4 — May 26 | Cambria, CA | SLO + Hearst Castle + Elephant Seals
  // ─────────────────────────────────────────────────────────────────────────
  4: {
    dinnerType: "restaurant",
    dinner: {
      name: "Linn's Restaurant",
      cuisine: "American comfort — famous olallieberry pie",
      address: "2277 Main St, Cambria, CA 93428",
      websiteLink: "https://www.linnsfruitbin.com",
      mapsLink: "https://www.google.com/maps/search/Linn's+Restaurant+Cambria+CA",
      signatureDish: "Chicken pot pie, tri-tip, and the legendary olallieberry pie (a Central Coast original)",
      pricePerPerson: "$20-35",
      familyPrice: "$100-175 for family of 5",
      whyChosen: "A Cambria institution since 1989. The olallieberry pie is legendary — the berry only grows on the Central Coast. Comfort food in a cozy setting. Very family-friendly.",
      reservationNeeded: false,
      reserveNote: "Walk-in friendly, but busy summer weekends. Arrive before 6 PM."
    },
    lunch: {
      name: "Firestone Grill — San Luis Obispo",
      cuisine: "BBQ — tri-tip sandwiches, ribs, burgers",
      address: "1001 Higuera St, San Luis Obispo, CA 93401",
      mapsLink: "https://www.google.com/maps/search/Firestone+Grill+San+Luis+Obispo",
      whyChosen: "An SLO institution. The tri-tip sandwich is the Central Coast's signature dish and Firestone does it perfectly. Huge portions, great prices, family-friendly. Right on Higuera St downtown.",
      costNote: "~$12-18/person. Cash and cards accepted.",
      reservationNeeded: false
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 5 — May 27 | Monterey, CA | Cambria → Paso Robles → Monterey
  // GROCERY NIGHT — drive day
  // ─────────────────────────────────────────────────────────────────────────
  5: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Grab pastries or a quick breakfast in Cambria before departing. Paso Robles candy shop for sweets, then snacks from the car until Monterey."
    },
    groceryStore: {
      name: "Whole Foods Market Monterey",
      address: "800 Del Monte Center, Monterey, CA 93940",
      mapsLink: "https://www.google.com/maps/search/Whole+Foods+Market+800+Del+Monte+Center+Monterey+CA",
      distance: "About 1.5 miles from Cannery Row / hotel zone",
      noCookMeals: [
        "Rotisserie chicken + prepared sides from the hot bar + fresh fruit",
        "Whole Foods sushi platter (the deli counter has solid sushi) + miso soup + edamame",
        "Smoked salmon + cream cheese + bagels + a pre-made salad from the deli"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 6 — May 28 | Monterey, CA | Day trips only
  // RESTAURANT NIGHT — the iconic Monterey seafood experience
  // ─────────────────────────────────────────────────────────────────────────
  6: {
    dinnerType: "restaurant",
    dinner: {
      name: "Old Fisherman's Grotto",
      cuisine: "California Seafood — clam chowder, Dungeness crab, cioppino",
      address: "39 Fisherman's Wharf, Monterey, CA 93940",
      websiteLink: "https://www.oldfishermansgrotto.com",
      mapsLink: "https://www.google.com/maps/search/Old+Fisherman%27s+Grotto+Monterey",
      signatureDish: "Award-winning Monterey-style clam chowder in a garlic bread bowl, Dungeness crab, macadamia-crusted halibut, cioppino",
      pricePerPerson: "$35-55",
      familyPrice: "$175-275 for family of 5",
      whyChosen: "A Monterey institution since 1950 on historic Old Fisherman's Wharf — winner of 'Best Chowder in Monterey' for 20+ consecutive years. Pier-side location with harbor views. The Monterey-style clam chowder in a garlic bread bowl is a regional classic the kids will love. Family-friendly, sits right on the water.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/old-fishermans-grotto",
      reserveNote: "Reserve ahead, especially for weekend evenings — request a window table for harbor views"
    },
    lunch: {
      name: "Clam Chowder Bread Bowl on the Wharf",
      cuisine: "Classic Monterey seafood street food",
      address: "Old Fisherman's Wharf, Monterey, CA 93940",
      mapsLink: "https://www.google.com/maps/search/Old+Fisherman%27s+Wharf+Monterey+CA",
      whyChosen: "This is the quintessential Monterey experience — grab a sourdough bread bowl full of creamy clam chowder from one of the wharf vendors (Crabby Jim's and Abalonetti are both solid). Walk it out to the edge of the pier and watch the sea lions. Kids go crazy for this.",
      costNote: "~$12-18/person for a chowder bowl. Multiple vendors to choose from.",
      reservationNeeded: false
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 7 — May 29 | San Francisco, CA | 2-hr drive from Monterey
  // GROCERY NIGHT — arrive in SF, settle in
  // ─────────────────────────────────────────────────────────────────────────
  7: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Pack lunch from Whole Foods Monterey before departing, or stop at a deli in Santa Cruz on the way up Highway 1."
    },
    groceryStore: {
      name: "Trader Joe's North Beach / Fisherman's Wharf",
      address: "401 Bay St, San Francisco, CA 94133",
      mapsLink: "https://www.google.com/maps/search/Trader+Joe%27s+401+Bay+St+San+Francisco+CA",
      distance: "Walking distance from Fisherman's Wharf hotels; ~0.5 miles from Pier 39",
      noCookMeals: [
        "Rotisserie chicken + Trader Joe's pre-made grain salad or couscous + fresh berries",
        "Charcuterie board: soppressata, aged cheddar, fig jam, water crackers, grapes",
        "Deli sandwiches (turkey or roast beef on sourdough) + chips + cut fruit + cookies"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 8 — May 30 | San Francisco, CA | Day trips
  // RESTAURANT NIGHT — the family-friendly SF seafood classic
  // ─────────────────────────────────────────────────────────────────────────
  8: {
    dinnerType: "restaurant",
    dinner: {
      name: "Fog Harbor Fish House",
      cuisine: "San Francisco Seafood — sustainable, bay-view dining",
      address: "Pier 39, San Francisco, CA 94133",
      websiteLink: "https://fogharbor.com",
      mapsLink: "https://www.google.com/maps/search/Fog+Harbor+Fish+House+Pier+39+San+Francisco",
      signatureDish: "Award-winning clam chowder in sourdough bowl, Dungeness crab, cioppino, Pacific salmon, house-baked sourdough",
      pricePerPerson: "$40-55",
      familyPrice: "$200-275 for family of 5 (kids menu available)",
      whyChosen: "Named Exceptional Restaurant of the Year 2024 — 100% sustainable seafood, spectacular bay views of Alcatraz and the Golden Gate from Pier 39. Kids menu, booster seats, and a lively atmosphere make this the ideal SF family dinner. House-baked sourdough arrives free at the table. Right on the water.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/r/fog-harbor-fish-house-san-francisco",
      reserveNote: "Reserve ahead for weekend evenings. Request a bay-view table."
    },
    lunch: {
      name: "Ferry Building Marketplace",
      cuisine: "SF's premier food hall — oysters, sourdough, artisan vendors, farmers market",
      address: "One Ferry Building, San Francisco, CA 94111",
      mapsLink: "https://www.google.com/maps/search/Ferry+Building+Marketplace+San+Francisco",
      whyChosen: "The beating heart of San Francisco food culture. Hit Hog Island Oyster Co. for oysters on the bay, Acme Bread Company for a fresh sourdough loaf, Blue Bottle Coffee, and Gott's Roadside for burgers the kids will love. Saturday = Farmers Market surrounding the building (100+ vendors). A quintessential SF experience.",
      costNote: "Budget $15-25/person. Mix and match vendors — no single bill.",
      reservationNeeded: false
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 9 — May 31 | San Francisco, CA | Day trips
  // RESTAURANT NIGHT — the SF foodie splurge
  // ─────────────────────────────────────────────────────────────────────────
  9: {
    dinnerType: "restaurant",
    dinner: {
      name: "Thanh Long",
      cuisine: "Vietnamese Seafood — inventor of garlic noodles, roasted Dungeness crab",
      address: "4101 Judah St, San Francisco, CA 94122",
      websiteLink: "https://www.thanhlongsf.com",
      mapsLink: "https://www.google.com/maps/search/Thanh+Long+4101+Judah+St+San+Francisco",
      signatureDish: "Whole roasted Dungeness crab, original garlic noodles (invented here in 1972), tiger prawns",
      pricePerPerson: "$55-80",
      familyPrice: "$275-400 for family of 5 (whole crab ~$88, garlic noodles ~$16)",
      whyChosen: "Thanh Long literally invented the garlic noodle — every SF garlic noodle you've ever had traces back to this Outer Sunset restaurant. 50+ years old, women-owned, still the gold standard. The roasted Dungeness crab with garlic noodles is a San Francisco bucket-list meal. Casual, welcoming to families, takes reservations.",
      reservationNeeded: true,
      reserveLink: "https://www.exploretock.com/thanhlong",
      reserveNote: "Book on Tock. Closed Mon-Tue. Reserve Wed-Sun 4:30 PM onwards. Very popular — book 1-2 weeks ahead."
    },
    lunch: {
      type: "packed",
      note: "Pack sandwiches and snacks — you're exploring SF today. Grab pastries and coffee from a local bakery near your hotel."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 10 — June 1 | Windsor, CA | 1.5-hr drive from San Francisco
  // GROCERY NIGHT — arrive in wine country, settle in
  // ─────────────────────────────────────────────────────────────────────────
  10: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Grab food before leaving SF — Trader Joe's on Bay St (401 Bay St) is steps from Fisherman's Wharf. Stock up for the drive and tonight's easy dinner."
    },
    groceryStore: {
      name: "Safeway Windsor",
      address: "9080 Brooks Rd, Windsor, CA 95492",
      mapsLink: "https://www.google.com/maps/search/Safeway+9080+Brooks+Rd+Windsor+CA",
      distance: "Near the Windsor Town Green hotel zone",
      noCookMeals: [
        "Rotisserie chicken + deli potato salad + cut watermelon — easy arrival night",
        "Charcuterie spread: salami, brie, sourdough, grapes, Dijon mustard, fig jam",
        "Deli sandwiches (turkey/roast beef) + chips + prepared salad kits + drinks"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 11 — June 2 | Windsor, CA | Wine Country — no drive
  // RESTAURANT NIGHT — wine country tapas
  // ─────────────────────────────────────────────────────────────────────────
  11: {
    dinnerType: "restaurant",
    dinner: {
      name: "Bravas Bar de Tapas",
      cuisine: "Spanish Tapas — voted top 20 tapas restaurant in the US",
      address: "420 Center St, Healdsburg, CA 95448",
      websiteLink: "https://starkrestaurants.com/stark-restaurant/bravas-bar-de-tapas/",
      mapsLink: "https://www.google.com/maps/search/Bravas+Bar+de+Tapas+420+Center+St+Healdsburg+CA",
      signatureDish: "Grilled squid, lemon pepper smoked oysters, patatas bravas, charcuterie boards, seasonal small plates",
      pricePerPerson: "$35-50 (order 4-5 tapas plates per person)",
      familyPrice: "$175-250 for family of 5 (kids can graze on bread, charcuterie, patatas bravas)",
      whyChosen: "Voted one of the top 20 tapas restaurants in the US by Travel + Leisure. The shared small-plate format is perfect for families with varied tastes — kids can pick favorites while parents explore the full menu. Located on Healdsburg's gorgeous plaza. Lively, buzzy atmosphere with excellent local wines by the glass.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/bravas-bar-de-tapas",
      reserveNote: "Reserve ahead on OpenTable, especially for weekend evenings. Back patio is dog-friendly."
    },
    lunch: {
      type: "packed",
      note: "Today is a wine country exploration day. Pack sandwiches or grab something from the hotel breakfast. Many wineries have picnic areas — bring a cheese board."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 12 — June 3 | Healdsburg, CA | Short drive from Windsor
  // RESTAURANT NIGHT — wine country farm-to-table splurge
  // ─────────────────────────────────────────────────────────────────────────
  12: {
    dinnerType: "restaurant",
    dinner: {
      name: "Valette",
      cuisine: "New American — Michelin-listed, Sonoma County farm-to-table",
      address: "344 Center St, Healdsburg, CA 95448",
      websiteLink: "https://www.valettehealdsburg.com",
      mapsLink: "https://www.google.com/maps/search/Valette+Restaurant+344+Center+St+Healdsburg+CA",
      signatureDish: "Weekly-changing tasting menu: Day Boat Scallops en Croute, Liberty Farms Duck Breast, estate-grown produce",
      pricePerPerson: "$100 (5-course tasting menu); wine pairing +$60-$95",
      familyPrice: "$500+ for family of 5 (this is the trip splurge — worth it)",
      whyChosen: "Celebrating 10 years of culinary excellence in 2025. Michelin Guide listed, sourcing produce from their own farm 100 yards from the restaurant. Chef Dustin Valette is the gold standard for Sonoma County cuisine. Kids menu available. The weekly-changing tasting menu is built entirely around what's peak-season right now. Healdsburg's best meal.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/valette",
      reserveNote: "Reserve well ahead — this is Healdsburg's most celebrated restaurant. Book 2-3 weeks minimum."
    },
    lunch: {
      name: "Journeyman Meat Co.",
      cuisine: "Old World deli & salumeria — handmade salumi, wood-fired sandwiches, charcuterie",
      address: "404 Center St, Healdsburg, CA 95448",
      mapsLink: "https://www.google.com/maps/search/Journeyman+Meat+Co+404+Center+St+Healdsburg+CA",
      whyChosen: "A Downtown Healdsburg institution — locally sourced butcher and salumeria with wood-fired sandwiches and incredible house-cured meats. Perfect for a light lunch before tonight's tasting menu dinner. Steps from the Healdsburg Plaza. Closed Tuesdays.",
      costNote: "~$15-22/person. Wed-Sun 11am-7pm, Mon 10am-5pm.",
      reservationNeeded: false
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 13 — June 4 | Myers Flat, CA | 3-hr drive to the Redwoods
  // GROCERY NIGHT — big drive day, very remote overnight
  // ⚠️ STOCK UP WARNING: Myers Flat is extremely remote. Stock up in Healdsburg
  //   before departing OR stop at Safeway in Fortuna (701 S Fortuna Blvd) if
  //   routing that way. Do NOT count on finding a full grocery store at destination.
  // ─────────────────────────────────────────────────────────────────────────
  13: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "STOCK UP before leaving Healdsburg — grab sandwiches and road snacks from Journeyman Meat Co. or Safeway Windsor (9080 Brooks Rd). The drive passes through very remote areas with limited stops."
    },
    groceryStore: {
      name: "Redwoods Market & Deli (Myers Flat) — LIMITED STOCK",
      address: "12880 Avenue of the Giants, Myers Flat, CA 95554",
      mapsLink: "https://www.google.com/maps/search/Redwoods+Market+Deli+Myers+Flat+CA",
      distance: "Located right on Avenue of the Giants in Myers Flat — the only grocery option for miles",
      noCookMeals: [
        "Rotisserie chicken or deli sandwiches from their counter + chips + drinks",
        "Pre-packaged charcuterie + crackers + cheese (limited selection — stock key items in Healdsburg)",
        "Deli grab-and-go items + fresh fruit + snacks"
      ],
      stockUpAlert: "IMPORTANT: Stock up the day before in Healdsburg or stop at Safeway Fortuna (701 S Fortuna Blvd, Fortuna, CA 95540) if routing through Fortuna on US-101. The Redwoods Market is small — treat it as emergency backup, not primary grocery stop. Hours: Mon-Sat 8am-7:30pm, Sun 8am-7pm."
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 14 — June 5 | Orick, CA | 2-hr drive along the coast
  // GROCERY NIGHT — very remote, few options
  // ⚠️ STOCK UP WARNING: Orick has almost no food services. Stock up at
  //   Safeway Crescent City (475 M St) if possible, or use what you packed.
  // ─────────────────────────────────────────────────────────────────────────
  14: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Pack a picnic lunch before leaving Myers Flat. Head into Redwood National Park — eat amid the giant trees at a pull-off on the Newton B. Drury Scenic Parkway. This is one of the most spectacular picnic spots in the world."
    },
    groceryStore: {
      name: "Stock up at Safeway Crescent City (nearest full grocery)",
      address: "475 M St, Crescent City, CA 95531",
      mapsLink: "https://www.google.com/maps/search/Safeway+475+M+St+Crescent+City+CA",
      distance: "Crescent City is ~30 min north of Orick — stop here if heading north, or rely on what you packed from Myers Flat",
      noCookMeals: [
        "Rotisserie chicken + prepared potato salad + fresh berries — simple after a day in the park",
        "Charcuterie board: salami, sharp cheddar, crackers, grapes, mustard, dried fruit",
        "Deli sandwiches + chips + coleslaw container + cookies from the bakery"
      ],
      stockUpAlert: "Orick itself has no grocery store. If driving through Crescent City, stop at Safeway (open 24 hours). Otherwise rely on items packed from Myers Flat / Redwoods Market. Plan dinners around what you can carry."
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 15 — June 6 | Crescent City, CA | Day in the park
  // RESTAURANT NIGHT — Crescent City harbor dining
  // ─────────────────────────────────────────────────────────────────────────
  15: {
    dinnerType: "restaurant",
    dinner: {
      name: "Chart Room Restaurant",
      cuisine: "Waterfront Seafood — local harbor catch, chowder, fish & chips",
      address: "130 Anchor Way, Crescent City, CA 95531",
      websiteLink: "[LINK: search \"Chart Room Restaurant Crescent City CA\"]",
      mapsLink: "https://www.google.com/maps/search/Chart+Room+Restaurant+130+Anchor+Way+Crescent+City+CA",
      signatureDish: "Award-winning clam chowder, fried fish, steamed mussels, fresh local crab when in season",
      pricePerPerson: "$20-35",
      familyPrice: "$100-175 for family of 5",
      whyChosen: "2024 Reader's Choice Gold Winner for Best Seafood, Best Fish & Chips, and Best Clam Chowder in Crescent City. Sits right on the harbor watching fishing boats come in. This is a genuine working-port fishing town — the seafood is as fresh as it gets. No pretense, just excellent local seafood.",
      reservationNeeded: false,
      reserveNote: "Casual — walk-in friendly. Hours: Wed-Sun 11am-7pm. CLOSED Monday and Tuesday."
    },
    lunch: {
      type: "packed",
      note: "Pack sandwiches from Safeway Crescent City for a Redwood National Park picnic — Fern Canyon and Lady Bird Johnson Grove are spectacular lunch spots. Bring enough for a full day in the park."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 16 — June 7 | Brookings, OR | 1-hr drive north
  // RESTAURANT NIGHT — first Oregon coast dinner
  // ─────────────────────────────────────────────────────────────────────────
  16: {
    dinnerType: "restaurant",
    dinner: {
      name: "Catalyst Seafood",
      cuisine: "Oregon Coast Seafood — locally sourced, harbor location",
      address: "16182 Lower Harbor Rd, Brookings, OR 97415",
      websiteLink: "https://catalystseafood.com",
      mapsLink: "https://www.google.com/maps/search/Catalyst+Seafood+16182+Lower+Harbor+Rd+Brookings+OR",
      signatureDish: "Clam chowder in a sourdough bowl, fish tacos, steamer clams, Dungeness crab cakes, oysters",
      pricePerPerson: "$20-36",
      familyPrice: "$100-180 for family of 5",
      whyChosen: "A family-owned harbor restaurant using only locally caught seafood from the Oregon and California coast. The best seafood option in Brookings by a wide margin — known for their clam chowder bread bowls, stellar crab cakes, and fresh oysters. Right on the Lower Harbor with a lounge feel. Your first taste of Oregon coastal seafood.",
      reservationNeeded: false,
      reserveNote: "Walk-in friendly, open daily 11am-9pm. Call ahead for large parties: (541) 813-2422"
    },
    lunch: {
      type: "packed",
      note: "Pack lunch from Safeway Crescent City this morning before the 1-hour drive north. Samuel H. Boardman State Scenic Corridor has incredible overlooks — perfect for a packed lunch with ocean views."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 17 — June 8 | Medford, OR | 3.5-hr drive from Brookings
  // GROCERY NIGHT — long drive day
  // ─────────────────────────────────────────────────────────────────────────
  17: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Pack lunch before leaving Brookings. The 3.5-hour drive inland passes through Redwood forests and the Siskiyous — stop at a roadside pullout for a scenic packed lunch."
    },
    groceryStore: {
      name: "Fred Meyer Medford (or Rogue Valley Shopping Center area)",
      address: "[PRICE: verify] — search Fred Meyer or Safeway Medford OR near your hotel",
      mapsLink: "https://www.google.com/maps/search/Fred+Meyer+Medford+Oregon",
      distance: "Multiple grocery options in Medford — it's a proper city",
      noCookMeals: [
        "Rotisserie chicken + deli potato salad + fresh Pacific Northwest berries (peak strawberry season in June)",
        "Charcuterie: prosciutto, aged cheddar, sourdough, fig jam, grapes, crackers",
        "Smoked salmon (Pacific Northwest specialty) + cream cheese + bagels + salad kit"
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 18 — June 9 | Crater Lake, OR | 1.5-hr drive from Medford
  // RESTAURANT NIGHT — the most spectacular dining room in the country
  // ⚠️ RESERVATION ALERT: Crater Lake Lodge Dining Room books up far in advance.
  //   Call as soon as you book the lodge: 541-594-2255 x3217
  // ─────────────────────────────────────────────────────────────────────────
  18: {
    dinnerType: "restaurant",
    dinner: {
      name: "Crater Lake Lodge Dining Room",
      cuisine: "Pacific Northwest — historic lodge dining with crater views",
      address: "565 Rim Dr, Crater Lake National Park, OR 97604",
      websiteLink: "https://explorecraterlake.com/dining/crater-lake-lodge-dining-room/",
      mapsLink: "https://www.google.com/maps/search/Crater+Lake+Lodge+Dining+Room+Rim+Dr+Oregon",
      signatureDish: "Pan-seared wild Pacific salmon, wild mushroom flatbread, Oregon-sourced steaks, seasonal local produce",
      pricePerPerson: "$45-60 (entrees ~$48)",
      familyPrice: "$225-300 for family of 5",
      whyChosen: "Inside the historic 1915 Crater Lake Lodge with its massive stone fireplace and unobstructed views of the deepest lake in North America — through the dining room windows. There is no other meal like this on the trip. Pacific Northwest-sourced seafood and organic produce. A genuinely once-in-a-lifetime dining experience. Premium price is absolutely worth it.",
      reservationNeeded: true,
      reserveLink: "[LINK: search \"Crater Lake Lodge dining reservation explorecraterlake.com\"]",
      reserveNote: "CRITICAL: Call 541-594-2255 x3217 or visit explorecraterlake.com. Reservations are required and book up far in advance — call when you book your lodge stay. Dinner service: 5pm-10pm."
    },
    lunch: {
      type: "packed",
      note: "Rim Village Cafe inside the park serves casual sandwiches, soups, and hot food for lunch — convenient if you're already on the rim. Otherwise pack lunch from the hotel before driving up."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 19 — June 10 | Eugene, OR | 3-hr drive from Crater Lake
  // RESTAURANT NIGHT — Eugene's James Beard-recognized gem
  // ─────────────────────────────────────────────────────────────────────────
  19: {
    dinnerType: "restaurant",
    dinner: {
      name: "Marche",
      cuisine: "French-inspired Pacific Northwest farm-to-table",
      address: "296 E 5th Ave, Eugene, OR 97401",
      websiteLink: "https://marcherestaurant.com",
      mapsLink: "https://www.google.com/maps/search/Marche+Restaurant+296+E+5th+Ave+Eugene+OR",
      signatureDish: "Seasonal tasting dishes using Willamette Valley farms, fresh Pacific seafood, grilled hanger steak, market vegetables",
      pricePerPerson: "$31-50",
      familyPrice: "$155-250 for family of 5",
      whyChosen: "25+ years as the heart of Eugene's food scene. James Beard Foundation honoree, located in the charming 5th Street Market. Chef uses French technique to showcase the Willamette Valley's extraordinary produce. Open daily for lunch and dinner — one of Oregon's most consistently celebrated restaurants. Warm and welcoming for families.",
      reservationNeeded: true,
      reserveLink: "https://www.opentable.com/marche-eugene",
      reserveNote: "Reserve on OpenTable. Open daily 12-9pm, brunch Sat-Sun 10am-2pm."
    },
    lunch: {
      type: "packed",
      note: "The 3-hour drive from Crater Lake goes through the Cascades — pack lunch from the Crater Lake area before departing. Eat at Collier Memorial State Park or another roadside stop on OR-58."
    },
    groceryStore: null
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DAY 20 — June 20 | Portland, OR | 1.5-hr drive (ARRIVAL ONLY)
  // No dinner recommendation needed — arrival night
  // ─────────────────────────────────────────────────────────────────────────
  20: {
    dinnerType: "grocery",
    dinner: null,
    lunch: {
      type: "packed",
      note: "Pack lunch or grab something in Eugene before the 1.5-hr drive to Portland. Arrive and settle in — Portland is your home base now."
    },
    groceryStore: {
      name: "Fred Meyer NW Portland",
      address: "100 NW 20th Pl, Portland, OR 97209",
      mapsLink: "https://www.google.com/maps/search/Fred+Meyer+100+NW+20th+Pl+Portland+OR",
      distance: "Central Portland location near major hotels — two-story store, open 7am-10pm",
      noCookMeals: [
        "Arrival night: rotisserie chicken + Pacific Northwest potato salad + fresh Oregon strawberries",
        "Charcuterie board: Oregon charcuterie, Tillamook cheddar (iconic OR cheese), crackers, fruit",
        "Fred Meyer deli — wide prepared foods section, sushi trays, sandwiches"
      ],
      note: "This is just an arrival-night grocery stop. Portland has exceptional restaurants — save the sit-down dinners for when you explore the city properly."
    }
  },

};
