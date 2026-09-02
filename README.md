# SGKS Silks - Product Landing Page Documentation

A responsive single-page landing application built for **SGKS Silks**, providing a conversion-focused showcase for pure silk handloom sarees.

---

## Landing Page User Journey

$$\text{LAND} \longrightarrow \text{UNDERSTAND PRODUCT} \longrightarrow \text{EXPLORE COLLECTION} \longrightarrow \text{SEE VALUE} \longrightarrow \text{BUILD TRUST} \longrightarrow \text{INQUIRE}$$

---

## Refined Features & Landing Flow

### 1. Navigation Bar
- **Brand Logo**: Displays **SGKS Silks** logo on the left. Clicking smoothly scrolls back to top (`#home`).
- **Landing Links**: Quick links to `Collections`, `Why Us`, `Featured`, and `Contact`.
- **Primary Conversion CTA**: Prominent **"Inquire Now"** action button in header.

### 2. Top-Centered Hero Header
- **Value Proposition Headline**: *"Timeless Silk Sarees, Woven for Your Most Cherished Moments"*.
- **Background Banner**: High-resolution silk texture image background overlay.
- **Dual Conversion CTAs**: **"Explore Collections"** and **"Inquire Now"**.

### 3. Signature Silk Collections Section
- **Collection Cards**: Highlights 6 authentic silk categories (Kancheepuram, Banarasi, Mysore, Soft Silks, Lightweight Kancheepuram, Kerala Sarees).
- **Category-Aware Click Interaction**: Clicking a Collection Card smoothly scrolls to `#featured` AND filters/highlights featured sarees of that specific silk category.

### 4. Why Choose SGKS Silks (Value Propositions)
- **4 Hallmark Differentiators**: 100% Pure Mulberry Silk, Master Handloom Artisans, Authentic Zari Weaves, and Silk Mark Certified.

### 5. Featured Sarees Showcase & Filter Tabs
- **Curated Featured Grid**: Displays representative high-value sarees.
- **Category Filter Tabs**: Interactive filter tabs (`All Featured`, `Kancheepuram`, `Banarasi`, `Mysore`, `Soft Silks`, `Light Weight`, `Kerala`).
- **Spotlight Zoom Modal**: Clicking a saree opens the modal preview displaying high-resolution imagery, fabric composition, origin, and authenticity guarantee.

### 6. Seamless Inquiry Conversion Flow
- **Automated Inquiry Pre-fill**: Clicking *"Inquire About This Saree"* inside the modal automatically:
  1. Closes the spotlight modal.
  2. Smooth-scrolls directly to the `#contact` section.
  3. Pre-fills the subject field with the selected product title and price.
  4. Auto-focuses the cursor on the message input field (`#form-message`).
- **Contact Channels**: Showroom location (Google Maps), Phone dialer (`tel:`), Email client (`mailto:`), and Lead Form (**"Request Information"**).

---

## Repository Structure

```text
sgks-silks-website/
├── index.html                          # Refined single-page landing page markup
├── images/                             # Local saree image assets (30 product images)
│   ├── banarasi-silk-{1..5}.jpg
│   ├── kancheepuram-lightweight-silk-{1..5}.jpg
│   ├── kancheepuram-silk-{1..5}.jpg
│   ├── kerala-silk-{1..5}.jpg
│   ├── mysore-silk-{1..5}.jpg
│   └── soft-silk-{1..5}.jpg
├── styles/                             # Stylesheet and script resources
│   ├── style.css                       # Student-accessible, clean multi-line CSS
│   └── script.js                       # Featured rendering, category-aware filter, spotlight & inquiry logic
├── Requirements.md                     # Business requirements specification
├── PLAN.md                             # Landing page implementation plan & refinements
└── README.md                           # Web application documentation
```

---

## How to Run Locally

Run a local development server from the workspace root:

```bash
npx http-server . -p 8080
```

Access `http://localhost:8080/index.html` in your web browser.
