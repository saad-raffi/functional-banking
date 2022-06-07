function getInputValue() {
    const foodCostTotal = document.getElementById('foodcost-input');
    const foodCostTotalText = foodCostTotal.value;
    foodCostTotal.innerHTML = foodCostTotalText;
    const foodCostAmount = parseFloat(foodCostTotalText);
    return foodCostAmount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeTotal = document.getElementById('income-total');
    const foodCostTotal = document.getElementById('foodcost-input');
    const rentCostTotal = document.getElementById('rentcost-input');
    const clothingCostTotal = document.getElementById('clothingcost-input');
    const balanceTotal = document.getElementById('balance-total')
    const totalExpense = document.getElementById('total-expense')
    const totalExpenseCalculation = parseInt(foodCostTotal.value) + parseInt(rentCostTotal.value) + parseInt(clothingCostTotal.value)
    console.log(totalExpense.innerText, incomeTotal.value)
    if (incomeTotal.value <= 0 || foodCostTotal.value < 0 || rentCostTotal.value < 0 || clothingCostTotal.value < 0) {
        alert("Please enter Positive Number ");
        return
    }
    else if (incomeTotal.value == '' || foodCostTotal.value == '' || rentCostTotal.value == '' || clothingCostTotal.value == '') {
        alert("Plese fill all the field")
        return
    }
    else if (totalExpenseCalculation > parseInt(incomeTotal.value)) {
        alert('You do not have sufficient money')
        return
    }

    else {
        // Costing of food

        const foodCostAmount = getInputValue();
        const incomeTotalText = incomeTotal.value;
        const incomeTotalAmount = parseFloat(incomeTotalText);
        incomeTotalAmount.innerText = incomeTotal;

        const rentCostTotalText = rentCostTotal.value;
        rentCostTotal.innerText = rentCostTotalText;
        const rentCostAmount = parseFloat(rentCostTotalText);

        // Costing for shopping or clothing 

        const clothingCostTotalText = clothingCostTotal.value;
        clothingCostTotal.innerText = clothingCostTotalText;
        const clothingCostAmount = parseFloat(clothingCostTotalText);

        //  Total amount of cost calculation

        const totalExpenseAmount = foodCostAmount + rentCostAmount + clothingCostAmount;
        totalExpense.innerText = totalExpenseAmount;

        // Finding Total income field

        // const balanceTotalText = balanceTotal.innerText;
        // const balanceTotalAmount = parseFloat(balanceTotalText);
        const balanceRemaining = incomeTotalAmount - totalExpenseAmount;
        balanceTotal.innerText = balanceRemaining;

    }


    // Finding total balance field


})

// Savings fiels 

document.getElementById('savings-btn').addEventListener('click', function () {
    const incomeTotal = document.getElementById('income-total');
    const foodCostTotal = document.getElementById('foodcost-input');
    const rentCostTotal = document.getElementById('rentcost-input');
    const clothingCostTotal = document.getElementById('clothingcost-input');
    const balanceTotal = document.getElementById('balance-total')
    const savingsTotal = document.getElementById('savings-total')
    const savingsInput = document.getElementById('savings-input')
    const totalExpense = document.getElementById('total-expense')
    const remainingTotal = document.getElementById('remaining-total')
    // const totalExpenseCalculation = parseInt(foodCostTotal.value) + parseInt(rentCostTotal.value) + parseInt(clothingCostTotal.value)
    // const incomeTotalAmountCalc = parseInt(incomeTotal.value);
    // const balanceRemainingCalc = incomeTotalAmountCalc - totalExpenseCalculation;
    // const remainingTotalBalanceCalculation = balanceRemainingCalc - parseInt(savingsInput);
    // console.log(parseInt(balanceRemainingCalc))
    // console.log(remainingTotal, parseInt(savingsTotal.value));



    // const remainingTotalCalculation = parseInt(remainingTotal);
    // const balanceTotalCalculation= parseInt(balanceTotal);
    // console.log(remainingTotal, balanceTotal, savingsTotal, balanceRemaining)
    if (savingsInput.value < 0) {
        alert("Please enter Positive Number");
        return
    }

    // const foodCostTotal = document.getElementById('foodcost-input');
    const foodCostTotalText = foodCostTotal.value;
    foodCostTotal.innerHTML = foodCostTotalText;
    const foodCostAmount = parseFloat(foodCostTotalText);

    // Costing for room rent 
    // const rentCostTotal = document.getElementById('rentcost-input');
    const rentCostTotalText = rentCostTotal.value;
    rentCostTotal.innerText = rentCostTotalText;
    const rentCostAmount = parseFloat(rentCostTotalText);

    // Costing for shopping or clothing 
    // const clothingCostTotal = document.getElementById('clothingcost-input');
    const clothingCostTotalText = clothingCostTotal.value;
    clothingCostTotal.innerText = clothingCostTotalText;
    const clothingCostAmount = parseFloat(clothingCostTotalText);
    // const totalExpense = document.getElementById('total-expense')
    const totalExpenseAmount = foodCostAmount + rentCostAmount + clothingCostAmount;
    totalExpense.innerText = totalExpenseAmount;
    // const incomeTotal = document.getElementById('income-total');
    const incomeTotalText = incomeTotal.value;
    const incomeTotalAmount = parseFloat(incomeTotalText);
    incomeTotalAmount.innerText = incomeTotalAmount;

    // Finding total balance field

    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const balanceRemaining = incomeTotalAmount - totalExpenseAmount;
    balanceTotal.innerText = balanceRemaining;


    // savingsInputValue.value = savingsInput;
    const savingsInputText = savingsInput.value;
    const savingsInputAmount = parseFloat(savingsInputText);
    const savingsInputValue = incomeTotalAmount * (savingsInputAmount / 100);
    savingsInputValue.value = savingsInput;
    // console.log(savingsInputValue);



    const savingsTotalText = savingsTotal.innerText;
    const savingsTotalAmount = parseFloat(savingsTotalText);
    savingsTotal.innerText = savingsInputValue;


    // const remainingTotal = document.getElementById('remaining-total')
    const remainingTotalText = remainingTotal.innerText;
    const remainingTotalAmount = parseFloat(remainingTotalText);

    // console.log(remainingTotal)
    const remainingTotalBalance = balanceRemaining - savingsInputValue;
    // console.log()
    remainingTotal.innerText = remainingTotalBalance;
    // if (savingsTotal.value <= balanceTotal.value) {
    //     return savingsTotal;
    // }
    // else {
    //     alert('no balance')
    // }

});
