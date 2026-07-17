/**
 * UK Peptide Labs - Standalone Script File
 * Vanilla JavaScript (ES6+) implementation for interactive landing page
 */

// 1. DATA DEFINITIONS (Products and FAQs)
const PEPTIDES_DATA = [
  {
    id: "bpc-157",
    name: "BPC-157 (Body Protection Compound)",
    category: "Tissue Regeneration Pathways",
    description: "A premium synthesised pentadecapeptide researched for tissue repair and gastrointestinal barrier integrity pathways.",
    longDescription: "BPC-157 is a sequence of 15 amino acids derived from a protective protein discovered in human gastric juice. In laboratory in-vitro models, it has demonstrated significant signaling activity in blood vessel formation (angiogenesis) and cellular migration, making it a cornerstone for tissue healing and structural integration research.",
    purity: "99.4%",
    formulation: "Lyophilised White Powder",
    size: "5mg",
    price: 42.00,
    casNumber: "137525-51-0",
    researchFocus: "Tendon, ligament, and mucosal lining recovery pathways"
  },
  {
    id: "tb-500",
    name: "TB-500 (Thymosin Beta-4 Fragment)",
    category: "Cellular Migration & Repair",
    description: "A synthetic fragment of Thymosin Beta-4 studied for wound healing, cellular flexibility, and inflammatory signaling.",
    longDescription: "TB-500 is a synthetic peptide containing the active sequence of Thymosin Beta-4, a naturally occurring protein present in almost all mammalian cells. It is researched extensively for its role in actin regulation, promoting endothelial cell differentiation, and supporting vascular development in targeted cellular models.",
    purity: "99.1%",
    formulation: "Lyophilised White Powder",
    size: "5mg",
    price: 48.00,
    casNumber: "77591-33-4",
    researchFocus: "Angiogenesis, muscle fiber recovery, and cell motility"
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin Acetate",
    category: "Growth Hormone Signaling",
    description: "A highly selective pentapeptide that acts as a ghrelin receptor agonist to stimulate growth hormone pathways.",
    longDescription: "Ipamorelin is a synthetic peptide containing five amino acids. It is a selective growth hormone secretagogue that stimulates GH release in vitro with high specificity, avoiding the secondary stimulation of cortisol, ACTH, or prolactin, which makes it ideal for clean receptor affinity studies.",
    purity: "99.5%",
    formulation: "Lyophilised White Powder",
    size: "2mg",
    price: 39.00,
    casNumber: "170851-70-4",
    researchFocus: "Receptor-selective somatotropic signaling and bone density modeling"
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu (Copper Peptide)",
    category: "Extracellular Matrix Modeling",
    description: "A tripeptide-copper complex widely researched for collagen synthesis, dermal remodeling, and cellular protection.",
    longDescription: "GHK-Cu is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) with a high affinity for copper ions. It is a highly studied regulator of dermal tissue remodeling, stimulating collagen, dermatan sulfate, chondroitin sulfate, and decorin synthesis in fibroblast cultures.",
    purity: "98.8%",
    formulation: "Lyophilised Blue Powder",
    size: "50mg",
    price: 52.00,
    casNumber: "49557-75-7",
    researchFocus: "Fibroblast activation, collagen matrix repair, and gene expression"
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    category: "Melanogenesis Pathways",
    description: "A synthetic analog of alpha-MSH studied for skin pigmentation, tanning mechanisms, and neuroreceptor affinity.",
    longDescription: "Melanotan II is a cyclic heptapeptide analog of the alpha-melanocyte stimulating hormone (a-MSH). It binds to MC1, MC3, MC4, and MC5 receptors, facilitating research into melanogenesis pathways, cellular responses to UV radiation, and central nervous system neuroreceptors.",
    purity: "99.2%",
    formulation: "Lyophilised White Powder",
    size: "10mg",
    price: 35.00,
    casNumber: "121062-08-6",
    researchFocus: "Melanogenesis stimulation and central metabolic receptor binding"
  },
  {
    id: "epitalon",
    name: "Epitalon (Epithalon)",
    category: "Cellular Longevity & Telomeres",
    description: "A synthetic tetrapeptide researched for its potential interaction with telomerase activity and cellular lifespan.",
    longDescription: "Epitalon is a synthetic peptide consisting of four amino acids (Ala-Glu-Asp-Gly). Initially identified in pineal gland extracts, it is researched for its influence on telomerase enzyme activity, which plays a critical role in preserving cellular integrity during cell division cycles.",
    purity: "99.3%",
    formulation: "Lyophilised White Powder",
    size: "10mg",
    price: 58.00,
    casNumber: "307297-39-8",
    researchFocus: "Telomerase activation, cell cycle regulation, and circadian rhythms"
  }
];

