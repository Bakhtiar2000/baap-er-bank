
    //Step-1: Get the withdraw amount from withdraw input field
    document.getElementById('btn-withdraw').addEventListener('click', function(){
        const withdrawField= document.getElementById('withdraw-field');
        const newWithdrawAmount= parseFloat(withdrawField.value);

    //Step-2: Clear the deposit field and check valid number
    withdrawField.value='';
    if(isNaN(newWithdrawAmount))
    {
        alert('Please provide a valid number');
        return;
    }

    //Step-3: Get the current withdraw total
    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotal= parseFloat(withdrawTotalElement.innerText);

    //Step-4: Get the current balance total
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotal= parseFloat(balanceTotalElement.innerText);

    //Step-5: Show alert message if balance is not sufficient
    if(newWithdrawAmount> previousBalanceTotal)
    {
        alert("Baap er bank e eto taka nai");
        return; /* This statement ends the function here. So, step-6 and 7 will not be executed */
    }

    //Step-6: Set the current withdraw total
    const currentWithdrawTotal= previousWithdrawTotal+ newWithdrawAmount;
    withdrawTotalElement.innerText= currentWithdrawTotal;

    //Step-7: Set the current balance total
    const currentBalanceTotal= previousBalanceTotal- newWithdrawAmount;
    balanceTotalElement.innerText= currentBalanceTotal;

    });
