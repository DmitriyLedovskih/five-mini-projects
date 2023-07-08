const slides = document.querySelectorAll('.slider__slide');

const clearActiveClasses = () => {
  slides.forEach(slide => {
    const title = slide.querySelector('.slider__slide-title');
    title.classList.remove('slider__slide-title_active');
    slide.classList.remove('slider__slide_active');
  });
}

slides.forEach(slide => {
  const title = slide.querySelector('.slider__slide-title');
  slide.addEventListener('click', () => {
    clearActiveClasses();
    title.classList.add('slider__slide-title_active');
    slide.classList.add('slider__slide_active');
  });
});