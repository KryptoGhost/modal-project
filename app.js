const modalBtn = document.querySelector(".modal-btn");
const modal =document.querySelector(".modal-overlay");
const closeBtn =document.querySelector(".close-btn");
const hero = document.querySelector(".hero");

modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
    if (hero.classList("open-modal")) {
        hero.classList.remove("open-modal");
    }
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("open-modal");
});