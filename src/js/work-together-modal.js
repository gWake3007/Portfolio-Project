import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Робота Кіріл

// const axios = require('axios').default;
// document.getElementsById("footer").addEventListener("submit", async function (event) {
//   event.preventDefault();

//   const userEmail = document.querySelector(".footer-input[name='userEmail']").value;
//   const userComments = document.getElementById("user-comments").value;

//   if (!this.checkValidity()) {
//     // Вивести повідомлення про помилку
//     alert("Please fill out all required fields correctly!");
//     return;
//   }
//   try {
//     const response = await axios.post("https://portfolio-js.b.goit.study/api/requests", formData);

//     if (response.status === 200) {
//       // Показати модальне вікно з повідомленням про успішну відправку
//       const successModal = basicLightbox.create("<h1>Success!</h1>");
//       successModal.show();

//       // Очистити форму
//       this.reset();
//     } else {

//       alert("Error: " + response.statusText);
//     }
//   } catch (error) {
//     console.error("Error:", error);

//     // Показати вспливаюче повідомлення про помилку
//     alert("An error occurred. Please try again later.");
//   }
// });

// Робота Кіріл

// body.classList.remove("mobMenuOpen");

const body = document.body;
const form = document.querySelector('.footer-form');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function postRequests(email, comment) {
  return await axios.post('/requests/', { email: email, comment: comment });
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const { userEmail, userComments } = form.elements;
  postRequests(userEmail.value, userComments.value)
    .then(resp => {
      const instance = basicLightbox.create(` 
      <div id="modalW" class="backdrop visually-hidden">
                     <div class="modal-window">
      <button class="modal-button" type="button" aria-label="close-button">
          <svg class="modal-btn-icon" width="22" height="22">
                  <use href="./img/icons/sprites.svg#closeX"></use>
          </svg>
      </button>
      <div class="modal-all-text">
      <h3 class="modal-title">${resp.data.title}</h3>
      <p class="modal-text">${resp.data.message}
      </p>
      </div>
  </div>
  </div>`);
      instance.show();
      const modal = document.getElementById('modalW');
      const modal1 = modal.parentNode;
      body.classList.add('mobMenuOpen');
      body.addEventListener('keydown', escClose);
      function escClose(event) {
        if (event.keyCode === 27) {
          instance.close();
          if (modal1.classList.contains('basicLightbox__placeholder')) {
            body.classList.remove('mobMenuOpen');
            body.removeEventListener('keydown', escClose);
          }
        }
      }
      body.addEventListener('click', event => {
        if (event.target === modal) {
          instance.close();
          if (modal1.classList.contains('basicLightbox__placeholder')) {
            body.classList.remove('mobMenuOpen');
          }
        }
      });
      instance.element().querySelector('.modal-button').onclick = () => {
        instance.close();
        if (modal1.classList.contains('basicLightbox__placeholder')) {
          body.classList.remove('mobMenuOpen');
        }
      };
      userEmail.value = '';
      userComments.value = '';
    })
    .catch(err => {
      iziToast.error({
        message: `Unable to send your data. Please correct them and try again.`,
        position: 'topRight',
      });
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'Error: Reviews not found';
      errorMessage.style.color = 'red';
      errorMessage.style.border = '1px solid #ed3b44';
      errorMessage.style.borderRadius = '15px';
      errorMessage.style.padding = '32px';
      reviewsList.innerHTML = '';
      reviewsList.appendChild(errorMessage);
    });
}
