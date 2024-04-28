//* ==========================Modal-Window_(START)=====================================
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

modalContent.addEventListener('click', exitModal);

function exitModal(e) {
  if (e.currentTarget) {
    modal.style.display = 'none';
  }
}
//* ==========================Modal-Window_(END)=====================================

//* ==========================Mobile-Menu_(START)=====================================
const menu = document.querySelector('.menu');
const listItems = document.querySelectorAll('.menu-list');
const menuList = document.querySelector('.hidden-menu');

menu.addEventListener('click', openClose);

function openClose(e) {
  if (menuList.classList.contains('hidden-menu')) {
    menuList.classList.remove('hidden-menu');
    menuList.classList.add('visible-menu');
  } else {
    menuList.classList.remove('visible-menu');
    menuList.classList.add('hidden-menu');
  }
  e.stopPropagation();
}

listItems.forEach(item => {
  item.addEventListener('click', eventOnEachElement);
});
function eventOnEachElement(e) {
  menuList.classList.remove('visible-menu');
  menuList.classList.add('hidden-menu');

  e.stopPropagation();
}

document.addEventListener('click', eventOnTheWholeElement);

function eventOnTheWholeElement() {
  menuList.classList.remove('visible-menu');
  menuList.classList.add('hidden-menu');
}
//* ==========================Mobile-Menu_(END)=====================================
