import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200));
        window.addEventListener("resize", debounce(() =>
            this.browserHeight = window.innerHeight, 333));
    }

    runOnScroll() {

        this.determineScrollDirection();

        if (window.scrollY > 60) {
            this.headerSection.classList.add("header-section--dark");
        } else {
            this.headerSection.classList.remove("header-section--dark");
        }

        this.pageSections.forEach(el => this.calcSection(el));
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
        if ((window.scrollY + this.browserHeight > el.offsetTop) && (window.scrollY < el.offsetTop + el.offsetHeight)) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if ((scrollPercent < 25 && scrollPercent > -0.1 && this.scrollDirection === "down") || (scrollPercent < 33 && this.scrollDirection === "up")) {
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("primary-nav--is-current-link"));
                document.querySelector(matchingLink).classList.add("primary-nav--is-current-link");
            }
        }
    }

}

export default StickyHeader;