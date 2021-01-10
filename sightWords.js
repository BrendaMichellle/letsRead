const letters = ["a", "an", "at", "are", "as", "at", "and", "all", "be", "by", "but", "can", "did", "down", "do", "each", "from", "first", "find", "for", "he", "his", "had", "how", "has", "her", "have", "him", "in", "I", "if", "into", "is", "it", "its", "just", "know", "like", "my", "more", "she","the", "to", "they", "this", "there", "them", "then", "these", "two", "time", "than", "that", "their", "up", "use", "was", "with", "what", "were", "when", "we", "which", "will", "words", "where", "water", "who", "way", "you", "your"];


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