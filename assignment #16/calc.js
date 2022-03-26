let result = document.getElementById("result");

function calculate() {
  let caratWeight = document.getElementById("carat").value;
  let returnGold = document.getElementById("returnGold");

  let makingCharge = 0.1 * caratWeight;
  let jewelWastage = 0.2 * caratWeight;
  let tax = 0.02 * caratWeight;

  let oldGold = caratWeight - 0.12 * caratWeight;
  let netAmount = makingCharge + jewelWastage + tax;
  result.innerText = netAmount;
  result.innerText = returnGold.checked ? oldGold : netAmount;
}
