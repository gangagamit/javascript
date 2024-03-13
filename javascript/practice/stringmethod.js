//string-length

// let text = "Hello world";

// let length = text.length;

// console.log(length);

//string slice

// let text1 = "Apple,Banana,kiwi";
// let tt = text1.slice(4);
// console.log(tt);

// let data = "Apple,Banana,kiwi";
// let data1 = data.slice(-12);
// console.log(data1);

// let str = "Aple,Banana,kiwi";
// let str1 = str.slice(-11,-6);
// console.log(str1);

//string substring

// let str2 = "Apple,Banana,wqdwhsud,kiwi";
// let str3 = str2.substring(7,13);
// console.log(str3);

//string substr

// let str4 = "Apple,banana,kiwi,orange";
// let str5 = str4.substr(7,13);
// console.log(str5);

//string replace

let str6 = "Apple,banana,kiwi";
let str7 = str6.replace("banana","dwyed");
console.log(str7);

//string replacAll

let str8 = "i like to learn english language, english is a foreign language";
let str9 = str8.replaceAll("english","franch");
console.log(str9);

//reverse

let str = "i like to learn english language";

 let str1 =str.split(" ").forEach(function(string){
    string.split(" ").reverse().join;
    console.log(str1);
})
