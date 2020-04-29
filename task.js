
//1 
var person = {"name":"Aljona", "age": 27, "sex": "female"};
console.log(person);

function getBirthYear(personAge){
    return 2020 - personAge;
};

console.log(getBirthYear(person.age));