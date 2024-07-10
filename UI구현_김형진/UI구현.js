const area= document.querySelector(".area");
const widthSize = document.querySelector("#width");
const heightSize = document.querySelector("#height");
const fSize = document.querySelector("#fontSize");


const fColor = document.querySelector("#fColor");
const bgColor = document.querySelector("#bgColor");

const oText = document.querySelector("#outputText");


const applying = document.querySelector("#Applying");

applying.addEventListener("click", function(){
  const n = document.querySelector("[name = fontWeigt]:checked");



  area.style.width = widthSize.value +"px";
  
  area.style.height = heightSize.value +"px";

  area.style.fontSize = fSize.value +"px";

  area.style.color = fColor.value;

  area.style.backgroundColor = bgColor.value;




  
})