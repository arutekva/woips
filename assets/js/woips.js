/**
 * WOIPS.JS - Main logic for OLYMPEDIA (Gudang Materi)
 * Author: Studekasa
 */

// ===== DEFAULT DATA FOR OLYMPEDIA =====
const OLYMPEDIA_DEFAULT_DATA = [
  {
    "id": "1",
    "title": "ASEAN dan Dinamika",
    "cat": "Geografi",
    "url": "1t1rIJ0trQIMhr8bzGzgdzm9p4YnS0JzJ",
    "total": 10,
    "tag": "🌍",
    "current": 1
  },
  {
    "id": "2",
    "title": "Geografi Sosial #1",
    "cat": "Geografi",
    "url": "1stjmpfaliHmdp7i9hI5UhY7J7Y-MdgKT",
    "total": 69,
    "tag": "🌍",
    "current": 1
  },
  {
    "id": "3",
    "title": "Geografi Fisik #2",
    "cat": "Geografi",
    "url": "1shrs0Z_hBcCifmBGHN2W_wvhieRA_CkA",
    "total": 66,
    "tag": "🌍",
    "current": 1
  },
  {
    "id": "4",
    "title": "Geografi  SMA Kelas XI",
    "cat": "Geografi",
    "url": "1T9TInsRNFlPINQGhAHp7jrYY4tGKGhP8",
    "total": 248,
    "tag": "🌍",
    "current": 0
  },
  {
    "id": "5",
    "title": "Geografi SMA Kelas XI",
    "cat": "Geografi",
    "url": "1Y_k8w3YGqrRpsYV1UsNVGQVs361Yv18R",
    "total": 340,
    "tag": "🌍",
    "current": 0
  },
  {
    "id": "6",
    "title": "Geografi SMA Kelas X",
    "cat": "Geografi",
    "url": "1cHd2JE06yg4zms5S2Wz8rRPwdvJcvOZ5",
    "total": 162,
    "tag": "🌍",
    "current": 0
  },
  {
    "id": "7",
    "title": "Geografi  SMA Kelas XII",
    "cat": "Geografi",
    "url": "1bf6nDoWf6qBQqjbb08I9M_oYcG8Xj2dt",
    "total": 154,
    "tag": "🌍",
    "current": 0
  },
  {
    "id": "8",
    "title": "Fundamental Kelas X",
    "cat": "Geografi",
    "url": "1wRZUV38AyGpZRVAp0jnC1xraBk0T8CdH",
    "total": 50,
    "tag": "🌍",
    "current": 0
  },
  {
    "id": "9",
    "title": "Pengantar Ekonomi Mikro",
    "cat": "Ekonomi",
    "url": "1sgATMt0jUJS84wja-oGZ0gGKeFOEJw4-",
    "total": 130,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "10",
    "title": "Modul Ekonomi Mikro",
    "cat": "Ekonomi",
    "url": "1uN45XhmORbwcoDPVMmS4XHMwqXzZm8uE",
    "total": 25,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "11",
    "title": "Pengantar Ekonomi Makro",
    "cat": "Ekonomi",
    "url": "1uKO7kQ4ywj28F-JHl9SYZyCJXL_Rh5_5",
    "total": 32,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "12",
    "title": "Modul Ekonomi Makro",
    "cat": "Ekonomi",
    "url": "1tG1JyrHYo9URriNdhCoxoqBKAsekkl6k",
    "total": 30,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "13",
    "title": "Pendapatan Nasional (Makro)",
    "cat": "Ekonomi",
    "url": "1tKze3haQJKFp045Ph0Khdscr3CCcPMRx",
    "total": 36,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "14",
    "title": "Diktat Lengkap Teori Ekonomi",
    "cat": "Ekonomi",
    "url": "1brhpNGFTlejL-GnxQLnOmCFAiX5VkwUt",
    "total": 90,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "15",
    "cat": "Ekonomi",
    "tag": "📊",
    "title": "Slide Presentasi Ekonomi Lengkap",
    "url": "1ilQLX9uWqdUXhc77yudWA9OYZ4W2RY8k",
    "current": 50,
    "total": 287
  },
  {
    "id": "16",
    "title": "Buku Paket Ekonomi SMA Kelas XI",
    "cat": "Ekonomi",
    "url": "1SvdHnMSCTg8gkXuiYFdcHV6uR761aJuW",
    "total": 45,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "17",
    "title": "Buku Paket Ekonomi SMA Kelas X",
    "cat": "Ekonomi",
    "url": "1TQoGCNc93pU3lMS6KIbN75UeqY8G_ZrJ",
    "total": 16,
    "tag": "📊",
    "current": 0
  },
  {
    "id": "18",
    "title": "Pengantar Ilmu Sejarah",
    "cat": "Sejarah",
    "url": "1uBHgAkpe9q90r3MEd4HTaBKhTSCUBhjn",
    "total": 21,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "19",
    "title": "Kehidupan Masa Pra-Aksara",
    "cat": "Sejarah",
    "url": "1tn2hXk4CE4nH9M3SYmUBdoz6IVDgXC0C",
    "total": 31,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "20",
    "title": "Manusia Purba di Indonesia",
    "cat": "Sejarah",
    "url": "1tQuOUX3ovW_7Cqk-TBsOgq7oRumZsQ3Y",
    "total": 22,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "21",
    "title": "Kehidupan Awal Masyarakat Indonesia",
    "cat": "Sejarah",
    "url": "1tNLIy5yeCCD2Z5cZYPZp-zjwswVmFnro",
    "total": 31,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "22",
    "title": "Perkembangan Kerajaan Hindu-Buddha",
    "cat": "Sejarah",
    "url": "1tJpGLb6PSkG6strHwaOOh7OQeKRzidsQ",
    "total": 32,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "23",
    "title": "Perkembangan Kerajaan Islam",
    "cat": "Sejarah",
    "url": "1tDx8D6MD8VjyHksWiX3yCtu8Zn_2nM4U",
    "total": 20,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "24",
    "title": "Kolonialisme dan Imperialisme Eropa",
    "cat": "Sejarah",
    "url": "1t0yGyzWXodot-zgCSt6Rjxzhv7rQQqef",
    "total": 19,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "25",
    "title": "Masa Pendudukan Jepang",
    "cat": "Sejarah",
    "url": "1u5vnUwm48H5pz4MUdrl85LUFbyD6rKQ3",
    "total": 7,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "26",
    "cat": "Sejarah",
    "tag": "🏛️",
    "title": "Pergerakan Nasional Indonesia",
    "url": "1u3sDe8uOtEKS0cK21uA-uVP7PzJE2Jh1",
    "current": 0,
    "total": 14
  },
  {
    "id": "27",
    "title": "Proklamasi dan Masa Kemerdekaan",
    "cat": "Sejarah",
    "url": "1tqsi8hsAMOmt9JLbvyim4AgU2NMsVpDF",
    "total": 12,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "28",
    "title": "Mempertahankan Kemerdekaan NKRI",
    "cat": "Sejarah",
    "url": "1txx1RJVkGTOBxDgyjq6WCVCSmmZs3VLH",
    "total": 11,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "29",
    "title": "Masa Orde Lama",
    "cat": "Sejarah",
    "url": "1txIbGtn2E4ZhNlpimuI-MW9BBgJtTDik",
    "total": 15,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "30",
    "title": "Slide Presentasi Sejarah Part 1",
    "cat": "Sejarah",
    "url": "1CUQXQfCv4uYgms1ZeNUh3iKMz3FXaCY0",
    "total": 82,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "31",
    "title": "Slide Presentasi Sejarah Part 2",
    "cat": "Sejarah",
    "url": "1Uv3Ip4tKg3JzI96GH6VJbfTOLcwrzGIm",
    "total": 72,
    "tag": "🏛️",
    "current": 0
  },
  {
    "id": "32",
    "title": "Pengantar Ilmu Sosiologi",
    "cat": "Sosiologi",
    "url": "1sw-oeoWP5LrEt2AfmaB2kw2GcRuvraGQ",
    "total": 212,
    "tag": "👥",
    "current": 0
  },
  {
    "id": "33",
    "title": "Dinamika dan Perubahan Sosial",
    "cat": "Sosiologi",
    "url": "1syb6rbhaG1k10XJDYZJCNbq5NxTohRRl",
    "total": 12,
    "tag": "👥",
    "current": 0
  },
  {
    "id": "34",
    "title": "Buku Sosiologi SMA Kelas XII",
    "cat": "Sosiologi",
    "url": "1TB72wB4q99u7O-Sma-yz87sxuhfA_Vsl",
    "total": 248,
    "tag": "👥",
    "current": 0
  },
  {
    "id": "35",
    "title": "Buku Sosiologi SMA Kelas X",
    "cat": "Sosiologi",
    "url": "1T4KxGdWWgBghIZocXdgk6bJzbug4wFNk",
    "total": 106,
    "tag": "👥",
    "current": 0
  },
  {
    "id": "36",
    "title": "Petunjuk OSN Tahun 2026",
    "cat": "",
    "url": "1JQ0ZjNKYN1drg7gVFauv8MihqGwR-tzZ",
    "total": 81,
    "tag": "📑",
    "current": 0
  },
  {
    "id": "37",
    "title": "Soal OSN-K (Kompetisi) 2023",
    "cat": "",
    "url": "1hNx7XzjjYacLKc-yCo5tCo8j5Jh5HxaA",
    "total": 43,
    "tag": "✏️",
    "current": 0
  }
];

