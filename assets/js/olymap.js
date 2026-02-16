/**
 * OLYMAP.JS - Main logic for Roadmap Belajar
 * Author: Studekasa
 */

// Default data for OLYMAP
const OLYMAP_DEFAULT_DATA = {
  "geo": [
    {
      "id": 1,
      "title": "🌍 Geologi: Lapisan Bumi & Tektonik",
      "tag": "#litosfer #tektonik",
      "note": "Pelajari: Komposisi inti dalam/luar, diskontinuitas Moho & Gutenberg, teori apungan benua, jenis batas lempeng, alat ukur gempa.",
      "date": "2024-12-01",
      "url": "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&auto=format&fit=crop",
      "link": "https://www.geologinesia.com/2023/03/struktur-lapisan-bumi.html",
      "pin": true,
      "done": false
    },
    {
      "id": 2,
      "title": "🌋 Vulkanisme & Tipe Gunung Api",
      "tag": "#vulkanologi",
      "note": "Pelajari: Perbedaan magma-lava-lahar, intrusi & ekstrusi magma, erupsi efusif vs eksplosif, tipe gunung api (perisai, strato, maar), manifestasi pasca vulkanik.",
      "date": "2024-12-01",
      "url": "https://images.unsplash.com/photo-1614022840786-da9363c2858e?w=800&auto=format&fit=crop",
      "link": "https://ilmugeografi.com/geologi/vulkanisme",
      "pin": false,
      "done": false
    },
    {
      "id": 3,
      "title": "🪨 Siklus & Jenis Batuan",
      "tag": "#petrologi",
      "note": "Pelajari: Klasifikasi batuan beku (dalam, gang, luar), sedimen (klastik, kimia, organik), metamorf (kontak, dinamo, pneumatolitik) beserta contohnya.",
      "date": "2024-12-02",
      "url": "https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.saintif.com/jenis-jenis-batuan/",
      "pin": false,
      "done": false
    },
    {
      "id": 4,
      "title": "🌱 Pedosfer: Profil & Jenis Tanah Indonesia",
      "tag": "#pedosfer",
      "note": "Pelajari: Horizon O-A-E-B-C-R, tekstur & struktur tanah, KTK, pH, klasifikasi tanah (Andosol, Aluvial, Organosol, Laterit, dll.), erosi & konservasinya.",
      "date": "2024-12-02",
      "url": "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://ilmugeografi.com/ilmu-bumi/tanah/jenis-jenis-tanah-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 5,
      "title": "🌫️ Atmosfer: Lapisan & Komposisi Udara",
      "tag": "#atmosfer",
      "date": "2026-12-18",
      "note": "Pelajari: 5 lapisan atmosfer (Troposfer hingga Eksosfer) & karakteristiknya, komposisi gas permanen, gradien termis, fungsi lapisan ozon.",
      "url": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&auto=format&fit=crop",
      "link": "https://www.kelaspintar.id/blog/edutech/lapisan-atmosfer-6786/",
      "pin": false,
      "done": false
    },
    {
      "id": 6,
      "title": "⛅ Cuaca, Iklim & Awan",
      "tag": "#klimatologi",
      "note": "Pelajari: Unsur cuaca/iklim (insolasi, tekanan, angin, kelembapan), jenis awan (Sirus, Kumulus, Stratus), proses adveksi/konveksi, efek rumah kaca.",
      "date": "2024-12-03",
      "url": "https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://ilmugeografi.com/ilmu-bumi/cuaca-dan-iklim/pengertian-cuaca-dan-iklim",
      "pin": false,
      "done": false
    },
    {
      "id": 7,
      "title": "💨 Sirkulasi Angin Global & Fenomena",
      "tag": "#angin #iklim",
      "note": "Pelajari: Sel Hadley-Ferrel-Polar, angin Passat/Barat/Timur, ITCZ, fenomena El Nino, La Nina, dan Dipole Mode beserta dampaknya.",
      "date": "2024-12-04",
      "url": "https://images.unsplash.com/photo-1563974318768-2f6eb6a4d0cf?w=800&auto=format&fit=crop",
      "link": "https://www.ruangguru.com/blog/sirkulasi-angin-di-bumi",
      "pin": false,
      "done": false
    },
    {
      "id": 8,
      "title": "💧 Hidrosfer: Siklus Air & Bentang Sungai",
      "tag": "#hidrosfer",
      "note": "Pelajari: Siklus air pendek/sedang/panjang, proses evapotranspirasi-infiltarsi-perkolasi, DAS, bentuk sungai (meander, oxbow lake, delta).",
      "date": "2024-12-04",
      "url": "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://ilmugeografi.com/hidrologi/siklus-air",
      "pin": false,
      "done": false
    },
    {
      "id": 9,
      "title": "🌊 Oseanografi: Karakteristik & Arus Laut",
      "tag": "#oseanografi",
      "note": "Pelajari: Salinitas, stratifikasi suhu (termoklin), arus laut utama (Kuroshio, Gulf Stream), upwelling, morfologi dasar laut.",
      "date": "2024-12-05",
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
      "link": "https://ilmugeografi.com/oseanografi/arus-laut",
      "pin": false,
      "done": false
    },
    {
      "id": 10,
      "title": "🌿 Biosfer: Faktor Persebaran & Bioma",
      "tag": "#biogeografi",
      "note": "Pelajari: 4 faktor persebaran flora-fauna (klimatik, edafik, fisiografis, biotik), 6 wilayah fauna Wallace, 7 bioma utama dunia.",
      "date": "2024-12-05",
      "url": "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kelaspintar.id/blog/tips-pintar/bioma-6754/",
      "pin": true,
      "done": false
    },
    {
      "id": 11,
      "title": "🦎 Fauna Indonesia & Garis Wallace",
      "tag": "#zoogeografi",
      "note": "Pelajari: Ciri fauna Asiatis, Peralihan, Australis beserta contohnya. Pahami perbedaan garis Wallace, Weber, dan Lydekker.",
      "date": "2024-12-06",
      "url": "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/persebaran-fauna-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 12,
      "title": "🛡️ SDA, Konservasi & Pembangunan Berkelanjutan",
      "tag": "#lingkungan",
      "note": "Pelajari: Klasifikasi SDA renewable vs non-renewable, konservasi in-situ/ex-situ, konsep green economy, AMDAL, carbon footprint.",
      "date": "2024-12-06",
      "url": "https://images.pexels.com/photos/2592801/pexels-photo-2592801.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://dlh.bulelengkab.go.id/informasi/detail/artikel/66-pengertian-amdal-analisis-mengenai-dampak-lingkungan",
      "pin": false,
      "done": false
    },
    {
      "id": 13,
      "title": "🚨 Mitigasi Bencana Alam",
      "tag": "#kebencanaan",
      "note": "Pelajari: Klasifikasi bencana (geologis, hidrometeorologis), siklus mitigasi (pra, saat, pasca), early warning system, rehabilitasi.",
      "date": "2024-12-07",
      "url": "https://images.unsplash.com/photo-1599059813005-2e2daf2b71f4?w=800&auto=format&fit=crop",
      "link": "https://bnpb.go.id/berita/pengertian-mitigasi-bencana",
      "pin": false,
      "done": false
    },
    {
      "id": 14,
      "title": "👨‍👩‍👧‍👦 Antroposfer: Dinamika & Kualitas Penduduk",
      "tag": "#kependudukan",
      "note": "Pelajari: Rumus CBR, CDR, proyeksi geometrik/eksponensial, jenis migrasi, indikator IPM, dependency ratio, bonus demografi.",
      "date": "2024-12-07",
      "url": "https://images.pexels.com/photos/3064069/pexels-photo-3064069.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.bps.go.id/subject/12/kependudukan.html",
      "pin": false,
      "done": false
    },
    {
      "id": 15,
      "title": "🏡 Pola Keruangan Desa-Kota & Interaksi",
      "tag": "#tataruang",
      "note": "Pelajari: Pola desa (memanjang, melingkar), teori struktur kota (Konsentris, Sektoral, Inti Ganda), hukum gravitasi & titik henti Reilly.",
      "date": "2024-12-08",
      "url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop",
      "link": "https://www.kompas.com/skola/read/2020/12/18/160000369/interaksi-desa-dan-kota",
      "pin": false,
      "done": false
    },
    {
      "id": 16,
      "title": "🗺️ Konsep Wilayah & Pusat Pertumbuhan",
      "tag": "#wilayah",
      "note": "Pelajari: Perbedaan wilayah formal, fungsional, vernakular. Teori pusat pertumbuhan (Polarisasi, Trickle Down, Spread & Backwash Effect).",
      "date": "2024-12-08",
      "url": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://jurnal.uns.ac.id/jpg/article/view/38744",
      "pin": false,
      "done": false
    },
    {
      "id": 17,
      "title": "🛰️ Teknologi Geospasial: SIG & Penginderaan Jauh",
      "tag": "#sig #inderaja",
      "note": "Pelajari: Komponen SIG, operasi (layering, buffering, overlay). Resolusi citra, interpretasi (rona, tekstur), jenis sensor/wahana.",
      "date": "2024-12-09",
      "url": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop",
      "link": "https://www.big.go.id/berita-single/pengertian-sig-dan-penginderaan-jauh",
      "pin": true,
      "done": false
    }
  ],
  "eco": [
    {
      "id": 18,
      "title": "⚖️ Kelangkaan & Sistem Ekonomi",
      "tag": "#pengantar",
      "note": "Pelajari: Konsep kelangkaan, biaya peluang, 3 masalah ekonomi, perbedaan sistem ekonomi (komando, pasar, campuran, Pancasila).",
      "date": "2024-12-01",
      "url": "https://images.pexels.com/photos/6693666/pexels-photo-6693666.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.zenius.net/blog/konsep-kelangkaan-dalam-ekonomi",
      "pin": false,
      "done": false
    },
    {
      "id": 19,
      "title": "🧠 Teori Perilaku Konsumen & Produsen",
      "tag": "#mikro",
      "note": "Pelajari: Hukum Gossen I & II, kurva indiferens & garis anggaran, fungsi produksi, law of diminishing return.",
      "date": "2024-12-01",
      "url": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      "link": "https://www.ruangguru.com/blog/teori-perilaku-konsumen",
      "pin": false,
      "done": false
    },
    {
      "id": 20,
      "title": "📊 Mekanisme Pasar & Elastisitas",
      "tag": "#mikro",
      "note": "Pelajari: Hukum permintaan/penawaran, pergeseran vs pergerakan kurva, harga keseimbangan, elastisitas harga/silang/pendapatan.",
      "date": "2024-12-02",
      "url": "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.zenius.net/blog/elastisitas-permintaan-dan-penawaran",
      "pin": false,
      "done": false
    },
    {
      "id": 21,
      "title": "🏢 Struktur Pasar (Sempurna hingga Monopoli)",
      "tag": "#mikro",
      "note": "Pelajari: Ciri-ciri pasar persaingan sempurna, monopoli, oligopoli (kurva patah), dan persaingan monopolistik.",
      "date": "2024-12-02",
      "url": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
      "link": "https://www.studiobelajar.com/struktur-pasar/",
      "pin": false,
      "done": false
    },
    {
      "id": 22,
      "title": "🧾 Siklus Akuntansi Dasar",
      "tag": "#akuntansi",
      "note": "Pelajari: Persamaan dasar akuntansi, proses dari bukti transaksi hingga neraca saldo, jurnal penyesuaian (AJP).",
      "date": "2024-12-03",
      "url": "https://images.pexels.com/photos/6693665/pexels-photo-6693665.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.jurnal.id/id/blog/siklus-akuntansi/",
      "pin": false,
      "done": false
    },
    {
      "id": 23,
      "title": "📈 Laporan Keuangan (Laba Rugi, Neraca)",
      "tag": "#akuntansi",
      "note": "Pelajari: Komponen & penyusunan Laporan Laba/Rugi, Laporan Perubahan Modal, Neraca, dan Laporan Arus Kas.",
      "date": "2024-12-03",
      "url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      "link": "https://www.ocbcnisp.com/id/article/2022/07/07/laporan-keuangan",
      "pin": true,
      "done": false
    },
    {
      "id": 24,
      "title": "📦 Akuntansi Dagang & Harga Pokok Penjualan",
      "tag": "#akuntansi",
      "note": "Pelajari: Syarat pembayaran (2/10, n/30), syarat penyerahan (FOB), jurnal khusus, perhitungan HPP (Harga Pokok Penjualan).",
      "date": "2024-12-04",
      "url": "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.paper.id/t/blog/harga-pokok-penjualan",
      "pin": false,
      "done": false
    },
    {
      "id": 25,
      "title": "📊 Analisis Rasio Keuangan",
      "tag": "#akuntansi #keuangan",
      "note": "Pelajari: Rasio Likuiditas (Current Ratio), Profitabilitas (ROA, ROE), Solvabilitas, dan Aktivitas.",
      "date": "2024-12-04",
      "url": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
      "link": "https://www.jojonomic.com/blog/rasio-keuangan/",
      "pin": false,
      "done": false
    },
    {
      "id": 26,
      "title": "💰 Pendapatan Nasional & Metode Hitung",
      "tag": "#makro",
      "note": "Pelajari: Konsep PDB, PNB, NNP, NNI, PI, DI. 3 metode penghitungan (Pendapatan, Pengeluaran, Produksi). PDB Riil vs Nominal.",
      "date": "2024-12-05",
      "url": "https://images.pexels.com/photos/7567567/pexels-photo-7567567.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.bps.go.id/subject/11/produk-domestik-bruto--lapangan-usaha-.html",
      "pin": true,
      "done": false
    },
    {
      "id": 27,
      "title": "💸 Kebijakan Moneter & Inflasi",
      "tag": "#moneter",
      "note": "Pelajari: Penyebab inflasi (demand-pull, cost-push), alat kebijakan moneter (OPT, discount rate, GWM), definisi uang M1 & M2.",
      "date": "2024-12-05",
      "url": "https://images.unsplash.com/photo-1621552141563-4ce2b8c4332a?w=800&auto=format&fit=crop",
      "link": "https://www.bi.go.id/id/moneter/kebijakan-moneter/default.aspx",
      "pin": false,
      "done": false
    },
    {
      "id": 28,
      "title": "🏛️ Kebijakan Fiskal & APBN",
      "tag": "#fiskal",
      "note": "Pelajari: Struktur APBN (penerimaan pajak/non-pajak, belanja), kebijakan fiskal ekspansif vs kontraktif, fungsi pajak & subsidi.",
      "date": "2024-12-06",
      "url": "https://images.pexels.com/photos/6693668/pexels-photo-6693668.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kemenkeu.go.id/apbn",
      "pin": false,
      "done": false
    },
    {
      "id": 29,
      "title": "🌐 Ekonomi Internasional: Kurs & Neraca",
      "tag": "#internasional",
      "note": "Pelajari: Sistem kurs (fixed, floating), devaluasi vs apresiasi, komponen Neraca Pembayaran (berjalan, modal), hambatan perdagangan.",
      "date": "2024-12-06",
      "url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
      "link": "https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/npk/default.aspx",
      "pin": false,
      "done": false
    },
    {
      "id": 30,
      "title": "👷‍♂️ Ketenagakerjaan & Jenis Pengangguran",
      "tag": "#ketenagakerjaan",
      "note": "Pelajari: Definisi angkatan kerja, TPAK, klasifikasi pengangguran (friksional, struktural, siklis, musiman).",
      "date": "2024-12-07",
      "url": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.bps.go.id/subject/6/tenaga-kerja.html",
      "pin": false,
      "done": false
    }
  ],
  "his": [
    {
      "id": 31,
      "title": "🗿 Zaman Praaksara: Batu & Logam",
      "tag": "#praaksara",
      "note": "Pelajari: Ciri kehidupan & hasil budaya tiap zaman (Paleolitikum, Mesolitikum, Neolitikum, Megalitikum), serta teori asal usul manusia Indonesia.",
      "date": "2024-12-01",
      "url": "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kelaspintar.id/blog/tips-pintar/zaman-praaksara-di-indonesia-12157/",
      "pin": false,
      "done": false
    },
    {
      "id": 32,
      "title": "🕉️ Hindu-Buddha: Teori Masuk & Kerajaan Awal",
      "tag": "#hindu-buddha",
      "note": "Pelajari: 4 teori masuk Hindu-Buddha (Brahmana, Ksatria, Waisya, Arus Balik), kerajaan Kutai (Yupa), Tarumanegara (prasasti).",
      "date": "2024-12-01",
      "url": "https://images.unsplash.com/photo-1600070787349-7b4b5d5f2c2b?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/kerajaan-hindu-budha-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 33,
      "title": "⚓ Sriwijaya & Majapahit: Kedatuan Maritim & Nusantara",
      "tag": "#hindu-buddha",
      "note": "Pelajari: Kejayaan Sriwijaya sebagai pusat perdagangan & agama Buddha, kejayaan Majapahit di bawah Gajah Mada & Sumpah Palapa.",
      "date": "2024-12-02",
      "url": "https://images.pexels.com/photos/1638347/pexels-photo-1638347.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kompas.com/stori/read/2022/10/06/090000779/kerajaan-sriwijaya-puncak-kejayaan-dan-penyebab-keruntuhan",
      "pin": true,
      "done": false
    },
    {
      "id": 34,
      "title": "☪️ Masuk & Berkembangnya Islam di Nusantara",
      "tag": "#islam",
      "note": "Pelajari: Teori masuk Islam (Gujarat, Persia, Mekkah), saluran penyebaran (dagang, perkawinan, pendidikan), peran Wali Songo.",
      "date": "2024-12-02",
      "url": "https://images.unsplash.com/photo-1562887189-e5d078343de4?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/kerajaan-islam-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 35,
      "title": "⚔️ Kerajaan-Kerajaan Islam Nusantara",
      "tag": "#islam",
      "note": "Pelajari: Perkembangan Samudera Pasai, Demak, Mataram Islam, Banten, Gowa-Tallo, Ternate-Tidore beserta peninggalan & kontribusinya.",
      "date": "2024-12-03",
      "url": "https://images.pexels.com/photos/5853381/pexels-photo-5853381.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/kerajaan-islam-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 36,
      "title": "🚢 Kolonialisme Portugis & VOC",
      "tag": "#kolonial",
      "note": "Pelajari: Tujuan kedatangan Portugis, sistem monopoli & kebijakan VOC (verplichte leverantie, contingenten), faktor kemunduran VOC.",
      "date": "2024-12-03",
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop",
      "link": "https://www.kompas.com/skola/read/2020/06/26/170000269/masa-pemerintahan-voc-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 37,
      "title": "🌾 Sistem Tanam Paksa & Politik Etis",
      "tag": "#kolonial",
      "note": "Pelajari: Kebijakan Tanam Paksa (Cultuurstelsel) Van den Bosch & dampaknya. Trilogi Politik Etis (Irigasi, Edukasi, Transmigrasi) beserta realitanya.",
      "date": "2024-12-04",
      "url": "https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/sistem-tanam-paksa",
      "pin": true,
      "done": false
    },
    {
      "id": 38,
      "title": "📜 Pergerakan Nasional: Awal & Sarekat Islam",
      "tag": "#pergerakan",
      "note": "Pelajari: Latar belakang kebangkitan nasional, peran Budi Utomo (1908), perkembangan Sarekat Islam (SI) dari ekonomi ke politik.",
      "date": "2024-12-04",
      "url": "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/pergerakan-nasional-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 39,
      "title": "🔥 Organisasi Radikal & Sumpah Pemuda",
      "tag": "#pergerakan",
      "note": "Pelajari: Perjuangan Indische Partij (Tiga Serangkai) & PNI (Soekarno). Peristiwa & makna Sumpah Pemuda 28 Oktober 1928.",
      "date": "2024-12-05",
      "url": "https://images.pexels.com/photos/76969/cold-war-border-guard-berlin-76969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kemdikbud.go.id/main/blog/2018/10/sumpah-pemuda-dan-sejarahnya",
      "pin": false,
      "done": false
    },
    {
      "id": 40,
      "title": "⚡ Pendudukan Jepang & Dampaknya",
      "tag": "#pergerakan",
      "note": "Pelajari: Propaganda Jepang (3A), organisasi bentukan (Putera, Jawa Hokokai, PETA), serta praktik romusha & persiapan kemerdekaan.",
      "date": "2024-12-05",
      "url": "https://images.unsplash.com/photo-1582544459999-5df3c5b7c9f9?w=800&auto=format&fit=crop",
      "link": "https://www.kompas.com/skola/read/2020/08/10/150000869/pendudukan-jepang-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 41,
      "title": "🇮🇩 Proklamasi: Detik-detik & Penyusunan Naskah",
      "tag": "#revolusi",
      "note": "Pelajari: Peristiwa Rengasdengklok, perumusan naskah di rumah Laksamana Maeda, pembacaan proklamasi 17 Agustus 1945.",
      "date": "2024-12-06",
      "url": "https://images.pexels.com/photos/76969/cold-war-border-guard-berlin-76969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kemdikbud.go.id/main/blog/2017/08/detik-detik-proklamasi-kemerdekaan-indonesia",
      "pin": true,
      "done": false
    },
    {
      "id": 42,
      "title": "🕊️ Diplomasi & Perjuangan Fisik Mempertahankan Kemerdekaan",
      "tag": "#revolusi",
      "note": "Pelajari: Perjanjian Linggarjati, Renville, KMB. Pertempuran 10 November Surabaya & Palagan Ambarawa.",
      "date": "2024-12-06",
      "url": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/perjanjian-linggarjati-renville-kmb",
      "pin": false,
      "done": false
    },
    {
      "id": 43,
      "title": "🗳️ Demokrasi Liberal & Jatuh Bangun Kabinet",
      "tag": "#politik",
      "note": "Pelajari: Ciri sistem Demokrasi Liberal (1950-1959), pergantian 7 kabinet dalam waktu singkat, penyebab instabilitas politik.",
      "date": "2024-12-07",
      "url": "https://images.pexels.com/photos/1550340/pexels-photo-1550340.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/masa-demokrasi-liberal-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 44,
      "title": "👑 Demokrasi Terpimpin & Konfrontasi",
      "tag": "#politik",
      "note": "Pelajari: Dekrit Presiden 5 Juli 1959, konsep NASAKOM, politik konfrontasi dengan Malaysia, dan situasi menjelang G30S.",
      "date": "2024-12-07",
      "url": "https://images.unsplash.com/photo-1562922591-3f588d68a46e?w=800&auto=format&fit=crop",
      "link": "https://www.kompas.com/skola/read/2020/11/19/140000269/masa-demokrasi-terpimpin-di-indonesia",
      "pin": false,
      "done": false
    },
    {
      "id": 45,
      "title": "🏗️ Orde Baru: Stabilisasi & Pembangunan",
      "tag": "#politik",
      "note": "Pelajari: Lahirnya Orde Baru (Supersemar), stabilisasi politik, Trilogi Pembangunan (stabilitas, pertumbuhan, pemerataan), Dwi Fungsi ABRI.",
      "date": "2024-12-08",
      "url": "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/masa-orde-baru",
      "pin": false,
      "done": false
    },
    {
      "id": 46,
      "title": "📢 Reformasi 1998 & Transisi Demokrasi",
      "tag": "#politik",
      "note": "Pelajari: Faktor penyebab krisis 1998 (krisis moneter, KKN, kesenjangan), peristiwa Tragedi Trisakti, dan pengunduran diri Soeharto.",
      "date": "2024-12-08",
      "url": "https://images.unsplash.com/photo-1584464454451-49c8bf6c42f4?w=800&auto=format&fit=crop",
      "link": "https://www.kompas.com/skola/read/2020/05/21/130000569/reformasi-1998-latar-belakang-tuntutan-dan-dampaknya",
      "pin": true,
      "done": false
    }
  ],
  "soc": [
    {
      "id": 47,
      "title": "🤝 Interaksi Sosial: Syarat & Bentuk",
      "tag": "#interaksi",
      "note": "Pelajari: Dua syarat interaksi (kontak & komunikasi). 6 faktor pendorong. Bentuk asosiatif (kerja sama, asimilasi) & disosiatif (konflik).",
      "date": "2024-12-01",
      "url": "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/interaksi-sosial",
      "pin": false,
      "done": false
    },
    {
      "id": 48,
      "title": "👶 Sosialisasi & Tahap Perkembangan Diri",
      "tag": "#sosialisasi",
      "note": "Pelajari: 4 tahap sosialisasi menurut Mead (Preparatory, Play, Game, Generalized Other). Agen sosialisasi (Keluarga, Sekolah, Media).",
      "date": "2024-12-01",
      "url": "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/sosialisasi-dan-pembentukan-kepribadian",
      "pin": false,
      "done": false
    },
    {
      "id": 49,
      "title": "📜 Nilai & Norma Sosial (Usage hingga Custom)",
      "tag": "#norma",
      "note": "Pelajari: Hierarki norma sosial dari yang terlonggar ke terkuat: Usage (cara), Folkways (kebiasaan), Mores (tata kelakuan), Custom (adat).",
      "date": "2024-12-02",
      "url": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.studiobelajar.com/nilai-dan-norma-sosial/",
      "pin": false,
      "done": false
    },
    {
      "id": 50,
      "title": "🏛️ Lembaga Sosial: Fungsi & Jenis",
      "tag": "#lembaga",
      "note": "Pelajari: 5 karakteristik lembaga sosial. Fungsi lembaga keluarga, agama, ekonomi, pendidikan, dan politik.",
      "date": "2024-12-02",
      "url": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      "link": "https://www.ruangguru.com/blog/lembaga-sosial",
      "pin": true,
      "done": false
    },
    {
      "id": 51,
      "title": "➡️ Diferensiasi Sosial (Perbedaan Horizontal)",
      "tag": "#stratifikasi",
      "note": "Pelajari: Bentuk diferensiasi berdasarkan ras, suku, agama (klen, agama), gender, dan profesi. Ini perbedaan tanpa tingkatan.",
      "date": "2024-12-03",
      "url": "https://images.pexels.com/photos/3826667/pexels-photo-3826667.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.studiobelajar.com/diferensiasi-sosial/",
      "pin": false,
      "done": false
    },
    {
      "id": 52,
      "title": "⬆️ Stratifikasi Sosial (Pelapisan Vertikal)",
      "tag": "#stratifikasi",
      "note": "Pelajari: Dasar stratifikasi (ekonomi, kekuasaan, kehormatan). Sifatnya (tertutup/kasta, terbuka, campuran). Contoh di masyarakat.",
      "date": "2024-12-03",
      "url": "https://images.unsplash.com/photo-1581089781785-603411fa81f5?w=800&auto=format&fit=crop",
      "link": "https://www.zenius.net/blog/stratifikasi-sosial",
      "pin": false,
      "done": false
    },
    {
      "id": 53,
      "title": "🪜 Mobilitas Sosial: Saluran & Faktor",
      "tag": "#mobilitas",
      "note": "Pelajari: Jenis mobilitas (vertikal/horizontal, antargenerasi). Saluran mobilitas (pendidikan, militer, organisasi). Faktor pendorong.",
      "date": "2024-12-04",
      "url": "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.ruangguru.com/blog/mobilitas-sosial",
      "pin": false,
      "done": false
    },
    {
      "id": 54,
      "title": "⚠️ Penyimpangan Sosial: Teori & Pengendalian",
      "tag": "#penyimpangan",
      "note": "Pelajari: Teori labeling, anomie, asosiasi diferensial. Penyimpangan primer vs sekunder. Cara pengendalian (preventif, represif).",
      "date": "2024-12-04",
      "url": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
      "link": "https://www.studiobelajar.com/penyimpangan-sosial/",
      "pin": false,
      "done": false
    },
    {
      "id": 55,
      "title": "⚔️ Konflik Sosial & Bentuk Akomodasi",
      "tag": "#konflik",
      "note": "Pelajari: Faktor penyebab konflik (perbedaan, kepentingan). Bentuk akomodasi: konsiliasi, mediasi, arbitrase, stalemate, adjudikasi.",
      "date": "2024-12-05",
      "url": "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.zenius.net/blog/konflik-sosial",
      "pin": true,
      "done": false
    },
    {
      "id": 56,
      "title": "🧩 Integrasi Sosial & Bentuknya",
      "tag": "#integrasi",
      "note": "Pelajari: Proses penyesuaian unsur masyarakat. Bentuk integrasi: normatif (nilai), fungsional (saling ketergantungan), koersif (paksaan).",
      "date": "2024-12-05",
      "url": "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
      "link": "https://www.ruangguru.com/blog/integrasi-sosial",
      "pin": false,
      "done": false
    },
    {
      "id": 57,
      "title": "🔄 Perubahan Sosial: Bentuk & Faktor",
      "tag": "#perubahan",
      "note": "Pelajari: Evolusi vs Revolusi. Perubahan direncanakan vs tidak. Faktor pendorong (penemuan baru, konflik, globalisasi).",
      "date": "2024-12-06",
      "url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.studiobelajar.com/perubahan-sosial/",
      "pin": false,
      "done": false
    },
    {
      "id": 58,
      "title": "🏚️ Kemiskinan & Kesenjangan Sosial",
      "tag": "#masalahsosial",
      "note": "Pelajari: Kemiskinan absolut vs relatif. Indikator kesenjangan (Gini Ratio). Dampak dan beberapa penyebab strukturalnya.",
      "date": "2024-12-06",
      "url": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop",
      "link": "https://www.bps.go.id/subject/23/kemiskinan-dan-ketimpangan.html",
      "pin": false,
      "done": false
    },
    {
      "id": 59,
      "title": "🚫 Eksklusi Sosial & Ketidakadilan Gender",
      "tag": "#masalahsosial",
      "note": "Pelajari: Konsep eksklusi sosial (terpinggirkan dari partisipasi). Bentuk ketidakadilan gender (stereotip, marginalisasi, beban ganda).",
      "date": "2024-12-07",
      "url": "https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=800",
      "link": "https://www.kompas.com/skola/read/2021/03/08/164500069/ketidakadilan-gender-pengertian-dan-bentuknya",
      "pin": false,
      "done": false
    },
    {
      "id": 60,
      "title": "🌳 Masalah Lingkungan Hidup dalam Perspektif Sosial",
      "tag": "#masalahsosial",
      "note": "Pelajari: Hubungan tindakan sosial dengan kerusakan lingkungan (eksploitasi berlebihan). Konsep keadilan lingkungan (environmental justice).",
      "date": "2024-12-07",
      "url": "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&auto=format&fit=crop",
      "link": "https://dlh.semarangkota.go.id/artikel/masalah-lingkungan-hidup",
      "pin": false,
      "done": false
    }
  ]
};

