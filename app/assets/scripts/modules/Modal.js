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
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openModal(e)));

        // esc key, close modal
        document.addEventListener("keyup", e => {
            if (e.keyCode === 27 || e.key === "Escape") {
                this.closeModal();
            }
        });
    }

    openModal(e) {
        e.preventDefault();
        this.modal.classList.add("modal--is-visible");
    }

    closeModal() {
        this.modal.classList.remove("modal--is-visible");
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="modal">
                <div class="wrapper">
                    <a href="#" class="modal__envelope"><i class="fas fa-envelope"></i></a>
                    <h1 class="modal__main-title">Get in <span class="bold">Touch</span></h1>
                    <span class="border-bottom"></span>
                    <p class="modal__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ipsum quae autem dicta similique earum.</p>
                    <span class="modal__close-btn">X</span>
                    <div class="modal__social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        `);
    }

}

export default Modal;