var t=document.querySelectorAll(".hero-section__slide"),c=document.querySelector(".slider__button--next"),l=document.querySelector(".slider__button--prev"),e=0;function n(){t[e].classList.add("active")}function i(){t[e].classList.remove("active")}function d(){i(),e++,e>t.length-1&&(e=0),n()}function o(){i(),e--,e<0&&(e=t.length-1),n()}c.addEventListener("click",d);l.addEventListener("click",o);