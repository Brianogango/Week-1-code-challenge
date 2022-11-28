//getting the value fro the input field in the html document
    const numericGrade=document.getElementById('numericGrade');
    
//problem execution
    function convert() {
      const numeric = parseInt(numericGrade.value);
      let grade;
      if (numeric >100) {
        grade='Please enter a mark between 0-100';
      }
      else if (numeric >79) {
        grade='A';
      }
      else if(numeric >60 && numeric <=79){
        grade='B'
      }
      else if(numeric >49 && numeric <=60){
        grade='C'
      }
      else if(numeric >40 && numeric <=49 ){
        grade='D'
      }
      else(
        grade='E'
      )
      //logging in the grades
      console.log(grade);
      //displaying the grades on the html page
      gradeDisplay.innerText=`${grade}`;
    }
