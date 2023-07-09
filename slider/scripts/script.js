const upBtn = document.querySelector('.controls__button_type_up');
const downBtn = document.querySelector('.controls__button_type_down');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const slidesCount = slider.querySelectorAll('.slider__slide').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  slider.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}