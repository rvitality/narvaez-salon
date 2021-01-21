let counter = 0;

class Slider {
    constructor() {
        counter = 0;
        this.sliderImages = document.querySelectorAll(".about-us-section__img");
        this.dots = document.querySelectorAll(".slider__dot");
        this.prevBtn = document.querySelector(".slider__prev-btn");
        this.nextBtn = document.querySelector(".slider__next-btn");
        this.events();
    }

    events() {
        this.timer = setInterval(this.autoSlide.bind(this), 5000);
        this.playSlide(counter);
        this.plusSlides(this.prevBtn, -1);
        this.plusSlides(this.nextBtn, 1);

        this.dots.forEach(dot => dot.addEventListener("click", () => {
            this.currentSlide(+dot.id);
        }));
    }

    autoSlide() {
        counter += 1;
        this.playSlide(counter);
    }

    // navigation buttons --------
    plusSlides(el, num) {
        el.addEventListener("click", () => {
            counter += num;
            this.playSlide(counter);
            this.resetTimer();
        });
    }

    // dots
    currentSlide(n) {
        counter = n;
        this.playSlide(counter);
        this.resetTimer();
    }

    resetTimer() {
        clearTimeout(this.timer);
        // create new timer/interval
        this.timer = setInterval(this.autoSlide.bind(this), 5000);
    }

    playSlide(n) {
        for (let i = 0; i < this.sliderImages.length; i++) {
            this.sliderImages[i].style.display = "none";
        }

        for (let i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }

        if (n >= this.sliderImages.length) {
            counter = 0;
        }

        if (n < 0) {
            counter = this.sliderImages.length - 1;
        }

        this.sliderImages[counter].style.display = "inline-block";
        this.dots[counter].classList.add("active");

    }


}

export default Slider;