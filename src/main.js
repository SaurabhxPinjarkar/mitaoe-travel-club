import './style.css'

const heroStats = [
  { label: 'Weekend plans drafted this term', value: '18' },
  { label: 'MITAOE friends polled for ideas', value: '42' },
  { label: 'Average excitement rating', value: '4.9/5' }
]

const destinations = [
  {
    city: 'Goa',
    country: 'India',
    region: 'asia',
    styles: ['coastal', 'budget', 'friends'],
    budgetTier: 'signature',
    description: 'Cycle-friendly beach towns, sunset shacks, and student-budget seafood thalis.',
    price: 'From ₹9k per person',
    flightTime: '1h from Pune',
    climate: '29°C breezy',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Arambol drum circle', 'Local ferry ride', 'Hidden spice farm tour']
  },
  {
    city: 'Manali',
    country: 'India',
    region: 'asia',
    styles: ['mountains', 'trek', 'budget'],
    budgetTier: 'signature',
    description: 'Sleeper buses, snow views, café-hopping, and easy treks for first timers.',
    price: 'From ₹12k per person',
    flightTime: '26h by bus/train combo',
    climate: '10°C crisp',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Jogini waterfall trek', 'Old Manali cafés', 'Atal tunnel excursion']
  },
  {
    city: 'Hampi',
    country: 'India',
    region: 'asia',
    styles: ['heritage', 'cycling', 'budget'],
    budgetTier: 'invest',
    description: 'Temple ruins, coracle rides, and golden hour sketching sessions.',
    price: 'From ₹7k per person',
    flightTime: '14h overnight bus',
    climate: '28°C dry heat',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Matanga Hill sunrise', 'Coracle across Tungabhadra', 'Heritage bicycle loop']
  },
  {
    city: 'Meghalaya',
    country: 'India',
    region: 'asia',
    styles: ['adventure', 'nature', 'rain'],
    budgetTier: 'luxe',
    description: 'Living root bridges, rain-soaked hikes, and the cleanest village award-winner.',
    price: 'From ₹22k per person',
    flightTime: '6h incl. layover',
    climate: '20°C misty',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Double-decker bridge trek', 'Dawki kayaking', 'Skywalk view deck']
  },
  {
    city: 'Sri Lanka South Coast',
    country: 'Sri Lanka',
    region: 'asia',
    styles: ['coastal', 'surf', 'culture'],
    budgetTier: 'luxe',
    description: 'Sleeper train to Ella, hostel surf lessons, and tea estate visits.',
    price: 'From ₹28k per person',
    flightTime: '3h flight + train',
    climate: '27°C humid',
    rating: 4.85,
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Nine Arches Bridge', 'Unawatuna snorkel', 'Galle fort walk']
  },
  {
    city: 'New Zealand South Island',
    country: 'New Zealand',
    region: 'oceania',
    styles: ['adventure', 'roadtrip', 'nature'],
    budgetTier: 'invest',
    description: 'Our far-away dream plan: campervan loops, glaciers, and study-abroad scouting.',
    price: 'From ₹85k per person',
    flightTime: '18h avg',
    climate: '16°C alpine blue',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Hooker Valley track', 'Milford Sound cruise', 'Queenstown bungy (maybe!)']
  }
]

const experiences = [
  {
    title: 'Konkan Rail & Hostel Hop',
    category: 'Budget coastal trail',
    summary: 'Use the student rail pass, stay at beach hostels, and document the journey for YouTube.',
    duration: '3 nights',
    locale: 'Ratnagiri • Vengurla',
    anchor: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'DIY Food Crawl Playbook',
    category: 'City micro adventure',
    summary: 'Map cheap eats near every metro stop, film reels, and gather content for the college fest.',
    duration: '1 day',
    locale: 'Mumbai • Pune',
    anchor: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cycling + Camping 101',
    category: 'Outdoor basics',
    summary: 'Borrow cycles, camp beside a lake, learn to cook with minimal gear, and be back by Monday.',
    duration: '2 nights',
    locale: 'Panshet • Pawna',
    anchor: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Semester Break Skill Swap',
    category: 'Community',
    summary: 'Trade photography lessons for trekking tips and plan a collective weekend getaway.',
    duration: 'Weekend',
    locale: 'MITAOE campus • Surroundings',
    anchor: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=1200&q=80'
  }
]

