const currencies = {
  USD: { amount: 1000, savings: 200 },
  EUR: { amount: 850, savings: 150 },
  GBP: { amount: 750, savings: 100 },
};

// Function to update balance and savings
function updateBalanceAndSavings() {
  const balanceBox = document.getElementById("balance");
  const savingsBox = document.getElementById("savings");

  const selectedCurrency = document.getElementById("currency-select").value;
  const { amount, savings } = currencies[selectedCurrency];

  balanceBox.innerHTML = `<p>Balance: ${amount.toFixed(
    2
  )} ${selectedCurrency}</p>`;
  savingsBox.innerHTML = `<p>Savings: ${savings.toFixed(
    2
  )} ${selectedCurrency}</p>`;
}

// Function to handle adding expenses or income
function handleTransaction(type) {
  const selectedCurrency = document.getElementById("currency-select").value;
  const transactionAmount = parseFloat(
    prompt(`Enter ${type === "expense" ? "Expense" : "Income"} amount:`)
  );

  if (!isNaN(transactionAmount)) {
    if (type === "expense") {
      currencies[selectedCurrency].amount -= transactionAmount;
    } else {
      currencies[selectedCurrency].amount += transactionAmount;
    }
    updateBalanceAndSavings();
  }
}

// Event listener for currency selection change
document
  .getElementById("currency-select")
  .addEventListener("change", updateBalanceAndSavings);

// Update balance and savings initially
updateBalanceAndSavings();
