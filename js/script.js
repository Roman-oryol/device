const buttonDelivery = document.querySelector('.button-delivery');
const modal = document.querySelector('.modal-wrap');
const modalCloseButton = modal.querySelector('.modal-close');
const sliderItems = document.querySelectorAll('.slider-item');
const slideSwitches = document.querySelectorAll('.slider-switch');
const sliderControl = document.querySelector('.slider-controls-list');
const previousSlideButton = document.querySelector('.slider-button-prev');
const nextSlideButton = document.querySelector('.slider-button-next')
const sliderButton = document.querySelector('.slider-button');

buttonDelivery.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    modal.classList.add('hidden');
  }
});

const createSliderSwitchHendler = (slideSwitch, slideItem) => {
  slideSwitch.addEventListener('click', (evt) => {
    sliderItems.forEach((sliderItem) => {
      if(!sliderItem.classList.contains('hidden')) {
        sliderItem.classList.add('hidden');
      }
    });
    slideItem.classList.remove('hidden');
    slideSwitches.forEach((slideSwitch) => {
      if (slideSwitch.classList.contains('slider-switch-active')) {
        slideSwitch.classList.remove('slider-switch-active')
      }
    });
    slideSwitch.classList.add('slider-switch-active');
  });
};

for (let i = 0; i < sliderItems.length; i++) {
  createSliderSwitchHendler(slideSwitches[i], sliderItems[i])
}

// let indexCurrentSlide = 0;
// let currentSlide = sliderItems[indexCurrentSlide];

// nextSlideButton.addEventListener('click', () => {
//   indexCurrentSlide++;
//   if (indexCurrentSlide < sliderItems.length) {
//     currentSlide.classList.add('hidden');
//     currentSlide = sliderItems[indexCurrentSlide];
//     currentSlide.classList.remove('hidden');
//   }
// });
