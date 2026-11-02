# Utkarsha Kempinmath — Freelance Portfolio Website

A fast, dark, espresso-toned portfolio for **Utkarsha Kempinmath**, Full-Stack Mobile & Web Developer. Built with **React 18 + Vite**, **React Router v6**, and plain CSS with custom properties.

Designed specifically so startup founders and small business owners understand in 30 seconds: **what she does, proof that she ships, and how to hire her.**

---

## Design System & Theme

- **Palette**:
  - Deep Espresso: `--bg: #1E140F`
  - Roasted Dark Card: `--bg-alt: #2A1B14`
  - Cream: `--text: #F6F0E7`
  - Mocha: `--text-muted: #B9A794`
  - Hairline Border: `--line: #3A2A20`
  - Caramel Accent: `--accent: #C98A4B` (buttons, links, highlights)
- **Typography**:
  - Headings: `Fraunces` (Google Fonts serif)
  - Body: `DM Sans` (Google Fonts geometric sans)
- **Rules Followed**:
  - Flat colors only (strictly no gradients, no glows, no glassmorphism, no neon).
  - Absolutely **no emojis**.
  - No cluttered paragraphs: maximum 2 short lines per block on the home page.
  - Sticky solid espresso navbar (no blur).
  - Reusable `<Portrait />` component with softly rounded rectangle (no circle crop) and warm desaturated CSS filter.
  - Full mobile responsiveness with large tap targets (minimum 48px).

---

## Project Structure

```
portfolioFreelance/
├── public/
│   ├── favicon.svg             # Minimalist coffee-themed monogram favicon
│   └── assets/                 # Public assets
├── src/
│   ├── assets/                 # Project screenshots and photo placeholders
│   │   ├── photo.jpg           # Portrait photo (swap with your real photo)
│   │   ├── portrait-placeholder.svg
│   │   ├── monthend-1.svg / .png
│   │   ├── aarogya-1.svg / .png
│   │   └── mindbuddy-1.svg / .png
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Wordmark, nav links, "Book a call" CTA
│   │   ├── Hero.jsx            # Headline, subline, dual CTA, portrait
│   │   ├── ProofStrip.jsx      # Google Play, MIT Hackathon, IIT Delhi, IEEE
│   │   ├── SelectedWork.jsx    # Flagship MonthEnd, Aarogya Seva, MindBuddy
│   │   ├── ProjectCard.jsx     # Individual project card with stack tags
│   │   ├── Services.jsx        # Startup MVP & Small Business tracks
│   │   ├── Process.jsx         # 4-step execution workflow
│   │   ├── Tools.jsx           # Single quiet line of core tech stack
│   │   ├── About.jsx           # Concise 3-line bio + portrait
│   │   ├── Contact.jsx         # Contact form, availability, direct links
│   │   ├── Footer.jsx          # Year, copyright, social links
│   │   └── Portrait.jsx        # Rounded portrait with warm filter & fallback
│   ├── data/
│   │   ├── siteData.js         # Central config for bio, services, process, contact
│   │   └── projects.js         # In-depth case study data for all 3 projects
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page composed in exact order
│   │   ├── CaseStudyPage.jsx   # Shared dynamic template (/work/:slug)
│   │   └── NotFoundPage.jsx    # Custom 404 page
│   ├── styles/
│   │   ├── variables.css       # Coffee palette and typography variables
│   │   ├── globals.css         # CSS reset, accessibility focus rings
│   │   └── components.css      # Component styling (flat, responsive, mobile-first)
│   ├── App.jsx                 # Router config & ScrollToTop
│   └── main.jsx
├── vercel.json                 # SPA rewrite rules for Vercel
├── vite.config.js
└── package.json
```

---

## How to Customize

### 1. Swapping the Portrait Photo
1. Place your real portrait in `src/assets/photo.jpg`.
2. The `<Portrait />` component automatically applies the warm desaturated tone filter (`filter: grayscale(18%) sepia(12%) contrast(105%)`) and the 1px `--line` border.
3. If the file is not yet replaced or fails to load, it automatically falls back to the clean coffee monogram placeholder (`portrait-placeholder.svg`).

### 2. Swapping Project Screenshots
Replace the placeholder files in `src/assets/`:
- `monthend-1.png` / `monthend-2.png`
- `aarogya-1.png` / `aarogya-2.png`
- `mindbuddy-1.png` / `mindbuddy-2.png`

All images are configured with explicit dimensions (`800x500`) and `loading="lazy"` to eliminate cumulative layout shifts (CLS).

### 3. Editing Copy, Services, and Timelines
Open `src/data/siteData.js` to modify:
- **Availability line**: e.g., `"Currently taking on 2 projects"`
- **Services & Timelines**: edit timeline strings like `"MVP: 4 to 8 weeks"`
- **Direct contact links**:
  - Email: `utkarshakempinmath1725@gmail.com`
  - LinkedIn: `https://www.linkedin.com/in/utkarsha-kempinmath/`
  - GitHub: `https://github.com/utkarshakempinmath`

Open `src/data/projects.js` to edit the case study text:
- Problem, What I built, Key decisions, Results, and metrics.

### 4. Connecting the Contact Form
In `src/data/siteData.js`, configure the `contact` object:
```javascript
contact: {
  headline: "Have a project in mind?",
  service: "formspree", // Change from "mock" to "formspree"
  formspreeId: "your_form_id_here", // Paste your Formspree ID
}
```
The form has built-in validation (name, valid email, project description) and a success confirmation state.

---

## Local Development & Build

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## Deploying to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. The included `vercel.json` ensures direct URLs like `/work/monthend` resolve correctly to the React SPA.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