const testimonials = [
  {
    name: 'Shreya Kulkarni',
    title: 'Third-year ENTC',
    quote:
      'We followed the Goa plan almost line by line. Hostels were clean, and the shared spreadsheet saved us from overspending.',
    avatar:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
    route: 'Pune • Goa • Pune',
    rating: 5
  },
  {
    name: 'Nitin & Rutuja',
    title: 'Mechanical + CS duo',
    quote:
      'The Manali itinerary convinced our parents because it listed budgets and buffer days. Huge win.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    route: 'Delhi • Manali • Kasol',
    rating: 4.8
  },
  {
    name: 'Ananya Rao',
    title: 'Architecture minor',
    quote:
      'Hampi module was the best field assignment. We even submitted our sketches as studio credits.',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    route: 'Hospet • Hampi',
    rating: 5
  }
]

const travelInsights = [
  {
    title: 'Budgeting for Overnight Buses',
    category: 'Field Notes',
    excerpt: 'We compared four sleeper operators, tracked delays, and listed what to pack so you can sleep better.',
    author: 'Prajakta',
    readTime: '4 min read'
  },
  {
    title: 'Best Months for Konkan Hostels',
    category: 'Trend Report',
    excerpt: 'Humidity, crowd levels, and average dorm prices plotted from our last three visits.',
    author: 'Saurabh',
    readTime: '3 min read'
  },
  {
    title: 'How We Convince Parents',
    category: 'Playbook',
    excerpt: 'Sharing itineraries, emergency contacts, and study plans makes yes happen faster.',
    author: 'Atharva & Vaibhav',
    readTime: '5 min read'
  }
]

const teamMembers = [
  { name: 'Saurabh Pinjarkar' },
  { name: 'Prajakta More' },
  { name: 'Atharva Rajandekar' },
  { name: 'Vaibhav Gorme' }
]

const itineraryMilestones = [
  {
    day: 'Day 1',
    title: 'Train to Goa + Hostel Check-in',
    detail: 'Early train from Pune, rent scooties, quick beach cleanup for service hours.'
  },
  {
    day: 'Day 2',
    title: 'Food crawl & sunset reels',
    detail: 'Map café stops, record short clips for the project demo, end at Chapora Fort.'
  },
  {
    day: 'Day 3',
    title: 'Cycle side quest',
    detail: 'Morning cycling loop, visit local art market, debrief expenses in Notion.'
  },
  {
    day: 'Bonus',
    title: 'Parent presentation kit',
    detail: 'Share travel pdf, emergency numbers, and print tickets for everyone.'
  }
]

const heroStatsMarkup = heroStats
  .map(
    (stat) => `
      <article class="stat">
        <p class="stat__value">${stat.value}</p>
        <p class="stat__label">${stat.label}</p>
      </article>
    `
  )
  .join('')

