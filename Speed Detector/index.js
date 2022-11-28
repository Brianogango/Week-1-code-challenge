//getting input value from user through the input field
const speedDetector=document.getElementById('speedDetector');
//executing the code
function calculate(){
const speedDetector=document.getElementById('speedDetector').value;
let report;
if(speedDetector<=70){
report='OK';
}else{
    report=('You have earned points:'+((speedDetector-70)/5))
} if (((speedDetector-70)/5)>12) {
    report='licence suspended'
}
//Logging the results
console.log(report);
//displaying the results
speedDetectorDisplay.innerText=`${report}`;
}
