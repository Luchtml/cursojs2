(()=>{"use strict";function t(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(t.removeAttribute(a),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,c)}))})),t.setAttribute(a,""))}fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))})),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}function a(t){t.target===this&&o(t)}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",a)}}(),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]');if(t.length){const e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}n(),window.addEventListener("scroll",n)}}(),function(){const t=document.querySelectorAll("[data-anime='accordion'] dt"),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');if(t.length&&e.length){function n(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}e[0].classList.add("ativo"),t.forEach(((t,e)=>{t.addEventListener("click",(()=>{n(e)}))}))}}(),function(){function t(t){const o=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);o.style.top=t.pageY+"px",o.style.left=t.pageX+"px",e.tooltipBox=o,this.addEventListener("mousemove",e),n.tooltipBox=o,n.element=this,this.addEventListener("mouseleave",n)}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)}));const e={handleEvent(t){this.tooltipBox.style.top=t.pageY+25+"px",this.tooltipBox.style.left=t.pageX+"px"}},n={tooltipBox:"",element:"",handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",n),this.element.removeEventListener("mousemove",e)}}}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((n=>{t.addEventListener(n,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"'),n=document.querySelector('[data-menu="list"'),o=["click","touchstart"];if(e){function a(){n.classList.add("active"),e.classList.add("active"),t(n,o,(()=>{n.classList.remove("active"),e.classList.remove("active")}))}o.forEach((t=>e.addEventListener(t,a)))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),i=-1!==e.indexOf(a),s=c>=n[0]&&c<n[1];i&&s&&t.classList.add("aberto")}(),async function(t){const e=await fetch("./animaisapi.json"),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),50*Math.random())})))}));e.observe(t,{attributes:!0})}()}()})();