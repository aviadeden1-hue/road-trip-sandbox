window.HOTEL_DATA = {
  // ============================================================
  // NIGHT 1 — May 23 — Santa Monica, CA (Arrival night)
  // ============================================================
  1: {
    optionA: {
      name: "Hampton Inn & Suites Santa Monica",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/laxsmhx-hampton-suites-santa-monica/",
      pricePerNight: "$280",
      priceNote: "Estimated based on 2025 rates; verify for May 2026",
      roomConfig: "Two Queen beds + rollaway (sleeps 5); suites with sofa bed available",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "Free hot breakfast, pool, three blocks from Santa Monica Pier. Solid chain reliability for arrival night with tired kids."
    },
    optionB: {
      name: "The Pierside Hotel Santa Monica — Coastal Family Suite",
      stars: 4,
      bookingUrl: "https://www.thepiersidehotel.com/rooms/coastal-family-suite/",
      pricePerNight: "$450",
      priceNote: "Estimated based on 2025 rates ($306–$824 range reported); verify for May 2026",
      roomConfig: "Connecting rooms: King suite + separate room with 2 Queen beds — two private spaces, two bathrooms, 750–900 sq ft total",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "Connecting rooms with a closing door between adult and kids' spaces. Steps from the Pier and beach. Parents get evening privacy once kids are down at 8:30."
    },
    optionC: {
      name: "Sunny Beach Bungalow — 3 Blocks from the Pier",
      isAirbnb: true,
      pricePerNight: "$290",
      roomConfig: "Entire cottage · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Santa-Monica--CA/homes?checkin=2026-05-23&checkout=2026-05-24&adults=2&children=3&min_bedrooms=2",
      reason: "A private California beach bungalow beats a chain hotel on arrival night — the kids wake up in a house, not a hallway. Walk to the pier in minutes.",
      amenities: ["Full kitchen", "Private patio", "Washer/dryer", "Beach gear storage", "Outdoor shower"]
    }
  },

  // ============================================================
  // NIGHT 2 — May 24 — Santa Monica, CA (2nd night, same area)
  // ============================================================
  2: {
    optionA: {
      name: "Hampton Inn & Suites Santa Monica",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/laxsmhx-hampton-suites-santa-monica/",
      pricePerNight: "$280",
      priceNote: "Estimated based on 2025 rates; verify for May 2026. Book both nights 1–2 together.",
      roomConfig: "Two Queen beds + rollaway (sleeps 5); suites with sofa bed available",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "Stay in place for night 2 — free breakfast removes morning chaos, pool keeps kids happy, central Santa Monica location for exploring."
    },
    optionB: {
      name: "The Pierside Hotel Santa Monica — Park View Family Suite",
      stars: 4,
      bookingUrl: "https://www.thepiersidehotel.com/rooms/park-view-family-suite-connecting-rooms/",
      pricePerNight: "$420",
      priceNote: "Estimated based on 2025 rates; verify for May 2026",
      roomConfig: "Connecting rooms: King suite + separate Queen room — private bedroom for adults, separate space for kids with closing door",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "Park-view connecting rooms give adults evening separation. Same hotel as night 1 option means no repacking. Close to beach and Third Street Promenade."
    },
    optionC: {
      name: "Charming Craftsman Cottage Near Montana Avenue",
      isAirbnb: true,
      pricePerNight: "$285",
      roomConfig: "Entire cottage · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Santa-Monica--CA/homes?checkin=2026-05-24&checkout=2026-05-25&adults=2&children=3&min_bedrooms=2",
      reason: "A 1920s Craftsman cottage gives the trip a 'we live here' feel on day two — cook breakfast, use the backyard, no hotel hallways.",
      amenities: ["Full kitchen", "Private backyard", "Washer/dryer", "Parking included", "Central A/C"]
    }
  },

  // ============================================================
  // NIGHT 3 — May 25 — Santa Barbara, CA (Drive day from Santa Monica)
  // ============================================================
  3: {
    optionA: {
      name: "Hampton Inn Santa Barbara/Goleta",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/sbagohx-hampton-santa-barbara-goleta/",
      pricePerNight: "$200",
      priceNote: "Estimated based on 2025 rates (from $164 on KAYAK); verify for May 2026",
      roomConfig: "Studio room: 2 Queen beds + Sofa Bed + Wet Bar (sleeps 5). Located at 5665 Hollister Ave, Goleta — 10 min from downtown Santa Barbara.",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      reason: "Free hot breakfast, 2 queens + sofa bed studio rooms confirmed, reliable chain, free parking. 10 minutes to State Street and Santa Barbara beach."
    },
    optionB: {
      name: "Hilton Santa Barbara Beachfront Resort",
      stars: 4,
      bookingUrl: "https://www.hilton.com/en/hotels/sbafphh-hilton-santa-barbara-beachfront-resort/",
      pricePerNight: "$380",
      priceNote: "Estimated based on 2025 rates (from $289 on KAYAK + $40 resort fee); verify for May 2026",
      roomConfig: "Two-bedroom suite or connecting Double Queen rooms — 335 rooms, 25 suites. Kids stay free using existing bedding.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Beachfront resort on the Santa Barbara waterfront. Two-bedroom suite configurations give separate sleeping areas with a closing door. Pool, spa, and restaurant on site."
    },
    optionC: {
      name: "Spanish-Style Casita with Courtyard — Near State Street",
      isAirbnb: true,
      pricePerNight: "$215",
      roomConfig: "Entire guesthouse · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Santa-Barbara--CA/homes?checkin=2026-05-25&checkout=2026-05-26&adults=2&children=3&min_bedrooms=2",
      reason: "Santa Barbara's architecture is all white stucco and red tile — staying in a real Spanish colonial casita is far more immersive than a Goleta chain hotel 10 minutes from downtown.",
      amenities: ["Full kitchen", "Private courtyard", "Outdoor dining", "Washer/dryer", "Free parking"]
    }
  },

  // ============================================================
  // NIGHT 4 — May 26 — Monterey, CA (Via Pinnacles NP)
  // ============================================================
  4: {
    optionA: {
      name: "Holiday Inn Express Monterey — Cannery Row",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/monterey/mryex/hoteldetail",
      pricePerNight: "$250",
      priceNote: "Estimated based on 2025 rates (from $179 reported); verify for May 2026. Late May is peak season in Monterey.",
      roomConfig: "2 Doubles + Sofa Sleeper suite (sleeps 5–6); free breakfast buffet",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      reason: "Four blocks from Monterey Bay Aquarium, free breakfast buffet, free parking, sofa sleeper rooms confirmed for sleeping 5. Excellent value for Cannery Row location."
    },
    optionB: {
      name: "Portola Hotel & Spa at Monterey Bay",
      stars: 4,
      bookingUrl: "https://www.portolahotel.com/accommodations/",
      pricePerNight: "$420",
      priceNote: "Estimated based on 2025 rates ($222–$639 range reported); verify for May 2026",
      roomConfig: "One-bedroom suite: separate King bedroom + living area with Queen Sofa Sleeper (sleeps 5). Two-bedroom suite upgrade also available.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Downtown Monterey waterfront location, one-bedroom suite with separate King bedroom and closing door gives adults evening privacy. Two-bedroom upgrade available for more space."
    },
    optionC: {
      name: "Coastal Cottage Two Blocks from Cannery Row",
      isAirbnb: true,
      pricePerNight: "$265",
      roomConfig: "Entire cottage · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Monterey--CA/homes?checkin=2026-05-26&checkout=2026-05-27&adults=2&children=3&min_bedrooms=2",
      reason: "A classic Monterey fisherman's cottage blocks from the Aquarium — all the character of Cannery Row without the hotel-corridor feel. Kids love having a real home base after the tide pools.",
      amenities: ["Full kitchen", "Fireplace", "Washer/dryer", "Parking", "Outdoor seating"]
    }
  },

  // ============================================================
  // NIGHT 5 — May 27 — Monterey, CA (2nd night — explore aquarium, 17-Mile Drive)
  // ============================================================
  5: {
    optionA: {
      name: "Holiday Inn Express Monterey — Cannery Row",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/monterey/mryex/hoteldetail",
      pricePerNight: "$250",
      priceNote: "Estimated based on 2025 rates; verify for May 2026. Book nights 4–5 together.",
      roomConfig: "2 Doubles + Sofa Sleeper suite (sleeps 5–6); free breakfast buffet",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      reason: "Stay in place for night 2 in Monterey. Free breakfast, walkable to Cannery Row and the Aquarium. Free parking saves money in an expensive destination."
    },
    optionB: {
      name: "Portola Hotel & Spa at Monterey Bay",
      stars: 4,
      bookingUrl: "https://www.portolahotel.com/accommodations/",
      pricePerNight: "$420",
      priceNote: "Estimated based on 2025 rates; verify for May 2026. Book nights 4–5 together.",
      roomConfig: "One-bedroom suite: separate King bedroom + living area with Queen Sofa Sleeper (sleeps 5). Two-bedroom suite upgrade available.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Best location in downtown Monterey for a two-night stay. Adults get a quiet bedroom with a closing door. Walking distance to Fisherman's Wharf and waterfront."
    },
    optionC: {
      name: "Pacific Grove Victorian Cottage — Steps from Lover's Point",
      isAirbnb: true,
      pricePerNight: "$255",
      roomConfig: "Entire house · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Pacific-Grove--CA/homes?checkin=2026-05-27&checkout=2026-05-28&adults=2&children=3&min_bedrooms=2",
      reason: "Pacific Grove is Monterey's quieter, more charming neighbor — Victorian cottages, sea otters at the shoreline, a magical misty atmosphere. Two nights in a house beats two nights in a corridor.",
      amenities: ["Full kitchen", "Fireplace", "Washer/dryer", "Bikes available", "Sea views"]
    }
  },

  // ============================================================
  // NIGHT 6 — May 28 — San Francisco, CA (Drive from Monterey)
  // ============================================================
  6: {
    optionA: {
      name: "Holiday Inn Express & Suites San Francisco — Fisherman's Wharf",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/san-francisco/sfonp/hoteldetail",
      pricePerNight: "$320",
      priceNote: "Estimated based on 2025 rates; verify for May 2026. SF hotels are expensive — this is one of the most affordable near Fisherman's Wharf.",
      roomConfig: "Suite rooms available; free breakfast buffet confirmed. Request suite or 2 queens for family of 5.",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      reason: "Best value option in Fisherman's Wharf. Free breakfast a huge bonus in expensive SF. Walking distance to Pier 39, Ghirardelli Square, and cable cars. Reviewer specifically mentioned 'family of five' saved money with included breakfast."
    },
    optionB: {
      name: "Argonaut Hotel — A Noble House Hotel",
      stars: 4,
      bookingUrl: "https://www.argonauthotel.com/san-francisco-hotel-suites/",
      pricePerNight: "$480",
      priceNote: "Suite rates ~$596–$648 reported; verify for May 2026. Add $36/night destination fee.",
      roomConfig: "One-bedroom suite connecting to adjacent 2-Queen room (request at booking) — two separate sleeping areas with closing door",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "Boutique hotel in historic Cannery building on the waterfront. Connecting suite + adjacent room gives family separate sleeping zones. Kids' amenities: treasure chests, scavenger hunts, board games. Iconic SF Fisherman's Wharf location."
    },
    optionC: {
      name: "Victorian Painted Lady Flat — Cole Valley",
      isAirbnb: true,
      pricePerNight: "$335",
      roomConfig: "Entire flat · 3 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/San-Francisco--CA/homes?checkin=2026-05-28&checkout=2026-05-29&adults=2&children=3&min_bedrooms=2",
      reason: "A real San Francisco painted lady — bay windows, decorative Victorian woodwork, hardwood floors. This is what SF looks like when locals actually live here.",
      amenities: ["Full kitchen", "Bay windows", "Washer/dryer", "Private backyard", "Parking"]
    }
  },

  // ============================================================
  // NIGHT 7 — May 29 — San Francisco, CA (2nd night — Golden Gate, parks)
  // ============================================================
  7: {
    optionA: {
      name: "Handlery Union Square Hotel",
      stars: 3,
      bookingUrl: "https://sf.handlery.com/guestrooms-accommodations/",
      pricePerNight: "$260",
      priceNote: "From $131 average (KAYAK); family suite higher. Verify for May 2026.",
      roomConfig: "Family Suite: two separate bedrooms connected by shared bathroom (sleeps 5). One room has 2 Queen beds, other has 1 Queen.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Purpose-built Family Suite with TWO separate bedrooms and a closing door — specifically designed for families. Heated outdoor pool. 5-min walk from Powell Street cable car line. Best family suite value in Union Square."
    },
    optionB: {
      name: "Holiday Inn Express & Suites San Francisco — Fisherman's Wharf",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/san-francisco/sfonp/hoteldetail",
      pricePerNight: "$320",
      priceNote: "Estimated based on 2025 rates; verify for May 2026. Book nights 6–8 together for best rate.",
      roomConfig: "Suite rooms; free breakfast buffet. Request 2 queens or suite for family of 5.",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      reason: "Stay in place from night 6 for consistency. Free breakfast offsets SF's high food costs. Fisherman's Wharf location keeps kids entertained."
    },
    optionC: {
      name: "Edwardian Row House — Noe Valley (Family Favorite)",
      isAirbnb: true,
      pricePerNight: "$275",
      roomConfig: "Entire house · 3 bed · sleeps 6",
      bookingUrl: "https://www.airbnb.com/s/San-Francisco--CA/homes?checkin=2026-05-29&checkout=2026-05-30&adults=2&children=3&min_bedrooms=2",
      reason: "Noe Valley is SF's sunniest, most family-friendly neighborhood — flat streets, great playgrounds, bakeries for parents. An Edwardian row house lets the family spread out between long city days.",
      amenities: ["Full kitchen", "2 full bathrooms", "Washer/dryer", "Private garden", "Garage parking"]
    }
  },

  // ============================================================
  // NIGHT 8 — May 30 — San Francisco, CA (3rd night — Alcatraz, Muir Woods)
  // ============================================================
  8: {
    optionA: {
      name: "Handlery Union Square Hotel",
      stars: 3,
      bookingUrl: "https://sf.handlery.com/guestrooms-accommodations/",
      pricePerNight: "$260",
      priceNote: "From $131 average (KAYAK); family suite higher. Verify for May 2026. Book all 3 SF nights at Handlery for consistency.",
      roomConfig: "Family Suite: two separate bedrooms + shared bathroom (sleeps 5). 2 Queens in one room, 1 Queen in the other.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Staying 3 nights at Handlery means no repacking. Purpose-built Family Suite with two closing bedroom doors. Heated pool. Union Square location lets kids ride cable cars to Fisherman's Wharf."
    },
    optionB: {
      name: "San Francisco Marriott Fisherman's Wharf",
      stars: 4,
      bookingUrl: "https://www.marriott.com/en-us/hotels/sfofw-san-francisco-marriott-fishermans-wharf/rooms/",
      pricePerNight: "$350",
      priceNote: "From ~$228 base; suites and connecting rooms higher. Rollaway available for $20/night. Verify for May 2026.",
      roomConfig: "Connecting rooms available on request: adjacent rooms give family separate sleeping areas (request at booking). Rollaway $20/night.",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "Reliable Marriott at Fisherman's Wharf. Connecting rooms give separate adult/kid sleeping spaces. Steps from Pier 39 and Alcatraz ferry. Kids 18 and under stay free."
    },
    optionC: {
      name: "Modern Marina District Home with Rooftop Deck",
      isAirbnb: true,
      pricePerNight: "$280",
      roomConfig: "Entire house · 3 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/San-Francisco--CA/homes?checkin=2026-05-30&checkout=2026-05-31&adults=2&children=3&min_bedrooms=2",
      reason: "The Marina puts you five minutes from the Golden Gate and Crissy Field. A rooftop deck with bay views is the perfect way to end the final SF night — steps from the waterfront but quieter than Fisherman's Wharf.",
      amenities: ["Rooftop deck", "Full kitchen", "2 bathrooms", "Gas grill", "Washer/dryer"]
    }
  },

  // ============================================================
  // NIGHT 9 — May 31 — Windsor, CA (Family visit, Sonoma County)
  // ============================================================
  9: {
    optionA: {
      name: "Hampton Inn & Suites Windsor — Sonoma Wine Country",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/stswihx-hampton-suites-windsor-sonoma-wine-country/",
      pricePerNight: "$190",
      priceNote: "From $126 on KAYAK; estimate based on 2025 rates. Verify for May 2026.",
      roomConfig: "King Bed Studio Suite with Sofa Bed (sleeps 5) — separate living area with sofa bed + king bedroom. 116 rooms, outdoor pool.",
      freeBreakfast: true,
      separateRoom: true,
      pool: true,
      reason: "Free hot breakfast, outdoor pool, studio suite with sofa bed for family of 5. Located off Hwy 101 — 4 miles from family visit location. Best value with breakfast in Windsor."
    },
    optionB: {
      name: "Holiday Inn Windsor — Wine Country",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinn/hotels/us/en/windsor/stshi/hoteldetail",
      pricePerNight: "$160",
      priceNote: "From $82 on KAYAK; estimate based on 2025 rates. Verify for May 2026.",
      roomConfig: "1-bedroom suite with balcony and hot tub in suite (sleeps 5 with rollaway). Indoor pool and hot tub.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Spacious 1-BR suites with balconies confirmed. Indoor pool and hot tub. Walking distance to Windsor Town Green. Near family visit location in Windsor."
    },
    optionC: {
      name: "Wine Country Farmhouse with Vineyard Views",
      isAirbnb: true,
      pricePerNight: "$210",
      roomConfig: "Entire farmhouse · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Windsor--CA/homes?checkin=2026-05-31&checkout=2026-06-01&adults=2&children=3&min_bedrooms=2",
      reason: "Wake up surrounded by Sonoma wine country vineyards instead of a chain hotel parking lot. A farmhouse with outdoor space gives the kids room to run after the drive up from SF.",
      amenities: ["Full kitchen", "Outdoor patio", "BBQ grill", "Vineyard views", "Washer/dryer"]
    }
  },

  // ============================================================
  // NIGHT 10 — June 1 — Windsor, CA (2nd family visit night)
  // ============================================================
  10: {
    optionA: {
      name: "Hampton Inn & Suites Windsor — Sonoma Wine Country",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/stswihx-hampton-suites-windsor-sonoma-wine-country/",
      pricePerNight: "$190",
      priceNote: "From $126 on KAYAK; estimate based on 2025 rates. Book nights 9–10 together.",
      roomConfig: "King Bed Studio Suite with Sofa Bed (sleeps 5) — separate living area with sofa bed + king bedroom.",
      freeBreakfast: true,
      separateRoom: true,
      pool: true,
      reason: "Staying in place for night 2. Free breakfast frees up time for family visit activities. Pool great for kids in the afternoon."
    },
    optionB: {
      name: "Holiday Inn Express Windsor Sonoma Wine Country",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/windsor/winca/hoteldetail",
      pricePerNight: "$170",
      priceNote: "Estimated based on 2025 rates; verify for May 2026",
      roomConfig: "Standard rooms with connecting room option; outdoor pool, sauna, hot tub. Request connecting rooms for family of 5.",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "Free breakfast, outdoor heated pool, sauna and indoor hot tub. Good alternative to Hampton Inn — located near Windsor Town Green. Book connecting rooms for separate sleeping areas."
    },
    optionC: {
      name: "Ranch Cottage with Hot Tub — Sonoma Wine Country",
      isAirbnb: true,
      pricePerNight: "$200",
      roomConfig: "Entire cottage · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Windsor--CA/homes?checkin=2026-06-01&checkout=2026-06-02&adults=2&children=3&min_bedrooms=2",
      reason: "Two nights in the same Airbnb home near Windsor gives you a true home-base feel for the family visit — no packing up between nights. A ranch cottage with a hot tub beats a chain hotel for decompressing after the long SF stretch.",
      amenities: ["Private hot tub", "Full kitchen", "Outdoor space", "2 bedrooms", "Washer/dryer"]
    }
  },

  // ============================================================
  // NIGHT 11 — June 2 — Healdsburg, CA (Wine country, 15 min from Windsor)
  // ============================================================
  11: {
    optionA: {
      name: "Hotel Trio Healdsburg",
      stars: 3,
      bookingUrl: "https://www.hoteltrio.com/stay/accommodations",
      pricePerNight: "$230",
      priceNote: "From $188 on KAYAK; estimate for June 2026. Self-parking $20/night.",
      roomConfig: "Bunk Room Suite: 4 Queen beds, full kitchen, flat-screen TVs, living area (sleeps 5–8). Or Family Suite with separate bedroom + sofa bed.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "All-suite hotel with full kitchens, just north of Healdsburg's plaza. Bunk Room Suite purpose-built for families. Pool on site. Easy move from Windsor."
    },
    optionB: {
      name: "The Lodge at Healdsburg, Tapestry Collection by Hilton",
      stars: 4,
      bookingUrl: "https://www.thelah.com/",
      pricePerNight: "$280",
      priceNote: "From $114–$245 on KAYAK; suites higher. Verify for June 2026.",
      roomConfig: "Upscale boutique rooms; request connecting rooms or suite with sofa bed for family of 5. Pool on site.",
      freeBreakfast: false,
      separateRoom: false,
      pool: true,
      reason: "Upscale boutique hotel in Healdsburg wine country atmosphere. Hilton Tapestry Collection property with pool and wine country character. Walking distance to Healdsburg plaza restaurants and tasting rooms."
    },
    optionC: {
      name: "Healdsburg Bungalow with Pool — Wine Country",
      isAirbnb: true,
      pricePerNight: "$245",
      roomConfig: "Entire bungalow · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Healdsburg--CA/homes?checkin=2026-06-02&checkout=2026-06-03&adults=2&children=3&min_bedrooms=2",
      reason: "A private bungalow in Healdsburg is a fraction of the Montage price with the same wine country setting. Walking distance to the Healdsburg plaza — wander to dinner at one of its Michelin-starred restaurants and walk back.",
      amenities: ["Private pool", "Full kitchen", "Outdoor dining area", "Fire pit", "2 bedrooms"]
    }
  },

  // ============================================================
  // NIGHT 12 — June 3 — Myers Flat/Weott area, CA (Humboldt Redwoods)
  // ⚠️  LIMITED INVENTORY — BOOK EARLY
  // ============================================================
  12: {
    limitedInventory: true,
    optionA: {
      name: "Myers Inn (Myers Country Inn)",
      stars: 2,
      bookingUrl: "https://www.myersinn.com",
      pricePerNight: "$150",
      priceNote: "Estimated; verify at booking. Very limited rooms — call directly: (707) 943-3259",
      roomConfig: "10 rooms including Family rooms; some rooms sleep 3+, request largest configuration. Complimentary coffee/tea each morning. No full breakfast.",
      freeBreakfast: false,
      separateRoom: false,
      pool: false,
      limitedInventory: true,
      reason: "THE primary lodging on the Avenue of the Giants. Historic 1867 stage stop in the heart of Humboldt Redwoods State Park — the biggest redwood forest in the world. Rooms are clean and functional. BOOK EARLY — very limited availability in this remote area."
    },
    optionB: {
      name: "Giant Redwoods RV & Cabin Destination",
      stars: 2,
      bookingUrl: "https://www.giantredwoodsrv.com/cabins/",
      pricePerNight: "$100",
      priceNote: "Nightly rates $65–$85; extra person fee $10/person above 2. Linens rental $35Q/$25T. Park open March 13–November 2. Verify for June 2026.",
      roomConfig: "Cabins: Queen bed + twin bunk beds (sleeps 5 with extra person fee). Fiber optic WiFi, electric fireplace, private bathroom. Bring or rent linens.",
      freeBreakfast: false,
      separateRoom: false,
      pool: false,
      limitedInventory: true,
      reason: "Riverside cabin destination in Myers Flat on the Eel River. Cabins have electric fireplaces and private baths. No gear needed beyond linens (or rent on site). Surrounded by redwood forest. BOOK EARLY — only 5 cabins total."
    },
    optionC: {
      name: "Redwood Forest Cabin — Avenue of the Giants",
      isAirbnb: true,
      pricePerNight: "$165",
      roomConfig: "Entire cabin · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Myers-Flat--CA/homes?checkin=2026-06-03&checkout=2026-06-04&adults=2&children=3&min_bedrooms=2",
      reason: "A private cabin tucked in the redwood forest with full kitchen and separate bedrooms. Sleeping under 300-foot trees is a memory kids never forget. Book 6+ months early — inventory is very thin in this remote area.",
      amenities: ["Surrounded by redwoods", "Full kitchen", "2 bedrooms", "Fire pit", "Private outdoor space"],
      limitedInventory: true
    }
  },

  // ============================================================
  // NIGHT 13 — June 4 — Orick, CA (Near Redwood NP — Very Limited)
  // ⚠️ LIMITED INVENTORY — book 6+ months in advance
  // ============================================================
  13: {
    limitedInventoryWarning: "Hotel options near Orick are extremely limited. Strongly recommend booking 6+ months in advance. Consider staying in Crescent City (Night 14 hotel, 45 min north) for both nights 13–14 and doing day trips south.",
    optionA: {
      name: "Historic Requa Inn — Klamath, CA",
      stars: 3,
      bookingUrl: "https://www.requainn.com",
      pricePerNight: "$160",
      priceNote: "Estimated; verify at requainn.com. Book very early — small property with ~10 rooms.",
      roomConfig: "Two connecting rooms (or book two adjacent rooms with private baths) — request rooms that work for 5 people. Small historic inn on the Klamath River, ~12 miles south of Orick.",
      freeBreakfast: true,
      separateRoom: false,
      pool: false,
      limitedInventory: true,
      reason: "The best inn within reasonable distance of Orick. Historic 1914 building overlooking the Klamath River estuary. Full breakfast included. Peaceful, charming, close to the park. Limited rooms — book immediately."
    },
    optionB: {
      name: "Elk Meadow Cabins — Orick (National Park Cabin)",
      stars: 2,
      bookingUrl: "https://elkmeadowcabins.com/",
      pricePerNight: "$180",
      priceNote: "Estimated $150–200/night; verify at elkmeadowcabins.com. Very limited availability — book as early as possible.",
      roomConfig: "Historic ranch cabin complex within Redwood National Park. Multiple buildings available for group rental. Contact the park directly for availability.",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      limitedInventory: true,
      reason: "A unique option — staying literally inside Redwood National Park at historic cabins. Very limited availability. Contact park (707-465-7335) to inquire about rental availability for June 2026."
    },
    optionC: {
      name: "Klamath River Cabin with Private Dock",
      isAirbnb: true,
      pricePerNight: "$175",
      roomConfig: "Entire cabin · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Klamath--CA/homes?checkin=2026-06-04&checkout=2026-06-05&adults=2&children=3&min_bedrooms=2",
      reason: "A riverside cabin on the Klamath River is one of the great sleeps of the entire trip. Salmon country, elk meadows, towering redwoods 10 minutes away — and a private dock the kids will love. Book very early; listings here are rare.",
      amenities: ["River access", "Full kitchen", "2 bedrooms", "Private dock/deck", "BBQ grill"],
      limitedInventory: true
    }
  },

  // ============================================================
  // NIGHT 14 — June 5 — Crescent City, CA (Full Service Town)
  // ============================================================
  14: {
    optionA: {
      name: "Holiday Inn Express Crescent City",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/crescent-city/cescr/hoteldetail",
      pricePerNight: "$155",
      priceNote: "Estimated based on similar Holiday Inn Express properties; verify at IHG.com for June 2026",
      roomConfig: "Suite with King bed + sofa sleeper; or standard rooms with 2 Queens. Request room for 5. Free breakfast buffet included.",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "Reliable chain, free hot breakfast, indoor pool — after two nights in remote Redwood country, this feels luxurious. Crescent City has more amenities than anywhere since Healdsburg. Close to Jedediah Smith and Del Norte Coast State Park."
    },
    optionB: {
      name: "Curly Redwood Lodge — Crescent City",
      stars: 2,
      bookingUrl: "https://www.booking.com/hotel/us/curly-redwood-lodge.html",
      pricePerNight: "$115",
      priceNote: "Estimated; verify directly. A genuinely unique property — 2-bedroom units available.",
      roomConfig: "The lodge was built entirely from a single curly redwood tree milled in 1957. Units include family rooms with 2 beds; suites with separate sleeping areas available. Request largest unit for family of 5.",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "One of the most unique lodging experiences in California — the entire building came from one massive redwood. It's genuinely historic, well-maintained, and perfectly positioned for the Redwood NP day. The larger suites sleep 5 with some separation between sleeping areas."
    },
    optionC: {
      name: "Oceanfront Beach Cottage — Crescent City",
      isAirbnb: true,
      pricePerNight: "$170",
      roomConfig: "Entire cottage · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Crescent-City--CA/homes?checkin=2026-06-05&checkout=2026-06-06&adults=2&children=3&min_bedrooms=2",
      reason: "After nights 12 and 13 in the deep redwoods, a beach cottage with Pacific views is the perfect reset. Crescent City's wild harbor and lighthouse make for an atmospheric arrival on the coast.",
      amenities: ["Ocean views", "Full kitchen", "2 bedrooms", "Private patio", "Beach access"]
    }
  },

  // ============================================================
  // NIGHT 15 — June 6 — Brookings, OR (Oregon Coast Entry)
  // ============================================================
  15: {
    optionA: {
      name: "Holiday Inn Express Brookings — Harbor & Oceanfront",
      stars: 3,
      bookingUrl: "https://www.ihg.com/holidayinnexpress/hotels/us/en/brookings/brorc/hoteldetail",
      pricePerNight: "$180",
      priceNote: "Estimated for June 2026; verify at IHG.com",
      roomConfig: "Suites with sofa bed available; standard rooms with 2 Queens for family of 5. Free hot breakfast included.",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "The best chain option in Brookings with free breakfast, indoor pool, and harbor views. Right at the start of the Oregon Coast stretch."
    },
    optionB: {
      name: "Ocean Suites Motel — Brookings",
      stars: 3,
      bookingUrl: "https://oceansuitesmotel.com/",
      pricePerNight: "$200",
      priceNote: "Estimated $180–220 for June; verify at oceansuitesmotel.com. Oceanfront rooms command a premium in peak season.",
      roomConfig: "Two-room oceanfront suites with separate bedroom + living area with sleeper sofa. Closing door between rooms. Kitchen in suite. Ocean views.",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "Oceanfront two-room suites with a closing door for adult/kid separation. Kitchen means easy no-cook breakfasts. Waking up to Pacific views is the payoff for the Oregon Coast leg."
    },
    optionC: {
      name: "Brookings Harbor Beach House with Ocean Views",
      isAirbnb: true,
      pricePerNight: "$195",
      roomConfig: "Entire home · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Brookings--OR/homes?checkin=2026-06-06&checkout=2026-06-07&adults=2&children=3&min_bedrooms=2",
      reason: "First night on the Oregon Coast in a private beach house — fall asleep to the sound of the Pacific after the long Redwood NP day. Brookings has the warmest weather on the Oregon coast, making the patio actually usable.",
      amenities: ["Ocean views", "Full kitchen", "2 bedrooms", "Private deck", "BBQ grill"]
    }
  },

  // ============================================================
  // NIGHT 16 — June 7 — Medford, OR (After Oregon Caves)
  // ============================================================
  16: {
    optionA: {
      name: "Hampton Inn & Suites Medford",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/mfrhxhx-hampton-suites-medford/",
      pricePerNight: "$170",
      priceNote: "Estimated based on 2025 rates; verify at Hilton.com for June 2026",
      roomConfig: "King Studio Suite with sofa bed (sleeps 4–5) or standard 2 Queens. Request suite for family of 5. Free hot breakfast included.",
      freeBreakfast: true,
      separateRoom: false,
      pool: true,
      reason: "Reliable Hampton Inn with free breakfast and pool. Medford is a full-service city with good restaurant options — the Hampton's free breakfast offsets dinner costs from the Oregon Caves day."
    },
    optionB: {
      name: "Ashland Hills Hotel & Suites — Ashland, OR",
      stars: 3,
      bookingUrl: "https://www.ashlandhillshotel.com",
      pricePerNight: "$200",
      priceNote: "Estimated; verify at ashlandhillshotel.com for June 2026. Shakespeare Festival season = higher rates.",
      roomConfig: "Family suites available with two separate sleeping areas. Also offers connecting rooms on request. Pool and spa on property.",
      freeBreakfast: false,
      separateRoom: true,
      pool: true,
      reason: "Ashland is a lovely arts town 12 miles south of Medford — home of the Oregon Shakespeare Festival. The Ashland Hills Hotel has family suites with separate sleeping areas and a great pool. A more interesting town than Medford itself for a dinner walk."
    },
    optionC: {
      name: "Rogue Valley Farmhouse — Ashland Area",
      isAirbnb: true,
      pricePerNight: "$185",
      roomConfig: "Entire farmhouse · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Ashland--OR/homes?checkin=2026-06-07&checkout=2026-06-08&adults=2&children=3&min_bedrooms=2",
      reason: "A farmhouse in the Rogue Valley lets you step into the landscape that defines southern Oregon — rolling hills, orchards, and clean mountain air. Close to Ashland's dining and Shakespeare Festival, without the downtown hotel price tag.",
      amenities: ["Full kitchen", "Outdoor space", "2 bedrooms", "Mountain views", "Fire pit"]
    }
  },

  // ============================================================
  // NIGHT 17 — June 8 — Crater Lake, OR
  // ⚠️ VERY LIMITED INVENTORY — book 6-12 months in advance
  // ============================================================
  17: {
    limitedInventoryWarning: "Crater Lake Lodge sells out within minutes of opening reservations (typically released in mid-January for the coming summer). Mazama Village Motor Inn also fills up fast. Book the moment reservations open. If the park is full, Klamath Falls (1 hr south) or Chiloquin (45 min south) are the fallbacks.",
    optionA: {
      name: "The Cabins at Mazama Village — Inside Crater Lake NP",
      stars: 2,
      bookingUrl: "https://explorecraterlake.com/stay-at-crater-lake/the-cabins-at-mazama-village/",
      pricePerNight: "$175",
      priceNote: "Estimated based on 2025 published rates; verify at explorecraterlake.com. Book as early as possible — fills months in advance.",
      roomConfig: "Standard motel rooms with 2 Queen beds (sleeps 5 with rollaway). Located 7 miles from the lake rim. No frills but unbeatable location inside the national park.",
      freeBreakfast: false,
      separateRoom: false,
      pool: false,
      limitedInventory: true,
      reason: "Staying inside Crater Lake National Park means you can see the sunrise on the lake and catch evening light that day-trippers miss. Mazama Village has the motor inn, a small store, gas station, and Annie Creek Restaurant. Book 6+ months early."
    },
    optionB: {
      name: "Crater Lake Lodge — On the Rim (Historic 1915 Lodge)",
      stars: 4,
      bookingUrl: "https://explorecraterlake.com/stay-at-crater-lake/crater-lake-lodge/",
      pricePerNight: "$325",
      priceNote: "Estimated based on 2025 published rates; verify at explorecraterlake.com. Sells out almost instantly — reservations open in mid-January.",
      roomConfig: "Rooms with 2 Queen beds available; request larger room or connecting rooms for family of 5. The Lodge is directly on the rim with lake views from many rooms.",
      freeBreakfast: false,
      separateRoom: false,
      pool: false,
      limitedInventory: true,
      reason: "THE iconic Crater Lake experience — a 1915 historic lodge with unobstructed views of the lake from the veranda. Watching the sun set over Crater Lake from a rocking chair on the Great Hall porch is one of the great moments of any western road trip. If you can get this, get it."
    },
    optionC: {
      name: "Crater Lake Area Creekside Cabin — Prospect, OR",
      isAirbnb: true,
      pricePerNight: "$190",
      roomConfig: "Entire cabin · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Prospect--OR/homes?checkin=2026-06-08&checkout=2026-06-09&adults=2&children=3&min_bedrooms=2",
      reason: "If Crater Lake lodge is full (it usually is), a cabin near Prospect on the upper Rogue River puts you 45 minutes from the rim in a gorgeous forested setting. Better than a chain hotel in Klamath Falls — same drive time, wildly better atmosphere.",
      amenities: ["Creek access", "Full kitchen", "2 bedrooms", "Fire pit", "Mountain/forest setting"],
      limitedInventory: true
    }
  },

  // ============================================================
  // NIGHT 18 — June 9 — Eugene, OR
  // ============================================================
  18: {
    optionA: {
      name: "Hilton Eugene",
      stars: 4,
      bookingUrl: "https://www.hilton.com/en/hotels/eugfhhf-hilton-eugene/",
      pricePerNight: "$180",
      priceNote: "Estimated based on 2025 rates; verify at Hilton.com for June 2026",
      roomConfig: "Two-Queen rooms or King suite with sofa bed (sleeps 5). Located in downtown Eugene adjacent to the Convention Center.",
      freeBreakfast: false,
      separateRoom: false,
      pool: true,
      reason: "The premier full-service hotel in downtown Eugene. Pool, on-site restaurant, walkable to 5th Street Market and Willamette River path. A solid reward after days in remote Oregon."
    },
    optionB: {
      name: "Graduate Eugene — University of Oregon Boutique",
      stars: 3,
      bookingUrl: "https://www.graduatehotels.com/eugene/",
      pricePerNight: "$165",
      priceNote: "Estimated based on 2025 rates; verify at graduatehotels.com for June 2026",
      roomConfig: "Suite or connecting rooms for family of 5. Boutique UO-themed hotel with quirky Oregon Ducks decor. Connecting rooms available on request.",
      freeBreakfast: false,
      separateRoom: true,
      pool: false,
      reason: "A fun, personality-filled boutique hotel a block from the University of Oregon campus. Connecting room option gives adult/kid separation. Kids like the college-town energy and the quirky sports-themed decor."
    },
    optionC: {
      name: "Whiteaker Craftsman Bungalow — Eugene's Coolest Neighborhood",
      isAirbnb: true,
      pricePerNight: "$195",
      roomConfig: "Entire bungalow · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Eugene--OR/homes?checkin=2026-06-09&checkout=2026-06-10&adults=2&children=3&min_bedrooms=2",
      reason: "Eugene's Whiteaker neighborhood has the best food, coffee, and street art in the city. A craftsman bungalow here beats any hotel — walkable to dinner, quiet streets for the kids to wind down on the penultimate night.",
      amenities: ["Full kitchen", "2 bedrooms", "Patio/yard", "Walking distance to restaurants", "Washer/dryer"]
    }
  },

  // ============================================================
  // NIGHT 19 — June 10 — Portland, OR (Final Night — Party Eve)
  // ============================================================
  19: {
    optionA: {
      name: "Courtyard by Marriott Portland City Center",
      stars: 3,
      bookingUrl: "https://www.marriott.com/en-us/hotels/pdxcc-courtyard-portland-city-center/overview/",
      pricePerNight: "$200",
      priceNote: "Estimated based on 2025 rates; verify at Marriott.com for June 2026",
      roomConfig: "Two-Queen rooms or King suite with sofa bed (sleeps 5). Request connecting rooms if available.",
      freeBreakfast: false,
      separateRoom: false,
      pool: false,
      reason: "Reliable Marriott in downtown Portland — walkable to Powell's Books, Tom McCall Waterfront Park, and the Pearl District. Good base for arrival night before the party."
    },
    optionB: {
      name: "Embassy Suites by Hilton Portland Downtown",
      stars: 3,
      bookingUrl: "https://www.hilton.com/en/hotels/pdxeses-embassy-suites-portland-downtown/",
      pricePerNight: "$250",
      priceNote: "Estimated based on 2025 rates; verify at Hilton.com for June 2026",
      roomConfig: "All-suite hotel: every room is a two-room suite with separate bedroom + living area with sofa bed + closing door. Sleeps 5. Free cooked-to-order breakfast included.",
      freeBreakfast: true,
      separateRoom: true,
      pool: true,
      reason: "Embassy Suites guarantees the two-room suite with a closing door — adults get their evening to celebrate the end of the trip. Free full breakfast means morning-of-party logistics are handled."
    },
    optionC: {
      name: "Portland Treehouse in the Treetops — Alberta Arts District",
      isAirbnb: true,
      pricePerNight: "$220",
      roomConfig: "Entire treehouse · 2 bed · sleeps 5",
      bookingUrl: "https://www.airbnb.com/s/Portland--OR/homes?checkin=2026-06-10&checkout=2026-06-11&adults=2&children=3&min_bedrooms=2",
      reason: "End the trip with something unforgettable: a treehouse in Portland's Alberta Arts District. The kids will talk about sleeping in a treehouse for years. You're 20 minutes from the party venue and in the most interesting neighborhood in Portland.",
      amenities: ["Unique treehouse structure", "Full kitchen", "2 bedrooms", "Outdoor deck", "Alberta Arts District location"]
    }
  }
};
