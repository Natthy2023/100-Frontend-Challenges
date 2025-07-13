const lola = document.querySelector('.item-1');
const bailey = document.querySelector('.item-2');
const buddy = document.querySelector('.item-3');
const trucker = document.querySelector('.item-4');
const images = document.querySelectorAll('.item');
const input = document.getElementById('user-input');
let index = null;

const nameToIndex = {
  LOLA: 0,
  BAILEY: 1,
  BUDDY: 2,
  TRUCKER: 3
};

function searchItem(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  if (index !== null && index >= 0 && index < images.length) {
    images[index].style.display = 'flex';
  }
}

function userInput(userValue) {
  const key = userValue.trim().toUpperCase();
  if (key in nameToIndex) {
    searchItem(nameToIndex[key]);
  } else {
    document.querySelector('.main-content').innerHTML =
      '<h1>404</h1><p>NOT FOUND</p>';
  }
}

document.querySelector('#btn').addEventListener('click', () => {
  const userSearch = input.value;
  userInput(userSearch);
});

const donateBtn = document.querySelectorAll('.donate');
const adoptBtn = document.querySelectorAll('.adopt');
const likeBtn = document.querySelectorAll('.fa-heart');

for (var i = 0; i < donateBtn.length; i++) {
  donateBtn[i].addEventListener('click', () => {
    let response = prompt('How much would you like to donate(in dollar)?');
    alert(`Donation: $${response} \nThank you for your support!`);
  });

  adoptBtn[i].addEventListener('click', () => {
    alert('Thank you for supporting pet adoption! 🐶🐱❤️');
  });
  likeBtn[i].addEventListener('click', () => {
    alert('You liked this page!.');
  });
}
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');

item1.addEventListener('click', () => {
  window.location.href = './Lola.html';
});

item2.addEventListener('click', () => {
  window.location.href = './Bailey.html';
});

item3.addEventListener('click', () => {
  window.location.href = './Buddy.html';
});

item4.addEventListener('click', () => {
  window.location.href = './Trucker.html';
});
