import{A as l}from"./assets/vendor-fb907431.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const i=document.querySelector("#modalWindow"),m=document.querySelector("#burgerBtn"),f=document.querySelector(".close");document.querySelector(".modal-content");m.onclick=function(){i.style.display="block"};f.onclick=function(){i.style.display="none"};document.onclick=function(e){e.target===i&&(i.style.display="none")};document.addEventListener("keydown",p);function p(e){(e.key==="Escape"||e.key==="Esc")&&(i.style.display="none")}const y=document.querySelector(".menu");document.querySelectorAll(".menu-list");const r=document.querySelector(".hidden-menu");y.addEventListener("click",h);function h(e){r.classList.contains("hidden-menu")?(r.classList.remove("hidden-menu"),r.classList.add("visible-menu")):(r.classList.remove("visible-menu"),r.classList.add("hidden-menu")),e.stopPropagation()}new l(".accordion-container-second",{duration:500,showMultiple:!0});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("ac-0"),o=document.querySelector(".accordion-content.ac-panel");e.classList.add("is-active"),o.style.height="auto"});document.addEventListener("DOMContentLoaded",function(){const e=new IntersectionObserver(c=>{c.forEach((s,t)=>{s.isIntersecting&&setTimeout(()=>{s.target.classList.add("visible")},t*250)})});document.querySelectorAll(".move-card").forEach(c=>e.observe(c))});new l(".accordion-container",{duration:500,showMultiple:!0});const u=document.querySelector(".list");console.log(u);async function a(){return await fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json())}a().then(e=>{u.insertAdjacentHTML("beforeend",L(e))});function L(e){return e.map(({_id:o,author:c,avatar_url:s,review:t})=>`<li id="${o}">
        <img src="${s}" alt="${c}">
        <h2>${c}</h2>
        <p>${t}</p>
    </li>`).join("")}a().then(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
