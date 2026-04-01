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
      <div class="carousel-track">
        ${categories.map(cat => `
          <article class="carousel-card">
            <div class="card-image">
              <img src="${cat.image}" alt="${cat.alt}" loading="lazy" />
            </div>
            <h3 class="card-title">${cat.name}</h3>
          </article>
        `).join('')}
        <a href="#productos" class="cta-card-mobile">
          <div class="cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 4h16v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 9h6v6H9z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 12h16" stroke-linecap="round"/>
              <path d="M12 4v16" stroke-linecap="round"/>
            </svg>
            <h3 class="cta-title">Explora el Catálogo</h3>
            <span class="mobile-cta-btn">Ver más</span>
          </div>
        </a>
      </div>
    </div>
    <div class="carousel-cta">
      <a href="#productos" class="carousel-cta-btn">
        Explorar Catálogo
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
    <div class="carousel-dots" aria-hidden="true">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <p class="carousel-hint">Desliza para ver más</p>
  `;

  return container;
}