/* ============================================================
   LAX → Portland Road Trip 2026 — app.js
   All content data comes from window.ROUTE_DATA, window.HOTEL_DATA,
   window.ACTIVITY_DATA, and window.FOOD_DATA global variables.
   No city names, coordinates, or trip-specific content is hardcoded here.
   ============================================================ */

'use strict';

/* ── Region Configuration ── */
const REGION_CONFIG = {
  "LA Area":                { color: "#ff6b6b", icon: "🌴", order: 1 },
  "Big Sur & Monterey":     { color: "#4ecdc4", icon: "🌊", order: 2 },
  "San Francisco":          { color: "#45b7d1", icon: "🌉", order: 3 },
  "Wine Country":           { color: "#96ceb4", icon: "🍷", order: 4 },
  "Redwoods":               { color: "#2d6a4f", icon: "🌲", order: 5 },
  "Oregon Coast":           { color: "#74b9ff", icon: "🦀", order: 6 },
  "Crater Lake & Oregon":   { color: "#a29bfe", icon: "🏔", order: 7 },
  "Portland":               { color: "#fd79a8", icon: "🌹", order: 8 }
};

/* ── Day Type Configuration ── */
const DAY_TYPE_CONFIG = {
  drive:   { label: "🚗 DRIVE DAY",    cssClass: "badge-drive" },
  explore: { label: "🌲 EXPLORE DAY",  cssClass: "badge-explore" },
  chill:   { label: "😌 CHILL DAY",    cssClass: "badge-chill" }
};

/* ── Budget Estimates (hardcoded as these are non-trip-specific estimates) ── */
const BUDGET_ESTIMATES = [
  { category: "Hotels",                    detail: "~$180/night avg × 19 nights",       amount: 3420 },
  { category: "Restaurants",              detail: "~$80/meal × 12 meals",              amount: 960 },
  { category: "Groceries",                detail: "~$40 × 7 nights",                   amount: 280 },
  { category: "Gas",                       detail: "~1,800 miles, SUV at 22 mpg",       amount: 400 },
  { category: "Attractions / NPS entries", detail: "State parks, aquarium, caves tour", amount: 300 },
  { category: "America the Beautiful Pass",detail: "Covers 6 NPS sites on this trip",   amount: 80 },
  { category: "Misc / Emergency fund",     detail: "Snacks, parking, surprises",        amount: 500 }
];

/* ── Snack Kit Items ── */
const SNACK_KIT = [
  { emoji: "🍫", label: "Granola bars" },
  { emoji: "🍑", label: "Fruit pouches" },
  { emoji: "🥜", label: "Trail mix" },
  { emoji: "🥨", label: "Crackers" },
  { emoji: "🧀", label: "String cheese (cooler)" },
  { emoji: "🧃", label: "Juice boxes" },
  { emoji: "💧", label: "Water bottles" },
  { emoji: "🧻", label: "Wipes" },
  { emoji: "🖐",  label: "Hand sanitizer" },
  { emoji: "📦", label: "Ziploc bags" },
  { emoji: "🧽", label: "Paper towels" },
  { emoji: "🗑",  label: "Trash bags" }
];

/* ── NPS Sites on this trip (for America the Beautiful Pass appendix) ── */
const NPS_SITES = [
  { day: 4,  name: "Pinnacles National Park",       note: "Talus caves + California condors" },
  { day: 7,  name: "Muir Woods National Monument",  note: "Timed entry required — book at recreation.gov" },
  { day: 8,  name: "Point Reyes National Seashore", note: "Lighthouse, Tule Elk, Kehoe Beach" },
  { day: 14, name: "Redwood National & State Parks",note: "Fern Canyon, Stout Grove, tall trees" },
  { day: 16, name: "Oregon Caves National Monument",note: "Underground cave tours — kids love it" },
  { day: 17, name: "Crater Lake National Park",     note: "Deepest lake in USA, vivid blue water" }
];

