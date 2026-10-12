# Mar Baselios Memorial Higher Secondary School – Website Template

A fast, accessible, conventional school website template designed specifically for schools and higher secondary institutions affiliated with the Kerala State Board of Education.

Built with **Astro 5** (static output, zero CSS frameworks, minimal client JavaScript, full English & Malayalam localization).

---

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit:
- English Home: `http://localhost:4321/`
- Malayalam Home: `http://localhost:4321/ml/`
- Rebrand Demonstration (3 Palettes): `http://localhost:4321/theme-demo`
- CMS Administrative Portal: `http://localhost:4321/admin/`

---

## 10-Minute Client Rebrand Guide

This entire website is designed so that a sales representative or developer can rebrand the site for a new client school within 10 minutes by editing just two files:

### Step 1: Update School Identity (`src/site.config.json`)
Open `src/site.config.json` and change:
- `schoolName` (`en` & `ml`): Full official school name.
- `shortName`: Abbreviated title used in mobile headers.
- `location`: Town, district, state.
- `foundedYear`: Year of establishment.
- `affiliation`: School and Higher Secondary board codes.
- `contact`: Office telephone, mobile, email, physical address, and WhatsApp chat number (`whatsappNumber` without leading `+` or spaces).
- `mapEmbedUrl`: Google Maps embed iframe URL.

### Step 2: Update Palette & Fonts (`src/styles/tokens.css`)
Open `src/styles/tokens.css`. Update the root tokens:
- `--color-primary`: Main institutional color (e.g. Deep Navy, Maroon, or Forest Green).
- `--color-accent`: Border and fill accent (e.g. Gold, Brass, Ochre).
- `--color-accent-contrast`: Text color for buttons with accent fills (always use dark Navy `#081A2D` on gold to maintain WCAG AAA compliance).

### Step 3: Replace Logos & Photos (`public/images/`)
- Replace `public/images/crest.svg` with the client's official school emblem.
- Replace campus photos: `hero.jpg`, `principal.jpg`, `classroom.jpg`, `science-lab.jpg`, `library.jpg`, `sports.jpg`.
- Run `npm run build` to generate static assets.

---

## Content Management (Adding Notices, News, Events)

### Method A: Via Decap CMS (/admin)
1. Navigate to `/admin/` in your browser.
2. Log in using your GitHub account or Netlify Identity credentials.
3. Select **Circulars & Notices**, **School News**, or **Events Calendar**.
4. Enter the English title, optional Malayalam title, and date (`YYYY-MM-DD`).
5. Click **Publish**. The static site generator will automatically rebuild and deploy.

### Method B: Via Direct JSON Editing
All structured school data resides in `src/data/`:
- `src/data/notices.json`: Urgent circulars and announcements.
- `src/data/news.json`: Campus dispatches and achievements.
- `src/data/events.json`: Academic calendar dates and venues.
- `src/data/faculty.json`: Staff directory and qualifications.
- `src/data/academics.json`: Streams, syllabus, combinations, and seat allocations.
- `src/data/admissions.json`: Fee structures, key dates, and guidelines.
- `src/data/gallery.json`: Campus photography.
- `src/data/toppers.json`: Board exam distinctions and merit lists.
- `src/data/faqs.json`: Common administrative queries.

*Note on Malayalam fallback:* The `ml` field is optional on every record. If a notice is published with an English title only, the Malayalam site (`/ml/`) automatically renders the English copy accompanied by a discreet `[English only]` badge.

---

## Production Deployment

### Option A: Netlify (Recommended)
1. Push repository to GitHub or GitLab.
2. In Netlify dashboard, click **Add new site** > **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Enable **Netlify Identity** under Site Settings > Identity.
6. Under Registration preferences, select **Invite only**.
7. Enable **Git Gateway** under Identity > Services.

### Option B: GitHub Pages
1. In `astro.config.mjs`, specify `site: 'https://<username>.github.io'` and `base: '/<repo-name>'`.
2. Configure `.github/workflows/deploy.yml` with Astro's standard GitHub Pages action.

---

## "Must Replace Before Launch" Checklist

The demo comes populated with realistic Kerala school placeholder data. Before delivering this website to a client school, verify each item:

- [ ] **School Affiliation Codes**: Replace placeholder code `05042` and `05018` in `src/site.config.json` with official DGE Kerala codes.
- [ ] **Principal's Message & Name**: Replace "Rev. Fr. Mathew Karottu" and qualifications with the active Principal's credentials and message.
- [ ] **Telephone & WhatsApp**: Replace demo phone `+91 4822 212450` and WhatsApp link with the actual school office numbers.
- [ ] **Fee Structure**: Review `src/data/admissions.json` to reflect the school's approved government-aided or unaided fee schedule.
- [ ] **Toppers & Merit List**: Replace sample merit board records in `src/data/toppers.json` with actual school board toppers.
- [ ] **Campus Photography**: Replace stock photography in `public/images/` with real photographs of the school building, laboratories, and grounds. Update `credits.txt`.
- [ ] **Formspree / Netlify Endpoint**: Replace demo form action `https://formspree.io/f/sample-demo-endpoint` in `Footer.astro` with the client's Formspree form ID or active Netlify form handler.
- [ ] **Google Maps Embed**: Update `mapEmbedUrl` in `src/site.config.json` to the school's exact Google Maps coordinates.

---

## Architecture: Multi-Theme Support

Presentation templates live in `src/themes/classic/`. 
The active theme is controlled by the `"theme"` key in `src/site.config.json`.
In `astro.config.mjs`, Vite aliases `@theme` to `src/themes/${siteConfig.theme}` at build time. 

To introduce a new visual theme (e.g. `src/themes/modern/`):
1. Duplicate `src/themes/classic` to `src/themes/modern`.
2. Change `"theme": "modern"` in `src/site.config.json`.
3. All pages (`src/pages/[...lang]/index.astro`) remain 100% untouched.
