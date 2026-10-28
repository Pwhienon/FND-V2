const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector('.scroll-top');

// Scroll-to-top button
if (scrollButton) {
  window.addEventListener('scroll', () => {
    scrollButton.style.display = window.scrollY > window.innerHeight * 1.2 ? 'flex' : 'none';
  }, { passive: true });
  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Menu
function openMenu() {
  navContent.classList.add('show');
  document.body.style.overflow = 'hidden';
  hamburgerMenu.setAttribute('aria-expanded', 'true');
  closeNavButton.focus();
}

function closeMenu() {
  navContent.classList.remove('show');
  document.body.style.overflow = '';
  hamburgerMenu.setAttribute('aria-expanded', 'false');
}

hamburgerMenu.addEventListener('click', openMenu);
closeNavButton.addEventListener('click', () => {
  closeMenu();
  hamburgerMenu.focus();
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navContent.classList.contains('show')) {
    closeMenu();
    hamburgerMenu.focus();
  }
});