/* ── Attractions we intentionally left out ── */
const MISSING_ATTRACTIONS = [
  {
    name: "Yosemite National Park",
    emoji: "🏔",
    category: "Inland Detour",
    why: "Yosemite sits ~4 hrs inland from San Francisco and ~5 hrs from LA. Reaching it requires a major detour off the coastal route, adding 2–3 extra days. We chose to stay on the Pacific Coast Highway and collect NPS sites on the way rather than doubling back inland.",
    howToAdd: "Best inserted after Day 5 (Monterey): drive inland to Yosemite Valley for 2 nights, then loop back to San Francisco. Or start the trip east from LAX — drive to Sequoia → Yosemite → Monterey (adds 2–3 days before Day 3)."
  },
  {
    name: "Sequoia & Kings Canyon National Parks",
    emoji: "🌲",
    category: "Inland Detour",
    why: "Home to the world's largest trees by volume, including General Sherman. Located ~4 hrs inland from Monterey or ~4 hrs from LA via CA-99/CA-180. Same problem as Yosemite — the coastal route simply doesn't pass nearby.",
    howToAdd: "Combine with Yosemite on an inland loop at the start: LAX → Sequoia (Day 2) → Kings Canyon / Yosemite Valley (Days 3–4) → Monterey (Day 5). Adds 2 days and a different departure style. Perfectly kid-friendly with the Giant Forest Museum."
  },
  {
    name: "Channel Islands National Park",
    emoji: "🏝",
    category: "Logistics Barrier",
    why: "Channel Islands requires a 1-hour ferry from Ventura and is a boat-only destination. With a 4-year-old, managing a round-trip ocean crossing, unpredictable swells, and a full-day hike was too risky and exhausting. Already noted as a deliberate skip on Day 3.",
    howToAdd: "Swap Day 3 (Santa Barbara) for a Ventura base. Take the morning ferry to Santa Cruz Island, hike Cavern Point trail (easy, 2 miles), return by afternoon. Only works if the youngest child is a confident sailor and you book Condor Express well in advance."
  },
  {
    name: "Hearst Castle & San Simeon",
    emoji: "🏰",
    category: "Trade-off: Chose Pinnacles",
    why: "Hearst Castle is directly on PCH between Santa Barbara and Monterey — we just took the inland route to Pinnacles NP on Day 4 instead. The talus caves and California condors at Pinnacles felt more unique and NPS-pass-covered; Hearst Castle entry is ~$35/person.",
    howToAdd: "Replace Pinnacles on Day 4 with a coastal route: Santa Barbara → San Simeon (Hearst Castle tour, 2 hrs) → Monterey via PCH. Equally beautiful, trades condors for gilded ceilings. Best for families who've already seen Pinnacles."
  },
  {
    name: "Santa Cruz & the Beach Boardwalk",
    emoji: "🎢",
    category: "Close but Cut",
    why: "Santa Cruz is only 45 minutes north of Monterey and has one of the best classic boardwalk amusement parks in California — the kids would love it. Cut for time: the Day 6 drive from Monterey to SF was already 2 hours, and adding a full boardwalk day would mean arriving in SF after dark.",
    howToAdd: "Add a Santa Cruz overnight between Day 5 and Day 6. Leave Monterey, spend the afternoon at the Boardwalk, stay in Santa Cruz, then drive to SF the next morning (1.5 hrs). Adds 1 day to the trip."
  },
  {
    name: "Napa Valley",
    emoji: "🍷",
    category: "Close but Cut",
    why: "Napa is only 35 miles from Windsor (Days 9–10) and arguably more famous than Sonoma/Healdsburg for wine. We skipped it because the family visit days were the priority, the trip already had Healdsburg wine country on Day 11, and Napa's tasting rooms are less kid-friendly.",
    howToAdd: "Easy half-day add from Windsor on Day 9 or 10: drive south to Yountville or Napa town (45 min), visit the Oxbow Public Market (great for kids), then return to Windsor for dinner. No extra overnight needed."
  },
  {
    name: "Mendocino",
    emoji: "🌊",
    category: "Close but Cut",
    why: "Mendocino is a stunning, headlands clifftop village directly on CA-1 between Healdsburg and Myers Flat. We drove straight through on Day 12 to save time, but it's genuinely worth a stop or overnight.",
    howToAdd: "Split the Day 12 drive (Healdsburg → Myers Flat) into two days: Healdsburg → Mendocino overnight (2 hrs on CA-1), then Mendocino → Myers Flat (1.5 hrs) the next day. Adds 1 day, but CA-1 through Mendocino's cliffs is some of the best coastal scenery on the whole route."
  },
  {
    name: "Lake Tahoe",
    emoji: "🏔",
    category: "Inland Detour",
    why: "Lake Tahoe is spectacular — crystal clear alpine lake at 6,200 ft elevation. But it's 3.5 hrs east of San Francisco, a major inland detour off the northbound coast route.",
    howToAdd: "Use as a SF day-trip alternative: replace Day 8 (Point Reyes) with a Tahoe overnight. Drive east on I-80 (3.5 hrs), spend a morning on the lake, drive back. It's a full day, but doable. Or add it as a standalone trip — Tahoe really deserves 2+ days."
  },
  {
    name: "Lassen Volcanic National Park",
    emoji: "🌋",
    category: "Inland Detour",
    why: "Lassen is California's most underrated national park — active volcanic landscape, boiling mud pots, hydrothermal pools. Located ~3 hrs east of US-101 near Redding, CA. Taking the coastal route bypasses it entirely.",
    howToAdd: "Replace the Healdsburg → Myers Flat coastal route (Day 12) with an inland route: Healdsburg → I-5 → Lassen NP overnight → back to US-101 near Eureka. Adds 1 day and trades redwood scenery for volcanic scenery."
  },
  {
    name: "Full Oregon Coast (Bandon, Heceta Head, Cape Perpetua)",
    emoji: "🦀",
    category: "Trade-off: Chose Crater Lake",
    why: "The trip's Oregon section cuts inland at Brookings to Medford → Crater Lake → Eugene, skipping virtually the entire Oregon coast north of Brookings. Highlights missed: Bandon Dunes, Thor's Well, Cape Perpetua, Sea Lion Caves, Heceta Head Lighthouse, Newport, Cannon Beach, Haystack Rock.",
    howToAdd: "Major reroute: replace Days 16–18 (Medford → Crater Lake → Eugene) with a full Oregon Coast drive (Brookings → Bandon → Newport → Lincoln City → Portland via US-101). Picks up all the coastal highlights, but you lose Crater Lake — arguably the single most spectacular day on the current itinerary."
  },
  {
    name: "Bend, Oregon & Smith Rock",
    emoji: "🧗",
    category: "Close but Cut",
    why: "Bend is Oregon's outdoor recreation hub with the Deschutes River, microbreweries, and nearby Smith Rock State Park (stunning volcanic rock formations). It's 1.5 hrs from Crater Lake and would make a great overnight — but adding it meant the Crater Lake → Portland drive became too long and fragmented.",
    howToAdd: "Replace Eugene (Day 18) with Bend: Crater Lake → Bend (1.5 hrs), overnight at McMenamins Old St. Francis School. Then Bend → Portland (3 hrs) on Day 19. Same total driving, much more scenic. Works perfectly as a 1-for-1 swap with no extra days needed."
  },
  {
    name: "Columbia River Gorge & Multnomah Falls",
    emoji: "💧",
    category: "Close but Cut",
    why: "Multnomah Falls (620 ft, the second-tallest year-round waterfall in the US) is only 30 minutes east of Portland. We didn't build it in because Day 19 is explicitly arrival day and the party starts June 11. There was no room on the itinerary.",
    howToAdd: "Easiest add of anything on this list — no extra days needed. On Day 19, take I-84 east from Eugene instead of I-5. Stop at Multnomah Falls (30 min hike to the bridge, kid-friendly), then continue west on I-84 into Portland. Arrives Portland ~1 hour later than the direct route."
  },
  {
    name: "Death Valley National Park",
    emoji: "☀️",
    category: "Wrong Season",
    why: "Death Valley in late May/early June records average highs of 105–115°F (40–46°C). Hiking or extended outdoor time is dangerous for adults and potentially life-threatening for a 4-year-old. The timing of this trip makes it a hard no.",
    howToAdd: "Plan a separate Death Valley trip in November–February when highs are 65–75°F. Not a fit for this itinerary under any reroute."
  }
];

/* ── Global Leaflet map reference ── */
let map = null;

/* ============================================================
   INIT — runs after DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  if (!window.ROUTE_DATA || !Array.isArray(window.ROUTE_DATA)) {
    console.error('ROUTE_DATA not found. Ensure data/route.js is loaded before app.js.');
    return;
  }

  initDrawer();
  buildDrawerNav();
  buildDayCards();
  buildAppendixSections();
  initMap();
  initBackToTop();
});

/* ============================================================
   NAVIGATION DRAWER
   ============================================================ */
function initDrawer() {
  const hamburger     = document.getElementById('hamburger');
  const drawer        = document.getElementById('nav-drawer');
  const overlay       = document.getElementById('drawer-overlay');
  const closeBtn      = document.getElementById('drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close drawer when a day link is clicked
  document.addEventListener('click', function (e) {
    if (e.target.closest('.drawer-day-link')) {
      closeDrawer();
    }
  });
}

function buildDrawerNav() {
  const container = document.getElementById('drawer-content');
  if (!container) return;

  // Group days by region
  const regions = groupByRegion(window.ROUTE_DATA);

  regions.forEach(function (group) {
    const regionCfg = REGION_CONFIG[group.region] || { color: '#888', icon: '📍' };
    const groupEl = document.createElement('div');
    groupEl.className = 'drawer-region-group';

    // Region header
    const headerEl = document.createElement('div');
    headerEl.className = 'drawer-region-header';
    headerEl.innerHTML =
      '<span class="region-dot" style="background:' + regionCfg.color + '"></span>' +
      '<span class="region-label">' + regionCfg.icon + ' ' + escapeHtml(group.region) + '</span>' +
      '<span class="drawer-chevron">▼</span>';

    headerEl.addEventListener('click', function () {
      groupEl.classList.toggle('collapsed');
    });

    // Days list
    const listEl = document.createElement('div');
    listEl.className = 'drawer-days-list';

    group.days.forEach(function (day) {
      const linkEl = document.createElement('div');
      linkEl.className = 'drawer-day-link';
      linkEl.setAttribute('role', 'link');
      linkEl.setAttribute('tabindex', '0');
      linkEl.innerHTML =
        '<div class="drawer-day-num">' + day.dayNumber + '</div>' +
        '<div class="drawer-day-info">' +
          '<div class="drawer-day-city">' + escapeHtml(day.overnightCity) + '</div>' +
          '<div class="drawer-day-date">' + escapeHtml(day.date) + '</div>' +
        '</div>';

      linkEl.addEventListener('click', function () {
        smoothScrollToDay(day.dayNumber);
      });
      linkEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') smoothScrollToDay(day.dayNumber);
      });

      listEl.appendChild(linkEl);
    });

    groupEl.appendChild(headerEl);
    groupEl.appendChild(listEl);
    container.appendChild(groupEl);
  });
}

