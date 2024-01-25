const phrases = [
  "It's too late to apologize",
  "Girl I got ya so high, and I know u like",
  "U look so proud standing there, with a frown and a cigarette",
  "No teardrops on the dance floor, not tonight",
  "I can't live, with or without you",
  "I was doing fine without ya...till i saw ur face..."
];

// Select a random phrase from the array
const randomIndex = Math.floor(Math.random() * phrases.length);
const selectedPhrase = phrases[randomIndex];

// Select the .header-title element
const title = document.querySelector('.header-title');

// Set the text content of the .header-title element to the selected phrase
title.textContent = selectedPhrase;

// Split the text into words
const words = selectedPhrase.split(' ');

// Clear the existing content of .header-title
title.innerHTML = '';

// Rebuild the text with span elements for each letter
words.forEach((word, wordIndex) => {
  if (wordIndex > 0) {
    title.appendChild(document.createTextNode(' '));
  }

  const wordElement = document.createElement('span');
  wordElement.textContent = word;
  title.appendChild(wordElement);
});

// Select all the span elements within .header-title
const letters = title.querySelectorAll('span');

// Apply animation to each letter
letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.style.animationDelay = `${0.09 * index}s`;
    letter.style.animationDuration = '0.5s';
  }, 0);
});
