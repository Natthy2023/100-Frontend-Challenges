const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const starsContainer = document.getElementById('stars');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Generate stars
function createStars(num) {
  starsContainer.innerHTML = '';
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starsContainer.appendChild(star);
  }
}

// Toggle light/dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? 'Switch to Light' : 'Switch to Dark';

  if (isDark) {
    createStars(100);
    starsContainer.style.display = 'block';
  } else {
    starsContainer.innerHTML = '';
    starsContainer.style.display = 'none';
  }
});

// Slide nav
function slideWidth() {
  const slide = slider.querySelector('.slide');
  const gap = 16; // same as in CSS
  return slide.offsetWidth + gap;
}

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -slideWidth(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: slideWidth(), behavior: 'smooth' });
});

// Init stars
createStars(100);

// Swipe support
let startX = 0;
let isDown = false;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDown = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const diffX = e.touches[0].clientX - startX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      slider.scrollBy({ left: -slideWidth(), behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: slideWidth(), behavior: 'smooth' });
    }
    isDown = false;
  }
});

slider.addEventListener('touchend', () => {
  isDown = false;
});
