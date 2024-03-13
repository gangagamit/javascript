let display = document.getElementById('cal');

let buttons = document.querySelectorAll('button');

let string = '';
let buttonsArray = Array.from(buttons);
//array to node convert

buttonsArray.forEach(function(btn){
    btn.addEventListener('click',function(event){
      if(event.target.innerHTML == 'DEL'){
        string = string.substring(0,string.length-1);
        display.value = string;
      }
      else if(event.target.innerHTML == 'AC'){
        string = '';
        display.value = string;
      }
      else if(event.target.innerHTML == '='){
        string = eval(string);
        display.value = string;
      }
      else{

          string += event.target.innerHTML;
          display.value = string;
      }

    });
}); 