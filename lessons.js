const lessonsList = [
  {
    id: 1, 
    title: 'Letters', 
    desc: 'Practice letter names.',
    link: 'lessons/letters.html',
    img: 'img/penguin.png',
  }, 
  {
    id: 2, 
    title: 'Letter Sounds', 
    desc: 'Practice letter sounds.',
    link: 'lessons/letterSounds.html',
    img: 'img/elephant.png',
  }, 
  {
    id: 3, 
    title: 'Letter Blends', 
    desc: 'Practice letter blends.',
    link: 'lessons/letterBlends.html',
    img: 'img/lion.png',
  },
  {
    id: 4, 
    title: 'CVC Words', 
    desc: 'Practice consonant vowel consonant (CVC) words.',
    link: 'lessons/cvc.html',
    img: 'img/mouse.png',
  },
  {
    id: 5, 
    title: 'Sight Words', 
    desc: 'Practice sight words.',
    link: 'lessons/sightWords.html',
    img: 'img/panda.png',
  },
  {
    id: 6, 
    title: 'Pre Reader', 
    desc: 'Start reading with short one word pre readers.',
    link: 'lessons/prereader.html',
    img: 'img/zebra.png',
  },
  {
    id: 7, 
    title: 'Reader', 
    desc: 'Practice reading with readers.',
    link: 'lessons/reader.html',
    img: 'img/pig.png',
  },
];

const lessonsContainer = document.querySelector('.lessons__container'); 

window.addEventListener('DOMContentLoaded', function() {
  displayLessonsList(lessonsList);
});

function displayLessonsList(lessonItems) {
  let displayLessons = lessonItems.map(function (item) {
    return `<div class="lesson">
  <h2 class="lesson__title">${item.title}</h2>
  <p class="lesson__desc">${item.desc}</p>
  <img class="lesson__img" src="${item.img}" alt="">
  <button class="lesson__btn--start"> 
    <a class="lesson__btn--link" href="${item.link}">Start<i class="fas fa-caret-right"></i></a> 
  </button>
</div>`
  ;
  });
  displayLessons = displayLessons.join("");
  lessonsContainer.innerHTML = displayLessons;
};
