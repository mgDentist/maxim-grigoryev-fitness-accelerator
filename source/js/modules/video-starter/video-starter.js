export const videoStarter = () => {
  const buttonPlay = document.querySelector('.gym__button');

  if (buttonPlay) {
    buttonPlay.addEventListener('click', () => {
      const poster = document.querySelector('.gym__img-video-poster');
      if (poster) {
        poster.style.display = 'none';
      }

      const myIframe = document.querySelector('.gym__video');
      const src = myIframe.src;
      myIframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

      buttonPlay.style.display = 'none';
    });
  }
};
