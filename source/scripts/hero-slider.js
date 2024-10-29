const slides = document.querySelectorAll('.hero-section__slide');
const pagination = document.querySelector('.slider-pagination');
const btnNext = document.querySelector('.slider__button--next');
const btnPrev = document.querySelector('.slider__button--prev');

let currentSlideIndex = 0;
const paginationBtn = [];

function createPaginationBtn() {
  const btn = document.createElement('div');
  btn.className = 'slider-pagination__button';
  pagination.appendChild(btn);
  paginationBtn.push(btn);
}

function addPaginationBtn() {
  slides.forEach(createPaginationBtn);
  paginationBtn[0].classList.add('slider-pagination__button--current');
  paginationBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => changeSlide(index));
  });
}

function addActiveClass() {
  paginationBtn[currentSlideIndex].classList.add('slider-pagination__button--current');
}

function removeActiveClass() {
  paginationBtn[currentSlideIndex].classList.remove('slider-pagination__button--current');
}

function showSlide() {
  slides[currentSlideIndex].classList.add('hero-section__slide--active');
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('hero-section__slide--active');
}

function nextSlide() {
  let newSlideIndex = currentSlideIndex + 1;
  if (newSlideIndex > slides.length - 1) {
    newSlideIndex = 0;
  }
  changeSlide(newSlideIndex);
}

function prevSlide() {
  let newSlideIndex = currentSlideIndex - 1;
  if (newSlideIndex < 0) {
    newSlideIndex = slides.length - 1;
  }
  changeSlide(newSlideIndex);
}

function changeSlide (newIndex) {
  hideSlide();
  removeActiveClass();
  currentSlideIndex = newIndex;
  addActiveClass();
  showSlide();
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
addPaginationBtn();
