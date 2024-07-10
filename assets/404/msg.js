const phrases = [
  "Too late to apologize",
  "Please be patient with me",
  "Pour your glass of wine",
  "So much to do and not enough time",
  "This girl been stressin' me"
];

const randomIndex = Math.floor(Math.random() * phrases.length);
const selectedPhrase = phrases[randomIndex];

const title = document.querySelector('.header-title');
title.textContent = selectedPhrase;

const words = selectedPhrase.split(' ');
title.innerHTML = '';

// Rebuilding text!
words.forEach((word, wordIndex) => {
  if (wordIndex > 0) {
    title.appendChild(document.createTextNode(' '));
  }
  const wordElement = document.createElement('span');
  wordElement.textContent = word;
  title.appendChild(wordElement);
});

const letters = title.querySelectorAll('span');

// Let's animate it
letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.style.animationDelay = `${0.08 * index}s`;
    letter.style.animationDuration = '0.6s';
  }, 0);
});
