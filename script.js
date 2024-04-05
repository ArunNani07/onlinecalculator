let btns=document.getElementsByClassName("btn")
let screens=document.getElementById("screen")
for( let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>
    {
        screens.value=screens.value+btns[i].innerText
    })
}
let eq=document.getElementById("equal")
eq.addEventListener("click",()=>
{
    screens.value=eval(screens.value)
}
)
let acs=document.getElementById("ac")
acs.addEventListener("click",()=>
{
    screens.value=" "
}
)
let ces=document.getElementById("ce")
ces.addEventListener("click",()=>
{
      let d=screens.value
      screens.value=Math.trunc(d/10)
      if (screens.value==0) {
        screens.value=""
      }
}
)