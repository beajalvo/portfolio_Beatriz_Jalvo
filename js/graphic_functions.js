const navigation = document.querySelector("nav"); //to select from html the nav
const buttons = document.querySelectorAll (".open,.close"); //to select from html the buttons to open and close the nav
const tops = document.querySelectorAll(".containerTop button"); // To select from html the buttons to change between projects 
const bottom = document.querySelectorAll(".containerBottom .container") // to select the container of the projects
const images = document.querySelectorAll(".containerBottom a"); // to select ALL the links to the images inside the containerBottom
const modal = document.querySelector(".modal"); // to select the modal 
const imgModal = document.querySelector(".modal img"); // to select the images in the modal 
const visible = document.querySelectorAll(".visible");

console.log(window.getComputedStyle(modal).display);

// to use the buttons of the menu

buttons.forEach( button => {
    button.addEventListener("click",() => {
        navigation.classList.toggle("expand"); // when clicking the menu, to view the complete menu with all the pages
    });
});

// to use the buttons to see the projects below and change to see each one

tops.forEach( (top,i) => {
    tops[i].addEventListener("click", () => {

        document.querySelectorAll(".active").forEach( a => a.classList.remove("active")); // to remove the class "active" of the two elements with it
    
        // And here we add the class "active" to the one's we want
        top.classList.add("active"); 
        bottom[i].classList.add("active");  
        
        //reset to the first .galery inside the active container and add class "active"
        const galleries = bottom[i].querySelectorAll(".gallery");
        if (galleries.length > 0) {
            galleries[0].classList.add("active");
        }
    });
});

// Gallery carousel for each project
document.querySelectorAll(".container").forEach(container => {
    const galleries = container.querySelectorAll(".gallery"); 
    const prev = container.querySelector(".prev"); // to select the button for the previous image
    const next = container.querySelector(".next"); // to select the button for the next image

    let index = 0; // the index keeps track of which gallery image is currently active

    function showGallery(index) {
        galleries.forEach(g => g.classList.remove("active")); // to hide all the .galery elements by removing the "active"
        galleries[index].classList.add("active"); // to show one .galery by adding active to the one at the current index
    }

    if (prev && next) {
        prev.addEventListener("click", () => {
            if (index === 0) { 
                index = galleries.length - 1; // If yes, it jumps to the last image
            } else {
                index -= 1; // If no, it just goes to previous image.
            }
            showGallery(index); //Then it updates the display with showGallery()
        });

        next.addEventListener("click", () => {
            if (index === galleries.length - 1) {
                index = 0; // If you’re at the last image, it goes to first image
            } else {
                index += 1; // Else, it just goes to the next one
            }
            showGallery(index); //Then it updates the display with showGallery() as before
        });
    }
});

// to click on the image of the project and see it in full screen and add the class "visible"

images.forEach( image => { 
    image.addEventListener("click", event => {
        event.preventDefault(); // Prevent default anchor link behavior
        
        const href = image.getAttribute("href"); // Get the href attribute (image source)
        console.log("Image clicked, href:", href); // Log the href to debug

        // To the image in the modal, its src is set to the href of the clicked thumbnail
        imgModal.setAttribute("src", image.getAttribute("href")); // To put the src of the modal image to the href of the element I just clicked on
        console.log("Modal image source:", imgModal.getAttribute("src"));

        modal.classList.add("visible"); // show the modal
        console.log(modal.classList);
    });
});


//when you click the modal if you want to exit click anywhere, and it removes the class "visible"

modal.addEventListener("click", () => {
    console.log("Modal clicked - closing it"); // Confirm this runs
    modal.classList.remove("visible");
}); 





