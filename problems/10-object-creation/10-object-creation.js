/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Creating an object using object literal syntax
const person = {
    name: 'China Moxey',
    age: 22
};
console.log(person);
//Creating an object using constructor function
function personTwo(name,age){
    this.name = name;
    this.age = age;
}
const me = new personTwo('China Moxey',22);
console.log(me);
//Creating an object using ES6 classes
class PersonThree{
    constructor(fullname, realage){
        this.name = fullname;
        this.age = realage;
    }
}
const objperson = new PersonThree('China Moxey', 22);

console.log(objperson.name);
console.log(objperson.age);