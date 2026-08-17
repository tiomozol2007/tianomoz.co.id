/* =========================================
   TIAN PERSONAL WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   1. NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   2. SCROLL REVEAL ANIMATION
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {
    observer.observe(section);
});


/* =========================================
   3. CURRENT YEAR
========================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-year");

if (footerYear) {
    footerYear.textContent = currentYear;
}


/* =========================================
   4. BACK TO TOP BUTTON
========================================= */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   5. MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

    });

}


/* =========================================
   6. CLOSE MOBILE MENU AFTER CLICK
========================================= */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("open");

    });

});