document.addEventListener('DOMContentLoaded', () => {
  const filterLinks = document.querySelectorAll('.sidebar a');
  const productCards = document.querySelectorAll('.product-card');

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'All' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex'; // show
        } else {
          card.style.display = 'none'; // hide
        }
      });
    });
  });
});