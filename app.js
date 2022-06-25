document.addEventListener('DOMContentLoaded', (e)=>{
	e.preventDefault();

  const submit = document.querySelector('#submitting');
  const output = document.querySelector('.output');
  let random = document.getElementById('randomize');

  function calculateFactorize(inputValue) {
    let maxNum = inputValue;
    for(let i = maxNum-1; i>=1; i--){
      maxNum = maxNum * i;
    }
    return maxNum;
  }

  submit.addEventListener('click', function outputFactorize(){
    let inputValue = document.getElementById("factorNum").value;
    let f = calculateFactorize(inputValue);
    if(inputValue < 0){
        output.innerHTML=`Must be a positive number`;
    } else if (inputValue > 170){
        output.innerHTML=`Please enter only 1 to 170.`;
    } else if (inputValue == 0){
        output.innerHTML=`The factorial of the number 0 is: 1`;
    } else if (isNaN(inputValue)){
        output.innerHTML="Oh Hello! Please enter a number.";
    } else {
    output.innerHTML=`The factorial of the number <strong>${inputValue}</strong> is: ${f}` ;
    }
  });

  random.addEventListener('click', function outputFactorize(){
      let inputValue = document.getElementById("factorNum");
      let randomResult = Math.floor(Math.random() * 170);
      let f = calculateFactorize(randomResult);
      if (randomResult == 0){
        output.innerHTML=`The factorial of the number <strong style="color:#ee5670">${randomResult}</strong> is: 1`;
      } else{
        output.innerHTML=`The factorial of the number <strong style="color:#ee5670">${randomResult}</strong> is: <strong style="color:#ee5670"><u>${f}</u></strong>`;
      }
      inputValue.value = randomResult;
  });

  clear.addEventListener('click', function(){
    let inputValue = document.getElementById("factorNum");
    inputValue.value = '';
    output.innerHTML = '';
  });

}); 