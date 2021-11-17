const base = document.getElementById("appdemo-base");
const overlay = document.getElementById("appdemo-overlay");

window.onload = onResize();
window.addEventListener('resize', onResize, true);

function onResize () {
    var width = overlay.offsetWidth;
    var height = overlay.offsetHeight;
    var cropX = 0.1845 * width; //0.182
    var cropY = 0.077 * height; //0.080
    var offsetX = -0.00 * width;
    var offsetY = 0.013 * height;
    var viewportOffset = overlay.getBoundingClientRect();
    
    base.style.width = (overlay.offsetWidth - cropX) + "px";
    base.style.height = (overlay.offsetHeight - cropY) + "px";
    base.style.left = (viewportOffset.left + (cropX * 0.5) - offsetX) + "px";
    base.style.top = (viewportOffset.top + (cropY * 0.5) - offsetY) + "px";
}