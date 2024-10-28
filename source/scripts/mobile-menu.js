const headerNav = document.querySelector('.header-nav');
const headerToggle = document.querySelector('.header-nav__toggle');
headerNav.classList.remove('header-nav--nojs');

export const setupMobileToogele = () => {

  headerToggle.addEventListener('click', () => {

    if (headerNav.classList.contains('header-nav--closed')) {
      headerNav.classList.remove('header-nav--closed');
      headerNav.classList.add('header-nav--opened');
    } else {
      headerNav.classList.add('header-nav--closed');
      headerNav.classList.remove('header-nav--opened');
    }
  });
};
