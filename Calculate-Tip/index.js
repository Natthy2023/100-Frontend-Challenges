import { tipAmount, billPerPerson, totalBill } from './billCalc.js';

const payBill = document.getElementById('bill-value');
const tipButtons = document.querySelectorAll('.btn');
const splitValue = document.getElementById('split-value');
const resetBtn = document.getElementById('reset-id');

const baseAmountResult = document.getElementById('base-result');
const tipAmountResult = document.getElementById('tip-result');
const perPersonResult = document.getElementById('per-person-result');
const totalResult = document.getElementById('total-result');


let tipValue = null;

const tipRate = {
  0: 0.1,
  1: 0.15,
  2: 0.2,
  3: 0.25
};

tipButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tipValue = tipRate[index];
    updateValues();
  });
});


payBill.addEventListener('input', updateValues);
splitValue.addEventListener('input', updateValues);


function updateValues() {
  const base = parseFloat(payBill.value);
  const split = parseInt(splitValue.value, 10);

  if (isNaN(base) || base <= 0 || isNaN(split) || split <= 0 || tipValue === null) {
    return;
  }

  const tip = tipAmount(base, tipValue);
  const total = totalBill(tip, base);
  const perPerson = billPerPerson(base, tipValue, split);

  baseAmountResult.textContent = `$${base.toFixed(2)}`;
  tipAmountResult.textContent = `$${tip.toFixed(2)}`;
  perPersonResult.textContent = `$${perPerson.toFixed(2)}`;
  totalResult.textContent = `$${total.toFixed(2)}`;
}


resetBtn.addEventListener('click', () => {
  payBill.value = '';
  splitValue.value = '';
  tipValue = null;

  baseAmountResult.textContent = "$0.00";
  tipAmountResult.textContent = "$0.00";
  perPersonResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
});
