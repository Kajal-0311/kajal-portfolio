# design.md — Kajal Mohapatra Portfolio

Adapted from the dark-navy "designer portfolio" template (Tahira) and re-themed for an **AI/ML + Data Science** student. Layout skeleton is kept (hero → logo strip → about + stats → projects → services → footer); content, imagery and extra sections are changed to match the resume.

---

## 1. Brand & Tone
- **Positioning:** "AI/ML Engineer in the making" — builds ML apps, RAG systems and data dashboards.
- **Tone:** confident, clean, technical but friendly. Short sentences. No buzzword stuffing.
- **Feel:** dark, calm, premium; blue glow as the single accent. Subtle "data/neural" motifs instead of designer-style mockups.

## 2. Color Tokens
| Token | Hex | Use |
|---|---|---|
| `--bg-900` | `#050B1A` | page background |
| `--bg-800` | `#081430` | alternating section background |
| `--surface` | `#0C1B3D` | cards, stat boxes |
| `--surface-2` | `#11264F` | hover state of cards |
| `--border` | `rgba(120,160,255,0.15)` | 1px card borders |
| `--accent` | `#1E7BFF` | buttons, highlighted words, links |
| `--accent-glow` | `rgba(30,123,255,0.35)` | glows, shadows |
| `--accent-2` | `#38E1FF` | rare secondary accent (chart lines, small badges) |
| `--text` | `#F2F6FF` | headings |
| `--text-muted` | `#9FB0D0` | body copy |

Rules: accent blue only for 1–2 words per heading, primary buttons, and active nav. Never use more than one gradient per screen.

## 3. Typography
- **Headings:** `Space Grotesk` (700) — uppercase for hero + section titles, tight tracking (-0.01em).
- **Body:** `Inter` (400/500).
- **Mono (labels, tags, code chips):** `JetBrains Mono` (500).
- Scale (desktop / mobile): H1 64/40, H2 40/28, H3 22/20, body 16/15, label 12 uppercase with 0.15em tracking.

