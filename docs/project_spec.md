# CARIFER - Project Specification

## 1. Visión General
**Carifer** es una marca de calzado artesanal de lujo. El objetivo del sitio es proyectar sofisticación, exclusividad y herencia artesanal. El diseño debe ser minimalista, con un uso generoso del espacio en blanco (whitespace) y tipografía de alto impacto.

## 2. Identidad Visual (Design Tokens)

### Paleta de Colores
| Token | Hex | Uso |
|-------|-----|-----|
| --color-primary | #7d5d3b | Marrón cuero artesanal |
| --color-accent | #a67c52 | Dorado/Bronce suave |
| --color-bg | #fdfbf7 | Beige hueso |
| --color-contrast | #392503 | Marrón profundo para textos |
| --color-white | #ffffff | Fondos claros |
| --color-shadow | rgba(57, 37, 3, 0.15) | Sombras |

### Tipografía
| Token | Familia | Peso | Uso |
|-------|---------|------|-----|
| --font-display | Montserrat | 700/800 | Titulares |
| --font-accent | Livvic | 400i | Acentos/Itálicas |
| --font-body | Open Sans | 400 | Cuerpo |

### Espaciado
| Token | Valor |
|-------|-------|
| --space-xs | 0.25rem |
| --space-sm | 0.5rem |
| --space-md | 1rem |
| --space-lg | 2rem |
| --space-xl | 4rem |

### Breakpoints
| Breakpoint | Ancho |
|------------|-------|
| mobile | 480px |
| tablet | 768px |
| desktop | 1024px |

## 3. Requisitos de UX/UI

### Navegación
- Sticky header con efecto backdrop-blur
- Logo SVG/PNG como reemplazo de texto
- Menú Hamburguesa para móvil (Mobile First)
- `will-change: transform` para optimización GPU en móviles

### Micro-interacciones
- Botones: Efecto translateY y sombreado suave en hover
- WhatsApp: Botón flotante persistente con animación de escala (pulse)
- Carrusel: Scroll-snap para móvil, dots de navegación, active state con zoom
- Imágenes: Zoom suave al hover, grayscale-to-color en Hero
- Reveal: Animación de entrada con cubic-bezier(0.19, 1, 0.22, 1) — clase reutilizable
- Hero image: Intersection Observer para color al scrollear en viewport

### Grid System
- Flexbox y CSS Grid para layouts adaptables
- Móvil: 1 columna, carrusel 85% ancho
- Desktop: 2 columnas (Nosotros), 3-4 columnas (Productos)

## 4. Integraciones

### WhatsApp
- Botón flotante con animación pulse persistente
- Formato: `wa.me/5491112345678?text=Hola! Me interesa conocer más sobre los productos CARIFER.`
- Posición: fixed bottom-right, z-index 999, responsive (60px → 52px)

### Social
- Facebook exclusivo en footer con ícono institucional

## 5. Stack Técnico
- **Build**: Vite
- **JS**: Vanilla ESM (sin frameworks)
- **CSS**: CSS puro con Custom Properties
- **Fonts**: Descarga manual (Montserrat, Livvic, Open Sans)

## 6. Checklist de Entrega
- [x] Header con logo funcional
- [x] Navegación responsive (Menú móvil)
- [x] Hero section con split layout (desktop) y stack (móvil)
- [x] Carrusel de categorías (3 líneas: Plana, Canoa, Suela Alta)
- [x] Botón WhatsApp flotante
- [x] Efectos Hover en botones y redes sociales
- [x] Animaciones reveal de entrada
- [ ] Secciones: Nosotros, Productos, Contacto
- [ ] Optimización de assets

## 7. Progreso Implementado
- [x] Sticky header con backdrop-blur
- [x] Logo SVG con hover currentColor
- [x] Menú Hamburguesa toggle (mobile)
- [x] Navbar con Montserrat y letter-spacing
- [x] Responsive con breakpoint 768px
- [x] Hero section — split 50/50, min-height 100svh, reveal animations
- [x] Hero — badge "Colección 2026", H1 con Livvic italic, CTA "Ver Catálogo"
- [x] Hero — imagen grayscale-to-color + Intersection Observer para móvil
- [x] Hero — decorative "Hecho a mano con amor" (solo desktop)
- [x] Carrusel — 3 categorías con scroll-snap, dots, CTA desktop/mobile, active zoom
- [x] WhatsApp — botón flotante pulse, responsive, aria-label
- [x] Animaciones — clase .reveal reutilizable con cubic-bezier elegante