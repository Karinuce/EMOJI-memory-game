const section = document.querySelector("section");

const getCardsInfo = () => [
    {imgSrc: "./emoji/glasses.png", name: "glasses"},
    {imgSrc: "./emoji/heart.png", name: "heart"},
    {imgSrc: "./emoji/laugh.png", name: "laugh"},
    {imgSrc: "./emoji/happy.png", name: "happy"},
    {imgSrc: "./emoji/crying.png", name: "crying"},
    {imgSrc: "./emoji/confused.png", name: "confused"},
    {imgSrc: "./emoji/shocked.png", name: "shocked"},
    {imgSrc: "./emoji/sleepy.png", name: "sleepy"},
    {imgSrc: "./emoji/glasses.png", name: "glasses"},
    {imgSrc: "./emoji/heart.png", name: "heart"},
    {imgSrc: "./emoji/laugh.png", name: "laugh"},
    {imgSrc: "./emoji/happy.png", name: "happy"},
    {imgSrc: "./emoji/crying.png", name: "crying"},
    {imgSrc: "./emoji/confused.png", name: "confused"},
    {imgSrc: "./emoji/shocked.png", name: "shocked"},
    {imgSrc: "./emoji/sleepy.png", name: "sleepy"},
];

const random = () => {
    const cards = getCardsInfo();
    cards.sort(() => Math.random() - 0.8);
    return cards;
};

const generator = () => {
    const cards = random();
    cards.forEach((item) => {
    const card = document.createElement("div");
    const frontCard = document.createElement("img");
    const backCard = document.createElement("div");

    card.addEventListener("click", (e) =>{
        card.classList.toggle("flippedCard");
        checking (e);
    });

    card.classList = "card";
    frontCard.classList = "frontCard";
    backCard.classList = "backCard";
    frontCard.src = item.imgSrc;
    card.setAttribute("name", item.name);

    section.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);
});
};

const checking = (e) => {
    console.log(e);
    const clicked = e.target;
    clicked.classList.add("flipped");
    const flipped = document.querySelectorAll(".flipped");
    console.log(flipped);
    if (flipped.length === 2) {
        if (
           flipped[0].getAttribute("name") === 
           flipped[1].getAttribute("name")
        ) {
           console.log("correct");
           flipped.forEach(card => {
           card.classList.remove("flipped");
           card.getElementsByClassName.pinterEvents = "none";
           });
        } else {
           console.log("wrong");
           flipped.forEach(card => {
               card.classList.remove("flipped");
               setTimeout(() => card.classList.remove("flippedCard"), 800);
           });
           tries--;
           numberOfTries.textContent = tries;
           if (tries === 0) {
           newGame();
           };
        }
    }
};

const numberOfTries = document.querySelector("span");
let tries = 7;
numberOfTries.textContent = tries;

const newGame = () => {
    let getCardsInfo = random();
    let frontCard = document.querySelectorAll(".frontCard");
    let cards = document.querySelectorAll(".card");
    getCardsInfo.forEach((item, index) => {
        cards[index].classList.remove("flippedCard");
        cards[index].getElementsByClassName.pointerEvents = "all";
        cards[index].setAttribute("name", item.name);
        frontCard[index].src = item.imgSrc;
    });
    const numberOfTries = document.querySelector("span");
    let tries = 7;
    numberOfTries.textContent = tries;
};

const flippedCard = document.querySelectorAll(".flippedCard");
    if (flippedCard.length === 16){
        restart();
        alert("Congrats! You won!");
};

generator();