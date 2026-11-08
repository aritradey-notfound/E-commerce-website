# NEXUSTECH — Modern E-Commerce Platform

A precision-engineered, ultra-responsive modern e-commerce storefront for next-generation tech, computing, audio, and wearables. Built with a clean minimalist aesthetic, responsive design, and zero external build tool dependencies.

---

## 🌟 Key Features

### 🛍️ Storefront & Product Discovery
- **Modern Minimalist Aesthetic**: Crisp typography with *Plus Jakarta Sans* and *Space Grotesk*, refined neutral color palettes, soft layered shadows, and high-tech electric blue accents.
- **Auto Light & Dark Mode**: Seamless toggle between clean minimalist light theme and deep obsidian dark mode (persisted in `localStorage`).
- **Interactive Deal of the Day**: Live real-time ticking countdown timer with highlighted flagship discounts.
- **Instant Search & Autocomplete**: Real-time search query matching across product names, categories, descriptions, and technical specifications with thumbnail previews.
- **Category Filter Chips**: One-click switching between *All Gear*, *Audio & Hi-Fi*, *Computing*, *Smart Wearables*, and *Desk & Power*.
- **Multi-parameter Sorting & Filtering**: Sort by *Price: Low to High*, *Price: High to Low*, *Highest Rated*, and *Biggest Discount*, alongside price bracket filters and *In Stock Only* toggles.

### 🔍 Product Details & Quick View Modal
- Native HTML5 `<dialog>` implementation with backdrop blur.
- Multi-angle image preview thumbnails with instant gallery switching.
- Technical specifications table (chipset, drivers, battery, materials).
- Finish/color variant picker with active visual indicators.

### 🛒 Dynamic Shopping Cart Drawer
- Slide-out glassmorphic cart drawer accessible from anywhere on the site.
- Quantity adjustment steppers (`+` / `-`) and instant item removal with animated transitions.
- **Free Shipping Progress Tracker**: Visual progress bar calculating the exact remaining amount needed to qualify for free express delivery ($99 threshold).
- **Promo Code Engine**: Test with codes `NEXUS15` (15% off total), `WELCOME10` (10% off), or `FREESHIP` (free shipping). Clickable discount pill in the top announcement bar to auto-apply in one click!
- Real-time subtotal, coupon discount, calculated shipping, and estimated tax.

### ❤️ Persistent Wishlist Drawer
- Bookmark favorite gadgets with heart icon micro-interactions.
- Move items directly from Wishlist into the Cart with one click.
- Full state persistence across page refreshes via `localStorage`.

### 💳 Complete 3-Step Checkout Flow
1. **Step 1: Shipping Information** — Full validation of recipient name, email address, physical address, city, postal code, country, and delivery speed selection (Standard vs. Priority Air Express).
2. **Step 2: Payment Gateway** — 
   - **Interactive Credit Card**: Dynamic digital card chip preview updating card number, cardholder name, and expiry date live with auto-spacing.
   - **Instant UPI / QR Code**: Mock QR code scanner for mobile wallet payments.
   - **Cash on Delivery (COD)**: Doorstep verification option.
3. **Step 3: Review & Place Order** — Order itemized summary, delivery timeline, total recalculation, and simulated order generation with a printable receipt modal and order tracking ID (e.g. `#NX-892410`).

### 🔔 Interactive Toast Notification System
- Responsive floating toasts providing immediate feedback for cart additions, wishlist updates, promo code applications, and filter resets.

---

## 🚀 How to Run the Website

Because NEXUSTECH is engineered with pure standard-compliant modern Web APIs (HTML5 semantic tags, CSS3 custom properties & flex/grid, and ES6+ JavaScript):

### Option 1: Direct Browser Launch (Easiest)
Simply double-click `index.html` or right-click `index.html` and choose **Open with > Google Chrome** (or Edge / Firefox / Safari).

### Option 2: Local Web Server
If you prefer running a local server:
- With VS Code: Right-click `index.html` and click **"Open with Live Server"**.
- With Python (if installed): `python -m http.server 3000`
- With Node.js (if installed): `npx serve .`

---

## 📁 File Structure

```text
├── index.html       # Semantic HTML5 storefront, dialog modals, announcement bar, drawer containers
├── style.css        # Responsive CSS3 styles, theme variables, light/dark mode, micro-animations
├── app.js           # Full client-side JavaScript engine (catalog, cart, wishlist, checkout, toasts)
└── README.md        # Documentation and feature guide
```

---

## 🛠️ Built With
- **HTML5**: Semantic tags, `<dialog>`, `<aside>`, `<template>`, accessibility ARIA attributes.
- **CSS3**: CSS Variables, CSS Grid, Flexbox, `:has()`, `backdrop-filter`, responsive media queries.
- **Vanilla JavaScript (ES6+)**: Custom State Management, Web Storage API (`localStorage`), Clipboard API.
