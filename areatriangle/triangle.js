function heron() {
    let c1 = parseFloat(document.getElementById("i1").value);
    let s1 = parseFloat(document.getElementById("j1").value);
    let c2 = parseFloat(document.getElementById("i2").value);
    let s2 = parseFloat(document.getElementById("j2").value);
    let c3 = parseFloat(document.getElementById("i3").value);
    let s3 = parseFloat(document.getElementById("j3").value);
    let a, b, c;
    a = Math.sqrt((Math.pow((c2 - c1), 2)) + (Math.pow((s2 - s1), 2)));
    b = Math.sqrt((Math.pow((c2 - c3), 2))) + (Math.pow((s2 - s3), 2));
    c = Math.sqrt((Math.pow((c3 - c1), 2)) + (Math.pow((s3 - s1), 2)));
    let s = a + b + c / 2; //formula
    let result = Math.sqrt(s * (s - a) * (s - b) * (s - c)); //formula of herons
    let output = document.getElementById("output");
    let r5 = parseFloat(output.value);
    output.value = result.toString();
}
//# sourceMappingURL=triangle.js.map