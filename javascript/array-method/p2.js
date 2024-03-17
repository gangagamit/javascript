//Array-lenght
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject);
    // console.log(subject.length);
}
//Array-push
{
    // let subject = ['maths','physics','chemistry','English'];
    // subject.push('sanskrit');
    // console.log(subject);
}
//Array-unshift
{
    // let subject = ['maths','physics','chemistry','English'];
    // subject.unshift('sanskrit','Economics');
    // console.log(subject);
}
//Array-pop
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject);
    // subject.pop();
    // console.log(subject);
}
//Array-shift
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject);
    // subject.shift();
    // console.log(subject);
}
//Array-splice
{
    // let subject = ['maths','physics','chemistry','English','economics','social','science'];
    // console.log(subject);
    // subject.splice(1,3);
    // console.log(subject);
}
//All array blank
{
    // let subject = ['maths','physics','chemistry','English','economics','social','science'];
    // console.log(subject);
    // subject.length = 0;
    // console.log(subject); 
}
//Array-indexOf
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject);
    // let position = subject.indexOf('English');
    // console.log(position);
}
//Array-split
{
    // let text = 'Hello ! mister Harvy';
    // let text1 = text.split(' ');
    // console.log(text1);
}
//Array-join
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject); 
    // let subject1 = subject.join(' - ');
    // console.log(subject1);
}
//Array-concat
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject); 
    // let subject1 = ['sanskrit','economics','science'];
    // console.log(subject1);
    // let subject2 = subject.concat(subject1);
    // console.log(subject2);
}
//Array-sort
{
    // let subject = ['maths','physics','chemistry','English'];
    // console.log(subject);
    // subject.sort();
    // console.log(subject);
}
//Array numeric sort
{
    // let point=[40,100,25,14,12,1,2,4];
    // point.sort(function(a,b){
    //     return a-b;
    // });
}
//Array Reverse
{
    // const fruits = ["banana","orange","kiwi","apple","mango"];
    // fruits.sort();
    // fruits.reverse();
    // console.log(fruits);
}
//Array Max
{
    // function myfunction(arr){
    //     return Math.max.apply(null,arr);
    // }
    // const points = [40,4,521,475,15874,335545,2,0];
    // myfunction(points);
}
//Array min
{
    // function myfunction(arr){
    //     return Math.min.apply(null,arr);
    // }
    // const point=[40,12,25,147,28,2,-5];
    // myfunction(point);
}
//Array forEach
{
    // const number = [45,4,9,16,25];
    // let text = " ";
    // number.forEach(myfunction);
    // function myfunction(value,index,array){
    //     text += value + " ";
    // }
}
//Array map

// const number1 = [45,4,9,16,25];
// const number2 = number1.map(myfunction);
// function myfunction(value,index,array){
//     return value*2;
// }
//90 8 18 32 50

//Array filter
// const number = [45,14,25,35,10];
// const num = number.filter(myfunction);
// function myfunction(value,index,array){
//     return value > 18;
// }//45,35,25

//Array reduce
{
    // const number=[45,4,9,16,25];
    // const sum = number.reduce(function(total,val){
    //     return total + val;
    // },0);//99
}
{
    // let data = ["z","r","a","c","k","n"];
    // console.log(data);
    // let dataSort = data.sort();
    // console.log(dataSort);
    // let data_1 = [5,6,8,2,1,3,0,245];
    // console.log(data_1);
    // let dSort = data_1.sort();
    // console.log(dSort);

    // let numbers = [10,25,14,35,15,85,90];

    // function findNum(num){
    //     return num > 18;
    // }
    // console.log(numbers.some(findNum));

    // let numbers = [10,25,14,35,15,85,90];

    // function findNum(num){
    //     return num > 18;
    // }
    // console.log(numbers.every(findNum));

    const num = [45,4,9,16,25];

    function myfunction(value,index,array){
        return value > 18
    }
    console.log(num.filter(myfunction));
}

{
    const num = [1,2,5,7,10];

    const sum = num.reduce(function (accum,curr){
        return accum + curr
    });
    console.log(sum);
}
{
    // (function (a){
    //     return (function(){
    //         console.log(a);
    //         a=6;

    //     })()
    // })(21);

    console.log("start");
    setTimeout(()=>{
        console.log("a");
    },0);
    Promise.resolve("b").then((op)=>console.log(op))
    console.log("end");
}
{
    // let x = 150;
    // if(x>100)


    //     let x =1;
    //     console.log(x);

}
