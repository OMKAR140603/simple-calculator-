var lenth = document.getElementById("length");
var breadth = document.getElementById("breadth");
var display = document.getElementById("display");
function Area() {
    var mylength = parseInt(lenth.value);
    var mybreadth = parseInt(breadth.value);
    var myarea = mylength * mybreadth;
    display.value = myarea.toString();
}
//# sourceMappingURL=rect.js.map