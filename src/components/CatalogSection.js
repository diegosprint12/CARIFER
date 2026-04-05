import { products, lineas, lineaLabels } from '../data/products.js';

const phoneNumber = '573185239435';

function createProductCard(p, i) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.setAttribute('data-linea', p.linea);
  card.style.animationDelay = `${0.1 + i * 0.08}s`;

  const colorHTML = p.color ? `<span class="product-color">${p.color}</span>` : '';
  const descHTML = p.desc ? `<p class="product-desc">${p.desc}</p>` : '';

  card.innerHTML = `
    <div class="product-image-container">
      <span class="product-badge">${lineaLabels[p.linea]}</span>
      <img src="${p.img}" alt="CARIFER ${p.ref}" loading="lazy" />
    </div>
    <div class="product-info">
      <div class="product-header">
        <h3 class="product-ref">Ref: ${p.ref}</h3>
        ${colorHTML}
      </div>
      ${descHTML}
      <a href="https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola! Me interesa la referencia ' + p.ref)}"
         class="product-whatsapp"
         target="_blank"
         rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        Consultar
      </a>
    </div>
  `;

  return card;
}

export function renderCatalogGrid(filter = 'todos') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = filter === 'todos'
    ? products
    : products.filter(p => p.linea === filter);

  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    grid.appendChild(createProductCard(p, i));
  });

  const countNumber = document.querySelector('.count-number');
  if (countNumber) {
    countNumber.textContent = filtered.length;
  }

  document.querySelectorAll('.filter-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-filter') === filter);
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === filter);
  });
}

export function CatalogSection() {
  const section = document.createElement('section');
  section.className = 'catalog';
  section.id = 'catalogo';

  section.innerHTML = `
    <div class="catalog-layout">
      <aside class="catalog-sidebar">
        <h2 class="catalog-title">Catálogo</h2>
        <p class="catalog-subtitle">Explora nuestras líneas.</p>

        <div class="catalog-filters">
          <h3 class="filters-label">Filtrar por</h3>
          <ul class="filters-list">
            ${lineas.map((l, i) => `
              <li>
                <a href="#catalogo" class="filter-link ${i === 0 ? 'active' : ''}" data-filter="${l.id}">
                  ${l.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="catalog-info-box">
          <h4 class="info-title">Cobertura de Envío</h4>
          <p class="info-text">
            Cubrimos el área Metropolitana de Bucaramanga. Consúltanos para más información.
          </p>
          <div class="info-status">
            <span class="status-dot"></span>
            <span class="status-text">Taller disponible</span>
          </div>
        </div>
      </aside>

      <div class="catalog-main">
        <div class="catalog-header">
          <p class="catalog-count"><span class="count-number">${products.length}</span> Referencias en Catálogo</p>
          <span class="catalog-origin">Girón, Santander</span>
        </div>

        <div class="catalog-filters-mobile">
          ${lineas.map((l, i) => `
            <button class="filter-pill ${i === 0 ? 'active' : ''}" data-filter="${l.id}">
              ${l.label}
            </button>
          `).join('')}
        </div>

        <div class="catalog-grid" id="catalog-grid"></div>
      </div>
    </div>
  `;

  return section;
}

