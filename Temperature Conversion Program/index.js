// TEMPERATURE CONVERSION PROGRAM
const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('checkBox1');
const toCelsius = document.getElementById('checkBox2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + '°F';
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + '°C';
  } else {
    result.textContent = 'Select the option';
  }
}
btn.addEventListener('click', () => {
  if (textBox.value == '') {
    result.textContent = 'Select a unit';
    return;
  }
  convert();
});
