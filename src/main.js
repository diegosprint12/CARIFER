import './styles/tokens.css';
import './styles/main.css';
import './styles/carousel.css';

import { CategoryCarousel } from './components/CategoryCarousel.js';

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
  content.appendChild(CategoryCarousel());
}