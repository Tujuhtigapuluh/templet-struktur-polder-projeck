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