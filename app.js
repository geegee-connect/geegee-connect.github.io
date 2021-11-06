const base = document.getElementById("appdemo-base");
const overlay = document.getElementById("appdemo-overlay");

window.onload = onResize();
window.addEventListener('resize', onResize, true);

function onResize () {
    var offX = 20;
    var offY = 20;
    
    base.style.width = (overlay.offsetWidth - offX * 2) + "px";
    base.style.height = (overlay.offsetHeight - offY * 2) + "px";
    var viewportOffset = overlay.getBoundingClientRect();
    base.style.left = (viewportOffset.left + offX) + "px";
    base.style.top = (viewportOffset.top + offY - 10) + "px";
}