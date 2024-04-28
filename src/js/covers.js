// Отримання секції "Covers"
const coversSection = document.querySelector('.section-covers');


// Функція, яка запускає або зупиняє анімацію
function toggleAnimation(isVisible) {
  const marqueeInner = coversSection.querySelector('.container-covers');
  
  // Додати або видалити клас для запуску або зупинки анімації
  if (isVisible) {
    marqueeInner.classList.add('animate-marquee');
  } else {
    marqueeInner.classList.remove('animate-marquee');
    }
    console.log(marqueeInner, "hello!!!");
}

// Налаштування Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Секція "Covers" стала видимою у зоні відображення
      toggleAnimation(true);
    } else {
      // Секція "Covers" більше не видима у зоні відображення
      toggleAnimation(false);
    }
  });
});

// Спостерігання за секцією "Covers"
observer.observe(coversSection);