
//1 
var person = {"name":"Aljona", "age": 27, "sex": "female"};
console.log(person);

//2
function getBirthYear(personAge){
    var birthYear = 2020 - personAge;
    if(birthYear<2000){
        console.log("Not Millenial");
    }else{
        console.log("Millenial");
    }

};

getBirthYear(person.age);

