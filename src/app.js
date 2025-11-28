import './app.css'

const groupMembers = [
  { name: 'Saurabh Pinjarkar' },
  { name: 'Prajakta More' },
  { name: 'Atharva Rajandekar' },
  { name: 'Vaibhav Gorme' }
]

const heroStats = [
  { label: 'Weekend loops planned', value: '18' },
  { label: 'Friends who voted', value: '42' },
  { label: 'Avg. excitement score', value: '4.9/5' }
]

const destinations = [
  {
    city: 'Goa',
    region: 'west-coast',
    budget: 'save',
    mood: 'Beach hostels · Scooty loops',
    blurb: 'Two-night plan with sunrise cycles and sunset cafés that still fit a student budget.',
    travel: 'Sleeper bus · ₹9k per person',
    link: 'Konkan rail + scooty rentals',
    season: 'Nov - Feb',
    duration: '3 days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Manali',
    region: 'north',
    budget: 'comfort',
    mood: 'Cafe hopping · Easy treks',
    blurb: 'Slow mornings, digital-detox afternoons, and a checklist that convinces parents easily.',
    travel: 'Train + Volvo · ₹12k per person',
    link: 'Shareable Notion itinerary',
    season: 'Mar - Jun',
    duration: '5 days',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Hampi',
    region: 'south-interior',
    budget: 'save',
    mood: 'Sketch walks · Heritage',
    blurb: 'Golden-hour ruin sketches, coracle rides, and ₹70 thalis after long cycling loops.',
    travel: 'Overnight bus · ₹7k per person',
    link: 'Google My Maps pins',
    season: 'Dec - Feb',
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Meghalaya',
    region: 'northeast',
    budget: 'invest',
    mood: 'Root bridges · Rain journaling',
    blurb: 'Monsoon hikes, Dawki kayaks, and clean-stay picks in a minimalist PDF you can mail home.',
    travel: 'Flight + shared cab · ₹22k per person',
    link: 'Printable weekend brief',
    season: 'Jun - Sep',
    duration: '6 days',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Udaipur',
    region: 'west',
    budget: 'comfort',
    mood: 'Lake walks · Culture notebooks',
    blurb: 'Sunrise ghats, rooftop dinners, and palace sketches for architecture majors.',
    travel: 'Flight or 3AC · ₹14k per person',
    link: 'Printable walking circuit',
    season: 'Nov - Feb',
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Coorg',
    region: 'south-hills',
    budget: 'comfort',
    mood: 'Plantation stays · Coffee runs',
    blurb: 'Mist trails, bean-to-cup tastings, and night drives filled with indie playlists.',
    travel: 'Night bus + cab · ₹15k per person',
    link: 'Shared Airtable packing list',
    season: 'Aug - Jan',
    duration: '4 days',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Spiti Valley',
    region: 'himalayan-circuit',
    budget: 'invest',
    mood: 'Road trip · Star maps',
    blurb: 'High-altitude monasteries, astrophotography nights, and the longest playlist on repeat.',
    travel: 'Flight + self-drive · ₹38k per person',
    link: 'Notion expedition board',
    season: 'Jun - Sep',
    duration: '9 days',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    city: 'Andaman Islands',
    region: 'islands',
    budget: 'invest',
    mood: 'Diving · Digital detox',
    blurb: 'Kayaks, coral reef dives, and hostel potlucks near turquoise beaches.',
    travel: 'Flight + ferry · ₹45k per person',
    link: 'Dive-ready checklist',
    season: 'Oct - Mar',
    duration: '6 days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80&sat=-15'
  }
]

const timeline = [
  {
    day: 'Friday · 6:00 PM',
    detail: 'Leave campus, share live location, and drop the packing checklist in chat.'
  },
  {
    day: 'Saturday · 9:00 AM',
    detail: 'Explore on foot, document spends, and note reels we want to edit later.'
  },
  {
    day: 'Saturday · 8:00 PM',
    detail: 'Regroup for a calm dinner, update parents, and sync Sunday timings.'
  },
  {
    day: 'Sunday · 4:00 PM',
    detail: 'Catch the ride back, settle expenses, and archive photos in Drive.'
  }
]

