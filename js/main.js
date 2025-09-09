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


  var swiper2= new Swiper("#sliderbox", {
    slidesPerView: 5,  // bir qatorda nechta mahsulot ko‘rinadi
    spaceBetween: 20,  // mahsulotlar orasidagi masofa
    loop: true,        // cheksiz aylansin
     // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  var swiper3 = new Swiper("#sliderbox2", {
    slidesPerView: 5,  // bir qatorda nechta mahsulot ko‘rinadi
    spaceBetween: 20,  // mahsulotlar orasidagi masofa
    loop: true,        // cheksiz aylansin
     // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },
  });
   