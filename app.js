const change = document.getElementById("change-btn");
const button = document.getElementById("paybtn");

change.addEventListener("mousedown", () => {
  change.childNodes[1].style.textDecoration = "none";
  change.childNodes[1].style.color = "hsl(224, 23%, 55%)";
});
change.addEventListener("mouseup", () => {
  change.childNodes[1].style.textDecoration = "underline";
  change.childNodes[1].style.color = "hsl(223, 47%, 23%)";
});


button.addEventListener('mousedown',()=>{
    button.style.boxShadow = 'none'
    button.style.backgroundColor = 'hsl(224, 23%, 55%)'
})
button.addEventListener('mouseup',()=>{
    button.style.boxShadow = '0px 15px 25px -8px rgba(0, 0, 0, 0.37)'
    button.style.backgroundColor = 'hsl(245, 75%, 52%)'


})
