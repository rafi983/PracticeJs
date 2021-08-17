const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");
const depositInput = document.getElementById("deposit-input");
const depositTotal = document.getElementById("deposit-total");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawTotal = document.getElementById("withdraw-total");
const balanceTotal = document.getElementById("balance-total");

depositButton.addEventListener("click", function () {
  const depositInputAmount = parseFloat(depositInput.value);
  const prevDepositTotalAmount = parseFloat(depositTotal.innerText);
  depositTotal.innerText = depositInputAmount + prevDepositTotalAmount;
  depositInput.value = "";

  const prevBalanceTotalAmount = parseFloat(balanceTotal.innerText);
  balanceTotal.innerText = prevBalanceTotalAmount + depositInputAmount;
});

withdrawButton.addEventListener("click", function () {
  const withdrawInputAmount = parseFloat(withdrawInput.value);
  const prevWithdrawTotalAmount = parseFloat(withdrawTotal.innerText);
  withdrawTotal.innerText = withdrawInputAmount + prevWithdrawTotalAmount;
  withdrawInput.value = "";

  const prevBalanceTotalAmount = parseFloat(balanceTotal.innerText);
  balanceTotal.innerText = prevBalanceTotalAmount - withdrawInputAmount;
});
