// busca simples (filtrar por título)
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');

searchInput && searchInput.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  Array.from(productGrid.children).forEach(card => {
    const title = card.querySelector('.product-title').innerText.toLowerCase();
    card.style.display = title.includes(q) ? '' : 'none';
  });
});

// exemplo: ação do botão comprar
document.addEventListener('click', (e) => {
  const buy = e.target.closest('.buy');
  if (!buy) return;
  buy.innerText = 'Adicionado ao carrinho ✅';
  buy.disabled = true;
  setTimeout(() => {
    buy.innerText = '🛒 Comprar agora';
    buy.disabled = false;
  }, 1500);
});
