import "../styles/styles.css";
import Showmore from "./modules/Showmore";
import Slider from "./modules/Slider.js";



new Slider();

new Showmore("#showmore-btn", ".about-us-section__hidden-text", "Read More <i class='fas fa-angle-down'></i>");
new Showmore("#show-price-list-btn", ".price-list", "Price List <i class='fas fa-angle-down'></i>");

if (module.hot) {
    module.hot.accept();
}