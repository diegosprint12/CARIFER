# CARIFER

Sitio web para marca de calzado artesanal de lujo. Diseñado para proyectar sofisticación, exclusividad y herencia con una experiencia minimalista y de alto impacto visual.

## Sitio

El sitio sigue un flujo narrativo de conversión:

1. **Hero** — Split layout con imagen grayscale-to-color, badge de colección y CTA al catálogo
2. **Catálogo** — 84 referencias en 3 líneas (Plana, Canoa, Suela Alta) con filtros dinámicos y consulta directa por WhatsApp
3. **Nosotros** — Historia de la marca con galería narrativa en fade automático y filosofía de marca
4. **Contacto** — Proceso de compra en 3 pasos con cierre directo por WhatsApp
5. **Footer** — Firma artesanal con navegación, redes sociales y sello "Hecho a mano 100%"

## Stack

- **HTML5** semántico
- **JavaScript ES6+** (módulos ESM, sin frameworks)
- **CSS3** puro con Custom Properties (design tokens)
- **Vite** como bundler

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── components/       # Componentes ESM (Hero, Catalog, About, Contact, WhatsApp)
├── data/             # Datos exportables (products.js)
├── styles/           # CSS modular por sección
│   ├── tokens.css    # Design tokens (colores, tipografía, espaciado)
│   ├── animations.css# Clase .reveal reutilizable
│   ├── hero.css
│   ├── catalog.css
│   ├── nosotros.css
│   ├── contacto.css
│   ├── whatsapp.css
│   └── main.css      # Base, header, footer, responsive
└── main.js           # Entry point, observers y lógica global

public/images/
├── catalogo/         # 84 referencias WebP (PL, CN, SA)
└── nosotros/         # Galería narrativa del taller
```

## Catálogo

- **84 referencias** distribuidas en 3 líneas:
  - Plana (PL): 36 modelos
  - Canoa (CN): 44 modelos
  - Suela Alta (SA): 4 modelos
- Filtros por línea con re-render dinámico
- Consulta directa por WhatsApp con referencia del producto
- Imágenes optimizadas en WebP (~8MB total, ~98KB promedio)

## Autor

Diego Salazar — [GitHub](https://github.com/diegosprint12)
