const buttonDelivery = document.querySelector('.button-delivery');
const modal = document.querySelector('.modal-wrap');
const modalCloseButton = modal.querySelector('.modal-close');
const sliderItems = document.querySelectorAll('.slider-item');
const slideSwitches = document.querySelectorAll('.slider-switch');

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
  slideSwitch.addEventListener('click', () => {
    slideItem.classList.remove('hidden');
  });
};

for (let i = 0; i < sliderItems.length; i++) {
  createSliderSwitchHendler(slideSwitches[i], sliderItems[i])
}
