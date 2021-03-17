class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.landingSection = document.querySelector(".landing-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.navLinks = document.querySelectorAll(".nav__link");
        this.backToTopBtn = document.querySelector(".back-to-top");
        this.events();
    }

    events() {
        this.runObserver();
        this.observeSections();
        this.backToTop();
    }

    removeHighlightedLinks() {
        this.navLinks.forEach((el) =>
            el.classList.remove("primary-nav--is-current-link")
        );
    }

    runObserver() {
        const stickyNav = (entries) => {
            const [entry] = entries;

            // BACKGROUND OF NAVBAR
            if (
                !entry.isIntersecting &&
                !this.headerSection.classList.contains(
                    "header-section--is-expanded"
                )
            ) {
                this.headerSection.classList.add("header-section--dark");
            } else {
                this.headerSection.classList.remove("header-section--dark");

                // specifically for the home link
                this.removeHighlightedLinks();
                this.navLinks[0].classList.add("primary-nav--is-current-link");
            }

            // BACK TO TOP BUTTON
            if (!entry.isIntersecting) {
                this.backToTopBtn.classList.add("back-to-top--show");
            } else {
                this.backToTopBtn.classList.remove("back-to-top--show");
            }
        };

        const oberver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0.9,
        });
        oberver.observe(this.landingSection);
    }

    backToTop() {
        this.backToTopBtn.addEventListener("click", (e) => {
            this.landingSection.scrollIntoView();
        });
    }

    observeSections() {
        const highlightLink = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // find nav link
                    const link = document.getElementById(
                        `${entry.target.id}-link`
                    );

                    this.removeHighlightedLinks();
                    link.classList.add("primary-nav--is-current-link");
                }
            });
        };

        const observer = new IntersectionObserver(highlightLink, {
            root: null,
            threshold: 0.3,
        });

        this.pageSections.forEach((section) => observer.observe(section));
    }
}

export default StickyHeader;