function smoothScrollToDay(dayNumber) {
  const target = document.getElementById('day-' + dayNumber);
  if (target) {
    const headerHeight = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height')) || 56;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

/* ============================================================
   DAY CARDS
   ============================================================ */
function buildDayCards() {
  const container = document.getElementById('days-container');
  if (!container) return;

  let lastRegion = null;

  window.ROUTE_DATA.forEach(function (day) {
    // Insert region divider when region changes
    if (day.region !== lastRegion) {
      container.appendChild(buildRegionDivider(day.region, window.ROUTE_DATA));
      lastRegion = day.region;
    }

    container.appendChild(buildDayCard(day));
  });
}

function buildRegionDivider(regionName, allDays) {
  const regionCfg = REGION_CONFIG[regionName] || { color: '#888', icon: '📍' };
  const regionDays = allDays.filter(d => d.region === regionName);
  const firstDay = regionDays[0];
  const lastDay  = regionDays[regionDays.length - 1];

  const dayRange = firstDay.dayNumber === lastDay.dayNumber
    ? 'Day ' + firstDay.dayNumber
    : 'Days ' + firstDay.dayNumber + '–' + lastDay.dayNumber;

  const divider = document.createElement('div');
  divider.className = 'region-divider';
  divider.style.background = regionCfg.color;
  divider.innerHTML =
    '<span class="region-icon">' + regionCfg.icon + '</span>' +
    '<span>' + escapeHtml(regionName) + '</span>' +
    '<span class="region-day-range">' + dayRange + '</span>';

  return divider;
}

function buildDayCard(day) {
  const card = document.createElement('div');
  card.className = 'day-card collapsed';
  card.id = 'day-' + day.dayNumber;

  // Driving banner (always visible — outside the collapsible body)
  if (day.driveHours > 0) {
    card.appendChild(buildDriveBanner(day));
  }

  // Card header — clickable, always visible
  const header = buildCardHeader(day);
  header.addEventListener('click', function () {
    card.classList.toggle('collapsed');
  });
  card.appendChild(header);

  // Card body — hidden when collapsed
  const body = document.createElement('div');
  body.className = 'card-body';

  // Hero image
  const regionCfg = REGION_CONFIG[day.region] || { color: '#888' };
  const imgUrl = (window.IMAGE_DATA && window.IMAGE_DATA[day.dayNumber]) || null;
  const heroImg = document.createElement('div');
  heroImg.className = 'card-hero';
  heroImg.style.background = 'linear-gradient(135deg, ' + regionCfg.color + 'cc, ' + regionCfg.color + '66)';
  if (imgUrl) {
    heroImg.style.backgroundImage = 'url("' + imgUrl + '")';
    heroImg.style.backgroundSize = 'cover';
    heroImg.style.backgroundPosition = 'center';
    // Overlay for readability
    const overlay = document.createElement('div');
    overlay.className = 'card-hero-overlay';
    heroImg.appendChild(overlay);
    // Test image load; fall back to gradient on error
    const testImg = new Image();
    testImg.onerror = function () {
      heroImg.style.backgroundImage = 'none';
    };
    testImg.src = imgUrl;
  }
  const heroLabel = document.createElement('div');
  heroLabel.className = 'card-hero-label';
  heroLabel.textContent = day.overnightCity;
  heroImg.appendChild(heroLabel);
  body.appendChild(heroImg);

  // Note
  if (day.note) {
    const noteEl = document.createElement('p');
    noteEl.className = 'card-note';
    noteEl.textContent = day.note;
    body.appendChild(noteEl);
  }

  // Day 19 (Portland arrival) — special celebration banner, hotel only
  const isLastDay = day.dayNumber === window.ROUTE_DATA.length;
  if (isLastDay) {
    const partyBanner = document.createElement('div');
    partyBanner.style.cssText =
      'background:linear-gradient(135deg,#fdf4ff,#fffbeb);' +
      'border:2px solid #e879f9;border-radius:10px;padding:16px;' +
      'text-align:center;font-size:1.1rem;font-weight:700;color:#7e22ce;' +
      'margin-bottom:12px;';
    partyBanner.innerHTML =
      '🎉 YOU MADE IT! Party starts June 11.<br>' +
      '<span style="font-size:0.85rem;font-weight:400;color:#9333ea;">' +
        'LAX → Portland · 19 days · ~1,800 miles · all 5 travelers intact.' +
      '</span>';
    body.appendChild(partyBanner);

    const sectionsWrapper = document.createElement('div');
    sectionsWrapper.className = 'card-sections';
    sectionsWrapper.appendChild(buildCollapsible('🏨', 'Hotel Tonight', buildHotelContent(day), true));
    sectionsWrapper.appendChild(buildCollapsible('🌙', 'Evening / Grocery', buildEveningContent(day), true));
    body.appendChild(sectionsWrapper);
    card.appendChild(body);
    return card;
  }

  // Collapsible sections
  const sectionsWrapper = document.createElement('div');
  sectionsWrapper.className = 'card-sections';

  sectionsWrapper.appendChild(buildCollapsible('☀️', 'Morning', buildTimeOfDayContent(day, 'morning'), true));
  sectionsWrapper.appendChild(buildCollapsible('🌤', 'Afternoon', buildTimeOfDayContent(day, 'afternoon'), true));
  sectionsWrapper.appendChild(buildCollapsible('🌙', 'Evening', buildEveningContent(day), true));
  sectionsWrapper.appendChild(buildCollapsible('🏨', 'Hotel Tonight', buildHotelContent(day), true));
  sectionsWrapper.appendChild(buildCollapsible('🌧', 'Rainy Day Backup', buildRainyDayContent(day), false, true));

  body.appendChild(sectionsWrapper);
  card.appendChild(body);
  return card;
}

function buildDriveBanner(day) {
  const hours = day.driveHours;
  let colorClass = '';
  if (hours < 2)       colorClass = '';          // green (default)
  else if (hours < 3)  colorClass = 'drive-yellow';
  else if (hours < 4)  colorClass = 'drive-orange';
  else                 colorClass = 'drive-red';

  const banner = document.createElement('div');
  banner.className = 'drive-banner' + (colorClass ? ' ' + colorClass : '');

  const hoursDisplay = hours < 1
    ? Math.round(hours * 60) + ' min'
    : hours % 1 === 0
      ? hours + ' hr'
      : hours + ' hrs';

  banner.innerHTML =
    '<span class="drive-banner-icon">📍</span>' +
    '<span class="drive-banner-text">' +
      '<strong>' + escapeHtml(day.driveFrom) + ' → ' + escapeHtml(day.overnightCity) + '</strong>' +
      ' · ~' + hoursDisplay +
    '</span>' +
    '<a class="drive-maps-link" href="' + escapeAttr(day.driveMapsUrl) + '" target="_blank" rel="noopener noreferrer">' +
      'Open in Maps ↗' +
    '</a>';

  return banner;
}

function buildCardHeader(day) {
  const header = document.createElement('div');
  header.className = 'card-header';

  const numEl = document.createElement('div');
  numEl.className = 'card-day-num';
  if (day.dayNumber === 1)                        numEl.classList.add('day-start');
  if (day.dayNumber === window.ROUTE_DATA.length) numEl.classList.add('day-end');
  numEl.textContent = day.dayNumber;

  const infoEl = document.createElement('div');
  infoEl.className = 'card-header-info';

  const dateEl = document.createElement('div');
  dateEl.className = 'card-date';
  dateEl.textContent = day.date;

  const cityEl = document.createElement('div');
  cityEl.className = 'card-city';
  cityEl.textContent = day.overnightCity;

  const badgesEl = document.createElement('div');
  badgesEl.className = 'card-badges';

  // Day type badge
  const typeCfg = DAY_TYPE_CONFIG[day.dayType] || DAY_TYPE_CONFIG.explore;
  const typeBadge = document.createElement('span');
  typeBadge.className = 'badge ' + typeCfg.cssClass;
  typeBadge.textContent = typeCfg.label;
  badgesEl.appendChild(typeBadge);

  // Region badge
  const regionCfg = REGION_CONFIG[day.region] || { color: '#888', icon: '📍' };
  const regionBadge = document.createElement('span');
  regionBadge.className = 'badge badge-region';
  regionBadge.style.background = regionCfg.color + '22';
  regionBadge.style.color = regionCfg.color;
  regionBadge.textContent = regionCfg.icon + ' ' + day.region;
  badgesEl.appendChild(regionBadge);

  infoEl.appendChild(dateEl);
  infoEl.appendChild(cityEl);
  infoEl.appendChild(badgesEl);

  const chevron = document.createElement('div');
  chevron.className = 'card-chevron';
  chevron.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

  header.appendChild(numEl);
  header.appendChild(infoEl);
  header.appendChild(chevron);
  return header;
}

/* ── Collapsible Section Builder ── */
function buildCollapsible(iconEmoji, title, contentEl, openByDefault, isRainy) {
  const section = document.createElement('div');
  section.className = 'collapsible-section' + (openByDefault ? ' open' : '') + (isRainy ? ' rainy-section' : '');

  const headerEl = document.createElement('div');
  headerEl.className = 'section-header';
  headerEl.innerHTML =
    '<div class="section-header-left">' +
      '<span class="section-header-icon">' + iconEmoji + '</span>' +
      '<span>' + escapeHtml(title) + '</span>' +
    '</div>' +
    '<span class="section-chevron">▼</span>';

  headerEl.addEventListener('click', function () {
    section.classList.toggle('open');
  });

  const bodyEl = document.createElement('div');
  bodyEl.className = 'section-body';

  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'section-content';
  contentWrapper.appendChild(contentEl);

  bodyEl.appendChild(contentWrapper);
  section.appendChild(headerEl);
  section.appendChild(bodyEl);
  return section;
}

/* ── Time-of-Day Content ── */
function buildTimeOfDayContent(day, timeSlot) {
  const activityData = window.ACTIVITY_DATA && window.ACTIVITY_DATA[day.dayNumber];

  // If data has explicit morning/afternoon arrays, use them directly
  if (activityData && activityData[timeSlot] && activityData[timeSlot].length > 0) {
    return buildActivityList(activityData[timeSlot]);
  }

  // Data uses a flat activities array + scenicDrives/hiddenGem:
  // Morning → main activities list
  // Afternoon → scenic drives + hidden gem
  if (activityData) {
    if (timeSlot === 'morning' && activityData.activities && activityData.activities.length > 0) {
      return buildActivityList(activityData.activities);
    }
    if (timeSlot === 'afternoon') {
      const container = document.createElement('div');
      let hasContent = false;

      if (activityData.scenicDrives && activityData.scenicDrives.length > 0) {
        hasContent = true;
        const driveHeader = document.createElement('div');
        driveHeader.style.cssText = 'font-size:0.78rem;font-weight:700;color:#1a6b72;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;';
        driveHeader.textContent = '🚗 Scenic Drives';
        container.appendChild(driveHeader);
        activityData.scenicDrives.forEach(function (drive) {
          const driveEl = document.createElement('div');
          driveEl.style.cssText = 'font-size:0.82rem;padding:6px 0;border-bottom:1px solid #f0f0f0;';
          driveEl.innerHTML =
            '<strong>' + escapeHtml(drive.name) + '</strong>' +
            (drive.duration ? ' <span style="color:#888;font-size:0.78rem;">· ' + escapeHtml(drive.duration) + '</span>' : '') +
            (drive.description ? '<div style="color:#666;margin-top:3px;">' + escapeHtml(drive.description) + '</div>' : '');
          container.appendChild(driveEl);
        });
      }

      if (activityData.hiddenGem) {
        hasContent = true;
        const gemHeader = document.createElement('div');
        gemHeader.style.cssText = 'font-size:0.78rem;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:0.05em;margin:10px 0 6px;';
        gemHeader.textContent = '💎 Hidden Gem';
        container.appendChild(gemHeader);
        const gemEl = document.createElement('div');
        gemEl.style.cssText = 'font-size:0.82rem;background:#f5f3ff;border-radius:6px;padding:8px;';
        gemEl.innerHTML =
          '<strong>' + escapeHtml(activityData.hiddenGem.name) + '</strong>' +
          (activityData.hiddenGem.description ? '<div style="color:#555;margin-top:3px;">' + escapeHtml(activityData.hiddenGem.description) + '</div>' : '');
        container.appendChild(gemEl);
      }

      if (hasContent) return container;
    }
  }

  // Fallback placeholder
  return buildComingSoon('Activities being researched for Day ' + day.dayNumber + '…');
}

function buildEveningContent(day) {
  const foodData = window.FOOD_DATA && window.FOOD_DATA[day.dayNumber];

  if (foodData) {
    return buildFoodContent(foodData);
  }

  return buildComingSoon('Dinner options being researched for Day ' + day.dayNumber + '…');
}

function buildHotelContent(day) {
  const hotelData = window.HOTEL_DATA && window.HOTEL_DATA[day.dayNumber];

  if (hotelData) {
    // Convert optionA/B/C object structure to array
    const options = [];
    if (hotelData.optionA) options.push(hotelData.optionA);
    if (hotelData.optionB) options.push(hotelData.optionB);
    if (hotelData.optionC) options.push(hotelData.optionC);

    if (options.length > 0) {
      const wrapper = document.createElement('div');

      // Limited inventory warning banner
      if (hotelData.limitedInventoryWarning) {
        const warningEl = document.createElement('div');
        warningEl.style.cssText =
          'background:#fef9c3;border:1px solid #fde047;border-radius:6px;' +
          'padding:10px 12px;font-size:0.82rem;color:#854d0e;margin-bottom:10px;';
        warningEl.innerHTML = '⚠️ <strong>Book Early:</strong> ' + escapeHtml(hotelData.limitedInventoryWarning);
        wrapper.appendChild(warningEl);
      }

      wrapper.appendChild(buildHotelTabs(options, day.dayNumber));
      return wrapper;
    }
  }

  return buildComingSoon('Hotel options being researched for Day ' + day.dayNumber + '…');
}

function buildRainyDayContent(day) {
  const activityData = window.ACTIVITY_DATA && window.ACTIVITY_DATA[day.dayNumber];

  if (activityData && activityData.rainyDay) {
    const container = document.createElement('div');
    container.className = 'rainy-content';
    container.style.cssText = 'background:#eff6ff;border-radius:8px;padding:12px;';

    const rainy = activityData.rainyDay;

    if (typeof rainy === 'string') {
      container.textContent = rainy;
    } else if (Array.isArray(rainy)) {
      const ul = document.createElement('ul');
      rainy.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    } else if (typeof rainy === 'object') {
      // Object form: { name, description, price, link, icon }
      const icon = rainy.icon || '🌧';
      const nameEl = document.createElement('div');
      nameEl.style.cssText = 'font-weight:700;font-size:0.9rem;margin-bottom:4px;';
      nameEl.textContent = icon + ' ' + (rainy.name || 'Rainy Day Option');
      container.appendChild(nameEl);

      if (rainy.description) {
        const descEl = document.createElement('div');
        descEl.style.cssText = 'font-size:0.82rem;color:#374151;line-height:1.4;';
        descEl.textContent = rainy.description;
        container.appendChild(descEl);
      }

      if (rainy.price) {
        const priceEl = document.createElement('div');
        priceEl.style.cssText = 'font-size:0.78rem;color:#6b7280;margin-top:4px;';
        priceEl.textContent = '💰 ' + rainy.price;
        container.appendChild(priceEl);
      }

      const rainyUrl = rainy.url || rainy.link;
      if (rainyUrl) {
        const linkEl = document.createElement('a');
        linkEl.href = rainyUrl;
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
        linkEl.style.cssText = 'display:block;margin-top:6px;font-size:0.8rem;font-weight:600;';
        linkEl.textContent = 'More info ↗';
        container.appendChild(linkEl);
      }
    }

    return container;
  }

  return buildComingSoon('Rainy day backup plans coming soon…');
}

function buildComingSoon(message) {
  const el = document.createElement('div');
  el.className = 'coming-soon';
  el.innerHTML = '⏳ ' + escapeHtml(message || 'Details coming soon…');
  return el;
}

/* ── Activity List ── */
function buildActivityList(activities) {
  const list = document.createElement('div');
  list.className = 'activity-list';

  activities.forEach(function (activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';

    const isNps = activity.npsCovered === true || activity.nps === true;
    const priceStr = activity.price ? String(activity.price) : '';
    const isFree = !priceStr || priceStr === '0' || /^free/i.test(priceStr);
    const priceDisplay = isFree
      ? '<span class="badge badge-free">FREE</span>'
      : '<span class="activity-price">' + escapeHtml(priceStr) + '</span>';

    const headerEl = document.createElement('div');
    headerEl.className = 'activity-header';
    headerEl.innerHTML =
      '<span class="activity-icon">' + (activity.icon || '📍') + '</span>' +
      '<div class="activity-main">' +
        '<div class="activity-name">' + escapeHtml(activity.name || 'Activity') + '</div>' +
        (activity.description
          ? '<div class="activity-desc">' + escapeHtml(activity.description) + ' ' + priceDisplay + '</div>'
          : '<div class="activity-desc">' + priceDisplay + '</div>') +
      '</div>' +
      '<span class="activity-expand-chevron">▼</span>';

    headerEl.addEventListener('click', function () {
      card.classList.toggle('expanded');
    });

    const detailEl = document.createElement('div');
    detailEl.className = 'activity-detail';

    const detailInner = document.createElement('div');
    detailInner.className = 'activity-detail-inner';

    // Support both 'detail' and 'description' fields
    const detailText = activity.detail || activity.description;
    if (detailText) {
      const p = document.createElement('p');
      p.textContent = detailText;
      detailInner.appendChild(p);
    }

    // Booking note (e.g. Muir Woods timed entry warning)
    if (activity.bookingNote) {
      const bookNoteEl = document.createElement('div');
      bookNoteEl.style.cssText =
        'background:#fef9c3;border:1px solid #fde047;border-radius:6px;' +
        'padding:8px 10px;font-size:0.78rem;color:#854d0e;margin-top:6px;line-height:1.4;';
      bookNoteEl.innerHTML = '⚠️ ' + escapeHtml(activity.bookingNote);
      detailInner.appendChild(bookNoteEl);
    }

    if (activity.duration) {
      const durEl = document.createElement('div');
      durEl.style.cssText = 'font-size:0.78rem;color:#6b7280;margin-top:4px;';
      durEl.textContent = '⏱ ' + activity.duration;
      detailInner.appendChild(durEl);
    }

    const badgesContainer = document.createElement('div');
    badgesContainer.className = 'activity-badges';
    if (isNps) {
      const npsBadge = document.createElement('span');
      npsBadge.className = 'badge badge-nps';
      npsBadge.textContent = '🏕 America the Beautiful Pass';
      badgesContainer.appendChild(npsBadge);
    }
    if (activity.kidFriendly === true) {
      badgesContainer.appendChild(makeBadge('badge-kid', '👶 Kid Friendly'));
    }
    if (badgesContainer.children.length > 0) {
      detailInner.appendChild(badgesContainer);
    }

    const activityUrl = activity.url || activity.link;
    if (activityUrl) {
      const link = document.createElement('a');
      link.href = activityUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'More info ↗';
      link.style.display = 'block';
      link.style.marginTop = '6px';
      link.style.fontSize = '0.8rem';
      link.style.fontWeight = '600';
      detailInner.appendChild(link);
    }

    detailEl.appendChild(detailInner);
    card.appendChild(headerEl);
    card.appendChild(detailEl);
    list.appendChild(card);
  });

  return list;
}

/* ── Hotel Tabs ── */
function buildHotelTabs(options, dayNumber) {
  const tabContainer = document.createElement('div');
  tabContainer.className = 'hotel-tabs';

  const tabButtons = document.createElement('div');
  tabButtons.className = 'hotel-tab-buttons';

  const tabPanels = document.createElement('div');

  const labels = ['Option A', 'Option B', 'Option C'];

  options.slice(0, 3).forEach(function (hotel, i) {
    const btn = document.createElement('button');
    btn.className = 'hotel-tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = labels[i] || ('Option ' + (i + 1));
    btn.setAttribute('data-tab', i);
    btn.addEventListener('click', function () {
      tabContainer.querySelectorAll('.hotel-tab-btn').forEach(b => b.classList.remove('active'));
      tabContainer.querySelectorAll('.hotel-tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      tabContainer.querySelector('.hotel-tab-panel[data-panel="' + i + '"]').classList.add('active');
    });
    tabButtons.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'hotel-tab-panel' + (i === 0 ? ' active' : '');
    panel.setAttribute('data-panel', i);

    // Hotel name
    const nameEl = document.createElement('div');
    nameEl.className = 'hotel-name';
    nameEl.textContent = hotel.name || 'Hotel Option ' + (i + 1);
    panel.appendChild(nameEl);

    // Meta row
    const metaEl = document.createElement('div');
    metaEl.className = 'hotel-meta';
    if (hotel.stars) {
      const starsEl = document.createElement('span');
      starsEl.className = 'hotel-stars';
      starsEl.textContent = '★'.repeat(Math.floor(hotel.stars));
      metaEl.appendChild(starsEl);
    }
    if (hotel.pricePerNight) {
      const priceEl = document.createElement('span');
      priceEl.className = 'hotel-price';
      priceEl.textContent = hotel.pricePerNight + '/night';
      metaEl.appendChild(priceEl);
    }
    panel.appendChild(metaEl);

    // Room note (data uses roomConfig field)
    const roomNoteText = hotel.roomConfig || hotel.roomNote;
    if (roomNoteText) {
      const roomNoteEl = document.createElement('div');
      roomNoteEl.className = 'hotel-room-note';
      roomNoteEl.textContent = roomNoteText;
      panel.appendChild(roomNoteEl);
    }

    // Amenity badges
    const amenitiesEl = document.createElement('div');
    amenitiesEl.className = 'hotel-amenities';
    if (hotel.pool)             amenitiesEl.appendChild(makeBadge('badge-pool', '🏊 Pool'));
    if (hotel.freeBreakfast)    amenitiesEl.appendChild(makeBadge('badge-breakfast', '🍳 Free Breakfast'));
    if (hotel.separateRoom)     amenitiesEl.appendChild(makeBadge('badge-separate-room', '🚪 Separate Room'));
    if (hotel.upgradePick || hotel.upgradeNote) amenitiesEl.appendChild(makeBadge('badge-upgrade', '⭐ Upgrade Pick'));
    if (hotel.limitedInventory) amenitiesEl.appendChild(makeBadge('badge-limited', '⚡ Book Early'));
    if (amenitiesEl.children.length > 0) panel.appendChild(amenitiesEl);

    // Why chosen reason
    const reasonText = hotel.reason || hotel.upgradeNote;
    if (reasonText) {
      const reasonEl = document.createElement('div');
      reasonEl.style.cssText = 'font-size:0.8rem;color:#555;margin-top:6px;line-height:1.4;';
      reasonEl.textContent = reasonText;
      panel.appendChild(reasonEl);
    }

    // Book Now button
    if (hotel.bookingUrl) {
      const bookBtn = document.createElement('a');
      bookBtn.className = 'book-now-btn';
      bookBtn.href = hotel.bookingUrl;
      bookBtn.target = '_blank';
      bookBtn.rel = 'noopener noreferrer';
      bookBtn.textContent = 'Book Now →';
      panel.appendChild(bookBtn);
    }

    tabPanels.appendChild(panel);
  });

  // If fewer than 3 options, add placeholder tabs
  for (let i = options.length; i < 3; i++) {
    const btn = document.createElement('button');
    btn.className = 'hotel-tab-btn';
    btn.textContent = labels[i];
    btn.setAttribute('data-tab', i);
    btn.style.opacity = '0.4';
    btn.style.cursor = 'default';
    tabButtons.appendChild(btn);

    const panel = document.createElement('div');
    panel.className = 'hotel-tab-panel';
    panel.setAttribute('data-panel', i);
    panel.appendChild(buildComingSoon('Option ' + labels[i].slice(-1) + ' coming soon…'));
    tabPanels.appendChild(panel);
  }

  tabContainer.appendChild(tabButtons);
  tabContainer.appendChild(tabPanels);
  return tabContainer;
}

/* ── Food Content ── */
function buildFoodContent(foodData) {
  const list = document.createElement('div');
  list.className = 'food-list';

  const isGroceryNight = foodData.dinnerType === 'grocery';

  /* ── Dinner restaurant card ── */
  if (foodData.dinner && !isGroceryNight) {
    const dinner = foodData.dinner;
    const card = document.createElement('div');
    card.className = 'food-card';

    const headerRow = document.createElement('div');
    headerRow.className = 'food-card-header';
    const emojiEl = document.createElement('span');
    emojiEl.className = 'food-emoji';
    emojiEl.textContent = '🍽';
    const nameEl = document.createElement('div');
    nameEl.className = 'food-name';
    nameEl.textContent = dinner.name || 'Dinner';
    nameEl.style.flex = '1';
    headerRow.appendChild(emojiEl);
    headerRow.appendChild(nameEl);
    const priceText = dinner.pricePerPerson || dinner.price;
    if (priceText) {
      const priceEl = document.createElement('div');
      priceEl.className = 'food-price';
      priceEl.textContent = priceText + '/person';
      headerRow.appendChild(priceEl);
    }
    card.appendChild(headerRow);

    const badgeRow = document.createElement('div');
    badgeRow.className = 'card-badges';
    badgeRow.style.padding = '0 0 6px';
    badgeRow.appendChild(makeBadge('badge-sitdown', '🍽 Sit-Down Dinner'));
    if (dinner.reservationNeeded) {
      badgeRow.appendChild(makeBadge('badge-reservation', '📅 Reservation Needed'));
    }
    card.appendChild(badgeRow);

    if (dinner.cuisine) {
      const cuisineEl = document.createElement('div');
      cuisineEl.className = 'food-cuisine';
      cuisineEl.textContent = dinner.cuisine;
      card.appendChild(cuisineEl);
    }

    const signatureDish = dinner.signatureDish || dinner.dish;
    if (signatureDish) {
      const dishEl = document.createElement('div');
      dishEl.className = 'food-dish';
      dishEl.textContent = '✦ ' + signatureDish;
      card.appendChild(dishEl);
    }

    if (dinner.familyPrice) {
      const fpEl = document.createElement('div');
      fpEl.style.cssText = 'font-size:0.78rem;color:#374151;margin-top:4px;font-weight:600;';
      fpEl.textContent = '👨‍👩‍👧‍👦 ' + dinner.familyPrice;
      card.appendChild(fpEl);
    }

    if (dinner.whyChosen) {
      const whyEl = document.createElement('div');
      whyEl.style.cssText = 'font-size:0.78rem;color:#555;margin-top:6px;line-height:1.4;font-style:italic;';
      whyEl.textContent = dinner.whyChosen;
      card.appendChild(whyEl);
    }

    if (dinner.reservationNeeded && dinner.reserveLink) {
      const resBtn = document.createElement('a');
      resBtn.className = 'food-link';
      resBtn.style.cssText = 'display:inline-block;margin-top:8px;background:#1a6b72;color:#fff;padding:6px 12px;border-radius:6px;text-decoration:none;font-size:0.8rem;font-weight:600;';
      resBtn.href = dinner.reserveLink;
      resBtn.target = '_blank';
      resBtn.rel = 'noopener noreferrer';
      resBtn.textContent = 'Reserve →';
      card.appendChild(resBtn);
    }

    if (dinner.reserveNote) {
      const resNoteEl = document.createElement('div');
      resNoteEl.style.cssText = 'font-size:0.75rem;color:#888;margin-top:4px;';
      resNoteEl.textContent = '📌 ' + dinner.reserveNote;
      card.appendChild(resNoteEl);
    }

    const dinnerUrl = dinner.mapsLink || dinner.websiteLink || dinner.url;
    if (dinnerUrl) {
      const link = document.createElement('a');
      link.className = 'food-link';
      link.href = dinnerUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'block';
      link.style.marginTop = '6px';
      link.textContent = 'View on Maps / Website ↗';
      card.appendChild(link);
    }

    list.appendChild(card);
  }

  /* ── Grocery night card ── */
  if (isGroceryNight && foodData.groceryStore) {
    const store = foodData.groceryStore;
    const card = document.createElement('div');
    card.className = 'food-card grocery';

    const headerRow = document.createElement('div');
    headerRow.className = 'food-card-header';
    const emojiEl = document.createElement('span');
    emojiEl.className = 'food-emoji';
    emojiEl.textContent = '🛒';
    const nameEl = document.createElement('div');
    nameEl.className = 'food-name';
    nameEl.textContent = store.name || 'Grocery Store';
    nameEl.style.flex = '1';
    headerRow.appendChild(emojiEl);
    headerRow.appendChild(nameEl);
    card.appendChild(headerRow);

    const badgeRow = document.createElement('div');
    badgeRow.className = 'card-badges';
    badgeRow.style.padding = '0 0 6px';
    badgeRow.appendChild(makeBadge('badge-grocery', '🛒 Grocery Night'));
    card.appendChild(badgeRow);

    if (store.distance) {
      const distEl = document.createElement('div');
      distEl.style.cssText = 'font-size:0.8rem;color:#555;margin-bottom:6px;';
      distEl.textContent = '📍 ' + store.distance;
      card.appendChild(distEl);
    }

    if (store.noCookMeals && store.noCookMeals.length > 0) {
      const mealsHeader = document.createElement('div');
      mealsHeader.style.cssText = 'font-size:0.78rem;font-weight:700;color:#374151;margin-bottom:4px;';
      mealsHeader.textContent = '🥗 No-cook meal ideas:';
      card.appendChild(mealsHeader);
      const ul = document.createElement('ul');
      ul.style.cssText = 'font-size:0.8rem;color:#555;margin:0;padding-left:16px;';
      store.noCookMeals.forEach(function (meal) {
        const li = document.createElement('li');
        li.textContent = meal;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    const storeUrl = store.mapsLink || store.url;
    if (storeUrl) {
      const link = document.createElement('a');
      link.className = 'food-link';
      link.href = storeUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'block';
      link.style.marginTop = '8px';
      link.textContent = 'Open in Maps ↗';
      card.appendChild(link);
    }

    list.appendChild(card);
  }

  /* ── Lunch card ── */
  if (foodData.lunch) {
    const lunch = foodData.lunch;
    const card = document.createElement('div');
    card.className = 'food-card';
    card.style.cssText = 'opacity:0.85;';

    const headerRow = document.createElement('div');
    headerRow.className = 'food-card-header';
    const emojiEl = document.createElement('span');
    emojiEl.className = 'food-emoji';
    emojiEl.textContent = lunch.type === 'packed' ? '🎒' : '🥗';
    const nameEl = document.createElement('div');
    nameEl.className = 'food-name';
    nameEl.textContent = lunch.name || (lunch.type === 'packed' ? 'Packed Lunch' : 'Lunch');
    nameEl.style.flex = '1';
    headerRow.appendChild(emojiEl);
    headerRow.appendChild(nameEl);
    card.appendChild(headerRow);

    const badgeRow = document.createElement('div');
    badgeRow.className = 'card-badges';
    badgeRow.style.padding = '0 0 6px';
    badgeRow.appendChild(makeBadge('badge-lunch', lunch.type === 'packed' ? '🎒 Packed Lunch' : '🥗 Lunch'));
    card.appendChild(badgeRow);

    if (lunch.cuisine) {
      const cuisineEl = document.createElement('div');
      cuisineEl.className = 'food-cuisine';
      cuisineEl.textContent = lunch.cuisine;
      card.appendChild(cuisineEl);
    }

    const lunchNote = lunch.note || lunch.whyChosen;
    if (lunchNote) {
      const noteEl = document.createElement('div');
      noteEl.style.cssText = 'font-size:0.8rem;color:#555;margin-top:4px;line-height:1.4;';
      noteEl.textContent = lunchNote;
      card.appendChild(noteEl);
    }

    if (lunch.costNote) {
      const costEl = document.createElement('div');
      costEl.style.cssText = 'font-size:0.78rem;color:#6b7280;margin-top:4px;';
      costEl.textContent = '💰 ' + lunch.costNote;
      card.appendChild(costEl);
    }

    const lunchUrl = lunch.mapsLink || lunch.url;
    if (lunchUrl) {
      const link = document.createElement('a');
      link.className = 'food-link';
      link.href = lunchUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.style.display = 'block';
      link.style.marginTop = '6px';
      link.textContent = 'Open in Maps ↗';
      card.appendChild(link);
    }

    list.appendChild(card);
  }

  if (list.children.length === 0) {
    list.appendChild(buildComingSoon('Dining recommendations coming soon…'));
  }

  return list;
}

/* ── Utility: Make Badge Element ── */
function makeBadge(cssClass, text) {
  const span = document.createElement('span');
  span.className = 'badge ' + cssClass;
  span.textContent = text;
  return span;
}

/* ============================================================
   LEAFLET MAP
   ============================================================ */
function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || !window.L) {
    console.warn('Leaflet or map container not available.');
    return;
  }

  map = L.map('map', { zoomControl: true, scrollWheelZoom: false });

  // OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  const routeData = window.ROUTE_DATA;

  // Build polyline from overnight coordinates
  const latLngs = routeData.map(function (day) {
    return [day.lat, day.lng];
  });

  L.polyline(latLngs, {
    color: '#1a6b72',
    weight: 3,
    opacity: 0.75,
    dashArray: null
  }).addTo(map);

  // Add numbered circle markers
  const bounds = [];

  routeData.forEach(function (day) {
    const regionCfg = REGION_CONFIG[day.region] || { color: '#1a6b72' };
    let markerColor = regionCfg.color;
    if (day.dayNumber === 1)                  markerColor = '#22c55e';
    if (day.dayNumber === routeData.length)   markerColor = '#e8a020';

    const markerIcon = L.divIcon({
      className: '',
      html:
        '<div style="' +
          'width:28px;height:28px;border-radius:50%;' +
          'background:' + markerColor + ';' +
          'color:#fff;font-weight:700;font-size:11px;' +
          'display:flex;align-items:center;justify-content:center;' +
          'border:2px solid rgba(255,255,255,0.85);' +
          'box-shadow:0 2px 6px rgba(0,0,0,0.25);' +
          'font-family:Inter,sans-serif;' +
        '">' + day.dayNumber + '</div>',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });

    const marker = L.marker([day.lat, day.lng], { icon: markerIcon }).addTo(map);

    const popupHtml =
      '<div class="map-popup-day">Day ' + day.dayNumber + '</div>' +
      '<div class="map-popup-city">' + escapeHtml(day.overnightCity) + '</div>' +
      '<div class="map-popup-date">' + escapeHtml(day.date) + '</div>' +
      '<a class="map-popup-link" href="#day-' + day.dayNumber + '" onclick="document.getElementById(\'day-' + day.dayNumber + '\').scrollIntoView({behavior:\'smooth\'});return false;">→ Go to Day ' + day.dayNumber + '</a>';

    marker.bindPopup(popupHtml, { maxWidth: 200 });

    bounds.push([day.lat, day.lng]);
  });

  // Add small grey dot markers for activities if available
  if (window.ACTIVITY_DATA) {
    Object.values(window.ACTIVITY_DATA).forEach(function (dayActivities) {
      // Support both flat activities array and morning/afternoon/evening sub-arrays
      const activityArrays = [];
      if (Array.isArray(dayActivities.activities)) {
        activityArrays.push(dayActivities.activities);
      }
      ['morning', 'afternoon', 'evening'].forEach(function (slot) {
        if (Array.isArray(dayActivities[slot])) activityArrays.push(dayActivities[slot]);
      });

      activityArrays.forEach(function (arr) {
        arr.forEach(function (activity) {
          if (activity.lat && activity.lng) {
            const dotIcon = L.circleMarker([activity.lat, activity.lng], {
              radius: 5,
              fillColor: '#999',
              color: '#fff',
              weight: 1,
              fillOpacity: 0.7
            }).addTo(map);
            if (activity.name) {
              dotIcon.bindTooltip(activity.name, { direction: 'top' });
            }
          }
        });
      });
    });
  }

  // Fit map to bounds
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [24, 24] });
  }
}

/* ── Build full-route Google Maps URL ── */
function openFullRouteInMaps() {
  if (!window.ROUTE_DATA) return;

  const cities = window.ROUTE_DATA.map(function (day) {
    return day.overnightCity.replace(/\s+/g, '+');
  });

  // Google Maps directions URL with waypoints (max ~10 reliable, use start/end + major waypoints)
  const url = 'https://www.google.com/maps/dir/' + cities.join('/');
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ============================================================
   APPENDIX SECTIONS
   ============================================================ */
function buildAppendixSections() {
  buildSnackKitAppendix();
  buildBudgetAppendix();
  buildPassAppendix();
  buildMissingAttractionsAppendix();
}

/* ── Snack Kit ── */
function buildSnackKitAppendix() {
  const section = document.getElementById('appendix-snacks');
  if (!section) return;

  const card = document.createElement('div');
  card.className = 'appendix-card';

  const header = document.createElement('div');
  header.className = 'appendix-header';
  header.innerHTML = '<span class="appendix-icon">🍎</span><h2>Road Trip Snack Kit</h2>';

  const body = document.createElement('div');
  body.className = 'appendix-body';

  // Prefer window.FOOD_DATA.snackKit if available; fall back to hardcoded SNACK_KIT
  const snackKitData = window.FOOD_DATA && window.FOOD_DATA.snackKit;

  const intro = document.createElement('p');
  intro.style.fontSize = '0.85rem';
  intro.style.color = '#666';
  intro.style.marginBottom = '12px';
  intro.textContent = snackKitData && snackKitData.intro
    ? snackKitData.intro
    : 'Pack these before you leave. Click items to check them off.';
  body.appendChild(intro);

  const grid = document.createElement('div');
  grid.className = 'snack-grid';

  // Build normalized items array (snackKit items are plain strings; SNACK_KIT items are {emoji,label})
  let snackItems;
  if (snackKitData && snackKitData.items && snackKitData.items.length > 0) {
    snackItems = snackKitData.items.map(function (s) { return { emoji: '✔', label: s }; });
  } else {
    snackItems = SNACK_KIT;
  }

  snackItems.forEach(function (item) {
    const itemEl = document.createElement('div');
    itemEl.className = 'snack-item';

    const checkEl = document.createElement('div');
    checkEl.className = 'snack-check';
    checkEl.setAttribute('role', 'checkbox');
    checkEl.setAttribute('aria-checked', 'false');
    checkEl.setAttribute('tabindex', '0');

    function toggleCheck() {
      const isChecked = checkEl.classList.toggle('checked');
      checkEl.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      checkEl.textContent = isChecked ? '✓' : '';
      itemEl.style.opacity = isChecked ? '0.5' : '1';
    }

    checkEl.addEventListener('click', toggleCheck);
    checkEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCheck(); }
    });

    const labelEl = document.createElement('span');
    labelEl.textContent = (item.emoji !== '✔' ? item.emoji + ' ' : '') + item.label;

    itemEl.appendChild(checkEl);
    itemEl.appendChild(labelEl);
    grid.appendChild(itemEl);
  });

  body.appendChild(grid);
  card.appendChild(header);
  card.appendChild(body);
  section.appendChild(card);
}

