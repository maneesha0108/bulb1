function Add(){
    let a = document.getElementById('inp1').value
    let b = document.getElementById('inp2').value
    a=parseInt(a)
    b=parseInt(b)

    let sum=a+b
    let r = document.getElementById('result')
    r.innerHTML=sum
}
function sub(){
    let a = document.getElementById('inp1').value
    let b = document.getElementById('inp2').value
    a=parseInt(a)
    b=parseInt(b)

    let sub=a-b
    let r = document.getElementById('result')
    r.innerHTML=sub
}
function mul(){
    let a = document.getElementById('inp1').value
    let b = document.getElementById('inp2').value
    a=parseInt(a)
    b=parseInt(b)

    let mul=a*b
    let r = document.getElementById('result')
    r.innerHTML=mul
}
function div(){
    let a = document.getElementById('inp1').value
    let b = document.getElementById('inp2').value
    a=parseInt(a)
    b=parseInt(b)

    let div=a/b
    let r = document.getElementById('result')
    r.innerHTML=div
}



