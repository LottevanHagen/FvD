// JavaScript Document
console.log("hi");

/* 1. Selecteer de button waar je op kan klikken (hamburger icoontje) */
var openButton = document.querySelector("header section > section button:first-of-type");
var deNav = document.querySelector("nav");

/* 2. Luister naar een klik op die button en voer een functie uit */
openButton.addEventListener("click", openMenu);

/* 3. Zet een class op de navigatie om open te klappen */
function openMenu() {
    deNav.classList.toggle("toonMenu");
}

var sluitButton = document.querySelector("header nav button");

// // stap 2 - laat die button luisteren naar kliks
sluitButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
var deNav = document.querySelector("nav");
deNav.classList.remove("toonMenu");
}