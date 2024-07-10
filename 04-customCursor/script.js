let main = document.querySelector("main");

let cursorPointer = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets){
  cursorPointer.style.left = dets.x+ "px";
  cursorPointer.style.top = dets.y+ "px";
})