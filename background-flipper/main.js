const colors=["green", "red", "rgba(133,122,200)","#f15025"];
const buttonEl=document.getElementById("btn");
const newBackgroundColor=document.querySelector(".color")

buttonEl.addEventListener("click", function(){
    let randomNumber=Math.floor(Math.random()*colors.length)
    newBackgroundColor.textContent= colors[randomNumber]
    document.body.style.backgroundColor=colors[randomNumber]
})