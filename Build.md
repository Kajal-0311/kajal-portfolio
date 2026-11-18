# Build.md — Step-by-Step Build Plan

Follow phases in order. Each phase ends with a **Done when** check.

## Prerequisites
- Node.js 18+ and npm, Git, a GitHub account, a Vercel account (free).
- Assets ready (or use placeholders): portrait photo (PNG with transparent bg for hero + one regular photo for About), resume PDF, screenshots of the 3 projects, GitHub repo links, favicon.

---

## Phase 0 — Project Setup
```bash
npm create vite@latest kajal-portfolio -- --template react-ts
cd kajal-portfolio
npm install
npm install framer-motion lucide-react react-icons react-hook-form
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```
- Configure `tailwind.config.js` `content: ["./index.html","./src/**/*.{ts,tsx}"]`.
- Add the color tokens, fonts, radii and shadows from `design.md` §2–4 to `theme.extend`.
- Add Google Fonts (Space Grotesk, Inter, JetBrains Mono) to `index.html`.
- Set global styles in `src/index.css`: `bg-[#050B1A] text-[#F2F6FF]`, smooth scroll, selection color.

**Done when:** `npm run dev` shows a dark blank page with correct fonts.

## Phase 1 — Folder Structure
```
src/
  assets/            images (webp), icons
  components/ui/     Button, Chip, Card, SectionHeading, StatBox, Reveal
  components/        Navbar, Footer
  sections/          Hero, TechMarquee, About, Projects, Services,
                     Experience, Skills, Certifications, Contact
  data/content.ts    ALL text, links, projects, skills, timeline
  hooks/             useScrollSpy.ts
  App.tsx, main.tsx, index.css
public/
  Kajal_Mohapatra_Resume.pdf, favicon.svg, og-image.png, robots.txt, sitemap.xml
```
**Done when:** structure exists and `content.ts` is filled from `Instructions.md` §4.

## Phase 2 — UI Primitives
Build `Button` (primary/ghost), `Chip`, `Card` (hover lift + border glow), `SectionHeading` (small label + H2 with highlighted words), `StatBox`, `Reveal` (Framer Motion in-view fade-up, once, reduced-motion safe).

**Done when:** a temporary test page shows every primitive in all states.

## Phase 3 — Navbar + Hero
- Sticky blurred navbar, scroll-spy active link, mobile drawer, "Let's Talk" pill.
- Hero per `design.md` §5.2: H1, sub-copy, two buttons, social circles, portrait with rotating ring + floating `Python` / `RAG` chips.
- Add concentric-ring and line-grid decor as inline SVG components.

**Done when:** hero matches the template's composition on desktop and stacks cleanly on mobile.

## Phase 4 — Tech Marquee + About
- Marquee using a CSS keyframe loop (duplicate the list for seamless scroll), pause on hover.
- About two-column layout with framed photo, paragraph, 3 stat boxes (8.53 CGPA · 3 Projects · 11-course IBM cert), CTA button.

## Phase 5 — Projects
- Data-driven cards from `content.ts` (title, description, chips, image, `repoUrl`, `demoUrl?`).
- Arrow button opens repo (new tab, `rel="noopener noreferrer"`).
- Mobile: horizontal snap-scroll with dots.
- Optional: modal/detail view with problem → approach → stack → result bullets taken from resume wording.

**Done when:** all 3 projects render with real screenshots or labeled placeholders.

## Phase 6 — Services, Experience, Skills, Certifications
- "What I Do" 4 cards.
- Timeline for DRDO internship + B.Tech + school marks.
- Skills as grouped chip clusters (6 groups from the resume).
- Certifications + ENIGMA / IEEE activities as compact cards.

## Phase 7 — Contact + Footer
- Form with `react-hook-form` (name, email, message; validate required + email format).
- Submit to Formspree endpoint: `https://formspree.io/f/<YOUR_ID>` — store ID in `.env` as `VITE_FORMSPREE_ID`.
- Success/error states inline. Honeypot field for spam.
- Direct links: `mailto:kajal.mohapatraa@gmail.com`, LinkedIn, GitHub.

## Phase 8 — Polish
- Motion pass: stagger hero, reveal sections, hover micro-interactions.
- Responsive QA at 375 / 768 / 1280 / 1920.
- Accessibility: focus rings, alt text, heading order, keyboard nav, contrast check.
- Performance: convert images to WebP, lazy-load, `font-display: swap`, check bundle size.
- SEO: title, meta description, Open Graph/Twitter tags, favicon, sitemap, robots.

**Done when:** Lighthouse (mobile) ≥ 90 / 95 / 95 / 95.

## Phase 9 — Deploy
```bash
git init && git add . && git commit -m "Initial portfolio"
git remote add origin https://github.com/Kajal-0311/kajal-portfolio.git
git push -u origin main
```
- Import the repo in Vercel → framework "Vite" → add `VITE_FORMSPREE_ID` env var → Deploy.
- Optional: custom domain (e.g., `kajalmohapatra.dev`), then update canonical + OG URLs.

## Phase 10 — Post-Launch
- Add the live URL to resume, LinkedIn and GitHub profile README.
- Pin the 3 project repos on GitHub; each repo needs a clear README with screenshots, setup steps and the tech stack.
- Update `content.ts` whenever you finish a project or certificate — nothing else needs to change.

---

## Final Checklist
- [ ] No lorem ipsum, no "Tahira", no template photos
- [ ] Every number/claim traceable to the resume
- [ ] All `TODO(kajal)` placeholders resolved (photos, screenshots, repo/demo links, Formspree ID)
- [ ] Resume PDF downloads correctly
- [ ] Contact form delivers an email
- [ ] Works on mobile Safari + Chrome Android
- [ ] Lighthouse targets met
- [ ] Deployed and linked on resume/LinkedIn

## Optional Upgrades (after v1)
- **"Ask my portfolio" chatbot** — reuse your RAG skills: embed `content.ts` + resume and answer recruiter questions via a small serverless function.
- **Blog/notes section** — short write-ups on your ML projects (feature engineering for invoice risk, local RAG architecture).
- **Dark/light toggle** — only if you also design a light token set.
- **Live Streamlit demo links** from Streamlit Community Cloud, embedded as "Try it" buttons.
