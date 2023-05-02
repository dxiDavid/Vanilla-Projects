const button1 = document.querySelector(".share-btn");
const button2 = document.querySelector(".share-btn-alt");
const shareDiv = document.querySelector(".share-section");
const socials = document.querySelectorAll(".social-link");


button1.addEventListener("click", () => {
    shareDiv.classList.toggle("show-pop-up");
    fadeElements()
})

button2.addEventListener("click", () => {
    shareDiv.classList.toggle("show-pop-up");
    fadeElements()
})


function fadeElements() {
    socials.forEach((element, index) => {
        element.style.animation = `sequetial-fade 0.3s ${index * 0.15}s ease forwards`;
    });
}