const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/*const letters = [
  {
    letter: 'A',
    sound: 'Uh', 
  },
  {
    letter: 'B',
    sound: 'Buh', 
  },
  {
    letter: 'C',
    sound: 'Kuh', 
  },
  {
    letter: 'D',
    sound: 'Duh', 
  },
  {
    letter: 'E',
    sound: 'Eh', 
  },
  {
    letter: 'G',
    sound: 'Guh', 
  },
  {
    letter: 'H',
    sound: 'Huh', 
  },
];*/


//----SELECTORS
const btnLeft = document.getElementById('btn__left'); 
const btnRight = document.getElementById('btn__right');
const btnRandom = document.getElementById('btn__random');
const letterSpace = document.getElementById('letter__space');
let currentLetter = 3; 

//----INITIAL CONTENT LOADED
window.addEventListener('DOMContentLoaded', function () {
  showLetter(currentLetter);
});

//-----SHOW CURRENT LETTER 
function showLetter(letter) {
  const thisLetter = letters[letter];
  letterSpace.textContent = letters[letter];
}

//----LEFT BUTTON
btnLeft.addEventListener('click', function () {
  currentLetter--; 
  if (currentLetter < 0) {
    currentLetter = letters.length - 1; 
  };
  return showLetter(currentLetter);
});

//----RIGHT BUTTON
btnRight.addEventListener('click', function () {
  currentLetter++; 
  if (currentLetter > letters.length - 1){
    currentLetter = 0; 
  }
  return showLetter(currentLetter);
});


//-----RANDOM BUTTON

btnRandom.addEventListener('click', function() {
  currentLetter = Math.floor(Math.random() * letters.length); 
  return showLetter(currentLetter);
});