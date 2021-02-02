import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
    constructor() {
        this.revealItems = document.querySelectorAll(".reveal-item");
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.browserHeight = window.innerHeight;
        this.areHidden();
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    calcCaller() {
        this.revealItems.forEach(el => {
            if (el.isRevealed === false) {
                this.calculateIfScrolledTo(el)
            }
        });
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("cacl...");
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            if (scrollPercent < 75) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;

                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    areHidden() {
        this.revealItems.forEach(el => el.isRevealed = false);
        this.revealItems[this.revealItems.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;