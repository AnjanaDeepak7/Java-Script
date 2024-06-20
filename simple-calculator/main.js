let firstEl=document.querySelector(".first-el")
let secondEl=document.querySelector(".second-el")
let addEl=document.querySelector(".add-el")
let subtractEl=document.querySelector(".subtract-el")
let divideEl=document.querySelector(".divide-el")
let multiplyEl=document.querySelector(".multiply-el")
let resultEl=document.querySelector(".result-el")
let sum=0

firstEl.textContent=8
secondEl.textContent=2

addEl.addEventListener("click",function(){
    sum=firstEl.textContent+secondEl.textContent
    resultEl.textContent+=sum
})
subtractEl.addEventListener("click",function(){
    sum=firstEl.textContent-secondEl.textContent
    resultEl.textContent+=sum
})
multiplyEl.addEventListener("click",function(){
    sum=firstEl.textContent*secondEl.textContent
    resultEl.textContent+=sum
})
divideEl.addEventListener("click",function(){
    sum=firstEl.textContent/secondEl.textContent
    resultEl.textContent+=sum
})
