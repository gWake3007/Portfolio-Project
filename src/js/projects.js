import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




document.addEventListener('DOMContentLoaded', function () {
  const projSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  const buttonProjPrev = document.querySelector('.proj-left-button');
  const buttonProjNext = document.querySelector('.proj-right-button');

 
  function updateButtons(projSwiper, buttonProjPrev, buttonProjNext) {
    
    if (projSwiper.isBeginning) {
      buttonProjPrev.disabled = true; 
    } else {
      buttonProjPrev.disabled = false; 
    }

    
    if (projSwiper.isEnd) {
      buttonProjNext.disabled = true; 
    } else {
      buttonProjNext.disabled = false; 
    }
  }

  
  buttonProjPrev.addEventListener('click', () => {
    projSwiper.slidePrev();
    updateButtons(projSwiper, buttonProjPrev, buttonProjNext); 
  });

  
  buttonProjNext.addEventListener('click', () => {
    projSwiper.slideNext();
    updateButtons(projSwiper, buttonProjPrev, buttonProjNext); 
  });

  
  updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
});

















document.addEventListener('DOMContentLoaded', function () {

  const projSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  const buttonProjPrev = document.querySelector('.proj-left-button');
  
  buttonProjPrev.addEventListener('click', () => {
    projSwiper.slidePrev(); 
  });

 const buttonProjNext = document.querySelector('.proj-right-button');

  buttonProjNext.addEventListener('click', () => {
    projSwiper.slideNext(); 
  });
});








