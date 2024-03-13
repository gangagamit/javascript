
{

    const obj1={
        Name: "Hello",
        Age:16
    }
    const obj2={
        Name: "Hello",
        Age:16
    }
    console.log(obj1===obj2);//false
}
{
    var a ="hello";
    var sum=0;
    for(var i = 0; i<a.length;i++){
    sum += (a.charCodeAt(i) - 'a'.charCodeAt(0));
    }
    console.log(sum); //47
}
{
    function show(...args){
        let sum = 0;
        for(let i in args)
        sum += args[i];
        console.log("total is:",sum);
    }
    show(40,11,5);
}
{
    let a =[11,22,33,44];
    let b = [a];
    b.push(66);
    console.log(a.length===b.length);
}
{
    var fruits = ["apple","mango","watermalon","orange"];
    var fruits_len = fruits.map((ele)=>ele.length);
    console.log(fruits_len);
}
{
    let chars =['A','B','A','C','B'];
    let uniqueChars=[new Set(chars)];
    console.log(uniqueChars);
}