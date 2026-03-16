function filterEquip(status) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (status === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(status)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
