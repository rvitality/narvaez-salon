class MobileMenu {
    constructor() {
        this.menuIconBtn = document.querySelector(".menu-icon");
        this.primaryNav = document.querySelector(".primary-nav");
        this.lowerNav = document.querySelector(".lower-nav");
        this.headerSection = document.querySelector(".header-section");
        this.logoTextElement = document.querySelector(".lower-nav__main-title");
        this.logoImage = document.querySelector(".lower-nav__logo");
        this.logoContainer = document.querySelector(".lower-nav__logo-link");
        this.borderBottom = document.querySelector(".lower-nav .border-bottom");
        this.events();
    }

    events() {
        this.menuIconBtn.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {

        this.primaryNav.classList.toggle("primary-nav--is-visible");
        this.lowerNav.classList.toggle("lower-nav--is-flex-col");
        this.headerSection.classList.toggle("header-section--is-expanded");
        this.menuIconBtn.classList.toggle("menu-icon__close-btn");
        this.logoTextElement.classList.toggle("lower-nav__main-title--text-center");
        this.logoImage.classList.toggle("lower-nav__logo--margin-bottom");

        this.logoContainer.classList.toggle("lower-nav__logo-link--display-flex-col");
        this.logoContainer.classList.toggle("lower-nav__logo-link--remove-max-width");

        this.borderBottom.classList.toggle("border-bottom--show");
    }


}

export default MobileMenu;