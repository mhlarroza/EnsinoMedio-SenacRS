document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.card');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';

  // Função para aplicar filtros (categoria + busca)
  function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const nameElement = card.querySelector('.name');
      if (!nameElement) return;

      const name = nameElement.textContent.toLowerCase();
      const category = card.dataset.category;

      const matchesSearch = searchTerm === '' || name.includes(searchTerm);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  // Evento da busca por texto
  searchInput.addEventListener('input', applyFilters);

  // Evento dos botões de categoria
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active de todos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Adiciona active no clicado
      button.classList.add('active');

      currentCategory = button.dataset.category;
      applyFilters();
    });
  });

  // Inicializa mostrando tudo
  applyFilters();
});