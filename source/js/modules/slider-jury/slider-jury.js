import Swiper from '../../vendor/swiper';

export const jurySwiper = new Swiper('.slider', {
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
  loop: true,
  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      initialSlide: 2,
      slidesPerView: 2,
      spaceBetween: 32,
    },

    320: {
      initialSlide: 2,
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
