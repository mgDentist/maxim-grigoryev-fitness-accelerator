export const videoStarter = () => {
  document.querySelector('.gym__img-video-poster').addEventListener('click', (evt) => {
    evt.target.style.display = 'none';
    const myIframe = document.querySelector('.gym__video');
    const src = myIframe.src;
    myIframe.src = src.includes('?') ? src + '&autoplay=1' : src + '?autoplay=1';
    const buttonPlay = document.querySelector('.gym__svg-button');
    if (buttonPlay) {
      buttonPlay.style.display = 'none';
    }
  });
};
