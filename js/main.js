const swiper = new Swiper('.swiper', {
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


  var swiper2 = new Swiper("#sliderbox", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
      1200: {
      slidesPerView: 5,
    },
     768: {
      slidesPerView: 2.5,
    },
    500: {
      slidesPerView: 1.5,
    },
   
  }
});

var swiper3 = new Swiper("#sliderbox2", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
       1200: {
      slidesPerView: 5,
    },
     768: {
      slidesPerView: 2.5,
    },
    500: {
      slidesPerView: 1.5,
    },
   
  }
});

// 1-qator (o‘ngga yuradi)
var swiper4 = new Swiper("#logosrow1", {
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
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const rangeTrack = document.querySelector(".range-track");

function updateRange() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  // minimal farq
  if (minVal > maxVal - 500000) {
    minRange.value = maxVal - 500000;
    minVal = maxVal - 500000;
  }

  // qiymatlarni chiqarish
  minPrice.textContent = minVal.toLocaleString("ru-RU");
  maxPrice.textContent = maxVal.toLocaleString("ru-RU");

  // progress chizig‘ini joylashtirish
  let percent1 = (minVal / minRange.max) * 100;
  let percent2 = (maxVal / maxRange.max) * 100;
  rangeTrack.style.left = percent1 + "%";
  rangeTrack.style.width = (percent2 - percent1) + "%";
}

// eventlar
minRange.addEventListener("input", updateRange);
maxRange.addEventListener("input", updateRange);

// sahifa yuklanganda ishga tushirish
updateRange();