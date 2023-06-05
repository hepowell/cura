
// Optional: Randomize animation delay for each letter
const animatedLetters = document.querySelectorAll('.animated-letter');
animatedLetters.forEach((letter) => {
  letter.style.animationDelay = Math.random() + 's';
});

function playSong() {
    setTimeout(function(){
        const audio = document.getElementById("myAudio");
        audio.play();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  const firstLetters = document.querySelectorAll('.first-letter');
  const paragraphs = document.querySelectorAll('.hidden-paragraph');

  firstLetters.forEach((letter) => {
    letter.addEventListener('mouseover', revealParagraph);
  });

  function revealParagraph(event) {
    // Hide all paragraphs
    paragraphs.forEach((paragraph) => {
      paragraph.classList.remove('visible-paragraph');
      paragraph.classList.add('hidden-paragraph');
    });

    // Show the corresponding paragraph
    const letterIndex = Array.from(firstLetters).indexOf(event.target);
    paragraphs[letterIndex].classList.remove('hidden-paragraph');
    paragraphs[letterIndex].classList.add('visible-paragraph');
  }
});
