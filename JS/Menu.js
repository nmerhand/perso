function displayMenu() {
    let menuNav = document.getElementById("menu-nav");

    // Vérifie si le menu est déjà ouvert
    if (menuNav.classList.contains("menu-visible")) {
        menuNav.classList.remove("menu-visible"); // Ferme le menu
    } else {
        menuNav.classList.add("menu-visible"); // Ouvre le menu
    }
}

document.addEventListener("click", function (event) {
    let menuNav = document.getElementById("menu-nav");
    let menu = document.querySelector(".menu");

    // Vérifie si le clic est à l'extérieur du menu et du bouton burger
    if (!menuNav.contains(event.target) && !menu.contains(event.target)) {
        menuNav.classList.remove("menu-visible");
    }
});