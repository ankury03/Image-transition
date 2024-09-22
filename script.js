const ImgBox = document.querySelector(".img-box");
const ImgWrap = document.querySelector(".img-wrap");
const original = document.querySelector("#original");
const line = document.querySelector("#line");

original.style.width = ImgBox.offsetWidth + "px";
var left = ImgBox.offsetLeft;


ImgBox.onmousemove = function(e){
   var boxWidth = (e.pageX - left) + "px";
   ImgWrap.style.width = boxWidth;
   line.style.left = boxWidth;
}