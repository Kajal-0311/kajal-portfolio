# ☕ Kajal Mohapatra — Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.1-FF0055?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Oxlint](https://img.shields.io/badge/Oxlint-Clean_0_Errors-brightgreen?style=flat-square)](https://oxc.rs/)

> **"I turn data into working AI products."**  
> A high-performance, mobile-responsive personal portfolio designed with an editorial **Warm Beige & Coffee Brown** aesthetic. Built for **Kajal Mohapatra**, Computer Science undergraduate (AI & ML) at VSSUT Burla and former DRDO research intern.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Design System & Theme](#-design-system--theme)
- [Key Features](#-key-features)
- [Sections & Content](#-sections--content)
- [Interactive Highlight: Persian Beige Kittens](#-interactive-highlight-persian-beige-kittens)
- [Mobile-First Responsiveness](#-mobile-first-responsiveness)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration & Customization](#-configuration--customization)
- [Deployment](#-deployment)
- [Connect with Kajal](#-connect-with-kajal)

---

## 🌟 Overview

This repository hosts the source code for Kajal Mohapatra's modern personal portfolio. The website highlights hands-on experience developing end-to-end Machine Learning web applications, zero-cloud local Retrieval-Augmented Generation (RAG) systems, and quantum computational imaging research conducted at the Defence Research and Development Organisation (DRDO).

### Highlights:
- **Academic Foundation:** B.Tech in CSE (AI & ML) at Veer Surendra Sai University of Technology (VSSUT), Burla — **CGPA: 8.53**.
- **Industry Experience:** Research internship with the Virtual Reality Team at DRDO PXE Chandipur on Quantum Ghost Imaging and Correlation Reconstruction.
- **Full-Stack ML Engineering:** End-to-end models (Random Forest, GridSearchCV, Scikit-learn), offline LLMs (Llama 3, Ollama, LangChain, ChromaDB), and interactive Streamlit web apps.
- **Professional Certifications:** IBM Data Analyst Professional Certificate (11-course specialization) & DRDO Internship Certification.

---

## 🎨 Design System & Theme

The portfolio follows an editorial **Warm Beige & Coffee Brown** theme designed for elegance, warmth, and high readability. It avoids generic dark modes, neon highlights, and stark white backgrounds.

| Role | Color Hex | Sample | Description |
| :--- | :---: | :---: | :--- |
| **Main Background** | `#EDE0CC` | ![#EDE0CC](https://via.placeholder.com/15/EDE0CC/000000?text=+) | Primary page canvas, warm and creamy beige |
| **Alternate Section** | `#E8DAC5` | ![#E8DAC5](https://via.placeholder.com/15/E8DAC5/000000?text=+) | Secondary section background providing subtle tonal depth |
| **Card & Container** | `#F2E7D8` | ![#F2E7D8](https://via.placeholder.com/15/F2E7D8/000000?text=+) | Soft sand / cream background for project & info cards |
| **Primary Headings** | `#54351F` | ![#54351F](https://via.placeholder.com/15/54351F/000000?text=+) | Deep mocha brown for high-contrast titles |
| **Secondary Headings** | `#75451F` | ![#75451F](https://via.placeholder.com/15/75451F/000000?text=+) | Rich coffee brown for subheadings & accents |
| **Highlighted Accents** | `#B9875B` | ![#B9875B](https://via.placeholder.com/15/B9875B/000000?text=+) | Caramel beige for tags, active indicators & text highlights |
| **Primary Buttons** | `#75451F` | ![#75451F](https://via.placeholder.com/15/75451F/000000?text=+) | Coffee brown with white text for maximum legibility |
| **Borders & Dividers** | `#D2BFA6` | ![#D2BFA6](https://via.placeholder.com/15/D2BFA6/000000?text=+) | Warm beige borders for subtle visual separation |
| **Body Text** | `#44372E` | ![#44372E](https://via.placeholder.com/15/44372E/000000?text=+) | Dark warm espresso brown for comfortable long-form reading |

---

## ✨ Key Features

- ⚡ **Ultra-Fast Performance:** Bundled with Vite 8 and React 19 for instantaneous hot module replacement and production builds.
- 📱 **Mobile-First Responsive Layout:** Designed from 320px screen widths (iPhone SE / compact smartphones) up to 4K displays.
- 🔒 **Body Scroll-Locked Mobile Drawer:** Hamburger navigation prevents background scrolling when open and accommodates landscape screens smoothly.
- 🐾 **Persian Beige Kittens Interactive Feature:** Cute, animated Persian kittens that stroll from the corners, meet nose-to-nose, wag their fluffy tails, and display speech bubbles in sync with synthetic sound effects.
- 🎯 **Scroll Spy Navigation:** Active section detection updates the sticky navbar dynamically as the user scrolls.
- ✉️ **Integrated Contact Form:** Built with React Hook Form and styled for direct submissions via Formspree.
- ♿ **Accessible & Reduced-Motion Respectful:** Fully respects `prefers-reduced-motion` and keyboard accessibility standards.

---

## 📂 Sections & Content

1. **Navigation Bar (`Navbar.tsx`):**
   - Translucent frosted glass effect (`backdrop-blur-md`).
   - Sticky navigation with scroll spy indicator.
   - Mobile slide-down drawer with scroll locking and direct contact channels.

2. **Hero Section (`Hero.tsx`):**
   - Editorial headline: *"HI! I'M KAJAL. I BUILD ML & GEN-AI APPS."*
   - Framed portrait with concentric ring ornaments and floating tech tags (Python 3, RAG).
   - Direct CTA buttons: *"Explore My Work"* and *"Get in Touch"*.
   - Includes the Persian kitten welcoming sequence.

3. **Tech Stack Marquee (`TechMarquee.tsx`):**
   - Infinite animated banner showcasing core technologies: Python, Scikit-learn, Pandas, NumPy, SQL, LangChain, Ollama, ChromaDB, Streamlit, Git, Llama 3, SciPy, Matplotlib, MySQL, Joblib.

4. **About Section (`About.tsx`):**
   - Narrative overview of academic achievements, technical philosophy, and engineering mindset.
   - Interactive metric cards: **8.53 CGPA**, **3 Engineered Projects**, **11-Course IBM Professional Certificate**.
   - Resume download action and direct outreach button.

5. **Projects Section (`Projects.tsx`):**
   - **Vendor Invoice Intelligence Portal:** Freight cost regression and Random Forest invoice risk classification with an interactive Streamlit dashboard.
   - **Agentic AI-Powered RAG Tutor:** Zero-cloud offline RAG tutor using Llama 3 via Ollama, LangChain, and ChromaDB vector retrieval.
   - **Quantum Imaging for Disaster Search & Rescue:** Python-based computational ghost imaging simulation using random spatial light patterns and Pearson correlation algorithms under noisy conditions.

6. **What I Do / Services (`Services.tsx`):**
   - Machine Learning (Regression, Classification, Preprocessing, Model Tuning).
   - Generative AI & RAG (Offline LLMs, Vector Databases, Retrieval Chains).
   - Data Analytics & SQL (Business Intelligence, Wrangling, Statistical Testing).
   - Python Web Apps (Streamlit Dashboards, Model Deployment, Rapid Prototyping).

7. **Experience & Education (`Experience.tsx`):**
   - Vertical timeline tracing research at DRDO PXE Chandipur, undergraduate studies at VSSUT Burla, and educational milestones.

8. **Skills Section (`Skills.tsx`):**
   - Categorized pill grid: Programming Languages, ML & Data Science, Generative AI & RAG, Tools & Deployment, Databases, and Computational Research.

9. **Certifications & Achievements (`Certifications.tsx`):**
   - IBM Data Analyst Professional Certificate (Coursera · IBM).
   - Defence Research Internship Training Certificate (DRDO PXE).
   - Leadership & club activities with ENIGMA (Coding Club) and IEEE Student Branch VSSUT.

10. **Contact Section (`Contact.tsx`):**
    - Functional contact form with input validation.
    - Direct contact cards (Email: `kajal.mohapatraa@gmail.com`, Phone: `+91-8917385557`, Location: `Odisha, India`).
    - Social links (GitHub, LinkedIn).
    - Includes the Persian kitten farewell sequence.

11. **Footer (`Footer.tsx`):**
    - Quick navigation links, copyright, and smooth "Back to Top" scrolling.

---

## 🐱 Interactive Highlight: Persian Beige Kittens

Located at the bottom of the **Home (`Hero.tsx`)** and **Contact (`Contact.tsx`)** sections, the portfolio features an original interactive animation component (`KittyAnimation.tsx`).

### Sequence & Mechanics:
1. **Entry:** Two Persian beige kittens softly fade into view from opposite screen edges.
2. **Synchronized Walk:** They walk gracefully toward the center with lifelike paw-patter oscillations and fluffy tail wags.
3. **The Meeting:** They stop nose-to-nose in the center, wag their tails happily, tilt their heads, and display speech bubbles saying **"hello kajuuu 💗"**.
4. **Web Audio Synthesizer:** An integrated Web Audio API sound generator emits a soft kitten chirp/meow when the kittens meet (client-side synthesis, no external audio files required).
5. **Interactive Controls:**
   - ⏯️ **Pause / Play:** Freeze or resume the animation at any frame.
   - 🔊 **Sound Toggle:** Turn audio chimes on or mute them (persists state across sections).
   - 🔄 **Replay:** Restart the entrance animation on demand.
   - ♿ **Accessibility:** Automatically switches to a static, peaceful layout when `prefers-reduced-motion` is enabled.

---

## 📱 Mobile-First Responsiveness

The entire interface has been audited and refined to ensure zero horizontal scrolling and exceptional UX across every viewport:

- **Breakpoints:**
  - `xs`: `380px` (Compact mobile devices, iPhone SE)
  - `sm`: `640px` (Large phones & small tablets)
  - `md`: `768px` (Tablets)
  - `lg`: `1024px` (Laptops & desktops)
  - `xl`: `1280px` (Wide desktops)
- **Fluid Typography:** Headings utilize responsive clamping (`text-2xl xs:text-3xl sm:text-4xl lg:text-[42px]`) to maintain visual hierarchy without breaking words.
- **Adaptive Components:**
  - Hero actions adapt between vertical stacked taps on mobile and horizontal button rows on desktop.
  - Decorative rings and frames adapt via `scale-[0.65] xs:scale-75 sm:scale-90 lg:scale-100` and `max-w-[85vw]`.
  - Timeline indicators dynamically recalculate negative margins to avoid clipping screen edges.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven UI library |
| **TypeScript 7** | Type safety, interfaces, and developer ergonomics |
| **Vite 8** | Next-generation build tool and dev server |
| **Tailwind CSS 3.4** | Utility-first responsive styling and theme tokens |
| **Framer Motion 14** | Micro-interactions, reveals, and marquee animations |
| **Lucide React & React Icons** | Accessible iconography |
| **React Hook Form** | Form state management and client-side validation |
| **Web Audio API** | Synthetic in-browser sound effects |
| **Oxlint** | High-speed Rust-based linting engine |

---

## 📁 Project Structure

```
k:/My portfolio/
├── dist/                      # Production build output
├── node_modules/              # Dependencies
├── public/                    # Static public assets
│   ├── Kajal_Mohapatra_Resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/                # Images & media
│   │   ├── hero.png           # Hero illustration
│   │   └── kajal-photo.jpg    # Kajal Mohapatra portrait
│   ├── components/            # Reusable UI components
│   │   ├── ui/                # Atomic UI building blocks
│   │   │   ├── Button.tsx     # Themed button variations
│   │   │   ├── Card.tsx       # Sand/cream themed card container
│   │   │   ├── Chip.tsx       # Skill and tech tags
│   │   │   ├── ConcentricRings.tsx # Decorative SVG rings
│   │   │   ├── Reveal.tsx     # Scroll-triggered viewport animations
│   │   │   ├── SectionHeading.tsx  # Standardized responsive headings
│   │   │   └── StatBox.tsx    # About section metric boxes
│   │   ├── Footer.tsx         # Global footer
│   │   ├── KittyAnimation.tsx # Persian beige kittens component
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer
│   │   └── ProjectThumbnail.tsx # Visual project card preview
│   ├── data/
│   │   └── content.ts         # Centralized portfolio data & text content
│   ├── hooks/
│   │   └── useScrollSpy.ts    # Custom scroll spy observer hook
│   ├── sections/              # Page sections
│   │   ├── About.tsx          # Bio, stats, and resume CTA
│   │   ├── Certifications.tsx # Certificates & extracurriculars
│   │   ├── Contact.tsx        # Contact form, direct channels, kittens
│   │   ├── Experience.tsx     # Timeline of research & education
│   │   ├── Hero.tsx           # Intro banner, portrait, welcoming kittens
│   │   ├── Projects.tsx       # Detailed case study project cards
│   │   ├── Services.tsx       # Core domains (ML, Gen-AI, SQL, Web)
│   │   ├── Skills.tsx         # Technical competencies grid
│   │   └── TechMarquee.tsx    # Continuous marquee animation
│   ├── utils/
│   │   └── soundManager.ts    # Web Audio API kitten sound synthesizer
│   ├── App.css
│   ├── App.tsx                # Main application wrapper
│   ├── index.css              # Global styles & Tailwind directives
│   └── main.tsx               # Application entrypoint
├── .gitignore
├── .oxlintrc.json             # Oxlint configuration
├── index.html                 # HTML entry point with metadata
├── package.json               # Project manifest & scripts
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Comprehensive project documentation
├── tailwind.config.js         # Custom palette, breakpoints, animations
├── tsconfig.json              # TypeScript root configuration
├── tsconfig.app.json          # App TypeScript settings
├── tsconfig.node.json         # Node/Vite TypeScript settings
└── vite.config.ts             # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version **18.0.0** or higher recommended).

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kajal-0311/kajal-portfolio.git
   cd kajal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or the port specified in terminal).

### Production Build

Create an optimized, minified production build:
```bash
npm run build
```
The compiled static assets will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Code Quality & Linting

Run Oxlint to check code quality:
```bash
npm run lint
```

---

## ⚙️ Configuration & Customization

All text content, project descriptions, skills, and links are decoupled from layout code and centralized in a single file:

👉 **[`src/data/content.ts`](src/data/content.ts)**

### 1. Update Projects, Bio, or Links
Edit `portfolioData` inside `src/data/content.ts`:
```typescript
export const portfolioData = {
  profile: {
    name: "Kajal Mohapatra",
    email: "kajal.mohapatraa@gmail.com",
    githubUrl: "https://github.com/Kajal-0311",
    linkedinUrl: "https://linkedin.com/in/kajal-mohapatra-286554308",
    // ...
  },
  // ...
};
```

### 2. Configure Contact Form
To receive email submissions directly through the contact form:
1. Sign up at [Formspree](https://formspree.io/) and create a new form.
2. Replace `formspreeEndpoint` in `src/data/content.ts`:
   ```typescript
   contact: {
     formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   }
   ```

### 3. Replace Profile Photograph
Place your photo at `src/assets/kajal-photo.jpg` (or update `profile.avatarUrl` in `src/data/content.ts`).

---

## 🌐 Deployment

The site is built with pure static client-side assets and can be deployed with zero configuration on modern static hosting platforms:

### Deploy on Vercel
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Click **Deploy**.

### Deploy on Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Click **Deploy Site**.

### Deploy on GitHub Pages
Add a `deploy` script to `package.json` using `gh-pages` or set up GitHub Actions to publish the `dist/` folder to the `gh-pages` branch.

---

## 📬 Connect with Kajal

- **Name:** Kajal Mohapatra
- **Email:** [kajal.mohapatraa@gmail.com](mailto:kajal.mohapatraa@gmail.com)
- **Phone:** [+91-8917385557](tel:+918917385557)
- **LinkedIn:** [linkedin.com/in/kajal-mohapatra-286554308](https://linkedin.com/in/kajal-mohapatra-286554308)
- **GitHub:** [github.com/Kajal-0311](https://github.com/Kajal-0311)
- **Location:** Odisha, India

---

<div align="center">
  <sub>Designed & Developed with ☕ Warm Beige & Coffee Brown Aesthetics · © 2026 Kajal Mohapatra. All Rights Reserved.</sub>
</div>
