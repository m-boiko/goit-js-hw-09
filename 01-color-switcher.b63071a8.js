!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){t.disablet=!0,e.disablet=!1,setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disable=!1,e.disablet=!0}))}();
//# sourceMappingURL=01-color-switcher.b63071a8.js.map