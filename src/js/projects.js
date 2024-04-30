import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




document.addEventListener('DOMContentLoaded', function () {
 const projSwiper = new Swiper('.projects-swiper', {
   modules: [Navigation, Keyboard, Mousewheel],
   slidesPerView: 1,
   spaceBetween: 20,
   grabCursor: true,
   allowTouchMove: true,

   keyboard: {
     enabled: true,
     onlyInViewport: true,
   },
   mousewheel: {
     invert: false,
   },
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
    buttonProjPrev.blur(); 
  });

  buttonProjNext.addEventListener('click', () => {
    projSwiper.slideNext();
    updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
    buttonProjNext.blur(); 
  });
   
  updateButtons(projSwiper, buttonProjPrev, buttonProjNext);
});













