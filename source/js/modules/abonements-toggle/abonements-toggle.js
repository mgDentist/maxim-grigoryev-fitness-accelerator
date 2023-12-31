const takeNumberfromString = (text) => {
  const result = text.match(/\d+/);
  return result ? result[0] : null;
};

export const abonementsToggle = () => {
  document.querySelectorAll('.months__button').forEach((button) => {
    button.addEventListener('click', (evt) => {
      document.querySelectorAll('.months__item').forEach((item) => {
        item.classList.remove('months__item--active');
      });
      const parentItem = button.closest('.months__item');
      if (parentItem) {
        parentItem.classList.add('months__item--active');
      }
      const amount = takeNumberfromString(evt.target.textContent);
      document.querySelectorAll('[data-month]').forEach((span) => {
        if (span.dataset.month === amount) {
          span.classList.add('is-active');
          span.classList.remove('is-inactive');
        } else {
          span.classList.add('is-inactive');
          span.classList.remove('is-active');
        }
      });
    });
  });
};
