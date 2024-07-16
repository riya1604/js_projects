const starsElement = document.querySelectorAll('.fa-star')

console.log(starsElement);

const emojisElement = document.querySelectorAll('.far')

console.log(emojisElement);

starsElement.forEach((starsElement, index) => {
  starsElement.addEventListener("click", () => {
    updateRating(index);
  })
})

function updateRating(index){
  starsElement.forEach((starsElement, idx)=>{
    if(idx< index +1){
      starsElement.classList.add("active");
    } else{
      starsElement.classList.remove("active");
    }
  })

  emojisElement.forEach(emojisElement =>{
    emojisElement.style.transform = `translateX(-${index *50}px)`;
  })
}