const itineraryMarkup = itineraryMilestones
  .map(
    (entry) => `
      <article class="timeline__item">
        <div>
          <p class="timeline__day">${entry.day}</p>
          <h4>${entry.title}</h4>
          <p>${entry.detail}</p>
        </div>
      </article>
    `
  )
  .join('')

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <header class="hero">
      <nav class="nav container">
          <div class="brand">
          <span class="brand__mark">FM</span>
          <div>
            <p class="brand__name">FindMyTrip</p>
            <p class="brand__tagline">Student-curated journeys</p>
          </div>
        </div>
        <div class="nav__group">
          <a href="#featured">Destinations</a>
          <a href="#experiences">Experiences</a>
          <a href="#insights">Insights</a>
          <a href="#voices">Voices</a>
          <a href="#team">Team</a>
        </div>
        <button class="btn btn--ghost">Chat with us</button>
      </nav>

      <div class="student-banner">
        <p>Mini project by MITAOE students · Saurabh · Prajakta · Atharva · Vaibhav</p>
      </div>

      <div class="hero__content container">
        <div class="hero__text">
          <p class="eyebrow">Semester mini-project · MITAOE</p>
          <h1>Travel places we can't stop talking about between labs.</h1>
          <p>
            Built by students who love maps and group trips, this site collects the destinations we want to save up for
            and the experiences that motivate our next study sprint.
          </p>
          <div class="hero__actions">
            <button class="btn btn--primary">Plan my 2025 journey</button>
            <button class="btn btn--link">Preview sample itineraries</button>
          </div>
          <div class="hero__stats">${heroStatsMarkup}</div>
        </div>
        <div class="hero__visual">
          <div class="hero-card">
            <p class="pill">Club pick</p>
            <h3>Monsoon backpack loop</h3>
            <p>4 friends · Konkan coast</p>
            <ul>
              <li>Budget homestays near the beach</li>
              <li>Sunrise local train ride</li>
              <li>Photo walk + coconut water stop</li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section section--glass" id="search">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Start with intention</p>
            <h2>Find trips that match our class schedules and moods.</h2>
          </div>
          <p class="result-count" data-result-count></p>
        </div>
        <form id="filterForm" class="filter container" aria-label="Destination filters">
          <label>
            Region
            <select name="region">
              <option value="all">All regions</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
          <label>
            Travel style
            <select name="style">
              <option value="any">Any mood</option>
              <option value="adventure">Adventure</option>
              <option value="culture">Culture</option>
              <option value="coastal">Coastal</option>
              <option value="luxury">Luxury</option>
              <option value="nature">Nature</option>
              <option value="safari">Safari</option>
              <option value="wellness">Wellness</option>
              <option value="romance">Romance</option>
              <option value="heritage">Heritage</option>
            </select>
          </label>
          <label>
            Budget range
            <select name="budget">
              <option value="any">Any budget</option>
              <option value="signature">Save-friendly</option>
              <option value="luxe">Comfortable</option>
              <option value="invest">Dream trip</option>
            </select>
          </label>
          <div class="filter__actions">
            <button type="submit" class="btn btn--primary">Find journeys</button>
            <button type="button" id="resetFilters" class="btn btn--ghost">Reset</button>
          </div>
        </form>
      </section>

      <section class="section" id="featured">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Featured escapes</p>
            <h2>Places MITAOE students are researching for breaks.</h2>
          </div>
          <p>We keep swapping the list as classmates send new ideas in the group chat.</p>
        </div>
        <div class="card-grid container" id="destinationsGrid"></div>
      </section>

      <section class="section section--alt" id="experiences">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Experience ideas</p>
            <h2>Small activity kits you can mix into any plan.</h2>
          </div>
        </div>
        <div class="experience-grid container" id="experienceGrid"></div>
      </section>

      <section class="section section--glass" id="itinerary">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Sample plan</p>
            <h2>3-day Goa loop we organized for the mid-sem break.</h2>
          </div>
        </div>
        <div class="timeline container">${itineraryMarkup}</div>
      </section>

      <section class="section" id="voices">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Traveler voices</p>
            <h2>Friends who tried these plans and dropped feedback.</h2>
          </div>
        </div>
        <div class="testimonial-shell container">
          <button class="btn btn--ghost circle" id="testimonialPrev" aria-label="Previous testimonial">‹</button>
          <div class="testimonial-stage" id="testimonialStage"></div>
          <button class="btn btn--ghost circle" id="testimonialNext" aria-label="Next testimonial">›</button>
        </div>
      </section>

      <section class="section section--alt" id="insights">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Travel notes</p>
            <h2>Mini articles we wrote for campus newsletter practice.</h2>
          </div>
        </div>
        <div class="insight-grid container" id="insightGrid"></div>
      </section>

      <section class="section section--glass" id="team">
        <div class="section-header container">
          <div>
            <p class="eyebrow">Project team</p>
            <h2>Travel Places website built by:</h2>
          </div>
          <p>Four collaborators who crafted every section of this experience.</p>
        </div>
        <div class="team-grid container" id="teamGrid"></div>
      </section>

      <section class="section newsletter">
        <div class="newsletter__panel container">
          <div>
            <p class="eyebrow">Stay in the loop</p>
            <h2>Sign up if you want our next travel brainstorm deck.</h2>
            <p>We promise a short, friendly email whenever we add new ideas or figure out a better budget hack.</p>
          </div>
          <form class="newsletter__form">
            <label>
              Email address
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label>
              Travel horizon
              <select>
                <option>January - March</option>
                <option>April - June</option>
                <option>July - September</option>
                <option>October - December</option>
              </select>
            </label>
            <button class="btn btn--primary" type="submit">Join the list</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <p>&copy; <span data-current-year></span> MITAOE Travel Club – built in Pune classrooms and cafés.</p>
        <div class="footer__links">
          <a href="#">Project notes</a>
          <a href="#">Feedback form</a>
          <a href="#">Git repo</a>
        </div>
      </div>
    </footer>
  </div>
