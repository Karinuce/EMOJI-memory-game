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
    });

    card.classList = "card";
    frontCard.classList = "frontCard";
    backCard.classList = "backCard";

    frontCard.src = item.imgSrc;

    section.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);
});
};

generator();