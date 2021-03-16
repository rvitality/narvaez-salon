class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.landingSection = document.querySelector(".landing-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.navLinks = document.querySelectorAll(".nav__link");
        this.events();
    }

    events() {
        this.runObserver();
        this.observeSections();
    }

    runObserver() {
        const stickyNav = (entries) => {
            const [entry] = entries;

            if (!entry.isIntersecting) {
                this.headerSection.classList.toggle("header-section--dark");
            } else {
                this.headerSection.classList.remove("header-section--dark");
            }
        };

        const oberver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0.9,
        });
        oberver.observe(this.landingSection);
    }

    observeSections() {
        const highlightLink = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // find nav link
                    const link = document.getElementById(
                        `${entry.target.id}-link`
                    );

                    this.navLinks.forEach((el) =>
                        el.classList.remove("primary-nav--is-current-link")
                    );

                    link.classList.add("primary-nav--is-current-link");
                }
            });
        };

        const observer = new IntersectionObserver(highlightLink, {
            root: null,
            threshold: 0.5,
        });

        this.pageSections.forEach((section) => observer.observe(section));
    }
}

export default StickyHeader;
