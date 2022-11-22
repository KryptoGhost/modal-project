const modalBtn = document.querySelector(".modal-btn");
const modal =document.querySelector(".modal-overlay");
const closeBtn =document.querySelector(".close-btn");
const hero = document.querySelector(".hero");

modalBtn.addEventListener("click", function() {
    hero.classList.remove("show");
    modal.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
    hero.classList.add("show");
});