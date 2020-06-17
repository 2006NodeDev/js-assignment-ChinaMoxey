/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

const student = {
    fname: 'China',
    lname: 'Moxey',
    age: 22, 
}
function objectProperties(someObj) {
    
    for(const key in someObj){
     console.log(`${key} = ${student[key]}`);
    }

}
console.log(objectProperties(student));
