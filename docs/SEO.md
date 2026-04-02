# Panduan SEO

## Meta Tags Dasar
Atur di setiap halaman menggunakan hook `useSEO`:
- `title`
- `description`
- `keywords`

## Open Graph
Sediakan data ini agar preview link lebih baik:
- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`

## Twitter Card
- `twitter:card` (pakai `summary_large_image`)
- `twitter:title`
- `twitter:description`

## Schema.org
Disarankan menambahkan JSON-LD untuk:
- Organization
- LocalBusiness
- Service

Contoh ringkas:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT. Delta Polder Indonesia",
  "url": "https://example.com"
}
</script>
```

## Checklist SEO per Halaman
- Judul unik.
- Description unik 140-160 karakter.
- Heading H1 tunggal.
- Alt text untuk gambar penting.