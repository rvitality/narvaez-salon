class MobileMenu {
    constructor() {
        this.menuIconBtn = document.querySelector(".menu-icon");
        this.lowerNav = document.querySelector(".lower-nav");
        this.navbarList = document.querySelector(".primary-nav__nav-links");
        this.headerSection = document.querySelector(".header-section");
        this.events();
    }

    events() {
        this.menuIconBtn.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.navbarList.classList.toggle("primary-nav__nav-links--is-visible");
        this.lowerNav.classList.toggle("lower-nav--is-flex-col");
        this.headerSection.classList.toggle("header-section--is-expanded");
        this.menuIconBtn.classList.toggle("menu-icon__close-btn");
    }


}

export default MobileMenu;