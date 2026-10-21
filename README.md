# Bridal Zone Patna — Official Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bridal--zone.vercel.app-10B981?style=for-the-badge&logo=vercel)](https://bridal-zone.vercel.app/)
[![Rating](https://img.shields.io/badge/Justdial-4.0%20%E2%98%85%20(330%2B%20Reviews)-D4AF37?style=for-the-badge)](https://www.justdial.com/Patna/Bridal-Zone-Near-Fab-India-Dak-Bunglow-Road/0612PX612-X612-110115131749-I9Z2DC_BZDET)

> **Patna's Premier Women's Boutique & Bridal Wear Destination (Est. 1995)**  
> *Specializing in budget-friendly bridal lehengas, rental options (starting ₹499–₹999), bespoke custom stitching, and artificial bridal jewelry.*
>
> 🌐 **Live Website:** [https://bridal-zone.vercel.app/](https://bridal-zone.vercel.app/)

---

## 📍 Business Overview & Contact Details

| Detail | Information |
| :--- | :--- |
| **Business Name** | **Bridal Zone** |
| **Established** | **1995** (Over 31 years of bridal legacy in Bihar) |
| **Address** | 3rd Floor, White House Apartment, Flat No. 302B, Sri Niwas Path, Bandar Bagicha, near ISKCON Temple, Dak Bunglow Road, Patna, Bihar 800001 |
| **Landmark** | Near ISKCON Temple & Dak Bunglow Road |
| **Phone Numbers** | • **+91 93086 30422** (Primary Orders & WhatsApp)<br>• **+91 93418 44017** (Bridal Trials & Consultations)<br>• **+91 80847 72001** (Rentals & Jewelry Desk) |
| **WhatsApp Desk** | `+91 93086 30422` (Instant inquiry links integrated across the site) |
| **Store Hours** | Daily: **11:00 AM – 8:00 PM** (Open 7 days a week) |
| **Ratings** | **4.0 / 5.0** on Justdial (330+ verified ratings) |
| **Social Links** | • Instagram: [@bridalzone_](https://www.instagram.com/bridalzone_/)<br>• Facebook: [One Stop Shop For Wedding](https://www.facebook.com/onestopshopforwedding/) |

---

## 🌟 Key Features & Functional Modules

### 1. Curated Bridal & Occasion Wear Catalog
- **Categories:** Heavy Bridal Lehengas, Budget Rentals (₹499–₹999), Reception Trail Gowns, Pure Katan Banarasi Sarees, and Bespoke Zardozi Shararas & Anarkali Suits.
- **Filter Controls:**
  - One-click category tabs
  - Occasion selector (*Wedding Day, Sangeet, Mehendi, Haldi, Reception, Engagement*)
  - Live search bar (*search by fabric, work type, or color*)
  - "Rentals Only" toggle
  - Sort by price (*Rent Low-to-High, Buy Low-to-High*)
- **Dual Price Badges:** Displays both **Rental Price** (e.g., `₹2,499 / 3 days`) and **Retail Purchase Price** (`₹38,500`).
- **Resilient Image Handling:** Automatic fallback handler ensures images never display as broken icons.

### 2. Interactive Bridal Rental Savings Calculator
- Calculate total event rental packages in real time:
  - Select outfit + optional matching artificial jewelry combo
  - Choose rental duration (3, 5, or 7 days)
  - Add sister/bridesmaid lehengas (+₹699 each)
- Live outputs: Total Retail Value, Rental Price, **Money Saved (up to 92%)**, and Refundable Security Deposit.
- One-click button generates a pre-composed WhatsApp booking summary.

### 3. Customized Boutique Stitching & Blouse Design Studio
- Highlights 30+ years of in-house master tailoring experience in Patna.
- **Interactive Blouse Customizer:**
  - Front necklines: *Sabya-Cut Deep V, Sweetheart, Queen Anne, High Neck, Illusion Net*
  - Back styles: *Backless with Latkans & Dori, Deep U-Cut, Diamond Cutout, Criss-Cross*
  - Heavy Cancan installation option (+₹499 for 360° Bollywood twirl flare)
- Express 48-hour delivery option for urgent wedding dates.

### 4. Artificial Bridal Jewelry Collection (Rent & Buy)
- Complete 7-piece Maharani Kundan & Pearl sets, Sabyasachi-inspired Imperial Polki Chokers, Temple Jewelry, and Red Velvet Chooda + Kaleere.
- Micro gold-plated, hypoallergenic, and UV-sanitized before pickup.
- Rentals starting at ₹499.

### 5. In-Store Trial Appointment Scheduler
- Book a dedicated dressing room session with a personal styling assistant.
- Date, time slot, and preferred outfit inputs.
- Confetti celebration upon confirmation with an instant WhatsApp sync.

### 6. Interactive Real Brides Showcase & Patna Reviews
- Real customer testimonials featuring verified brides from Patna (Kankarbagh, Boring Road, Bailey Road).
- Embed of the store's 4.0 Justdial rating badge.
- Interactive FAQ accordion for rental deposit rules, dry cleaning, and customization timelines.

### 7. Google Maps Locator & Floating Fast Actions
- Interactive embedded Google Map with direct navigation directions.
- Direct tap-to-call links for all 3 store telephone lines.
- Persistent floating buttons: **WhatsApp Quick Chat**, **Direct Call**, and **Back-to-Top**.

---

## 🎨 Color System & UI Aesthetics

| Role | Color Hex | Visual Purpose |
| :--- | :--- | :--- |
| **Canvas Background** | `#FAF8F5` | Warm, luminous ivory replacing harsh dark backgrounds |
| **Card Surface** | `#FAF5EE` / `#FFFFFF` | Soft cream giving subtle contrast and high readability |
| **Primary Accent** | `#9F3A4B` | Elegant bridal rose for primary CTA buttons, badges, and active states |
| **Luxury Gold** | `#C5933C` | Warm champagne gold for rating stars, borders, and premium accents |
| **Typography Dark** | `#1C1917` / `#44403C` | Soft stone charcoal for high legibility |

---

## 💻 Tech Stack

- **Framework:** React 18 (TypeScript)
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS + Custom CSS Keyframe Animations
- **Icons:** Lucide React
- **Visual Effects:** Canvas Confetti (`canvas-confetti`)
- **Typography:** *Playfair Display* (Editorial headings) + *Plus Jakarta Sans* (Body)

---

## 🛠️ Project Structure

```
Bridal/
├── index.html                     # HTML5 shell with OpenGraph meta tags & fonts
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration & theme tokens
├── vite.config.ts                 # Vite bundler configuration
└── src/
    ├── main.tsx                   # React root entry
    ├── App.tsx                    # Main layout coordinator & modal states
    ├── index.css                  # Global styles, scrollbars, keyframe animations
    ├── data/
    │   └── storeData.ts           # Store details, catalog, jewelry, FAQs, testimonials
    └── components/
        ├── Navbar.tsx             # Header with single-word links & announcement bar
        ├── Hero.tsx               # Hero banner with curved SVG vector highlight
        ├── ProductCatalog.tsx     # Filterable bridal collection (Rent/Buy)
        ├── RentalCalculatorModal.tsx # Interactive rental savings calculator
        ├── CustomStitchingSection.tsx # Blouse designer & tailoring showcase
        ├── JewelrySection.tsx     # Artificial jewelry rent/buy cards
        ├── ServicesSection.tsx    # Boutique services (Rental, MUA, Tailoring)
        ├── RealBridesGallery.tsx  # Bride testimonials, Justdial badge & FAQs
        ├── StoreLocatorAndContact.tsx # Embedded map, contact numbers & booking
        ├── ProductDetailModal.tsx # Full product specification popup
        ├── BookingTrialModal.tsx  # Trial appointment scheduler dialog
        ├── WishlistDrawer.tsx     # Saved bridal outfits side-drawer
        ├── FloatingActions.tsx    # Quick WhatsApp, Phone & Scroll-top
        └── Footer.tsx             # Clean ivory footer with all store info
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# The website will be available at http://localhost:5173

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Live Deployment

The website is live on Vercel:
🔗 **[https://bridal-zone.vercel.app/](https://bridal-zone.vercel.app/)**

### Auto-Deployment via Git
Every time you push changes to your linked GitHub repository:
```bash
git add .
git commit -m "Update bridal catalog & meta tags"
git push
```
Vercel will automatically build and deploy the updates in seconds.
