const swiperHouses = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    // effect: 'cards',
    // If we need pagination
    spaceBetween: 30,
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

  const swiperExperiences = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
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