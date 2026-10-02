document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SELECT ELEMENTS
    // =========================

    const searchInput = document.querySelector("main input");
    const mainLogo = document.querySelector("main > img");
    const tagline = document.querySelector("main p");
    const navLinks = document.querySelectorAll("header ul li a");


    // =========================
    // SEARCH BAR FOCUS EFFECT
    // =========================

    searchInput.addEventListener("focus", function () {
        this.style.transition = "0.3s";
        this.style.transform = "scale(1.02)";
    });

    searchInput.addEventListener("blur", function () {
        this.style.transform = "scale(1)";
    });


    // =========================
    // SEARCH ENTER EVENT
    // =========================

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            const searchValue = this.value.trim();

            if (searchValue !== "") {
                alert("Searching for: " + searchValue);
            } else {
                alert("Please enter a restaurant, cuisine or dish.");
            }
        }
    });


    // =========================
    // NAVIGATION CLICK
    // =========================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const text = this.textContent.trim();

            if (text === "Login") {
                alert("Login page coming soon!");
            }

            else if (text === "Signup") {
                alert("Signup page coming soon!");
            }

            else if (text === "Add restaurants") {
                alert("Restaurant registration page coming soon!");
            }

            else if (text === "Investors Relations") {
                alert("Investors Relations page coming soon!");
            }
        });
    });


    // =========================
    // LOGO HOVER ANIMATION
    // =========================

    mainLogo.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.08)";
    });

    mainLogo.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });


    // =========================
    // TAGLINE ANIMATION
    // =========================

    setTimeout(function () {
        tagline.style.transition = "0.5s ease";
        tagline.style.textShadow =
            "0 0 15px rgba(255,255,255,0.5)";
    }, 1800);


    // =========================
    // PARALLAX BACKGROUND
    // =========================

    window.addEventListener("scroll", function () {

        const mainSection = document.querySelector("main");

        if (mainSection) {
            const scrollPosition = window.scrollY;

            mainSection.style.backgroundPosition =
                "center " + (scrollPosition * 0.3) + "px";
        }
    });

});