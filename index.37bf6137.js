!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register("61KF9",(function(e,t){var n,o,r,i;n=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),r=document.querySelectorAll(".mob-list__link"),i=function(){var e="true"===n.getAttribute("aria-expanded")||"false";n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),document.body.classList.toggle("modal-open")},n.addEventListener("click",(function(){i();for(var e=0;e<r.length;e++)r[e].onclick=function(e){e.preventDefault(),i()}}))})),o("61KF9")}();
//# sourceMappingURL=index.37bf6137.js.map