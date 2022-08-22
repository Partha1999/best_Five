document.getElementById('per-player-calculate').addEventListener('click',function(){
   
     
    const perPlayerBudget = getElementValue('player-budget-input');
    

    const allPlayerExpenses = perPlayerBudget * 5 ;
    
    getElementText('expenses',allPlayerExpenses);

});


document.getElementById('total').addEventListener('click',function(){
    
     
    const managerBudgets = getElementValue('manager-input');

    const cocahbudgets = getElementValue('coach-input');


    const budgetOfPlayer = document.getElementById('expenses');
    const budgetOfPlayerString = budgetOfPlayer.innerText;
    const totalBudgets = parseFloat(budgetOfPlayerString);

    const calculateTotalbudgets = managerBudgets + cocahbudgets + totalBudgets ;

    getElementText('total-budget',calculateTotalbudgets);
    
});
