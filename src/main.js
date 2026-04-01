import './styles/tokens.css';
import './styles/main.css';
import './styles/animations.css';
import './styles/hero.css';
import './styles/carousel.css';
import './styles/whatsapp.css';

import { Hero } from './components/Hero.js';
import { CategoryCarousel } from './components/CategoryCarousel.js';
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
  content.appendChild(CategoryCarousel());

  const track = document.querySelector('.carousel-track');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (track && dotsContainer) {
    const updateActiveCard = () => {
      const scrollPos = track.scrollLeft;
      const cardWidth = track.querySelector('.carousel-card')?.offsetWidth || 280;
      const activeIndex = Math.round(scrollPos / cardWidth);
      
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });

      const cards = track.querySelectorAll('.carousel-card');
      cards.forEach((card, index) => {
        card.classList.toggle('active', index === activeIndex);
      });
    };

    track.addEventListener('scroll', updateActiveCard);
    updateActiveCard();
  }
}

document.body.appendChild(WhatsAppButton());