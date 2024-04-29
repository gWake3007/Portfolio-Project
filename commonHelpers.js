import{A as g,S as f,N as L,K as E,M as S,a as v,b as k}from"./assets/vendor-66e3f585.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const a=document.querySelector("#modalWindow"),x=document.querySelector("#burgerBtn"),P=document.querySelector(".close"),I=document.querySelector(".modal-content");x.onclick=function(){a.style.display="block"};P.onclick=function(){a.style.display="none"};document.onclick=function(e){e.target===a&&(a.style.display="none")};document.addEventListener("keydown",M);function M(e){(e.key==="Escape"||e.key==="Esc")&&(a.style.display="none")}I.addEventListener("click",j);function j(e){e.currentTarget&&(a.style.display="none")}const d=document.querySelector(".menu"),O=document.querySelectorAll(".menu-list"),c=document.querySelector(".hidden-menu");d.addEventListener("mouseenter",function(){c.classList.add("visible-menu")});d.addEventListener("mouseleave",function(e){!d.contains(e.relatedTarget)&&!c.contains(e.relatedTarget)&&c.classList.remove("visible-menu")});c.addEventListener("mouseleave",function(e){!d.contains(e.relatedTarget)&&!c.contains(e.relatedTarget)&&c.classList.remove("visible-menu")});O.forEach(e=>{e.addEventListener("click",T)});function T(e){c.classList.remove("visible-menu"),c.classList.add("hidden-menu"),e.stopPropagation()}document.addEventListener("click",V);function V(){c.classList.remove("visible-menu"),c.classList.add("hidden-menu")}const A=document.querySelectorAll('a[href*="#"]');A.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})})});new g(".accordion-container-second",{duration:500,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("ac-0"),t=document.querySelector(".accordion-content.ac-panel");e.classList.add("is-active"),t.style.height="auto"});const l=new f(".skills-container",{modules:[L,E,S],slidesPerView:"auto",loop:!0,speed:700,grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{invert:!1},on:{init:function(){const e=this.activeIndex;this.slides.forEach((t,n)=>{n===e?t.classList.add("active"):t.classList.remove("active")})},slideChange:function(){const e=this.activeIndex;this.slides.forEach((t,n)=>{n===e?t.classList.add("active"):t.classList.remove("active")})}}}),C=document.querySelector(".skills-button-next");C.addEventListener("click",function(){const e=l.slides.filter(n=>n.isVisible);l.isEnd&&e.length===l.slides.length||e.length===l.slides.lengthVisible?l.slideTo(0):l.slideNext()});document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(n=>{n.forEach((i,s)=>{i.isIntersecting&&setTimeout(()=>{i.target.classList.add("visible")},s*250)})});document.querySelectorAll(".move-card").forEach(n=>e.observe(n))});document.addEventListener("DOMContentLoaded",function(){const e=new f(".projects-swiper",{slidesPerView:1,spaceBetween:20}),t=document.querySelector(".proj-left-button"),n=document.querySelector(".proj-right-button");function i(s,o,r){s.isBeginning?o.disabled=!0:o.disabled=!1,s.isEnd?r.disabled=!0:r.disabled=!1}t.addEventListener("click",()=>{e.slidePrev(),i(e,t,n)}),n.addEventListener("click",()=>{e.slideNext(),i(e,t,n)}),i(e,t,n)});document.addEventListener("DOMContentLoaded",function(){const e=new f(".projects-swiper",{slidesPerView:1,spaceBetween:20});document.querySelector(".proj-left-button").addEventListener("click",()=>{e.slidePrev()}),document.querySelector(".proj-right-button").addEventListener("click",()=>{e.slideNext()})});new g(".accordion-container",{duration:500,showMultiple:!0});const q=document.querySelector(".section-covers");function w(e){const t=q.querySelector(".container-covers");e?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}const B=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?w(!0):w(!1)})});B.observe(q);v.defaults.baseURL="https://portfolio-js.b.goit.study/api";const b=document.querySelector(".reviews-list"),u=document.querySelector(".reviews-next-btn"),m=document.querySelector(".reviews-prev-btn"),p=new f(".reviews-slider",{modules:[L,E,S],speed:1e3,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},breakpoints:{320:{slidesPerGroup:1,slidesPerView:1},768:{slidesPerGroup:2,slidesPerView:2,spaceBetween:16},1440:{slidesPerGroup:4,slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0,onlyInViewport:!0}});function y(e,t,n){e.isBeginning?t.disabled=!0:t.disabled=!1,e.isEnd?n.disabled=!0:n.disabled=!1}m.addEventListener("click",()=>{y(p,m,u)});u.addEventListener("click",()=>{y(p,m,u)});y(p,m,u);N();async function N(){await v.get("/reviews").then(e=>{b.insertAdjacentHTML("beforeend",D(e.data)),p.update(),document.querySelectorAll(".reviews-text").forEach(t=>{$(t,30)})}).catch(e=>{const t=document.createElement("div");t.textContent="Error: Reviews not found",t.style.color="red",b.innerHTML="",b.appendChild(t)})}function D(e){return e.map(({author:t,avatar_url:n,review:i})=>`<div class="swiper-slide">
        <li class="reviews-card">
          <img class="reviews-img" src="${n}" alt="${t}">
            <h4 class="reviews-name">${t}</h4>
            <p class="typewriter reviews-text">${i}</p>
        </li>
      </div >`).join("")}function $(e,t){new IntersectionObserver(i=>{i.forEach(s=>{if(s.isIntersecting){let h=function(){r<o.length&&(e.innerHTML+=o.charAt(r),r++,setTimeout(h,t))};if(e.dataset.typingStarted)return;e.dataset.typingStarted="true";const o=e.innerHTML;let r=0;e.innerHTML="",h()}})},{threshold:.5}).observe(e)}const R=document.querySelector(".footer-form");v.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function H(e,t){return await v.post("/requests/",{email:e,comment:t})}R.addEventListener("submit",W);function W(e){e.preventDefault();const t=e.target,{userEmail:n,userComments:i}=t.elements;H(n.value,i.value).then(s=>{const o=k.create(` 
      <div id="modalW" class="backdrop visually-hidden">
                     <div class="modal-window">
      <button class="modal-button" type="button" aria-label="close-button">
          <svg class="modal-btn-icon" width="22" height="22">
                  <use href="../img/icons/sprites.svg#closeX"></use>
          </svg>
      </button>
      <h3 class="modal-title">${s.data.title}</h3>
      <p class="modal-text">${s.data.message}
      </p>
  </div>
  </div>`);o.show(),t.addEventListener("keydown",r=>{r.keyCode===27&&o.close()}),G(o),n.value="",i.value=""}).catch(s=>{alert(s),console.log("gg")})}function G(e){e.element().querySelector(".modal-button").onclick=()=>e.close()}
//# sourceMappingURL=commonHelpers.js.map