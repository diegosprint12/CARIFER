import './styles/tokens.css';
import './styles/main.css';
import './styles/animations.css';
import './styles/hero.css';
import './styles/whatsapp.css';
import './styles/catalog.css';
import './styles/nosotros.css';
import './styles/contacto.css';

import { Hero } from './components/Hero.js';
import { CatalogSection } from './components/CatalogSection.js';
import { AboutSection } from './components/AboutSection.js';
import { ContactSection } from './components/ContactSection.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';

console.log('CARIFER - Inicializando aplicación...');

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    mainNav.classList.toggle('active');
  });
}

const content = document.getElementById('content');
if (content) {
  content.appendChild(Hero());
  content.appendChild(CatalogSection());
  content.appendChild(AboutSection());
  content.appendChild(ContactSection());
}

document.body.appendChild(WhatsAppButton());

const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      heroImage.classList.toggle('in-viewport', entry.isIntersecting);
    },
    { threshold: 0.5 }
  );
  observer.observe(heroImage);
}

const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
const sections = {};

navLinks.forEach(link => {
  const id = link.getAttribute('href').slice(1);
  const section = document.getElementById(id);
  if (section) {
    sections[id] = { link, section };
  }
});

if (Object.keys(sections).length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (sections[id]) {
          sections[id].link.classList.toggle('active', entry.isIntersecting);
        }
      });
    },
    { threshold: 0.3 }
  );

  Object.values(sections).forEach(({ section }) => {
    sectionObserver.observe(section);
  });
}

const catalogGrid = document.getElementById('catalog-grid');
const countNumber = document.querySelector('.count-number');

function applyFilter(filter) {
  if (!catalogGrid) return;

  const cards = catalogGrid.querySelectorAll('.product-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const linea = card.getAttribute('data-linea');
    const isVisible = filter === 'todos' || linea === filter;

    card.classList.toggle('hidden', !isVisible);
    if (isVisible) visibleCount++;
  });

  if (countNumber) {
    countNumber.textContent = visibleCount;
  }

  document.querySelectorAll('.filter-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-filter') === filter);
  });

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === filter);
  });
}

document.querySelectorAll('.filter-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    applyFilter(link.getAttribute('data-filter'));
  });
});

document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    applyFilter(pill.getAttribute('data-filter'));
  });
});

const gallerySlides = document.querySelectorAll('.gallery-slide');
if (gallerySlides.length > 1) {
  let currentSlide = 0;
  setInterval(() => {
    gallerySlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % gallerySlides.length;
    gallerySlides[currentSlide].classList.add('active');
  }, 5000);
}

const galleryContainer = document.querySelector('.gallery-slides');
if (galleryContainer) {
  const galleryObserver = new IntersectionObserver(
    ([entry]) => {
      galleryContainer.classList.toggle('in-viewport', entry.isIntersecting);
    },
    { threshold: 0.3 }
  );
  galleryObserver.observe(galleryContainer);
}