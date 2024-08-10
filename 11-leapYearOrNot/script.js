const btnElement = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const textElement = document.querySelector('.js-text');

btnElement.addEventListener("click", ()=>{
  checkLeapYear();
})

let inputValue ='';
function checkLeapYear(){
  inputValue = inputElement.value;
  console.log(inputValue);

  if((inputValue % 400 ==0) || (inputValue % 4 == 0 && inputValue % 100 != 0 )) {
    textElement.innerHTML = `${inputValue} is a leap year!`;
    textElement.style.color = "green";
  } else{
    textElement.innerHTML = `${inputValue} is not a leap year`;
    textElement.style.color = "red";
  }

  inputElement.value =" ";
}

