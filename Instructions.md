# Instructions.md — Rules for the AI Coding Assistant

You are building the personal portfolio website of **Kajal Mohapatra**, a B.Tech CSE (AI & ML) student at VSSUT Burla, using `design.md` as the visual source of truth and `Build.md` as the step-by-step plan. Read both fully before writing code.

## 1. Goal
A fast, single-page, dark-themed portfolio that helps Kajal land **AI/ML, Data Science, Data Analytics and Software Development internships**. A recruiter should understand who she is, see her 3 projects, and be able to contact her or download her resume in under 60 seconds.

## 2. Tech Stack (do not substitute without asking)
- **Vite + React 18 + TypeScript** (JS is acceptable if the user prefers; keep types light)
- **Tailwind CSS v3** with design tokens from `design.md` in `tailwind.config`
- **Framer Motion** for reveal/stagger animations
- **lucide-react** for icons, `react-icons` for brand logos (GitHub, LinkedIn, Python, etc.)
- **react-hook-form** + **Formspree** (or EmailJS) for the contact form — no custom backend
- Fonts via Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Hosting: **Vercel** (primary) or GitHub Pages
- Package manager: npm

## 3. Content Rules (critical)
- Use **only facts from the resume**. Never invent metrics, employers, awards, accuracy scores, user counts or links.
- Allowed numbers: CGPA 8.53, 3 projects, 11-course IBM certificate, DRDO internship 18 May – 17 Jun 2026, 89.67% (Intermediate), 90.67% (Secondary).
- Where a real asset is missing, add a clearly marked placeholder: `TODO(kajal): replace with …` and make the UI still look good.
- Keep all copy in a single file: `src/data/content.ts` (profile, socials, projects, skills, timeline, certifications). Components must read from it — **no hard-coded text inside components**.
- Copy style: first person, short, concrete, no clichés ("passionate", "hard-working", "rockstar").

## 4. Content Source (put these into `content.ts`)
- **Name:** Kajal Mohapatra
- **Email:** kajal.mohapatraa@gmail.com
- **LinkedIn:** linkedin.com/in/kajal-mohapatra-286554308
- **GitHub:** github.com/Kajal-0311
- **Location:** Odisha, India
- **Summary:** CSE undergraduate (AI & ML) with hands-on experience in Python, machine learning and Generative AI; built a full-stack ML web app, a local RAG tutoring system, and completed a DRDO research internship on Python-based computational imaging.
- **Projects:** Vendor Invoice Intelligence Portal · Agentic AI-Powered RAG Tutor · Quantum Imaging for Disaster Search and Rescue (details and tech chips in `design.md` §5.5 and the resume bullets).
- **Skills:** Python, SQL, C, C++, JavaScript · Scikit-learn, Pandas, NumPy, Regression, Classification, Preprocessing, Feature Scaling, Model Evaluation, GridSearchCV · RAG, LangChain, Ollama, Llama 3, ChromaDB, PyPDF, nomic-embed-text · Streamlit, Git, GitHub, VS Code · MySQL, SQL, ChromaDB · Computational Ghost Imaging, Pearson Correlation, Matplotlib, SciPy.
- **Experience:** DRDO Intern – Virtual Reality Team, PXE Chandipur.
- **Certifications:** IBM Data Analyst Professional Certificate (Feb 2026); DRDO PXE Internship Training Certificate (Jun 2026).
- **Activities:** ENIGMA Coding Club (AI/ML Domain, 2025–Present); IEEE Web Development Member (2025–Present), hosted Binary Battle on IEEE Day.

## 5. Code Standards
- Functional components + hooks only. One component per file in `src/components/`, sections in `src/sections/`.
- Section components: `Navbar, Hero, TechMarquee, About, Projects, Services, Experience, Skills, Certifications, Contact, Footer`.
- Reusable UI in `src/components/ui/`: `Button, Chip, Card, SectionHeading, StatBox, Reveal`.
- No inline styles except for dynamic values. Use Tailwind utility classes and the tokens from `design.md`.
- No `any`, no unused imports, no console logs in final code. Run `npm run lint` and `npm run build` clean before finishing.
- Keep dependencies minimal; don't add UI kits (MUI, Chakra, etc.).

## 6. Quality Bar
- **Lighthouse targets:** Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 (mobile).
- Images: WebP, lazy-loaded below the fold, explicit dimensions, alt text.
- Fully responsive per `design.md` §8; test at 375px, 768px, 1280px, 1920px.
- Honor `prefers-reduced-motion`.
- Smooth scroll with scroll-spy for navbar; in-page anchors `#home #about #projects #skills #experience #contact`.
- SEO: title "Kajal Mohapatra — AI/ML & Data Science Portfolio", meta description, Open Graph image, favicon, `sitemap.xml`, `robots.txt`.

## 7. Behaviors to Avoid
- Don't copy the template's person photos, "TAHIRA" name, lorem ipsum, or the "UI/UX designer" copy.
- Don't use stock "designer" mockups as project thumbnails.
- Don't add a backend, database or auth.
- Don't embed analytics or trackers unless asked.
- Don't change the color palette or fonts from `design.md`.

## 8. How to Work
1. Follow `Build.md` phase by phase; finish and verify each phase before starting the next.
2. After each phase, state what was built and how to preview it (`npm run dev`).
3. If something is ambiguous (e.g., missing live links), ask one concise question or use a `TODO(kajal)` placeholder — don't guess.
4. At the end, output a checklist of every `TODO(kajal)` still in the code.
