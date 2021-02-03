class Modal {
    constructor() {
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.openModalButtons = document.querySelectorAll(".open-modal");
        this.events();
    }

    events() {
        this.modal.addEventListener("click", e => {
            if (e.target.classList.contains("modal__close-btn") || e.target.classList.contains("modal")) {
                this.closeModal();
            }
        });

        // open modal
        this.openModalButtons.forEach(el => el.addEventListener("click", () => this.openModal()));

        // esc key, close modal
        document.addEventListener("keyup", e => {
            if (e.keyCode === 27 || e.key === "Escape") {
                this.closeModal();
            }
        });
    }

    openModal() {
        this.modal.classList.add("modal--is-visible");
    }

    closeModal() {
        this.modal.classList.remove("modal--is-visible");
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="modal">
                <div class="wrapper">
                    <h1>Hello World!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsum quae autem dicta similique earum.</p>
                    <span class="modal__close-btn">X</span>
                </div>
            </div>
        `);
    }

}

export default Modal;