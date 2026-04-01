export function Hero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'inicio';

  section.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <span class="hero-badge reveal" style="animation-delay: 0.2s">Colección 2026</span>
        <h1 class="hero-title reveal" style="animation-delay: 0.3s">
          Pasos que<br>
          <span class="hero-title-accent">Inspiran.</span>
        </h1>
        <p class="hero-subtitle reveal" style="animation-delay: 0.4s">
          Artesanía que abraza tus pasos
        </p>
        <a href="#productos" class="hero-cta reveal" style="animation-delay: 0.6s">
          Ver Catálogo
        </a>
      </div>
      <div class="hero-image reveal" style="animation-delay: 0.4s">
        <img
          src="/images/carifer-hero-1.webp"
          alt="Sandalia artesanal CARIFER"
          loading="eager"
          width="600"
          height="800"
        />
        <div class="hero-image-decorative">
          <p class="decorative-text">Handmade with Love</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
