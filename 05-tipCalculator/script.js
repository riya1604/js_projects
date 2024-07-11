let productCostInput = document.querySelector('.js-input-cost')

let tipPercentageInput = document.querySelector('.js-input-tip')

let totalElement = document.querySelector('.js-calculate')

let displayTotal = document.querySelector('.js-total');



let result;
function calculateTotalCost (){

    productVal = productCostInput.value
    tipPercentage = tipPercentageInput.value


   result = productVal * (1 + tipPercentage / 100);

  displayTotal.innerText = `Total cost: ${result.toFixed(2)}`;


}

totalElement.addEventListener('click', calculateTotalCost, 
false);



