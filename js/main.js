
function getElementValue(playerNumber) {

    const budgetOfPlayer = document.getElementById(playerNumber);
    const budgetOfPlayerString = budgetOfPlayer.value;
    const totalBudgets = parseFloat(budgetOfPlayerString);

    return totalBudgets;
}


function getElementText(amountPlayer, playerValue) {

    const playerNumber = document.getElementById(amountPlayer);
    playerNumber.innerText = playerValue;

}
