let body = document.body;

// Card move
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 250); // Задержка для каждой следующей карточки
      }
    });
  });

  const cards = document.querySelectorAll('.move-card');
  cards.forEach(card => observer.observe(card));
});
