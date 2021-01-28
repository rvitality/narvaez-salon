class Showmore {
    constructor() {
        this.hidden = true;
        this.btn = document.getElementById("showmore-btn");
        this.text = document.querySelector(".about-us-section__hidden-text");
        this.events();
    }

    events() {
        this.btn.addEventListener("click", e => {

            if (this.hidden) {
                this.hidden = false;
                this.btn.textContent = "Read Less";
                this.text.classList.add("about-us-section--visible");
                this.btn.classList.add("btn--filled-bg");
            } else {
                this.hidden = true;
                this.btn.textContent = "Read More";
                this.text.classList.remove("about-us-section--visible");
                this.btn.classList.remove("btn--filled-bg");
            }

        });
    }

}


export default Showmore;