/* ── Budget Summary ── */
function buildBudgetAppendix() {
  const section = document.getElementById('appendix-budget');
  if (!section) return;

  const card = document.createElement('div');
  card.className = 'appendix-card';

  const header = document.createElement('div');
  header.className = 'appendix-header';
  header.innerHTML = '<span class="appendix-icon">💰</span><h2>Budget Summary</h2>';

  const body = document.createElement('div');
  body.className = 'appendix-body';

  const table = document.createElement('table');
  table.className = 'budget-table';

  const thead = document.createElement('thead');
  thead.innerHTML =
    '<tr>' +
      '<th>Category</th>' +
      '<th>Detail</th>' +
      '<th>Est. Cost</th>' +
    '</tr>';
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  let total = 0;

  BUDGET_ESTIMATES.forEach(function (row) {
    total += row.amount;
    const tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + escapeHtml(row.category) + '</td>' +
      '<td style="color:#666;font-size:0.82rem;">' + escapeHtml(row.detail) + '</td>' +
      '<td>$' + row.amount.toLocaleString() + '</td>';
    tbody.appendChild(tr);
  });

  const totalRow = document.createElement('tr');
  totalRow.className = 'total-row';
  totalRow.innerHTML =
    '<td colspan="2"><strong>TOTAL ESTIMATED TRIP COST</strong></td>' +
    '<td><strong>$' + total.toLocaleString() + '</strong></td>';
  tbody.appendChild(totalRow);

  table.appendChild(tbody);
  body.appendChild(table);

  const noteEl = document.createElement('p');
  noteEl.className = 'budget-note';
  noteEl.textContent =
    '* Estimates based on 5 travelers. Hotel costs are per-room estimates. Actual costs will vary. ' +
    'Flight costs not included. This is a planning guide, not a guarantee.';
  body.appendChild(noteEl);

  card.appendChild(header);
  card.appendChild(body);
  section.appendChild(card);
}

