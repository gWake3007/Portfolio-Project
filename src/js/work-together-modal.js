import axios from 'axios';
const axios = require('axios').default;

import * as basicLightbox from 'basiclightbox'

document.getElementsByClassName("footer-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const emailInput = document.getElementsByName("userEmail");
    const messageInput = document.getElementsByName("userComments");

    if (!this.checkValidity()) {
        // Вивести повідомлення про помилку
        alert("Please fill out all required fields correctly!");
        return;
    }

    const formData = new FormData(this);

    try {
      const response = await axios.post("https://portfolio-js.b.goit.study/api/requests", formData);

    if (response.ok) {
      // Показати модальне вікно з повідомленням про успішну відправку
      const successModal = basicLightbox.create("<h1>Success!</h1>");
      successModal.show();
      
      // Очистити форму
      this.reset();
    } else {
      
      const errorData = await response.json();
      
      alert("Error: " + errorData.message);
    }
  } catch (error) {
    console.error("Error:", error);
    
    // Показати вспливаюче повідомлення про помилку
    alert("An error occurred. Please try again later.");
  }
})