import "../styles/styles.css";
import Showmore from "./modules/Showmore";
import Slider from "./modules/Slider.js";

new Slider();
new Showmore();

if (module.hot) {
    module.hot.accept();
}