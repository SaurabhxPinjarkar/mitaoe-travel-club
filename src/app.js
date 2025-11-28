import './app.css'

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
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
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
  }
]

const essentials = [
  { label: 'Shared folder', detail: 'Tickets, IDs, and budgets in one Drive link.' },
  { label: 'Offline maps', detail: 'Download routes before signal drops.' },
  { label: 'Cash buffer', detail: 'Keep ₹2k per person for local stalls.' },
  { label: 'Emergency loop', detail: 'Primary + backup numbers pinned in chat.' }
]

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
  northeast: 'North-East'
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

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <nav class="nav container">
        <div class="brand">
          <span class="brand__mark">FM</span>
          <div>
            <p class="brand__name">FindMyTrip</p>
            <p class="brand__tagline">Weekends planned by MITAOE students</p>
          </div>
        </div>
        <a class="btn btn--ghost" href="#featured">See plans</a>
      </nav>

      <div class="hero__content container">
        <div class="hero__text">
          <p class="eyebrow">Mini project · 2025</p>
          <h1>Simple, shareable travel plans for our next break.</h1>
          <p>
            One clean view with destinations we trust, budgets that make sense, and checklists that keep friends and
            parents in sync.
          </p>
          <div class="hero__actions">
            <button class="btn btn--primary" id="browseDestinations">Browse escapes</button>
            <button class="btn btn--link" id="scrollTips">Open checklists</button>
          </div>
          <div class="hero__stats">
            ${heroStats.map(statCard).join('')}
          </div>
        </div>
        <div class="hero__card">
          <p class="pill">This weekend idea</p>
          <h3>Konkan rail loop</h3>
          <p>₹8.5k · 3 friends · light backpacks</p>
          <ul>
            <li>Leave Friday 6 PM · Pune to Kudal</li>
            <li>Stay at beach hostel · ₹800 a night</li>
            <li>Return Sunday 4 PM sleeper</li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="featured">
        <div class="section__header container">
          <div>
            <p class="eyebrow">Destinations</p>
            <h2>Only the plans we keep reusing.</h2>
            <p>Four cards, zero clutter.</p>
          </div>
          <p class="result-pill" data-result-count>4 recommendations</p>
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
