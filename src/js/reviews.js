import axios from 'axios';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';


const reviewsList = document.querySelector('.reviews-list');

const swiper = new Swiper('.reviews-slider', {
  modules: [Navigation, Pagination],
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


axios.get('/reviews')
  .then((response) => {
    reviewsList.insertAdjacentHTML('beforeend', markupReviews(response.data));
    swiper.update();
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Error: Reviews not found';
    errorMessage.style.color = 'red';
    reviewsList.innerHTML = '';
    reviewsList.appendChild(errorMessage);
  });



function markupReviews(arr) {
  return arr
    .map(({ author, avatar_url, review }) =>
      `<div class="swiper-slide">
        <li class="reviews-card">
          <img class="reviews-img" src="${avatar_url}" alt="${author}">
            <h4 class="reviews-name">${author}</h4>
            <p class="reviews-text">${review}</p>
        </li>
      </div >`
    )
    .join("");
}