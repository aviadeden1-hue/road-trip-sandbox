# California–Oregon Road Trip 2026

A single-page interactive itinerary for a family of 5 driving from Los Angeles to Portland over 19 days (May 23 – June 10, 2026). No server required — open `index.html` in any browser.

---

## Trip Overview

- **Travelers:** 5 (2 adults + 3 kids, including a 4-year-old)
- **Dates:** May 23 – June 10, 2026 (19 nights)
- **Route:** LAX → Santa Monica → Santa Barbara → Big Sur → Monterey → San Francisco → Wine Country → Redwoods → Oregon Coast → Crater Lake → Eugene → Portland
- **Distance:** ~1,800 miles
- **NPS Sites Covered:** 6 (all covered by the America the Beautiful Annual Pass)

---

## How to Open the Site

Simply open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge). No internet connection required once the page is loaded — all data is in the `data/` folder.

```
double-click index.html
```

The interactive map requires an internet connection to load OpenStreetMap tiles. Everything else (day cards, hotels, food, activities) works offline.

---

## How to Share with Family

**Option 1 — Netlify Drop (easiest, free, no account needed)**
1. Go to https://app.netlify.com/drop
2. Drag the entire `road-trip-site/` folder onto the page
3. Get a live URL instantly (e.g. `my-trip.netlify.app`)
4. Share with family — works on any phone or computer

**Option 2 — GitHub Pages (free, permanent)**
1. Create a new repo at github.com
2. Upload the contents of `road-trip-site/` to the repo root
3. Settings → Pages → Deploy from main branch
4. URL: `https://yourusername.github.io/road-trip`

**Option 3 — Phone Home Screen (offline access)**
Open `index.html` in Chrome or Safari → Share → "Add to Home Screen" for app-like access without internet.

---

## How to Update the Data

Each data file is self-contained and easy to edit in any text editor:

| What you want to change | File to edit |
|-------------------------|--------------|
| Day dates, driving hours, route notes, overnight cities | `data/route.js` |
| Hotel options for any night | `data/hotels.js` |
| Activities, scenic drives, hidden gems, rainy-day backups | `data/activities.js` |
| Dinner restaurants, grocery nights, lunch spots, snack kit | `data/food.js` |
| Map appearance, budget estimates, NPS site list | `app.js` (top constants) |

All data files assign to `window.ROUTE_DATA`, `window.HOTEL_DATA`, `window.ACTIVITY_DATA`, and `window.FOOD_DATA` respectively. Day numbers are the keys (1–19).

---

## NPS Sites Covered by the America the Beautiful Annual Pass ($80)

The pass covers entrance fees at all federal land sites. Buy one pass, use it at all six:

| Day | Site | Notes |
|-----|------|-------|
| Day 4 (May 26) | **Pinnacles National Park** | Balconies Cave hike + California condor spotting |
| Day 7 (June 1) | **Muir Woods National Monument** | Timed entry reservation required — book at gomuirwoods.com 90 days ahead. Pass covers the $15 entry fee; parking/shuttle fee is separate. |
| Day 8 (June 2) | **Point Reyes National Seashore** | Lighthouse, Tule Elk Reserve, Kehoe Beach |
| Day 14 (June 5) | **Redwood National & State Parks** | Fern Canyon, Stout Grove, Jedediah Smith Redwoods |
| Day 16 (June 7) | **Oregon Caves National Monument** | 90-min underground cave tour — great for kids |
| Day 17 (June 8) | **Crater Lake National Park** | Deepest lake in the USA, vivid blue water, Rim Drive |

Buy the pass at https://store.usgs.gov/america-the-beautiful-passes or at the Pinnacles entrance gate on Day 4 (your first NPS stop).
