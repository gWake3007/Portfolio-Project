//* ==========================Modal-Window_(START)=====================================
const modal = document.querySelector('#modalWindow');
const btn = document.querySelector('#burgerBtn');
const span = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const body = document.body;

btn.onclick = function () {
  modal.style.display = 'block';
  modal.style.transform = 'translateX(0%)';
  body.classList.add('mobMenuOpen');
};

span.onclick = function () {
  // modal.style.display = 'none';
  modal.style.transform = 'translateX(100%)';
  body.classList.remove('mobMenuOpen');
};

document.onclick = function (e) {
  if (e.target === modal) {
    // modal.style.display = 'none';
    modal.style.transform = 'translateX(100%)';

    body.classList.remove('mobMenuOpen');
    modal.style.display = 'none';
  }
};

document.addEventListener('keydown', clickEscapeModal);

function clickEscapeModal(e) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    // modal.style.display = 'none';
    modal.style.transform = 'translateX(100%)';

    modal.style.display = 'none';
    body.classList.remove('mobMenuOpen');
  }
}

modalContent.addEventListener('click', exitModal);

function exitModal(e) {
  if (e.currentTarget) {
    // modal.style.display = 'none';
    modal.style.transform = 'translateX(100%)';
    body.classList.remove('mobMenuOpen');
  }
}
//* ==========================Modal-Window_(END)=====================================

//* ==========================Mobile-Menu_(START)=====================================
const menu = document.querySelector('.menu');
const listItems = document.querySelectorAll('.menu-list');
const menuList = document.querySelector('.hidden-menu');

menu.addEventListener('mouseenter', function () {
  menuList.classList.add('visible-menu');
});

menu.addEventListener('mouseleave', function (event) {
  if (
    !menu.contains(event.relatedTarget) &&
    !menuList.contains(event.relatedTarget)
  ) {
    menuList.classList.remove('visible-menu');
  }
});

menuList.addEventListener('mouseleave', function (event) {
  if (
    !menu.contains(event.relatedTarget) &&
    !menuList.contains(event.relatedTarget)
  ) {
    menuList.classList.remove('visible-menu');
  }
});

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

//* ========================== Scrolling_(START)=====================================
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    body.classList.remove('mobMenuOpen');
  });
});
//* ========================== Scrolling_(END)=====================================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});
