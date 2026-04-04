export function AboutSection() {
  const phoneNumber = '573185239435';

  const galleryImages = [
    {
      src: '/images/nosotros/taller-1.webp',
      alt: 'Artesano trabajando el cuero en el taller CARIFER'
    },
    {
      src: '/images/nosotros/taller-2.webp',
      alt: 'Detalle de costura manual en sandalia CARIFER'
    },
    {
      src: '/images/nosotros/taller-3.webp',
      alt: 'Cuero seleccionado para la producción artesanal'
    }
  ];

  const section = document.createElement('section');
  section.className = 'about';
  section.id = 'nosotros';

  section.innerHTML = `
    <div class="about-inner">
      <div class="about-header reveal">
        <span class="about-label">La Esencia</span>
        <h2 class="about-title">
          Coser el tiempo<br>
          <span class="about-title-accent">un par a la vez.</span>
        </h2>
        <p class="about-quote">
          "No solo fabricamos calzado; preservamos un oficio que define nuestra identidad."
        </p>
      </div>

      <div class="about-grid">
        <div class="about-gallery reveal" style="animation-delay: 0.2s">
          <div class="gallery-slides">
            ${galleryImages.map((img, i) => `
              <div class="gallery-slide ${i === 0 ? 'active' : ''}">
                <img src="${img.src}" alt="${img.alt}" loading="lazy" />
              </div>
            `).join('')}
          </div>
          <div class="gallery-caption">
            <div class="caption-left">
              <span class="decorative-line"></span>
              <span class="caption-text">Taller Carifer, Santander</span>
            </div>
            <span class="caption-badge">Proceso 100% Manual</span>
          </div>
        </div>

        <div class="about-content reveal" style="animation-delay: 0.4s">
          <div class="about-philosophy">
            <h3 class="philosophy-title">Nuestra Filosofía</h3>
            <p class="philosophy-text">
              En un borde de girón, Carifer nace como un tributo a la paciencia y a un ser querido. Creemos que el calzado es un objeto vivo que merece respeto. Por eso, cada costura es realizada con la precisión que solo un maestro puede garantizar.
            </p>
            <p class="philosophy-text philosophy-bold">
              No seguimos tendencias de moda rápida. Creamos piezas que envejecen con dignidad junto a quien las usa.
            </p>
          </div>

          <div class="about-values">
            <div class="value-item">
              <h4 class="value-title">Origen</h4>
              <p class="value-text">Materia prima seleccionada de las mejores curtiembres de Bucaramanga.</p>
            </div>
            <div class="value-item">
              <h4 class="value-title">Legado</h4>
              <p class="value-text">Técnicas perfeccionadas aplicadas a diseños contemporáneos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
