/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 300:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./app/assets/scripts/modules/MobileMenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

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

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.menuIconBtn.addEventListener("click", function () {
        return _this.toggleTheMenu();
      });
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.primaryNav.classList.toggle("primary-nav--is-visible");
      this.lowerNav.classList.toggle("lower-nav--is-flex-col");
      this.menuIconBtn.classList.toggle("menu-icon__close-btn");
      this.logoTextElement.classList.toggle("lower-nav__main-title--text-center");
      this.logoImage.classList.toggle("lower-nav__logo--margin-bottom");
      this.logoContainer.classList.toggle("lower-nav__logo-link--display-flex-col");
      this.logoContainer.classList.toggle("lower-nav__logo-link--remove-max-width");
      this.borderBottom.classList.toggle("border-bottom--show");
      this.headerSection.classList.toggle("header-section--is-expanded");

      if (window.scrollY > 60 && !this.headerSection.classList.contains("header-section--dark")) {
        this.headerSection.classList.add("header-section--dark");
      } else {
        this.headerSection.classList.remove("header-section--dark");
      }
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const modules_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Showmore.js
function Showmore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Showmore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Showmore_createClass(Constructor, protoProps, staticProps) { if (protoProps) Showmore_defineProperties(Constructor.prototype, protoProps); if (staticProps) Showmore_defineProperties(Constructor, staticProps); return Constructor; }

var Showmore = /*#__PURE__*/function () {
  function Showmore(buttonID, element, textMessage) {
    Showmore_classCallCheck(this, Showmore);

    this.textMessage = textMessage;
    this.hidden = true;
    this.btn = document.querySelector(buttonID);
    this.text = document.querySelector(element);
    this.events();
  }

  Showmore_createClass(Showmore, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.btn.addEventListener("click", function (e) {
        if (_this.hidden) {
          _this.hidden = false;
          _this.btn.innerHTML = "Hide <i class='fas fa-angle-up'></i>";

          _this.text.classList.add("visible");

          _this.btn.classList.add("btn--filled-bg");
        } else {
          _this.hidden = true;
          _this.btn.innerHTML = _this.textMessage;

          _this.text.classList.remove("visible");

          _this.btn.classList.remove("btn--filled-bg");
        }
      });
    }
  }]);

  return Showmore;
}();

/* harmony default export */ const modules_Showmore = (Showmore);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Slider.js
function Slider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Slider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Slider_createClass(Constructor, protoProps, staticProps) { if (protoProps) Slider_defineProperties(Constructor.prototype, protoProps); if (staticProps) Slider_defineProperties(Constructor, staticProps); return Constructor; }

var counter = 0;

var Slider = /*#__PURE__*/function () {
  function Slider() {
    Slider_classCallCheck(this, Slider);

    counter = 0;
    this.sliderImages = document.querySelectorAll(".about-us-section__img");
    this.dots = document.querySelectorAll(".slider__dot");
    this.prevBtn = document.querySelector(".slider__prev-btn");
    this.nextBtn = document.querySelector(".slider__next-btn");
    this.events();
  }

  Slider_createClass(Slider, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.timer = setInterval(this.autoSlide.bind(this), 5000);
      this.playSlide(counter);
      this.plusSlides(this.prevBtn, -1);
      this.plusSlides(this.nextBtn, 1);
      this.dots.forEach(function (dot) {
        return dot.addEventListener("click", function () {
          _this.currentSlide(+dot.id);
        });
      });
    }
  }, {
    key: "autoSlide",
    value: function autoSlide() {
      counter += 1;
      this.playSlide(counter);
    } // navigation buttons --------

  }, {
    key: "plusSlides",
    value: function plusSlides(el, num) {
      var _this2 = this;

      el.addEventListener("click", function () {
        counter += num;

        _this2.playSlide(counter);

        _this2.resetTimer();
      });
    } // dots

  }, {
    key: "currentSlide",
    value: function currentSlide(n) {
      counter = n;
      this.playSlide(counter);
      this.resetTimer();
    }
  }, {
    key: "resetTimer",
    value: function resetTimer() {
      clearTimeout(this.timer); // create new timer/interval

      this.timer = setInterval(this.autoSlide.bind(this), 5000);
    }
  }, {
    key: "playSlide",
    value: function playSlide(n) {
      for (var i = 0; i < this.sliderImages.length; i++) {
        this.sliderImages[i].style.display = "none";
      }

      for (var _i = 0; _i < this.dots.length; _i++) {
        this.dots[_i].classList.remove("active");
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
  }]);

  return Slider;
}();

/* harmony default export */ const modules_Slider = (Slider);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(486);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/StickyHeader.js
function StickyHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StickyHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StickyHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) StickyHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) StickyHeader_defineProperties(Constructor, staticProps); return Constructor; }





