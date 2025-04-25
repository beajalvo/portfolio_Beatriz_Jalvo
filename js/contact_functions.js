const navegation = document.querySelector("nav"); //to select from html the nav
const buttons = document.querySelectorAll (".open,.close"); //to select from html the buttons to open and close the nav
const circle = document.querySelector(".contactInfo .circle"); //to select the circle 
const texts = document.querySelectorAll(".contactInfo .circle .text"); //to select the text in the circle
const colors = ["blue","black","crimson"]; //array containing the colors that the circle can switch between

buttons.forEach( button => {
    button.addEventListener("click",() => {
        navegation.classList.toggle("expand"); // when clicking the menu, to view the complete menu with all the pages
    });
});

let index = 0;

circle.addEventListener("click", () => {
    console.log("ok");

    //Changes the text
    texts.forEach(text => text.classList.remove("visible")); // Remove the class 'visible' from all text elements

    texts[index].classList.add("visible");  // Add the 'visible' class to the current text element

    // Change the circle's color
    circle.classList.remove(...colors);  // Removes all the color classes (blue, black, crimson) from the circle. We use the spread syntax (...) to remove each color from the colors array.

    circle.classList.add(colors[index]); // Adds the color class corresponding to the current index. The circle's background color will now change to the color from the colors array based on the index.[0 - blue, 1 black , 2 crimson]

    index = (index + 1 === texts.length) ? 0 : index + 1;  // using a ternary operator, makes the index loop back to 0 when it exceeds the length of the texts array
});

