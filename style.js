let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let toggleButtonClose = document.querySelector(".toggle-button__close");

toggleButton.addEventListener("click", function() {
    mobileNav.style.display = "block";
});

toggleButtonClose.addEventListener ("click", function() {
    mobileNav.style.display = "none";
});