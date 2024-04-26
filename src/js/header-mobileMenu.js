//* ===============Modal-Window_(START)=====================================
const modal = document.querySelector('#modalWindow');
const btn = document.querySelector('#burgerBtn');
const span = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

document.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('keydown', clickEscapeModal);

function clickEscapeModal(e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    modal.style.display = 'none';
  }
}
//* ==========================Modal-Window_(END)=====================================
