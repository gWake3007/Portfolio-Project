import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


const reviewsList = document.querySelector('.reviews-list');
const btnNext = document.querySelector('.reviews-next-btn');
const btnPrev = document.querySelector('.reviews-prev-btn');

const swiper = new Swiper('.reviews-slider', {
  modules: [Navigation, Keyboard, Mousewheel],
  speed: 1000,

  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

function updateButtons(swiper, btnPrev, btnNext) {

  if (swiper.isBeginning) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }

  if (swiper.isEnd) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
  }
}

btnPrev.addEventListener('click', () => {
  updateButtons(swiper, btnPrev, btnNext);
});


btnNext.addEventListener('click', () => {
  updateButtons(swiper, btnPrev, btnNext);
});


updateButtons(swiper, btnPrev, btnNext);

fetchReviews()

async function fetchReviews() {
 await axios.get('/review')
  .then((response) => {
    reviewsList.insertAdjacentHTML('beforeend', markupReviews(response.data));
    swiper.update();
    document.querySelectorAll('.reviews-text').forEach(el => { typeWriter(el, 30); });
   })
   .catch((error) => {
     iziToast.error({
       message: `We're sorry, but something went wrong: Reviews not found`,
       position: "topRight",
     });
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Error: Reviews not found';
    errorMessage.style.color = 'red';
    reviewsList.innerHTML = '';
    reviewsList.appendChild(errorMessage);
  });
}


function markupReviews(arr) {
  return arr
    .map(({ author, avatar_url, review }) =>
      `<div class="swiper-slide">
        <li class="reviews-card">
          <img class="reviews-img" src="${avatar_url}" alt="${author}">
            <h4 class="reviews-name">${author}</h4>
            <p class="typewriter reviews-text">${review}</p>
        </li>
      </div >`
    )
    .join("");
}


function typeWriter(element, speed) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
  if (element.dataset.typingStarted) return;
  element.dataset.typingStarted = 'true';

  const text = element.innerHTML;
  let i = 0;
  element.innerHTML = '';

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
}