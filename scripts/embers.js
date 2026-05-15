/**
 * Floating Embers Animation
 * Creates animated floating particles in the hero section
 */

function initializeEmbers() {
  const embersContainer = document.getElementById('embers');

  if (!embersContainer) {
    console.warn('Embers container not found');
    return;
  }

  try {
    const emberCount = 24;

    for (let i = 0; i < emberCount; i++) {
      const ember = document.createElement('div');
      ember.className = 'ember';

      // Randomize ember properties
      const size = Math.random() * 3 + 1.5; // 1.5px to 4.5px
      const xPosition = Math.random() * 100; // 0-100%
      const duration = Math.random() * 8 + 6; // 6-14 seconds
      const delay = Math.random() * 12; // 0-12 second delay

      // Apply CSS inline styles
      ember.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${xPosition}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;

      embersContainer.appendChild(ember);
    }

    console.log(`Initialized ${emberCount} embers`);
  } catch (error) {
    console.error('Error initializing embers:', error);
  }
}

/**
 * Initialize embers when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEmbers);
} else {
  initializeEmbers();
}
