//surprise
const surpriseButton = document.getElementById("surprise");
const popup = document.getElementById("surprisePopup");
const closeButton = document.getElementById("closePopup");

//Open popup
surpriseButton.addEventListener("click", function () {
    popup.showModal();
});

//Close popup
closeButton.addEventListener("click", function () {
    popup.close();
});

// Customize button appearance
surpriseButton.textContent = " Surprise!! ";
surpriseButton.style.backgroundColor = "#356A9A";
surpriseButton.style.color = "white";
surpriseButton.style.fontSize = "18px";
surpriseButton.style.padding = "12px 25px";
surpriseButton.style.border = "none";
surpriseButton.style.borderRadius = "12px";
surpriseButton.style.cursor = "pointer";

//animated pet
const pet = document.getElementById("myPet");
const petButton = document.getElementById("petButton");
pet.style.fontSize = "200px";
//Different cat expressions
const petFrames = ["🐱", "😺", "😸", "😻", "😽"];

let currentFrame = 0;

//Animate the cat
setInterval(function () {
    currentFrame++;
    if (currentFrame >= petFrames.length) {
        currentFrame = 0;
    }
    pet.textContent = petFrames[currentFrame];
}, 600);

//Interaction when cat is clicked
petButton.addEventListener("click", function () {
    pet.textContent = "😻";
});

// Customize button appearance
petButton.textContent = " Pet The Cat!! ";
petButton.style.backgroundColor = "#356A9A";
petButton.style.color = "white";
petButton.style.fontSize = "18px";
petButton.style.padding = "12px 25px";
petButton.style.border = "none";
petButton.style.borderRadius = "12px";
petButton.style.cursor = "pointer";
// List of my skills and their percentages
const skills = [
    { name: "HTML", percentage: 80 },
    { name: "JavaScript", percentage: 65 },
    { name: "Java", percentage: 75 },
    { name: "SQL", percentage: 70 },
    { name: "Problem Solving", percentage: 85 }
];

// Get the skill chart container
const skillChart = document.getElementById("skillChart");

// Display each skill
skills.forEach(function (skill) {

    // Create skill name
    const skillName = document.createElement("p");
    skillName.textContent = skill.name + " - " + skill.percentage + "%";

    // Create progress bar
    const bar = document.createElement("progress");
    bar.max = 100;
    bar.value = skill.percentage;

    bar.style.width = "550px";
    bar.style.height = "30px";

    // Add everything to HTML
    skillChart.appendChild(skillName);
    skillChart.appendChild(bar);

});
// Get the background button
const bgButton = document.getElementById("changeBg");

// List of background colours
const backgrounds = [
    "lightblue",
    "lightpink",
    "lavender",
    "lightyellow",
    "lightgreen",
    "lightgray"
];

// Start with the first colour
let currentBackground = 0;

// Change background when button is clicked
bgButton.addEventListener("click", function() {

    document.body.style.backgroundColor =
        backgrounds[currentBackground];

    // Move to the next colour
    currentBackground++;

    // Return to the first colour when reaching the end
    if (currentBackground >= backgrounds.length) {
        currentBackground = 0;
    }

});
// Customize button appearance
bgButton.textContent = " Change My Background ";
bgButton.style.backgroundColor = "#356A9A";
bgButton.style.color = "white";
bgButton.style.fontSize = "18px";
bgButton.style.padding = "12px 25px";
bgButton.style.border = "none";
bgButton.style.borderRadius = "12px";
bgButton.style.cursor = "pointer";
document.body.style.fontSize = "40px";