## 4. Spacing, Shape, Effects
- Container max-width **1200px**, side padding 24px (mobile) / 48px (desktop).
- Section vertical padding: 96px desktop / 64px mobile.
- Radius: cards 20px, buttons 999px (pill), image frame 28px, chips 8px.
- Card: `--surface` bg, 1px `--border`, soft shadow `0 20px 60px -20px var(--accent-glow)`.
- Background decor: faint radial glows in blue, plus thin concentric-ring / line-grid motifs (from the template's circular line ornaments) — keep opacity ≤ 0.25.

## 5. Page Structure (top → bottom)

### 5.1 Navbar (sticky, blurred)
- Left: logo mark `K.` in a blue rounded square + "KAJAL".
- Links: Home · About · Projects · Skills · Experience · Contact (underline on active, scroll-spy).
- Right: pill button **"Let's Talk"** → scrolls to Contact. On mobile: hamburger → full-screen drawer.

### 5.2 Hero
- Small label chip: `KAJAL MOHAPATRA`.
- H1: **"HI! I'M KAJAL."** / second line in blue: **"I BUILD ML & GEN-AI APPS."**
- Sub-copy (2 lines max): *CS undergrad (AI & ML) at VSSUT building machine learning apps, RAG systems and data dashboards with Python. Open to AI/ML, Data Science & Software internships.*
- Buttons: primary pill **"Get in Touch"**; secondary ghost **"Download Resume"** (PDF).
- Social circles: GitHub, LinkedIn, Email.
- Right side: **portrait photo of Kajal** (transparent PNG or rounded photo) over a concentric line-ring ornament with 2 floating dark glass orbs — same composition as the template. Add 2 small floating "chips" near the photo: `Python` and `RAG`, gently bobbing.

### 5.3 Tech Marquee (replaces the "logoipsum" strip)
Infinite horizontal scroll of tech logos/wordmarks in muted white, grayscale → color on hover:
`Python · Scikit-learn · Pandas · NumPy · SQL · LangChain · Ollama · ChromaDB · Streamlit · Git/GitHub`

### 5.4 About
- Two columns. Left: framed photo (rounded 28px, glass border) with ring ornament. Right: label `ABOUT ME`.
- H2: **"I TURN DATA INTO WORKING AI PRODUCTS"** (highlight "AI PRODUCTS").
- Paragraph (≈60 words) drawn from the resume summary: ML web app, local RAG tutor, DRDO research internship on computational imaging.
- **Stat boxes (3 across)** — real numbers only:
  - `8.53` CGPA
  - `3` Major Projects
  - `11` Course IBM Data Analyst Cert
- Button: "Get in Touch".

### 5.5 Recent Projects (replaces "Website Design" cards)
Three cards, same white/light card style as the template or dark glass (pick dark glass for consistency). Each card: thumbnail (screenshot or generated architecture diagram), title, tech chips, 2-line description, circular blue arrow button → project page/GitHub.

1. **Vendor Invoice Intelligence Portal** — Freight cost regression + Random Forest invoice-risk flagging, Streamlit dashboard. Chips: `Scikit-learn` `Pandas` `SQL` `Streamlit`.
2. **Agentic AI-Powered RAG Tutor** — Fully offline tutor on Llama 3 via Ollama, LangChain + ChromaDB retrieval. Chips: `LangChain` `Ollama` `ChromaDB` `Streamlit`.
3. **Quantum Imaging for Disaster Search & Rescue** — Computational ghost-imaging simulation under noisy conditions. Chips: `NumPy` `SciPy` `Matplotlib`.

Carousel dots under the cards on mobile (cards stack/scroll horizontally).

### 5.6 What I Do (replaces "Design Services I Am Providing")
4 cards with line icons:
- **Machine Learning** — regression, classification, GridSearchCV tuning, model evaluation.
- **Generative AI & RAG** — local LLM pipelines, embeddings, vector search.
- **Data Analytics** — SQL, Pandas, cleaning, dashboards (IBM Data Analyst certified).
- **Python Web Apps** — Streamlit front-ends, ML backends with Joblib inference.

### 5.7 Experience & Education (new)
Vertical timeline with blue node dots:
- **DRDO Intern – Virtual Reality Team**, PXE Chandipur · 18 May – 17 Jun 2026 · quantum illumination & image reconstruction using correlation analysis.
- **B.Tech CSE (AI & ML)**, VSSUT Burla · 2024–2028 · CGPA 8.53.
- Smaller row: Intermediate (CHSE) 89.67% · Secondary (BSE) 90.67%.

### 5.8 Skills (new)
Grouped chip clusters matching resume categories: Languages · ML & Data Science · Generative AI & RAG · Tools & Deployment · Databases · Computational Research. Chips use `JetBrains Mono`, `--surface` bg, hover glow.

### 5.9 Certifications & Activities (new, compact)
- IBM Data Analyst Professional Certificate (Coursera) — Feb 2026
- Internship Training Certificate — DRDO PXE — Jun 2026
- ENIGMA Coding Club (AI/ML Domain) · IEEE Web Development Member (hosted *Binary Battle* on IEEE Day)

### 5.10 Contact + Footer
- H2: **"LET'S BUILD SOMETHING TOGETHER"**.
- Left: email, LinkedIn, GitHub, location (Odisha, India). Right: form (Name, Email, Message) with pill submit.
- Footer: small logo, nav links, © 2026 Kajal Mohapatra.

## 6. Components
- **Button primary:** bg `--accent`, white text, pill, 14px 28px padding, hover → lift 2px + glow.
- **Button ghost:** transparent, 1px `--border`, hover → border `--accent`.
- **Chip:** 12px mono, `--surface` bg, 1px border, radius 8px.
- **Card:** see §4; hover → translateY(-6px) and border becomes `--accent` at 40% opacity.
- **Stat box:** big number (Space Grotesk 32px), muted label beneath.

## 7. Motion
- Hero text: fade-up stagger (0.08s). Photo: slow scale-in + ring rotating 60s linear loop.
- Sections: reveal on scroll (opacity 0→1, y 24→0, 0.5s ease-out, once).
- Marquee: 30s linear infinite, pause on hover.
- Respect `prefers-reduced-motion` — disable all loops and reveals.

## 8. Responsive
- ≥1024px: two-column hero/about, 3-col project grid, 4-col services.
- 640–1023px: hero stacks (photo below text), projects 2-col, services 2-col.
- <640px: single column, nav drawer, marquee stays, stat boxes stay 3-across but smaller.

## 9. Imagery
- Use **Kajal's own photos** (hero cutout + about portrait). Do not use the template's model photos.
- Project thumbnails: real screenshots of each Streamlit app; for the ghost-imaging project use a Matplotlib reconstruction figure.
- Optimize: WebP, ≤ 200KB each, explicit width/height, descriptive alt text.

## 10. Accessibility
- Contrast ≥ 4.5:1 for body text (`--text-muted` on `--bg-900` passes).
- Visible focus ring (2px `--accent-2`). Semantic landmarks, one `<h1>`, keyboard-navigable nav and carousel.