var StickyHeader = /*#__PURE__*/function () {
  function StickyHeader() {
    StickyHeader_classCallCheck(this, StickyHeader);

    this.headerSection = document.querySelector(".header-section");
    this.backToTopBtn = document.querySelector(".back-to-top");
    this.pageSections = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  StickyHeader_createClass(StickyHeader, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener("scroll", throttle_default()(function () {
        return _this.runOnScroll();
      }, 200));
      window.addEventListener("resize", debounce_default()(function () {
        return _this.browserHeight = window.innerHeight;
      }, 333));
      this.backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
          left: 0,
          top: 0
        });
      });
    }
  }, {
    key: "runOnScroll",
    value: function runOnScroll() {
      var _this2 = this;

      this.determineScrollDirection();

      if (window.scrollY > 60 && !this.headerSection.classList.contains("header-section--is-expanded")) {
        this.headerSection.classList.add("header-section--dark");
      } else {
        this.headerSection.classList.remove("header-section--dark");
      } // back to top arrow


      if (window.scrollY > 600) {
        this.backToTopBtn.classList.add("back-to-top--show");
      } else {
        this.backToTopBtn.classList.remove("back-to-top--show");
      }

      this.pageSections.forEach(function (el) {
        return _this2.calcSection(el);
      });
    }
  }, {
    key: "determineScrollDirection",
    value: function determineScrollDirection() {
      if (window.scrollY > this.previousScrollY) {
        this.scrollDirection = "down";
      } else {
        this.scrollDirection = "up";
      }

      this.previousScrollY = window.scrollY;
    }
  }, {
    key: "calcSection",
    value: function calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        var scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;

        if (scrollPercent < 25 && scrollPercent > -0.1 && this.scrollDirection === "down" || scrollPercent < 33 && this.scrollDirection === "up") {
          var matchingLink = el.getAttribute("data-matching-link");
          document.querySelectorAll(".primary-nav a:not(".concat(matchingLink, ")")).forEach(function (el) {
            return el.classList.remove("primary-nav--is-current-link");
          });
          document.querySelector(matchingLink).classList.add("primary-nav--is-current-link");
        }
      }
    }
  }]);

  return StickyHeader;
}();

/* harmony default export */ const modules_StickyHeader = (StickyHeader);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/RevealOnScroll.js
function RevealOnScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RevealOnScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RevealOnScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) RevealOnScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) RevealOnScroll_defineProperties(Constructor, staticProps); return Constructor; }




var RevealOnScroll = /*#__PURE__*/function () {
  function RevealOnScroll() {
    RevealOnScroll_classCallCheck(this, RevealOnScroll);

    this.revealItems = document.querySelectorAll(".reveal-item");
    this.scrollThrottle = throttle_default()(this.calcCaller, 200).bind(this);
    this.browserHeight = window.innerHeight;
    this.areHidden();
    this.events();
  }

  RevealOnScroll_createClass(RevealOnScroll, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener("scroll", this.scrollThrottle);
      window.addEventListener("resize", debounce_default()(function () {
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "calcCaller",
    value: function calcCaller() {
      var _this2 = this;

      this.revealItems.forEach(function (el) {
        if (el.isRevealed === false) {
          _this2.calculateIfScrolledTo(el);
        }
      });
    }
  }, {
    key: "calculateIfScrolledTo",
    value: function calculateIfScrolledTo(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop) {
        var scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;

        if (scrollPercent < 75) {
          el.classList.add("reveal-item--is-visible");
          el.isRevealed = true;

          if (el.isLastItem) {
            window.removeEventListener("scroll", this.scrollThrottle);
          }
        }
      }
    }
  }, {
    key: "areHidden",
    value: function areHidden() {
      this.revealItems.forEach(function (el) {
        return el.isRevealed = false;
      });
      this.revealItems[this.revealItems.length - 1].isLastItem = true;
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ const modules_RevealOnScroll = (RevealOnScroll);
;// CONCATENATED MODULE: ./app/assets/scripts/modules/Modal.js
function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal() {
    Modal_classCallCheck(this, Modal);

    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.openModalButtons = document.querySelectorAll(".open-modal");
    this.events();
  }

  Modal_createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.modal.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal__close-btn") || e.target.classList.contains("modal")) {
          _this.closeModal();
        }
      }); // open modal

      this.openModalButtons.forEach(function (el) {
        return el.addEventListener("click", function (e) {
          return _this.openModal(e);
        });
      }); // esc key, close modal

      document.addEventListener("keyup", function (e) {
        if (e.keyCode === 27 || e.key === "Escape") {
          _this.closeModal();
        }
      });
    }
  }, {
    key: "openModal",
    value: function openModal(e) {
      e.preventDefault();
      this.modal.classList.add("modal--is-visible");
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.classList.remove("modal--is-visible");
    }
  }, {
    key: "injectHTML",
    value: function injectHTML() {
      document.body.insertAdjacentHTML("beforeend", "\n            <div class=\"modal\">\n                <div class=\"wrapper\">\n                    <a href=\"#\" class=\"modal__envelope\"><i class=\"fas fa-envelope\"></i></a>\n                    <h1 class=\"modal__main-title\">Get in <span class=\"bold\">Touch</span></h1>\n                    <span class=\"border-bottom\"></span>\n                    <p class=\"modal__description\">Reach us through our social media accounts/page for appointments or call us with the provided phone number in the home page.</p>\n                    <span class=\"modal__close-btn\">X</span>\n                    <div class=\"modal__social-icons\">\n                        <a href=\"https://www.facebook.com/narvaezsalonandspa\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n                        <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n                    </div>\n                </div>\n            </div>\n        ");
    }
  }]);

  return Modal;
}();

/* harmony default export */ const modules_Modal = (Modal);
;// CONCATENATED MODULE: ./app/assets/scripts/App.js







new modules_MobileMenu();
new modules_StickyHeader();
new modules_RevealOnScroll();
new modules_Modal();
new modules_Slider();
new modules_Showmore("#showmore-btn", ".about-us-section__hidden-text", "Read More <i class='fas fa-angle-down'></i>");
new modules_Showmore("#show-price-list-btn", ".price-list", "Price List <i class='fas fa-angle-down'></i>");

if (false) {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[300,807]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknarvaez_salon"] = self["webpackChunknarvaez_salon"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;