const travelNotes = [
  {
    title: 'Budget cheat sheet',
    excerpt: 'Where we splurge vs. save so plans always feel doable.',
    author: 'Prajakta'
  },
  {
    title: 'Convince-parents kit',
    excerpt: 'Template mail + emergency list that gets a “yes” faster.',
    author: 'Saurabh'
  },
  {
    title: 'Weather-ready packing',
    excerpt: 'Layering tips and shared toiletries so backpacks stay light.',
    author: 'Atharva & Vaibhav'
  },
  {
    title: 'Remote work Fridays',
    excerpt: 'How we align lectures, assignments, and PTO so trips start earlier.',
    author: 'Ananya'
  },
  {
    title: 'Content capture plan',
    excerpt: 'Shot list, gear, and editing workflow for reels and aftermovies.',
    author: 'Vaidehi'
  }
]

const essentials = [
  { label: 'Shared folder', detail: 'Tickets, IDs, and budgets in one Drive link.' },
  { label: 'Offline maps', detail: 'Download routes before signal drops.' },
  { label: 'Cash buffer', detail: 'Keep ₹2k per person for local stalls.' },
  { label: 'Emergency loop', detail: 'Primary + backup numbers pinned in chat.' }
]

const budgetPlanner = [
  {
    tier: 'Save-friendly',
    range: '₹6k – ₹10k',
    travel: 'Sleeper bus · 3AC train',
    stay: 'Hostels / student homestays',
    extras: 'Street food, shared scooters',
    tip: 'Block tickets 45 days ahead and pool SIM data.'
  },
  {
    tier: 'Comfort',
    range: '₹12k – ₹20k',
    travel: 'Flights or premium buses',
    stay: 'Boutique stays, capsule hotels',
    extras: 'Work-friendly cafés, guided walks',
    tip: 'Use student cards for lounge access & set bill-split reminders.'
  },
  {
    tier: 'Dream trip',
    range: '₹30k+',
    travel: 'Flights + local driver',
    stay: 'Heritage hotels, eco retreats',
    extras: 'Permits, adventure sports, pro photo gear',
    tip: 'Lock forex cards early and share a risk doc with guardians.'
  }
]

const microAdventures = [
  {
    title: 'Moonlit Pawna hike',
    location: 'Pune · ₹1.1k per head',
    duration: 'Overnight',
    detail: 'Sunset hike, lakeside tent, and a stargazing log sheet.',
    badge: 'Night trek'
  },
  {
    title: 'Metro food relay',
    location: 'Mumbai · ₹900 total',
    duration: '1 day',
    detail: 'Hop every third station, sample budget eats, and score them in Notion.',
    badge: 'City sprint'
  },
  {
    title: 'Cycling + camping 101',
    location: 'Panshet · ₹1.4k',
    duration: 'Weekend',
    detail: 'Borrow cycles, learn tarp pitching, and film b-roll for reels.',
    badge: 'Skill swap'
  },
  {
    title: 'Konkan workcation pod',
    location: 'Vengurla · ₹5k',
    duration: '4 days',
    detail: 'Co-working shacks with strong Wi-Fi, mid-day swims, and quiet hours roster.',
    badge: 'Remote friendly'
  }
]

const memberChip = (member) => `
  <span class="squad-chip">${member.name}</span>
`

const statCard = (stat) => `
  <article class="stat">
    <p class="stat__value">${stat.value}</p>
    <p class="stat__label">${stat.label}</p>
  </article>
`

const regionLabels = {
  'west-coast': 'West coast',
  north: 'North India',
  'south-interior': 'South interior',
  northeast: 'North-East',
  west: 'Rajasthan belt',
  'south-hills': 'Southern hills',
  'himalayan-circuit': 'Himalayan circuit',
  islands: 'Islands'
}

const budgetLabels = {
  save: 'Save-friendly',
  comfort: 'Comfort',
  invest: 'Dream trip'
}

const destinationCard = (spot) => `
  <article class="destination-card">
    <img src="${spot.image}" alt="${spot.city}" loading="lazy" />
    <div class="destination-card__body">
      <div>
        <p class="eyebrow">${spot.mood}</p>
        <h3>${spot.city}</h3>
        <p>${spot.blurb}</p>
      </div>
      <div class="destination-card__meta">
        <span>${spot.travel}</span>
        <span>${spot.link}</span>
        <span class="meta-row">${spot.duration} · Best in ${spot.season}</span>
        <span class="tag-row">
          <span class="tag">${regionLabels[spot.region]}</span>
          <span class="tag tag--accent">${budgetLabels[spot.budget]}</span>
        </span>
      </div>
    </div>
  </article>
`

const timelineItem = (entry) => `
  <article class="timeline__item">
    <p class="timeline__day">${entry.day}</p>
    <p>${entry.detail}</p>
  </article>
`

