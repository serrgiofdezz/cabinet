const title = document.querySelector('.header-title');
const text = title.textContent;
title.textContent = '';

for (const char of text) {
  const element = document.createElement('span');
  if (char === ' ') {
    element.innerHTML = '&nbsp;'; // Use a non-breaking space for spaces
  } else {
    element.textContent = char;
  }
  title.appendChild(element);
}

const letters = title.querySelectorAll('span');
letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.style.animationDelay = `${0.03 * index}s`;
    letter.style.animationDuration = '0.5s';
  }, 0);
});
