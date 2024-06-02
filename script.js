document.getElementById('RegisterForm').addEventListener('submit', function(event) {
    event.preventDefault();



    const income = parseFloat(document.getElementById('income').value);
    const currentAmount = parseFloat(document.getElementById('currentAmount').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const credictHistory = document.getElementById('creditHistory').value;
    const lastDepositDate = new Date(document.getElementById('lastDepositDate').value);
    const lastLoanDate = new Date(document.getElementById('lastLoanDate').value);
    const loanRepaymentPeriod = parseInt(document.getElementById('loanRepaymentPeriod').value);
    const accountType = document.getElementById('accountType').value; 
    




    let score = 0;

    const maxLoanAmount = income *0.45;

    if (currentAmount >= loanAmount) {
        score += 10;
    } else {
        score -= 10;
    }

    if (credictHistory === 'yes') {
        score += 10;
    }

    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() -1);
    if (lastDepositDate > oneMonthAgo) {
        score +=5;
    }


    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() -6);
    if (lastLoanDate < sixMonthsAgo) {
        score += 10;
    }

    if (loanRepaymentPeriod < 6) {
        score += 5;
    }


    if (accountType === 'current') {
        score +=10;
    }else if (accountType === 'savings') {
        score += 5;
    }

    let resultText;
    if (score > 30) {
      resultText = `Congrats Awarded loan Amount: N${maxLoanAmount.toFixed(2)}. You are qualified for loan with a score  of ${score}.`;
    } else {
        resultText = `Sadly, you dont qualify for the loan. your score is ${score} which is too low, you need a score above 30. `;
    }


    document.getElementById('result').innerText = resultText;



}); 