`

const formatHighlights = (items) =>
  items
    .map((item) => `<li>${item}</li>`)
    .join('')

const budgetLabels = {
  signature: 'Save-friendly',
  luxe: 'Comfortable',
  invest: 'Dream trip'
}

const destinationCard = (place) => `
  <article class="destination-card" data-region="${place.region}" data-style="${place.styles[0]}" data-budget="${place.budgetTier}">
    <div class="destination-card__media">
      <img src="${place.image}" alt="${place.city}, ${place.country}" loading="lazy" />
      <p class="pill">${place.region}</p>
    </div>
    <div class="destination-card__body">
      <div class="destination-card__heading">
        <div>
          <p class="eyebrow">${place.country}</p>
          <h3>${place.city}</h3>
        </div>
        <p class="rating">★ ${place.rating.toFixed(2)}</p>
      </div>
      <p>${place.description}</p>
      <ul class="highlights">
        ${formatHighlights(place.highlights)}
      </ul>
    </div>
    <div class="destination-card__meta">
      <div>
        <p class="label">Budget</p>
        <p class="value">${place.price}</p>
      </div>
      <div>
        <p class="label">Flight time</p>
        <p class="value">${place.flightTime}</p>
      </div>
      <div>
        <p class="label">Climate</p>
        <p class="value">${place.climate}</p>
      </div>
      <div>
        <p class="label">Tier</p>
        <p class="value value--accent">${budgetLabels[place.budgetTier]}</p>
      </div>
      <div class="tag-row">
        ${place.styles.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  </article>
`

const experienceCard = (experience) => `
  <article class="experience-card">
    <div class="experience-card__media">
      <img src="${experience.anchor}" alt="${experience.title}" loading="lazy" />
    </div>
    <div class="experience-card__body">
      <p class="eyebrow">${experience.category}</p>
      <h3>${experience.title}</h3>
      <p>${experience.summary}</p>
      <div class="experience-card__meta">
        <span>${experience.duration}</span>
        <span>${experience.locale}</span>
      </div>
    </div>
  </article>
`

const insightCard = (insight) => `
  <article class="insight-card">
    <p class="eyebrow">${insight.category}</p>
    <h3>${insight.title}</h3>
    <p>${insight.excerpt}</p>
    <div class="insight-card__meta">
      <span>${insight.author}</span>
      <span>${insight.readTime}</span>
    </div>
  </article>
`

const teamCard = (member) => `
  <article class="team-card">
    <div class="team-card__initials" aria-hidden="true">${member.name
      .split(' ')
      .map((word) => word[0])
      .join('')}</div>
    <p class="team-card__name">${member.name}</p>
  </article>
`

const destinationGrid = document.querySelector('#destinationsGrid')
const experienceGrid = document.querySelector('#experienceGrid')
const insightGrid = document.querySelector('#insightGrid')
const teamGrid = document.querySelector('#teamGrid')
const testimonialStage = document.querySelector('#testimonialStage')
const resultCount = document.querySelector('[data-result-count]')
const yearToken = document.querySelector('[data-current-year]')

const renderDestinations = (collection) => {
  if (!destinationGrid) return
  if (collection.length === 0) {
    destinationGrid.innerHTML = `
      <div class="empty-state">
        <h3>No journeys match those filters yet.</h3>
        <p>Adjust the mood or region to reveal new itineraries, or connect with a designer for a bespoke brief.</p>
      </div>
    `
  } else {
    destinationGrid.innerHTML = collection.map(destinationCard).join('')
  }
  if (resultCount) {
    resultCount.textContent = `${collection.length} curated escape${collection.length === 1 ? '' : 's'}`
  }
}

const renderExperiences = () => {
  if (!experienceGrid) return
  experienceGrid.innerHTML = experiences.map(experienceCard).join('')
}

const renderInsights = () => {
  if (!insightGrid) return
  insightGrid.innerHTML = travelInsights.map(insightCard).join('')
}

const renderTeam = () => {
  if (!teamGrid) return
  teamGrid.innerHTML = teamMembers.map(teamCard).join('')
}

const starRating = (score) => {
  const fullStars = Math.floor(score)
  const hasHalf = score % 1 >= 0.5
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) return '★'
    if (index === fullStars && hasHalf) return '⯨'
    return '☆'
  })
  return stars.join(' ')
}

let testimonialIndex = 0

const renderTestimonial = (index) => {
  const testimonial = testimonials[index]
  testimonialStage.innerHTML = `
    <article class="testimonial-card">
      <div class="testimonial-card__profile">
        <img src="${testimonial.avatar}" alt="Portrait of ${testimonial.name}" loading="lazy" />
        <div>
          <h3>${testimonial.name}</h3>
          <p>${testimonial.title}</p>
        </div>
      </div>
      <p class="testimonial-card__quote">“${testimonial.quote}”</p>
      <div class="testimonial-card__meta">
        <span>${testimonial.route}</span>
        <span aria-label="Rating ${testimonial.rating} out of 5">${starRating(testimonial.rating)}</span>
      </div>
    </article>
  `
}

const rotateTestimonial = (direction) => {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length
  renderTestimonial(testimonialIndex)
}

const filterForm = document.querySelector('#filterForm')
const resetButton = document.querySelector('#resetFilters')

const applyFilters = () => {
  const formData = new FormData(filterForm)
  const region = formData.get('region')
  const style = formData.get('style')
  const budget = formData.get('budget')

  const filtered = destinations.filter((destination) => {
    const matchesRegion = region === 'all' ? true : destination.region === region
    const matchesStyle = style === 'any' ? true : destination.styles.includes(style)
    const matchesBudget = budget === 'any' ? true : destination.budgetTier === budget
    return matchesRegion && matchesStyle && matchesBudget
  })

  renderDestinations(filtered)
}

filterForm.addEventListener('submit', (event) => {
  event.preventDefault()
  applyFilters()
})

filterForm.addEventListener('change', applyFilters)

resetButton.addEventListener('click', () => {
  filterForm.reset()
  renderDestinations(destinations)
})

renderDestinations(destinations)
renderExperiences()
renderInsights()
renderTeam()
renderTestimonial(testimonialIndex)

const prevBtn = document.querySelector('#testimonialPrev')
const nextBtn = document.querySelector('#testimonialNext')

prevBtn.addEventListener('click', () => rotateTestimonial(-1))
nextBtn.addEventListener('click', () => rotateTestimonial(1))

let testimonialTimer = setInterval(() => rotateTestimonial(1), 9000)

testimonialStage.addEventListener('mouseenter', () => {
  clearInterval(testimonialTimer)
})

testimonialStage.addEventListener('mouseleave', () => {
  testimonialTimer = setInterval(() => rotateTestimonial(1), 9000)
})

if (yearToken) {
  yearToken.textContent = new Date().getFullYear().toString()
}
