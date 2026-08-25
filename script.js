// =========================================
// SEMAJ MORRIS PORTFOLIO V2
// =========================================


// =========================================
// MOBILE MENU
// =========================================

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

if (mobileMenuBtn && navLinks) {

    mobileMenuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        mobileMenuBtn.setAttribute("aria-expanded", isOpen);

        mobileMenuBtn.textContent = isOpen ? "✕" : "☰";

    });


    // Close mobile menu after clicking a nav link
    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            mobileMenuBtn.setAttribute("aria-expanded", "false");

            mobileMenuBtn.textContent = "☰";

        });

    });

}


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================================
// REVEAL ELEMENTS ON SCROLL
// =========================================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-group, .experience-item, .leadership-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("show");
    });

}


// =========================================
// ACTIVE NAV LINK
// =========================================

const sections = document.querySelectorAll(
    "header[id], section[id]"
);

const navItems = document.querySelectorAll(
    ".nav-links a[href^='#']"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active-link");
        }

    });

});


// =========================================
// FOOTER YEAR
// =========================================

const footerCopyright =
    document.querySelector(".footer-container p");

if (footerCopyright) {

    const currentYear = new Date().getFullYear();

    footerCopyright.textContent =
        `© ${currentYear} Semaj Morris`;

}