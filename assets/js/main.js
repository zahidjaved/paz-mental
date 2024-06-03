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

// related product swiper js
var swiper = new Swiper(".related-product", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    667: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

// thumbs gallery slider
var swiper = new Swiper(".thumbs-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// jquery product quantity
$(document).ready(function () {
  $(".increment").click(function () {
    var $quantity = $(this).siblings(".quantity");
    var currentVal = parseInt($quantity.val());
    if (!isNaN(currentVal)) {
      $quantity.val(currentVal + 1);
    }
  });

  $(".decrement").click(function () {
    var $quantity = $(this).siblings(".quantity");
    var currentVal = parseInt($quantity.val());
    if (!isNaN(currentVal) && currentVal > 1) {
      $quantity.val(currentVal - 1);
    }
  });
});