// ===== OLYMPEDIA MAIN OBJECT =====
const OLYMPEDIA = {
    data: [],
    bookmarks: [],
    activeFilter: 'Semua',
    searchQuery: '',
    currentViewingId: null,

    /**
     * Initialize Olympedia
     */
    init: function() {
        WOIPS.log('Initializing OLYMPEDIA');
        
        // Load data from localStorage
        this.data = WOIPS.loadData(WOIPS_CONFIG.apps.olympedia.storageKey, OLYMPEDIA_DEFAULT_DATA);
        this.bookmarks = WOIPS.loadData(WOIPS_CONFIG.apps.olympedia.bookmarkKey, []);
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Render initial view
        this.render();
        
        // Check if we're on file viewer page
        this.checkFileViewer();
    },

    /**
     * Setup DOM event listeners
     */
    setupEventListeners: function() {
        // Search input
        const searchInput = document.getElementById('olympedia-search');
        if (searchInput) {
            searchInput.addEventListener('input', WOIPS.debounce((e) => {
                this.searchQuery = e.target.value;
                this.render();
            }, 300));
        }

        // Category items
        document.querySelectorAll('.olymedia-category-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const cat = e.target.dataset.category;
                this.filterCategory(cat, e.target);
            });
        });

        // Re-sync button
        const resyncBtn = document.getElementById('olympedia-resync');
        if (resyncBtn) {
            resyncBtn.addEventListener('click', () => {
                this.render();
                WOIPS.toast('Data diperbarui', 'success');
            });
        }
    },

    /**
     * Filter by category
     */
    filterCategory: function(category, element) {
        this.activeFilter = category || 'Semua';
        
        // Update active class
        document.querySelectorAll('.olymedia-category-item').forEach(el => {
            el.classList.remove('active');
        });
        if (element) element.classList.add('active');
        
        this.render();
    },

    /**
     * Render file list
     */
    render: function() {
        const container = document.getElementById('olympedia-list');
        if (!container) return;

        let filtered = [...this.data];

        // Apply category filter
        if (this.activeFilter !== 'Semua') {
            filtered = filtered.filter(item => item.cat === this.activeFilter);
        }

        // Apply search filter
        if (this.searchQuery) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(item => 
                item.title.toLowerCase().includes(query)
            );
        }

        // Update stats
        const statsEl = document.getElementById('olympedia-stats');
        if (statsEl) {
            statsEl.textContent = `${filtered.length} MATERI DITEMUKAN`;
        }

        // Handle empty state
        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="bi bi-folder-x" style="font-size: 48px;"></i>
                    <p class="mt-2 fw-bold">Tidak ada materi ditemukan</p>
                </div>
            `;
            return;
        }

        // Render items
        container.innerHTML = filtered.map(item => {
            const isBookmarked = this.bookmarks.includes(item.id);
            const progress = Math.round((item.current / (item.total || 1)) * 100);
            
            return `
                <div class="olymedia-file-item" data-id="${item.id}" onclick="OLYMPEDIA.openViewer('${item.id}')">
                    <div class="olymedia-file-icon" style="color: ${this.getCategoryColor(item.cat)}">
                        ${item.tag || '📄'}
                    </div>
                    <div class="olymedia-file-info">
                        <div class="olymedia-file-title">${item.title}</div>
                        <div class="olymedia-file-meta">
                            <span style="color: ${this.getCategoryColor(item.cat)}">${item.cat.toUpperCase()}</span>
                            <span>•</span>
                            <span>${item.total} HAL</span>
                        </div>
                        <div class="olymedia-progress-mini">
                            <div class="olymedia-progress-bar-mini" style="width: ${progress}%"></div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi ${isBookmarked ? 'bi-bookmark-heart-fill' : 'bi-bookmark-heart'} fs-5" 
                           onclick="event.stopPropagation(); OLYMPEDIA.toggleBookmark('${item.id}')"
                           style="color: ${isBookmarked ? 'var(--primary-green)' : 'var(--text-muted)'}"></i>
                        <i class="bi bi-three-dots-vertical fs-5 text-muted"
                           onclick="event.stopPropagation(); OLYMPEDIA.showEdit('${item.id}')"></i>
                    </div>
                </div>
            `;
        }).join('');
    },

    /**
     * Get color for category
     */
    getCategoryColor: function(category) {
        const colors = {
            'Geografi': '#58CC02',
            'Ekonomi': '#1CB0F6',
            'Sejarah': '#FFC800',
            'Sosiologi': '#CE82FF',
            'Soal': '#FF4B4B'
        };
        return colors[category] || '#888';
    },

    /**
     * Open file viewer
     */
    openViewer: function(id) {
        const item = this.data.find(x => x.id === id);
        if (!item) return;

        this.currentViewingId = id;

        // Update viewer UI
        document.getElementById('viewer-title').textContent = item.title;
        document.getElementById('viewer-current').value = item.current;
        document.getElementById('viewer-total').value = item.total;

        // Build Google Drive URL
        let driveUrl = item.url;
        if (!driveUrl.includes('http')) {
            driveUrl = `https://drive.google.com/file/d/${item.url}/preview`;
        }

        // Set iframe src
        const iframe = document.getElementById('viewer-frame');
        if (iframe) {
            iframe.src = driveUrl;
        }

        // Show viewer
        document.getElementById('olympedia-viewer').style.display = 'flex';
    },

    /**
     * Close file viewer
     */
    closeViewer: function() {
        document.getElementById('olympedia-viewer').style.display = 'none';
        const iframe = document.getElementById('viewer-frame');
        if (iframe) {
            iframe.src = '';
        }
    },

    /**
     * Save progress from viewer
     */
    saveProgress: function() {
        const current = parseInt(document.getElementById('viewer-current').value) || 0;
        const total = parseInt(document.getElementById('viewer-total').value) || 1;

        const idx = this.data.findIndex(x => x.id === this.currentViewingId);
        if (idx !== -1) {
            this.data[idx].current = current;
            this.data[idx].total = total;
            this.saveData();
            this.closeViewer();
            WOIPS.toast('Progress tersimpan!', 'success');
        }
    },

    /**
     * Toggle bookmark
     */
    toggleBookmark: function(id) {
        if (this.bookmarks.includes(id)) {
            this.bookmarks = this.bookmarks.filter(b => b !== id);
            WOIPS.toast('Dihapus dari bookmark', 'info');
        } else {
            this.bookmarks.push(id);
            WOIPS.toast('Ditambahkan ke bookmark!', 'success');
        }
        
        localStorage.setItem(WOIPS_CONFIG.apps.olympedia.bookmarkKey, JSON.stringify(this.bookmarks));
        this.render();
    },

    /**
     * Show edit form
     */
    showEdit: function(id) {
        const item = this.data.find(x => x.id === id);
        // Implement edit modal (will be in Phase 2)
        WOIPS.toast('Edit akan datang di update berikutnya', 'info');
    },

    /**
     * Save data to localStorage
     */
    saveData: function() {
        WOIPS.saveData(WOIPS_CONFIG.apps.olympedia.storageKey, this.data);
        this.render();
    },

    /**
     * Check if current page is file viewer and load file
     */
    checkFileViewer: function() {
        const fileId = WOIPS_ROUTER.getFileIdFromUrl();
        if (fileId) {
            // Find item by ID (simplified - in production use mapping)
            const item = this.data.find(x => x.url === fileId);
            if (item) {
                this.openViewer(item.id);
            }
        }
    }
};

// Initialize on page load if we're in olympedia
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('/olympedia/')) {
        OLYMPEDIA.init();
    }
});

window.OLYMPEDIA = OLYMPEDIA;
