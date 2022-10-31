const body = document.querySelector("body");
const btnOpen = document.getElementById("btn-open");
const btnClose = document.querySelector("#btn-close");
const closeMenu = document.querySelectorAll("[data-close='menu']");
const menuLinks = document.querySelectorAll(".menu a");

if (body) {

    if (btnOpen) {
        btnOpen.addEventListener("click", () => {
            body.classList.add("open-menu");    
        });
    }
    
    if (btnClose) {
        btnClose.addEventListener("click", () => {
            body.classList.remove("open-menu");
        });    
    }

    if (closeMenu) {
        closeMenu.forEach((element) => {
            element.addEventListener('click', () => {
                body.classList.remove("open-menu");
            });
        });
    }

    if (menuLinks) {
        menuLinks.forEach((el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                body.classList.remove("open-menu");
            });
        });
    }

}