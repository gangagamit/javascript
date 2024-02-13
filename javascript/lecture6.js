
{

    let x;
    console.log(x);
    console.log(typeof(x));
}
{
    // const x; // const x declaration x ni value initialize karvi pade
}
{
    // console.log(x);
    // const x = 4; // referenceError :- pela x in value declare ane initialize karvi pade pachi console.log karvanu
}
{
    // console.log(y);
    // var y = 4; // undefine show 
}
{
    let x = "this is javascript" + 42;
    console.log(x);
    console.log(typeof(x));
}
{
    let x = 42 + "this is javascript";
    console.log(x);
    console.log(typeof(x));
}

{
    const x = "37" + 7;
    console.log(x);
    console.log(typeof(x));
    //output:- 377 type:- string
}
{
    const y = "37" - 7
    console.log(y);
    console.log(typeof(y));
    //outpt:- 30 type:-number
}
//convert string to number
{
    let z = false;
    console.log(Number(z));
    console.log(String(z));
    console.log(Boolean(z));
    // output:- 0 false false
}
{
    let x = true;
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
    //output:- 1 true true
}
{
    let x = 0;
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
   // output:- 0 0 false
}
{
    let x = 1;
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
     //output:- 1 1 true
 }
 {
    let x = "000"
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));

    let y = "00"
    console.log(Number(y));
    console.log(String(y));
    console.log(Boolean(y));
    
    let z = "0"
    console.log(Number(z));
    console.log(String(z));
    console.log(Boolean(z));    
}
{
    let a = "111"
    console.log(Number(a));
    console.log(String(a));
    console.log(Boolean(a));
    let b = "11"
    console.log(Number(b));
    console.log(String(b));
    console.log(Boolean(b));
    let c = "1"
    console.log(Number(c));
    console.log(String(c));
    console.log(Boolean(c));
}
{
    let x = undefined;
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
}
{
    let y = NaN;
    console.log(Number(y));
    console.log(String(y));
    console.log(Boolean(y));
}
{
    let z = null;
    console.log(Number(z));
    console.log(String(z));
    console.log(Boolean(z));
}
{
    let x = Infinity;
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = -Infinity;
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = "";
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = "Hello";
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = [ ];
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = ["Hello"];
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = [10, 50 , 30];
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = [100];
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  {
    let x = ["Hello" , "Hi"];
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
  
  
  
  {
    let x = {};
    
    console.log(Number(x));
    console.log(String(x));
    console.log(Boolean(x));
  }
