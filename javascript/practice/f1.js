/*
function f1(a,b) {
    console.log(a*b);
}
f1(2,3);
*/
//hoisting
/*
{
    f2(5,9);
    function f2(c,d) {
        console.log(c/d);
    }
}
*/
//anonymous function-->function without name
/*
const x = function(a,b){
    console.log(a**b);
}
const y = x(5,4);
*/

//self invoking function
/*
(function (){
    let x = "hello world";
    console.log(x);
})();
*/
//Arrow function
// let add = (a,b)=>{
//     return a + b;
// }
// console.log(add(4,5));

// let multi = (a,b)=> a*b;
// console.log(multi(5,7));

//function constructor

let first = new Function("a","b","return a/b");
console.log(first(48,2));