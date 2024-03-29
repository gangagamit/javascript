/*1. Write a JS function that reverse a number. 
Example x = 15438;
Expected Output : 83451*/

{
    let x = 15438;
    y = x.toString();
    z = y.split("");
    m = z.reverse();
    n = m.join('');
    r = parseInt(n);    
    console.log(r);
}
/*2. Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

{
    let a = 'webmaster';
    b = a.split("");
    c =b.sort();
    d = c.join('');
    console.log(d);
}

/*3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'*/

function uppercase(str) { 
    let array1 = str.split(' '); 
    console.log(array1); 
    let  newarray1 = []; 
    for (var x = 0; x < array1.length; x++) { 
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1)); 
    } 
    return newarray1.join(' '); 
  } 
  console.log(uppercase("the quick brown fox"));

/*4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'*/
{
  Longword( 'Web Development Tutorial '); 
  function Longword(str){ 
      let words = str.split(' '); 
      console.log(words); 
      let maxLength = 0; 
      let longword = ""; 
      for (let i = 0; i < words.length; i++) 
       { 
        if (words[i].length > maxLength) { 
          maxLength = words[i].length; 
          longword = words[i]; 
        } 
      } 
      console.log(longword); 
  }
}
/*5. Write a JavaScript function that checks whether a number is perfect.*/


let perfect = (a) =>{
  let n = 0;
  for(let i = 1; i < a; i++){
      if(a % i == 0)
      {
          n = n + i;
          console.log(i);
      }
  }
  console.log(n);
  if(a == n){
      console.log("number is perfact");
  }else{
      console.log("number is not perfact");
  }
}
perfect(7);