const btnElement = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const iconElement = document.querySelector('i');

btnElement.addEventListener('click', () =>{
  createPassword();
})

iconElement.addEventListener('click', () =>{
  copyPassword();
});
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVW";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&'()*+,-./:;<=>";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];

  }

  inputElement.value = password;
}

function copyPassword() {
  inputElement.select();
  document.execCommand("copy");
}

