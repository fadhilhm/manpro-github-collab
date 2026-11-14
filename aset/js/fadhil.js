const hiddenKing = document.getElementById("hidden-king");
const archmother = document.getElementById("archmother");
const body = document.querySelector("body");

const hiddenKingMusic = new Audio("../gambar/fadhil/hidden-king-ost.mp3");
const archmotherMusic = new Audio("../gambar/fadhil/archmother-ost.mp3");

hiddenKingMusic.loop = true;
hiddenKingMusic.volume = 0.15;

archmotherMusic.loop = true;
archmotherMusic.volume = 0.15;

hiddenKing.addEventListener("click", (event) => {
    body.classList.add("hidden-king-bg");
    body.classList.remove("archmother-bg")

    hiddenKingMusic.play();
    archmotherMusic.pause();
    archmotherMusic.currentTime = 0;
});

archmother.addEventListener("click", (event) => {
    body.classList.add("archmother-bg")
    body.classList.remove("hidden-king-bg");

    archmotherMusic.play();
    hiddenKingMusic.pause();
    hiddenKingMusic.currentTime = 0;
});