/* ── America the Beautiful Pass ── */
function buildPassAppendix() {
  const section = document.getElementById('appendix-pass');
  if (!section) return;

  const card = document.createElement('div');
  card.className = 'appendix-card';

  const header = document.createElement('div');
  header.className = 'appendix-header';
  header.style.background = '#166534';
  header.innerHTML = '<span class="appendix-icon">🏕</span><h2>America the Beautiful Pass</h2>';

  const body = document.createElement('div');
  body.className = 'appendix-body';

  const passInfo = document.createElement('div');
  passInfo.className = 'pass-info';

  const headline = document.createElement('div');
  headline.className = 'pass-info-headline';
  headline.textContent = '$80 covers 6 NPS sites on this trip — a no-brainer.';
  passInfo.appendChild(headline);

  const priceNote = document.createElement('p');
  priceNote.className = 'pass-price-note';
  priceNote.textContent =
    'The America the Beautiful Annual Pass grants free entry to all federal lands ' +
    'for one full year from date of purchase. For a family visiting 6 sites on this trip alone, ' +
    'individual entry fees would easily exceed $200. Buy one pass, use it everywhere.';
  passInfo.appendChild(priceNote);

  // Sites grid
  const sitesTitle = document.createElement('p');
  sitesTitle.style.fontWeight = '600';
  sitesTitle.style.fontSize = '0.88rem';
  sitesTitle.style.marginBottom = '6px';
  sitesTitle.textContent = 'Sites covered on this trip:';
  passInfo.appendChild(sitesTitle);

  const sitesGrid = document.createElement('div');
  sitesGrid.className = 'pass-sites-grid';

  NPS_SITES.forEach(function (site) {
    const siteEl = document.createElement('div');
    siteEl.className = 'pass-site-item';
    siteEl.innerHTML =
      '<span>🏕</span>' +
      '<div>' +
        '<div style="font-weight:700;font-size:0.8rem;">' + escapeHtml(site.name) + '</div>' +
        '<div style="font-size:0.72rem;font-weight:400;opacity:0.8;">' + escapeHtml(site.note) + '</div>' +
      '</div>';
    sitesGrid.appendChild(siteEl);
  });

  passInfo.appendChild(sitesGrid);

  const muirWarning = document.createElement('div');
  muirWarning.style.cssText = 'background:#fef9c3;border:1px solid #fde047;border-radius:6px;padding:10px 12px;font-size:0.82rem;color:#854d0e;';
  muirWarning.innerHTML = '⚠️ <strong>Muir Woods</strong>: Pass covers the fee, but you STILL need a timed entry reservation. Book at <a href="https://www.recreation.gov" target="_blank" rel="noopener">recreation.gov</a> well in advance — they sell out weeks ahead.';
  passInfo.appendChild(muirWarning);

  const buyLink = document.createElement('a');
  buyLink.className = 'pass-buy-link';
  buyLink.href = 'https://store.usgs.gov/america-the-beautiful-passes';
  buyLink.target = '_blank';
  buyLink.rel = 'noopener noreferrer';
  buyLink.innerHTML = '🛒 Buy Pass at store.usgs.gov';
  passInfo.appendChild(buyLink);

  const altNote = document.createElement('p');
  altNote.style.fontSize = '0.78rem';
  altNote.style.color = '#666';
  altNote.style.marginTop = '4px';
  altNote.textContent = 'Or purchase at any NPS entrance station (Pinnacles is your first stop on Day 4).';
  passInfo.appendChild(altNote);

  body.appendChild(passInfo);
  card.appendChild(header);
  card.appendChild(body);
  section.appendChild(card);
}

