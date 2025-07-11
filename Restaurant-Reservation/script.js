const sliderButtons = document.querySelectorAll('.btn');
const imageBoard = document.getElementById('banner');
const bannerClasses = [
  'banner-1',
  'banner-2',
  'banner-3',
  'banner-4',
  'banner-5'
];

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    imageBoard.classList.remove(...bannerClasses);

    imageBoard.classList.add(`banner-${index + 1}`);
  });
});

const like = document.getElementById('like');

like.addEventListener('click', () => {
  setTimeout(() => {
    like.setAttribute('src', './images/like.gif');

    setTimeout(() => {
      like.setAttribute('src', 'https://img.icons8.com/ios/100/like--v1.png');
      alert('You liked this!');
    }, 800);
  }, 500);
});
