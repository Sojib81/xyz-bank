const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", function () {
  const loginContainer = document.getElementById("login-form-container");
  loginContainer.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

const btnDeposit = document.getElementById("btn-deposit");

btnDeposit.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount");
  var inputValue = parseFloat(depositAmount.value);

  // const initialDeposit = document.getElementById("initial-deposit").innerText;
  // console.log(initialDeposit);
  // const initialDepositNumber = parseFloat(initialDeposit);

  // const finalDepositAmount = initialDepositNumber + inputValue;

  // document.getElementById("initial-deposit").innerText = finalDepositAmount;
  updateSpanText("initial-deposit", inputValue);
  updateSpanText("initialBalance", inputValue);

  document.getElementById("deposit-amount").value = "";
});

//btn-withdraw
const btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  console.log(withdrawAmount, "withdrwAmount");
  withdrawAmountNumber = parseFloat(withdrawAmount);
  updateSpanText("initial-withdraw", withdrawAmountNumber);
  updateSpanText("initialBalance", -1 * withdrawAmountNumber);
});

function updateSpanText(id, inputValue) {
  const balanceValue = document.getElementById(id).innerText;
  balanceValueNumber = parseFloat(balanceValue);
  const totalBalance = inputValue + balanceValueNumber;
  document.getElementById(id).innerText = totalBalance;
}
