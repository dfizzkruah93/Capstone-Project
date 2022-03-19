// Menu DOM
const openMenu = () => {
  document.querySelector('header').classList.add('visible');
  document.querySelector('.close-btn').classList.toggle('visible');
};
const closeMenu = () => {
  document.querySelector('header').classList.remove('visible');
  document.querySelector('.close-btn').classList.toggle('visible');
};

document.querySelector('.fa-bars').addEventListener('click', openMenu);
document.querySelector('.close-btn').addEventListener('click', closeMenu);
const links = document.querySelectorAll('.menu-link');
links.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Speakers dynamic load
const speakers = [
  {
    name: 'Sergey Brin',
    proffession:
      'American Business Magnate, Investor, Computer Scientist, and Internet Entrepreneur',
    description:
      'Sergy Brin is the Co-founder of Google',
    photo: './images/Sergey_Brin.jpg',
    alt: 'Brin',
  },
  {
    name: 'Elon Musk',
    proffession:
      'Entrepreneur, Investor and Business Magnate',
    description:
      'Elon Musk is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc',
    photo: './images/elon.jpg',
    alt: 'Elon',
  },
  {
    name: 'Larry Page',
    proffession:
      ' Computer Scientist, Investor and Internet Entrepreneur',
    description:
      'Larry Page is the Co-founders of Google ',
    photo: './images/larry.jpg',
    alt: 'Page',
  },
  {
    name: 'Jeff Bezos',
    proffession:
      ' Entrepreneur, Media Proprietor, Investor, Computer Engineer, and Commercial Astronaut',
    description:
      ' Jeff Bezos is the founder and executive chairman of Amazon.',
    photo: './images/bezos.jpg',
    alt: 'Bezos',
  },
  {
    name: 'Bill Gates',
    proffession:
      ' Business Magnate, Software Developer, Investor, Author ',
    description:
      ' Bill Gates is a co-founder of Microsoft',
    photo: './images/gates.jpg',
    alt: 'Gates',
  },
  {
    name: 'Christopher Hopper',
    proffession:
      'Founder',
    description:
      ' Co-founder of Aurora Solar and chairman of E.quinox, a charitable organization at Imperial College London,',
    photo: './images/chris-hopper.jpg',
    alt: 'Hopper',
  },
];
const generateSpeaker = (speaker) => {
  const container = document.createElement('div');
  const image = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const fullname = document.createElement('h3');
  const proffession = document.createElement('h4');
  const description = document.createElement('p');
  const information = document.createElement('div');
  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullname);
  information.appendChild(proffession);
  information.appendChild(description);
  container.className = 'container';
  image.className = 'big-image';
  chess.className = 'chess-image';
  photo.className = 'profile-image';
  fullname.className = 'full-name';
  proffession.className = 'profession';
  description.className = 'description';
  information.className = 'information';
  document.querySelector('.speakers').appendChild(container);
  fullname.innerText = speaker.name;
  chess.src = 'images/Chess_Board.png';
  photo.src = speaker.photo;
  photo.alt = speaker.alt;
  proffession.innerText = speaker.proffession;
  description.innerText = speaker.description;
};

speakers.map((speaker, index) => {
  if (window.innerWidth <= 768) {
    if (index < 2) {
      generateSpeaker(speaker);
    }
  } else {
    generateSpeaker(speaker);
  }
  return speaker;
});

const openMore = () => {
  speakers.map((speaker, index) => {
    if (index >= 2) generateSpeaker(speaker);
    return speaker;
  });
};

const moreBtn = document.querySelector('.more');
function removeMore() {
  moreBtn.classList.add('display-none');
}
moreBtn.addEventListener('click', openMore);
moreBtn.addEventListener('click', removeMore);
