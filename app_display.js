const base = document.getElementById("appdemo-base");
const overlay = document.getElementById("appdemo-overlay");

window.onload = onResize();
window.addEventListener('resize', onResize, true);

function onResize () {
    var width = overlay.offsetWidth;
    var height = overlay.offsetHeight;
    var cropX = 0.182 * width; //0.182
    var cropY = 0.077 * height; //0.080
    var offsetY = 0.013 * height;
    var viewportOffset = overlay.getBoundingClientRect();
    
    base.style.width = (overlay.offsetWidth - cropX) + "px";
    base.style.height = (overlay.offsetHeight - cropY) + "px";
    base.style.left = (viewportOffset.left + (cropX * 0.5)) + "px";
    base.style.top = (viewportOffset.top + (cropY * 0.5) - offsetY) + "px";
}