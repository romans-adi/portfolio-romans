import '../css/styles.css'

// BURGER

const topNav = document.querySelector('.top-navigation');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
const wrapper = document.getElementById('wrapper');
const burgerLineTop = document.querySelector('.burger-line-top');
const burgerLineBottom = document.querySelector('.burger-line-bottom');

function toggleBurger() {
  const visibility = topNav.getAttribute('data-visible');
  const isActive = visibility === 'false';
  navToggle.setAttribute('aria-expanded', isActive);
  topNav.setAttribute('data-visible', isActive);
  topNav.setAttribute('aria-expanded', isActive);
  wrapper.className = isActive ? 'wrapper inactive' : 'wrapper';
  burgerLineBottom.style.y = isActive ? '45' : '20';
  burgerLineTop.style.y = isActive ? '45' : '80';
}

wrapper.addEventListener('click', () => {
  if (topNav.getAttribute('data-visible') === 'true') toggleBurger();
});

navToggle.addEventListener('click', () => {
  toggleBurger();
});

navLink.forEach((navLink) => navLink.addEventListener('click', () => {
  toggleBurger();
}));

const container = document.getElementById('projects-set');

const projects = [
  {
    id: 'project-1',
    prName: 'Portfolio',
    description:
      "Roman's Portfolio is a project that showcases his skills and tools used in previous works, providing information about his experience and expertise.",
    mobileImg: 'assets/img/screenshots/portfolio-phone.jpg',
    desktopImg: 'assets/img/screenshots/portfolio.png',
    mobileImgWebP: 'assets/img/screenshots/portfolio-phone.webp',
    desktopImgWebP: 'assets/img/screenshots/portfolio.webp',
    technologies: ['CSS', 'JavaScript', 'HTML', 'Webpack', 'SCSS'],
    liveVersion: 'https://romans-adi.github.io/portfolio-romans/',
    source: 'https://github.com/romans-adi/romans-adi.github.io',
  },

  {
    id: 'project-2',
    prName: 'To-Do List',
    description:
      "The Simple To Do List is a single-page application designed to help users add and remove tasks from a list. It features a class with well-defined methods and utilizes local storage to store data. The project is built using modular JavaScript and implements the latest ES6 syntax and features.",
    mobileImg: 'assets/img/screenshots/todo-phone.jpg',
    desktopImg: 'assets/img/screenshots/todo.png',
    mobileImgWebP: 'assets/img/screenshots/todo-phone.webp',
    desktopImgWebP: 'assets/img/screenshots/todo.webp',
    technologies: ['CSS', 'JavaScript', 'HTML', 'Webpack', 'Jest'],
    liveVersion: 'https://romans-adi.github.io/todo-app/',
    source: 'https://github.com/romans-adi/todo-app',
  },
  {
    id: 'project-3',
    prName: 'Awesome Books',
    description:
      "This project is a mid-fidelity single-page application (SPA) that enables users to add and remove books from a list.",
    mobileImg: 'assets/img/screenshots/awesome-phone.jpg',
    desktopImg: 'assets/img/screenshots/awesome.png',
    mobileImgWebP: 'assets/img/screenshots/awesome-phone.webp',
    desktopImgWebP: 'assets/img/screenshots/awesome.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveVersion: 'https://romans-adi.github.io/awesome-books/',
    source: 'https://github.com/romans-adi/awesome-books',
  },
  {
    id: 'project-4',
    prName: 'ValMusic',
    description:
      "This website presents a realistic and immersive representation of a software engineering studio, featuring multiple pages with interactive media that showcase the company's services and culture.",
    mobileImg: 'assets/img/screenshots/valmusic-phone.jpg',
    desktopImg: 'assets/img/screenshots/valmusic.png',
    mobileImgWebP: 'assets/img/screenshots/valmusic-phone.webp',
    desktopImgWebP: 'assets/img/screenshots/valmusic.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery', 'Tailwind'],
    liveVersion: 'https://valmusic.co.uk/',
    source: 'https://github.com/romans-adi/valmusic',
  },
  {
    id: 'project-5',
    prName: 'LOL Draft 2023',
    description:
      "The project centers around a fictional event with all names, cities, and venues generated by free AI generators and/or the project author.",
    mobileImg: 'assets/img/screenshots/lol-drafts-phone.jpg',
    desktopImg: 'assets/img/screenshots/lol-draft.png',
    mobileImgWebP: 'assets/img/screenshots/lol-drafts-phone.webp',
    desktopImgWebP: 'assets/img/screenshots/lol-draft.webp',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveVersion: 'https://romans-adi.github.io/lol-draft-2023/',
    source: 'https://github.com/romans-adi/lol-draft-2023',
  },
];

// CREATING CARDS

