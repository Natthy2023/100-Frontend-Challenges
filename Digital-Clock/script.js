document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

function updateClock() {
  const now = new Date();

  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const isPM = hour >= 12;

  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;

  const formattedHour = String(hour).padStart(2, '0');
  const formattedMinute = String(minute).padStart(2, '0');
  const formattedSecond = String(second).padStart(2, '0');
  const period = isPM ? 'PM' : 'AM';

  document.getElementById('hour').textContent = formattedHour;
  document.getElementById('minute').textContent = formattedMinute;
  document.getElementById('second').textContent = formattedSecond;
  document.getElementById('prepend').textContent = period;

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  document.querySelector('.day').textContent = day;
  document.querySelector('.date').textContent = `${month} ${date}, ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
