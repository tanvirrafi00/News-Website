(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h=document.querySelector(".toogle-btn"),a=document.querySelector(".dropdown-menu"),v=document.querySelector(".search_icon"),u=document.querySelector(".large_screen_search "),L=document.querySelector(".search_input"),E=document.querySelector(".sports"),b=document.querySelector(".politics"),w=document.querySelector(".entertainment");h.addEventListener("click",()=>{a.classList.toggle("top-16")});v.addEventListener("click",()=>{u.classList.toggle("active")});const d=document.querySelector(".container");async function n(r){try{const c=(await(await fetch(`https://newsapi.org/v2/everything?q=${r}&apiKey=7d636327d2274c83a60cb487a941863d`)).json()).articles;d.innerHTML=`${c.map(e=>{const{url:t,title:s,author:p,content:g,urlToImage:f,publishedAt:m,source:y}=e,l=m.split("T");if(p)return`  <a
              href=${t}
              class=" flex flex-col gap-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class="rounded-t-lg"
                src=${f}
                alt=""
              />
              <div class="flex flex-col gap-2 p-4">
                <h5
                  class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${s}
                </h5>
                <p class="mr-3 text-lg">${y.name}<span class="p-5">${l[0]} ${l[1]}</span></p>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                 ${g}
                </p>
              </div>
            </a>`}).join("")}`}catch(o){d.innerHTML=o.msg}}n("Bangladesh");L.addEventListener("keypress",r=>{r.key=="Enter"&&(a.classList.toggle("top-16"),n(r.target.value),r.target.value="")});u.addEventListener("keypress",r=>{r.key=="Enter"&&(a.classList.toggle("top-16"),n(r.target.value),r.target.value="")});E.addEventListener("click",()=>{n("sports")});b.addEventListener("click",()=>{n("politics")});w.addEventListener("click",()=>{n("entertainment")});
