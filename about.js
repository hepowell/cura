const firstLetters = document.querySelectorAll('.first-letter');
const paragraphs = document.querySelectorAll('.hidden-paragraph');

firstLetters.forEach((letter, index) => {
  letter.addEventListener('mouseover', () => {
    paragraphs[index].classList.add('visible-paragraph');
  });

  letter.addEventListener('mouseout', () => {
    paragraphs[index].classList.remove('visible-paragraph');
  });
});
