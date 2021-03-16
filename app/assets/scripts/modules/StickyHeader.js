import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
import { times } from "lodash";

class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.backToTopBtn = document.querySelector(".back-to-top");
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener(
            "scroll",
            throttle(() => this.runOnScroll(), 200)
        );
        window.addEventListener(
            "resize",
            debounce(() => (this.browserHeight = window.innerHeight), 333)
        );

        this.backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ left: 0, top: 0 });
        });
    }

    runOnScroll() {
        this.determineScrollDirection();

        if (
            window.scrollY > 60 &&
            !this.headerSection.classList.contains(
                "header-section--is-expanded"
            )
        ) {
            this.headerSection.classList.add("header-section--dark");
        } else {
            this.headerSection.classList.remove("header-section--dark");
        }

        // back to top arrow
        if (window.scrollY > 600) {
            this.backToTopBtn.classList.add("back-to-top--show");
        } else {
            this.backToTopBtn.classList.remove("back-to-top--show");
        }

        this.pageSections.forEach((el) => this.calcSection(el));
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = "down";
        } else {
            this.scrollDirection = "up";
        }

        this.previousScrollY = window.scrollY;
    }

    calcSection(el) {
        if (
            window.scrollY + this.browserHeight > el.offsetTop &&
            window.scrollY < el.offsetTop + el.offsetHeight
        ) {
            let scrollPercent =
                (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (
                (scrollPercent < 25 &&
                    scrollPercent > -0.1 &&
                    this.scrollDirection === "down") ||
                (scrollPercent < 33 && this.scrollDirection === "up")
            ) {
                let matchingLink = el.getAttribute("data-matching-link");
                document
                    .querySelectorAll(`.primary-nav a:not(${matchingLink})`)
                    .forEach((el) =>
                        el.classList.remove("primary-nav--is-current-link")
                    );
                document
                    .querySelector(matchingLink)
                    .classList.add("primary-nav--is-current-link");
            }
        }
    }
}

export default StickyHeader;
