# Deployment ke GitHub Pages

## Prasyarat
- Branch utama bernama `main`.
- GitHub Pages source: GitHub Actions.

## Langkah Deploy
1. Push code ke branch `main`.
2. Workflow `.github/workflows/deploy.yml` akan berjalan otomatis.
3. Build dilakukan dengan base path:
   `npm run build -- --base=/${REPO_NAME}/`
4. Artifacts diupload dan dideploy via `actions/deploy-pages@v4`.

## Environment Variables
- Buat `VITE_API_URL` dan `VITE_GOOGLE_MAPS_API_KEY` di repository settings jika dibutuhkan.
- Untuk local, gunakan file `.env` berdasarkan `.env.example`.

## Troubleshooting
### Blank Screen setelah deploy
- Pastikan build memakai `--base=/${REPO_NAME}/`.
- Pastikan route fallback ditangani client-side (browser refresh di sub-route harus ke `index.html`).

### Asset 404
- Pastikan semua path asset publik menggunakan awalan root relatif atau `import` Vite.

### Variabel env tidak terbaca
- Pastikan prefix variabel menggunakan `VITE_`.