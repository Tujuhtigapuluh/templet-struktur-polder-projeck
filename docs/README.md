# Dokumentasi Proyek

## Setup Cepat
1. Clone repository.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.
4. Buka URL local dari Vite.

## Tech Stack
- React
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Helmet Async
- Leaflet + React Leaflet

## Struktur Folder Inti
- `src/components`: komponen reusable (common, layout, forms).
- `src/pages`: halaman utama website.
- `src/hooks`: custom hook (SEO, media query, animasi scroll).
- `src/services`: API service dan endpoint helper.
- `src/utils`: constants, helpers, validators.
- `src/styles`: global styles, variables, animations.

## Konvensi
- Gunakan alias `@/` untuk import dari `src`.
- Styling mengutamakan utility Tailwind.
- SEO tiap halaman dikelola lewat hook `useSEO`.

# Company Profile - PT. Delta Polder Indonesia

Website company profile untuk menampilkan layanan, proyek, tim, dan kontak PT. Delta Polder Indonesia.

## Struktur Folder Proyek

```bash
📂 polder-website/
├──📂 .github/
│   └──📂 workflows/
│       └──📄 deploy.yml
├──📂 config/
│   ├──📄 eslint.config.js
│   ├──📄 jest.config.js
│   └──📄 vite.config.js
├──📂 docs/
│   ├──📄 DEPLOYMENT.md
│   ├──📄 README.md
│   └──📄 SEO.md
├──📂 src/
│   ├──📂 assets/
│   │   ├──📂 fonts/
│   │   ├──📂 icons/
│   │   └──📂 images/
│   ├──📂 components/
│   │   ├──📂 common/
│   │   │   ├──📄 Badge.jsx
│   │   │   ├──📄 Button.jsx
│   │   │   ├──📄 Card.jsx
│   │   │   ├──📄 SectionTitle.jsx
│   │   │   └──📄 StatsCounter.jsx
│   │   ├──📂 forms/
│   │   │   ├──📄 ContactForm.jsx
│   │   │   ├──📄 Input.jsx
│   │   │   ├──📄 NewsletterForm.jsx
│   │   │   └──📄 Textarea.jsx
│   │   └──📂 layout/
│   │       ├──📄 Footer.jsx
│   │       ├──📄 Layout.jsx
│   │       ├──📄 Navbar.jsx
│   │       └──📄Sidebar.jsx
│   ├──📂 context/
│   │   └──📄 ThemeContext.jsx
│   ├──📂 hooks/
│   │   ├──📄 useMediaQuery.js
│   │   ├──📄 useScrollAnimation.js
│   │   └──📄 useSEO.js
│   ├──📂 pages/
│   │   ├──📂 About/
│   │   │   └──📄 index.jsx
│   │   ├──📂 Contact/
│   │   │   └──📄 index.jsx
│   │   ├──📂 Home/
│   │   │   └──📄 index.jsx
│   │   ├──📂 Projects/
│   │   │   └──📄 index.jsx
│   │   ├──📂 Services/
│   │   │   └──📄 index.jsx
│   │   └──📂 Team/
│   │       └──📄 index.jsx
│   ├──📂 services/
│   │   ├──📂 endpoints/
│   │   │   └──📄 contact.js
│   │   └──📄 api.js
│   ├──📂 styles/
│   │   ├──📄 animations.css
│   │   ├──📄 globals.css
│   │   └──📄 variables.css
│   ├──📂 utils/
│   │   ├──📄 constants.js
│   │   ├──📄 helpers.js
│   │   └──📄 validators.js
│   ├──📄 App.tsx
│   ├──📄 index.css
│   ├──📄 main.tsx
│   └──📄 types.d.ts
├──📄 .env.example
├──📄 .gitignore
├──📄 index.html
├──📄 package.json
├──📄 tailwind.config.js
├──📄 tsconfig.json
├──📄 vite.config.js
└──📄 vite.config.ts
```

## Menjalankan Proyek

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
```