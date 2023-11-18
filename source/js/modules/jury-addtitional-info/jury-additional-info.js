export const sliderItems = document.querySelectorAll('.slider__item');

sliderItems.forEach((item) => {
  item.addEventListener('touchstart', () => {
    const additionalInfo = item.querySelector('.slider-additional-info');
    const textElement = item.querySelector('.slider__text');
    if (getComputedStyle(additionalInfo).display === 'block') {
      additionalInfo.style.display = 'none';
      textElement.style.display = 'block';
    } else {
      additionalInfo.style.display = 'block';
      textElement.style.display = 'none';
    }
  });
});
