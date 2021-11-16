function heron()
{
    let c1:number=parseFloat((<HTMLInputElement>document.getElementById("i1")).value)
    let s1:number=parseFloat((<HTMLInputElement>document.getElementById("j1")).value)
    let c2:number=parseFloat((<HTMLInputElement>document.getElementById("i2")).value)
    let s2:number=parseFloat((<HTMLInputElement>document.getElementById("j2")).value)
    let c3:number=parseFloat((<HTMLInputElement>document.getElementById("i3")).value)
    let s3:number=parseFloat((<HTMLInputElement>document.getElementById("j3")).value)

    let a,b,c:number;
    a = Math.sqrt((Math.pow((c2-c1),2)) + (Math.pow((s2-s1),2)))
    b = Math.sqrt((Math.pow((c2-c3),2))) + (Math.pow((s2-s3),2))
    c= Math.sqrt((Math.pow((c3-c1),2)) + (Math.pow((s3-s1),2)))
    
    let s:number=a+b+c/2;//formula
    let result=Math.sqrt(s*(s-a)*(s-b)*(s-c))//formula of herons
    let output:HTMLInputElement=<HTMLInputElement>document.getElementById("output")
    let r5:number=parseFloat(output.value)
    output.value=result.toString()
}