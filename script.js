var clientXBox = document.getElementById('clientX');
var clientYBox = document.getElementById('clientY');
var offsetXBox = document.getElementById('offsetX');
var offsetYBox = document.getElementById('offsetY');
var screenXBox = document.getElementById('screenX');
var screenYBox = document.getElementById('screenY');
var indicatorX = document.getElementById('indicatorX');
var indicatorY = document.getElementById('indicatorY');
var offsetIndicatorX = document.getElementById('offsetIndicatorX');
var offsetIndicatorY = document.getElementById('offsetIndicatorY');
var clientBox = document.getElementById('client');
var offsetBox = document.getElementById('offset');

clientBox.addEventListener("click", function() {
    if (clientBox.classList.length == 2) {
        indicatorX.style.display = "none";
        indicatorY.style.display = "none";
    } else {
        indicatorX.style.display = "block";
        indicatorY.style.display = "block";
    }
    clientBox.classList.toggle("selected");
});

offsetBox.addEventListener("click", function() {
    if (offsetBox.classList.length == 2) {
        offsetIndicatorX.style.display = "none";
        offsetIndicatorY.style.display = "none";
    } else {
        offsetIndicatorX.style.display = "block";
        offsetIndicatorY.style.display = "block";
    }
    offsetBox.classList.toggle("selectedpink");
});


document.addEventListener("mousemove", function(e) {
    clientXBox.innerText = "clientX: " + e.clientX;
    clientYBox.innerText = "clientY: " + e.clientY;
    offsetXBox.innerText = "offsetX: " + e.offsetX;
    offsetYBox.innerText = "offsetY: " + e.offsetY;
    screenXBox.innerText = "screenX: " + e.screenX;
    screenYBox.innerText = "screenY: " + e.screenY;
    indicatorX.style.height = e.clientY + "px";
    indicatorX.style.left = e.clientX -5 + "px";
    indicatorY.style.width = e.clientX + "px";
    indicatorY.style.top = e.clientY -5 + "px";
    offsetIndicatorY.style.height = e.offsetY + "px";
    offsetIndicatorY.style.left = e.clientX -10 + "px";
    offsetIndicatorY.style.top = e.clientY - e.offsetY + "px";
    offsetIndicatorX.style.width = e.offsetX + "px";
    offsetIndicatorX.style.top = e.clientY -10 + "px";
    offsetIndicatorX.style.left = e.clientX - e.offsetX  + "px";
});
