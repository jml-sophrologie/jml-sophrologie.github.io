/**
 * APPLICATION PRINCIPALE - JESSICA MACCHI LATREILLE
 * Sophrologie & Périnatalité au Centre Périnatal de Blausasc
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. STICKY HEADER & MOBILE NAVIGATION DRAWER ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links-menu');
  const toggleIcon = document.getElementById('toggle-icon');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('mobile-open');
      if (isOpen) {
        navLinks.classList.remove('mobile-open');
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
      } else {
        navLinks.classList.add('mobile-open');
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-xmark';
      }
    });

    // Fermer le menu au clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
      });
    });

    // Fermer en cliquant en dehors
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        if (toggleIcon) toggleIcon.className = 'fa-solid fa-bars';
      }
    });
  }

  // --- 2. SMOOTH SCROLL FOR INTERNAL ANCHORS ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
