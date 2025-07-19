const toggleBtn = document.querySelector('.fa-bars');
const header = document.querySelector('.h-2');

toggleBtn.addEventListener('click',()=>{
  header.classList.toggle('visible');
})