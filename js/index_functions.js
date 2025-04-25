const navegation = document.querySelector("nav"); //to select from html the nav
const buttons = document.querySelectorAll (".open,.close"); //to select from html the buttons to open and close the nav

buttons.forEach( button => {
    button.addEventListener("click",() => {
        navegation.classList.toggle("expand"); // when clicking the menu, to view the complete menu with all the pages
    });
});