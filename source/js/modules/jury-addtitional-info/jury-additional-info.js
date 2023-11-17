export const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach((item) => {
  item.addEventListener('touchstart', function () {
    // Используем `this` для обращения к текущему элементу
    const additionalInfo = this.querySelector('.slider-additional-info');
    if (additionalInfo.style.display === 'block') {
      additionalInfo.style.display = 'none';
    } else {
      additionalInfo.style.display = 'block';
    }
  });
});
