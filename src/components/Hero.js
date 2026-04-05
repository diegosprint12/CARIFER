export function Hero() {
  const decorativeText = '#tucaminotuestilo';
  const base = import.meta.env.BASE_URL;

  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'inicio';

  section.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-badge reveal" style="animation-delay: 0.2s">Colección 2026</span>
        <h1 class="hero-title reveal" style="animation-delay: 0.3s">
          Artesanía que<br>
          <span class="hero-title-accent">Abraza tus pasos.</span>
        </h1>
        <p class="hero-subtitle reveal" style="animation-delay: 0.4s">
          Tradición en cada costura
        </p>
        <a href="#catalogo" class="hero-cta reveal" style="animation-delay: 0.6s">
          Ver Catálogo
        </a>
      </div>
      <div class="hero-image reveal" style="animation-delay: 0.4s">
        <img
          src="${base}images/carifer-hero-1.webp"
          alt="Sandalia artesanal CARIFER"
          loading="eager"
          width="600"
          height="800"
        />
        <div class="hero-image-decorative">
          <p class="decorative-text">${decorativeText}</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
