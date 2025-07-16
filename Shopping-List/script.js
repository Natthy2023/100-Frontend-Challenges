const plusButtonList = document.querySelectorAll('.plus-btn');
const counterContentList = document.querySelectorAll('.counter');
const minusButtonList = document.querySelectorAll('.minus-btn');
const priceContentList = document.querySelectorAll('.price');
const cancelButtonList = document.querySelectorAll('.cancel-btn');
const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cartPopUp = document.querySelector('.cart-pop-up');
const payBtn = document.getElementById('pay-btn');
const menuBtn = document.getElementById('menu');
const menuBody = document.querySelector('.nav-bar');
const productBrand = {
  0: 'cetaphil',
  1: 'nivea',
  2: 'ceravel',
  3: 'cbd'
};
menuBody.classList.add('hide');
menuBtn.addEventListener('click', function () {
  menuBody.classList.remove('hide');
  menuBody.classList.toggle('toggle');
});
cartBtn.addEventListener('click', function () {
  cartPopUp.classList.toggle('visible');
});

function cartDialogBox(order) {
  payBtn.addEventListener('click', function () {
    if (order !== 0) {
      setTimeout(function () {
        cartPopUp.innerHTML = `
  <h2 style='text-align:center'>Thanks for your purchase!</h2>
   <img src="./images/logo.png">
  `;
        window.location.reload();
      }, 1000);
    }

    setTimeout(function () {
      cartPopUp.classList.toggle('hide');
    }, 6000);
  });
}

let totalItemPrice = 0;
for (let i = 0; i < plusButtonList.length; i++) {
  let counter = Number(counterContentList[i].textContent);
  plusButtonList[i].addEventListener('click', function () {
    counter += 1;
    if (counter < 0) {
      counter = 0;
    }
    totalItemPrice += counter;
    counterContentList[i].textContent = counter;
    productTotalPrice(productBrand[i], totalItemPrice);
  });

  minusButtonList[i].addEventListener('click', function () {
    counter -= 1;
    if (counter < 0) {
      counter = 0;
    }
    totalItemPrice += counter;
    counterContentList[i].textContent = counter;
    productTotalPrice(productBrand[i], totalItemPrice);
  });
  cancelButtonList[i].addEventListener('click', function () {
    let targetItem = document.querySelector(`.row.row-${i + 1}`);
    productList.textContent = cancelButtonList.length - 1;
    targetItem.style.display = 'none';
    productTotalPrice(productBrand[i], 0);
  });
}

function productTotalPrice(brand, amount) {
  let totalPrice = 0;
  let taxPrice = 0;
  const shippingPrice = 0;
  let totalPay = 0;
  switch (brand.toUpperCase()) {
    case 'CETAPHIL':
      totalPrice += amount * 12.99;
      break;
    case 'NIVEA':
      totalPrice += amount * 9.99;
      break;
    case 'CERAVEL':
      totalPrice += amount * 29.99;
      break;
    case 'CBD':
      totalPrice += amount * 32.99;
      break;
  }
  taxPrice += totalPrice * 0.15;
  totalPay += totalPrice + taxPrice;
  document.getElementById('subtotal').textContent = `$${totalPrice.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${taxPrice.toFixed(2)}`;
  document.getElementById('shipping').textContent = `$${shippingPrice.toFixed(
    2
  )}`;
  document.getElementById('total').textContent = `$${totalPay.toFixed(2)}`;
  cartDialogBox(amount);
}
