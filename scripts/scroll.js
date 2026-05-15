/**
 * Scroll Progress Bar & Navigation
 * Updates progress bar based on scroll position
 * Toggles nav background on scroll
 */

const progressBar = document.getElementById('progress');
const nav = document.getElementById('nav');

if (progressBar && nav) {
  window.addEventListener('scroll', () => {
    try {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progressBar.style.width = scrollPercent + '%';
      nav.classList.toggle('scrolled', scrollTop > 60);
    } catch (error) {
      console.error('Scroll event error:', error);
    }
  }, { passive: true });
}

/**
 * Intersection Observer for Scroll Reveal
 * Adds 'visible' class to elements as they enter viewport
 */

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

/**
 * Smooth scroll to anchor links
 * Prevents default behavior and smoothly scrolls to target
 */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