const OLYMAP = {
    data: {},
    currentTab: 'geo',

    init: function() {
        WOIPS.log('Initializing OLYMAP');
        
        // Load data
        this.data = WOIPS.loadData(WOIPS_CONFIG.apps.olymap.storageKey, OLYMAP_DEFAULT_DATA);
        
        // Setup tabs
        this.setupTabs();
        
        // Render
        this.render();
    },

    setupTabs: function() {
        const tabs = document.querySelectorAll('.olymap-tab-item');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = tab.dataset.tab;
                this.changeTab(tabId);
            });
        });
    },

    changeTab: function(tabId) {
        this.currentTab = tabId;
        
        // Update active class
        document.querySelectorAll('.olymap-tab-item').forEach(el => {
            el.classList.remove('active');
        });
        document.querySelector(`.olymap-tab-item[data-tab="${tabId}"]`).classList.add('active');
        
        this.render();
    },

    render: function() {
        const container = document.getElementById('olymap-list');
        if (!container) return;

        const items = this.data[this.currentTab] || [];
        
        // Sort: pinned first, then by date
        const sorted = [...items].sort((a, b) => {
            if (a.pin !== b.pin) return b.pin - a.pin;
            return new Date(a.date) - new Date(b.date);
        });

        if (sorted.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="bi bi-map" style="font-size: 48px;"></i>
                    <p class="mt-2 fw-bold">Belum ada roadmap di kategori ini</p>
                </div>
            `;
            return;
        }

        container.innerHTML = sorted.map(item => {
            const isOverdue = new Date(item.date) < new Date() && !item.done;
            
            return `
                <div class="olymap-card ${item.pin ? 'pinned' : ''} ${item.done ? 'done' : ''}" 
                     onclick="OLYMAP.viewDetail('${this.currentTab}', ${item.id})">
                    ${item.pin ? '<span class="olymap-pin-tag"><i class="bi bi-pin-angle-fill"></i> PRIORITAS</span>' : ''}
                    <div class="flex-grow-1">
                        <div class="fw-800">${item.title}</div>
                        <div class="d-flex gap-2 small text-muted mt-1">
                            <span>${item.tag}</span>
                            <span>•</span>
                            <span class="${isOverdue ? 'text-danger' : ''}">
                                <i class="bi bi-calendar"></i> ${WOIPS.formatDate(item.date)}
                            </span>
                        </div>
                    </div>
                    <div class="olymap-check-btn ${item.done ? 'active' : ''}" 
                         onclick="event.stopPropagation(); OLYMAP.toggleDone('${this.currentTab}', ${item.id})">
                        <i class="bi ${item.done ? 'bi-check-lg' : ''}"></i>
                    </div>
                </div>
            `;
        }).join('');

        this.updateStats();
        this.saveData();
    },

    toggleDone: function(tab, id) {
        const item = this.data[tab].find(i => i.id === id);
        if (item) {
            item.done = !item.done;
            if (item.done && window.confetti) {
                confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
            }
            this.render();
        }
    },

    viewDetail: function(tab, id) {
        const item = this.data[tab].find(i => i.id === id);
        // Will implement modal viewer in Phase 2
        WOIPS.toast(`Membuka detail: ${item.title}`, 'info');
    },

    updateStats: function() {
        const panel = document.getElementById('olymap-stats');
        if (!panel) return;

        const tabs = ['geo', 'eco', 'his', 'soc'];
        const tabNames = {'geo':'Geografi', 'eco':'Ekonomi', 'his':'Sejarah', 'soc':'Sosiologi'};
        const colors = {'geo':'#58CC02', 'eco':'#1CB0F6', 'his':'#FFC800', 'soc':'#CE82FF'};

        let statsHTML = '<h6 class="fw-800 mb-3">PROGRES BELAJAR</h6>';

        tabs.forEach(t => {
            const total = (this.data[t] || []).length;
            const done = (this.data[t] || []).filter(i => i.done).length;
            const percent = total === 0 ? 0 : Math.round((done / total) * 100);

            statsHTML += `
                <div class="mb-2">
                    <div class="d-flex justify-content-between small fw-bold mb-1">
                        <span>${tabNames[t]}</span>
                        <span>${percent}%</span>
                    </div>
                    <div class="olymap-progress-bar">
                        <div class="olymap-progress-fill" style="width: ${percent}%; background: ${colors[t]}"></div>
                    </div>
                </div>
            `;
        });

        panel.innerHTML = statsHTML;
    },

    saveData: function() {
        WOIPS.saveData(WOIPS_CONFIG.apps.olymap.storageKey, this.data);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('/olymap/')) {
        OLYMAP.init();
    }
});

window.OLYMAP = OLYMAP;
