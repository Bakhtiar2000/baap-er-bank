document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step-2: Get the deposit amount from deposit input field
    const depositField= document.getElementById('deposit-field');
    // const newDepositAmountString= depositField.value;
    const newDepositAmount= parseFloat(depositField.value);

    //Step-3: Clear the deposit field and check valid number
    depositField.value='';
    if(isNaN(newDepositAmount))
    {
        alert('Please provide a valid number');
        return;
    }

    //Step-4: Get the current deposit total
    const depositTotalElement= document.getElementById('deposit-total');
    // const previousDepositTotalString= depositTotalElement.innerText;
    const previousDepositTotal= parseFloat(depositTotalElement.innerText);

    //Step-5: Set the current deposit total
    const currentDepositTotal= previousDepositTotal+ newDepositAmount;
    depositTotalElement.innerText= currentDepositTotal;

    //Step-6: Get the current balance total
    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotal= parseFloat(balanceTotalElement.innerText);

    //Step-7: Set the current balance total
    const currentBalanceTotal= previousBalanceTotal+ newDepositAmount;
    balanceTotalElement.innerText= currentBalanceTotal;


    });

