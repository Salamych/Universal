!function(){"use strict";class t{constructor(){this.items=document.querySelectorAll(".float-asside__item"),this.floatAsside=document.querySelector(".float-asside"),this.floatAsside.addEventListener("click",(t=>{(t.target.classList.contains("float-asside__item")||t.target.classList.contains("float-asside__item-title")||t.target.classList.contains("float-asside__item-description"))&&(this.items.forEach((t=>{t.classList.contains("float-asside__item-active")&&t.classList.remove("float-asside__item-active")})),t.target.classList.contains("float-asside__item")?t.target.classList.add("float-asside__item-active"):(t.target.classList.contains("float-asside__item-title")||t.target.classList.contains("float-asside__item-description"))&&t.target.parentElement.classList.add("float-asside__item-active"))}))}}class e{constructor(){this.comentItems=document.querySelector(".travel-comments__main-list"),this.counts=document.querySelectorAll(".travel-comments__main-list_item-author_overview-social_count"),this.comentItems.addEventListener("click",(t=>{if(t.target.classList.contains("travel-comments__main-list_item-author_overview-social_like")||t.target.classList.contains("like-svg"))if(console.log(t.target),t.target.classList.contains("like-svg")){let e=t.target.parentNode.parentNode.nextElementSibling;this.countPlus(e)}else{let e=t.target.nextElementSibling;this.countPlus(e)}if(t.target.classList.contains("travel-comments__main-list_item-author_overview-social_dislike")||t.target.classList.contains("dislike-svg"))if(t.target.classList.contains("dislike-svg")){let e=t.target.parentNode.parentNode.previousElementSibling;this.countMinus(e)}else{let e=t.target.previousElementSibling;this.countMinus(e)}}))}countMinus(t){let e=parseInt(t.innerText,10);e--;let s=e>0?"+":"";t.textContent=`${s}${e}`,this.toggleClass(t)}countPlus(t){let e=parseInt(t.innerText,10);e++;let s=e>0?"+":"";t.textContent=`${s}${e}`,this.toggleClass(t)}toggleClass(t){let e=parseInt(t.innerText,10);e>0?t.classList.contains("color-tech")||t.classList.add("color-tech"):0==e?(t.classList.remove("color-tech"),t.classList.remove("color-science")):e<0&&(t.classList.contains("color-science")||t.classList.add("color-science"))}}window.addEventListener("load",(function(){null!==document.querySelector(".float-asside")&&new t,null!==document.querySelector(".travel-comments__main-list")&&new e}))}();