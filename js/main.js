const swiper = new Swiper('.slider_swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // 🔹 Avtomatik aylanish
  autoplay: {
    delay: 5000, // 3 soniyada almashadi
    disableOnInteraction: false, // foydalanuvchi bosganda ham davom etadi
  },
});


const swiper2 = new Swiper("#sliderbox", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#sliderbox-next',
    prevEl: '#sliderbox-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: { slidesPerView: 5 },
    768: { slidesPerView: 2.5 },
    500: { slidesPerView: 1.5 },
  }
});

var swiper3 = new Swiper("#sliderbox2", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#sliderbox2-next',
    prevEl: '#sliderbox2-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: { slidesPerView: 5 },
    768: { slidesPerView: 2.5 },
    500: { slidesPerView: 1.5 },
  }
});


// 1-qator (o‘ngga yuradi)
const swiper4 = new Swiper("#logosrow1", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  autoplay: {
    delay: 0,                // uzluksiz harakat
    disableOnInteraction: false,
  },
  speed: 3000,               // tezligi (silliq yurishi uchun)
  breakpoints: {
    1200: { slidesPerView: 5 },
    768: { slidesPerView: 3 },
    500: { slidesPerView: 2 },
  },
  mousewheel: true,          // scroll bilan boshqarish
});

// 2-qator (chapga yuradi)
var swiper5 = new Swiper("#logosrow2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,  // chapga yuradi
  },
  speed: 3000,
  breakpoints: {
    1200: { slidesPerView: 5 },
    768: { slidesPerView: 3 },
    500: { slidesPerView: 2 },
  },
  mousewheel: true,
});
// Accordion toggle
document.querySelectorAll(".acardion-header").forEach(header => {
    header.addEventListener("click", () => {
        let content = header.nextElementSibling;
        content.classList.toggle("active");
        header.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".acardion_header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const item = this.parentElement;

      if (item.classList.contains("open")) {
        // yopish
        content.style.height = content.scrollHeight + "px"; 
        requestAnimationFrame(() => {
          content.style.height = "0";
        });
        item.classList.remove("open");
      } else {
        // ochish
        item.classList.add("open");
        content.style.height = content.scrollHeight + "px";

        // animatsiya tugagach auto qilish (moslashuvchan bo‘lishi uchun)
        content.addEventListener("transitionend", () => {
          if (item.classList.contains("open")) {
            content.style.height = "auto";
          }
        }, { once: true });
      }
    });
  });
});
 const overlay = document.getElementById("overlay");
                    const ytVideo = document.getElementById("ytVideo");

                    overlay.addEventListener("click", () => {
                        overlay.style.display = "none"; // overlay yo‘qoladi
                        ytVideo.style.display = "block"; // iframe ko‘rinadi
                        ytVideo.src = "https://www.youtube.com/embed/DM3WFDZapzw?autoplay=1"; // autoplay bilan yuklanadi
                    });

// Price Range
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const rangeTrack = document.querySelector(".range-track");

function updateRange() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal - 10000) { // minimal farq
        minRange.value = maxVal - 10000;
        minVal = maxVal - 10000;
    }

    minPrice.textContent = minVal.toLocaleString();
    maxPrice.textContent = maxVal.toLocaleString();

    let percent1 = (minVal / minRange.max) * 100;
    let percent2 = (maxVal / maxRange.max) * 100;

    rangeTrack.style.left = percent1 + "%";
    rangeTrack.style.width = (percent2 - percent1) + "%";
}

minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);

updateRange(); // boshlang‘ich yuklashda



// main.js

