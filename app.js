const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// VARIABLE
let today = new Date();
let day = today.getDay();
day = weekdays[day];
let month = today.getMonth();
month = months[month];
let date = today.getDate();

// SELECTOR
const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const footer = document.querySelector('footer');

// INVOKE FUNCTIONS
changeDisplay();
classMap();

// EVENT LISTNER
// Button:click
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    footer.classList.remove('hide-footer');
    subjects.forEach((sub) => {
      if (sub.periods.includes(parseInt(button.dataset.table))) {
        footer.innerHTML = `<div class="footer-main">
        <div class="heading">
          <h2>${sub.subject}</h2>
        </div>
        <div class="body">
          <div>
            <h2><span>${sub.name}</span></h2>
            <h2><span>faculty: </span>${sub.faculty}</h2>
            <h2><span>slot: </span>${sub.slot}</h2>
            <h2><span>subject code: </span> ${sub.subjectCode}</h2>
          </div>
          <div class="footer-buttons">
            <a href=${sub.classroomLink} target="_blank" class="classroom">Classroom</a>
            <a href=${sub.meetLink} target="_blank" class="meet">Meet</a>
          </div>
        </div>
      </div>`;
      }
    });
  });
});

// FUNCTIONS
// mapping classes
function classMap() {
  buttons.forEach((button) => {
    subjects.forEach((sub) => {
      if (sub.periods.includes(parseInt(button.dataset.table)))
        button.textContent = sub.subject;
    });
  });
}

// Change Display
function changeDisplay() {
  display.innerHTML = `<h4>${day}</h4>
          <h5>${month} ${date}</h5>`;
}
