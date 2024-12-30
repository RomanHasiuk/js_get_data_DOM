var t=document.querySelectorAll(".population"),e=0,o=0;t.forEach(function(t){var n=parseInt(t.textContent.replace(/,/g,""),10);!isNaN(n)&&(e+=n,o++)});var n=e/o,r=function(t){return t.toLocaleString("en-US")};document.querySelector(".total-population").textContent=r(e),document.querySelector(".average-population").textContent=r(Math.round(n));
//# sourceMappingURL=index.b509d3e8.js.map
