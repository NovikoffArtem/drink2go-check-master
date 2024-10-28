const slides = document.querySelectorAll('.hero-section__slide');
// const pagination = document.querySelector('.slider-pagination');
const btnNext = document.querySelector('.slider__button--next');
const btnPrev = document.querySelector('.slider__button--prev');

let currentSlideIndex = 0;

function showSlide() {
  slides[currentSlideIndex].classList.add('active');
}

function hideSlide() {
  slides[currentSlideIndex].classList.remove('active');
}

function nextSlide() {
  hideSlide();
  currentSlideIndex++;
  if (currentSlideIndex > slides.length - 1) {
    currentSlideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  hideSlide();
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide();
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
