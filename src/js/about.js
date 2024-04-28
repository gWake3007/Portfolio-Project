import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

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
