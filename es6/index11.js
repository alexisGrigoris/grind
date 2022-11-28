/*
SPREAD
OPERATOR
*/

//array example
let contacts = ["Mary", "Joel", "Danny"];
const friends = [...contacts,'Julian'];
contacts.push("Marco");
console.log(contacts);
console.log(friends);






//object example
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}
let student = {
    ...person,
    sex:"Male"
}

console.log(student);