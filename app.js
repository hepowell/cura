
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