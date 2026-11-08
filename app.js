/**
 * NEXUSTECH E-COMMERCE APPLICATION JAVASCRIPT
 * Full-featured modern client-side store engine
 */

// ============================================================================
// 1. PRODUCT CATALOG DATA
// ============================================================================
const PRODUCTS = [
  {
    id: 'titanbook-16',
    name: 'Nexus TitanBook Studio 16" Pro',
    category: 'computing',
    price: 2199.00,
    originalPrice: 2599.00,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'SALE',
    inStock: true,
    stockLeft: 4,
    description: 'Precision milled aluminum chassis featuring the 16-Core Titan-M3 neural architecture, 48GB Unified RAM, and a 165Hz Mini-LED ProMotion Display.',
    specs: [
      { label: 'Processor', value: '16-Core Titan-M3 Neural' },
      { label: 'Unified Memory', value: '48GB 8533MHz LPDDR5X' },
      { label: 'Storage', value: '1TB PCIe 4.0 NVMe SSD' },
      { label: 'Display', value: '16.2" Liquid OLED (3456 x 2234, 165Hz)' },
      { label: 'Battery Life', value: 'Up to 22 Hours Web/Video' }
    ],
    colors: [
      { name: 'Space Obsidian', hex: '#1e293b' },
      { name: 'Silver Lunar', hex: '#cbd5e1' }
    ],
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'horizon-anc-headphones',
    name: 'Nexus Horizon Studio Pro ANC',
    category: 'audio',
    price: 349.00,
    originalPrice: 429.00,
    rating: 4.9,
    reviewsCount: 820,
    badge: 'HOT',
    inStock: true,
    stockLeft: 12,
    description: 'Reference-grade wireless acoustic headphones with hybrid active noise cancellation, custom 45mm beryllium drivers, and loss-free 96kHz/24bit spatial audio.',
    specs: [
      { label: 'Acoustic Driver', value: '45mm Beryllium Coated' },
      { label: 'Noise Cancellation', value: 'Adaptive Hybrid ANC (-42dB)' },
      { label: 'Battery Playback', value: '60 Hours (ANC Off) / 45h (ANC On)' },
      { label: 'Connectivity', value: 'Bluetooth 5.4, Multipoint, USB-C DAC' },
      { label: 'Weight', value: '265g CNC Anodized Aluminum' }
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#0f172a' },
      { name: 'Pebble Gray', hex: '#e2e8f0' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'airpod-sonic-buds',
    name: 'Nexus Sonic Pods Active II',
    category: 'audio',
    price: 179.00,
    originalPrice: 199.00,
    rating: 4.8,
    reviewsCount: 512,
    badge: 'NEW',
    inStock: true,
    stockLeft: 25,
    description: 'Ultra-lightweight true wireless earbuds with transparency pass-through, IP68 water resistance, and crystal-clear beamforming microphone arrays.',
    specs: [
      { label: 'Drivers', value: '11mm Dual Magnet Dynamic' },
      { label: 'Water Rating', value: 'IP68 Dust & Water Resistant' },
      { label: 'Battery', value: '8h + 32h in Wireless Qi Case' },
      { label: 'Latency', value: 'Ultra-low 25ms Game Mode' }
    ],
    colors: [
      { name: 'Ceramic White', hex: '#f8fafc' },
      { name: 'Midnight Blue', hex: '#1e3a8a' }
    ],
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'chrono-titanium-watch',
    name: 'Nexus Chrono X Titanium Smartwatch',
    category: 'wearables',
    price: 499.00,
    originalPrice: 599.00,
    rating: 4.9,
    reviewsCount: 195,
    badge: 'HOT',
    inStock: true,
    stockLeft: 7,
    description: 'Grade-5 titanium smart timepiece with sapphire crystal glass, 14-day battery life, continuous ECG, VO2 max metrics, and dual-band GPS navigation.',
    specs: [
      { label: 'Case Material', value: 'Grade-5 Aerospace Titanium' },
      { label: 'Glass', value: 'Anti-Reflective Sapphire Crystal' },
      { label: 'Display', value: '1.43" AMOLED 1000 Nits Always-On' },
      { label: 'Sensors', value: 'ECG, SpO2, Optical Heart Rate, Altimeter' },
      { label: 'Water Rating', value: '10 ATM (100 meters dive proof)' }
    ],
    colors: [
      { name: 'Titanium Raw', hex: '#94a3b8' },
      { name: 'DLC Midnight', hex: '#1e293b' }
    ],
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'edge-mechanical-keyboard',
    name: 'Nexus KeyEdge 75% Wireless Mechanical',
    category: 'computing',
    price: 189.00,
    originalPrice: 220.00,
    rating: 4.8,
    reviewsCount: 420,
    badge: null,
    inStock: true,
    stockLeft: 16,
    description: 'Gasket-mounted hot-swappable mechanical keyboard equipped with pre-lubed silent tactile linear switches, PBT dye-sub keycaps, and rotary volume knob.',
    specs: [
      { label: 'Layout', value: '75% Compact (82 Keys + Dial)' },
      { label: 'Switches', value: 'Nexus Custom Linear Silver (Pre-lubed)' },
      { label: 'Keycaps', value: 'Thick Cherry-Profile PBT' },
      { label: 'Connectivity', value: 'Tri-Mode: 2.4GHz, BT 5.3, Detachable USB-C' }
    ],
    colors: [
      { name: 'Industrial White', hex: '#f1f5f9' },
      { name: 'Carbon Stealth', hex: '#0f172a' }
    ],
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'orbit-precision-mouse',
    name: 'Nexus Orbit Ergonomic Wireless Mouse',
    category: 'computing',
    price: 99.00,
    originalPrice: 129.00,
    rating: 4.7,
    reviewsCount: 310,
    badge: null,
    inStock: true,
    stockLeft: 30,
    description: 'Sculpted thumb-rest ergonomic workstation mouse with electromagnetic scroll wheel, 8,000 DPI sensor, and multi-computer cross-flow control.',
    specs: [
      { label: 'Sensor', value: 'Darkfield 8000 DPI Optical (Tracks on glass)' },
      { label: 'Scroll', value: 'MagSpeed Smart Electromagnetic' },
      { label: 'Battery', value: '70 Days on full charge; 1m charge = 3h' }
    ],
    colors: [
      { name: 'Graphite', hex: '#334155' },
      { name: 'Pale Gray', hex: '#e2e8f0' }
    ],
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'magbase-3in1-station',
    name: 'Nexus MagBase 3-in-1 Fast Wireless Station',
    category: 'accessories',
    price: 129.00,
    originalPrice: 159.00,
    rating: 4.8,
    reviewsCount: 260,
    badge: 'NEW',
    inStock: true,
    stockLeft: 18,
    description: 'Architectural aluminum charging dock for smartphone, smartwatch, and wireless earbuds with 15W Qi2 official high-speed magnetic alignment.',
    specs: [
      { label: 'Phone Output', value: '15W Fast Magnetic Qi2' },
      { label: 'Watch Output', value: 'Fast Charge 5W' },
      { label: 'Buds Pad', value: '5W Qi Wireless' },
      { label: 'Power Input', value: 'Included 45W GaN Brick' }
    ],
    colors: [
      { name: 'Silver Matte', hex: '#cbd5e1' },
      { name: 'Space Black', hex: '#0f172a' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'nomad-100w-gan-charger',
    name: 'Nexus Nomad 100W GaN Travel Charger',
    category: 'accessories',
    price: 69.00,
    originalPrice: 89.00,
    rating: 4.9,
    reviewsCount: 480,
    badge: null,
    inStock: true,
    stockLeft: 42,
    description: 'Pocket-sized GaN III fast charger featuring 3x USB-C Power Delivery ports and 1x USB-A port capable of fast-charging two laptops simultaneously.',
    specs: [
      { label: 'Technology', value: 'Navitas Gallium Nitride (GaN III)' },
      { label: 'Ports', value: '3x USB-C (PD 3.0), 1x USB-A (QC 4.0)' },
      { label: 'Output', value: '100W Max Single Port' }
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0f172a' }
    ],
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'ultravision-34-curved-monitor',
    name: 'Nexus UltraVision 34" Curved 5K Display',
    category: 'computing',
    price: 1199.00,
    originalPrice: 1399.00,
    rating: 4.9,
    reviewsCount: 114,
    badge: 'HOT',
    inStock: true,
    stockLeft: 3,
    description: 'Immersive 1800R curved Nano-IPS panel with 5120x2160 resolution, Thunderbolt 4 96W power delivery, 98% DCI-P3 color gamut, and factory delta-E < 1.',
    specs: [
      { label: 'Resolution', value: '5120 x 2160 (WUHD 21:9)' },
      { label: 'Refresh Rate', value: '144Hz with AMD FreeSync Premium' },
      { label: 'Color Accuracy', value: 'Delta E < 1.0 Factory Calibrated' },
      { label: 'Thunderbolt 4', value: 'Single cable 96W laptop charging & USB hub' }
    ],
    colors: [
      { name: 'Platinum Aluminum', hex: '#cbd5e1' }
    ],
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'ring-ultra-sensor',
    name: 'Nexus Ring Ultra Biometric Tracker',
    category: 'wearables',
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.7,
    reviewsCount: 165,
    badge: 'NEW',
    inStock: true,
    stockLeft: 11,
    description: 'Titanium micro-ring that monitors sleep stages, readiness score, heart rate variability (HRV), and body temperature with zero subscription fees.',
    specs: [
      { label: 'Weight', value: 'Only 3.2 grams' },
      { label: 'Battery', value: '7 days per 40-minute charge' },
      { label: 'Waterproof', value: '100m water resistant' },
      { label: 'App Sync', value: 'Apple Health & Android Health Connect' }
    ],
    colors: [
      { name: 'Stealth Black', hex: '#0f172a' },
      { name: 'Rose Gold', hex: '#e0a99e' },
      { name: 'Silver Brush', hex: '#cbd5e1' }
    ],
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'stealth-desk-mat',
    name: 'Nexus Studio Desk Mat (Merino & Vegan Leather)',
    category: 'accessories',
    price: 49.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviewsCount: 390,
    badge: null,
    inStock: true,
    stockLeft: 50,
    description: 'Double-sided precision surface made from water-resistant vegan microfiber leather on one side and high-density soft Merino wool felt on the reverse.',
    specs: [
      { label: 'Dimensions', value: '900mm x 400mm x 3.5mm' },
      { label: 'Materials', value: 'Waterproof Vegan Leather + Felt' },
      { label: 'Cable Routing', value: 'Magnetic cable organizer snap included' }
    ],
    colors: [
      { name: 'Charcoal / Tan', hex: '#334155' }
    ],
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'dac-amplifier',
    name: 'Nexus Pulse Audiophile Hi-Res USB DAC',
    category: 'audio',
    price: 199.00,
    originalPrice: 249.00,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'SALE',
    inStock: false,
    stockLeft: 0,
    description: 'Portable MQA and DSD512 decoding amplifier featuring dual ESS Sabre ES9219C chips delivering studio analog warmth to any headphones or IEMs.',
    specs: [
      { label: 'DAC Chipset', value: 'Dual ESS Sabre ES9219C' },
      { label: 'Output Power', value: '240mW @ 32 Ohms Balanced' },
      { label: 'Outputs', value: '3.5mm Single Ended & 4.4mm Balanced' }
    ],
    colors: [
      { name: 'Anodized Slate', hex: '#334155' }
    ],
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'
    ]
  }
];

// ============================================================================
// 2. APPLICATION STATE
// ============================================================================
const state = {
  cart: JSON.parse(localStorage.getItem('nexus_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('nexus_wishlist')) || [],
  appliedCoupon: JSON.parse(localStorage.getItem('nexus_coupon')) || null,
  activeCategory: 'all',
  activePrice: 'all',
  activeSort: 'featured',
  searchQuery: '',
  inStockOnly: false,
  shippingMethod: 'standard', // 'standard' or 'express'
  theme: localStorage.getItem('nexus_theme') || 'light'
};

// ============================================================================
// 3. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCountdownTimer();
  renderProducts();
  renderCart();
  renderWishlist();
  setupEventListeners();
});

// ============================================================================
// 4. THEME MANAGEMENT
// ============================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('nexus_theme', state.theme);
      showToast(`Switched to ${state.theme} mode`, 'info');
    });
  }
}

