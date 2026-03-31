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
- WhatsApp: Botón flotante persistente con animación de escala
- Carrusel: Scroll-snap para móvil, prev/next para desktop
- Imágenes: Zoom suave al hover

### Grid System
- Flexbox y CSS Grid para layouts adaptables
- Móvil: 1 columna, carrusel 85% ancho
- Desktop: 2 columnas (Nosotros), 3-4 columnas (Productos)

## 4. Integraciones

### WhatsApp
- Botón flotante con mensaje dinámico por producto
- Formato: `wa.me/numero?text=Hola! Estoy interesado en [NOMBRE_PRODUCTO]`

### Social
- Facebook exclusivo en footer con ícono institucional

## 5. Stack Técnico
- **Build**: Vite
- **JS**: Vanilla ESM (sin frameworks)
- **CSS**: CSS puro con Custom Properties
- **Fonts**: Descarga manual (Montserrat, Livvic, Open Sans)

## 6. Checklist de Entrega
- [ ] Header con logo funcional
- [ ] Navegación responsive (Menú móvil)
- [ ] Carrusel sin bugs de scroll
- [ ] Efectos Hover en botones y redes sociales
- [ ] Optimización de assets