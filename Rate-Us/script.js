const imageList = document.querySelectorAll('img');
const skipBtn = document.querySelector('.btn p');
const contentBox = document.querySelector('.container');
const feedback = {
  0: {
    text: "😞 We're sorry to hear that. Help us improve!",
    image: './images/terrible2.svg'
  },
  1: {
    text: '😕 Not what you expected? Let us make it right.',
    image: './images/bad2.svg'
  },
  2: {
    text: '😐 Thanks! Tell us what could be better.',
    image: './images/ok.svg'
  },
  3: {
    text: '🙂 Glad you liked it! Any suggestions?',
    image: './images/good2.svg'
  },
  4: {
    text: "😍 Awesome! We're happy you loved it!",
    image: './images/great2.svg'
  },
  5: 'No worries! Maybe next time 😊'
};
function setReload(time) {
  setTimeout(() => {
    window.location.reload();
  }, time);
}
skipBtn.addEventListener('click', () => {
  contentBox.innerHTML = feedback[5];
  setReload(1000);
});
for (let i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener('mouseover', () => {
    imageList[i].src = feedback[i].image;
  });

  imageList[i].addEventListener('click', () => {
    contentBox.innerHTML = feedback[i];
    contentBox.innerHTML = feedback[i].text;
    setReload(1000);
  });
}
