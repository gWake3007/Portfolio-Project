import{A as d,S as p}from"./assets/vendor-7cabdd82.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const r=document.querySelector("#modalWindow"),y=document.querySelector("#burgerBtn"),v=document.querySelector(".close"),h=document.querySelector(".modal-content");y.onclick=function(){r.style.display="block"};v.onclick=function(){r.style.display="none"};document.onclick=function(e){e.target===r&&(r.style.display="none")};document.addEventListener("keydown",L);function L(e){(e.key==="Escape"||e.key==="Esc")&&(r.style.display="none")}h.addEventListener("click",g);function g(e){e.currentTarget&&(r.style.display="none")}const b=document.querySelector(".menu"),w=document.querySelectorAll(".menu-list"),s=document.querySelector(".hidden-menu");b.addEventListener("click",E);function E(e){s.classList.contains("hidden-menu")?(s.classList.remove("hidden-menu"),s.classList.add("visible-menu")):(s.classList.remove("visible-menu"),s.classList.add("hidden-menu")),e.stopPropagation()}w.forEach(e=>{e.addEventListener("click",q)});function q(e){s.classList.remove("visible-menu"),s.classList.add("hidden-menu"),e.stopPropagation()}document.addEventListener("click",S);function S(){s.classList.remove("visible-menu"),s.classList.add("hidden-menu")}new d(".accordion-container-second",{duration:500,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("ac-0"),n=document.querySelector(".accordion-content.ac-panel");e.classList.add("is-active"),n.style.height="auto"});new p(".swiper",{slidesPerView:"auto",spaceBetween:0,loop:!0,navigation:{nextEl:".swiper-button-next"},breakpoints:{768:{slidesPerView:"auto",spaceBetween:0},1440:{slidesPerView:"auto",spaceBetween:0}}});document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(c=>{c.forEach((i,t)=>{i.isIntersecting&&setTimeout(()=>{i.target.classList.add("visible")},t*250)})});document.querySelectorAll(".move-card").forEach(c=>e.observe(c))});new d(".accordion-container",{duration:500,showMultiple:!0});const u=document.querySelector(".section-covers");function a(e){const n=u.querySelector(".container-covers");e?n.classList.add("animate-marquee"):n.classList.remove("animate-marquee"),console.log(n,"hello!!!")}const O=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting?a(!0):a(!1)})});O.observe(u);const m=document.querySelector(".list");console.log(m);async function f(){return await fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json())}f().then(e=>{m.insertAdjacentHTML("beforeend",k(e))});function k(e){return e.map(({_id:n,author:c,avatar_url:i,review:t})=>`<li id="${n}">
        <img src="${i}" alt="${c}">
        <h2>${c}</h2>
        <p>${t}</p>
    </li>`).join("")}f().then(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map