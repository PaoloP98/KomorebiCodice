let swiperHouses, swiperExperiences = null;

function initSwipers() {
  let swiperSlide = $(".swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  swiperSlide.each((index, slide) => {
    slide.classList.remove("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.remove("row");
  });
  swiperHouses = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    // effect: 'cards',
    // If we need pagination
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination1',
    },
    // paginationClickable: true,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  swiperExperiences = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    // effect: 'cards',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
    },
    // paginationClickable: true,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
function destroySwipers() {
  swiperHouses?.destroy();
  swiperExperiences?.destroy();
  swiperHouses = null;
  swiperExperiences = null;
  let swiperSlide = $(".swiper-slide");
  let swiperWrapper = $(".swiper-wrapper");
  swiperSlide.each((index, slide) => {
    slide.classList.add("col-md-4");
  });
  swiperWrapper.each((index, wrapper) => {
    wrapper.classList.add("row");
  });
  $('.swiper-wrapper').removeAttr('style');
  $('.swiper-slide').removeAttr('style');

}

function adjustPageItems() {
  let width = document.documentElement.clientWidth;
  if (width >= 776) {
    destroySwipers();
  }
  else {
    if (swiperHouses == null || swiperExperiences == null) {
      initSwipers();
    }
  }
}

$(document).ready(() => {
  adjustPageItems();
});



window.addEventListener('resize', () => {
  adjustPageItems
});