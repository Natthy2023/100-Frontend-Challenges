let day = document.querySelector('.day');
let hr = document.querySelector('.hour');
let min = document.querySelector('.minute');
let sec = document.querySelector('.second');

const targetDate = new Date('2025-10-26T23:59:59').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdown);
    document.querySelector('.time-banner').textContent = "Time's up!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.textContent = String(days).padStart(2, '0');
  hr.textContent = String(hours).padStart(2, '0');
  min.textContent = String(minutes).padStart(2, '0');
  sec.textContent = String(seconds).padStart(2, '0');
}, 1000);
