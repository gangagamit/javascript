//call method
// let person = {
//     print: function(city){
//         return this.name + ""+ this.surname + "\n" + city;
//     }
// };

// let v = {
//     name: "virat",
//     surname: "kohli"
// }
// console.log(person.print.call(v,"surat"));

//Apply method

// let person = {
//     print: function(city){
//         return this.name + ""+ this.surname + "\n" + city;
//     }
// };

// let v = {
//     name: "virat",
//     surname: "kohli"
// }
// console.log(person.print.apply(v,['surat']));

let person3 = {
    firstName : "john",
    lastName : "Doe",
    fullName : function(){
        return this.firstName + "" + this.lastName;
    }
}

let member = {
    firstName : "ganga",
    lastName : "gamit"
}

let fullName = person3.fullName.bind(member);
console.log((member));

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//             return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);