const noteCard = (note) => `
  <article class="note-card">
    <p class="eyebrow">${note.author}</p>
    <h3>${note.title}</h3>
    <p>${note.excerpt}</p>
  </article>
`

const essentialItem = (item) => `
  <li>
    <strong>${item.label}</strong>
    <span>${item.detail}</span>
  </li>
`

const budgetCard = (tier) => `
  <article class="budget-card">
    <div class="budget-card__header">
      <p class="eyebrow">${tier.tier}</p>
      <h3>${tier.range}</h3>
    </div>
    <ul>
      <li><strong>Travel</strong><span>${tier.travel}</span></li>
      <li><strong>Stay</strong><span>${tier.stay}</span></li>
      <li><strong>Extras</strong><span>${tier.extras}</span></li>
    </ul>
    <p class="budget-card__tip">${tier.tip}</p>
  </article>
`

const adventureCard = (trip) => `
  <article class="micro-card">
    <p class="pill">${trip.badge}</p>
    <h3>${trip.title}</h3>
    <p class="micro-card__meta">${trip.location} · ${trip.duration}</p>
    <p>${trip.detail}</p>
  </article>
`

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <div class="hero__banner">
        <div class="container hero__banner-content">
          <div class="hero__banner-brand">
            <span class="hero__banner-label">PlanMyTrip</span>
          </div>
          <div class="hero__banner-names" aria-label="PlanMyTrip team">
            ${groupMembers.map(memberChip).join('')}
          </div>
        </div>
      </div>
      <nav class="nav container">
        <div class="brand">
          <span class="brand__mark">FM</span>
          <div>
            <p class="brand__name">FindMyTrip</p>
            <p class="brand__tagline">Recommendation studio by MITAOE students</p>
          </div>
        </div>
        <a class="btn btn--ghost" href="#featured">See all plans</a>
      </nav>

      <div class="hero__content container">
        <div class="hero__text">
          <span class="pill hero__badge">Budget + location aware</span>
          <h1>Plan-worthy recommendations crafted by our travel club.</h1>
          <p>
            Swap between coasts, hills, islands, or dream itineraries while seeing real spends, travel modes,
            and checklist notes before you even ping the group chat.
          </p>
          <ul class="hero__list">
            <li><strong>Filters:</strong> Coast + budget combos respond instantly.</li>
            <li><strong>Money math:</strong> Budget planner spells out travel, stay, extras.</li>
            <li><strong>Quick swaps:</strong> Micro adventures fill 24–72 hour gaps.</li>
          </ul>
          <div class="hero__actions">
            <button class="btn btn--primary" id="browseDestinations">Plan a weekend</button>
            <button class="btn btn--link" id="scrollTips">Jump to checklist</button>
          </div>
          <div class="hero__stats">
            ${heroStats.map(statCard).join('')}
          </div>
        </div>
        <div class="hero__panel hero__card">
          <div class="hero__panel-header">
            <p class="pill pill--dark">Live shortlist</p>
            <span>Weekend focus · Chill coast loop</span>
          </div>
          <h3>Konkan rail loop</h3>
          <p class="hero__panel-budget">₹8.5k average · 3 days · group of 4</p>
          <div class="hero__panel-list">
            <div>
              <p class="hero__panel-label">Travel</p>
              <p>Leave Friday 6 PM · Pune → Kudal sleeper · seats booked in one tap.</p>
            </div>
            <div>
              <p class="hero__panel-label">Stay</p>
              <p>Beach hostel dorms · ₹800 a night · breakfast + scooter rentals.</p>
            </div>
            <div>
              <p class="hero__panel-label">Flow</p>
              <p>Saturday cafe hop, sunset reels, Sunday brunch then ride back by 4 PM.</p>
            </div>
          </div>
          <div class="hero__panel-footer">
            <p class="hero__panel-label">Why it works</p>
            <p>Low travel fatigue, transparent costs, and easy approvals for parents + mentors.</p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="featured">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Destinations</p>
            <h2>Only the plans we keep reusing.</h2>
            <p>Dial in by coast, hills, islands, or wallet size.</p>
          </div>
          <p class="result-pill" data-result-count></p>
        </div>
        <form class="filter-bar container" data-filters>
          <label>
            Location
            <select name="region">
              <option value="all">Anywhere</option>
              <option value="west-coast">West coast</option>
              <option value="north">North India</option>
              <option value="south-interior">South interior</option>
              <option value="northeast">North-East</option>
              <option value="west">Rajasthan belt</option>
              <option value="south-hills">Southern hills</option>
              <option value="himalayan-circuit">Himalayan circuit</option>
              <option value="islands">Islands</option>
            </select>
          </label>
          <label>
            Budget
            <select name="budget">
              <option value="any">Any budget</option>
              <option value="save">Save-friendly</option>
              <option value="comfort">Comfort</option>
              <option value="invest">Dream trip</option>
            </select>
          </label>
        </form>
        <div class="card-grid container" data-destination-grid></div>
      </section>

      <section class="section section--outline" id="budgets">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Budget planner</p>
            <h2>Anchor your spends before asking the group chat.</h2>
            <p>Each tier lists travel, stay, extras, and a pro tip.</p>
          </div>
        </div>
        <div class="budget-grid container" data-budget-grid></div>
      </section>

      <section class="section" id="micro">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Micro adventures</p>
            <h2>Quick wins when you only have 24–72 hours.</h2>
          </div>
        </div>
        <div class="micro-grid container" data-micro-grid></div>
      </section>

      <section class="section section--outline" id="planner">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Weekend flow</p>
            <h2>Timeline we follow to stay relaxed.</h2>
          </div>
        </div>
        <div class="timeline container" data-timeline></div>
      </section>

      <section class="section" id="notes">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Field notes</p>
            <h2>Read these before booking anything.</h2>
          </div>
        </div>
        <div class="note-grid container" data-notes></div>
      </section>

      <section class="section section--outline" id="essentials">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Checklist</p>
            <h2>Minimal reminders we drop in every chat.</h2>
          </div>
        </div>
        <div class="essentials container">
          <ul data-essentials></ul>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <p>&copy; <span data-current-year></span> FindMyTrip · Built during MITAOE lab breaks.</p>
        <div class="footer__links">
          <a href="https://github.com/SaurabhxPinjarkar/mitaoe-travel-club" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#essentials">Checklist</a>
        </div>
      </div>
    </footer>
  </div>
