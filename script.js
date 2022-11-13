let offset = 0;
const sliderLine1 = document.querySelector(".slider-line-first");
const sliderLine2 = document.querySelector(".slider-line-second");

document.querySelector(".button-next-first").addEventListener("click", function() {
  offset += 636;
  if (offset >= 1908) {
    offset = 0;
  }
  sliderLine1.style.left = -offset + 'px';
});

document.querySelector(".button-prev-first").addEventListener("click", function() {
  offset -= 636;
  if (offset < 0) {
    offset = 1272;
  }
  sliderLine1.style.left = -offset + 'px';
});

document.querySelector(".button-next-second").addEventListener("click", function() {
  offset += 636;
  if (offset >= 1908) {
    offset = 0;
  }
  sliderLine2.style.left = -offset + 'px';
});

document.querySelector(".button-prev-second").addEventListener("click", function() {
  offset -= 636;
  if (offset < 0) {
    offset = 1272;
  }
  sliderLine2.style.left = -offset + 'px';
});
