import{A as O,S as g,N as E,K as k,M as x,a as b,i as T,b as P}from"./assets/vendor-48081bb5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const l=document.querySelector("#modalWindow"),B=document.querySelector("#burgerBtn"),C=document.querySelector(".close"),V=document.querySelector(".modal-content"),m=document.body;B.onclick=function(){l.style.display="block",l.style.transform="translateX(0%)",m.classList.add("mobMenuOpen")};C.onclick=function(){l.style.transform="translateX(100%)",m.classList.remove("mobMenuOpen")};document.onclick=function(e){e.target===l&&(l.style.transform="translateX(100%)",m.classList.remove("mobMenuOpen"),l.style.display="none")};document.addEventListener("keydown",A);function A(e){(e.key==="Escape"||e.key==="Esc")&&(l.style.transform="translateX(100%)",l.style.display="none",m.classList.remove("mobMenuOpen"))}V.addEventListener("click",R);function R(e){e.currentTarget&&(l.style.transform="translateX(100%)",m.classList.remove("mobMenuOpen"))}const v=document.querySelector(".menu"),$=document.querySelectorAll(".menu-list"),r=document.querySelector(".hidden-menu");v.addEventListener("mouseenter",function(){r.classList.add("visible-menu")});v.addEventListener("mouseleave",function(e){!v.contains(e.relatedTarget)&&!r.contains(e.relatedTarget)&&r.classList.remove("visible-menu")});r.addEventListener("mouseleave",function(e){!v.contains(e.relatedTarget)&&!r.contains(e.relatedTarget)&&r.classList.remove("visible-menu")});v.addEventListener("click",j);function j(e){r.classList.contains("hidden-menu")?(r.classList.remove("hidden-menu"),r.classList.add("visible-menu")):(r.classList.remove("visible-menu"),r.classList.add("hidden-menu")),e.stopPropagation()}$.forEach(e=>{e.addEventListener("click",N)});function N(e){r.classList.remove("visible-menu"),r.classList.add("hidden-menu"),e.stopPropagation()}document.addEventListener("click",_);function _(){r.classList.remove("visible-menu"),r.classList.add("hidden-menu")}const D=document.querySelectorAll('a[href*="#"]');D.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"}),m.classList.remove("mobMenuOpen"),setTimeout(()=>{e.blur()},1e3)})});const w=document.getElementById("scrollToTopBtn");w.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",function(){window.scrollY>300?w.classList.add("visible"):w.classList.remove("visible")});new O(".accordion-container-second",{duration:500,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("ac-0"),t=document.querySelector(".accordion-content.ac-panel");e.classList.add("is-active"),t.style.height="auto"});const u=new g(".skills-container",{modules:[E,k,x],slidesPerView:"auto",loop:!0,speed:700,grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!1},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,n)=>{n===e?t.classList.add("active"):t.classList.remove("active")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,n)=>{n===e?t.classList.add("active"):t.classList.remove("active")})}}}),H=document.querySelector(".skills-button-next");H.addEventListener("click",function(){const e=u.slides.filter(n=>n.isVisible);u.isEnd&&e.length===u.slides.length||e.length===u.slides.lengthVisible?u.slideTo(0):u.slideNext()});document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(n=>{n.forEach((i,o)=>{i.isIntersecting&&setTimeout(()=>{i.target.classList.add("visible")},o*250)})});document.querySelectorAll(".move-card").forEach(n=>e.observe(n))});document.addEventListener("DOMContentLoaded",function(){const e=new g(".projects-swiper",{modules:[E,k,x],slidesPerView:1,spaceBetween:20,grabCursor:!0,allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1}}),t=document.querySelector(".proj-left-button"),n=document.querySelector(".proj-right-button");function i(o,s,c){o.isBeginning?s.disabled=!0:s.disabled=!1,o.isEnd?c.disabled=!0:c.disabled=!1}t.addEventListener("click",()=>{e.slidePrev(),i(e,t,n),t.blur()}),n.addEventListener("click",()=>{e.slideNext(),i(e,t,n),n.blur()}),i(e,t,n)});new O(".accordion-container",{duration:500,showMultiple:!0});const I=document.querySelector(".section-covers");function M(e){const t=I.querySelector(".container-covers");e?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}const W=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?M(!0):M(!1)})});W.observe(I);b.defaults.baseURL="https://portfolio-js.b.goit.study/api";const L=document.querySelector(".reviews-list"),f=document.querySelector(".reviews-next-btn"),p=document.querySelector(".reviews-prev-btn"),y=new g(".reviews-slider",{modules:[E,k,x],speed:1e3,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2,spaceBetween:16},1440:{slidesPerGroup:4,slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!1}});function S(e,t,n){e.isBeginning?t.disabled=!0:t.disabled=!1,e.isEnd?n.disabled=!0:n.disabled=!1}p.addEventListener("click",()=>{S(y,p,f)});f.addEventListener("click",()=>{S(y,p,f)});S(y,p,f);X();async function X(){await b.get("/reviews").then(e=>{L.insertAdjacentHTML("beforeend",G(e.data)),y.update(),document.querySelectorAll(".reviews-text").forEach(t=>{K(t,30)})}).catch(e=>{T.error({message:"We're sorry, but something went wrong: Reviews not found",position:"topRight"});const t=document.createElement("div");t.textContent="Error: Reviews not found",t.style.color="red",t.style.border="1px solid #ed3b44",t.style.borderRadius="15px",t.style.padding="32px",L.innerHTML="",L.appendChild(t)})}function G(e){return e.map(({author:t,avatar_url:n,review:i})=>`<div class="swiper-slide">
        <li class="reviews-card">
          <img class="reviews-img" src="${n}" alt="${t}">
            <h4 class="reviews-name">${t}</h4>
            <p class="typewriter reviews-text">${i}</p>
        </li>
      </div >`).join("")}function K(e,t){e.style.opacity=0,new IntersectionObserver(i=>{i.forEach(o=>{if(o.isIntersecting){let d=function(){c<s.length&&(e.innerHTML+=s.charAt(c),c++,setTimeout(d,t))};if(e.dataset.typingStarted)return;e.dataset.typingStarted="true";const s=e.innerHTML;let c=0;e.innerHTML="",o.target.style.transition=`opacity ${t/1e3}s ease`,o.target.style.opacity=1,d()}})},{threshold:.5}).observe(e)}const a=document.body,U=document.querySelector(".footer-form");b.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function F(e,t){return await b.post("/requests/",{email:e,comment:t})}U.addEventListener("submit",z);function z(e){e.preventDefault();const t=e.target,{userEmail:n,userComments:i}=t.elements;F(n.value,i.value).then(o=>{const s=P.create(` 
      <div id="modalW" class="backdrop visually-hidden">
                     <div class="modal-window">
      <button class="modal-button" type="button" aria-label="close-button">
          <svg class="modal-btn-icon" width="22" height="22">
                  <use href="./img/icons/sprites.svg#closeX"></use>
          </svg>
      </button>
      <div class="modal-all-text">
      <h3 class="modal-title">${o.data.title}</h3>
      <p class="modal-text">${o.data.message}
      </p>
      </div>
  </div>
  </div>`);s.show();const c=document.getElementById("modalW"),d=c.parentNode;a.classList.add("mobMenuOpen"),a.addEventListener("keydown",q);function q(h){h.keyCode===27&&(s.close(),d.classList.contains("basicLightbox__placeholder")&&(a.classList.remove("mobMenuOpen"),a.removeEventListener("keydown",q)))}a.addEventListener("click",h=>{h.target===c&&(s.close(),d.classList.contains("basicLightbox__placeholder")&&a.classList.remove("mobMenuOpen"))}),s.element().querySelector(".modal-button").onclick=()=>{s.close(),d.classList.contains("basicLightbox__placeholder")&&a.classList.remove("mobMenuOpen")},n.value="",i.value=""}).catch(o=>{T.error({message:"Unable to send your data. Please correct them and try again.",position:"topRight"});const s=document.createElement("div");s.textContent="Error: Reviews not found",s.style.color="red",s.style.border="1px solid #ed3b44",s.style.borderRadius="15px",s.style.padding="32px",reviewsList.innerHTML="",reviewsList.appendChild(s)})}const Y=document.querySelector(".email-btn"),J=document.querySelector(".phone-btn");Y.addEventListener("click",()=>{window.location.href="mailto:lloydjefferson@gmail.com"});J.addEventListener("click",()=>{window.location.href="tel:+380111111111"});const Q=instance.element().querySelector(".modal-button");Q.addEventListener("click",()=>{instance.close()});
//# sourceMappingURL=commonHelpers.js.map
