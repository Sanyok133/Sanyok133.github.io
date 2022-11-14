let offset = 0;
const sliderLine1 = document.querySelector(".slider-line-first");
const sliderLine2 = document.querySelector(".slider-line-second");

// Слайдер
document.querySelector(".button-next-first").addEventListener("click", function () {
  offset += 636;
  if (offset >= 1908) {
    offset = 0;
  }
  sliderLine1.style.left = -offset + 'px';
});

document.querySelector(".button-prev-first").addEventListener("click", function () {
  offset -= 636;
  if (offset < 0) {
    offset = 1272;
  }
  sliderLine1.style.left = -offset + 'px';
});

document.querySelector(".button-next-second").addEventListener("click", function () {
  offset += 636;
  if (offset >= 1908) {
    offset = 0;
  }
  sliderLine2.style.left = -offset + 'px';
});

document.querySelector(".button-prev-second").addEventListener("click", function () {
  offset -= 636;
  if (offset < 0) {
    offset = 1272;
  }
  sliderLine2.style.left = -offset + 'px';
});

// слайдер-галерея
let offset1 = 0;

const galleryButtonPrev = document.querySelector('.button-prev-gallery');
const galleryButtonNext = document.querySelector('.button-next-gallery');
const gallerySliderLine = document.querySelector('.gallery-slider-line');

galleryButtonNext.addEventListener('click', function () {
  offset1 += 440;
  if (offset1 >= 440 * 5) {
    offset1 = 0;
  }
  gallerySliderLine.style.left = -offset1 + 'px';
});

galleryButtonPrev.addEventListener('click', function () {
  offset1 -= 440;
  if (offset1 < 0) {
    offset1 = 440 * 4;
  }
  gallerySliderLine.style.left = -offset1 + 'px';
});


// Услуги
const servicesButtonCurrent = document.querySelector('.services-button-current');
const servicesButton = document.querySelector('.services-button');
const servicesList1 = document.querySelector('.services-list');
const servicesList2 = document.querySelector('.services-list-1');

servicesButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  servicesButton.classList.add('services-button-current');
  servicesButtonCurrent.classList.remove('services-button-current');

  servicesList1.classList.add('opacity');
  servicesList2.classList.remove('opacity');

});

servicesButtonCurrent.addEventListener('click', function (evt) {
  evt.preventDefault();

  servicesButton.classList.remove('services-button-current');
  servicesButtonCurrent.classList.add('services-button-current');

  servicesList1.classList.remove('opacity');
  servicesList2.classList.add('opacity');

});
