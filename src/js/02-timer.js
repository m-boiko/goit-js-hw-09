import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Swal from 'sweetalert2';

const timePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

const counterDays = document.querySelector('[data-days]');
const counterHours = document.querySelector('[data-hours]');
const counterMinutes = document.querySelector('[data-minutes]');
const counterSeconds = document.querySelector('[data-seconds]');

let selectedDate = null;
let currentDate = null;
let intervalId = null;
let delta = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = options.defaultDate.getTime();

    if (currentDate > selectedDate) {
      btnStart.disablet = true;
      Swal.fire('Please choose a date in the future');
      return;
    } else {
      btnStart.disabled = false;
    }
  },
};
flatpickr(timePicker, options);

btnStart.addEventListener('click', onStart);
btnStart.disabled = true;

function onStart() {
  timePicker.disabled = true;
  btnStart.disabled = true;
  intervalId = setInterval(() => {
    if (selectedDate - currentDate < 999) {
      clearInterval(intervalId);
      return;
    } else {
      currentDate += 1000;
      delta = Math.floor(selectedDate - currentDate);
      convertMs(delta);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  createMarkUp({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function createMarkUp({ days, hours, minutes, seconds }) {
  counterDays.textContent = days;
  counterHours.textContent = hours;
  counterMinutes.textContent = minutes;
  counterSeconds.textContent = seconds;
}
