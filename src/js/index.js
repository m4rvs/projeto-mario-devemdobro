const trailerButton = document.querySelector(".trailer-button");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const video = document.querySelector("#video");
const videoLink = video.src

function modalToggle() {
    modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", videoLink);
});

closeModalButton.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", "");
});

