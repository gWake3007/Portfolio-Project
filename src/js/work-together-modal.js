import axios from 'axios';
// const axios = require('axios').default;

// import * as basicLightbox from 'basiclightbox';


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

const form = document.getElementById("form");

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function postRequests () {
  return await axios.post('/requests');
}

async function getRequests () {
  return await axios.get('/requests');
}

getRequests().then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});;

form.addEventListener("submit", submitForm);

function submitForm (event) {
  event.preventDefault();
  const form = event.target;
  const {userEmail, userComments} = form.nextElementSibling.value;
  console.log(userEmail, userComments);
}