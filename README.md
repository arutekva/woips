# 🌟 WOIPS - Wahana Olimpiade IPS

Platform terintegrasi untuk pejuang OSN IPS. Tiga aplikasi dalam satu!

## 📱 Aplikasi dalam WOIPS

### 1. **OLYMPEDIA** - Gudang Materi
- Repository materi OSN IPS
- Preview Google Drive langsung
- Bookmark dan progress tracking
- Kategori: Geografi, Ekonomi, Sejarah, Sosiologi

### 2. **OLYMAP** - Roadmap Belajar
- To-do list interaktif seperti peta
- Tracking progress per topik
- Target deadline belajar
- Pin materi prioritas

### 3. **OLYMNOTE** - Glosarium Istilah
- Kumpulan istilah sulit + penjelasan
- Filter per kategori
- Pencarian cepat
- Share istilah ke teman

## 🚀 Teknologi
- Jekyll Static Site Generator
- Bootstrap 5.3.2
- Google Drive API (preview)
- LocalStorage untuk data user
- PWA ready (Service Worker + Manifest)

## 📁 Struktur Proyek
```
woips/
├── _config.yml                    # Konfigurasi utama Jekyll
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── main.css               # Style global
│   │   ├── woips.css              # Style spesifik WOIPS
│   │   ├── olymap.css              # Style spesifik OLYMAP
│   │   └── olymnote.css            # Style spesifik OLYMNOTE
│   │
│   ├── js/
│   │   ├── main.js                 # Inisialisasi global
│   │   ├── router.js                # Router untuk navigasi
│   │   ├── woips.js                 # Logic WOIPS
│   │   ├── olymap.js                 # Logic OLYMAP
│   │   └── olymnote.js               # Logic OLYMNOTE
│   │
│   └── images/
│       ├── logo-woips.png
│       ├── logo-olymap.png
│       ├── logo-olymnote.png
│       └── favicon.ico
│
├── _includes/
│   ├── bottom-nav.html              # Navigasi bawah (3 app)
│   ├── header.html                  # Header global
│   ├── footer.html                  # Footer global
│   ├── modals/
│   │   ├── settings-modal.html
│   │   └── help-modal.html
│   └── apps/
│       ├── woips-header.html        # Header spesifik WOIPS
│       ├── olymap-header.html
│       └── olymnote-header.html
│
├── _layouts/
│   ├── default.html                 # Layout default dengan bottom nav
│   ├── app.html                      # Layout untuk halaman aplikasi
│   └── file.html                      # Layout untuk viewer file
│
├── _data/
│   └── navigation.yml                # Konfigurasi navigasi
│
├── _sass/
│   ├── _variables.scss
│   ├── _bottom-nav.scss               # Style bottom navigation
│   └── _themes.scss                    # Tema warna per aplikasi
│
├── index.html                          # Landing page (pilih aplikasi)
│
├── olympedia/                              # Aplikasi WOIPS
│   ├── index.html                      # Halaman utama WOIPS
│   ├── file/
│   │   └── [id].html                    # Halaman viewer file (base32)
│   └── data/
│       └── materials.json                # Data materi WOIPS
│
├── olymap/                              # Aplikasi OLYMAP
│   ├── index.html                      # Halaman utama OLYMAP
│   └── data/
│       └── roadmaps.json                  # Data roadmap
│
├── olymnote/                            # Aplikasi OLYMNOTE
│   ├── index.html                      # Halaman utama OLYMNOTE
│   └── data/
│       └── glossary.json                  # Data glosarium
│
└── service-worker.js                     # PWA support (opsional)
```
## 🔧 Instalasi & Development
1. Clone repository
2. Jalankan `jekyll serve` (jika ada Ruby)
3. Atau langsung deploy ke GitHub Pages

## 📞 Kontak
- Instagram: [@studekasa](https://instagram.com/studekasa)
- Email: studekasa@outlook.com

## © 2026 Studekasa Labs
Dibuat untuk 🇮🇩 pejuang OSN IPS
