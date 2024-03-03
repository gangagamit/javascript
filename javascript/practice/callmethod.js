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

let person = {
    print: function(city){
        return this.name + ""+ this.surname + "\n" + city;
    }
};

let v = {
    name: "virat",
    surname: "kohli"
}
console.log(person.print.apply(v,['surat']));