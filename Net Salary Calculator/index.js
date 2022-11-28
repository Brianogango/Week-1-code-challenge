//getting input from the html input
const grossIncome=document.getElementById('grossIncome');
//dtackling the code challenge
function calculate(){
const grossIncome=document.getElementById('grossIncome').value;
const personalRelief=document.getElementById('personalRelief').value;
const PensionFundContribution=document.getElementById('PensionFundContribution').value;
const disabilityExemption=document.getElementById('disabilityExemption').value;
const housingRelief=document.getElementById('housingRelief').value;

  //Paye calculation
let paye;
if (grossIncome <= 24000) {
    paye=(grossIncome*0.1);
}
else if (grossIncome >=24,001 && grossIncome <=32,333) {
    paye=(grossIncome*0.25);
}
else if(grossIncome >32,333){
    paye=(grossIncome*0.3);
}
else{
    paye=0;
}
//NHIF deductions calculation
 let nhifAmount;

if (grossIncome >= 0 && grossIncome <= 5999) {
    nhifAmount= 150;
} else if ( grossIncome>= 6000 && grossIncome <= 7999) {
    nhifAmount= 300;
} else if (grossIncome >= 8000 && grossIncome<= 11999) {
    nhifAmount= 400;
} else if (grossIncome >= 12000 && grossIncome <= 14999) {
     nhifAmount= 500;
} else if (grossIncome >= 15000 && grossIncome <= 19999) {
     nhifAmount= 600;
} else if (grossIncome >= 20000 && grossIncome <= 24999) {
    nhifAmount= 750;
} else if (grossIncome >= 25000 && grossIncome <= 29999) {
    nhifAmount= 850;
} else if (grossIncome >= 30000 && grossIncome <= 34999) {
    nhifAmount= 900;
} else if (grossIncome >= 35000 && grossIncome <= 39999) {
    nhifAmount= 950;
} else if (grossIncome >= 40000 && grossIncome <= 44999) {
    nhifAmount= 1000;
} else if (grossIncome>= 45000 && grossIncome <= 49999) {
    nhifAmount= 1100;
} else if (grossIncome >= 50000 && grossIncome <= 59999) {
     nhifAmount= 1200;
} else if (grossIncome >= 60000 && grossIncome <= 69999) {
     nhifAmount= 1300;
} else if (grossIncome >= 70000 && grossIncome <= 79999) {
    nhifAmount= 1400;
} else if (grossIncome >= 80000 && grossIncome <= 89999) {
    nhifAmount= 1500;
} else if (grossIncome >= 90000 && grossIncome <= 99999) {
    nhifAmount= 1600;
} else if (grossIncome >= 100000) {
     nhifAmount= 1700;
} else {
     nhifAmount= 0;
}
// NSSF calculations

let nssfAmount;
if (grossIncome <6000) {
    nssfAmount=0.06* grossIncome;
}
else{
    (grossIncome>=6,001 && grossIncome<= 18,000)
    nssfAmount= 0.06*grossIncome;
}
//Logging the results
console.log(paye);
console.log(personalRelief);
console.log(PensionFundContribution);
console.log(disabilityExemption);
console.log(housingRelief);
console.log(nhifAmount);
console.log(nssfAmount);

//displaying the results
incomeDisplay.innerText=`${paye}`;
reliefDisplay.innerText=`${personalRelief}`;
pensionDisplay.innerText=`${PensionFundContribution}`;
disabilityDisplay.innerText=`${disabilityExemption}`;
housingDisplay.innerText=`${housingRelief}`;
nssfdeductionDisplay.innerText=`${nssfAmount}`;
nhifdeductionDisplay.innerText=`${nhifAmount}`;

netsallary.innerText=`(${grossIncome}-(${paye}+${nhifAmount}+${nssfAmount}))`;
}
