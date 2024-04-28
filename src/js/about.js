import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Accordion('.accordion-container-second', {
    duration: 500,
    showMultiple: true,
})

document.addEventListener('DOMContentLoaded', function() {
    const firstAccordionItem = document.getElementById('ac-0');
    const firstAccordionContent = document.querySelector('.accordion-content.ac-panel');

    firstAccordionItem.classList.add('is-active');
    firstAccordionContent.style.height = 'auto';
});

// Swiper features

const swiper = new Swiper('.skills-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 'auto',
  loop: true,
  speed: 700,
  grabCursor: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.skills-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  mousewheel: {
    invert: false,
  },
  on: {
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    },
    slideChange: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    },
  },
});

const nextButton = document.querySelector('.skills-button-next');
nextButton.addEventListener('click', function () {
  const visibleSlides = swiper.slides.filter(slide => slide.isVisible);
  const isEnd = swiper.isEnd && visibleSlides.length === swiper.slides.length;

  if (isEnd || visibleSlides.length === swiper.slides.lengthVisible) {
    swiper.slideTo(0);
  } else {
    swiper.slideNext();
  }
});