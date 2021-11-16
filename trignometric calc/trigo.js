let input1 = document.getElementById("i1");
let input2 = document.getElementById("i2");
let input3 = document.getElementById("i3");
let output1 = document.getElementById("a1");
let output2 = document.getElementById("a2");
let output3 = document.getElementById("a3");
// **************************
let input4 = document.getElementById("j1");
let input5 = document.getElementById("j2");
let input6 = document.getElementById("j3");
let output4 = document.getElementById("a4");
let output5 = document.getElementById("a5");
let output6 = document.getElementById("a6");
function sin() {
    let x;
    x = parseFloat(input1.value);
    let result = Math.sin(x * Math.PI / 180);
    output1.value = result.toString();
}
function cos() {
    let x;
    x = parseFloat(input2.value);
    let result = Math.cos(x * Math.PI / 180);
    output2.value = result.toString();
}
function tan() {
    let x;
    x = parseFloat(input3.value);
    let result = Math.tan(x * Math.PI / 180);
    output3.value = result.toString();
}
function sinh() {
    let x;
    x = parseFloat(input4.value);
    let result = Math.asin(x);
    result = result * 180 / 3.14;
    output4.value = result.toString();
}
function cosh() {
    let x;
    x = parseFloat(input5.value);
    let result = Math.acos(x);
    result = result * 180 / 3.14;
    output5.value = result.toString();
}
function tanh() {
    let x;
    x = parseFloat(input6.value);
    let result = Math.atan(x);
    result = result * 180 / 3.14;
    output6.value = result.toString();
}
//# sourceMappingURL=trigo.js.map