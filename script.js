// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('open');
});

// Fermer le menu au clic sur un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('open');
  });
});

// Header shadow au scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
});