const FAQS_DATA = [
  {
    question: "Are peptides legal to purchase in the United Kingdom?",
    answer: "Yes. In the United Kingdom, peptides are completely legal to purchase and possess for laboratory research, in-vitro testing, and scientific analysis. However, under UK regulations, specifically the Human Medicines Regulations 2012, they cannot be marketed, sold, or supplied for human consumption or as medicinal treatments without authorisation from the MHRA (Medicines and Healthcare products Regulatory Agency)."
  },
  {
    question: "What does 'research-grade' signify?",
    answer: "Research-grade signifies that the substance is manufactured with ultra-high purity (typically 98% or higher, verified by HPLC and Mass Spectrometry) specifically for scientific research, in-vitro experiments, or diagnostic studies. These chemical compounds are strictly not approved for clinical therapy, human trials, or direct administration to humans or animals outside of a controlled laboratory environment."
  },
  {
    question: "How are the purity and quality of your peptides verified?",
    answer: "Every batch of peptides supplied by UK Peptide Labs undergoes a double-verification protocol. We perform High-Performance Liquid Chromatography (HPLC) to confirm purity profiles and Mass Spectrometry (MS) to verify molecular weight and sequence identity. Certificate of Analysis (CoA) reports are compiled for every production batch and are accessible upon request for verification."
  },
  {
    question: "How should lyophilised peptides be stored?",
    answer: "For short-term storage (under 4 weeks), lyophilised peptides can be kept at room temperature (around 20°C) away from direct sunlight. For long-term preservation, they must be stored in a freezer at -20°C to maintain stability and prevent degradation. Once reconstituted in a sterile solution (such as bacteriostatic water), they must be kept refrigerated at 2°C to 8°C and used within a limited research timeframe."
  },
  {
    question: "Do you offer UK-wide temperature-controlled shipping?",
    answer: "Yes, we ship to all addresses in the United Kingdom. All items are dispatched in highly insulated, climate-shielded packaging with cold-packs when necessary. We use tracked, next-day courier services (Royal Mail Tracked 24 or DHL Express) to ensure the structural integrity of the chemical crystals is preserved throughout transit."
  },
  {
    question: "Can UK Peptide Labs provide dosage instructions or protocols?",
    answer: "No. In strict compliance with UK regulations, we do not provide dosage guides, mixing ratios, therapeutic protocols, or administration instructions for humans or animals. Doing so would violate UK licensing rules regarding unlicensed medical advice. We encourage all researchers to refer to peer-reviewed scientific literature and established laboratory manuals."
  }
];

// Active State Variables
let selectedProduct = null;

// Initialize when DOM Content Loads
document.addEventListener("DOMContentLoaded", () => {
  // Update year
  document.getElementById("current-year").textContent = new Date().getFullYear().toString();

  // 1. Render Catalog Grid
  renderCatalog();

  // 2. Render FAQs Accordion
  renderFAQs();

  // 3. Initialize Mobile Menu Toggle
  initMobileMenu();

  // 4. Initialize Smooth Anchor Scroll & Navigation Highlighting
  initSmoothScroll();

  // 5. Initialize Form Validation
  initFormValidation();

  // 6. Initialize Scroll to Top & Header DropShadow listeners
  initScrollListeners();

  // 7. Initialize Lucide Icons
  lucide.createIcons();
});

