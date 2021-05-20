const links = [
  {
    subject: 'dms',
    url: 'https://meet.google.com/lookup/fl62oqn4kb?authuser=0&hs=179',
  },
  {
    subject: 'ci',
    url: 'https://meet.google.com/lookup/f55pnueayr?authuser=0&hs=179',
  },
  {
    subject: 'os',
    url: 'https://meet.google.com/lookup/gzoosfb3cq?authuser=0&hs=179',
  },
  {
    subject: 'coa',
    url: 'https://meet.google.com/lookup/fgohtz74gy?authuser=0&hs=179',
  },
  {
    subject: 'os-lab',
    url: 'https://meet.google.com/lookup/fovzsojpz4?authuser=0&hs=179',
  },
  {
    subject: 'gt',
    url: 'https://meet.google.com/lookup/ea6uhdtjbn?authuser=0&hs=179',
  },
  {
    subject: 'digital-lab',
    url: 'https://meet.google.com/lookup/a5sopjb25y?authuser=0&hs=179',
  },
  {
    subject: 'pe',
    url: 'https://meet.google.com/lookup/fs2hwqvcqf?authuser=0&hs=179',
  },
];

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let subject = '';
    if (button.classList.contains('dms')) subject = 'dms';
    if (button.classList.contains('ci')) subject = 'ci';
    if (button.classList.contains('os')) subject = 'os';
    if (button.classList.contains('coa')) subject = 'coa';
    if (button.classList.contains('os-lab')) subject = 'os-lab';
    if (button.classList.contains('digital-lab')) subject = 'digital-lab';
    if (button.classList.contains('gt')) subject = 'gt';
    if (button.classList.contains('pe')) subject = 'pe';

    goToPage(subject);
  });
});

function goToPage(subject) {
  console.log(subject);
  links.forEach((link) => {
    if (link.subject == subject) window.open(link.url, '_blank');
  });
}

// comments

// const buttons = document.querySelectorAll('.dms');
// const buttons = document.querySelectorAll('.ci');
// const buttons = document.querySelectorAll('.os');
// const buttons = document.querySelectorAll('.coa');
// const buttons = document.querySelector('.os-lab');
// const buttons = document.querySelectorAll('.gt');
// const buttons = document.querySelectorAll('.digital-lab');
// const buttons = document.querySelectorAll('.pe');

// if (button.classList.contains('ci'))
//   window.open(
//     'https://meet.google.com/lookup/fl62oqn4kb?authuser=0&hs=179',
//     '_blank'
//   );