projects.forEach((project) => {
  container.innerHTML += `
    <div class="project-card relative" id="${project.id}">
      <picture class="placeholder-img">
        <h3 class="project-card-heading">${project.prName}</h3>
        <source srcset="${project.mobileImgWebP}" type="image/webp" />
        <source srcset="${project.mobileImg}" type="image" />
        <img src="${project.mobileImg}" width="100%" alt="project-screenshot" class="project-screenshot project-0">
      </picture>
      <div class="project-card-content">
        <button type="button" class="btn-success btn-see-project btn-open">See Project</button>
        <div class="modal-overlay" id="modal-overlay">
  <div class="modal">
  <div class="flex w-full">
            <h3 class="modal-heading flex space-between">${project.prName}
            <button class="modal-toggle btn-close">
            <svg class="modal-close" viewBox="0 0 50 50" width="14" height="14">
               <line x1="0" y1="0" x2="50" y2="50" />
               <line x1="50" y1="0" x2="0" y2="50" />
            </svg>
          </button></h3>
    </div>
    <div class="modal-bg modal-exit"></div>
    <div class="modal-container">
      <div class="img-container">
        <img class="modal-mobile-img" src="${project.mobileImg}" alt="modal-illustration">
        <img class="modal-desktop-img"  src="${project.desktopImg}" alt="modal-illustration">
      </div>
      <div class="modal-main-layout">
        <div class="top">
          <ul class="tools-list">
            ${project.technologies.map(tool => `<li class="tool">${tool}</li>`).join('')}
          </ul>
        </div>
        <p>${project.description}</p>
        <div class="bottom">
          <div class="modal-btn-group">
            <a href="${project.liveVersion}" target=_blank>
              <button type="button" class="btn-success btn-success-modal see-live">See Live</button>
            </a>
            <a href="${project.source}" target=_blank>
              <button type="button" class="btn-success btn-success-modal source">See Source</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  `;
});

// MODAL WINDOW

const modalBtns = document.querySelectorAll('.btn-open');
const modals = document.querySelectorAll('.modal');
const overlays = document.querySelectorAll('.modal-overlay');
const card = document.querySelectorAll('.project-card')
const workHeading = document.querySelector('.works-heading');
const worksSection = document.querySelector('#works');
const mainSection = document.querySelector('main');


function openModal(index) {
  modals[index].classList.add('active');
  overlays[index].classList.add('active');
  overlays.forEach(updateOverlayPosition);
  container.style.margin = '0';
  card[index].classList.add('modal-active');
  card[index].style.height = '100vh';
  topNav.style.display = 'none';
  workHeading.style.display = 'none';
  worksSection.style.padding = '0';
  mainSection.scrollIntoView({ behavior: 'smooth' });
  mainSection.style.padding = '0';
  worksSection.style.marginTop = '0';
  document.body.style.overflow = 'hidden';
  card.forEach((c, j) => {
    if (j !== index) {
      c.classList.add('hidden');
    }
  });
  card[index].classList.add('modal-active');
}

function resetStyles() {
  container.style.margin = '';
  card.forEach((c) => {
    c.style.height = '';
    c.style.marginTop = '';
  });
  topNav.style.display = 'flex';
  workHeading.style.display = '';
  worksSection.style.padding = '';
  mainSection.style.padding = '';
  worksSection.style.marginTop = '';
  document.body.style.overflow = 'auto';
}

function closeModal(index) {
  modals[index].classList.remove('active');
  overlays[index].classList.remove('active');
  container.style.margin = '0 auto';
  card[index].classList.remove('modal-active');
  card[index].style.height = '100%';
  card[index].style.marginTop = '0';
  topNav.style.display = 'flex';
  document.body.style.overflow = 'auto';
  card.forEach((c, j) => {
    c.classList.remove('hidden');
    c.classList.remove('modal-active');
  });
  resetStyles();
}

function updateOverlayPosition(overlay) {
  overlay.style.top = 0;
  overlay.style.height = '100vh';
}

modalBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    openModal(i);
  });
});

const closeBtns = document.querySelectorAll('.btn-close');
closeBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    closeModal(i);
  });
});

// VALIDATION

const form = document.getElementById('contact-form');

function switchErrorColor(variable) {
  if (variable.classList.contains('transparent')) {
    variable.classList.remove('transparent');
    variable.classList.add('red');
  }
}

form.addEventListener('input', () => {
  const email = document.getElementById('email').value;
  const emailInput = document.getElementById('email');
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z]{2,3}$/g;
  if (email.match(regex)) {
    emailInput.classList.add('valid-input');
  } else {
    emailInput.classList.remove('valid-input');
  }
});

form.addEventListener('submit', (e) => {
  const errorMessage = document.querySelector('.error');
  const email = document.getElementById('email').value;
  const regex = /^[a-z]+@[a-z0-9-]+\.[a-z]{2,3}$/g;
  if (!email.match(regex)) {
    switchErrorColor(errorMessage);
    e.preventDefault();
  }
  return true;
});

const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const formData = JSON.parse(localStorage.getItem('formData')) || {};

if (formData.name) {
  nameInput.value = formData.name;
}

if (formData.email) {
  emailInput.value = formData.email;
}

if (formData.comments) {
  messageInput.value = formData.message;
}

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
  nameInput.value = savedData.username;
}

form.addEventListener('submit', () => {
  localStorage.clear();
});