/* ── What We Left Out ── */
function buildMissingAttractionsAppendix() {
  const section = document.getElementById('appendix-missing');
  if (!section) return;

  const card = document.createElement('div');
  card.className = 'appendix-card';

  const header = document.createElement('div');
  header.className = 'appendix-header';
  header.style.background = '#7c3aed';
  header.innerHTML = '<span class="appendix-icon">🗺</span><h2>What We Left Out — And Why</h2>';

  const body = document.createElement('div');
  body.className = 'appendix-body';

  const intro = document.createElement('p');
  intro.style.cssText = 'font-size:0.85rem;color:#555;margin-bottom:18px;line-height:1.5;';
  intro.textContent =
    'Every road trip is a series of trade-offs. Below are the major destinations we consciously ' +
    'skipped, why they didn\'t fit, and exactly where you\'d slot them if you want to add them later.';
  body.appendChild(intro);

  // Group by category
  const categories = [];
  const catMap = new Map();
  MISSING_ATTRACTIONS.forEach(function (item) {
    if (!catMap.has(item.category)) {
      const group = { label: item.category, items: [] };
      catMap.set(item.category, group);
      categories.push(group);
    }
    catMap.get(item.category).items.push(item);
  });

  const CATEGORY_COLORS = {
    'Inland Detour':             '#b45309',
    'Logistics Barrier':         '#dc2626',
    'Trade-off: Chose Pinnacles':'#0369a1',
    'Trade-off: Chose Crater Lake':'#0369a1',
    'Close but Cut':             '#16a34a',
    'Wrong Season':              '#9333ea'
  };

  categories.forEach(function (cat) {
    const catColor = CATEGORY_COLORS[cat.label] || '#555';

    const catLabel = document.createElement('div');
    catLabel.style.cssText =
      'font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;' +
      'color:' + catColor + ';margin:18px 0 8px;padding-left:2px;';
    catLabel.textContent = cat.label;
    body.appendChild(catLabel);

    cat.items.forEach(function (item) {
      const itemEl = document.createElement('div');
      itemEl.className = 'missing-item';

      const titleRow = document.createElement('div');
      titleRow.className = 'missing-title';
      titleRow.innerHTML =
        '<span class="missing-emoji">' + item.emoji + '</span>' +
        '<strong>' + escapeHtml(item.name) + '</strong>';
      itemEl.appendChild(titleRow);

      const whyEl = document.createElement('div');
      whyEl.className = 'missing-why';
      whyEl.innerHTML =
        '<span class="missing-label">Why we skipped it:</span> ' +
        escapeHtml(item.why);
      itemEl.appendChild(whyEl);

      const howEl = document.createElement('div');
      howEl.className = 'missing-how';
      howEl.innerHTML =
        '<span class="missing-label missing-label-add">Where it fits if you add it:</span> ' +
        escapeHtml(item.howToAdd);
      itemEl.appendChild(howEl);

      body.appendChild(itemEl);
    });
  });

  card.appendChild(header);
  card.appendChild(body);
  section.appendChild(card);
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   UTILITIES
   ============================================================ */

/** Group ROUTE_DATA days by region, preserving encounter order */
function groupByRegion(days) {
  const groups = [];
  const seen = new Map();

  days.forEach(function (day) {
    if (!seen.has(day.region)) {
      const group = { region: day.region, days: [] };
      seen.set(day.region, group);
      groups.push(group);
    }
    seen.get(day.region).days.push(day);
  });

  return groups;
}

/** Escape HTML special characters for safe DOM insertion */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Escape a string for use in an HTML attribute value */
function escapeAttr(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

/* Expose openFullRouteInMaps globally for the inline onclick in index.html */
window.openFullRouteInMaps = openFullRouteInMaps;
