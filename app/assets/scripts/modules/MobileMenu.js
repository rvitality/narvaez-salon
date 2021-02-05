class MobileMenu {
    constructor() {
        this.menuIconBtn = document.querySelector(".menu-icon");
        this.navbarList = document.querySelector(".primary-nav__nav-links");
        this.headerSection = document.querySelector(".header-section");
        this.events();
    }

    events() {
        this.menuIconBtn.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.navbarList.classList.toggle("primary-nav__nav-links--is-visible");
    }


}

export default MobileMenu;