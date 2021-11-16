

let input1:HTMLInputElement = <HTMLInputElement>document.getElementById("i1");
let input2:HTMLInputElement = <HTMLInputElement>document.getElementById("i2");
let input3:HTMLInputElement = <HTMLInputElement>document.getElementById("i3");
let output1:HTMLInputElement = <HTMLInputElement>document.getElementById("a1");
let output2:HTMLInputElement = <HTMLInputElement>document.getElementById("a2");
let output3:HTMLInputElement = <HTMLInputElement>document.getElementById("a3");

// **************************

let input4:HTMLInputElement = <HTMLInputElement>document.getElementById("j1");
let input5:HTMLInputElement = <HTMLInputElement>document.getElementById("j2");
let input6:HTMLInputElement = <HTMLInputElement>document.getElementById("j3");
let output4:HTMLInputElement = <HTMLInputElement>document.getElementById("a4");
let output5:HTMLInputElement = <HTMLInputElement>document.getElementById("a5");
let output6:HTMLInputElement = <HTMLInputElement>document.getElementById("a6");

//

/**** */
function sin()//calculating sine value
{

let x:number;
x = parseFloat(input1.value);
let result:number = Math.sin(x*Math.PI/180);
output1.value = result.toString();
}
function cos()
{//calculating cosine value

let x:number;
x = parseFloat(input2.value);
let result:number = Math.cos(x*Math.PI/180);
output2.value = result.toString();
}
function tan()
{//calculating tangent value

let x:number;
x = parseFloat(input3.value);
let result:number = Math.tan(x*Math.PI/180);
output3.value = result.toString();
}



function sinh()
{//calculating sine inverse value

let x:number;
x = parseFloat(input4.value);
let result:number = Math.asin(x);
result=result*180/3.14
output4.value = result.toString();
}

function cosh()
{//calculating cos inverse value

let x:number;
x = parseFloat(input5.value);
let result:number = Math.acos(x);
result=result*180/3.14
output5.value = result.toString();
}

function tanh()
{//calculating tangent inverse value

let x:number;
x = parseFloat(input6.value);
let result:number = Math.atan(x);
result=result*180/3.14
output6.value = result.toString();
}
