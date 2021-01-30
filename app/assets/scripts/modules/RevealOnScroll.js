import throttle from "lodash/throttle";

class RevealOnScroll {
    constructor() {
        this.revealItems = document.querySelectorAll(".reveal-item");
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.areHidden();
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
    }

    calcCaller() {
        this.revealItems.forEach(el => {
            if (el.isRevealed === false) {
                this.calculateIfScrolledTo(el)
            }
        });
    }

    calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible");
            el.isRevealed = true;

            if (el.isLastItem) {
                window.removeEventListener("scroll", this.scrollThrottle);
            }

        }
    }

    areHidden() {
        this.revealItems.forEach(el => el.isRevealed = false);
        this.revealItems[this.revealItems.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;