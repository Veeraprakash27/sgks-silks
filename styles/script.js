/**
 * SGKS Silks - Refined Product Landing Page Script
 * Fulfills targeted landing page conversion flow, category-aware collection clicks, and inquiry automation.
 */

// 6 Curated Featured Sarees (1 representative item per silk category)
const featuredSarees = [
  {
    id: "ks-01",
    name: "Royal Crimson Kancheepuram Zari Silk Saree",
    category: "Kancheepuram Silks",
    categoryKey: "kancheepuram",
    price: 28500,
    image: "images/kancheepuram-silk-1.jpg",
    description: "Woven with pure mulberry silk and authentic silver gold-dipped zari, featuring traditional Mayil peacock motifs and a heavy contrasting pallu."
  },
  {
    id: "bn-01",
    name: "Heritage Red Banarasi Kadwa Silk Saree",
    category: "Banarasi Silks",
    categoryKey: "banarasi",
    price: 26000,
    image: "images/banarasi-silk-1.jpg",
    description: "Handcrafted in Varanasi using ancient Kadwa handloom weave with raised gold zari floral jaal patterns."
  },
  {
    id: "my-01",
    name: "Classic Golden Yellow Mysore Crepe Silk Saree",
    category: "Mysore Silks",
    categoryKey: "mysore",
    price: 12500,
    image: "images/mysore-silk-1.jpg",
    description: "Authentic 100% pure crepe Mysore silk saree featuring minimalist gold zari borders and light texture."
  },
  {
    id: "ss-01",
    name: "Pastel Pink Lightweight Soft Silk Saree",
    category: "Soft Silks",
    categoryKey: "soft-silk",
    price: 6500,
    image: "images/soft-silk-1.jpg",
    description: "Breezy and soft pastel pink silk saree crafted for effortlessly comfortable festive or wedding wear."
  },
  {
    id: "kl-01",
    name: "Magenta Lightweight Kancheepuram Saree",
    category: "Light Weight Kancheepuram",
    categoryKey: "lightweight-kancheepuram",
    price: 16500,
    image: "images/kancheepuram-lightweight-silk-1.jpg",
    description: "Innovative fusion of authentic Kanchipuram weave with a feather-light body structure in vivid magenta."
  },
  {
    id: "kr-01",
    name: "Traditional Kerala Kasavu Gold Zari Saree",
    category: "Kerala Sarees",
    categoryKey: "kerala",
    price: 35000,
    image: "images/kerala-silk-1.jpg",
    description: "Pristine off-white Kerala Kasavu saree woven with authentic golden zari border for auspicious occasions."
  }
];

// Price Formatter (INR)
const formatCurrency = amount => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderFeaturedSarees();
  initZoomModal();
  initContactForm();
});

// Navbar Scroll Effect & Mobile Menu
function initNavbar() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  if (navToggle) {
    navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
    document.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", () => navMenu.classList.remove("open")));
  }
}

// Render Curated Featured Sarees Grid
function renderFeaturedSarees() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  grid.innerHTML = featuredSarees.map(s => `
    <div class="product-card" data-category-key="${s.categoryKey}" onclick="openZoomModal('${s.id}')">
      <div class="product-image-container">
        <img src="${s.image}" alt="${s.name}" class="product-image" loading="lazy">
        <span class="product-category-tag">${s.category}</span>
        <div class="zoom-hint-icon" title="View details"><i class="fas fa-search-plus"></i></div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${s.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${formatCurrency(s.price)}</span>
          <span class="product-action-text"><i class="fas fa-expand-alt"></i> Details</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Smoothly scroll to Featured section and visually highlight target saree
function scrollToFeatured(categoryKey) {
  const featuredSection = document.getElementById("featured");
  if (featuredSection) {
    featuredSection.scrollIntoView({ behavior: "smooth" });
  }

  if (categoryKey) {
    document.querySelectorAll(".product-card").forEach(card => card.classList.remove("highlighted"));
    const matchingCard = document.querySelector(`.product-card[data-category-key="${categoryKey}"]`);
    if (matchingCard) {
      setTimeout(() => {
        matchingCard.classList.add("highlighted");
        setTimeout(() => matchingCard.classList.remove("highlighted"), 2000);
      }, 400);
    }
  }
}

// Zoom Spotlight Modal Logic
function initZoomModal() {
  const backdrop = document.getElementById("zoom-backdrop");
  if (!backdrop) return;

  backdrop.addEventListener("click", e => {
    if (e.target === backdrop || e.target.closest("#close-zoom-btn")) {
      closeZoomModal();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeZoomModal();
  });
}

function openZoomModal(productId) {
  const saree = featuredSarees.find(s => s.id === productId);
  if (!saree) return;

  document.getElementById("zoomed-img").src = saree.image;
  document.getElementById("zoomed-category").textContent = saree.category;
  document.getElementById("zoomed-title").textContent = saree.name;
  document.getElementById("zoomed-price").textContent = formatCurrency(saree.price);
  document.getElementById("zoomed-desc").textContent = saree.description;

  const inquireBtn = document.getElementById("zoomed-inquire-btn");
  if (inquireBtn) {
    inquireBtn.onclick = () => {
      closeZoomModal();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        
        const subjectInput = document.getElementById("form-subject");
        if (subjectInput) {
          subjectInput.value = `Inquiry regarding: ${saree.name} (${formatCurrency(saree.price)})`;
        }

        const messageInput = document.getElementById("form-message");
        if (messageInput) {
          setTimeout(() => messageInput.focus(), 400);
        }
      }
    };
  }

  document.getElementById("zoom-backdrop").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeZoomModal() {
  document.getElementById("zoom-backdrop")?.classList.remove("active");
  document.body.style.overflow = "";
}

// Contact Form Submit Handler
function initContactForm() {
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    alert(`Thank you, ${document.getElementById("form-name").value}! Your inquiry has been sent to SGKS Silks. Our silk specialists will respond shortly.`);
    form.reset();
  });
}
