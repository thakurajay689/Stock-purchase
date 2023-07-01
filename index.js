var initialPrice = document.querySelector("#initial-prize");
var quantityStocks = document.querySelector("#Quantity-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputE1 = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qs = Number(quantityStocks.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qs, curr)
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    // console.log(
    //   `Hey the loss is" ${loss} and the percent is ${lossPercentage}%`
      outputE1.innerText = `Hey the loss is" ${loss} and the percent is ${lossPercentage}%`;
    // );
  } else if (current > initial) {

    var profit=(current-initial)*quantity;
    var profitPercentage = (profit/initial)*100;
    // console.log(
    //     `Hey the profit is" ${profit} and the percent is ${profitPercentage}%`);
        outputE1.innerText =  `Hey the profit is" ${profit} and the percent is ${profitPercentage}%`;
  } else {
    console.log("no pain no gain and no gain no pain");
  }
}
//  