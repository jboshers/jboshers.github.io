const modalTrigger = document.querySelector('.js-info');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
var modalState = false;

modalTrigger.addEventListener('click', e => toggleModal() );
modalClose.addEventListener('click', e => toggleModal() );

function swapState() {
  return modalState = !modalState;
}

function toggleModal() {
  swapState();
  if (modalState) {
    modal.classList.add('show');
  } else {
    modal.classList.remove('show');
  }
}
