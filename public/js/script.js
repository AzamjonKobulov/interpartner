// Mobile Menu
const mobileMenuBtns = document.querySelectorAll("#mobileMenuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("translate-x-full");
  document.body.classList.toggle("overflow-hidden");
};

mobileMenuBtns.forEach((btn) => {
  btn.addEventListener("click", toggleMobileMenu);
});

document.querySelectorAll("#mobileMenu ul a").forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});

document.querySelectorAll("#mobileMenu ul button").forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});

// Active Link Function
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let fromTop = window.scrollY + 100;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.getAttribute("href"));

      if (section) {
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("text-brand-dark");
        } else {
          link.classList.remove("text-brand-dark");
        }
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add(
      "-translate-y-6",
      "lg:-translate-y-8",
      "3xl:-translate-y-9"
    );
  } else {
    header.classList.remove(
      "-translate-y-6",
      "lg:-translate-y-8",
      "3xl:-translate-y-9"
    );
  }
});

// Tab 1
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active classes from all tabs and contents
      tabs.forEach((t) => t.classList.remove("bg-brand-dark", "text-white"));
      contents.forEach((c) => c.classList.add("hidden"));

      // Add active classes to the clicked tab and corresponding content
      tab.classList.add("bg-brand-dark", "text-white");
      contents[index].classList.remove("hidden");
    });
  });
});

// Tab 2
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-2-button");
  const contents = document.querySelectorAll(".tab-2-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active classes from all tabs and contents
      tabs.forEach((t) => t.classList.remove("bg-brand-dark", "text-white"));
      contents.forEach((c) => c.classList.add("hidden"));

      // Add active classes to the clicked tab and corresponding content
      tab.classList.add("bg-brand-dark", "text-white");
      contents[index].classList.remove("hidden");
    });
  });
});

// Tab 3
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-3-button");
  const contents = document.querySelectorAll(".tab-3-content");
  const svgs = document.querySelectorAll(".tab-3-svg");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Remove active classes from all tabs and svgs
      tabs.forEach((t) => t.classList.remove("text-brand-dark"));
      svgs.forEach((s) => s.classList.remove("fill-brand-dark"));
      contents.forEach((c) => c.classList.add("hidden"));

      // Add active classes to the clicked tab and corresponding svg
      tab.classList.add("text-brand-dark");
      tab.querySelector("svg").classList.add("fill-brand-dark");
      contents[index].classList.remove("hidden");

      // Reinitialize AOS
      AOS.refresh();
    });
  });
});

// Active Link Function
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav .nav-link");
  const mobileNavLinks = document.querySelectorAll("#mobileMenu .nav-link");

  function setActiveLink() {
    let fromTop = window.scrollY + 100;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.getAttribute("href"));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("text-brand-dark");
      } else {
        link.classList.remove("text-brand-dark");
      }
    });

    mobileNavLinks.forEach((link) => {
      let section = document.querySelector(link.getAttribute("href"));

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("text-brand-dark");
      } else {
        link.classList.remove("text-brand-dark");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});

// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const openItem = document.querySelector(".accordion-item.open");
      if (openItem && openItem !== header.parentElement) {
        toggleAccordion(openItem);
      }
      toggleAccordion(header.parentElement);
    });
  });

  function toggleAccordion(item) {
    const body = item.querySelector(".accordion-body");
    const arrow = item.querySelector(".accordion-arrow");
    if (item.classList.contains("open")) {
      body.style.maxHeight = 0;
      arrow.style.transform = "rotate(0deg)";
      item.classList.remove("open");
      body.classList.add("overflow-hidden");
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
      item.classList.add("open");
      body.classList.remove("overflow-hidden");
    }
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".accordion-item")) {
      const openItem = document.querySelector(".accordion-item.open");
      if (openItem) {
        toggleAccordion(openItem);
      }
    }
  });
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-button");
  const productInfos = document.querySelectorAll(".product-info");
  const backButtons = document.querySelectorAll(".back-button");
  const buttonsContainer = document.querySelector(".buttons-container"); // Adjust the selector as needed

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Hide all product info sections
      productInfos.forEach((info) => {
        info.classList.add("hidden");
        info.classList.remove("flex", "lg:grid");
      });

      // Show the selected product info section
      buttonsContainer.classList.add("hidden"); // Hide the buttons container
      productInfos[index].classList.remove("hidden");
      fixedBody();
    });
  });

  backButtons.forEach((backButton) => {
    backButton.addEventListener("click", () => {
      buttonsContainer.classList.remove("hidden"); // Show the buttons container
      productInfos.forEach((info) => {
        info.classList.add("hidden");
        unFixedBody();
      });
    });
  });
});

