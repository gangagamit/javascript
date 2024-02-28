//object
let person = {
    firstName : 'Ganga',
    lastName  : 'Gavit',
    age       : '25',
    address   : {
        'city': 'surat',
        'state': 'Gujarat'
    },
    hobbies   :['reading','music','playing cricket']
};
console.log(person);

//update value

person.firstName = 'Mamta';
console.log(person.firstName);

//Add key and value

person.email = 'mamta07@gmail.com';
console.log(person);

//delete key and value

delete person.age;
console.log(person);

//key and value exits or not

console.log(person.age); //undefined
//false and true me ans

console.log('age' in person);

console.log(person.hobbies);

//using function
let person1 = {
    firstName : 'Ganga',
    lastName  : 'Gavit',
    age       : '25',
    address   : {
        'city': 'surat',
        'state': 'Gujarat'
    },
    hobbies   :['reading','music','playing cricket'],
    salary    : function (){
                return 20000;
    }
};
console.log(person1);
console.log(person1.salary());