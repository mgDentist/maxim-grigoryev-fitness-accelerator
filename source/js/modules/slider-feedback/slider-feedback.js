import Swiper from '../../vendor/swiper';

export const feedbackSwiper = new Swiper('.feedback__slider-wrapper', {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.feedback__button--next',
    prevEl: '.feedback__button--prev',
  },
});
