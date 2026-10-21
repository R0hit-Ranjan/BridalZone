<<<<<<< HEAD
# Bridal Zone Patna — Official Website

> **Patna's Premier Women's Boutique & Bridal Wear Destination (Est. 1995)**  
> *Specializing in budget-friendly bridal lehengas, rental options (starting ₹499–₹999), bespoke custom stitching, and artificial bridal jewelry.*

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
- Confetti celebration + automated WhatsApp appointment reservation.

### 6. Trial Wishlist / Store Bag Drawer
- Click the heart icon on any outfit to save it for an in-store trial.
- Instant "Send Wishlist to Boutique on WhatsApp" feature so staff can keep outfits ready in the fitting room.

### 7. Real Brides, Social Proof & Reviews
- Testimonials from brides across Patna (*Kankarbagh, Boring Road, Bailey Road, Danapur*).
- Justdial 4.0 verification badge.
- Instagram Reels teaser showcase linking to `@bridalzone_`.
- Accordion FAQ addressing security deposits, dry cleaning, trial bookings, and advance reservations.

### 8. Showroom Locator & Communication
- Embedded interactive Google Map and Driving Directions button.
- Tap-to-call buttons for all 3 phone numbers.
- Sticky floating WhatsApp button with live pulse animation.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** React 18 with TypeScript
- **Bundler & Build Tool:** Vite 6
- **Styling:** Tailwind CSS (Custom luxury light palette: Warm Ivory `#FAF7F2`, Soft Cream `#FAF5EE`, Bridal Rose `#9F3A4B`, Champagne Gold `#C5933C`)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

### 📁 Project Structure

```
Bridal/
├── index.html                 # HTML Entry point with Google Fonts
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Theme color definitions & typography
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build optimization & chunking
├── src/
│   ├── main.tsx               # React application root
│   ├── App.tsx                # Master container & section orchestration
│   ├── index.css              # Global styles & scrollbar design
│   ├── types.ts               # TypeScript interfaces
│   ├── data/
│   │   └── storeData.ts       # Store details, catalog, jewelry, FAQs, reviews
│   └── components/
│       ├── Navbar.tsx         # Single-word aligned header & announcement bar
│       ├── Hero.tsx           # Luminous hero banner with smooth SVG underline
│       ├── ProductCatalog.tsx # Outfits grid with filters & search
│       ├── ProductDetailModal.tsx # Full-screen outfit details & fabric specs
│       ├── RentalCalculatorModal.tsx # Interactive rental savings estimator
│       ├── CustomStitchingSection.tsx # Blouse & tailoring interactive configurator
│       ├── JewelrySection.tsx # Artificial jewelry collection
│       ├── ServicesSection.tsx# 5 core boutique services
│       ├── RealBridesGallery.tsx # Customer reviews, Instagram reels & FAQs
│       ├── StoreLocatorAndContact.tsx # Map, phone links & appointment form
│       ├── BookingTrialModal.tsx # In-store trial scheduler dialog
│       ├── WishlistDrawer.tsx # Trial bag slide-over drawer
│       ├── FloatingActions.tsx# Sticky WhatsApp & Call buttons
│       └── Footer.tsx         # Light theme footer with all credentials
```

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (runs on http://localhost:5173)
npm run dev

# 3. Build for production (outputs optimized static files to dist/)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🚀 How to Host This Website for Free (Zero Cost)

Because this website is built with **Vite + React**, the `npm run build` command compiles the entire site into pure static HTML, CSS, and JavaScript files inside the `dist/` folder. This means you can host it **100% free forever** on any modern hosting provider with free SSL (HTTPS) and global CDN.

Here are the best 4 free hosting options:

---

### Option 1: Vercel (Recommended — Easiest & Fastest)

Vercel provides free global hosting, free automatic SSL, and automatic deploys whenever you push changes to GitHub.

#### Method A: Deploy via GitHub (1-Click)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Bridal Zone website"
   git branch -M main
   # Create a new repository on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/bridal-zone.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select your `bridal-zone` repository.
4. Vercel automatically detects **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**. Within 30 seconds, your site is live with a free URL like `https://bridal-zone.vercel.app`!

#### Method B: Deploy using Vercel CLI (No GitHub required)
```bash
# Install Vercel CLI
npm i -g vercel

# Run deploy from the project folder
vercel
```
Follow the 3 prompts and your site is live immediately.

---

### Option 2: Netlify (Free Drag-and-Drop or Git)

Netlify is completely free with generous bandwidth (100 GB/month) and instant setup.

#### Drag-and-Drop Method (No code needed):
1. Run `npm run build` in your terminal to generate the `dist/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly into your browser window.
4. Your website is live instantly on a free Netlify domain (e.g., `https://bridal-zone-patna.netlify.app`).

#### Git Method:
1. Connect your GitHub repository to Netlify.
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

---

### Option 3: GitHub Pages (Free Forever)

You can host directly from your GitHub repository for free:

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.ts`, set the base path to your repo name (e.g., `base: '/bridal-zone/'`).
4. Run:
   ```bash
   npm run deploy
   ```
Your site will be live at `https://YOUR_USERNAME.github.io/bridal-zone/`.

---

### Option 4: Cloudflare Pages (Fastest with Unlimited Bandwidth)

1. Sign up for free at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Connect your GitHub repository.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Click **Save and Deploy**. Cloudflare gives you a free `.pages.dev` domain with unlimited bandwidth and DDoS protection.

---

### 🌐 Connecting a Custom Domain (Optional)
If you buy a domain like `bridalzonepatna.com` (from GoDaddy, Namecheap, or Hostinger for ~₹600–₹800/year):
- On Vercel, Netlify, or Cloudflare, click **"Domains"** → **"Add Domain"**.
- Enter `bridalzonepatna.com`.
- Add the 2 DNS records (CNAME and A record) provided into your domain registrar.
- Free HTTPS/SSL is automatically generated!
=======
# BridalZone
>>>>>>> 42c995f05b240c8e16cf79b5a80e82cc8b76de1e
