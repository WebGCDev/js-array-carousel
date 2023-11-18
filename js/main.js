//Creo array e inserisco immagini
const slides = [
  `img/01.jpg`,
  `img/02.jpg`,
  `img/03.jpg`,
  `img/04.jpg`,
  `img/05.jpg`,
];

//Creo costanti
const btnDown = document.getElementById(`down`);
const btnUp = document.getElementById(`up`);
const slideContainer = document.getElementById(`slide-container`);
let counterSLide = 0;

//Creo ciclo for per cambiare le immagini
for (let i = 0; i < slides.length; i++) {
  slideContainer.innerHTML += `
      <img class="slide d-none" src="${slides[i]}">
    `;
}

const slideSet = document.getElementsByClassName(`slide`);
slideSet[counterSLide].classList.remove(`d-none`);
