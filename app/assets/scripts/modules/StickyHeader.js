import throttle from "lodash/throttle";

class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200));
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.headerSection.classList.add("header-section--dark");
        } else {
            this.headerSection.classList.remove("header-section--dark");

        }

        this.pageSections.forEach(el => this.calcSection(el));
    }

    // DESKTOP STICKY HEADER --- PART 3 - 5:50 
    calcSection(el) {
        if ((window.scrollY + window.innerHeight > el.offsetTop) && (window.scrollY < el.offsetTop + el.offsetHeight)) {
            console.log(el.id, el.getBoundingClientRect().top);
        }
    }

}

export default StickyHeader;