// feature slider
var swiper = new Swiper(".featured-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },



  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1200: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 2,
    },

    767: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },



});



var swiper = new Swiper(".testimonail-swiper-slider", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  // mousewheel: {
  //   thresholdDelta: 70
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1920: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".blog-listing-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },



  breakpoints: {
    1920: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 2,
    },

    767: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },



});

