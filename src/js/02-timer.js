import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const timePicker = document.querySelector('.datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(timePicker, options);
// ================================================
// const newYear = new Date('2022-12-31T23:59:59');

// setInterval(() => {
//   const currentTime = new Date();
//   console.log('Осталось до нового года :', newYear - currentTime);
// }, 1000);
// ================================================
