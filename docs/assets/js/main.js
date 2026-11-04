'use strict';
// All interactive features are initialized after the markup is parsed.
document.addEventListener('DOMContentLoaded', () => {
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-category]'));
  const resultMessage = document.getElementById('filter-feedback');
  if (!filters.length || !cards.length) return;

  function applyFilter(value) {
    let visible = 0;
    cards.forEach(card => {
      const matching = value === 'all' || card.dataset.category === value;
      card.hidden = !matching;
      if (matching) visible++;
    });
    filters.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === value));
    });
    if (resultMessage) {
      resultMessage.textContent = visible + ' projet' + (visible > 1 ? 's' : '') + ' affiché' + (visible > 1 ? 's' : '') + '.';
    }
  }
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  applyFilter('all');
});
