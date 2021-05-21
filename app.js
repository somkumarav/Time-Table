// LINKS FOR THE CLASSES
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

// SELECTOR
const buttons = document.querySelectorAll('.btn');

// EVENT LISTNER
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const subject = e.currentTarget.dataset.subject;
    console.log(subject);
    goToPage(subject);
  });
});

// FUNCTIONS
function goToPage(subject) {
  links.forEach((link) => {
    if (link.subject == subject) window.open(link.url, '_blank');
  });
}
