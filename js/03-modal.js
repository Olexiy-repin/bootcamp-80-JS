const refs = {
  modalOpenBtn: document.querySelector('.js-modal-open'),
  backdrop: document.querySelector('.js-backdrop'),
  closeModalBtn: document.querySelector('.js-modal-close'),
};

const closeModal = () => {
  refs.backdrop.classList.remove('is-open');

  refs.closeModalBtn.removeEventListener('click', onCloseModalBtnClick);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscKeyPress);
};

const onCloseModalBtnClick = event => {
  closeModal();
};

const onBackdropClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const onEscKeyPress = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onModalOpenBtnClick = event => {
  refs.backdrop.classList.add('is-open');

  refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
  refs.backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeyPress);
};

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);
