let fselect = "";
let sselect = "";
let pressed = 0;

const cards = document.querySelectorAll(".all-cards, .cards");
cards.forEach ((card) => {
    card.addEventListener ("click", flipCard) => {
        card.classList.add("pressed");

    if (pressed === 0) {
        fselect = card.getAttribute("card");
        pressed++;
    } else {
        sselect = card.getAttribute("card");
        pressed = 0;
    };
    if (fselect === sselect) {
        const pressedCards = card.getAttribute("card" + fselect);
        pressedCards[0].classList.remove("pressed");
        pressedCards[1].classList.remove("pressed");
        pressedCards[0].classList.add("correct");
        pressedCards[1].classList.add("correct");
    };
});
});
