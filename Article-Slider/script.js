const contents = [
  {
    count: 1,
    coverImg: 'images/solomon-kassa.png',
    title: 'The dawn of artificial general intelligence:',
    subtitle: 'A new frontier in machine cognition',
    passage:
      'Artificial General Intelligence (AGI), the concept of machines possessing human-like cognitive abilities, is rapidly transitioning from theoretical speculation to practical pursuit. Unlike narrow AI systems tailored to specific tasks, AGI aspires to understand, learn, and adapt across a broad range of challenges — a development that could redefine the boundaries of technology and intelligence.',
    userPhoto: './images/solomon-kassa.png',
    personName: 'Solomon Kassa',
    date: '13 Mar, 2024'
  },
  {
    count: 2,
    coverImg: 'images/betelihem-dessie.png',
    title: 'The future of human-AI collaboration:',
    subtitle: 'Synergy between minds and machines',
    passage:
      'As AI systems grow more sophisticated, a new era of collaboration between humans and intelligent machines is emerging. Rather than replacing human workers, these systems are becoming valuable partners — enhancing decision-making, automating complex tasks, and unlocking creative potential in ways previously unimaginable.',
    userPhoto: './images/betelihem-dessie.png',
    personName: 'Betelihem Dessie',
    date: '02 May, 2024'
  },
  {
    count: 3,
    coverImg: 'images/jelani-nelson.jpeg',
    title: 'The promise of brain-computer interfaces:',
    subtitle: 'Bridging thought and technology',
    passage:
      'Brain-computer interfaces (BCIs) are pushing the boundaries of communication and control, allowing users to interact with machines using neural signals alone. What was once a sci-fi dream is now empowering medical breakthroughs and offering a glimpse into a future where thoughts can control digital environments directly.',
    userPhoto: './images/jelani-nelson.jpeg',
    personName: 'Jelani Nelson',
    date: '23 Jul, 2022'
  },
  {
    count: 4,
    coverImg: 'images/Timnit_Gebru.jpg',
    title: 'The transformation of space travel:',
    subtitle: 'From exploration to habitation',
    passage:
      'Space travel is undergoing a dramatic transformation, shifting from government-led missions to commercial ventures aimed at permanent presence beyond Earth. Reusable rockets, space tourism, and lunar colonization efforts are redefining our relationship with the cosmos — opening the door to a multi-planetary civilization.',
    userPhoto: './images/Timnit_Gebru.jpg',
    personName: 'Timnit Gebru',
    date: '13 Mar, 2021'
  },
  {
    count: 5,
    coverImg: 'images/redietAbebe.jpg',
    title: 'The rise of quantum computing:',
    subtitle: 'A paradigm shift in technology',
    passage:
      'Quantum computing, once relegated to the realm of science fiction, is now becoming a tangible reality, promising to revolutionize the way we process information. Unlike classical computers that use bits to represent either a 0 or a 1, quantum computers leverage quantum bits, or qubits, which',
    userPhoto: './images/redietAbebe.jpg',
    personName: 'Rediet Abebe',
    date: '24 Feb, 2024'
  }
];
const startButtons = document.querySelectorAll('.btn');
const counter = document.getElementById('count');
const coverPhoto = document.getElementById('cover-photo');
const title = document.querySelector('.main-content h2');
const subtitle = document.querySelector('.main-content h3');
const passage = document.querySelector('.main-content p');
const profileImg = document.querySelector('.profile-box img');
const userName = document.querySelector('.title p');
const postDate = document.querySelector('.title span');
const shareBtn = document.querySelector('.share-btn button');
const sharePopUp = document.querySelector('.share-pop-up');
const leftBtn = document.querySelector('.left-arrow button');
const rightBtn = document.querySelector('.right-arrow button');

// Default display
let index = 0;
pageSlider(index);

function pageSlider(index) {
  counter.innerHTML = contents[index].count;
  coverPhoto.src = contents[index].coverImg;
  title.innerHTML = contents[index].title;
  subtitle.innerHTML = contents[index].subtitle;
  passage.innerHTML = contents[index].passage;
  profileImg.src = contents[index].userPhoto;
  userName.innerHTML = contents[index].personName;
  postDate.innerHTML = contents[index].date;
}

rightBtn.addEventListener('click', () => {
  index = (index + 1) % contents.length;
  pageSlider(index);
});

leftBtn.addEventListener('click', () => {
  index = (index - 1 + contents.length) % contents.length;
  pageSlider(index);
});

shareBtn.addEventListener('click', () => {
  sharePopUp.classList.toggle("display");
});