// Catalog Grid Rendering
function renderCatalog() {
  const container = document.getElementById("products-grid-container");
  if (!container) return;

  container.innerHTML = PEPTIDES_DATA.map(product => `
    <div class="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="space-y-4">
        <div class="flex justify-between items-start">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-100 uppercase tracking-wider">
            ${product.category}
          </span>
          <span class="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md flex items-center gap-1">
            <i data-lucide="check" class="w-3.5 h-3.5 inline"></i>
            ${product.purity} Purity
          </span>
        </div>

        <div class="space-y-1">
          <h3 class="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-teal-800 transition-colors">
            ${product.name}
          </h3>
          <span class="block text-[10px] font-mono text-slate-400">
            CAS: ${product.casNumber}
          </span>
        </div>

        <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed">
          ${product.description}
        </p>

        <div class="grid grid-cols-2 gap-3 pt-3 border-t border-slate-50 text-xs">
          <div>
            <span class="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Standard unit</span>
            <span class="font-bold text-slate-700 mt-0.5 block">${product.size} Vial</span>
          </div>
          <div>
            <span class="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Formulation</span>
            <span class="font-bold text-slate-700 mt-0.5 block truncate">${product.formulation.split(" ")[0]} Crystals</span>
          </div>
        </div>
      </div>

      <div class="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <span class="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Indicative price</span>
          <span class="text-2xl font-display font-extrabold text-slate-900 leading-none">
            £${product.price.toFixed(2)}
            <span class="text-xs text-slate-500 font-normal ml-0.5"> GBP</span>
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="openDetailsModal('${product.id}')" class="p-2.5 text-slate-500 hover:text-teal-700 hover:bg-teal-50 border border-slate-100 hover:border-teal-100 rounded-xl transition-all duration-200 cursor-pointer" title="View analytical specifications">
            <i data-lucide="file-text" class="w-5 h-5"></i>
          </button>
          <button onclick="openEnquiryModal('${product.id}')" class="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-wide uppercase rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer">
            Enquire
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// FAQs Accordion Rendering
function renderFAQs() {
  const container = document.getElementById("faqs-accordion-container");
  if (!container) return;

  container.innerHTML = FAQS_DATA.map((faq, index) => `
    <div class="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
      <button onclick="toggleFAQ(${index})" class="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer">
        <div class="flex items-start gap-3.5">
          <i data-lucide="help-circle" class="w-5 h-5 text-teal-700 mt-0.5 shrink-0"></i>
          <span class="font-display font-bold text-slate-900 text-sm sm:text-base leading-tight">
            ${faq.question}
          </span>
        </div>
        <div id="faq-chevron-${index}" class="faq-chevron-icon p-1.5 bg-slate-50 rounded-lg text-slate-400 shrink-0 transition-transform duration-300 ${index === 0 ? "rotate-180 bg-teal-50 text-teal-700" : ""}">
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </div>
      </button>

      <div id="faq-content-${index}" class="faq-panel-content transition-all duration-300 ease-in-out overflow-hidden border-slate-50" style="max-height: ${index === 0 ? '300px' : '0px'}; border-top-width: ${index === 0 ? '1px' : '0px'};">
        <div class="p-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50/10">
          ${faq.answer}
        </div>
      </div>
    </div>
  `).join("");
}

// FAQ Accordion Toggle Actions
window.toggleFAQ = function(index) {
  const panel = document.getElementById(`faq-content-${index}`);
  const chevron = document.getElementById(`faq-chevron-${index}`);
  
  const isOpened = panel.style.maxHeight !== "0px";

  // Collapse All
  document.querySelectorAll(".faq-panel-content").forEach(p => {
    p.style.maxHeight = "0px";
    p.style.borderTopWidth = "0px";
  });
  document.querySelectorAll(".faq-chevron-icon").forEach(c => {
    c.classList.remove("rotate-180", "bg-teal-50", "text-teal-700");
  });

  // Toggle Selected
  if (!isOpened) {
    panel.style.maxHeight = "300px";
    panel.style.borderTopWidth = "1px";
    chevron.classList.add("rotate-180", "bg-teal-50", "text-teal-700");
  }
};

// Hamburger Menu Toggle (Drawer Trigger)
function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const menuIconHamburger = document.getElementById("menu-icon-hamburger");
  const menuIconClose = document.getElementById("menu-icon-close");

  if (!menuToggle || !mobileDrawer) return;

  menuToggle.addEventListener("click", () => {
    const isHidden = mobileDrawer.classList.contains("hidden");
    if (isHidden) {
      mobileDrawer.classList.remove("hidden");
      menuIconHamburger.classList.add("hidden");
      menuIconClose.classList.remove("hidden");
    } else {
      mobileDrawer.classList.add("hidden");
      menuIconHamburger.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    }
  });

  // Close drawer when clicking any drawer link
  mobileDrawer.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.add("hidden");
      menuIconHamburger.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
    });
  });
}

// Smooth Anchor Link Scrolling
function initSmoothScroll() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// Scroll Event Listeners (Sticky Header, Scroll to Top, Section Highlights)
function initScrollListeners() {
  const header = document.getElementById("app-header");
  const backToTopBtn = document.getElementById("back-to-top-btn");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Header Shading
    if (scrollY > 20) {
      header.classList.add("bg-white/95", "backdrop-blur-md", "shadow-md", "border-b", "border-slate-100", "py-4");
      header.classList.remove("bg-transparent", "py-6");
    } else {
      header.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-md", "border-b", "border-slate-100", "py-4");
      header.classList.add("bg-transparent", "py-6");
    }

    // Scroll To Top Visibility
    if (scrollY > 400) {
      backToTopBtn.classList.add("back-to-top-visible");
      backToTopBtn.classList.remove("back-to-top-hidden");
    } else {
      backToTopBtn.classList.remove("back-to-top-visible");
      backToTopBtn.classList.add("back-to-top-hidden");
    }

    // Highlighting Active Section in Navigation
    const sections = ["home", "about", "products", "safety", "faqs", "contact"];
    const scrollPosition = scrollY + 100;

    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          // Highlight Desktop
          document.querySelectorAll("#desktop-nav a[data-section]").forEach(link => {
            if (link.getAttribute("data-section") === section) {
              link.classList.add("bg-teal-50", "text-teal-800", "font-semibold");
              link.classList.remove("text-slate-600");
            } else {
              link.classList.remove("bg-teal-50", "text-teal-800", "font-semibold");
              link.classList.add("text-slate-600");
            }
          });
          // Highlight Mobile
          document.querySelectorAll("#mobile-drawer a[data-section]").forEach(link => {
            if (link.getAttribute("data-section") === section) {
              link.classList.add("bg-teal-50", "text-teal-900");
              link.classList.remove("text-slate-700");
            } else {
              link.classList.remove("bg-teal-50", "text-teal-900");
              link.classList.add("text-slate-700");
            }
          });
        }
      }
    });
  });

  // Action scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Client-side Contact Form Validations
function initFormValidation() {
  const form = document.getElementById("lab-contact-form");
  const successCard = document.getElementById("form-success-card");
  const resetBtn = document.getElementById("form-reset-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameVal = document.getElementById("contact-name").value.trim();
    const emailVal = document.getElementById("contact-email").value.trim();
    const messageVal = document.getElementById("contact-message").value.trim();
    const agreementChecked = document.getElementById("contact-agreement").checked;

    let isValid = true;

    // Reset error visuals
    hideError("name");
    hideError("email");
    hideError("message");
    hideError("agreement");

    // Validate Name
    if (!nameVal) {
      showError("name", "Name is required");
      isValid = false;
    } else if (nameVal.length < 2) {
      showError("name", "Please enter your full name (minimum 2 characters)");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      showError("email", "Institutional email is required");
      isValid = false;
    } else if (!emailRegex.test(emailVal)) {
      showError("email", "Please enter a valid institutional email (e.g. name@oxford.ac.uk)");
      isValid = false;
    }

    // Validate Message
    if (!messageVal) {
      showError("message", "Research parameters / specifications are required");
      isValid = false;
    } else if (messageVal.length < 15) {
      showError("message", "Please describe your research scope in more detail (minimum 15 characters)");
      isValid = false;
    }

    // Validate Agreement
    if (!agreementChecked) {
      showError("agreement", "You must confirm the strict laboratory research status");
      isValid = false;
    }

    if (isValid) {
      // Simulate submission loading
      const submitBtn = document.getElementById("contact-submit-btn");
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="inline-block w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>`;

      setTimeout(() => {
        form.classList.add("hidden");
        successCard.classList.remove("hidden");
        // Reset original button values
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Submit Secure Inquiry <i data-lucide="send" class="w-4 h-4"></i>`;
        lucide.createIcons();
      }, 1000);
    }
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    form.classList.remove("hidden");
    successCard.classList.add("hidden");
  });
}

function showError(fieldId, errorMsg) {
  const inputElement = document.getElementById(`contact-${fieldId}`);
  const errorElement = document.getElementById(`error-${fieldId}`);
  
  if (inputElement && fieldId !== "agreement") {
    inputElement.classList.add("border-red-400", "focus:border-red-400");
  }
  
  if (errorElement) {
    errorElement.querySelector(".error-msg-span").textContent = errorMsg;
    errorElement.classList.remove("hidden");
    errorElement.classList.add("flex");
  }
}

function hideError(fieldId) {
  const inputElement = document.getElementById(`contact-${fieldId}`);
  const errorElement = document.getElementById(`error-${fieldId}`);
  
  if (inputElement && fieldId !== "agreement") {
    inputElement.classList.remove("border-red-400", "focus:border-red-400");
  }
  
  if (errorElement) {
    errorElement.classList.add("hidden");
    errorElement.classList.remove("flex");
  }
}

// -------------------------------------------------------------------
// MODALS LOGIC
// -------------------------------------------------------------------

// 1. Details Modal Trigger Open
window.openDetailsModal = function(productId) {
  const product = PEPTIDES_DATA.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;

  // Populate Modal Fields
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-purity").textContent = product.purity;
  document.getElementById("modal-product-size").textContent = product.size;
  document.getElementById("modal-product-cas").textContent = product.casNumber || "N/A";
  document.getElementById("modal-product-formulation").textContent = product.formulation;
  document.getElementById("modal-product-description").textContent = product.longDescription;
  document.getElementById("modal-product-focus").textContent = `🔍 ${product.researchFocus}`;
  document.getElementById("modal-product-price").textContent = product.price.toFixed(2);

  // Set action on button inside details modal
  document.getElementById("modal-enquire-btn").onclick = () => {
    closeDetailsModal();
    openEnquiryModal(product.id);
  };

  // Show details modal
  document.getElementById("product-details-modal").classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden"); // freeze scroll
  lucide.createIcons();
};

function closeDetailsModal() {
  document.getElementById("product-details-modal").classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
}

document.getElementById("close-details-modal-btn").addEventListener("click", closeDetailsModal);

// 2. Enquiry Modal Trigger Open
window.openEnquiryModal = function(productId) {
  const product = PEPTIDES_DATA.find(p => p.id === productId);
  if (!product) return;

  // Populate Enquiry Fields
  document.getElementById("enquiry-modal-title").textContent = product.name;
  document.getElementById("enquiry-modal-purity").textContent = product.purity;
  document.getElementById("enquiry-modal-size").textContent = product.size;
  document.getElementById("enquiry-modal-price").textContent = product.price.toFixed(2);

  // Show Modal
  document.getElementById("enquiry-guide-modal").classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden");
  lucide.createIcons();
};

function closeEnquiryModal() {
  document.getElementById("enquiry-guide-modal").classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
}

document.getElementById("close-enquiry-modal-btn").addEventListener("click", closeEnquiryModal);

// Handle Enquiry Modal Form Submission
document.getElementById("enquiry-modal-form").addEventListener("submit", (e) => {
  e.preventDefault();
  closeEnquiryModal();
  
  alert("Thank you. Your specifications have been recorded. Please submit the main contact form to complete procurement verification and process the request.");
  
  // Scroll to contact form
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    const headerOffset = 80;
    const elementPosition = contactSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
});
