//async 
let promise1 = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve('promise 1 resoved')
    },2000)
});

let promise2 = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve('promise 2 resoved')
    },3000)
});

let promise3 = new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve('promise 3 resoved')
    },4000)
});

async function asynFunc(){
    let result1 = await promise1;
    console.log(result1);

    let result2 = await promise2;
    console.log(result2);

    let result3 = await promise3;
    console.log(result3);
}
asynFunc();