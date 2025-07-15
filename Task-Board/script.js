const buttonList = document.querySelectorAll('.row-1 h2');
const contents = document.querySelectorAll('.row-2');

for (let index = 0; index < 4 && index < contents.length; index++) {
  contents[index].classList.add('visibility');
}

for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('click', () => {
    contents[i].classList.toggle('visibility');
    contents[i].classList.toggle('transition');
  });
}
