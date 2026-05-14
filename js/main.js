`use strict`;

const slides = document.querySelectorAll(`.slide`);
const prevBtn = document.querySelector(`.prev-btn`);
const nextBtn = document.querySelector(`.next-btn`);

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove(`active`);
  });
  slides[index].classList.add(`active`);
}

nextBtn.addEventListener("click", function () {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slide.length - 1;
  }

  showSlide(currentSlide);
});