// ============================================================================
// 5. COUNTDOWN TIMER (Deal of the Day)
// ============================================================================
function initCountdownTimer() {
  const hoursEl = document.getElementById('timerHours');
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  // Set an 8-hour target from session start
  let totalSeconds = 8 * 3600 + 42 * 60 + 19;

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      hoursEl.textContent = String(hrs).padStart(2, '0');
      minutesEl.textContent = String(mins).padStart(2, '0');
      secondsEl.textContent = String(secs).padStart(2, '0');
    }
  }, 1000);
}

// ============================================================================
// 6. PRODUCT CATALOG FILTERING & RENDERING
// ============================================================================
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    // Category
    if (state.activeCategory !== 'all' && p.category !== state.activeCategory) {
      return false;
    }
    // Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.specs.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q));
      if (!match) return false;
    }
    // Price Filter
    if (state.activePrice === 'under100' && p.price >= 100) return false;
    if (state.activePrice === '100to500' && (p.price < 100 || p.price > 500)) return false;
    if (state.activePrice === '500to1000' && (p.price < 500 || p.price > 1000)) return false;
    if (state.activePrice === 'over1000' && p.price < 1000) return false;
    // In-Stock Only
    if (state.inStockOnly && !p.inStock) return false;

    return true;
  }).sort((a, b) => {
    if (state.activeSort === 'price-asc') return a.price - b.price;
    if (state.activeSort === 'price-desc') return b.price - a.price;
    if (state.activeSort === 'rating') return b.rating - a.rating;
    if (state.activeSort === 'discount') {
      const discA = a.originalPrice - a.price;
      const discB = b.originalPrice - b.price;
      return discB - discA;
    }
    return 0; // 'featured' retains natural order
  });
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const displayedCountEl = document.getElementById('displayedCount');
  const totalCountEl = document.getElementById('totalCount');
  const activeTagsEl = document.getElementById('activeFilterTags');

  if (!grid) return;

  const filtered = getFilteredProducts();

  if (displayedCountEl) displayedCountEl.textContent = filtered.length;
  if (totalCountEl) totalCountEl.textContent = PRODUCTS.length;

  // Active filter tags rendering
  renderFilterTags(activeTagsEl);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(p => {
    const isSaved = state.wishlist.includes(p.id);
    const badgeHtml = p.badge ? `<span class="product-badge-tag badge-${p.badge.toLowerCase()}">${p.badge}</span>` : '';
    const discountPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-image-container" onclick="openQuickView('${p.id}')">
          ${badgeHtml}
          <button class="card-wishlist-btn ${isSaved ? 'active' : ''}" 
                  onclick="event.stopPropagation(); toggleWishlist('${p.id}')" 
                  aria-label="Bookmark ${p.name}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${p.images[0]}" alt="${p.name}" class="product-thumb" loading="lazy">
          <button class="quick-view-overlay-btn" onclick="event.stopPropagation(); openQuickView('${p.id}')">
            Quick Specs
          </button>
        </div>

        <div class="product-content">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-title" onclick="openQuickView('${p.id}')">${p.name}</h3>
          
          <p class="product-specs-snippet">
            ${p.specs && p.specs[0] ? `<strong>${p.specs[0].label}:</strong> ${p.specs[0].value}` : ''}
          </p>

          <div class="product-rating-row">
            <span class="product-stars">★★★★★</span>
            <span class="product-rating-val">${p.rating}</span>
            <span class="product-review-count">(${p.reviewsCount})</span>
          </div>

          <div class="product-bottom-row">
            <div class="product-price-box">
              <span class="product-price">$${p.price.toFixed(2)}</span>
              ${p.originalPrice > p.price ? `<span class="product-original-price">$${p.originalPrice.toFixed(2)} (-${discountPercent}%)</span>` : ''}
            </div>

            ${p.inStock ? `
              <button class="card-add-cart-btn" onclick="addToCart('${p.id}')">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                </svg>
                <span>Add</span>
              </button>
            ` : `
              <span class="badge-pill" style="color:var(--color-text-muted); background:var(--color-surface-subtle);">Out of Stock</span>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderFilterTags(container) {
  if (!container) return;

  const tags = [];

  if (state.activeCategory !== 'all') {
    tags.push({ label: `Category: ${state.activeCategory}`, clear: () => setCategory('all') });
  }
  if (state.activePrice !== 'all') {
    tags.push({ label: `Price: ${state.activePrice}`, clear: () => { state.activePrice = 'all'; document.getElementById('priceFilter').value = 'all'; renderProducts(); } });
  }
  if (state.searchQuery) {
    tags.push({ label: `Search: "${state.searchQuery}"`, clear: () => clearSearch() });
  }
  if (state.inStockOnly) {
    tags.push({ label: `In Stock Only`, clear: () => { state.inStockOnly = false; document.getElementById('inStockCheckbox').checked = false; renderProducts(); } });
  }

  if (tags.length === 0) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = 'flex';
  container.innerHTML = tags.map((t, idx) => `
    <span class="filter-tag">
      ${t.label}
      <button type="button" onclick="clearFilterTag(${idx})">&times;</button>
    </span>
  `).join('');

  // Attach clear functions
  window._filterClears = tags.map(t => t.clear);
}

window.clearFilterTag = function(idx) {
  if (window._filterClears && window._filterClears[idx]) {
    window._filterClears[idx]();
  }
};

// ============================================================================
// 7. CART MANAGEMENT & LOGIC
// ============================================================================
function addToCart(productId, quantity = 1, colorName = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (!product.inStock) {
    showToast(`${product.name} is currently out of stock`, 'error');
    return;
  }

  const selectedColor = colorName || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
  const existingIndex = state.cart.findIndex(item => item.id === productId && item.color === selectedColor);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: productId,
      quantity,
      color: selectedColor
    });
  }

  saveCart();
  renderCart();
  showToast(`Added ${product.name} to your bag`, 'success');
  openCartDrawer();
}

function updateCartQuantity(productId, color, delta) {
  const index = state.cart.findIndex(i => i.id === productId && i.color === color);
  if (index === -1) return;

  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId, color) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.color === color));
  saveCart();
  renderCart();
  showToast('Item removed from your bag', 'info');
}

function saveCart() {
  localStorage.setItem('nexus_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalItems = 0;

  state.cart.forEach(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (p) {
      subtotal += p.price * item.quantity;
      totalItems += item.quantity;
    }
  });

  // Calculate discount
  let discount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.type === 'percent') {
      discount = (subtotal * state.appliedCoupon.value) / 100;
    } else if (state.appliedCoupon.type === 'fixed') {
      discount = state.appliedCoupon.value;
    }
  }

  // Calculate shipping (Free if subtotal >= 99 or coupon FREESHIP, or express = $15)
  let shipping = 0;
  if (state.appliedCoupon && state.appliedCoupon.code === 'FREESHIP') {
    shipping = 0;
  } else if (state.shippingMethod === 'express') {
    shipping = 15.00;
  } else {
    shipping = subtotal >= 99 ? 0 : 9.99;
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = taxableAmount * 0.05; // 5% estimated tax
  const total = taxableAmount + shipping + tax;

  return { subtotal, discount, shipping, tax, total, totalItems };
}

function renderCart() {
  const listEl = document.getElementById('cartItemsList');
  const emptyView = document.getElementById('emptyCartView');
  const footerEl = document.getElementById('cartFooter');
  const cartCountEl = document.getElementById('cartCount');
  const drawerCountEl = document.getElementById('drawerCartCount');
  const headerTotalEl = document.getElementById('headerCartTotal');

  const { subtotal, discount, shipping, tax, total, totalItems } = calculateCartTotals();

  // Update counts & badges
  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (drawerCountEl) drawerCountEl.textContent = totalItems;
  if (headerTotalEl) headerTotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping progress bar (Goal: $99)
  const shippingTextEl = document.getElementById('shippingProgressText');
  const shippingBarEl = document.getElementById('shippingProgressBar');
  if (shippingTextEl && shippingBarEl) {
    const diff = 99 - subtotal;
    if (diff <= 0 || (state.appliedCoupon && state.appliedCoupon.code === 'FREESHIP')) {
      shippingTextEl.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked Free Worldwide Shipping!`;
      shippingBarEl.style.width = '100%';
    } else {
      const pct = Math.min(100, Math.round((subtotal / 99) * 100));
      shippingTextEl.innerHTML = `Add <strong>$${diff.toFixed(2)}</strong> more for Free Worldwide Express Delivery`;
      shippingBarEl.style.width = `${pct}%`;
    }
  }

  if (state.cart.length === 0) {
    if (listEl) listEl.innerHTML = '';
    if (emptyView) emptyView.style.display = 'flex';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  // Render items
  if (listEl) {
    listEl.innerHTML = state.cart.map(item => {
      const p = PRODUCTS.find(prod => prod.id === item.id);
      if (!p) return '';

      return `
        <div class="cart-item-row">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-item-thumb">
          <div class="cart-item-details">
            <div>
              <div class="cart-item-title">${p.name}</div>
              <div class="cart-item-variant">Color: ${item.color}</div>
              <div class="cart-item-price">$${(p.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
              <div class="quantity-stepper">
                <button type="button" onclick="updateCartQuantity('${p.id}', '${item.color}', -1)" aria-label="Decrease">&minus;</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="updateCartQuantity('${p.id}', '${item.color}', 1)" aria-label="Increase">&plus;</button>
              </div>
              <button class="cart-remove-item-btn" onclick="removeFromCart('${p.id}', '${item.color}')">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Update breakdown numbers
  document.getElementById('summarySubtotal').textContent = `$${subtotal.toFixed(2)}`;
  const discountLine = document.getElementById('discountLine');
  const discountVal = document.getElementById('summaryDiscount');
  if (discount > 0) {
    discountLine.style.display = 'flex';
    discountVal.textContent = `-$${discount.toFixed(2)}`;
  } else {
    discountLine.style.display = 'none';
  }

  document.getElementById('summaryShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('summaryTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;

  // Coupon tag
  const promoTag = document.getElementById('appliedPromoTag');
  const promoCodeEl = document.getElementById('appliedPromoCode');
  if (state.appliedCoupon) {
    promoTag.style.display = 'flex';
    promoCodeEl.textContent = `${state.appliedCoupon.code} (${state.appliedCoupon.description})`;
  } else {
    promoTag.style.display = 'none';
  }
}

// Drawer visibility helpers
function openCartDrawer() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================================================
// 8. WISHLIST MANAGEMENT
// ============================================================================
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const p = PRODUCTS.find(prod => prod.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Added ${p ? p.name : 'product'} to Wishlist`, 'success');
  }

  localStorage.setItem('nexus_wishlist', JSON.stringify(state.wishlist));
  renderWishlist();
  renderProducts();
}

function renderWishlist() {
  const countEl = document.getElementById('wishlistCount');
  const drawerCountEl = document.getElementById('drawerWishlistCount');
  const listEl = document.getElementById('wishlistItemsList');
  const emptyView = document.getElementById('emptyWishlistView');

  if (countEl) countEl.textContent = state.wishlist.length;
  if (drawerCountEl) drawerCountEl.textContent = state.wishlist.length;

  if (state.wishlist.length === 0) {
    if (listEl) listEl.innerHTML = '';
    if (emptyView) emptyView.style.display = 'block';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';

  if (listEl) {
    listEl.innerHTML = state.wishlist.map(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (!p) return '';

      return `
        <div class="cart-item-row">
          <img src="${p.images[0]}" alt="${p.name}" class="cart-item-thumb">
          <div class="cart-item-details">
            <div>
              <div class="cart-item-title">${p.name}</div>
              <div class="cart-item-price">$${p.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
              <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');">
                Move to Bag
              </button>
              <button class="cart-remove-item-btn" onclick="toggleWishlist('${p.id}')">Remove</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function openWishlistDrawer() {
  document.getElementById('wishlistDrawer').classList.add('open');
  document.getElementById('wishlistDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  document.getElementById('wishlistDrawer').classList.remove('open');
  document.getElementById('wishlistDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ============================================================================
// 9. QUICK VIEW MODAL (Native <dialog>)
// ============================================================================
function openQuickView(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const dialog = document.getElementById('quickViewDialog');
  const container = document.getElementById('quickViewDetailsContainer');

  const discountPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

  container.innerHTML = `
    <div class="quick-view-gallery">
      <div class="qv-main-image-box">
        <img id="qvMainImage" src="${p.images[0]}" alt="${p.name}" class="qv-main-img">
      </div>
      <div class="qv-thumbnails">
        ${p.images.map((img, idx) => `
          <img src="${img}" alt="${p.name} view" class="qv-thumb ${idx === 0 ? 'active' : ''}" onclick="setQuickViewImage('${img}', this)">
        `).join('')}
      </div>
    </div>

    <div class="qv-details">
      ${p.badge ? `<span class="badge-pill qv-badge">${p.badge}</span>` : ''}
      <h2 class="qv-title" id="modalProductTitle">${p.name}</h2>
      
      <div class="qv-price-row">
        <span class="qv-price">$${p.price.toFixed(2)}</span>
        ${p.originalPrice > p.price ? `<span class="qv-old-price">$${p.originalPrice.toFixed(2)} (-${discountPercent}%)</span>` : ''}
      </div>

      <p class="qv-desc">${p.description}</p>

      ${p.colors && p.colors.length > 0 ? `
        <div class="qv-colors-selection">
          <label style="font-size:0.8125rem; font-weight:700; display:block; margin-bottom:0.4rem;">Select Finish:</label>
          <div style="display:flex; gap:0.5rem;" id="qvColorPickerGroup">
            ${p.colors.map((c, i) => `
              <button type="button" class="chip ${i === 0 ? 'active' : ''}" data-color="${c.name}" onclick="selectQuickViewColor(this)">
                <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:${c.hex}; margin-right:4px;"></span>
                ${c.name}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="qv-specs-table">
        <h4 style="font-size:0.875rem; font-weight:700; margin-bottom:0.25rem;">Key Specifications:</h4>
        ${p.specs.map(s => `
          <div class="qv-spec-row">
            <span class="qv-spec-lbl">${s.label}</span>
            <span class="qv-spec-val">${s.value}</span>
          </div>
        `).join('')}
      </div>

      <div class="qv-actions-row">
        ${p.inStock ? `
          <button class="btn btn-primary btn-lg btn-block" onclick="handleQuickViewAddToCart('${p.id}')">
            Add to Bag &bull; $${p.price.toFixed(2)}
          </button>
        ` : `
          <button class="btn btn-secondary btn-lg btn-block" disabled>Out of Stock</button>
        `}
      </div>
    </div>
  `;

  dialog.showModal();
}

window.setQuickViewImage = function(src, thumbEl) {
  document.getElementById('qvMainImage').src = src;
  document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
};

window.selectQuickViewColor = function(btnEl) {
  document.querySelectorAll('#qvColorPickerGroup .chip').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
};

window.handleQuickViewAddToCart = function(productId) {
  const activeColorBtn = document.querySelector('#qvColorPickerGroup .chip.active');
  const color = activeColorBtn ? activeColorBtn.getAttribute('data-color') : null;
  addToCart(productId, 1, color);
  document.getElementById('quickViewDialog').close();
};

// ============================================================================
// 10. MULTI-STEP CHECKOUT ENGINE
// ============================================================================
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add gadgets before checking out.', 'warning');
    return;
  }
  closeCartDrawer();
  goToCheckoutStep(1);
  document.getElementById('checkoutDialog').showModal();
}

function goToCheckoutStep(stepNumber) {
  // Update step indicator
  [1, 2, 3].forEach(step => {
    const indicator = document.getElementById(`stepIndicator${step}`);
    const panel = document.getElementById(`checkoutStep${step}`);

    if (step === stepNumber) {
      indicator.classList.add('active');
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
      if (step < stepNumber) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }
  });

  if (stepNumber === 3) {
    renderCheckoutReview();
  }
}

function validateShippingForm() {
  const fields = [
    { id: 'shipFirstName', name: 'First Name' },
    { id: 'shipLastName', name: 'Last Name' },
    { id: 'shipEmail', name: 'Email Address' },
    { id: 'shipAddress', name: 'Street Address' },
    { id: 'shipCity', name: 'City' },
    { id: 'shipPostal', name: 'Postal Code' }
  ];

  let isValid = true;
  fields.forEach(f => {
    const input = document.getElementById(f.id);
    const parent = input.closest('.form-group');
    if (!input.value.trim()) {
      parent.classList.add('has-error');
      isValid = false;
    } else {
      parent.classList.remove('has-error');
    }
  });

  // Basic email pattern check
  const emailInput = document.getElementById('shipEmail');
  if (emailInput.value && !/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailInput.closest('.form-group').classList.add('has-error');
    isValid = false;
  }

  return isValid;
}

function renderCheckoutReview() {
  const firstName = document.getElementById('shipFirstName').value;
  const address = document.getElementById('shipAddress').value;
  const city = document.getElementById('shipCity').value;
  const selectedPayTab = document.querySelector('.pay-tab.active').getAttribute('data-pay');

  document.getElementById('reviewShippingSummary').textContent = `${firstName}, ${address}, ${city}`;

  if (selectedPayTab === 'card') {
    const cardNum = document.getElementById('cardNumber').value || '•••• 4242';
    const last4 = cardNum.replace(/\s+/g, '').slice(-4) || '4242';
    document.getElementById('reviewPaymentSummary').textContent = `Credit Card ending in •••• ${last4}`;
  } else if (selectedPayTab === 'upi') {
    const upiId = document.getElementById('upiId').value || 'instant@upi';
    document.getElementById('reviewPaymentSummary').textContent = `UPI: ${upiId}`;
  } else {
    document.getElementById('reviewPaymentSummary').textContent = 'Cash on Delivery';
  }

  const { subtotal, discount, shipping, tax, total } = calculateCartTotals();

  // Review items list
  const listEl = document.getElementById('reviewItemsList');
  listEl.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';
    return `
      <div style="display:flex; justify-content:space-between; font-size:0.875rem; margin-bottom:0.5rem;">
        <span>${item.quantity}x ${p.name} (${item.color})</span>
        <strong>$${(p.price * item.quantity).toFixed(2)}</strong>
      </div>
    `;
  }).join('');

  document.getElementById('reviewSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  if (discount > 0) {
    document.getElementById('reviewDiscountLine').style.display = 'flex';
    document.getElementById('reviewDiscount').textContent = `-$${discount.toFixed(2)}`;
  } else {
    document.getElementById('reviewDiscountLine').style.display = 'none';
  }

  document.getElementById('reviewShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('reviewTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('reviewTotalAmount').textContent = `$${total.toFixed(2)}`;
}

function completeOrderPlacement(e) {
  e.preventDefault();

  const { total } = calculateCartTotals();
  const orderId = '#NX-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Populate receipt modal
  document.getElementById('receiptOrderId').textContent = orderId;
  document.getElementById('receiptDate').textContent = now;
  document.getElementById('receiptTotalAmount').textContent = `$${total.toFixed(2)}`;

  const summaryEl = document.getElementById('receiptItemsSummary');
  summaryEl.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    if (!p) return '';
    return `
      <div style="display:flex; justify-content:space-between; font-size:0.8125rem; margin-bottom:0.4rem;">
        <span>${item.quantity}x ${p.name}</span>
        <span>$${(p.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
  }).join('');

  // Clear cart
  state.cart = [];
  saveCart();
  renderCart();

  // Switch dialogs
  document.getElementById('checkoutDialog').close();
  document.getElementById('orderSuccessDialog').showModal();

  showToast(`Order ${orderId} placed successfully!`, 'success');
}

// ============================================================================
// 11. SEARCH AUTOCOMPLETE & LIVE FILTERING
// ============================================================================
function handleSearchInput(e) {
  const query = e.target.value;
  state.searchQuery = query;

  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';
  }

  renderSearchDropdown(query);
  renderProducts();
}

function renderSearchDropdown(query) {
  const dropdown = document.getElementById('searchDropdown');
  if (!dropdown) return;

  if (query.trim().length === 0) {
    dropdown.classList.remove('active');
    dropdown.innerHTML = '';
    return;
  }

  const matches = PRODUCTS.filter(p => {
    const q = query.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
  }).slice(0, 5);

  if (matches.length === 0) {
    dropdown.innerHTML = `<div style="padding:0.75rem; font-size:0.8125rem; color:var(--color-text-muted); text-align:center;">No matching gadgets</div>`;
    dropdown.classList.add('active');
    return;
  }

  dropdown.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openQuickView('${p.id}'); closeSearchDropdown();">
      <img src="${p.images[0]}" alt="${p.name}" class="search-thumb">
      <div class="search-result-info">
        <div class="search-result-title">${p.name}</div>
        <div class="search-result-price">$${p.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('');

  dropdown.classList.add('active');
}

function closeSearchDropdown() {
  const dropdown = document.getElementById('searchDropdown');
  if (dropdown) dropdown.classList.remove('active');
}

function clearSearch() {
  state.searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  closeSearchDropdown();
  renderProducts();
}

// ============================================================================
// 12. PROMO CODE SYSTEM
// ============================================================================
const VALID_COUPONS = {
  'NEXUS15': { type: 'percent', value: 15, code: 'NEXUS15', description: '15% Off Total' },
  'WELCOME10': { type: 'percent', value: 10, code: 'WELCOME10', description: '10% Off First Purchase' },
  'FREESHIP': { type: 'fixed', value: 0, code: 'FREESHIP', description: 'Free Express Shipping' }
};

function applyPromoCode(code) {
  const clean = code.trim().toUpperCase();
  if (VALID_COUPONS[clean]) {
    state.appliedCoupon = VALID_COUPONS[clean];
    localStorage.setItem('nexus_coupon', JSON.stringify(state.appliedCoupon));
    renderCart();
    showToast(`Coupon "${clean}" applied successfully!`, 'success');
  } else {
    showToast(`Invalid coupon code. Try NEXUS15 or WELCOME10`, 'error');
  }
}

function removePromoCode() {
  state.appliedCoupon = null;
  localStorage.removeItem('nexus_coupon');
  renderCart();
  showToast('Coupon removed', 'info');
}

// ============================================================================
// 13. TOAST NOTIFICATION SYSTEM
// ============================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: '✦'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '•'}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger entrance
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

// ============================================================================
// 14. EVENT LISTENERS SETUP
// ============================================================================
function setupEventListeners() {
  // Navigation Category buttons
  document.querySelectorAll('.nav-filter-btn, .mobile-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-category');
      setCategory(cat);
      // Close mobile nav if open
      document.getElementById('mobileNavPanel').classList.remove('open');
    });
  });

  // Filter Chips
  document.querySelectorAll('#categoryChips .chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-cat');
      setCategory(cat);
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuBtn');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.getElementById('mobileNavPanel').classList.toggle('open');
    });
  }

  // Price Filter Dropdown
  const priceFilter = document.getElementById('priceFilter');
  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      state.activePrice = e.target.value;
      renderProducts();
    });
  }

  // Sort Select Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderProducts();
    });
  }

  // In Stock Only Toggle
  const inStockCheckbox = document.getElementById('inStockCheckbox');
  if (inStockCheckbox) {
    inStockCheckbox.addEventListener('change', (e) => {
      state.inStockOnly = e.target.checked;
      renderProducts();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.activeCategory = 'all';
      state.activePrice = 'all';
      state.activeSort = 'featured';
      state.searchQuery = '';
      state.inStockOnly = false;

      if (priceFilter) priceFilter.value = 'all';
      if (sortSelect) sortSelect.value = 'featured';
      if (inStockCheckbox) inStockCheckbox.checked = false;

      clearSearch();
      syncCategoryButtons('all');
      renderProducts();
      showToast('Filters reset to default', 'info');
    });
  }

  // Live Search Input & Clear
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearchInput);
    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#searchWrapper')) {
        closeSearchDropdown();
      }
    });
  }

  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }

  // Cart Drawer open/close triggers
  document.getElementById('cartTriggerBtn').addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn').addEventListener('click', closeCartDrawer);
  document.getElementById('cartBackdrop').addEventListener('click', closeCartDrawer);
  document.getElementById('continueShoppingFromCartBtn').addEventListener('click', closeCartDrawer);

  // Wishlist Drawer open/close triggers
  document.getElementById('wishlistTriggerBtn').addEventListener('click', openWishlistDrawer);
  document.getElementById('closeWishlistBtn').addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlistBackdrop').addEventListener('click', closeWishlistDrawer);
  document.getElementById('browseWishlistBtn').addEventListener('click', () => {
    closeWishlistDrawer();
    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
  });

  // Promo Code Pill in Top Bar - Click to copy & auto-apply!
  const promoPill = document.getElementById('copyPromoCode');
  if (promoPill) {
    promoPill.addEventListener('click', () => {
      const code = promoPill.textContent.trim();
      navigator.clipboard.writeText(code).then(() => {
        applyPromoCode(code);
        openCartDrawer();
      }).catch(() => {
        applyPromoCode(code);
        openCartDrawer();
      });
    });
  }

  // Promo Form in Cart
  const promoForm = document.getElementById('promoForm');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('promoInput');
      if (input && input.value) {
        applyPromoCode(input.value);
        input.value = '';
      }
    });
  }

  const removePromoBtn = document.getElementById('removePromoBtn');
  if (removePromoBtn) {
    removePromoBtn.addEventListener('click', removePromoCode);
  }

  // Deal of the Day Buttons
  const claimDealBtn = document.getElementById('claimDealBtn');
  if (claimDealBtn) {
    claimDealBtn.addEventListener('click', (e) => {
      const pid = e.currentTarget.getAttribute('data-product-id');
      addToCart(pid);
    });
  }

  const quickViewDealBtn = document.getElementById('quickViewDealBtn');
  if (quickViewDealBtn) {
    quickViewDealBtn.addEventListener('click', (e) => {
      const pid = e.currentTarget.getAttribute('data-product-id');
      openQuickView(pid);
    });
  }

  const heroQuickDealBtn = document.getElementById('heroQuickDealBtn');
  if (heroQuickDealBtn) {
    heroQuickDealBtn.addEventListener('click', () => {
      document.getElementById('dealSection').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Native Dialog Close Buttons
  document.getElementById('closeQuickViewBtn').addEventListener('click', () => {
    document.getElementById('quickViewDialog').close();
  });
  document.getElementById('closeCheckoutBtn').addEventListener('click', () => {
    document.getElementById('checkoutDialog').close();
  });
  document.getElementById('continueShoppingAfterOrderBtn').addEventListener('click', () => {
    document.getElementById('orderSuccessDialog').close();
  });

  // Checkout Flow Buttons
  document.getElementById('proceedCheckoutBtn').addEventListener('click', openCheckout);
  document.getElementById('backToCartFromCheckoutBtn').addEventListener('click', () => {
    document.getElementById('checkoutDialog').close();
    openCartDrawer();
  });

  document.getElementById('goToStep2Btn').addEventListener('click', () => {
    if (validateShippingForm()) {
      goToCheckoutStep(2);
    } else {
      showToast('Please fill out all required shipping fields', 'warning');
    }
  });

  document.getElementById('backToStep1Btn').addEventListener('click', () => goToCheckoutStep(1));
  document.getElementById('goToStep3Btn').addEventListener('click', () => goToCheckoutStep(3));
  document.getElementById('backToStep2Btn').addEventListener('click', () => goToCheckoutStep(2));

  // Payment Method Tabs
  document.querySelectorAll('.pay-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');

      const payMethod = e.currentTarget.getAttribute('data-pay');
      document.getElementById('payMethodCard').style.display = payMethod === 'card' ? 'block' : 'none';
      document.getElementById('payMethodUpi').style.display = payMethod === 'upi' ? 'block' : 'none';
      document.getElementById('payMethodCod').style.display = payMethod === 'cod' ? 'block' : 'none';
    });
  });

  // Live Card Preview formatting
  const cardNumberInput = document.getElementById('cardNumber');
  const cardNameInput = document.getElementById('cardName');
  const cardExpiryInput = document.getElementById('cardExpiry');

  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      val = val.replace(/(\d{4})/g, '$1 ').trim();
      e.target.value = val;
      document.getElementById('cardPreviewNumber').textContent = val || '•••• •••• •••• ••••';
    });
  }

  if (cardNameInput) {
    cardNameInput.addEventListener('input', (e) => {
      document.getElementById('cardPreviewName').textContent = e.target.value.toUpperCase() || 'YOUR NAME';
    });
  }

  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) {
        val = val.substring(0, 2) + '/' + val.substring(2);
      }
      e.target.value = val;
      document.getElementById('cardPreviewExpiry').textContent = val || 'MM/YY';
    });
  }

  // Shipping Speed Radio
  document.querySelectorAll('input[name="shippingSpeed"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.shippingMethod = e.target.value;
      renderCart();
    });
  });

  // Checkout Form Submission (Step 3 final place order)
  document.getElementById('checkoutForm').addEventListener('submit', completeOrderPlacement);

  // VIP Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      showToast(`Welcome! Discount code NEXUS15 has been unlocked for ${email}.`, 'success');
      newsletterForm.reset();
    });
  }

  // Footer category links
  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-category');
      setCategory(cat);
    });
  });

  // Footer dummy modal links (Shipping, Warranty, etc.)
  document.querySelectorAll('.footer-dummy-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = e.currentTarget.getAttribute('data-dialog');
      showPolicyDialog(topic);
    });
  });

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      closeSearchDropdown();
      const qv = document.getElementById('quickViewDialog');
      if (qv && qv.open) qv.close();
      const ch = document.getElementById('checkoutDialog');
      if (ch && ch.open) ch.close();
    }
  });
}