const calculator = document.querySelector("#calculator");
const calculatorOverlay = document.querySelector("#calculator-overlay");
const openCalcBtns = document.querySelectorAll(".open-calc");
const closeCalcBtns = document.querySelectorAll(".close-calc");
const form = document.querySelector("#form");
const formOverlay = document.querySelector("#form-overlay");
const openFormBtns = document.querySelectorAll(".open-form");
const closeForm = document.querySelectorAll(".close-form");

function fixedBody() {
  document.body.classList.add("overflow-hidden");
}

function unFixedBody() {
  document.body.classList.remove("overflow-hidden");
}

openCalcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculatorOverlay.classList.remove("translate-y-full");
    calculator.classList.remove("-translate-y-full");
    fixedBody();
  });
});

closeCalcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculatorOverlay.classList.add("translate-y-full");
    calculator.classList.add("-translate-y-full");
    unFixedBody();
  });
});

openFormBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    form.classList.remove("translate-x-full");
    formOverlay.classList.remove("hidden", "opacity-0");
    formOverlay.classList.add("opacity-100");
    fixedBody();
  });
});

closeForm.forEach((btn) => {
  btn.addEventListener("click", () => {
    form.classList.add("translate-x-full");
    formOverlay.classList.add("hidden");
    unFixedBody();
  });
});

const openSocials = document.querySelector(".open-socials");
const telegram = document.querySelector(".telegram");
const whatsapp = document.querySelector(".whatsapp");

openSocials.addEventListener("click", () => {
  telegram.classList.toggle("visible-socials");
  setTimeout(() => whatsapp.classList.toggle("visible-socials"), 200);
});

// Hero Slides
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const tabButtons = document.querySelectorAll(".tab-button-hero");
  const paginationFractionMobile = document.querySelector(
    ".pagination-fraction-mobile span.text-brand-dark"
  );
  const paginationFractionDesktop = document.querySelector(
    ".pagination-fraction-desktop span.text-brand-dark"
  );

  let currentSlideIndex = 0;

  const updateSlide = (index) => {
    const currentSlide = slides[currentSlideIndex];
    const nextSlide = slides[index];

    // Update current slide classes
    currentSlide.classList.remove("active");
    tabButtons[currentSlideIndex].classList.remove(
      "bg-brand-dark",
      "text-white"
    );
    tabButtons[currentSlideIndex]
      .querySelector("svg")
      .classList.remove("fill-white");
    tabButtons[currentSlideIndex]
      .querySelector("svg")
      .classList.add("fill-brand-gray-500");

    currentSlideIndex = index;

    // Update next slide classes
    nextSlide.classList.add("active");
    tabButtons[currentSlideIndex].classList.remove("text-brand-gray-500");
    tabButtons[currentSlideIndex].classList.add("bg-brand-dark", "text-white");
    tabButtons[currentSlideIndex]
      .querySelector("svg")
      .classList.remove("fill-brand-gray-500");
    tabButtons[currentSlideIndex]
      .querySelector("svg")
      .classList.add("fill-white");

    paginationFractionMobile.textContent = currentSlideIndex + 1;
    paginationFractionDesktop.textContent = currentSlideIndex + 1;
  };

  const autoSlide = () => {
    let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide(nextSlideIndex);
  };

  // Auto slide every 5 seconds
  setInterval(autoSlide, 5000);

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      updateSlide(index);
    });
  });

  // Initialize the first slide
  updateSlide(0);
});
