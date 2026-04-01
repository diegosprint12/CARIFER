export function CategoryCarousel() {
  const categories = [
    {
      id: 'plana',
      name: 'Plana',
      image: '/images/categoria-plana.webp',
      alt: 'Sandalias CARIFER línea Plana'
    },
    {
      id: 'canoa',
      name: 'Canoa',
      image: '/images/categoria-canoa.webp',
      alt: 'Sandalias CARIFER línea Canoa'
    },
    {
      id: 'suela-alta',
      name: 'Suela Alta',
      image: '/images/categoria-suela-alta.webp',
      alt: 'Sandalias CARIFER línea Suela Alta'
    }
  ];

  const container = document.createElement('section');
  container.className = 'category-carousel';
  container.id = 'categorias';

  container.innerHTML = `
    <h2 class="carousel-title">Nuestras Líneas</h2>
    <div class="carousel-wrapper">
      <button class="carousel-btn prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <div class="carousel-track">
        ${categories.map(cat => `
          <article class="carousel-card">
            <div class="card-image">
              <img src="${cat.image}" alt="${cat.alt}" loading="lazy" />
            </div>
            <h3 class="card-title">${cat.name}</h3>
          </article>
        `).join('')}
      </div>
      <button class="carousel-btn next" aria-label="Siguiente">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>
  `;

  return container;
}