function setCategory(cat) {
  state.activeCategory = cat;
  syncCategoryButtons(cat);
  renderProducts();
}

function syncCategoryButtons(cat) {
  // Sync desktop nav
  document.querySelectorAll('.nav-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
  });
  // Sync mobile nav
  document.querySelectorAll('.mobile-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === cat);
  });
  // Sync chips
  document.querySelectorAll('#categoryChips .chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-cat') === cat);
  });
}

function showPolicyDialog(topic) {
  const policies = {
    shipping: { title: 'Carbon-Neutral Global Shipping', body: 'All orders over $99 qualify for Free Standard Delivery (3-5 business days). Priority Air Express delivers within 48 hours worldwide with real-time flight tracking.' },
    warranty: { title: 'Nexus 2-Year Limited Warranty', body: 'Every Nexus hardware device is covered by our comprehensive 2-year warranty against defects in materials and craftsmanship, with complimentary advance hardware replacement.' },
    returns: { title: '30-Day Risk-Free Returns', body: 'Test your device in your daily workflow for 30 days. If you are not completely satisfied, return it in original packaging for a 100% full refund with prepaid shipping labels.' },
    support: { title: 'Firmware & Driver Updates', body: 'Download companion software for macOS and Windows to access 10-band parametric EQ tuning, low-latency dongle pairing, and over-the-air firmware upgrades.' },
    contact: { title: 'Hardware Engineering Support', body: 'Our hardware engineers are available 24 hours a day, 7 days a week. Reach us at support@nexustech.io or call toll-free 1-800-555-NEXUS.' }
  };

  const p = policies[topic] || { title: 'Customer Care', body: 'Nexus Customer Service is dedicated to your satisfaction.' };
  showToast(`${p.title}: ${p.body}`, 'info');
}
