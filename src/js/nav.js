const logo = document.querySelector("#logo");
const bouton_login = document.getElementById('inscription');
const couleur_nav = document.getElementById('couleur_nav');

function afficherElement() {
    logo.style.transition = "opacity 0.5s ease-in-out";
    bouton_login.style.transition = "opacity 0.5s ease-in-out";

    const hauteurFenetre = window.innerHeight;

    const hauteurScroll = window.scrollY;

    const hauteurAffichage = hauteurFenetre * 0.8;

    if (hauteurScroll > hauteurAffichage) {
        logo.classList.add("active");
        bouton_login.classList.add("active");
        couleur_nav.classList.add("background_nav");
    } else {
        logo.classList.remove("active");
        bouton_login.classList.remove("active");
        couleur_nav.classList.remove("background_nav"); 
    }
}

window.addEventListener("scroll", afficherElement);
