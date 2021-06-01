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
let course;

// SELECTOR
const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const footer = document.querySelector('footer');

// EVENT LISTNER
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    course = button.textContent;
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
            <a href=${sub.meetLink} target="_blank" class="meet">meet</a>
          </div>
        </div>
      </div>`;
      }
    });
  });
});

// FUNCTIONS

// Change Display
display.innerHTML = `<h4>${day}</h4>
          <h5>${month} ${date}</h5>`;

// Go to page function

// mapping classes
classMap();
function classMap() {
  buttons.forEach((button) => {
    subjects.forEach((sub) => {
      if (sub.periods.includes(parseInt(button.dataset.table)))
        button.textContent = sub.subject;
    });
  });
}

/* <div class="footer-main">
  <div class="heading">
    <h2>${sub.subject}</h2>
  </div>
  <div class="body">
    <div>
      <h2>
        <span>${sub.name}</span>
      </h2>
      <h2>
        <span>faculty: </span>${sub.faculty}
      </h2>
      <h2>
        <span>slot: </span>${sub.slot}
      </h2>
      <h2>
        <span>subject code: </span> ${sub.subjectCode}
      </h2>
    </div>
    <div class="footer-buttons">
      <button class="classroom">Classroom</button>
      <button class="meet">Meet</button>
    </div>
  </div>
</div>; */
