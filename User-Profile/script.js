const toggleBtn = document.getElementById('btn');
const content = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
  content.classList.toggle('visible');
});
