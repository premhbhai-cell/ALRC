
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");const n=e.target.querySelector("[data-n]");if(n&&!n.done){n.done=1;const t=+n.dataset.n,s=n.dataset.s||"+";let c=0;const i=setInterval(()=>{c+=Math.ceil(t/40);if(c>=t){c=t;clearInterval(i)}n.textContent=c+s},30)}io.unobserve(e.target)}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const nv=document.getElementById("nv");document.getElementById("bg").onclick=()=>nv.classList.toggle("open");
const cf=document.getElementById("cf");if(cf)cf.onsubmit=e=>{e.preventDefault();document.getElementById("ok").style.display="block";e.target.reset()};
(function(){const sd=[...document.querySelectorAll(".sd")];if(!sd.length)return;const dt=document.querySelector(".dots");let c=0,t;
sd.forEach((_,i)=>{const b=document.createElement("button");b.setAttribute("aria-label","Slide "+(i+1));b.onclick=()=>go(i);dt.appendChild(b)});
function go(i){c=(i+sd.length)%sd.length;sd.forEach((s,k)=>s.classList.toggle("on",k===c));dt.querySelectorAll("button").forEach((b,k)=>b.classList.toggle("on",k===c));clearInterval(t);t=setInterval(()=>go(c+1),4500)}
document.querySelector(".ar.p").onclick=()=>go(c-1);document.querySelector(".ar.n").onclick=()=>go(c+1);go(0)})();
