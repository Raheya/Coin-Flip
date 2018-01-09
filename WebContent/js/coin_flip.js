let operators = ['+','-','*','/'];
let numbers = [1,2,3,4,5,6,7,8,9];
const reg = new RegExp('^[0-9]+$');
let res = 0;
let indexNumbers = 0;
let tempOperators;
let tempNumbers;
let events=0;
let riposte =2;
let output = document.getElementById('output');
let input = document.getElementById('inpt_value');
const coinFlip = (value)=>{
  events++;

  if(reg.test(value)){
    for(let x = 0; x<operators.length; x++){
      if(res === 0){
        for (let number of numbers) {
          indexNumbers++;
          if(events%riposte==0){
            res += eval(value+operators[x]+number)*2/events*riposte;
          }else{
            res += eval(value+operators[x]+number)*2/events;
          }
          if(res>0 & res < 1000000){
            output.innerHTML = Math.round(res * 100) / 100;
            numbers = shuffleArray(numbers,indexNumbers,tempNumbers);
          }

        }
      }
    }

    res = 0;
  }else{
    alert("Please enter numeric value");
    input.value = '';
    input.focus();
  }
}

function shuffleArray(array, index, temp){
  if(index<array.length){
    temp =  array[index];
    array[index] = array[array.length-1];
    array[array.length-1] = temp;
  }else{
    array = [3,8,5,4,7,6,1,2,9];
  }

  return array;
}

function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        coinFlip(input.value);
    }
}
