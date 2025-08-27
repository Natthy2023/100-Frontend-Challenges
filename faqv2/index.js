const plusIcon = document.querySelectorAll('.plus');
const minusIcon = document.querySelectorAll('.minus');
const contentBox = document.querySelectorAll('.content-box');
contentBox.forEach((box) => {
  box.style.display = 'none';
});

plusIcon.forEach((plus,index) => {
  plus.addEventListener('click', () => {
    fadeIn(index);
  });
});
minusIcon.forEach((minus,index) => {
  minus.addEventListener('click', () => {
    fadeOut(index);
  });
});

function fadeIn(index) {
  contentBox[index].style.display = 'block';
  setTimeout(() => {
    contentBox[index].style.opacity = '1';
  }, 100);
}

function fadeOut(index) {
  contentBox[index].style.opacity = '0';
  setTimeout(() => {
    contentBox[index].style.display = 'none';
  }, 500);
}