`

const destinationGrid = document.querySelector('[data-destination-grid]')
const resultCount = document.querySelector('[data-result-count]')
const filtersForm = document.querySelector('[data-filters]')
const budgetGrid = document.querySelector('[data-budget-grid]')
const microGrid = document.querySelector('[data-micro-grid]')

const renderDestinations = (collection) => {
  if (!destinationGrid) return
  if (collection.length === 0) {
    destinationGrid.innerHTML = `
      <article class="empty-state">
        <h3>No trips match those filters yet.</h3>
        <p>Try widening the budget or picking a different region.</p>
      </article>
    `
  } else {
    destinationGrid.innerHTML = collection.map(destinationCard).join('')
  }

  if (resultCount) {
    const label = collection.length === 1 ? 'recommendation' : 'recommendations'
    resultCount.textContent = `${collection.length} ${label}`
  }
}

const applyFilters = () => {
  if (!filtersForm) {
    renderDestinations(destinations)
    return
  }
  const formData = new FormData(filtersForm)
  const region = formData.get('region') || 'all'
  const budget = formData.get('budget') || 'any'

  const filtered = destinations.filter((spot) => {
    const regionMatch = region === 'all' ? true : spot.region === region
    const budgetMatch = budget === 'any' ? true : spot.budget === budget
    return regionMatch && budgetMatch
  })

  renderDestinations(filtered)
}

filtersForm?.addEventListener('change', applyFilters)

renderDestinations(destinations)

if (budgetGrid) {
  budgetGrid.innerHTML = budgetPlanner.map(budgetCard).join('')
}

if (microGrid) {
  microGrid.innerHTML = microAdventures.map(adventureCard).join('')
}

const timelineShell = document.querySelector('[data-timeline]')
if (timelineShell) {
  timelineShell.innerHTML = timeline.map(timelineItem).join('')
}

const noteGrid = document.querySelector('[data-notes]')
if (noteGrid) {
  noteGrid.innerHTML = travelNotes.map(noteCard).join('')
}

const essentialsList = document.querySelector('[data-essentials]')
if (essentialsList) {
  essentialsList.innerHTML = essentials.map(essentialItem).join('')
}

const scrollTips = document.querySelector('#scrollTips')
scrollTips?.addEventListener('click', () => {
  document.querySelector('#essentials')?.scrollIntoView({ behavior: 'smooth' })
})

const browseDestinations = document.querySelector('#browseDestinations')
browseDestinations?.addEventListener('click', () => {
  document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })
})

const yearToken = document.querySelector('[data-current-year]')
if (yearToken) {
  yearToken.textContent = new Date().getFullYear().toString()
}
