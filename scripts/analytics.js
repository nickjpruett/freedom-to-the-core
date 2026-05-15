/**
 * Google Analytics Configuration
 * Tracks page views and user interactions
 */

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-R12VN7XN19');

/**
 * Track external link clicks
 */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[target="_blank"]');
  if (link && link.href) {
    gtag('event', 'outbound_click', {
      'destination': link.href,
      'link_text': link.textContent,
      'link_class': link.className
    });
  }
});

/**
 * Track form submissions
 */
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (form && form.classList.contains('contact-form')) {
    gtag('event', 'form_submission', {
      'form_name': 'contact_form',
      'form_action': form.action
    });
  }
});
