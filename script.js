console.log("sanity check");

var clientXBox = document.getElementById('clientX')
var clientYBox = document.getElementById('clientY')
var offsetXBox = document.getElementById('offsetX')
var offsetYBox = document.getElementById('offsetY')
var screenXBox = document.getElementById('screenX')
var screenYBox = document.getElementById('screenY')

document.addEventListener("mousemove", function(e) {
    console.log(e);
    clientXBox.innerText = "clientX: " + e.clientX;
    clientYBox.innerText = "clientY: " + e.clientY;
    offsetXBox.innerText = "offsetX: " + e.offsetX;
    offsetYBox.innerText = "offsetY: " + e.offsetY;
    screenXBox.innerText = "screenX: " + e.screenX;
    screenYBox.innerText = "screenY: " + e.screenY;
});
