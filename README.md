# MITAOE Travel Club · Travel Places Project

A single-page web project created by MITAOE students to showcase our favourite getaway ideas. Built with [Vite](https://vitejs.dev/) and vanilla JavaScript, it keeps things simple—filters, cards, and notes we actually use when planning semester breaks.

## ✨ Highlights

- **Data-driven sections** for featured destinations, signature experiences, itineraries, and field intelligence.
- **Interactive filters** to slice destinations by region, mood, and investment tier with instant updates.
- **Testimonial slider** with auto-play and hover pause for social proof.
- **Responsive, accessible layout** using CSS Grid/Flexbox, custom typography, and reduced-motion support.

## 🗂️ Project structure

```
web_project/
├── index.html             # Root HTML shell with metadata
├── package.json           # Vite scripts and dependencies
├── src/
│   ├── main.js            # Data models + rendering + interactions
│   └── style.css          # Design system & responsive layout
└── README.md
```

## 🚀 Getting started

```bash
cd web_project
npm install
npm run dev
```

Open the printed local URL to explore the live preview. Build for production with `npm run build`, or serve the static output via `npm run preview`.

## 🧭 Implementation notes

- Remote imagery comes from Unsplash to keep the repo lightweight. Swap in your own photos if you have better ones from real trips.
- Destination filters currently consider **region**, **travel style**, and **budget tier** (save-friendly/comfortable/dream trip). Extend the data arrays in `src/main.js` to add more itineraries.
- The testimonial slider auto-rotates every 9 seconds and pauses on hover for better readability.

## 🔮 Next steps

- Add a simple Google Form link for feedback.
- Hook the newsletter field up to a real email service.
- Replace stock images with original photos from upcoming trips.
