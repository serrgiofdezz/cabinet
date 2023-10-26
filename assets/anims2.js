const title = document.querySelector('.header-title');
const text = title.textContent;
title.textContent = '';

// Split the text into words
const words = text.split(' ');

words.forEach((word, wordIndex) => {
  if (wordIndex > 0) {
    // Add a space between words
    title.appendChild(document.createTextNode(' '));
  }

  const wordElement = document.createElement('span');
  wordElement.textContent = word;
  title.appendChild(wordElement);
});

const letters = title.querySelectorAll('span');
letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.style.animationDelay = `${0.22 * index}s`;
    letter.style.animationDuration = '0.5s';
  }, 0);
});
