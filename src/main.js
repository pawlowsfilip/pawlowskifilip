const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar__menu");

openBtn.addEventListener("click", ()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", ()=>{
    closeBtn.classList.toggle("hide");
    openBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
});