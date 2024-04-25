// import axios from 'axios';
// const axios = require('axios').default;

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 
const list = document.querySelector(".list");
console.log(list);

async function fetchData() {
  return await fetch("https://portfolio-js.b.goit.study/api/reviews").then(
    (resp) => resp.json()
  );
}

fetchData().then((resp) => {
  list.insertAdjacentHTML("beforeend", createMarkup(resp));
});

function createMarkup(resp) {
  return resp
    .map(({ _id, author, avatar_url, review }) => 
      `<li id="${_id}">
        <img src="${avatar_url}" alt="${author}">
        <h2>${author}</h2>
        <p>${review}</p>
    </li>`
    )
    .join("");
}

fetchData().then((resp) => console.log(resp));