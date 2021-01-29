class Showmore {
    constructor(buttonID, element, textMessage) {
        this.textMessage = textMessage;
        this.hidden = true;
        this.btn = document.querySelector(buttonID);
        this.text = document.querySelector(element);
        this.events();
    }

    events() {
        this.btn.addEventListener("click", e => {

            if (this.hidden) {
                this.hidden = false;
                this.btn.innerHTML = "Hide <i class='fas fa-angle-up'></i>";
                this.text.classList.add("visible");
                this.btn.classList.add("btn--filled-bg");
            } else {
                this.hidden = true;
                this.btn.innerHTML = this.textMessage;
                this.text.classList.remove("visible");
                this.btn.classList.remove("btn--filled-bg");
            }

        });
    }

}


export default Showmore;