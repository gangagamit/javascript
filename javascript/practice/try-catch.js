// try{
//     console.log("start of try");
//     a();
//     console.log("end of try");
// }
// catch(error){
//     console.log(error);
// }
// //a is not define

// setTimeout (function(){
//     try{
//         a();
//     }
//     catch(error){
//         console.log("error has occurred")
//     }
// },7000);

//use strict method and try catch method
'use strict';
setTimeout(function(){
    try{
        let a=15;
        let b=25;

        if(a>b)
        {
            console.log("a is largest value");
        }
        else{
            console.log("b is largest value")
        }
    }
    catch(error){
        console.log("error has occurred" + error);
    }
},2000);



